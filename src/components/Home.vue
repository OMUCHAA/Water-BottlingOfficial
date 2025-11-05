<template>
  <HeroSection />
  <AboutSection />
  <ProductsSection />
  <GallerySection />
   <!-- Contact Section -->
  <div
    class="mb-10 sm:mb-0 border rounded-lg shadow-lg flex flex-col items-center
     py-10 px-5 text-cyan-800 shadow-cyan-600 bg-gradient-to-r from-white/20 via-purple-200/40 to-blue-200/40 backdrop-blur-md"
  >
    <h2 class="text-3xl font-bold mb-6 text-cyan-800">Contact Us</h2>
    <p class="mb-6 text-lg">
      Reach Out to us for any questions, assistance or clarification.
    </p>
    <div class="mr-20">
      <i class="fa-solid fa-envelope text-4xl text-cyan-800"></i>
      <span class="text-xl">Info@gmail.com</span><br /><br />
    </div>
    <div class="mr-20">
      <i class="fa-solid fa-phone-volume text-4xl text-cyan-800"></i>
      <span class="text-xl">+254100100101</span><br /><br />
    </div>
    <div class="mr-16">
      <i class="fa-solid fa-location-dot text-4xl text-cyan-800"></i>
      <span class="text-xl">Lusaka Rd. NAIROBI</span>
    </div>
  </div>
</template>

<script setup>
import HeroSection from "./HeroSection.vue";
import AboutSection from "./AboutSection.vue";
import ProductsSection from "./ProductsSection.vue";
import GallerySection from "./GallerySection.vue";
</script>

<style scoped>
nav {
  backdrop-filter: blur(10px);
}
</style>
