<template>
    <div class="flex flex-col h-[100vh] max-h-[100vh] overflow-y-scroll pb-[60px] items-center justify-center pt-[29px] h-full">
        <div class="t-[68.5px] w-full pl-[20px] pr-[20px] flex flex-col">
            
            <div> 
                <h3 class="text-[30px] text-semi text-center">Login to Account</h3>
            </div>

            <form class="flex-col w-full mt-[79px]" @submit.prevent="login">
                <label class="block flex flex-col w-full">
                    <span class="text-white-700 text-[18px] text-center w-full">Email <sup>*</sup></span>
                    <input type="email" class="form-input mt-1 bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center block w-full rounded-md focus:border-black-600"
                        v-model="body.email" name="email" placeholder="Enter your Email" />
                   
                </label>

                <label class="block flex flex-col w-full mt-[21px]">
                    <span class="text-white-700 text-[18px] text-center">Password <sup>*</sup></span>
                    <div class="mt-2 relative rounded-md shadow-sm">
                        <input :type="passwordType"
                            class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-black-600"
                            v-model="body.password" name="password" data-vv-as="password"
                            ref="password" placeholder="Enter your Password" />

                        <span @click="togglePassword"
                            class="show-password absolute p-4 inset-y-0 right-0 pl-3 flex items-center text-gray-600">
                            <i :class="passwordType === 'password' ? 'zmdi zmdi-eye' : 'zmdi zmdi-eye-off'"></i>
                        </span>
                    </div>
                
                </label>
                <div class="py-4">
                    <router-link class="float-left" :to="`/auth/forgot-password`">Forgot Password?</router-link>
           
                    <router-link class="float-right" :to="`/auth/register`">Register</router-link>
                </div>


                <div class="mt-6">
                    <button :disabled="loading" @click="login" type="submit"
                        class="rounded-[15px] bg-nano-light w-full h-[66px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                        {{ loading ? 'Logging in...' : `Login` }}
                    </button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';

export default {
    title: "Login",
    data() {
        return {
            passwordType: "password",
            body: {
                email: "",
                password: "",
            },
            loading: false,
        };
    },

    methods: {
        togglePassword() {
            this.passwordType =
                this.passwordType === "password" ? "text" : "password";
        },

        async login() {
            const token = btoa(this.body.email + ":" + this.body.password)
            this.loading = true
            localStorage.removeItem("CapacitorStorage.auth_token_default");
            localStorage.removeItem("auth_token_default");

            this.$auth.token(null, token);
            this.$auth.refresh().then(async (data) => {
                // this.$auth.watch.loaded = true;
                this.$auth.token(null, token);
                await Preferences.set({
                    key: "auth_token_default",
                    value: token,
                });
                localStorage.setItem("auth_token_default", token);
                this.$auth.user({ email: this.body.email });
                // this.$auth.watch.authenticated = true;
                document.cookie = "rememberMe=false";
                this.loading = false;
                this.$router.push('/scripts')
            }).catch((e) => {
                this.loading = false
                Toast.show({ text: e.message })
            })

        },
    },
    created() {
        this.$auth.check() && this.$auth.logout();
    }
};
</script>