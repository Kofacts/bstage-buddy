<template>
    <div v-if="showDialogue" class="model fixed z-[999] top-[5.7rem] p-10 left-0 h-[100%] w-full max-h-[100%] pb-44 overflow-y-scroll"> 
            <select 
                class="bg-nano-light h-[40px] mt-[20px] w-full text-nano-dark rounded-[10px] outline-none text-[18px] pl-[15px] pr-[15px]">
                <option v-for="voice in values" :key="voice.name" :value="voice.id">{{ voice.name }}
                </option>
            </select>
            <textarea  v-auto-resize
            class="w-full mx-auto h-[100px] outline-none p-[10px] mt-4 pb-0 rounded-[10px] text-center text-[16px] text-nano-dark"
            style="background:#DCE2B3" placeholder="Line goes here"></textarea>

            <button class="bg-nano-dark text-nano-light w-full h-[50px]">Save Dialogue</button>
            <button @click="$emit('closeDialogue')" class="bg-transparent h-[50px] flex items-center justify-center w-full bg-gray-100 mt-2 text-black">Cancel</button>
    </div>
</template>

<script>
import Characters from '@/components/Cards/Characters.vue';
export default {
    components: { Characters },
    props: ['voices', 'characters','showDialogue'],
    data() {
        return {
            step: 1,
            values: [
                {
                    name: 'Otilo',
                },
                {
                    name: 'Fa',
                }
            ],
            isSavable: false,
            canGoBack: true,
            charactersEdit: []
        }
    },
    watch: {
        charactersEdit: {
            handler(newVal) {
                console.log('emitting to parent')
                this.$emit('charactersChange', newVal)
            },
            deep: true
        },
    },
    computed: {
        hasSelf() {
            return !!(this.characters || []).find((s) => s.is_self)
        }
    },
    mounted() {
        if(this.hasSelf) {
            this.step = 2
        }
        if(this.characters) {
            console.log('ready')
            Object.assign(this.charactersEdit, JSON.parse(JSON.stringify(this.characters)))
        }
    }
}
</script>

<style scoped>
.model {
    background: #3e182166;
}
</style>