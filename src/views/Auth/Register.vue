<template>
  <div class="flex flex-col h-[100vh] max-h-[100vh] overflow-y-scroll pb-[60px] items-center justify-center pt-[29px] h-full">
    <div class="t-[68.5px] w-full pl-[20px] pr-[20px] flex flex-col">
      <div> 
          <h3 class="text-[30px] text-semi text-center">Register to Account</h3>
      </div>


      <form class="flex-col w-full mt-[79px]" @submit.prevent="signup">
        <label class="block flex-col w-full">
          <span class="text-white-700 text-[18px] text-center w-full">Email <sup>*</sup></span>
          <input type="email" class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
            v-model="body.email" name="email" placeholder="Enter your Email" />
         
        </label>

        <label class="block mt-3">
          <span class="text-white-700 text-[18px] text-center w-full">Password <sup>*</sup></span>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input :type="passwordType" class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
              v-model="body.password" name="password" data-vv-as="password" ref="password"
              placeholder="Enter your Password" />

            <span @click="togglePassword"
              class="show-password absolute p-4 inset-y-0 right-0 pl-3 flex items-center text-gray-600">
              <i :class="passwordType === 'password' ? 'zmdi zmdi-eye' : 'zmdi zmdi-eye-off'"></i>
            </span>
          </div>
          
        </label>

        <label class="block mt-3">
          <span class="text-white-700 text-[18px] text-center w-full">Confirm Password <sup>*</sup></span>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input :type="passwordType" class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
              v-model="body.confirm_password" name="confirm_password" 
             placeholder="Enter your Password" />

            <span @click="togglePassword"
              class="show-password absolute p-4 inset-y-0 right-0 pl-3 flex items-center text-gray-600">
              <i :class="passwordType === 'password' ? 'zmdi zmdi-eye' : 'zmdi zmdi-eye-off'"></i>
            </span>
          </div>
       
        </label>


        <div class="flex mt-4 gap-2">
          <label class="block flex-col w-1/2">
            <span class="text-white-700 text-[18px] text-center w-full">First Name</span>
            <input type="text" class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
              v-model="body.first_name" name="first_name" placeholder="Enter First Name"/>
           
          </label>

          <label class="block flex-col w-1/2">
            <span class="text-white-700  text-[18px] text-center w-full">Last Name</span>
            <input type="text" class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
              v-model="body.last_name" name="last_name" placeholder="Enter Last Name"/>
          
          </label>
        </div>


        <div class="text-right pt-2">
                    <router-link :to="`/`">Go Back</router-link>
                </div>


                <div class="mt-6">
                    <button :disabled="loading" @click="signup" type="submit"
                        class="rounded-[15px] bg-nano-light w-full h-[66px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                        {{ loading ? 'Signin up...' : `Sign Up` }}
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
  title: "Register",
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
    signup() {
      this.loading = true
      const payload = this.body
      this.$auth
        .register({
          data: payload,
        }).then(async ({ data: { data, message } }) => {
          await this.login(btoa(payload.email + ":" + payload.password), data)
        }).catch((e) => {
          this.loading = false;
          Toast.show({ text: 'Error signing up' })
        })
    },
    async login(token, data) {
      localStorage.removeItem("CapacitorStorage.auth_token_default");
      localStorage.removeItem("auth_token_default");

      this.$auth.token(null, token);

      // this.$auth.watch.loaded = true;
      this.$auth.token(null, token);
      localStorage.setItem("auth_token_default", token);
      await Preferences.set({
        key: "auth_token_default",
        value: token,
      });
      this.$auth.user(data);
      // this.$auth.watch.authenticated = true;
      document.cookie = "rememberMe=false";
      this.loading = false;
      this.$router.push('/')

    },
  },
  created() {
    this.$auth.check() && this.$auth.logout();
  }
};
</script>