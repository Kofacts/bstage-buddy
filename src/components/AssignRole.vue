<template>
    <div v-if="show" class="model fixed z-[999] top-[5.7rem] h-[100%] w-full max-h-[100%] pb-44 overflow-y-scroll"> 
        <!-- <div class="bg-nano-dark flex items-center justify-between p-[10px] pb-[15px] pt-[29px]">
            <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 22L2 11.5L12.5 1" stroke="#E7EEBE" stroke-width="2"/>
            </svg>
            <h6 class="text-[30px] text-semi">Romeo & Juliet</h6>
            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.19995 11.4082L7.90583 18L25.2 1" stroke="#E7EEBE" stroke-width="2"/>
            </svg>
        </div> -->

        <div class="mt-[54px] p-[27.98px] flex flex-col gap-[83px]" v-if="step == 1"> 
            <h6 class="text-[25px] text-center">Now, pick a character for your practice and let your Buddy do the rest</h6>
            <button class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.95166" cy="6.55273" r="3.55273" stroke="#3E1821"/>
                    <path d="M7.75981 10.1454C7.56236 10.6528 6.37076 11.5017 4.71453 12.4293C3.0583 13.3569 1.66918 16.0388 1.5 17.0821" stroke="#3E1821"/>
                    <path d="M9.87447 10.1454C10.0719 10.6528 11.2635 11.5017 12.9197 12.4293C14.576 13.3569 15.9651 16.0388 16.1343 17.0821" stroke="#3E1821"/>
                    <circle cx="18.9519" cy="5.05591" r="3.55273" stroke="#3E1821"/>
                    <path d="M17.7599 8.64856C17.5625 9.15603 16.3709 10.0049 14.7147 10.9325C14.1025 11.2754 13.5267 11.858 13.0356 12.5089" stroke="#3E1821"/>
                    <path d="M19.8747 8.64853C20.0722 9.156 21.2638 10.0049 22.92 10.9325C24.5762 11.8601 25.9653 14.542 26.1345 15.5853" stroke="#3E1821"/>
                </svg>
                Assign roles
            </button>
        </div>
        <div  class="pl-[28px]  pr-[28px] flex flex-col gap-[19.25px] pt-[34px] pb-[34px]" v-if="step == 2"> 
            <characters v-for="(n,index) in values" :key="index" :value="n"></characters>

            <div class="flex flex-col items-center justify-center gap-[20.25px] mt-[32px]" @click="values.push({name: ''})"> 
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.5" cy="20.2393" r="20" fill="#E7EEBE"/>
                    <line x1="20.9999" y1="10.2928" x2="20.9999" y2="30.1857" stroke="#3E1821"/>
                    <line x1="30.4464" y1="20.7393" x2="10.5535" y2="20.7393" stroke="#3E1821"/>
                </svg>
                <span class="text-[18px]">Add missing character</span>

            </div>
        </div>
    </div>
</template>

<script>
import Characters from '@/components/Cards/Characters.vue';
export default {
    components: { Characters },
    props: ['show'],
    data() {
        return {
            step: 2,
            values: [
                {
                    name: 'Otilo',
                },
                {
                    name: 'Fa',
                }
            ],
            isSavable: false,
            canGoBack: true
        }
    }
}
</script>

<style scoped>
.model {
    background: #3e182166;
}
</style>