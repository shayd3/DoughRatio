<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/Nav.vue'
import Toast from 'primevue/toast';

</script>

<template>
  <nav class=" fixed top-0 w-full">
    <NavBar />
  </nav>
  <div id="content" class="flex flex-column align-items-center justify-content-center min-h-screen mx-3 mt-4">
    <RouterView />
  </div>
  <Toast position="bottom-center"/>
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

html,body {
  margin: 0;
  min-height: 100vh;
  padding: 0;
}
</style>
