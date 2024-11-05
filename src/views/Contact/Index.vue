<template>
  <div class="flex flex-col h-[100vh] max-h-[100vh] overflow-y-scroll pb-[60px] items-center justify-center pt-[29px] h-full">
    <div class="t-[68.5px] w-full pl-[20px] pr-[20px] flex flex-col">
      <div> 
          <h3 class="text-[30px] text-semi text-center">Get in Touch</h3>
      </div>
    


      <form class="flex-col w-full mt-[79px]" @submit.prevent="sendEmail">
        <div class="flex mt-4 gap-2 w-full">
          <label class="block flex-col w-full">
            <span class="text-white-700 text-[18px] text-center w-full">Name</span>
            <input type="text" class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
              v-model="body.name" name="first_name" placeholder="Enter your Name"/>
          </label>
        </div>
        <label class="block flex-col w-full mt-4">
          <span class="text-white-700 text-[18px] text-center w-full">Email <sup>*</sup></span>
          <input type="email" class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
            v-model="body.email" name="email" placeholder="Enter your Email" />
         
        </label>
        <label class="block flex-col w-full mt-4">
          <span class="text-white-700 text-[18px] text-center w-full">Message <sup>*</sup></span>
          <input type="text" class="form-input mt-1 block w-full bg-[#4A232C] pt-[13.5px] pb-[13.5px] h-[66px] text-center rounded-md focus:border-yellow-600"
            v-model="body.message" name="email" placeholder="Enter message" />
         
        </label>

        <div class="mt-6">
            <button :disabled="loading" @click="signup" type="submit"
                class="rounded-[15px] bg-nano-light w-full h-[66px] flex items-center justify-center text-nano-dark gap-[15px] text-[19px]">
                {{ loading ? 'Sending...' : `Send Message` }}
            </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import emailjs from 'emailjs-com';

export default {
  title: "Register",
  data() {
    return {
      passwordType: "password",
      body: {
        email: "",
        name: "",
        message:""
      },
      loading: false,
    };
  },
  methods: {
        sendEmail() {
            this.loading = true;
            const serviceID = 'service_cuuzo5r';  // Replace with your EmailJS service ID
            const templateID = 'template_lw8tnmt';  // Replace with your EmailJS template ID
            const userID = 'oFyuryJDJyEVhYKEZ';  // Replace with your EmailJS user ID (from account)

            // Send email using form data
            emailjs
                .send(serviceID, templateID, {
                from_name: this.body.name,
                email: this.body.email,
                message: this.body.message
                }, userID)
                .then(
                (response) => {
                    Toast.show({ text: 'Message sent successfully' })
                    this.body.name = '';
                    this.body.email = '';
                    this.body.message = '';
                    this.loading = false;
                },
                (error) => {
                    Toast.show({ text: 'Error sending message' })
                    console.error('EmailJS Error:', error);
                }
                );
        }
  }
};
</script>