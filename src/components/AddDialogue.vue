<template>
    <div v-if="showDialogue" class="model fixed z-[999] top-[5.7rem] p-10 left-0 h-[100%] w-full max-h-[100%] pb-44 overflow-y-scroll"> 
            <select v-model="payload.character"
                placeholder="Select Character"
                class="bg-nano-light h-[40px] mt-[20px] w-full text-nano-dark rounded-[10px] outline-none text-[18px] pl-[15px] pr-[15px]">
                <option  value="" disabled selected>Select Character</option>
                <option v-for="character in characters.filter(n => n !== '')" :key="character.reference" :value="character.reference">{{ character.name }}
                </option>
            </select>
            <textarea  v-auto-resize v-model="payload.content"
            class="w-full mx-auto h-[100px] outline-none p-[10px] mt-4 pb-0 rounded-[10px] text-center text-[16px] text-nano-dark"
            style="background:#DCE2B3" placeholder="Line goes here"></textarea>

            <button :disabled="saving || payload.character == ''" :class="{'opacity-40': payload.character == '' }" @click="submit"  class="mt-6 rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.778564 8.395L5.3729 12.9112L17.2214 1.26416" stroke="#3E1821"
                            stroke-linejoin="round" />
                    </svg>
                    {{ saving ? 'Saving...' : 'Add Line' }}
                    </button>
            <button @click="$emit('closeDialogue')"  class="mt-4 rounded-[15px] bg-nano-light w-full h-[53px] w-[288px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.96435" y1="1.44914" x2="15.144" y2="14.7536" stroke="#3E1821" />
                        <line y1="-0.5" x2="18.7273" y2="-0.5"
                            transform="matrix(-0.703768 0.71043 0.71043 0.703768 14.7888 1.80103)" stroke="#3E1821" />
                    </svg>
                    Cancel
                </button>
    </div>
</template>

<script>
import Characters from '@/components/Cards/Characters.vue';
import { Toast } from '@capacitor/toast';

export default {
    components: { Characters },
    props: ['script', 'order', 'page', 'characters', 'showDialogue'],
    data() {
        return {
            saving: false,
            payload: {

            }
        }
    },
    watch: {
       
    },
    methods: {
       submit() {
            this.saving = true
            this.$store.dispatch('scripts/addLine', {
                reference: this.script,
                character: this.payload.character,
                content: this.payload.content,
                order: this.order,
                page: this.page,
            })
                .then(({ data, message }) => {
                    console.log({ data, message })
                    Toast.show({ text: message })
                    this.$emit('newLine', data)
                    this.$emit('closeDialogue')
                }).catch((e) => {
                    const errors = Object.entries(e?.data.errors || {}).map((k, v) => `${k}: ${v.join(' ')}`).join(' ')
                    const message = errors || e?.data?.message || e.message || e.statusText || 'An error occured'
                    console.log({ error: e, errors, message })
                    Toast.show({ text: message })
                }).finally(() => {
                    this.saving = false
                })
    
       }
    },
    mounted() {

    }
}
</script>

<style scoped>
.model {
    background: #3e182166;
}
</style>