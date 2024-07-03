<template>
    <div :class="{ blur: !loaded}">
        <div v-for="script in scripts" :key="script.reference" class="h-[83.4vh] max-h-[83.4vh] overflow-y-scroll pt-[29px] flex flex-col gap-[47px]" v-if="scripts.length > 0"> 
            <div class="flex flex-col gap-[45px] p-[35px] pt-0 pb-0"> 
                <h3 class="text-[30px] text-semi text-center">My Performance</h3>
                <h6 class="text-[35px] text-center text-semi">You are closer to becoming a star!</h6>
            </div>
            
            <div class="p-[20px] flex flex-col items-center gap-[15px] justify-center"> 
                <router-link :to="`/stats/${script.reference}`" class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    

                    {{ script.title}}
                </router-link >
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
                <router-link :to="`/rehearse`" class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px]">
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.3033 11.352C6.28583 12.2981 10.2061 15.9315 11.2886 20.603C11.3124 20.6985 11.382 20.7723 11.4754 20.806C11.5108 20.8188 11.5454 20.8244 11.5857 20.825C11.7265 20.8238 11.8499 20.7294 11.878 20.5971C12.8812 15.9081 16.7402 12.2199 21.7034 11.2029C21.8444 11.1739 21.9393 11.0589 21.9392 10.9233C21.9378 10.7908 21.8375 10.6746 21.6969 10.6481C16.7144 9.70211 12.7941 6.0687 11.7116 1.39716C11.6795 1.26746 11.5597 1.17203 11.4144 1.17512C11.2736 1.17635 11.1503 1.27073 11.1222 1.40302C10.1189 6.09206 6.2612 9.77726 1.29684 10.7973C1.15582 10.8262 1.06091 10.9413 1.06104 11.0769C1.0624 11.2094 1.16395 11.3225 1.3033 11.352Z" stroke="#3E1821"/>
                    </svg>
                    Rehearse
                </router-link >
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