<script setup>
import Navi from '@/components/Navigation/Index.vue'
</script>

<template>
  <div class="pt-10" v-if="$auth.ready() && loaded">
    <router-view></router-view>
    <div v-if="!$route.path.includes('auth')"> 
      <navi></navi>
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
    this.$auth.load().then(() => this.loaded = true).catch((e) => console.log('auth failed', e))
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
