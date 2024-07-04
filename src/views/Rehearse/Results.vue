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
                <button class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4985 7.03076V12.0308" stroke="#3E1821" stroke-linejoin="round"/>
                        <path d="M10.4985 1.03076L20.0248 17.5308H0.972256L10.4985 1.03076Z" stroke="#3E1821" stroke-linejoin="round"/>
                        <circle cx="10.4985" cy="13.864" r="0.75" fill="#3E1821"/>
                    </svg>

                    Review mistakes
                </button>
                <button class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M1.07637 9.41411C1.07637 13.7625 4.62944 17.2973 9.00016 17.2973C13.3709 17.2973 16.924 13.7772 16.924 9.41411C16.924 5.05097 13.3709 1.53088 9.00016 1.53088C6.26474 1.53088 3.85639 2.90638 2.42921 5.0066" stroke="#3E1821" stroke-miterlimit="10" stroke-linejoin="round"/>
                        <path d="M1.81976 0.702637V5.50948H6.63647" stroke="#3E1821" stroke-miterlimit="10" stroke-linejoin="round"/>
                    </svg>
                    Try again!
                </button>
            </div>
        </div>
    </div>
    <div v-else class="h-[80vh] bg-nano-dark flex flex-col items-center justify-center text-[19px] gap-[34.2px] fixed top-0 w-full">
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
import moment from 'moment'
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
// import * as chartConfig from './chartConfig.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    data() {
        return {
            loaded: true,
            chartData: {
                labels: ['1', '2', '3', '4', '5'], // Example pages
                datasets: [
                    {
                        label: 'Mistakes',
                        barThickness: 5,
                        backgroundColor: '#f87979',
                        data: [5, 9, 3, 4, 8], // Example mistakes data
                    },
                ],
            },
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
    components: {
        Bar
    },
}
</script>