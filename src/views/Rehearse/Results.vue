<template>
    <div v-if="loaded" :class="{ blur: !loaded}">
        <div class="h-[83.4vh] max-h-[83.4vh] overflow-y-scroll pt-[29px] flex flex-col gap-[47px]" > 
            <div class="flex flex-col gap-[45px] p-[35px] pt-0 pb-0"> 
                <h3 class="text-[30px] text-semi text-center">You are doing ok</h3>
                <!-- <h6 class="text-[35px] text-center text-semi">You are closer to becoming a star!</h6> -->
            </div>
            <div class="h-[300px] p-[10px]"> 
                <Bar v-if="chartData" :data="chartData" :options="chartOptions" />
            </div>
            <div class="p-[65px] pt-[20px] pb-[20px] flex flex-col items-center gap-[15px] justify-center"> 
                <router-link  v-if="mistakes"  :to="`/rehearse/${script.reference}/results/review`" class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4985 7.03076V12.0308" stroke="#3E1821" stroke-linejoin="round"/>
                        <path d="M10.4985 1.03076L20.0248 17.5308H0.972256L10.4985 1.03076Z" stroke="#3E1821" stroke-linejoin="round"/>
                        <circle cx="10.4985" cy="13.864" r="0.75" fill="#3E1821"/>
                    </svg>

                    Review mistakes
                </router-link>
                <router-link :to="`/rehearse/${script.reference}`" class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M1.07637 9.41411C1.07637 13.7625 4.62944 17.2973 9.00016 17.2973C13.3709 17.2973 16.924 13.7772 16.924 9.41411C16.924 5.05097 13.3709 1.53088 9.00016 1.53088C6.26474 1.53088 3.85639 2.90638 2.42921 5.0066" stroke="#3E1821" stroke-miterlimit="10" stroke-linejoin="round"/>
                        <path d="M1.81976 0.702637V5.50948H6.63647" stroke="#3E1821" stroke-miterlimit="10" stroke-linejoin="round"/>
                    </svg>
                    Try again!
                </router-link>
            </div>
        </div>
    </div>
    <div v-else class="h-[80vh] bg-nano-dark flex flex-col items-center justify-center text-[19px] gap-[34.2px] fixed top-0 w-full">
        <img src="@/assets/star blink.gif" class="w-24" />
        <h6 class="text-[25px] -mt-[20px]">Analyzing practice...</h6>
    </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    data() {
        return {
            loaded: false,
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            align: 'end',
                            text: 'MISTAKES',
                            color: '#E7EEBE', // Color of the axis title
                            font: {
                                family: 'Courier New', // Font family of the axis title
                                size: 14, // Font size of the axis title
                                style: 'bold', // Font style of the axis title
                            }
                        },
                        ticks: {
                            color: '#E7EEBE', // Color of the ticks
                            font: {
                                family: 'Courier New', // Font family of the axis title
                                size: 14, // Font size of the axis title
                                style: 'bold', // Font style of the axis title
                            }
                        },
                        font: {
                            family: 'Arial', // Font family of the axis title
                            size: 26, // Font size of the axis title
                            style: 'bold', // Font style of the axis title
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            align: 'end',
                            text: 'PAGE',
                            color: '#E7EEBE', // Color of the axis title
                            font: {
                                family: 'Courier New', // Font family of the axis title
                                size: 14, // Font size of the axis title
                                style: 'bold', // Font style of the axis title
                            }
                            
                        },
                        ticks: {
                            color: '#E7EEBE', // Color of the ticks,
                            font: {
                                family: 'Courier New', // Font family of the axis title
                                size: 14, // Font size of the axis title
                                style: 'bold', // Font style of the axis title
                            }
                        },
                    },
                },
                 plugins: {
                    legend: {
                        labels: {
                            color: '#FFFFFF', // Color of the legend text
                            borderColor: '#FFFFFF',
                        }
                    },
                    tooltip: {
                        titleColor: '#FFFFFF', // Color of the tooltip title
                        bodyColor: '#FFFFFF', // Color of the tooltip body
                    }
                }
            },
        }
    },
    computed: {
        script() {
            let s = JSON.parse(JSON.stringify(this.$store.getters['scripts/script']))
            let pages = (s.pages || []).map((page) => {
                let lines = page.lines
                lines.sort((a, b) => a.order - b.order)
                page.lines = lines

                return page
            })
            pages.sort((a, b) => a.number - b.number)
            s.pages = pages

            return s
        },
        chartData() {
            return {
                labels: this.script.pages.map((s) => s.number), // Example pages
                datasets: [
                    {
                        label: 'Mistakes',
                        barThickness: 5,
                        backgroundColor: '#f87979',
                        data: this.script.pages.map((s) => s.lines.reduce((a, b) => a + b.mistakes, 0)), // Example mistakes data
                    },
                ],
            }
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
            lines.sort((a, b) => a.order - b.order)
            return lines
        },
        mistakes() {
            return this.lines.reduce((a, b) => a + b.mistakes, 0)
        }
    },
    created() {
        Promise.all([
            this.$store.dispatch('scripts/fetchScript', this.$route.params.reference),
        ]).finally(() => {
            this.loaded = true
        })

    },
    components: {
        Bar
    },
}
</script>