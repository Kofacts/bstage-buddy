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
                  class="show-password absolute  top-6 right-3  flex items-center text-gray-600">
                  <!-- <i :class="passwordType === 'password' ? 'zmdi zmdi-eye' : 'zmdi zmdi-eye-off'"></i> -->
                  <svg v-if="passwordType === 'password'" width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fill-rule="nonzero"/></svg>
                  <svg v-else width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m17.069 6.546 2.684-2.359c.143-.125.32-.187.497-.187.418 0 .75.34.75.75 0 .207-.086.414-.254.562l-16.5 14.501c-.142.126-.319.187-.496.187-.415 0-.75-.334-.75-.75 0-.207.086-.414.253-.562l2.438-2.143c-1.414-1.132-2.627-2.552-3.547-4.028-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 1.815 0 3.536.593 5.071 1.546zm2.318 1.83c.967.943 1.804 2.013 2.475 3.117.092.156.138.332.138.507s-.046.351-.138.507c-2.068 3.403-5.721 6.493-9.864 6.493-1.298 0-2.553-.313-3.73-.849l2.624-2.307c.352.102.724.156 1.108.156 2.208 0 4-1.792 4-4 0-.206-.016-.408-.046-.606zm-4.932.467c-.678-.528-1.53-.843-2.455-.843-2.208 0-4 1.792-4 4 0 .741.202 1.435.553 2.03l1.16-1.019c-.137-.31-.213-.651-.213-1.011 0-1.38 1.12-2.5 2.5-2.5.474 0 .918.132 1.296.362z" fill-rule="nonzero"/></svg>
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
                class="show-password absolute  top-6 right-3  flex items-center text-gray-600">
                <!-- <i :class="passwordType === 'password' ? 'zmdi zmdi-eye' : 'zmdi zmdi-eye-off'"></i> -->
                <svg v-if="passwordType === 'password'" width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fill-rule="nonzero"/></svg>
                <svg v-else width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m17.069 6.546 2.684-2.359c.143-.125.32-.187.497-.187.418 0 .75.34.75.75 0 .207-.086.414-.254.562l-16.5 14.501c-.142.126-.319.187-.496.187-.415 0-.75-.334-.75-.75 0-.207.086-.414.253-.562l2.438-2.143c-1.414-1.132-2.627-2.552-3.547-4.028-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 1.815 0 3.536.593 5.071 1.546zm2.318 1.83c.967.943 1.804 2.013 2.475 3.117.092.156.138.332.138.507s-.046.351-.138.507c-2.068 3.403-5.721 6.493-9.864 6.493-1.298 0-2.553-.313-3.73-.849l2.624-2.307c.352.102.724.156 1.108.156 2.208 0 4-1.792 4-4 0-.206-.016-.408-.046-.606zm-4.932.467c-.678-.528-1.53-.843-2.455-.843-2.208 0-4 1.792-4 4 0 .741.202 1.435.553 2.03l1.16-1.019c-.137-.31-.213-.651-.213-1.011 0-1.38 1.12-2.5 2.5-2.5.474 0 .918.132 1.296.362z" fill-rule="nonzero"/></svg>
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
          //console.log(e)
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