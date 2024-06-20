<template>
    <div>
        <div class="h-[83.4vh] max-h-[83.4vh] overflow-y-scroll pt-[29px] flex flex-col gap-[47px]" v-if="scripts.length > 0"> 
            <div class="flex flex-col gap-[17px] p-[35px] pt-0 pb-0"> 
                <h3 class="text-[30px] text-semi text-center">Rehearse</h3>
                <h6 class="text-[25px] text-center">Scan your play script and let’s get to work!</h6>
            </div>
            <div>
                <carousel :items="scripts">
                    <template v-slot:default="{ item }">
                        <div class="relative">
                            <svg width="202" height="278" viewBox="0 0 202 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="6.5" y="0.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE"/>
                                <rect x="0.5" y="5.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE"/>
                            </svg>
                            <div class="absolute top-0 h-[278px]  w-[202px] flex flex-col items-between justify-center gap-[45px]">
                                <span class="text-sans text-[24px] text-center pl-[15px] pr-[15px]">{{item}}</span>
                                <span class="text-center text-[16px]">4 pages</span>
                            </div>
                        </div>
                    </template>
                </carousel>
            </div>
            <div class="p-[20px] flex flex-col items-center gap-[15px] justify-center"> 
                <button class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.803295 11.352C5.78583 12.2981 9.7061 15.9315 10.7886 20.603C10.8124 20.6985 10.882 20.7723 10.9754 20.806C11.0108 20.8188 11.0454 20.8244 11.0857 20.825C11.2265 20.8238 11.3499 20.7294 11.378 20.5971C12.3812 15.9081 16.2402 12.2199 21.2034 11.2029C21.3444 11.1739 21.4393 11.0589 21.4392 10.9233C21.4378 10.7908 21.3375 10.6746 21.1969 10.6481C16.2144 9.70211 12.2941 6.0687 11.2116 1.39716C11.1795 1.26746 11.0597 1.17203 10.9144 1.17512C10.7736 1.17635 10.6503 1.27073 10.6222 1.40302C9.61895 6.09206 5.7612 9.77726 0.79684 10.7973C0.655821 10.8262 0.560908 10.9413 0.561035 11.0769C0.562396 11.2094 0.663954 11.3225 0.803295 11.352Z" stroke="#3E1821"/>
                    </svg>
                    Rehearse
                </button>
                
            </div>
        </div>
        <div v-else class="flex flex-col justify-between h-[83.4vh] max-h-[83.4vh] overflow-scroll-y">
            <div>
                <div class="flex items-center justify-center flex-col p-[20px] pt-[29px]"> 
                    <div class="flex flex-col gap-[17px] items-center justify-center">
                       <h3 class="text-[30px] text-semi text-center">Rehearse</h3>
                        <h6 class="text-[25px] text-center">Scan your play script and let’s get to work!</h6>
                    </div>
                    <div class="mt-[52px]">
                       <carousel-placeholder></carousel-placeholder>
                    </div>
                </div>
            </div>
            <div class="p-[20px] flex items-center justify-center"> 
                <button class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4081 15.7607H6.59175V5.44556H15.4081V15.7607Z" stroke="#3E1821"/>
                        <path d="M21.0006 13.4667V17.5646V17.5646C21.0006 19.3752 19.5328 20.843 17.7222 20.843V20.843H13.6243M21.0006 8.5333V4.43533C21.0006 2.62473 19.5328 1.15694 17.7222 1.15694H13.6243M0.999389 8.5333V4.43533C0.999389 2.62473 2.46717 1.15694 4.27777 1.15694H8.37574M0.999389 13.4667V17.5646C0.999389 19.3752 2.46717 20.843 4.27777 20.843H8.37574" stroke="#3E1821"/>
                    </svg>
                    Scan a script
                </button>
            </div>
        </div>

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
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Modal from '@/components/Modal.vue'
import CarouselPlaceholder from '@/components/CarouselPlaceholder.vue';
export default {
    components: { Carousel, Modal, CarouselPlaceholder },
    data() {
        return {
            scripts: ["Romeo and Juliet"],
            isEditModalVisible: false,
            isDeleteModalVisible: false,
            images: [
                'https://via.placeholder.com/800x300?text=Slide+1',
                'https://via.placeholder.com/800x300?text=Slide+2',
                'https://via.placeholder.com/800x300?text=Slide+3',
            ],
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
    }
}
</script>