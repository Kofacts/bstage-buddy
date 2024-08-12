<script setup>
import Navi from '@/components/Navigation/Index.vue'
</script>

<template>
  <div class="pt-10" v-if="$auth.ready() && loaded">
    <router-view></router-view>
    <div v-if="!$route.path.includes('auth')"> 
      <navi v-if="!$route.meta.hideMenu"></navi>
    </div>
  </div>
  <div v-else class="container">Loading...</div>
</template>

<script>

export default {
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
  },
  computed: {
 
  },
  mounted() {
    this.$auth.load().then(() => {
      //console.log('user', this.$auth.user(), this.$route.path)
      if(this.$auth.user()?.email && this.$route.path == '/') {
        this.$router.push('/home')
      } else if(!this.$auth.user()?.email && this.$route.path == '/') {
        this.$router.push('/auth/login')
      }
      this.loaded = true
  }).catch((e) => console.log('auth failed', e))
  },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
}
</style>
