<template>
    <div :class="`relative${loaded ? '' : ' blur'}`">

        <div
            class="h-[83.4vh] max-h-[83.4vh] overflow-y-scroll p-[10px] pt-0 pl-0 pr-0 pb-0 flex flex-col bg-nano-dark">
            <div class="fixed top-8 w-full z-20">
                <div class="flex items-center justify-start gap-[70px] pl-[10px] pr-[10px] pb-[15px] bg-nano-dark">
                    <svg @click="$router.go(-1)" width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 22L2 11.5L12.5 1" stroke="#E7EEBE" stroke-width="2" />
                    </svg>
                    <div>
                        <h6 class="text-[30px] text-semi" v-if="modeType == 'rehearse'">{{ script.title }}</h6>

                    </div>
                    <!-- <svg @click="isSavingModalVisible = true" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.19995 11.4082L7.90583 18L25.2 1" stroke="#E7EEBE" stroke-width="2"/>
                    </svg> -->
                </div>
                <div v-if="modeType == 'rehearse' && isPlayingAudio"
                    class="h-[47px] w-full bg-nano-light border-b-[0.5px] border-nano-dark  sticky top-0 pt-[13px] pl-[13px] pb-[23px] pr-[17px]">
                    <div class="flex items-center justify-around">
                        <span class="text-black w-[33.33%] flex justify-center items-center"
                            :style="`font-weight: ${currentLine?.character?.is_self === false ? 700 : 300}`">Buddy</span>
                        <div class="w-[33.33%] flex justify-center items-center">
                            <span class="w-4 h-4 rounded-full flex bg-[#C3514A]"></span>
                        </div>
                        <span class="w-[33.33%] flex justify-center items-center text-black"
                            :style="`font-weight: ${currentLine?.character?.is_self === true ? 700 : 300}`">My
                            turn</span>

                    </div>
                </div>
            </div>

            <!-- <div class="h-[65px]w-full bg-black sticky top-0 pt-[23px] pl-[17px] pb-[23px] pr-[17px]"> 
                Worse gang
            </div> -->
            <div v-if="showMistakes" class="absolute bottom-0 bg-[#3e182145] w-full z-20 h-[93%] pl-[20px] pr-[20px] flex items-end justify-end"> 
               <div class="bg-nano-light h-[380px] max-h-[380px] overflow-y-scroll relative text-black w-full" style="border-radius: 10px 10px 0px 0px;"> 
                   <div class="flex flex-col p-[24.62px] pt-[18px] justify-center items-center text-[16px]">
                    <span>{{mistakeLine.character?.name || "Direction"}}:</span>
                    <span class="text-[#C3514A]" v-html="mistakeLine.entry_content">

                    </span>
                   </div>

                   <svg @click="() => { showMistakes=false; mistakeLine = null; }" class="absolute top-0 right-0 mr-4 mt-4" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-0.00610352" y="-0.00610352" width="28.0122" height="28.0122" rx="10" fill="#F8FED7"/>
                        <line x1="8.35355" y1="8.64645" x2="19.3536" y2="19.6464" stroke="#3E1821"/>
                        <line x1="19.3536" y1="8.35355" x2="8.35355" y2="19.3536" stroke="#3E1821"/>
                   </svg>

                   <div class="w-full p-[13.5px] flex flex-col gap-[14px]"> 
                       <div class="flex items-center gap-[20px]" v-for="error in mistakeLine.errors"> 
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.76062" width="40" height="40" rx="10" fill="#C3514A"/>
                                <path d="M20.5 16.2426V21.7607" stroke="#E7EEBE"/>
                                <path d="M20.4999 9.62073L31.0133 27.8305H9.98654L20.4999 9.62073Z" stroke="#E7EEBE" stroke-linejoin="round"/>
                                <circle cx="20.4998" cy="23.7722" r="0.827715" fill="#E7EEBE"/>
                            </svg>
                            <span class="text-[18px]" v-html="error"></span>
                       </div>
                      
                   </div>

               </div>
            </div>

            <div :class="{ 'pt-36': modeType == 'rehearse' && isPlayingAudio }"
                class="rehearse-wraps h-full overflow-y-scroll relative bg-nano-light flex flex-col gap-[10px] text-black pt-16">
                <div class="w-1/6 fixed left-0 top-[250px] z-[200]" v-if="isPlayingAudio">
                    <svg width="38" height="30" viewBox="0 0 38 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M-1 1H23C30.732 1 37 7.26801 37 15C37 22.732 30.732 29 23 29H-1V1Z"
                            fill="#3E1821" stroke="#3E1821" />
                        <path
                            d="M27.0714 9.27274H15.0714C14.1714 8.12728 13.2286 8 11.9 8H11.8572C10.0572 8 8.68573 9.23028 8.25716 9.69694H6.71427C5.77142 9.69699 5 10.4606 5 11.394V19.0727C5 20.006 5.77142 20.7273 6.71427 20.7273H8.3C9.97142 21.9575 10.5714 22 13.5714 22C15.1572 22 16.9572 21.5758 17.4714 21.4909C18.4572 21.7455 19.4857 21.2364 19.8286 20.2606C19.9572 19.8788 19.9572 19.4122 19.8286 19.0304C20.6 19.0304 21.3286 18.5213 21.5857 17.7576L21.6286 17.7152C21.8 17.2486 21.7572 16.697 21.5428 16.2728C21.5057 16.1992 21.463 16.1283 21.416 16.0603C22.3152 15.8898 23 15.0843 23 14.1515C23 13.7697 22.8714 13.3879 22.6572 13.0909H27.0714C28.1428 13.0909 29 12.2424 29 11.1818C29 10.1212 28.1428 9.27274 27.0714 9.27274ZM8.68573 19.9636C8.6 19.9212 8.51431 19.8787 8.42858 19.8787H6.71427C6.24284 19.8787 5.85711 19.4969 5.85711 19.0727V11.394C5.85711 10.9273 6.24284 10.5455 6.71427 10.5455H8.42853C8.55711 10.5455 8.68569 10.5031 8.77138 10.3758C8.77138 10.3758 10.0571 8.89095 11.8142 8.84854H11.8571C13.1856 8.84854 13.7856 8.93341 14.4713 9.95154L14.5142 9.99395L14.8498 10.3866C15.8827 11.7274 17.0036 13.2004 17.4285 13.8121C17.8571 14.4909 17.9856 15.0424 17.7285 15.3818C17.5483 15.5958 17.1865 15.6893 16.8466 15.6382C16.7957 15.6278 16.7465 15.6132 16.6999 15.5939C16.1856 15.3818 15.2856 14.7879 14.2999 13.9818C14.2547 13.9482 14.2064 13.9238 14.1568 13.9079C12.9889 12.9378 11.9027 11.8345 11.6856 11.3091C11.5999 11.097 11.3428 11.0121 11.1285 11.097C10.9142 11.1819 10.8285 11.4364 10.9142 11.6485C11.183 12.2693 12.2243 13.3651 13.3775 14.3546C13.2815 14.492 13.2068 14.64 13.1428 14.7879L13.1 14.8728C12.9349 15.3426 12.969 15.8318 13.1582 16.251C12.5004 16.3794 11.9172 16.8443 11.6856 17.5031C11.3428 18.4788 11.8999 19.5818 12.8856 19.9212L15.82 20.9267C15.1392 21.0457 14.3224 21.1515 13.5713 21.1515C10.5714 21.1515 10.2286 21.109 8.68573 19.9636ZM13.8714 17.1212L17.214 18.2666L18.358 18.6604C18.56 18.7376 18.7213 18.8586 18.8387 19.007C18.872 19.055 18.9021 19.1053 18.9285 19.1576C19.0571 19.4121 19.0571 19.7091 18.9714 19.9636C18.8 20.5151 18.2 20.8121 17.6 20.5999C17.5578 20.5999 17.5156 20.5897 17.4735 20.5843L13.1857 19.1151C12.5857 18.903 12.3285 18.3091 12.5 17.7575C12.5857 17.503 12.8 17.2909 13.0571 17.1636C13.1857 17.0787 13.3571 17.0363 13.5285 17.0363C13.6572 17.0364 13.7857 17.0788 13.8714 17.1212ZM20.1286 16.1455C20.3857 16.2303 20.6 16.4 20.7286 16.6545C20.8572 16.8666 20.8572 17.1636 20.7714 17.4182L20.7286 17.503C20.6645 17.6932 20.5526 17.8596 20.3928 17.9848C20.1357 18.1496 19.811 18.196 19.4857 18.097L18.6286 17.8C18.5475 17.7733 18.4707 17.7676 18.4009 17.7791L17.4704 17.4602L14.5143 16.4424C13.9572 16.2303 13.7 15.6788 13.8715 15.1273L13.9143 15.0424C13.9143 15 13.9572 14.9151 14 14.8727C14.0354 14.8998 14.0702 14.926 14.1051 14.9526C14.8723 15.5555 15.6284 16.0607 16.188 16.3053C16.2001 16.3106 16.212 16.3158 16.2239 16.3208C16.2546 16.3338 16.2849 16.3462 16.3143 16.3576C16.5211 16.4438 16.7446 16.4833 16.9719 16.4834C16.9954 16.4841 17.0188 16.4848 17.0428 16.4848C17.3398 16.4848 17.6366 16.4137 17.8923 16.2804C18.2298 16.1311 18.5345 15.9075 18.7571 15.6363L20.1286 16.1455ZM21.0714 15.1697H20.9L19.9143 15.0424C19.8472 15.0424 19.7802 15.0549 19.7184 15.0785L18.7572 14.7454C18.7319 14.7355 18.7067 14.728 18.6816 14.7227C18.6381 14.3461 18.4792 13.8873 18.1143 13.3455C18.0661 13.2674 18.0076 13.1778 17.9411 13.0793L21.1571 13.0061C21.4143 13.0061 21.6714 13.1334 21.8428 13.3031C22.0143 13.5152 22.1428 13.7697 22.1428 14.0667C22.1428 14.6606 21.6714 15.1697 21.0714 15.1697ZM27.0714 12.2424H21.1572C21.1143 12.2424 21.1143 12.2424 21.0714 12.2424H17.4286C17.4012 12.2424 17.3751 12.2447 17.3499 12.2485C16.8751 11.6036 16.2818 10.8317 15.7295 10.1212H27.0715C27.6715 10.1212 28.1429 10.5879 28.1429 11.1818C28.1429 11.7758 27.6714 12.2424 27.0714 12.2424Z"
                            fill="#E7EEBE" />
                    </svg>
                </div>
                <!-- lines goes here depending on mode-->
                <div class="mt-5 pb-[50px]" :class="{'border-b-[0.5px] border-nano-dark border-dashed': script.pages.length !== (index+1)}" v-for="(page, index) in script.pages" :key="index">
                    <div :key="`op${index2}`" class="flex-col relative mb-[10px]" :class="{'bg-[#DCE2B3]' : currentLine?.reference === line.reference, 'pl-10 pr-5': line.character?.is_self }"
                        v-for="(line,index2) in script.pages[index].lines">
                        <!-- {{ line.character?.name || 'Direction' }} -->
                        <button v-if="line.mistakes" @click="() => { mistakeLine = highlightErrors(line); showMistakes=true }" class="absolute bg-[#C3514A] -top-2 left-4 h-[60.673px] w-[40px] flex flex-col items-center justify-center rounded-[10px]">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.06128V13.5794" stroke="#E7EEBE"/>
                                <path d="M12.9999 1.43945L23.5133 19.6492H2.48654L12.9999 1.43945Z" stroke="#E7EEBE" stroke-linejoin="round"/>
                                <circle cx="12.9998" cy="15.5909" r="0.827715" fill="#E7EEBE"/>
                            </svg>
                            <span class="text-[11px] text-nano-light font-[700]">{{ line.mistakes }}</span>
                        </button>
                        <div class=" h-auto outline-none p-[10px] pt-2.5 pb-2.5 pb-0 rounded-[10px] text-center text-[16px] text-nano-dark"
                            :class="{ 'bg-[#F8FED7] pl-5': line.character?.is_self }">{{ line.content }}</div>
                    </div>


                </div>
            </div>

            <!-- animated icon showing height-->

        </div>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Modal from '@/components/Modal.vue'
import CarouselPlaceholder from '@/components/CarouselPlaceholder.vue';
import AssignRole from '@/components/AssignRole.vue';
import { Microphone } from '@mozartec/capacitor-microphone';
import { Toast } from '@capacitor/toast';
import { highlightErrors } from '@/helpers/global'

export default {
    components: { Carousel, Modal, CarouselPlaceholder, AssignRole },
    data() {
        return {
            images: [],
            loaded: false,
            mistakeLine: null,
            isEditModalVisible: false,
            isDeleteModalVisible: false,
            isSavingModalVisible: false,
            isPlayingAudio: false,
            showMistakes: false,
            isSaving: false,
            index: 0,
            modeType: 'rehearse',
            isEnded: false,
            isPaused: false,
            currentLine: null,
            startTime: 0,
            lineStartTime: 0,  // Add this
            lineEndTime: 0,    // Add this
            recording: null,
            webPaths: [],
            dataUrls: [],
            recorder: null,
            class: null,
            platform: 'web',
            vm: this,
            leftchannel: [],
            rightchannel: [],
            recorder: null,
            recordingLength: 0,
            volume: null,
            mediaStream: null,
            sampleRate: 8820,
            context: null,
            blob: null,
            base64: null,
            duration: 0,
            _recording: {
                web: {
                    startRecording: async (vm) => {
                        const stream = await navigator.mediaDevices.getUserMedia({
                            audio: true
                        })
                        let recorder = new MediaRecorder(stream, {
                            mimeType: 'audio/webm;codecs=opus'
                        });
                        let chunks = []; // here we'll store all recorded chunks
                        // every time a new chunk is available, store it
                        recorder.ondataavailable = (e) => chunks.push(e.data);
                        recorder.onstop = async () => {
                            vm.blob = new Blob(chunks, { 'type' : 'audio/webm;codecs=opus' })
                        
                            vm.base64 = await vm.convertBlobToBase64(vm.blob)
                            vm.duration = await vm.getAudioDuration(vm.blob)
                            console.log(new Date().toLocaleString(), vm.currentLine?.reference, 'Recording stopped')
                            vm.savePractice({
                                reference: vm.currentLine.reference,
                                audio: vm.base64,
                                duration: vm.duration,
                                total_duration: (Date.now() - vm.startTime) / 1000
                            })
                            console.log(new Date().toLocaleString(), vm.currentLine?.reference, 'Ready to run next loop')
                            vm.runLoop()
                        };
                        recorder.start();
                        console.log(new Date().toLocaleString(), 'recording started. Will stop in ', vm.currentLine?.duration, 'seconds' )
                        vm.recorder = recorder;

                        setTimeout((vm, recorder) => {
                            recorder.stop()
                            console.log(new Date().toLocaleString(), vm.currentLine?.reference, 'recording queued to stop')
                        }, (vm.currentLine?.duration || 2) * 1000, vm, vm.recorder)
                    },
                    stopRecording: async (vm) => {
                        // stop recording
                        console.log(new Date().toLocaleString(), vm.currentLine?.reference, 'stopping recording')
                        vm.recorder.stop()
                        console.log(new Date().toLocaleString(), this.currentLine?.reference, 'recording stopped')
                    },
                },
                capacitor: {
                    checkPermissions: async () => {
                        try {
                            const checkPermissionsResult = await Microphone.checkPermissions();
                            console.log('checkPermissionsResult: ' + JSON.stringify(checkPermissionsResult));
                        } catch (error) {
                            console.error('checkPermissions Error: ' + JSON.stringify(error));
                        }
                    },
                    requestPermissions: async () => {
                        try {
                            const requestPermissionsResult = await Microphone.requestPermissions();
                            console.log('requestPermissionsResult: ' + JSON.stringify(requestPermissionsResult));
                        } catch (error) {
                            console.error('requestPermissions Error: ' + JSON.stringify(error));
                        }
                    },
                    startRecording: async (vm) => {
                        try {
                            await vm._recording.capacitor.checkPermissions()
                            await vm._recording.capacitor.requestPermissions()
                            vm.recording = await Microphone.startRecording();
                            console.log('startRecordingResult: ' + JSON.stringify(this.recording));
                        } catch (error) {
                            console.error('startRecordingResult Error: ' + JSON.stringify(error));
                        }
                    },
                    stopRecording: async (vm) => {
                        try {
                            vm.recording = await Microphone.stopRecording();
                            vm.base64 = vm.recording.base64String
                            vm.duration = vm.recording.duration

                            vm.savePractice({
                                reference: vm.currentLine.reference,
                                audio: vm.base64,
                                duration: vm.duration,
                                total_duration: (Date.now() - vm.startTime) / 1000
                            })
                        } catch (error) {
                            console.error('recordingResult Error: ' + JSON.stringify(error));
                        }
                    }
                },
            },
            audio: null
        }
    },
    directives: {
        autoResize: {
            inserted(el) {
                const autoResize = (element) => {
                    element.style.height = 'auto'; // Reset height to allow shrinking
                    element.style.height = element.scrollHeight + 'px'; // Set height to the scroll height
                };

                el.addEventListener('input', () => autoResize(el));

                // Initial resize
                autoResize(el);
            },
            update(el) {
                const autoResize = (element) => {
                    element.style.height = 'auto';
                    element.style.height = element.scrollHeight + 'px';
                };

                autoResize(el);
            }
        }
    },
    methods: {
        highlightErrors,
        convertBlobToBase64(blob) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (reader.result) {
                        resolve(reader.result);
                    } else {
                        reject('');
                    }
                };
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        },
        getAudioDuration(file) {
            console.log('getAudioDuration', file)
            return new Promise((resolve, reject) => {
                const audio = new Audio();
                audio.preload = 'metadata';

                audio.onloadedmetadata = () => {

                    resolve(isFinite(audio.duration) ? audio.duration : 0);
                };

                audio.onerror = () => {
                    reject(0);
                };

                audio.src = URL.createObjectURL(file);
            });
        },
        savePractice(payload) {
            this.$store.dispatch('scripts/savePractice', payload)
                .then(({ message }) => {
                    console.log('message', message)
                    Toast.show({ text: message })
                }).catch((e) => {
                    console.log('e', e)
                    Toast.show({ text: e.message })
                })
        },
        startRehearsal() {
            this.startTime = Date.now();
            this.isPlayingAudio = true
        },
        smoothScrollDuringPlayback(currentTime, duration) {
            const scrollContainer = document.querySelector('.rehearse-wraps');
            if (!scrollContainer) return;

            const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
            let scrollTop = 0;
            const scrollSpeed = 1; // Adjust scroll speed here (increase for faster scroll)

            function scrollStep() {
                scrollTop += scrollSpeed;

                if (scrollTop > scrollHeight) {
                    scrollTop = 0; // Reset scroll position to the top
                }

                scrollContainer.scrollTop = scrollTop;

                requestAnimationFrame(scrollStep);
            }

            requestAnimationFrame(scrollStep);
        },

        runLoop() {
            if (this.isEnded || !this.isPlayingAudio) {
                console.log(new Date().toLocaleString(), 'already ended');
                return;
            }

            console.log('previous line', this.currentLine?.reference);
            this.currentLine = this.lines[this.index++];

            if (this.currentLine) {
                console.log(new Date().toLocaleString(), this.currentLine.reference, 'next line found');
                const vm = this;

                if (this.currentLine.character?.is_self) {
                    console.log(new Date().toLocaleString(), this.currentLine.reference, 'is self: start recording');
                    this._recording[this.platform].startRecording(vm);
                } else {
                    console.log(new Date().toLocaleString(), this.currentLine?.reference, 'is AI: start playing');
                    const audio = new Audio(this.currentLine.audio_url);
                    audio.play();
                    audio.addEventListener("loadedmetadata", function () {
                        // Start smooth scroll animation when audio begins playing
                        vm.smoothScrollDuringPlayback(audio.duration);
                    });

                    audio.addEventListener("ended", function () {
                        console.log(new Date().toLocaleString(), vm.currentLine?.reference, "audio playing ended");
                        vm.runLoop();
                    });
                }
            } else {
                this.isEnded = true;
                this.endTime = Date.now();
                this.isPlayingAudio = false;
                console.log(new Date().toLocaleString(), this.currentLine?.reference, 'Completed all lines');
                this.$router.push({ path: `/stats/${this.script.reference}` });
            }
        },

    },
    watch: {
        isPlayingAudio(newVal) {
            console.log(new Date().toLocaleString(), 'new val', newVal)

            if (newVal) {
                this.runLoop()
            }

        }
    },
    computed: {
        script() {
            return this.$store.getters['scripts/script']
        },
        lines() {
            let lines = []
            let index = 0
            const pages = this.script.pages || []
            pages.forEach((page) => {
                lines = lines.concat(page.lines.map((e => {
                    let line = JSON.parse(JSON.stringify(e))
                    line.index = index++
                    line.page = {
                        number: page.number,
                        reference: page.reference
                    }
                    return line
                })))
            })
            return lines
        }

    },
    created() {
        this.loaded = this.script?.reference === this.$route.params.reference
        Promise.all([
            this.$store.dispatch('scripts/fetchScript', this.$route.params.reference),
        ]).finally(() => {
            this.loaded = true
            console.log(this.lines)
        })

    },
    mounted() {
        console.log(window.Capacitor.platform)
        this.platform = window.Capacitor.platform === 'web' ? 'web' : 'capacitor'

    }
}
</script>