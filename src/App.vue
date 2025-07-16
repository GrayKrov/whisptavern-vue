<template>
  <div id="app" class="app">
    <BannerTop />
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import BannerTop from "./components/bannertop.vue";
import NavBar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
</script>
