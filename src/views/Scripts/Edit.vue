<template>
    <div class="relative">
        <div class="h-[83.4vh] max-h-[83.4vh] overflow-y-scroll p-[10px] pt-0 pl-0 pr-0 pb-0 flex flex-col bg-nano-dark"> 
            <div class="fixed top-8 w-full z-20">
                <div class="flex items-center justify-between pl-[10px] pr-[10px] pb-[15px] bg-nano-dark">
                    <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 22L2 11.5L12.5 1" stroke="#E7EEBE" stroke-width="2"/>
                    </svg>
                    <div>
                        <h6 class="text-[30px] text-semi" v-if="modeType !== 'editScript'">Romeo & Juliet</h6>
                        <input v-else type="text" class="bg-[#4A232C] text-[30px] h-[33.674px] text-center outline-none text-semi" value="Romeo & Juliet"/>
                    </div>
                    <svg @click="isSavingModalVisible = true" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.19995 11.4082L7.90583 18L25.2 1" stroke="#E7EEBE" stroke-width="2"/>
                    </svg>
                </div>
                <div v-if="modeType=='editScript'" class="h-[65px] w-full bg-[#3e1821d4] sticky top-0 pt-[23px] pl-[17px] pb-[23px] pr-[17px]"> 
                    <div class="flex items-center justify-between">
                        <svg width="142" height="19" viewBox="0 0 142 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5343 10.708H122.027" stroke="#E7EEBE" stroke-width="2" stroke-linecap="round"/>
                            <circle cx="23.3326" cy="10.4657" r="5.79819" fill="#E7EEBE"/>
                            <path d="M9.04773 11.9697H4.73523L3.85242 14.3682H5.11023C5.26648 14.3682 5.37846 14.3994 5.44617 14.4619C5.51388 14.5192 5.54773 14.5973 5.54773 14.6963C5.54773 14.79 5.51388 14.8682 5.44617 14.9307C5.37846 14.9932 5.26648 15.0244 5.11023 15.0244H2.6571C2.50085 15.0244 2.38888 14.9932 2.32117 14.9307C2.25346 14.8682 2.2196 14.79 2.2196 14.6963C2.2196 14.5973 2.25346 14.5192 2.32117 14.4619C2.38888 14.3994 2.50085 14.3682 2.6571 14.3682H3.16492L6.06335 6.54004H4.12585C3.9696 6.54004 3.85763 6.51139 3.78992 6.4541C3.72221 6.3916 3.68835 6.31087 3.68835 6.21191C3.68835 6.11296 3.72221 6.03483 3.78992 5.97754C3.85763 5.91504 3.9696 5.88379 4.12585 5.88379H7.43054L10.6337 14.3682H11.1415C11.2977 14.3682 11.4097 14.3994 11.4774 14.4619C11.5451 14.5192 11.579 14.5973 11.579 14.6963C11.579 14.79 11.5451 14.8682 11.4774 14.9307C11.4097 14.9932 11.2977 15.0244 11.1415 15.0244H8.69617C8.53471 15.0244 8.42013 14.9932 8.35242 14.9307C8.28471 14.8682 8.25085 14.79 8.25085 14.6963C8.25085 14.5973 8.28471 14.5192 8.35242 14.4619C8.42013 14.3994 8.53471 14.3682 8.69617 14.3682H9.94617L9.04773 11.9697ZM8.79773 11.3135L6.98523 6.54004H6.74304L4.98523 11.3135H8.79773Z" fill="#E7EEBE"/>
                            <path d="M137.702 10.2515H130.963L129.584 13.999H131.549C131.793 13.999 131.968 14.0479 132.074 14.1455C132.18 14.235 132.233 14.3571 132.233 14.5117C132.233 14.6582 132.18 14.7803 132.074 14.8779C131.968 14.9756 131.793 15.0244 131.549 15.0244H127.716C127.472 15.0244 127.297 14.9756 127.191 14.8779C127.085 14.7803 127.033 14.6582 127.033 14.5117C127.033 14.3571 127.085 14.235 127.191 14.1455C127.297 14.0479 127.472 13.999 127.716 13.999H128.51L133.038 1.76758H130.011C129.767 1.76758 129.592 1.72282 129.486 1.6333C129.38 1.53564 129.328 1.40951 129.328 1.25488C129.328 1.10026 129.38 0.97819 129.486 0.888672C129.592 0.791016 129.767 0.742188 130.011 0.742188H135.175L140.18 13.999H140.973C141.217 13.999 141.392 14.0479 141.498 14.1455C141.604 14.235 141.657 14.3571 141.657 14.5117C141.657 14.6582 141.604 14.7803 141.498 14.8779C141.392 14.9756 141.217 15.0244 140.973 15.0244H137.152C136.9 15.0244 136.721 14.9756 136.615 14.8779C136.509 14.7803 136.456 14.6582 136.456 14.5117C136.456 14.3571 136.509 14.235 136.615 14.1455C136.721 14.0479 136.9 13.999 137.152 13.999H139.105L137.702 10.2515ZM137.311 9.22607L134.479 1.76758H134.1L131.354 9.22607H137.311Z" fill="#E7EEBE"/>
                        </svg>

                        <svg width="57" height="18" viewBox="0 0 57 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.44778 5.9466H12.8624C14.5534 5.9466 17.9355 6.95174 17.9355 10.9723C17.9355 14.9928 14.5534 15.9979 12.8624 15.9979H5.67541M1.44778 5.9466L5.67541 1.75854M1.44778 5.9466L5.67541 10.1347" stroke="#E7EEBE" stroke-width="2"/>
                            <path d="M53.9878 5.9466H42.5732C40.8822 5.9466 37.5001 6.95174 37.5001 10.9723C37.5001 14.9928 40.8822 15.9979 42.5732 15.9979H49.7602M53.9878 5.9466L49.7602 1.75854M53.9878 5.9466L49.7602 10.1347" stroke="#E7EEBE" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- <div class="h-[65px]w-full bg-black sticky top-0 pt-[23px] pl-[17px] pb-[23px] pr-[17px]"> 
                Worse gang
            </div> -->

            <div :class="{'pt-36': modeType == 'editScript'}" class="h-[10000px] relative bg-nano-light flex flex-col gap-[10px] text-black pt-16 pl-[20px] pr-[20px]"> 
                <div :class="{'top-40': modeType == 'editScript'}" class="fixed w-full top-24"> 
                    1/4
                </div>
                <!-- lines goes here depending on mode-->
                <div class="mt-5 pb-[50px]">
                    <div class="flex flex-col mb-[10px]" :class="{'ml-20': n.type == 'ai'}" v-for="(n,index) in textAreas" :key="index"> 
                        <textarea v-auto-resize class="w-full h-auto outline-none p-[10px] pb-0 rounded-[10px] text-center text-[16px] text-nano-dark" style="background:#DCE2B3" v-model="n.message"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <assign-role :show="modeType=='assign'"></assign-role>

        <Modal :isVisible="isEditModalVisible" @close="closeEditModal">
            <h3>Edit Script</h3>
        <!-- Your edit form goes here -->
        </Modal>
        <Modal :isVisible="isDeleteModalVisible" @close="closeDeleteModal">
            <h3 class="text-[25px] text-center">Are you sure you want to permanently delete this script?</h3>
            <div class="flex flex-col mt-[78px] gap-[15px]">
                <button class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.778564 8.395L5.3729 12.9112L17.2214 1.26416" stroke="#3E1821" stroke-linejoin="round"/>
                    </svg>
                    Yes
                </button>
                <button class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.96435" y1="1.44914" x2="15.144" y2="14.7536" stroke="#3E1821"/>
                        <line y1="-0.5" x2="18.7273" y2="-0.5" transform="matrix(-0.703768 0.71043 0.71043 0.703768 14.7888 1.80103)" stroke="#3E1821"/>
                    </svg>
                    No
                </button>
            </div>
        </Modal>
        <Modal :isVisible="isSavingModalVisible" @close="isSavingModalVisible = false">
            <h3 class="text-[25px] text-center">Do you want to save the edition changes?</h3>
            <div class="flex flex-col mt-[78px] gap-[15px]">
                <button class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.778564 8.395L5.3729 12.9112L17.2214 1.26416" stroke="#3E1821" stroke-linejoin="round"/>
                    </svg>
                    Save
                </button>
                <button @click="isSavingModalVisible = false" class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.96435" y1="1.44914" x2="15.144" y2="14.7536" stroke="#3E1821"/>
                        <line y1="-0.5" x2="18.7273" y2="-0.5" transform="matrix(-0.703768 0.71043 0.71043 0.703768 14.7888 1.80103)" stroke="#3E1821"/>
                    </svg>
                    Discard
                </button>
            </div>
        </Modal>

        <div class="fixed h-[100vh]  z-50 w-full top-0" v-if="modeType == 'edit'"> 
            <div class="h-[60vh]" @click="modeType = ''"> 

            </div>
            <div v-if="modeType == 'edit'" class="h-[40vh] flex flex-col gap-[15px] relative -top-[12vh] bg-[#3e182166] rounded-t-[10px] pt-[24.5px] pb-[24.5px] pl-[51px] pr-[51px]"> 
                <button @click="modeType = 'editScript'" class="rounded-[15px] bg-nano-light w-full pt-[20px] pb-[20px] pl-[24px] pr-[24px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.0919 19.4656L2.49245 14.6168L11.7736 5.24743L15.7085 1.3125L19.6434 5.24741L15.7085 9.18234L6.42736 18.5517L1.49966 19.8954L1.0919 19.4656Z" fill="#E7EEBE"/>
                        <path d="M11.7736 5.24743L2.49245 14.6168L1.0919 19.4656L1.49966 19.8954L6.42736 18.5517L15.7085 9.18234M11.7736 5.24743L15.7085 1.3125L19.6434 5.24741L15.7085 9.18234M11.7736 5.24743L15.7085 9.18234" stroke="#3E1821"/>
                    </svg>
                    Edit Script
                </button>
                <button @click="modeType='assign'" class="rounded-[15px] bg-nano-light w-full pt-[20px] pb-[20px] pl-[24px] pr-[24px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.45166" cy="6.05273" r="3.55273" stroke="#3E1821"/>
                        <path d="M7.25981 9.64536C7.06236 10.1528 5.87076 11.0017 4.21453 11.9293C2.5583 12.8569 1.16918 15.5388 1 16.5821" stroke="#3E1821"/>
                        <path d="M9.37447 9.64536C9.57192 10.1528 10.7635 11.0017 12.4197 11.9293C14.076 12.8569 15.4651 15.5388 15.6343 16.5821" stroke="#3E1821"/>
                        <circle cx="18.4517" cy="4.55591" r="3.55273" stroke="#3E1821"/>
                        <path d="M17.2599 8.14856C17.0625 8.65603 15.8709 9.50491 14.2147 10.4325C13.6025 10.7754 13.0267 11.358 12.5356 12.0089" stroke="#3E1821"/>
                        <path d="M19.3745 8.14853C19.5719 8.656 20.7635 9.50489 22.4197 10.4325C24.076 11.3601 25.4651 14.042 25.6343 15.0853" stroke="#3E1821"/>
                    </svg>
                    Assign characters
                </button>
                <button class="rounded-[15px] bg-nano-light w-full pt-[20px] pb-[20px] pl-[24px] pr-[24px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.3033 10.852C6.28583 11.7981 10.2061 15.4315 11.2886 20.103C11.3124 20.1985 11.382 20.2723 11.4754 20.306C11.5108 20.3188 11.5454 20.3244 11.5857 20.325C11.7265 20.3238 11.8499 20.2294 11.878 20.0971C12.8812 15.4081 16.7402 11.7199 21.7034 10.7029C21.8444 10.6739 21.9393 10.5589 21.9392 10.4233C21.9378 10.2908 21.8375 10.1746 21.6969 10.1481C16.7144 9.20211 12.7941 5.5687 11.7116 0.897162C11.6795 0.767456 11.5597 0.672027 11.4144 0.675122C11.2736 0.676351 11.1503 0.770728 11.1222 0.903024C10.1189 5.59206 6.2612 9.27726 1.29684 10.2973C1.15582 10.3262 1.06091 10.4413 1.06104 10.5769C1.0624 10.7094 1.16395 10.8225 1.3033 10.852Z" stroke="#3E1821"/>
                    </svg>
                    Rehearse
                </button>
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
            isSaving: true,
            modeType: 'edit',
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