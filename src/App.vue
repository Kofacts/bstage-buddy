<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navi from '@/components/Navigation/Index.vue'
</script>

<template>
  <div class="pt-10" v-if="$auth.ready()">
    <router-view></router-view>
    <div v-if="$route.meta.name !== 'lockedin'"> 
      <navi></navi>
    </div>
  </div>
  <div v-else class="container">Loading...</div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  methods: {
  },
  computed: {
 
  },
  mounted() {

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
