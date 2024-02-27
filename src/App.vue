<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/Nav.vue'

</script>

<template>
  <nav class="absolute top-0 min-w-full">
    <NavBar />
  </nav>
  <div id="content" class="flex flex-column align-items-center justify-content-center gap-1 p-1 min-h-screen m-auto">
    <RouterView />
  </div>
</template>

<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-height: 100vh;
}
</style>
