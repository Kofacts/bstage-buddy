<template>
    <div :class="`relative${loaded ? '' : ' blur'}`">
        <div
            class="h-[83.4vh] max-h-[83.4vh] overflow-y-scroll p-[10px] pt-0 pl-0 pr-0 pb-0 flex flex-col bg-nano-dark">
            <div class="fixed top-8 w-full z-20">
                <div class="flex items-center justify-between pl-[10px] pr-[10px] pb-[15px] bg-nano-dark">
                    <svg @click="$router.go(-1)" width="14" height="23" viewBox="0 0 14 23" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 22L2 11.5L12.5 1" stroke="#E7EEBE" stroke-width="2" />
                    </svg>
                    <div>
                        <h6 class="text-[30px] text-semi" v-if="modeType !== 'editScript'">{{ script.title }}</h6>
                        <input v-else type="text"
                            class="bg-[#4A232C] text-[30px] h-[33.674px] text-center outline-none text-semi"
                            v-model="script.title" />
                    </div>
                    <div>
                    <svg @click="isSavingModalVisible = true" width="26" height="20" viewBox="0 0 26 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.19995 11.4082L7.90583 18L25.2 1" stroke="#E7EEBE" stroke-width="2" />
                    </svg>
                    </div>
                </div>
                <div v-show="modeType == 'editScript'"
                    class="h-[65px] w-full bg-[#3e1821d4] sticky top-0 pt-[23px] pl-[17px] pb-[23px] pr-[17px]">
                    <div class="flex items-center justify-between">
                        <svg width="142" height="19" viewBox="0 0 142 19" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5343 10.708H122.027" stroke="#E7EEBE" stroke-width="2"
                                stroke-linecap="round" />
                            <circle cx="23.3326" cy="10.4657" r="5.79819" fill="#E7EEBE" />
                            <path
                                d="M9.04773 11.9697H4.73523L3.85242 14.3682H5.11023C5.26648 14.3682 5.37846 14.3994 5.44617 14.4619C5.51388 14.5192 5.54773 14.5973 5.54773 14.6963C5.54773 14.79 5.51388 14.8682 5.44617 14.9307C5.37846 14.9932 5.26648 15.0244 5.11023 15.0244H2.6571C2.50085 15.0244 2.38888 14.9932 2.32117 14.9307C2.25346 14.8682 2.2196 14.79 2.2196 14.6963C2.2196 14.5973 2.25346 14.5192 2.32117 14.4619C2.38888 14.3994 2.50085 14.3682 2.6571 14.3682H3.16492L6.06335 6.54004H4.12585C3.9696 6.54004 3.85763 6.51139 3.78992 6.4541C3.72221 6.3916 3.68835 6.31087 3.68835 6.21191C3.68835 6.11296 3.72221 6.03483 3.78992 5.97754C3.85763 5.91504 3.9696 5.88379 4.12585 5.88379H7.43054L10.6337 14.3682H11.1415C11.2977 14.3682 11.4097 14.3994 11.4774 14.4619C11.5451 14.5192 11.579 14.5973 11.579 14.6963C11.579 14.79 11.5451 14.8682 11.4774 14.9307C11.4097 14.9932 11.2977 15.0244 11.1415 15.0244H8.69617C8.53471 15.0244 8.42013 14.9932 8.35242 14.9307C8.28471 14.8682 8.25085 14.79 8.25085 14.6963C8.25085 14.5973 8.28471 14.5192 8.35242 14.4619C8.42013 14.3994 8.53471 14.3682 8.69617 14.3682H9.94617L9.04773 11.9697ZM8.79773 11.3135L6.98523 6.54004H6.74304L4.98523 11.3135H8.79773Z"
                                fill="#E7EEBE" />
                            <path
                                d="M137.702 10.2515H130.963L129.584 13.999H131.549C131.793 13.999 131.968 14.0479 132.074 14.1455C132.18 14.235 132.233 14.3571 132.233 14.5117C132.233 14.6582 132.18 14.7803 132.074 14.8779C131.968 14.9756 131.793 15.0244 131.549 15.0244H127.716C127.472 15.0244 127.297 14.9756 127.191 14.8779C127.085 14.7803 127.033 14.6582 127.033 14.5117C127.033 14.3571 127.085 14.235 127.191 14.1455C127.297 14.0479 127.472 13.999 127.716 13.999H128.51L133.038 1.76758H130.011C129.767 1.76758 129.592 1.72282 129.486 1.6333C129.38 1.53564 129.328 1.40951 129.328 1.25488C129.328 1.10026 129.38 0.97819 129.486 0.888672C129.592 0.791016 129.767 0.742188 130.011 0.742188H135.175L140.18 13.999H140.973C141.217 13.999 141.392 14.0479 141.498 14.1455C141.604 14.235 141.657 14.3571 141.657 14.5117C141.657 14.6582 141.604 14.7803 141.498 14.8779C141.392 14.9756 141.217 15.0244 140.973 15.0244H137.152C136.9 15.0244 136.721 14.9756 136.615 14.8779C136.509 14.7803 136.456 14.6582 136.456 14.5117C136.456 14.3571 136.509 14.235 136.615 14.1455C136.721 14.0479 136.9 13.999 137.152 13.999H139.105L137.702 10.2515ZM137.311 9.22607L134.479 1.76758H134.1L131.354 9.22607H137.311Z"
                                fill="#E7EEBE" />
                        </svg>

                        <svg width="57" height="18" viewBox="0 0 57 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.44778 5.9466H12.8624C14.5534 5.9466 17.9355 6.95174 17.9355 10.9723C17.9355 14.9928 14.5534 15.9979 12.8624 15.9979H5.67541M1.44778 5.9466L5.67541 1.75854M1.44778 5.9466L5.67541 10.1347"
                                stroke="#E7EEBE" stroke-width="2" />
                            <path
                                d="M53.9878 5.9466H42.5732C40.8822 5.9466 37.5001 6.95174 37.5001 10.9723C37.5001 14.9928 40.8822 15.9979 42.5732 15.9979H49.7602M53.9878 5.9466L49.7602 1.75854M53.9878 5.9466L49.7602 10.1347"
                                stroke="#E7EEBE" stroke-width="2" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- <div class="h-[65px]w-full bg-black sticky top-0 pt-[23px] pl-[17px] pb-[23px] pr-[17px]"> 
                Worse gang
            </div> -->

            <div id="script-wrapper" :class="{ 'pt-36': modeType == 'editScript' }"
                class="h-[10000px] relative bg-nano-light flex flex-col gap-[10px] text-black pt-16 pl-[20px] pr-[20px]">
                <!-- lines goes here depending on mode-->


                <div :class="`mt-${index} pb-[50px]`" v-for="(page, index) in script.pages" :key="page.reference">
                    <div class="flex items-end gap-2  justify-end mb-4">
                        <button @click="modeType = 'assign'" class=" rounded-b-[20px] bg-[#f8ffd2] pt-1.5 pb-1.5 pl-2.5 pr-2.5">+ Add Character</button>
                        <button @click="triggerAddDialog({
                            script: script.reference,
                            page: page.reference,
                            order: script.pages[index].lines[script.pages[index].lines.length - 1].order || script.pages[index].lines.length,
                            index,
                        })" class=" rounded-b-[20px] bg-[#f8ffd2] pt-1.5 pb-1.5 pl-2.5 pr-2.5">+ Add a Dialog</button>
                    </div>

                    <!-- line modal-->
                    <add-dialogue :key="page.reference" v-show="showDialogue && addLine.script" :script="addLine?.script"
                        :page="addLine.page" :order="addLine.order" :characters="currentScript.characters"
                        :showDialogue="showDialogue" @closeDialogue="showDialogue = false"
                        @newLine="(val) => script.pages[addLine.index].lines.push(val)"></add-dialogue>


                    <div :class="{ 'top-40': modeType == 'editScript' }"
                        class="fixed flex justify-between items-center left-0 pl-4 pr-4 w-full top-24">
                        {{ currentPage }}/{{ script.pages?.length }}
                        <span class="text-xs text-gray-500">Reorder lines by dragging each item</span>
                    </div>

                    <draggable v-model="script.pages[index].lines" group="people" @start="drag = true" @end="drag = false"
                        @change="handleOrderChange" item-key="id">
                        <template #item="{ element }">
                            <div class="relative" :class="{ 'ml-20': element.character?.is_self }">
                                <button
                                    class="absolute -left-3 top-12 flex items-center justify-center bg-[#f8ffd2] h-6 w-6 rounded-full">
                                    <svg fill="black" width="18" height="18" clip-rule="evenodd" fill-rule="evenodd"
                                        stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m2.394 15.759s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm0-3.113s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm10.271-9.455c-.246-.128-.471-.191-.692-.191-.223 0-.443.065-.675.191l-8.884 5.005c-.276.183-.414.444-.414.698 0 .256.139.505.414.664l8.884 5.006c.221.133.447.203.678.203.223 0 .452-.065.689-.203l8.884-5.006c.295-.166.451-.421.451-.68 0-.25-.145-.503-.451-.682zm-8.404 5.686 7.721-4.349 7.72 4.349-7.72 4.35z"
                                            fill-rule="nonzero" />
                                    </svg>
                                </button>
                                <div class="flex items-center flex-col">
                                    <label class="pt-2">{{ element?.character?.name }}</label>
                                    <textarea @focus="() => currentPage = page.number" v-auto-resize
                                        class="w-[92%] mx-auto h-auto outline-none p-[10px] pb-0 rounded-[10px] text-center text-[16px] text-nano-dark"
                                        style="background:#DCE2B3" v-model="element.content"></textarea>
                                </div>
                                <button
                                    class="absolute right-0 top-12 flex items-center justify-center bg-red-700 h-6 rounded-full w-6">
                                    <svg fill="white" width="18" height="18" clip-rule="evenodd" fill-rule="evenodd"
                                        stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                                            fill-rule="nonzero" />
                                    </svg>
                                </button>
                            </div>
                        </template>
                    </draggable>

                    <!-- <div class="flex flex-col relative mb-[10px]" :class="{ 'ml-20': line.character.is_self }"
                            v-for="(line, i) in script.pages[index].lines" :key="line.reference">
                            <button class="absolute left-0 flex items-center justify-center bg-[#f8ffd2] h-6 w-6 rounded-full">
                                <svg fill="black" width="18" height="18"  clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.394 15.759s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm0-3.113s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm10.271-9.455c-.246-.128-.471-.191-.692-.191-.223 0-.443.065-.675.191l-8.884 5.005c-.276.183-.414.444-.414.698 0 .256.139.505.414.664l8.884 5.006c.221.133.447.203.678.203.223 0 .452-.065.689-.203l8.884-5.006c.295-.166.451-.421.451-.68 0-.25-.145-.503-.451-.682zm-8.404 5.686 7.721-4.349 7.72 4.349-7.72 4.35z" fill-rule="nonzero"/></svg>
                            </button> -->
                    <!-- <label class="pt-2">{{ line.character.name }}</label> -->
                    <!-- <textarea @focus="() => currentPage = page.number" v-auto-resize
                                class="w-[92%] mx-auto h-auto outline-none p-[10px] pb-0 rounded-[10px] text-center text-[16px] text-nano-dark"
                                style="background:#DCE2B3" v-model="script.pages[index].lines[i].content"></textarea>
                            <button class="absolute right-0 flex items-center justify-center bg-red-700 h-6 rounded-full w-6">
                                <svg fill="white" width="18" height="18" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/></svg>
                            </button>
                        </div> -->
                    <hr>
                </div>
            </div>
        </div>
        <assign-role @closeCharModal="modeType = ''" @charactersChange="handleRoleChange" :key="currentScript.reference" :voices="voices"
            :characters="currentScript.characters" v-if="modeType == 'assign'"></assign-role>


        <Modal :isVisible="isSavingModalVisible" @close="isSavingModalVisible = false">
            <h3 class="text-[25px] text-center">Do you want to save the edition changes?</h3>
            <div class="flex flex-col mt-[78px] gap-[15px]">
                <button @click="updateScript" :disabled="saving"
                    class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.778564 8.395L5.3729 12.9112L17.2214 1.26416" stroke="#3E1821"
                            stroke-linejoin="round" />
                    </svg>
                    {{ saving ? 'Saving...' : 'Save' }}
                </button>
                <button @click="() => { isSavingModalVisible = false; modeType = 'edit' }"
                    class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.96435" y1="1.44914" x2="15.144" y2="14.7536" stroke="#3E1821" />
                        <line y1="-0.5" x2="18.7273" y2="-0.5"
                            transform="matrix(-0.703768 0.71043 0.71043 0.703768 14.7888 1.80103)" stroke="#3E1821" />
                    </svg>
                    Discard
                </button>
            </div>
        </Modal>

        <div class="fixed h-[100vh]  z-50 w-full top-0" v-show="modeType == 'edit'">
            <div class="h-[60vh]" @click="modeType = ''">

            </div>
            <div v-if="modeType == 'edit'"
                class="h-[40vh] flex flex-col gap-[15px] relative -top-[12vh] bg-[#3e182166] rounded-t-[10px] pt-[24.5px] pb-[24.5px] pl-[51px] pr-[51px]">
                <button @click="modeType = 'editScript'"
                    class="rounded-[15px] bg-nano-light w-full pt-[20px] pb-[20px] pl-[24px] pr-[24px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.0919 19.4656L2.49245 14.6168L11.7736 5.24743L15.7085 1.3125L19.6434 5.24741L15.7085 9.18234L6.42736 18.5517L1.49966 19.8954L1.0919 19.4656Z"
                            fill="#E7EEBE" />
                        <path
                            d="M11.7736 5.24743L2.49245 14.6168L1.0919 19.4656L1.49966 19.8954L6.42736 18.5517L15.7085 9.18234M11.7736 5.24743L15.7085 1.3125L19.6434 5.24741L15.7085 9.18234M11.7736 5.24743L15.7085 9.18234"
                            stroke="#3E1821" />
                    </svg>
                    Edit Script
                </button>
                <button @click="modeType = 'assign'"
                    class="rounded-[15px] bg-nano-light w-full pt-[20px] pb-[20px] pl-[24px] pr-[24px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.45166" cy="6.05273" r="3.55273" stroke="#3E1821" />
                        <path
                            d="M7.25981 9.64536C7.06236 10.1528 5.87076 11.0017 4.21453 11.9293C2.5583 12.8569 1.16918 15.5388 1 16.5821"
                            stroke="#3E1821" />
                        <path
                            d="M9.37447 9.64536C9.57192 10.1528 10.7635 11.0017 12.4197 11.9293C14.076 12.8569 15.4651 15.5388 15.6343 16.5821"
                            stroke="#3E1821" />
                        <circle cx="18.4517" cy="4.55591" r="3.55273" stroke="#3E1821" />
                        <path
                            d="M17.2599 8.14856C17.0625 8.65603 15.8709 9.50491 14.2147 10.4325C13.6025 10.7754 13.0267 11.358 12.5356 12.0089"
                            stroke="#3E1821" />
                        <path
                            d="M19.3745 8.14853C19.5719 8.656 20.7635 9.50489 22.4197 10.4325C24.076 11.3601 25.4651 14.042 25.6343 15.0853"
                            stroke="#3E1821" />
                    </svg>
                    Assign characters
                </button>
                <router-link :to="`/rehearse/${script.reference}`"
                    class="rounded-[15px] bg-nano-light w-full pt-[20px] pb-[20px] pl-[24px] pr-[24px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.3033 10.852C6.28583 11.7981 10.2061 15.4315 11.2886 20.103C11.3124 20.1985 11.382 20.2723 11.4754 20.306C11.5108 20.3188 11.5454 20.3244 11.5857 20.325C11.7265 20.3238 11.8499 20.2294 11.878 20.0971C12.8812 15.4081 16.7402 11.7199 21.7034 10.7029C21.8444 10.6739 21.9393 10.5589 21.9392 10.4233C21.9378 10.2908 21.8375 10.1746 21.6969 10.1481C16.7144 9.20211 12.7941 5.5687 11.7116 0.897162C11.6795 0.767456 11.5597 0.672027 11.4144 0.675122C11.2736 0.676351 11.1503 0.770728 11.1222 0.903024C10.1189 5.59206 6.2612 9.27726 1.29684 10.2973C1.15582 10.3262 1.06091 10.4413 1.06104 10.5769C1.0624 10.7094 1.16395 10.8225 1.3033 10.852Z"
                            stroke="#3E1821" />
                    </svg>
                    Rehearse
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Modal from '@/components/Modal.vue'
import CarouselPlaceholder from '@/components/CarouselPlaceholder.vue';
import AssignRole from '@/components/AssignRole.vue';
import AddDialogue from '@/components/AddDialogue.vue';
import { Toast } from '@capacitor/toast';
import draggable from "vuedraggable";

export default {
    components: { Carousel, Modal, CarouselPlaceholder, AssignRole, AddDialogue, draggable },
    data() {
        return {
            images: [],
            currentPage: 1,
            loaded: false,
            saving: false,
            isEditModalVisible: false,
            isDeleteModalVisible: false,
            isSavingModalVisible: false,
            isSaving: true,
            modeType: 'edit',
            showDialogue: false,
            script: {},
            addLine: {},
            drag: false,
        }
    },
    directives: {
        autoResize: {
            inserted(el) {
                const autoResize = (element) => {
                    element.style.height = 'auto'; // Reset height to allow shrinking
                    element.style.height = element.scrollHeight + 'px'; // Set height to the scroll height
                };

                el.addEventListener('input', () => autoResize(el));

                // Initial resize
                autoResize(el);
            },
            update(el) {
                const autoResize = (element) => {
                    element.style.height = 'auto';
                    element.style.height = element.scrollHeight + 'px';
                };

                autoResize(el);
            }
        }
    },
    methods: {
        updateScript() {
            this.saving = true
            let payload = {}
            Object.assign(payload, this.script)
                      
            payload.pages = payload.pages.map((page) => {
               page.lines = page.lines.map((line) => {
                let newLine = {}
                Object.assign(newLine, line)
                delete newLine.audio_url

                if(newLine.character?.voice) {
                    delete newLine.character.voice
                }
                return newLine
               })
               return page
            })
            this.$store.dispatch('scripts/update', payload)
                .then(({ data, message }) => {
                    this.isSavingModalVisible = false
                    Toast.show({ text: message })
                    Object.assign(this.script, JSON.parse(JSON.stringify(data)))
                    this.script.pages = this.script.pages.map((_, i) => {
     
                        this.script.pages[i].lines.sort((a, b) => a.order - b.order)

                        return this.script.pages[i]
                    }).sort((a, b) => a.number - b.number)
                    this.modeType = ''
                    // this.isSavingModalVisible = false;
                }).catch((e) => {
                    console.log(e)
                    const message = e?.data?.message || e.message || e.statusText || 'An error occurred'
                    Toast.show({ text: message })
                }).finally(() => {
                    this.modeType = ''
                    this.saving = false

                    console.log(this.modeType)
                })
        },
        handleRoleChange(val) {
            console.log('role change received', val)
            this.script.characters = val
        },
        triggerAddDialog(payload) {
            this.addLine = {}
            this.showDialogue = true
            this.addLine = payload
        },
        handleOrderChange(a, b) {
            this.script.pages = this.script.pages.map((page, i) => {
                page.lines = page.lines.map((s, j) => {
                    let line = s
                    delete line.audio_url
                    line.order = i + 1 + j
                    return line
                })

                return page
            })
        }
    },
    computed: {
        currentScript() {
            return this.$store.getters['scripts/script']
        },
        voices() {
            return this.$store.getters['global/voices']
        }
    },
    created() {
        Promise.all([
            this.$store.dispatch('scripts/fetchScript', this.$route.params.reference),
            this.voices.length || this.$store.dispatch('global/getVoices')
        ]).finally(() => {
            Object.assign(this.script, JSON.parse(JSON.stringify(this.currentScript)))
            this.script.pages = this.script.pages.map((_, i) => {
                this.script.pages[i].lines.sort((a, b) => a.order - b.order)

                return this.script.pages[i]
            }).sort((a, b) => a.number - b.number)
            this.loaded = true
            this.modeType = this.$route.query.mode || 'edit'
        })

    },
}
</script>