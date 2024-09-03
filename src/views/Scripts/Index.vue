<template>
    <div>
        <div v-if="loaded">
            <div class="h-[80vh] max-h-[80vh] overflow-y-scroll pt-[99px] flex flex-col gap-[47px]"
                v-if="scripts.length > 0">
                <div class="flex flex-col items-center justify-center">
                    <h3 class="text-[30px] text-semi text-center">Script Library</h3>
                </div>
                <div>
                    <carousel @index="(val) => currentIndex = val" :items="scripts">
                        <template v-slot:default="{ item }">
                            <div class="relative">
                                <svg width="202" height="278" viewBox="0 0 202 278" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6.5" y="0.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE" />
                                    <rect x="0.5" y="5.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE" />
                                </svg>
                                <div
                                    class="absolute top-0 h-[278px]  w-[202px] flex flex-col items-between justify-center gap-[45px]">
                                    <span class="text-sans text-[24px] text-center">{{ item.title.substring(0,
                                        100)}}</span>
                                    <span class="text-center text-[16px]">{{ item.pages?.length || 0 }} page(s)</span>
                                </div>
                            </div>
                        </template>
                    </carousel>
                    <div class="mt-[19px] flex gap-[11.93px] items-center justify-center">
                        <router-link id="edit" :to="`/scan/${scripts[currentIndex].reference}?mode=editScript`">
                            <svg width="42" height="41" viewBox="0 0 42 41" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.772949" y="0.5" width="40" height="40" rx="10" fill="#E7EEBE" />
                            <path
                                d="M13.0889 27.7796L14.3689 23.3485L22.8505 14.7862L26.4465 11.1902L30.0425 14.7862L26.4465 18.3821L17.9648 26.9445L13.4616 28.1724L13.0889 27.7796Z"
                                fill="#E7EEBE" />
                            <path
                                d="M22.8505 14.7862L14.3689 23.3485L13.0889 27.7796L13.4616 28.1724L17.9648 26.9445L26.4465 18.3821M22.8505 14.7862L26.4465 11.1902L30.0425 14.7862L26.4465 18.3821M22.8505 14.7862L26.4465 18.3821"
                                stroke="#3E1821" />
                        </svg>
                        </router-link>
                        <svg id="delete" @click="triggerDelete(scripts[currentIndex])" width="42" height="41"
                            viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.46289" y="0.5" width="40" height="40" rx="10" fill="#E7EEBE" />
                            <path
                                d="M29.4626 14.5003H13.4634M19.532 14.0004V13.4314C19.532 12.365 20.3965 11.5005 21.463 11.5005V11.5005C22.5294 11.5005 23.3939 12.365 23.3939 13.4314V14.0004M15.1185 14.5003L16.2219 29.4996H26.7041L27.8075 14.5003H15.1185Z"
                                stroke="#3E1821" />
                        </svg>
                    </div>
                </div>
                <div class="p-[20px] flex flex-col items-center gap-[15px] justify-center">
                    <router-link :to="`/rehearse/${scripts[currentIndex].reference}`"
                        class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.3033 11.352C6.28583 12.298 10.2061 15.9314 11.2886 20.6029C11.3124 20.6984 11.382 20.7722 11.4754 20.8059C11.5108 20.8187 11.5454 20.8243 11.5857 20.825C11.7265 20.8238 11.8499 20.7294 11.878 20.5971C12.8812 15.908 16.7402 12.2198 21.7034 11.2028C21.8444 11.1739 21.9393 11.0588 21.9392 10.9232C21.9378 10.7907 21.8375 10.6746 21.6969 10.6481C16.7144 9.70204 12.7941 6.06864 11.7116 1.3971C11.6795 1.26739 11.5597 1.17197 11.4144 1.17506C11.2736 1.17629 11.1503 1.27067 11.1222 1.40296C10.1189 6.092 6.2612 9.7772 1.29684 10.7972C1.15582 10.8262 1.06091 10.9413 1.06104 11.0768C1.0624 11.2093 1.16395 11.3225 1.3033 11.352Z"
                                stroke="#3E1821" />
                        </svg>

                        Rehearse
                    </router-link>
                    <router-link :to="{ path: '/scan', query: { trigger: true } }"
                        class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4081 15.7607H6.59175V5.44556H15.4081V15.7607Z" stroke="#3E1821" />
                            <path
                                d="M21.0006 13.4667V17.5646V17.5646C21.0006 19.3752 19.5328 20.843 17.7222 20.843V20.843H13.6243M21.0006 8.5333V4.43533C21.0006 2.62473 19.5328 1.15694 17.7222 1.15694H13.6243M0.999389 8.5333V4.43533C0.999389 2.62473 2.46717 1.15694 4.27777 1.15694H8.37574M0.999389 13.4667V17.5646C0.999389 19.3752 2.46717 20.843 4.27777 20.843H8.37574"
                                stroke="#3E1821" />
                        </svg>
                        Scan a new script
                    </router-link>
                </div>
            </div>
            <div v-else class="flex flex-col justify-between h-[80vh]">
                <div>
                    <div class="flex items-center justify-center flex-col p-[20px] pt-[29px]">
                        <div class="flex flex-col items-center justify-center">
                            <h3 class="text-[30px] text-semi text-center">Script Library</h3>
                        </div>
                        <div class="mt-[59.91px] flex flex-col items-center gap-[59.91px]">
                            <svg width="64" height="62" viewBox="0 0 64 62" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M35.3356 41.3069H28.8573M41.8138 38.0678H22.379M35.3356 33.2091H28.8573M41.8138 29.9699H22.379M41.8138 21.8721H22.379M35.3356 25.1112H28.8573M18.6 45.6258H45.5928V16.4736H18.6V45.6258Z"
                                    stroke="#E7EEBE" stroke-width="1.5" />
                                <path
                                    d="M62.7148 38.602V53.186C62.7148 57.6043 59.1331 61.186 54.7148 61.186H40.1308M62.7148 23.4976V10.951C62.7148 5.4075 58.221 0.913596 52.6775 0.913596H40.1308M1.47753 23.4976V10.951C1.47753 5.4075 5.9714 0.913596 11.5149 0.913596H24.0615M1.47753 38.602V51.1487C1.47753 56.6922 5.9714 61.186 11.5149 61.186H24.0615"
                                    stroke="#E7EEBE" stroke-width="1.5" />
                            </svg>

                            <h6 class="text-[25px] text-center">Your library is currently empty. Scan your first script
                                and let’s
                                get started!</h6>
                        </div>
                    </div>
                </div>
                <div class="p-[20px] flex items-center justify-center">
                    <router-link :to="{ path: '/scan', query: { trigger: true } }"
                        class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px]">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4081 15.7607H6.59175V5.44556H15.4081V15.7607Z" stroke="#3E1821" />
                            <path
                                d="M21.0006 13.4667V17.5646V17.5646C21.0006 19.3752 19.5328 20.843 17.7222 20.843V20.843H13.6243M21.0006 8.5333V4.43533C21.0006 2.62473 19.5328 1.15694 17.7222 1.15694H13.6243M0.999389 8.5333V4.43533C0.999389 2.62473 2.46717 1.15694 4.27777 1.15694H8.37574M0.999389 13.4667V17.5646C0.999389 19.3752 2.46717 20.843 4.27777 20.843H8.37574"
                                stroke="#3E1821" />
                        </svg>
                        Scan a new script
                    </router-link>
                </div>
            </div>

          
            <Modal :isVisible="isDeleteModalVisible" @close="closeDeleteModal">
                <h3 class="text-[25px] text-center">Are you sure you want to permanently delete this script?</h3>
                <div class="flex flex-col mt-[78px] gap-[15px]">
                    <button @click="deleteScript"
                        class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.778564 8.395L5.3729 12.9112L17.2214 1.26416" stroke="#3E1821"
                                stroke-linejoin="round" />
                        </svg>
                        Yes
                    </button>
                    <button @click="closeDeleteModal"
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
        <div v-else
            class="h-[80vh] bg-nano-dark flex flex-col items-center justify-center text-[19px] gap-[34.2px] fixed top-0 w-full">
            <!-- <svg width="96" height="90" viewBox="0 0 96 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M89.8692 49.3637C75.1502 52.7312 63.8216 64.4774 60.9931 79.3019C57.6257 64.5829 45.8794 53.2543 31.0549 50.4259C45.7739 47.0584 57.1025 35.3121 59.931 20.4876C63.2984 35.2066 75.0447 46.5352 89.8692 49.3637Z"
                    fill="#E5EEB9" stroke="#E5EEB9" stroke-width="1.75" stroke-linejoin="round" />
                <path
                    d="M39.4635 21.7263C30.4727 23.7793 23.5546 30.957 21.8273 40.0133C19.7744 31.0225 12.5966 24.1044 3.54035 22.3771C12.5311 20.3242 19.4492 13.1464 21.1765 4.09015C23.2294 13.0809 30.4072 19.999 39.4635 21.7263Z"
                    fill="#E5EEB9" stroke="#E5EEB9" stroke-width="1.75" stroke-linejoin="round" />
                <path
                    d="M38.9089 76.1403C33.5573 77.3602 29.4387 81.6319 28.4139 87.0231C27.1939 81.6714 22.9222 77.5528 17.5311 76.528C22.8827 75.308 27.0013 71.0364 28.0261 65.6452C29.2461 70.9968 33.5178 75.1155 38.9089 76.1403Z"
                    fill="#E5EEB9" stroke="#E5EEB9" stroke-width="1.75" stroke-linejoin="round" />
            </svg> -->
            <img src="@/assets/star blink.gif" class="w-24" />
            <h6 class="text-[25px] -mt-20">Analyzing Text...</h6>
        </div>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Modal from '@/components/Modal.vue'
import { Toast } from '@capacitor/toast';

export default {
    components: { Carousel, Modal },
    data() {
        return {
            isDeleteModalVisible: false,
            loaded: false,
            currentIndex: 0,
            deleteItem: null,
        }
    },
    methods: {
        openDeleteModal() {
            this.isDeleteModalVisible = true;
        },
        closeDeleteModal() {
            this.isDeleteModalVisible = false;
        },
        triggerDelete(item) {
            console.log('item', item)
            this.deleteItem = item;
            this.openDeleteModal()
        },
        deleteScript() {
            this.loaded = false
            this.$store.dispatch('scripts/deleteScript', this.deleteItem.reference)
                .then(({ data, message }) => {
                    console.log('data', data, 'message', message)
                    this.$store.dispatch('scripts/fetchScripts').finally(() => {
                        this.loaded = true
                        Toast.show({ text: message })
                    })

                }).catch((e) => {
                    console.log('e', e)
                    this.loaded = true
                    Toast.show({ text: e.data?.message || e.message })
                }).finally(() => {

                    this.closeDeleteModal()
                })
        }
    },
    computed: {
        scripts() {
            return this.$store.getters['scripts/scripts']
        }
    },
    mounted() {
        this.loaded = this.scripts.length > 0
        this.$store.dispatch('scripts/fetchScripts').finally(() => {
            this.loaded = true
        })
    }
}
</script>