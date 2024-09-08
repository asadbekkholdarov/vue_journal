<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container-lg mx-auto p-4">
    <Navbar></Navbar>
    <RouterView></RouterView>
    <Footer></Footer>

  </div>
</template>

<style scoped>

Navbar {
  flex: 0 0 auto; /* Prevent Navbar from stretching */
}

RouterView {
  flex: 1; /* Allow RouterView to take up remaining space */
}
</style>
