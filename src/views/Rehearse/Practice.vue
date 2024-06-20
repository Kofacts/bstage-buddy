<template>
    <div class="relative">
        <div class="h-[83.4vh] max-h-[83.4vh] overflow-y-scroll p-[10px] pt-0 pl-0 pr-0 pb-0 flex flex-col bg-nano-dark"> 
            <div class="fixed top-8 w-full z-20">
                <div class="flex items-center justify-start gap-[70px] pl-[10px] pr-[10px] pb-[15px] bg-nano-dark">
                    <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 22L2 11.5L12.5 1" stroke="#E7EEBE" stroke-width="2"/>
                    </svg>
                    <div>
                        <h6 class="text-[30px] text-semi" v-if="modeType == 'rehearse'">Romeo & Juliet</h6>
                       
                    </div>
                    <!-- <svg @click="isSavingModalVisible = true" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.19995 11.4082L7.90583 18L25.2 1" stroke="#E7EEBE" stroke-width="2"/>
                    </svg> -->
                </div>
                <div v-if="modeType=='rehearse' && isPlayingAudio" class="h-[47px] w-full bg-nano-light border-b-[0.5px] border-nano-dark  sticky top-0 pt-[13px] pl-[13px] pb-[23px] pr-[17px]"> 
                    <div class="flex items-center justify-around">
                        <span class="text-black w-[33.33%] flex justify-center items-center">Buddy</span>
                        <div class="w-[33.33%] flex justify-center items-center">
                            <span class="w-4 h-4 rounded-full flex bg-[#C3514A]"></span>
                        </div>
                        <span class="w-[33.33%] flex justify-center items-center text-black" style="font-weight: 700">My turn</span>
                        
                    </div>
                </div>
            </div>

            <!-- <div class="h-[65px]w-full bg-black sticky top-0 pt-[23px] pl-[17px] pb-[23px] pr-[17px]"> 
                Worse gang
            </div> -->

            <div :class="{'pt-36': modeType == 'rehearse' && isPlayingAudio}" class="h-[10000px] relative bg-nano-light flex flex-col gap-[10px] text-black pt-16"> 
                <div :class="{'top-36': modeType == 'rehearse' && isPlayingAudio}"  class="fixed w-full top-24 pl-[20px] pr-[20px]"> 
                    1/4
                </div>
                <!-- lines goes here depending on mode-->
                <div class="mt-5 pb-[50px]">
                    <div class="flex flex-col mb-[10px] bg-[#DCE2B3]" :class="{'pl-20 pr-10': n.type == 'me'}" v-for="(n,index) in textAreas" :key="index"> 
                        <div  class="w-full h-auto outline-none p-[10px] pb-0 rounded-[10px] text-center text-[16px] text-nano-dark" :class="{'bg-[#F8FED7]': n.type == 'me'}">{{n.message}}</div>
                    </div>
                </div>
            </div>

            <!-- animated icon showing height-->
            <div class="fixed top-60" v-if="isPlayingAudio">
                <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-1 1H23C30.732 1 37 7.26801 37 15C37 22.732 30.732 29 23 29H-1V1Z" fill="#3E1821" stroke="#3E1821"/>
                    <path d="M27.0714 9.27274H15.0714C14.1714 8.12728 13.2286 8 11.9 8H11.8572C10.0572 8 8.68573 9.23028 8.25716 9.69694H6.71427C5.77142 9.69699 5 10.4606 5 11.394V19.0727C5 20.006 5.77142 20.7273 6.71427 20.7273H8.3C9.97142 21.9575 10.5714 22 13.5714 22C15.1572 22 16.9572 21.5758 17.4714 21.4909C18.4572 21.7455 19.4857 21.2364 19.8286 20.2606C19.9572 19.8788 19.9572 19.4122 19.8286 19.0304C20.6 19.0304 21.3286 18.5213 21.5857 17.7576L21.6286 17.7152C21.8 17.2486 21.7572 16.697 21.5428 16.2728C21.5057 16.1992 21.463 16.1283 21.416 16.0603C22.3152 15.8898 23 15.0843 23 14.1515C23 13.7697 22.8714 13.3879 22.6572 13.0909H27.0714C28.1428 13.0909 29 12.2424 29 11.1818C29 10.1212 28.1428 9.27274 27.0714 9.27274ZM8.68573 19.9636C8.6 19.9212 8.51431 19.8787 8.42858 19.8787H6.71427C6.24284 19.8787 5.85711 19.4969 5.85711 19.0727V11.394C5.85711 10.9273 6.24284 10.5455 6.71427 10.5455H8.42853C8.55711 10.5455 8.68569 10.5031 8.77138 10.3758C8.77138 10.3758 10.0571 8.89095 11.8142 8.84854H11.8571C13.1856 8.84854 13.7856 8.93341 14.4713 9.95154L14.5142 9.99395L14.8498 10.3866C15.8827 11.7274 17.0036 13.2004 17.4285 13.8121C17.8571 14.4909 17.9856 15.0424 17.7285 15.3818C17.5483 15.5958 17.1865 15.6893 16.8466 15.6382C16.7957 15.6278 16.7465 15.6132 16.6999 15.5939C16.1856 15.3818 15.2856 14.7879 14.2999 13.9818C14.2547 13.9482 14.2064 13.9238 14.1568 13.9079C12.9889 12.9378 11.9027 11.8345 11.6856 11.3091C11.5999 11.097 11.3428 11.0121 11.1285 11.097C10.9142 11.1819 10.8285 11.4364 10.9142 11.6485C11.183 12.2693 12.2243 13.3651 13.3775 14.3546C13.2815 14.492 13.2068 14.64 13.1428 14.7879L13.1 14.8728C12.9349 15.3426 12.969 15.8318 13.1582 16.251C12.5004 16.3794 11.9172 16.8443 11.6856 17.5031C11.3428 18.4788 11.8999 19.5818 12.8856 19.9212L15.82 20.9267C15.1392 21.0457 14.3224 21.1515 13.5713 21.1515C10.5714 21.1515 10.2286 21.109 8.68573 19.9636ZM13.8714 17.1212L17.214 18.2666L18.358 18.6604C18.56 18.7376 18.7213 18.8586 18.8387 19.007C18.872 19.055 18.9021 19.1053 18.9285 19.1576C19.0571 19.4121 19.0571 19.7091 18.9714 19.9636C18.8 20.5151 18.2 20.8121 17.6 20.5999C17.5578 20.5999 17.5156 20.5897 17.4735 20.5843L13.1857 19.1151C12.5857 18.903 12.3285 18.3091 12.5 17.7575C12.5857 17.503 12.8 17.2909 13.0571 17.1636C13.1857 17.0787 13.3571 17.0363 13.5285 17.0363C13.6572 17.0364 13.7857 17.0788 13.8714 17.1212ZM20.1286 16.1455C20.3857 16.2303 20.6 16.4 20.7286 16.6545C20.8572 16.8666 20.8572 17.1636 20.7714 17.4182L20.7286 17.503C20.6645 17.6932 20.5526 17.8596 20.3928 17.9848C20.1357 18.1496 19.811 18.196 19.4857 18.097L18.6286 17.8C18.5475 17.7733 18.4707 17.7676 18.4009 17.7791L17.4704 17.4602L14.5143 16.4424C13.9572 16.2303 13.7 15.6788 13.8715 15.1273L13.9143 15.0424C13.9143 15 13.9572 14.9151 14 14.8727C14.0354 14.8998 14.0702 14.926 14.1051 14.9526C14.8723 15.5555 15.6284 16.0607 16.188 16.3053C16.2001 16.3106 16.212 16.3158 16.2239 16.3208C16.2546 16.3338 16.2849 16.3462 16.3143 16.3576C16.5211 16.4438 16.7446 16.4833 16.9719 16.4834C16.9954 16.4841 17.0188 16.4848 17.0428 16.4848C17.3398 16.4848 17.6366 16.4137 17.8923 16.2804C18.2298 16.1311 18.5345 15.9075 18.7571 15.6363L20.1286 16.1455ZM21.0714 15.1697H20.9L19.9143 15.0424C19.8472 15.0424 19.7802 15.0549 19.7184 15.0785L18.7572 14.7454C18.7319 14.7355 18.7067 14.728 18.6816 14.7227C18.6381 14.3461 18.4792 13.8873 18.1143 13.3455C18.0661 13.2674 18.0076 13.1778 17.9411 13.0793L21.1571 13.0061C21.4143 13.0061 21.6714 13.1334 21.8428 13.3031C22.0143 13.5152 22.1428 13.7697 22.1428 14.0667C22.1428 14.6606 21.6714 15.1697 21.0714 15.1697ZM27.0714 12.2424H21.1572C21.1143 12.2424 21.1143 12.2424 21.0714 12.2424H17.4286C17.4012 12.2424 17.3751 12.2447 17.3499 12.2485C16.8751 11.6036 16.2818 10.8317 15.7295 10.1212H27.0715C27.6715 10.1212 28.1429 10.5879 28.1429 11.1818C28.1429 11.7758 27.6714 12.2424 27.0714 12.2424Z" fill="#E7EEBE"/>
                </svg>
            </div>
        </div>
        <div class="border-t-[0.1px] border-t border-nano-dark z-[999] h-[127px] bg-nano-light fixed bottom-0 w-full pt-[15px] pl-[30px] pr-[30px] pb-[27px] flex justify-between items-center"> 
            <div class="flex items-center justify-around w-full gap-[12.8px]">
                <div class="w-[33.33%] flex justify-center items-center">
                    <span class="text-black text-[18px]">1.5x</span>
                </div>
                <div class="w-[33.33%] flex justify-center items-center">
                    <div v-if="!isPlayingAudio" class="flex items-center flex-col">
                        <button @click="isPlayingAudio = true" class="w-[72px] h-[72px] bg-nano-dark rounded-full">
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="36" cy="36" r="36" fill="#3E1821"/>
                                <path d="M19.3945 36.5732C27.5086 38.1138 33.8927 44.0308 35.6556 51.6384C35.6944 51.7939 35.8078 51.9141 35.9597 51.969C36.0174 51.9898 36.0738 51.9989 36.1395 52C36.3688 51.998 36.5697 51.8443 36.6154 51.6289C38.2492 43.9928 44.5335 37.9865 52.616 36.3303C52.8456 36.2832 53.0002 36.0958 53 35.875C52.9978 35.6592 52.8344 35.4701 52.6055 35.4269C44.4914 33.8863 38.1073 27.9693 36.3444 20.3617C36.2922 20.1505 36.0971 19.9951 35.8605 20.0001C35.6312 20.0021 35.4303 20.1558 35.3846 20.3713C33.7508 28.0074 27.4685 34.0087 19.384 35.6698C19.1544 35.7169 18.9998 35.9044 19 36.1251C19.0022 36.3409 19.1676 36.5251 19.3945 36.5732Z" fill="#E5EEB9" stroke="#E7EEBE"/>
                            </svg>
                        </button>
                        <span class="text-[13px] text-nano-dark">rehearse</span>
                    </div>
                    <div v-else class="flex gap-[8.9px] items-center">
                        <div class="flex items-center flex-col">
                            <button @click="isPlayingAudio = false"  class="w-[72px] h-[72px] bg-nano-dark rounded-full">
                                <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="36.0842" cy="36" r="36" fill="#3E1821"/>
                                    <rect x="28.0842" y="24" width="5" height="24" fill="#E7EEBE"/>
                                    <rect x="39.0842" y="24" width="5" height="24" fill="#E7EEBE"/>
                                </svg>
                            </button>
                            <span class="text-[13px] text-nano-dark">pause</span>
                        </div>
                        <div class="flex items-center flex-col">
                            <button class="w-[72px] h-[72px] bg-nano-dark rounded-full"> 
                                <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="24" y="24" width="23" height="23" fill="#E7EEBE"/>
                                </svg>
                            </button>
                            <span class="text-[13px] text-nano-dark">end</span>
                        </div>
                    </div>
                </div>
                <div class="w-[33.33%] flex justify-center items-center text-black">
                    <span class="text-black text-[18px]">edit</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Modal from '@/components/Modal.vue'
import CarouselPlaceholder from '@/components/CarouselPlaceholder.vue';
import { Camera, CameraResultType } from '@capacitor/camera';
import AssignRole from '@/components/AssignRole.vue';
export default {
    components: { Carousel, Modal, CarouselPlaceholder, AssignRole },
    data() {
        return {
            images: [],
            isEditModalVisible: false,
            isDeleteModalVisible: false,
            isSavingModalVisible: false,
            isPlayingAudio: false,
            isSaving: true,
            modeType: 'rehearse',
            textAreas: Array.from({ length: 20 }, () => ({
                message: 'Romeo and Juliet Script',
                type: Math.random() > 0.5 ? 'me' : 'ai'
            }))
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
        openEditModal() {
            this.isEditModalVisible = true;
        },
        closeEditModal() {
            this.isEditModalVisible = false;
        },
        openDeleteModal() {
            this.isDeleteModalVisible = true;
        },
        closeDeleteModal() {
            this.isDeleteModalVisible = false;
        },
        async scanPhoto() {
            console.log('Fuckk')
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            });

            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            var imageUrl = image.webPath;

            // Can be set to the src of an image now
            imageElement.src = imageUrl; 
            this.images.push(imageUrl)
        }
    }
}
</script>