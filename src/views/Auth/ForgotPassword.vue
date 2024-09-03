<template>
    <div
        class="flex flex-col h-[100vh] max-h-[100vh] overflow-y-scroll pb-[60px] items-center justify-center pt-[29px] h-full">
        <div class="t-[68.5px] w-full pl-[20px] pr-[20px] flex flex-col">

            <div>
                <h3 class="text-[30px] text-semi text-center">Forgot Password</h3>
            </div>

            <form class="flex-col w-full mt-[79px]" @submit.prevent="forgot">
                <label class="block flex flex-col w-full">
                    <span class="text-white-700 text-[18px] text-center w-full">Email <sup>*</sup></span>
                    <input type="email"
                        class="form-input mt-1 bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center block w-full rounded-md focus:border-black-600"
                        v-model="body.email" name="email" placeholder="Enter your Email" />

                </label>


                <div class="mt-6">
                    <button :disabled="loading" @click="forgot" type="submit"
                        class="rounded-[15px] bg-nano-light w-full h-[66px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                        {{ loading ? 'Sending Reset Code...' : `Send Reset Code` }}
                    </button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import { Toast } from '@capacitor/toast';

export default {
    title: "Forgot Password",
    data() {
        return {
            body: {
                email: "",
                password: "",
            },
            loading: false,
        };
    },

    methods: {
        async forgot() {
            this.loading = true
            this.$store.dispatch('global/forgotPassword', {
                    email: this.body.email,
                    callback_url: `https://backstagebuddy.com/auth/reset-password`
                })
                .then( ({ message }) => {
                    Toast.show({ text: message })
                    this.$router.push({ path: '/auth/reset-password', query: {email: this.body.email } })
                }).catch((e) => {

                    const message = 'Error triggering password reset. Please try again.'
                    Toast.show({ text: message })
                }).finally(() => {
                    this.loading = false;
                })
        },
    },
    created() {
        this.$auth.check() && this.$auth.logout();
    }
};
</script>