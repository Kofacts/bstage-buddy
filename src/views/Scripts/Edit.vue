<template>
    <div class="relative">
        <div class="h-[80vh] max-h-[80vh] overflow-y-scroll p-[10px] pl-0 pr-0 pb-0 flex flex-col"> 
            <div class="bg-nano-dark flex items-center justify-between pl-[10px] pr-[10px] pb-[15px]">
                <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 22L2 11.5L12.5 1" stroke="#E7EEBE" stroke-width="2"/>
                </svg>
                <h6 class="text-[30px] text-semi">Romeo & Juliet</h6>
                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19995 11.4082L7.90583 18L25.2 1" stroke="#E7EEBE" stroke-width="2"/>
                </svg>
            </div>

            <div class="h-[65px]w-full bg-black sticky top-0 pt-[23px] pl-[17px] pb-[23px] pr-[17px]"> 
                Worse gang
            </div>

            <div class="h-[10000px] bg-nano-light text-black"> 
                Content
            </div>
        </div>
        <assign-role></assign-role>

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
import { Camera, CameraResultType } from '@capacitor/camera';
import AssignRole from '@/components/AssignRole.vue';
export default {
    components: { Carousel, Modal, CarouselPlaceholder, AssignRole },
    data() {
        return {
            images: [],
            isEditModalVisible: false,
            isDeleteModalVisible: false,
            isSaving: true,
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