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
    return optional(obj, key, defaultVal)
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

export function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}