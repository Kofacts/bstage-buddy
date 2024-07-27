import { Preferences } from '@capacitor/preferences';
import { Clipboard } from '@capacitor/clipboard';
import { Toast } from '@capacitor/toast';

export function random(length = 8, number = false) {
  var result = '';
  var characters = number ? "1234567890" : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function optional(obj, key, defaultValue = null) {
  // if falsy value was passed, return immediately
  if (!obj) return isFunction(defaultValue) ? defaultValue(obj, key) : defaultValue;

  let localValue = obj;
  let keys = key.split('.');

  for (let i of keys) {
    localValue = localValue[i];

    if (!localValue) break;
  }

  return localValue ? localValue : (isFunction(defaultValue) ? defaultValue(obj, key) : defaultValue);
}

export const localStore = {
  set(path, val) {
    let obj = JSON.parse(window.localStorage.getItem('$store') || '{}')

    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastObj = keys.reduce((obj, key) =>
      obj[key] = obj[key] || {},
      obj);
    lastObj[lastKey] = val;
    // Return the last object in the hierarchy:
    try {
      window.localStorage.setItem('$store', JSON.stringify(obj))
      Preferences.set({key : '$store', value: JSON.stringify(obj)})
    } catch (e) {
      if (e.code === "22" || e.code === "1024") {
        // remove some data to prevent offline mode
        let user = localStore.get('users.user')
        user.t = []
        localStore.set('users.user', user)
      }
    }
  },
  get(key, defaultVal) {
    let obj = JSON.parse(window.localStorage.getItem('$store') || '{}')
    let value = window.localStorage.getItem(key)
    let capacitorValue = window.localStorage.getItem(`CapacitorStorage.${key}`)
    if(capacitorValue) {
      window.localStorage.setItem(key, capacitorValue)
    }
    return value || optional(obj, key, window.localStorage.getItem(`CapacitorStorage.${key}`) || defaultVal)
  },
}

export function numberWithCommas(x) {
  return parseFloat(String(isFinite(x) ? x : '0.00')).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

export function toTitleCase(str) {
  return (str || '').replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export function truncate(str, length = 255, delimiter = '...') {
  if (str && str.length > length) {
    str = `${str.substring(0, length)}${delimiter}`;
  }

  return str;
}

export function copyToClipboard(text) {
  Clipboard.write({ string: text }).then(() => {
      Toast.show({
        text: "Copied!",
      });
  })
}

export function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function parseScript(script) {
  const pages = script.split(/Page \d+/).filter((page) => page.trim() !== '')
  let parsedScript
  parsedScript = {
    title: script.split('\n')[1],
    pages: [],
  }

  pages.forEach((page, index) => {
    const lines = page.trim().split('\n')
    let parsedPage
    parsedPage = { text: page.trim(), number: index + 1, lines: [] }

    let currentCharacter = ''
    let currentDialogue = ''

    lines.forEach((line, i) => {
      let splitLine = line
        .replace(/\([^)]*\)/g, '')
        .trim()
        .split(' ')
      let inBracket = line.match(/\[([^\]]*)\]/)?.[1]
      let upperCaseOnly = /^[A-Z\s!-/:-@[-`{-~]+$/.test(line)
      let firstPart = splitLine[0]
      let characterMatch =
        splitLine.length > 1 &&
        (firstPart.includes(':') || splitLine[1] === ':') &&
        !line.trim().startsWith('[')
          ? firstPart.replace(':', '')
          : null

      if (!characterMatch && inBracket) {
        let splitComma = inBracket.split(',')
        let nextLine = lines.find((s, i2) => i2 > i && s.trim().length)
        if (
          (nextLine?.startsWith('[') && nextLine?.endsWith(']')) ||
          (nextLine?.startsWith('(') && nextLine?.endsWith(')')) ||
          (nextLine?.startsWith('{') && nextLine?.endsWith('}'))
        ) {
          characterMatch = null
          //currentCharacter = ''
        } else {
          characterMatch = splitComma[0].trim()
        }
      }

      if (!characterMatch && upperCaseOnly) {
        let name = line.replace(/\([^)]*\)/g, '').trim()
        if (name.split(' ').length < 2) {
          characterMatch = name
        }
      }

      if (characterMatch) {
        if (currentCharacter.trim().length && currentDialogue.trim().length) {
          // @ts-ignore
          parsedPage.lines.push({
            character: { name: currentCharacter },
            content: currentDialogue.replace(/\[.*?\]/g, '').trim(),
          })
        }
        currentCharacter = characterMatch
        let dialogue = line.split(':')
        dialogue.shift()
        currentDialogue = dialogue.join(':').trim()
      } else if (
        line.trim().length > 2 &&
        (line.startsWith('=') || line.startsWith('(') || line.startsWith('{'))
      ) {
        currentDialogue += line.trim()

        if (currentDialogue && (line.startsWith('=') || line.endsWith(')'))) {
          // @ts-ignore
          parsedPage.lines.push({
            character: { name: '' },
            content: line
              .replace(/\[.*?\]/g, '')
              .replace('=', '')
              .trim(),
          })
          currentCharacter = ''
          currentDialogue = ''
        }
      } else if (line.trim().length > 2 && (line.endsWith(')') || line.endsWith('}'))) {
        currentDialogue += line.trim()

        // @ts-ignore
        parsedPage.lines.push({
          character: { name: '' },
          content: currentDialogue.replace(/\[.*?\]/g, '').trim(),
        })
        currentCharacter = ''
        currentDialogue = ''
      } else if (currentCharacter && !currentDialogue.includes('END OF ')) {
        currentDialogue += `${currentDialogue.endsWith('\n') ? '' : '\n'}${line
          .replace(/\([^)]*\)/g, '')
          .replace(/\[.*?\]/g, '')
          .trim()}`
      }
    })

    if (currentCharacter.trim().length && currentDialogue.trim().length) {
      // @ts-ignore
      parsedPage.lines.push({
        character: { name: currentCharacter },
        content: currentDialogue.replace(/\[.*?\]/g, '').trim(),
      })
    }

    if (parsedPage.lines.length > 0) {
      //@ts-ignore
      parsedScript.pages.push(parsedPage)
    }
  })

  return parsedScript
}

export function highlightErrors(line) {
  let b = line.entry_content
  let a = line.content
 
  const entryArray = b
  .replace(/\s+/g, ' ')
  .trim()
  .split(/[\s,\.]+/)
  .filter((s) => !!s)
  .map((s) => s.replace(/[^a-zA-Z0-9]/g, ''))
const lineArray = a
  .replace(/\s+/g, ' ')
  .trim()
  .split(/[\s,\.]+/)
  .filter((s) => !!s)
  .map((s) => s.replace(/[^a-zA-Z0-9]/g, ''))

  let correct = 0
  let wrong = 0
  let html = []
  let errors = []

  for (let i = 0; i < lineArray.length; i++) {
    if (!entryArray[i]) {
      wrong++
      //                         Oh dear, my love, <span class="text-[#C3514A]">my wife</span>, Death that hath sucked the honey (of) my <span class="text-[#C3514A]">breath</span>, Hath no power yet upon (the) beauty. Ah, dear Juliet.
      html.push( `<span class="text-[#C3514A]">${lineArray[i]}</span>`)
      errors.push(`<span class="text-[#C3514A]">${lineArray[i]}</span> missing`)
      continue
    }
    if (entryArray[i].toLowerCase() !== lineArray[i].toLowerCase()) {
      wrong++
       html.push(`<span class="text-[#C3514A]">${lineArray[i]}</span>`)
       errors.push(`Got <span class="text-[#C3514A]">${entryArray[i]}</span> instead of <b>${lineArray[i]}</b>`)
    } else {
      correct++
      html.push(`<span class="text-[#C3514A]">${lineArray[i]}</span>`)
    }
  }

  let totalScore = lineArray.length
  let percent = Number(parseFloat(String((correct / totalScore) * 100)).toFixed(2))

  return {
    ...line,
    html: html.join(' '),
    totalScore,
    correct,
    wrong,
    errors,
    percent,
  }
}