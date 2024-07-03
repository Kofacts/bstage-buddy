<template>
    <div class="relative">
        <div v-if="isSaving"
            class="h-[80vh] bg-nano-dark flex flex-col items-center justify-center text-[19px] gap-[34.2px] fixed top-0 w-full">
            <svg width="96" height="90" viewBox="0 0 96 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M89.8692 49.3637C75.1502 52.7312 63.8216 64.4774 60.9931 79.3019C57.6257 64.5829 45.8794 53.2543 31.0549 50.4259C45.7739 47.0584 57.1025 35.3121 59.931 20.4876C63.2984 35.2066 75.0447 46.5352 89.8692 49.3637Z"
                    fill="#E5EEB9" stroke="#E5EEB9" stroke-width="1.75" stroke-linejoin="round" />
                <path
                    d="M39.4635 21.7263C30.4727 23.7793 23.5546 30.957 21.8273 40.0133C19.7744 31.0225 12.5966 24.1044 3.54035 22.3771C12.5311 20.3242 19.4492 13.1464 21.1765 4.09015C23.2294 13.0809 30.4072 19.999 39.4635 21.7263Z"
                    fill="#E5EEB9" stroke="#E5EEB9" stroke-width="1.75" stroke-linejoin="round" />
                <path
                    d="M38.9089 76.1403C33.5573 77.3602 29.4387 81.6319 28.4139 87.0231C27.1939 81.6714 22.9222 77.5528 17.5311 76.528C22.8827 75.308 27.0013 71.0364 28.0261 65.6452C29.2461 70.9968 33.5178 75.1155 38.9089 76.1403Z"
                    fill="#E5EEB9" stroke="#E5EEB9" stroke-width="1.75" stroke-linejoin="round" />
            </svg>
            <h6 class="text-[25px]">Loading...</h6>
        </div>
      
        <AssignRole v-else-if="script"></AssignRole>

        <div v-else>

            <!-- enter title first-->
            <div class="h-[80vh] max-h-[80vh] overflow-y-scroll pt-[29px] flex flex-col gap-[58.35px] pl-[37px] pr-[37px]" v-if="!isEnteredTitle"> 
                <div class="flex flex-col gap-[45px] p-[35px] pt-0 pb-0">
                    <h3 class="text-[30px] text-semi text-center">Script Library</h3>
                    <!-- <h6 class="text-[35px] text-center text-semi">You are closer to becoming a star!</h6> -->
                </div>
                <h6 class="text-[24px] leading-[32px] text-center">Name the text you are about to add</h6>

                <div class="w-full pl-[14px] pr-[14px] flex flex-col gap-[86.4px]"> 
                    <textarea v-model="title" class="w-full bg-[#4A232C] outline-none p-4 text-[20px] text-sans h-[160px]"></textarea>

                    <div class="flex flex-col gap-[15px]"> 
                        <button @click="() => {scanPhoto(); isEnteredTitle = true }"
                            class="rounded-[15px] pt-[20px] pb-[20px] pl-[24px] pr-[24px] bg-nano-light w-full  w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4081 15.7607H6.59175V5.44556H15.4081V15.7607Z" stroke="#3E1821" />
                                <path
                                    d="M21.0006 13.4667V17.5646V17.5646C21.0006 19.3752 19.5328 20.843 17.7222 20.843V20.843H13.6243M21.0006 8.5333V4.43533C21.0006 2.62473 19.5328 1.15694 17.7222 1.15694H13.6243M0.999389 8.5333V4.43533C0.999389 2.62473 2.46717 1.15694 4.27777 1.15694H8.37574M0.999389 13.4667V17.5646C0.999389 19.3752 2.46717 20.843 4.27777 20.843H8.37574"
                                    stroke="#3E1821" />
                            </svg>
                            Start scanning
                        </button>
                        <button 
                            @click="() => { title = ''; isEnteredTitle = false}"
                            class="rounded-[15px] pt-[20px] pb-[20px] pl-[24px] pr-[24px] bg-nano-light w-full w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <line x1="1.96435" y1="1.36149" x2="15.144" y2="14.6659" stroke="#3E1821"/>
                                <line y1="-0.5" x2="18.7273" y2="-0.5" transform="matrix(-0.703768 0.71043 0.71043 0.703768 14.7888 1.71338)" stroke="#3E1821"/>
                            </svg>

                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            <div v-else class="h-[80vh] max-h-[80vh] overflow-y-scroll pt-[29px] flex flex-col gap-[58.35px]">
                <div class="flex flex-col gap-[45px] p-[35px] pt-0 pb-0">
                    <h3 class="text-[30px] text-semi text-center">Review Scan</h3>
                    <!-- <h6 class="text-[35px] text-center text-semi">You are closer to becoming a star!</h6> -->
                </div>
                <div v-if="images.length > 0">
                    <!-- <div @click="editPage(index)" class="h-40 w-32" v-for="(image, index) in images" :key="index">
                        <img style="width: 202; height: 278" :src="image.dataUrl" />
                    </div> -->
                    <carousel-custom @index="currentIndex" :items="images">
                        <template v-slot:default="{ item }"> 
                            <img class="object-cover bg-[#fff]" :src="item.dataUrl" />

                            <div class="absolute bottom-2 right-2 flex gap-[6.7px]"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <rect width="41" height="41" rx="10" fill="#E7EEBE"/>
                                    <path d="M28.4996 14.5003H12.5004M18.5691 14.0004V13.4314C18.5691 12.365 19.4336 11.5005 20.5 11.5005V11.5005C21.5664 11.5005 22.4309 12.365 22.4309 13.4314V14.0004M14.1555 14.5003L15.2589 29.4996H25.7411L26.8445 14.5003H14.1555Z" stroke="#3E1821"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <g clip-path="url(#clip0_1306_2644)">
                                        <rect x="1.78172" y="1.01245" width="40" height="41" rx="10" fill="#E7EEBE"/>
                                        <path d="M12.5364 22.0079C12.5364 27.2084 16.6821 31.4359 21.7818 31.4359C26.8815 31.4359 31.0272 27.2261 31.0272 22.0079C31.0272 16.7898 26.8815 12.58 21.7818 12.58C18.5902 12.58 15.7801 14.225 14.1149 16.7368" stroke="#3E1821" stroke-miterlimit="10"/>
                                        <path d="M13.4039 11.5895V17.3383H19.024" stroke="#3E1821" stroke-miterlimit="10"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1306_2644">
                                        <rect width="42.025" height="42.025" fill="white" transform="translate(0.769287 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </template>
                    </carousel-custom>
                </div>
                <div v-else class="overflow-hidden" style="display:-webkit-box">
                    <svg v-for="n in 5" :key="n" width="202" class="opacity-40" height="278" viewBox="0 0 202 278"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- <rect x="6.5" y="0.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE"/> -->
                        <rect x="0.5" y="5.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE" />
                    </svg>
                </div>
                <div class="p-[20px] flex flex-row  items-center gap-[15px] justify-center">
                    <button @click="scanPhoto"
                        class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <line x1="8.99289" y1="0.942383" x2="8.99289" y2="17.0576" stroke="#3E1821" />
                            <line x1="17.0174" y1="9.00928" x2="0.985183" y2="9.05078" stroke="#3E1821" />
                        </svg>
                        Add Page
                    </button>
                    <button v-if="images.length" @click="saveScript"
                        class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                            <path d="M0.778564 8.30735L5.3729 12.8235L17.2214 1.17651" stroke="#3E1821"
                                stroke-linejoin="round" />
                        </svg>
                        Save
                    </button>
                </div>
            </div>
            <div v-if="isSaving"
                class="h-[80vh] bg-nano-dark flex flex-col items-center justify-center text-[19px] gap-[34.2px] fixed top-0 w-full">
                <svg width="96" height="90" viewBox="0 0 96 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M89.8692 49.3637C75.1502 52.7312 63.8216 64.4774 60.9931 79.3019C57.6257 64.5829 45.8794 53.2543 31.0549 50.4259C45.7739 47.0584 57.1025 35.3121 59.931 20.4876C63.2984 35.2066 75.0447 46.5352 89.8692 49.3637Z"
                        fill="#E5EEB9" stroke="#E5EEB9" stroke-width="1.75" stroke-linejoin="round" />
                    <path
                        d="M39.4635 21.7263C30.4727 23.7793 23.5546 30.957 21.8273 40.0133C19.7744 31.0225 12.5966 24.1044 3.54035 22.3771C12.5311 20.3242 19.4492 13.1464 21.1765 4.09015C23.2294 13.0809 30.4072 19.999 39.4635 21.7263Z"
                        fill="#E5EEB9" stroke="#E5EEB9" stroke-width="1.75" stroke-linejoin="round" />
                    <path
                        d="M38.9089 76.1403C33.5573 77.3602 29.4387 81.6319 28.4139 87.0231C27.1939 81.6714 22.9222 77.5528 17.5311 76.528C22.8827 75.308 27.0013 71.0364 28.0261 65.6452C29.2461 70.9968 33.5178 75.1155 38.9089 76.1403Z"
                        fill="#E5EEB9" stroke="#E5EEB9" stroke-width="1.75" stroke-linejoin="round" />
                </svg>
                <h6 class="text-[25px]">Analyzing text...</h6>
            </div>

            <Modal :isVisible="isEditModalVisible" @close="closeEditModal">
                <h3>Edit Script {{ selectedIndex + 1 }}/{{ images.length }}</h3>
                <textarea class="text-black p-2 w-full" v-model="images[selectedIndex].text"></textarea>

            </Modal>
            <Modal :isVisible="isDeleteModalVisible" @close="closeDeleteModal">
                <h3 class="text-[25px] text-center">Are you sure you want to permanently delete this script?</h3>
                <div class="flex flex-col mt-[78px] gap-[15px]">
                    <button
                        class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.778564 8.395L5.3729 12.9112L17.2214 1.26416" stroke="#3E1821"
                                stroke-linejoin="round" />
                        </svg>
                        Yes
                    </button>
                    <button
                        class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1.96435" y1="1.44914" x2="15.144" y2="14.7536" stroke="#3E1821" />
                            <line y1="-0.5" x2="18.7273" y2="-0.5"
                                transform="matrix(-0.703768 0.71043 0.71043 0.703768 14.7888 1.80103)"
                                stroke="#3E1821" />
                        </svg>
                        No
                    </button>
                </div>
            </Modal>
        </div>
        
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import CarouselCustom from '@/components/CarouselCustom.vue';
import Modal from '@/components/Modal.vue'
import CarouselPlaceholder from '@/components/CarouselPlaceholder.vue';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Toast } from '@capacitor/toast';
import AssignRole from '@/components/AssignRole.vue';
import { createWorker } from 'tesseract.js';
import { parseScript } from '@/helpers/global';

export default {
    components: { Carousel, Modal, CarouselPlaceholder, AssignRole, CarouselCustom },
    data() {
        return {
            images: [],
            isEditModalVisible: false,
            isDeleteModalVisible: false,
            isEnteredTitle:false,
            isSaving: false,
            selectedIndex: 0,
            title: '',
            script: null,
            pages: [],
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
        editPage(index) {
            this.selectedIndex = index
            this.isEditModalVisible = true
        },
        async scanPhoto() {
            this.isSaving = true
            let image = {}
            try {
                image = await Camera.getPhoto({
                    quality: 90,
                    allowEditing: true,
                    resultType: CameraResultType.DataUrl
                });
            } catch (e) {
                console.log(e.message)
                Toast.show({ text: e.message })
                this.isSaving = false
                return
            }
            image.text = await this.imageToText(image.dataUrl)

            if (!this.images.length) {
                // this.title = image.text.split('\n\n')[0]
            }

            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            this.images.push(image);
            this.isSaving = false
        },
        async imageToText(src) {
            const worker = await createWorker('eng');
            const ret = await worker.recognize(src);
            await worker.terminate();

            let text = ret.data.text
            let parsed = parseScript(text)
            console.log(parsed)
            if(parsed.pages) {
                this.pages = this.pages.concat(parsed.pages)
            }
            return text
        },
        saveScript() {
            this.isSaving = true
            this.$store.dispatch('scripts/create', {
                language: 'eng',
                title: this.title,
                pages: this.pages,
            }).then(({ data, message }) => {
                Toast.show({ text: message })
                this.script = data
                this.$router.push(`/scan/${data.reference}`)
            }).catch((e) => {
                console.log('e', e)
                const message = e?.data?.message || e?.message || e?.statusText || 'An error occured'
                Toast.show({ text: message })
            }).finally(() => {
                this.isSaving = false
            })
        }
    },
    mounted() {
        if (this.$route.query.trigger) {
            // this.isEnteredTitle = true
            //  this.scanPhoto()
            this.$router.push({ path: this.$route.path, query: {} })
        }
    }
}
</script>