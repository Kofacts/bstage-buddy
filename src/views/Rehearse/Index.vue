<template>
    <div>
        <div class="h-[83.4vh] max-h-[83.4vh] overflow-y-scroll pt-[99px] flex flex-col gap-[47px]" v-if="scripts.length > 0"> 
            <div class="flex flex-col gap-[17px] p-[35px] pt-0 pb-0"> 
                <h3 class="text-[30px] text-semi text-center">Rehearse</h3>
                <h6 class="text-[25px] text-center" v-if="scripts.length > 0">Pick a script, let's make you a star!</h6>
                <h6 class="text-[25px] text-center" v-else>Scan your play script and let’s get to work!</h6>
            </div>
            <div>
                <carousel :items="scripts"  @index="(val) => currentIndex = val">
                    <template v-slot:default="{ item }">
                        <div class="relative">
                            <svg width="202" height="278" viewBox="0 0 202 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="6.5" y="0.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE"/>
                                <rect x="0.5" y="5.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE"/>
                            </svg>
                            <div class="absolute top-0 h-[278px]  w-[202px] flex flex-col items-between justify-center gap-[45px]">
                                <span class="text-sans text-[24px] text-center">{{item.title}}</span>
                                <span class="text-center text-[16px]">{{ item.pages?.length || 0 }} page(s)</span>
                            </div>
                        </div>
                    </template>
                </carousel>
            </div>
            <div class="p-[20px] flex flex-col items-center gap-[15px] justify-center"> 
                <router-link :to="`/rehearse/${scripts[currentIndex].reference}`" class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.803295 11.352C5.78583 12.2981 9.7061 15.9315 10.7886 20.603C10.8124 20.6985 10.882 20.7723 10.9754 20.806C11.0108 20.8188 11.0454 20.8244 11.0857 20.825C11.2265 20.8238 11.3499 20.7294 11.378 20.5971C12.3812 15.9081 16.2402 12.2199 21.2034 11.2029C21.3444 11.1739 21.4393 11.0589 21.4392 10.9233C21.4378 10.7908 21.3375 10.6746 21.1969 10.6481C16.2144 9.70211 12.2941 6.0687 11.2116 1.39716C11.1795 1.26746 11.0597 1.17203 10.9144 1.17512C10.7736 1.17635 10.6503 1.27073 10.6222 1.40302C9.61895 6.09206 5.7612 9.77726 0.79684 10.7973C0.655821 10.8262 0.560908 10.9413 0.561035 11.0769C0.562396 11.2094 0.663954 11.3225 0.803295 11.352Z" stroke="#3E1821"/>
                    </svg>
                    Rehearse
                </router-link>
                
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
                       <carousel-placeholder :items="[]"></carousel-placeholder>
                    </div>
                </div>
            </div>
            <div class="p-[20px] flex items-center justify-center"> 
                <router-link :to="`/scan`" class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4081 15.7607H6.59175V5.44556H15.4081V15.7607Z" stroke="#3E1821"/>
                        <path d="M21.0006 13.4667V17.5646V17.5646C21.0006 19.3752 19.5328 20.843 17.7222 20.843V20.843H13.6243M21.0006 8.5333V4.43533C21.0006 2.62473 19.5328 1.15694 17.7222 1.15694H13.6243M0.999389 8.5333V4.43533C0.999389 2.62473 2.46717 1.15694 4.27777 1.15694H8.37574M0.999389 13.4667V17.5646C0.999389 19.3752 2.46717 20.843 4.27777 20.843H8.37574" stroke="#3E1821"/>
                    </svg>
                    Scan a script
                </router-link>
            </div>
        </div>

    
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
            loaded: false,
            currentIndex: 0,
        }
    },
    methods: {
       
    },
    computed: {
        scripts() {
            return this.$store.getters['scripts/scripts']
        },
       

    },
    created() {
        this.loaded = this.scripts.length > 0 
        Promise.all([
            this.$store.dispatch('scripts/fetchScripts'),
        ]).finally(() => {
            this.loaded = true
        })

    },
}
</script>