<template>
    <div class="bg-[#4A232C] p-[22px] rounded-[10px]">
        <div class="bg-transparent relative border-b border-nano-light text-[25px] ">
            <input type="text" @input="handleNameChange" :value="character.name" placeholder="Enter Character" class="bg-transparent outline-none text-center w-full" />
            <svg class="absolute top-0 right-0" width="19" height="19" viewBox="0 0 19 19" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.8134 4.78606L2.33169 13.3484L1.05177 17.7795L1.42441 18.1723L5.92766 16.9444L14.4093 8.38203M10.8134 4.78606L14.4094 1.19006L18.0053 4.78603L14.4093 8.38203M10.8134 4.78606L14.4093 8.38203"
                    stroke="#E7EEBE" />
            </svg>
        </div>
        <div class="border rounded-2xl border-nano-light mt-[20px] flex">
            <div @click="handleSelfChange(true)"
                class="w-1/2 pt-[10px] pb-[10px] pr-[12px] pl-[12px] flex items-center gap-[8px] justify-center rounded-xl text-center"
                :class="{ 'bg-nano-light text-nano-dark': character.is_self }">
                <svg v-if="character.is_self" width="19" height="18" viewBox="0 0 19 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 12.1275L4.3725 9L3.3075 10.0575L7.5 14.25L16.5 5.25L15.4425 4.1925L7.5 12.1275Z"
                        fill="#3E1821" />
                </svg>
                Me
            </div>
            <div @click="handleSelfChange(false)"
                class="w-1/2 pt-[10px] pb-[10px] pr-[12px] pl-[12px] flex items-center gap-[8px] justify-center rounded-xl text-center"
                :class="{ 'bg-nano-light text-nano-dark': !character.is_self }">
                <svg v-if="!character.is_self" width="19" height="18" viewBox="0 0 19 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 12.1275L4.3725 9L3.3075 10.0575L7.5 14.25L16.5 5.25L15.4425 4.1925L7.5 12.1275Z"
                        fill="#3E1821" />
                </svg>
                Buddy
            </div>
        </div>
        <div>

          <button @click="handleDelete"
                                    class="mt-2 float-right flex items-center justify-center bg-red-700 h-6 rounded-full w-6">
                                    <svg fill="white" width="18" height="18" clip-rule="evenodd" fill-rule="evenodd"
                                        stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                                            fill-rule="nonzero" />
                                    </svg>
                                </button>
            <select @change="handleVoiceChange" :disabled="character.is_self"
                class="bg-nano-light h-[40px] mt-[20px] w-full text-nano-dark outline-none text-[18px] pl-[15px] pr-[15px]">
                <option :selected="voice.id === character.voice_id" v-for="voice in voices" :key="voice.reference" :value="voice.id">{{ voice.name }}
                </option>
            </select>
            
        </div>
        <div v-if="!character.is_self && voice?.audio_url" class="mt-[20px]">
            <audio-player :name="voice.name" :key="voice.id" :src="voice.audio_url"></audio-player>
        </div>

        <div>
            <div class="mt-[20px] flex items-center justify-center" v-if="false">
                <svg @click="isDeleteModalVisible = true" width="41" height="41" viewBox="0 0 41 41" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="40" height="40" rx="10" fill="#E7EEBE" />
                    <path
                        d="M28.4996 14.5003H12.5004M18.5691 14.0004V13.4314C18.5691 12.365 19.4336 11.5005 20.5 11.5005V11.5005C21.5664 11.5005 22.431 12.365 22.431 13.4314V14.0004M14.1555 14.5003L15.2589 29.4996H25.7411L26.8445 14.5003H14.1555Z"
                        stroke="#3E1821" />
                </svg>
            </div>
            <div class="mt-[20px]" v-if="!character.name">
                <button @click="isAddCharacterModalVisible = true"
                    class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.45166" cy="6.67798" r="3.55273" stroke="#3E1821" />
                        <path
                            d="M7.25981 10.2706C7.06236 10.7781 5.87076 11.627 4.21453 12.5546C2.5583 13.4822 1.16918 16.1641 1 17.2073"
                            stroke="#3E1821" />
                        <path
                            d="M9.37447 10.2706C9.57192 10.7781 10.7635 11.627 12.4197 12.5546C14.076 13.4822 15.4651 16.1641 15.6343 17.2073"
                            stroke="#3E1821" />
                        <circle cx="18.4518" cy="5.18115" r="3.55273" stroke="#3E1821" />
                        <path
                            d="M17.2599 8.7738C17.0625 9.28128 15.8709 10.1302 14.2147 11.0578C13.6025 11.4006 13.0267 11.9832 12.5356 12.6341"
                            stroke="#3E1821" />
                        <path
                            d="M19.3746 8.77377C19.572 9.28125 20.7636 10.1301 22.4199 11.0577C24.0761 11.9853 25.4652 14.6672 25.6344 15.7105"
                            stroke="#3E1821" />
                    </svg>

                    Add character
                </button>
            </div>
        </div>
        <Modal :isVisible="isDeleteModalVisible" @close="isDeleteModalVisible = false">
            <h3 class="text-[25px] text-center">Do you want to delete character {{ character.name }}?</h3>
            <div class="flex flex-col mt-[70px] pb-[40px] gap-[15px] pl-[27px] pr-[27px]">
                <button
                    class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.778564 8.395L5.3729 12.9112L17.2214 1.26416" stroke="#3E1821"
                            stroke-linejoin="round" />
                    </svg>
                    Yes
                </button>
                <button @click="isDeleteModalVisible = false"
                    class="rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.96435" y1="1.44914" x2="15.144" y2="14.7536" stroke="#3E1821" />
                        <line y1="-0.5" x2="18.7273" y2="-0.5"
                            transform="matrix(-0.703768 0.71043 0.71043 0.703768 14.7888 1.80103)" stroke="#3E1821" />
                    </svg>
                    No
                </button>
            </div>
        </Modal>

    </div>
</template>

<script>
import AudioPlayer from '@/components/AudioPlayer.vue';
import Modal from '@/components/Modal.vue';
export default {
    components: { AudioPlayer, Modal },
    props: ['char', 'voices', 'charIndex'],
    data() {
        return {
            voice: null,
            character: {},
            originalObj: {},
            isDeleteModalVisible: false,
            isAddCharacterModalVisible: false,
        }
    },
    watch: {
        character: {
            handler(newVal) {
                //console.log('character: new value', newVal.name, newVal.voice_id)
                this.voice = this.voices.find((s) => s.id === this.character.voice_id)
                this.notify(this.character)
            },
            deep: true,
            immediate: false,
        },
    },
    methods: {
        handleNameChange(e, v) {
            //console.log('handleNameChange', { e, v }, e.target.value)
            const character = JSON.parse(JSON.stringify(this.character))
            character.name = e.target.value
   
            this.notify(character)
        },
        handleSelfChange(val) {
            //console.log('handleSelfChange', val)
            const character = JSON.parse(JSON.stringify(this.character))
            character.is_self = val
   
            this.notify(character)
        },
        handleVoiceChange(e, v) {
            //console.log({ e, v }, e.target.value)
            const character = JSON.parse(JSON.stringify(this.character))
            character.voice_id = Number(e.target.value)
            this.voice = this.voices.find((s) => s.id === character.voice_id)
            //console.log('voice', this.voice)
            this.notify(character)
        },
        handleDelete(e) {
            let r = confirm(`Are you sure to delete character ${this.character?.name || ''}?`)
            if(!r) {
                return
            }
            const character = JSON.parse(JSON.stringify(this.character))
            character.deleted = true
            ///console.log('handleDelete', { e, character }, e.target.value)
            this.$store.dispatch('scripts/deleteCharacter',this.character.reference)
                .then(msg => {
                    //this.$router.go(0);
                    window.location.reload()
                })
            this.notify(character)
        },
        notify(character) {
            //console.log('ready', character)
            if(JSON.stringify(this.originalObj) !== JSON.stringify(character)) {
                this.$emit('characterEdit', {updateIndex: this.charIndex, newVal: character})
                //console.log('notified', character)
            } 
            this.character  = character
        }
    },
    mounted() {
        Object.assign(this.originalObj, JSON.parse(JSON.stringify(this.character || {})))
        this.character = JSON.parse(JSON.stringify(this.char))
        this.voice = this.char.voice
    }
}
</script>