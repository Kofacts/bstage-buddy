<template>
    <div>
        <div class="h-[83.4vh] max-h-[83.4vh] overflow-y-scroll pt-[29px] flex flex-col gap-[47px]" v-if="scripts.length > 0"> 
            <div class="flex flex-col gap-[45px] p-[35px] pt-0 pb-0"> 
                <h3 class="text-[30px] text-semi text-center">My Performance</h3>
                <h6 class="text-[35px] text-center text-semi">You are closer to becoming a star!</h6>
            </div>
            <div>
                <div class="flex flex-col items-center justify-center m-[46px] mt-0 mb-0 gap-[21px]"> 
                    <h6 class="text-[25px]">Romeo and Julieth</h6>
                    <div class="relative w-full border h-[27px] border-nano-light"> 
                        <div class="h-[27px] absolute left-0 w-[50%] bg-nano-light"></div>
                    </div>
                    <div class="flex items-center flex-col justify-center text-[18px]"> 
                        <span>10% completed</span>
                        <span>10 mistakes to review</span>
                    </div>
                </div>
            </div>
            <div class="p-[20px] flex flex-col items-center gap-[15px] justify-center"> 
                <button class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4985 7.03076V12.0308" stroke="#3E1821" stroke-linejoin="round"/>
                        <path d="M10.4985 1.03076L20.0248 17.5308H0.972256L10.4985 1.03076Z" stroke="#3E1821" stroke-linejoin="round"/>
                        <circle cx="10.4985" cy="13.864" r="0.75" fill="#3E1821"/>
                    </svg>

                    Review mistakes
                </button>
            </div>
        </div>
        <div v-else class="flex flex-col justify-between h-[83.4vh] max-h-[83.4vh] overflow-y-scroll">
            <div>
                <div class="flex items-center justify-center flex-col p-[20px] pt-[29px]"> 
                    <div class="flex flex-col gap-[163px] items-center justify-center">
                       <h3 class="text-[30px] text-semi text-center">My Performance</h3>
                        <h6 class="text-[25px] text-center">Start practicing and see your performance here!</h6>
                    </div>
                </div>
            </div>
            <div class="p-[20px] flex items-center justify-center"> 
                <button class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px]">
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.3033 11.352C6.28583 12.2981 10.2061 15.9315 11.2886 20.603C11.3124 20.6985 11.382 20.7723 11.4754 20.806C11.5108 20.8188 11.5454 20.8244 11.5857 20.825C11.7265 20.8238 11.8499 20.7294 11.878 20.5971C12.8812 15.9081 16.7402 12.2199 21.7034 11.2029C21.8444 11.1739 21.9393 11.0589 21.9392 10.9233C21.9378 10.7908 21.8375 10.6746 21.6969 10.6481C16.7144 9.70211 12.7941 6.0687 11.7116 1.39716C11.6795 1.26746 11.5597 1.17203 11.4144 1.17512C11.2736 1.17635 11.1503 1.27073 11.1222 1.40302C10.1189 6.09206 6.2612 9.77726 1.29684 10.7973C1.15582 10.8262 1.06091 10.9413 1.06104 11.0769C1.0624 11.2094 1.16395 11.3225 1.3033 11.352Z" stroke="#3E1821"/>
                    </svg>
                    Rehearse
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
            scripts: ["Romeo and Julieth"],
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