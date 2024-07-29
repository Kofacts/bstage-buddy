<template>
    <div v-if="loaded" :class="{ blur: !loaded}">
        <div class="h-[83.4vh] max-h-[83.4vh] overflow-y-scroll pt-[29px] flex flex-col gap-[47px]" > 
            <div class="flex flex-col gap-[45px] p-[35px] pt-0 pb-0"> 
                <h3 class="text-[30px] text-semi text-center">My Performance</h3>
                <h6 class="text-[35px] text-center text-semi">You are closer to becoming a star!</h6>
            </div>
            <div>
                <div class="flex flex-col items-center justify-center m-[46px] mt-0 mb-0 gap-[21px]"> 
                    <h6 class="text-[25px]">{{ script.title }}</h6>
                    <div class="relative w-full border h-[27px] border-nano-light"> 
                        <div :style="`width: ${Number(completionRate)}%`" :class="`h-[27px] absolute left-0 bg-nano-light`"></div>
                    </div>
                    <div class="flex items-center flex-col justify-center text-[18px]"> 
                        <span>{{completionRate}}% completed</span>
                        <span>{{ mistakes }} mistake(s) to review</span>
                    </div>
                </div>
            </div>
            <div  class="p-[20px] flex flex-col items-center gap-[15px] justify-center"> 
                <router-link v-if="mistakes" :to="`/rehearse/${script.reference}/results`" class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4985 7.03076V12.0308" stroke="#3E1821" stroke-linejoin="round"/>
                        <path d="M10.4985 1.03076L20.0248 17.5308H0.972256L10.4985 1.03076Z" stroke="#3E1821" stroke-linejoin="round"/>
                        <circle cx="10.4985" cy="13.864" r="0.75" fill="#3E1821"/>
                    </svg>

                    Review mistakes
                </router-link>
            </div>
        </div>
    </div>
    <div v-else
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
                <h6 class="text-[25px]">Analyzing practice...</h6>
            </div>
</template>

<script>
import { subSeconds, formatDistanceToNow } from 'date-fns';
export default {

    data() {
        return {
            loaded: false,
        }
    },
    methods: {
       timeAgo(seconds) {
            const date = subSeconds(new Date(), seconds);
            return formatDistanceToNow(date, { addSuffix: false });
       }
    },
    computed: {
        script() {
            return this.$store.getters['scripts/script']
        },
        lines() {
            let lines = []
            let index = 0
            const pages = this.script.pages || []
            pages.forEach((page) => {
                lines = lines.concat(page.lines.map((e => {
                    let line = JSON.parse(JSON.stringify(e))
                    line.index = index++
                    line.page = {
                        number: page.number,
                        reference: page.reference
                    }
                    return line
                })))
            })
            return lines
        },
        completionRate() {
            let lines = this.lines.filter((s) => s.character?.is_self)
            let completed = lines.filter((s) => !!s.last_practiced_at)
            let result = (completed.length / lines.length) * 100
            return parseInt(result)
        },
        mistakes() {
            return this.lines.reduce((a, b) => a + b.mistakes, 0)
        }

    },
    created() {
        this.loaded = this.script?.reference === this.$route.params.reference
        Promise.all([
            this.$store.dispatch('scripts/fetchScript', this.$route.params.reference),
        ]).finally(() => {
            this.loaded = true
        })

    },
}
</script>