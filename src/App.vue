<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Content from './components/Content.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="flex flex-col text-center h-screen relative bg-neutral-900">
    <video class="top-0 absolute w-screen h-screen object-fill" loop autoplay muted src="./assets/film.mp4"></video>
    <Header class="relative z-10"></Header>
    <Content class="relative z-0"></Content>
  </div>
  <canvas></canvas>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
} */
</style>
