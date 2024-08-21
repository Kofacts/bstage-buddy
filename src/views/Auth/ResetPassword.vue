<template>
  <div
    class="flex flex-col h-[100vh] max-h-[100vh] overflow-y-scroll pb-[60px] items-center justify-center pt-[29px] h-full">
    <div class="t-[68.5px] w-full pl-[20px] pr-[20px] flex flex-col">
      <div>
        <h3 class="text-[30px] text-semi text-center">Reset Password</h3>
      </div>


      <form class="flex-col w-full mt-[79px]" @submit.prevent="reset">
        <label class="block flex-col w-full">
          <span class="text-white-700 text-[18px] text-center w-full">Email <sup>*</sup></span>
          <input type="email"
            class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
            v-model="body.email" readonly disabled name="email" placeholder="Enter your Email" />

        </label>

        <label class="block flex-col w-full">
          <span class="text-white-700 text-[18px] text-center w-full">Code <sup>*</sup></span>
          <input type="text"
            class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
            v-model="body.token" name="token" placeholder="Enter your reset code" />

        </label>

        <label class="block mt-3">
          <span class="text-white-700 text-[18px] text-center w-full">Password <small><i>(at least 8 characters)</i></small><sup>*</sup></span>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input :type="passwordType"
              class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
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
            <input :type="passwordType"
              class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
              v-model="body.confirm_password" name="confirm_password" placeholder="Enter your Password" />

            <span @click="togglePassword"
              class="show-password absolute p-4 inset-y-0 right-0 pl-3 flex items-center text-gray-600">
              <i :class="passwordType === 'password' ? 'zmdi zmdi-eye' : 'zmdi zmdi-eye-off'"></i>
            </span>
          </div>

        </label>



        <div class="text-right pt-2">
          <span @click="$router.go(-1)">Go Back</span>
        </div>


        <div class="mt-6">
          <button :disabled="loading" @click="reset" type="submit"
            class="rounded-[15px] bg-nano-light w-full h-[66px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
            {{ loading ? 'Resetting Password...' : `Reset Password` }}
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from '@capacitor/toast';

export default {
  title: "Reset Password",
  data() {
    return {
      passwordType: "password",
      body: {
        email: "",
        password: "",
        token: "",
      },
      loading: false,
    };
  },

  methods: {
    togglePassword() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
    async reset() {
      this.loading = true
      this.$store.dispatch('global/resetPassword', this.body)
        .then(({ message }) => {
          Toast.show({ text: message })
        }).catch((e) => {

          const message = 'Error resetting password. Please try again.'
          Toast.show({ text: message })
          this.$router.push({ path: '/auth/login' })
        }).finally(() => {
          this.loading = false;
        })
    },

  },
  created() {
    this.body.email = this.$route.query.email
    this.$auth.check() && this.$auth.logout();
  }
};
</script>