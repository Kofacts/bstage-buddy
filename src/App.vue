<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navi from '@/components/Navigation/Index.vue'
</script>

<template>
  <div class="pt-10">
    <router-view></router-view>
    <div v-if="$route.meta.name !== 'lockedin'"> 
      <navi></navi>
    </div>
  </div>
</template>
