<template>
  <nav
    class="flex justify-around fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white/20 to-blue-200/10 backdrop-blur-md border-b border-white/30 shadow-md shadow-cyan-500"
  >
    <div
      class="sm:max-w-6xl sm:mx-auto sm:flex sm:justify-between sm:items-center sm:px-6 py-4 text-cyan-700 w-full"
    >
      <h1 class="text-2xl lg:text-3xl font-bold text-cyan-950 ml-2"><span class="text-base">the-</span>Amal<span class="text-base">-Brothers</span></h1>
      <ul class="hidden sm:flex space-x-8">
        <li>
          <router-link to="/" class="hover:text-blue-200 text-cyan-600">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-blue-200 text-cyan-600"
            >About</router-link
          >
        </li>
        <li>
          <router-link to="/products" class="hover:text-blue-200 text-cyan-600"
            >Products</router-link
          >
        </li>
        <li>
          <router-link to="/gallery" class="hover:text-blue-200 text-cyan-600"
            >Gallery</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="hover:text-blue-200 text-cyan-600"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>

     <!--What is going to be visible on smaller screens-->
      <div @click="toggleMenu" class="sm:hidden flex justify-between items-center">
        <i v-if="!isOpen" class="fa-solid fa-bars text-3xl sm:text-2xl md:text-3xl text-cyan-900"></i>
        <i v-if="isOpen" class="fa-solid fa-xmark text-3xl sm:text-2xl md:text-3xl text-cyan-900"></i>
      </div>

      <!--Show the dropdown if the menu is open-->
      <div
        v-show="isOpen"
        class="text-lg font-semibold absolute top-[72px] right-4 sm:hidden justify-center items-center"
      >
        <ul class="translucent flex flex-col bg-gradient-to-r from-white/90 to-cyan-200/90 backdrop-blur-md p-3 text-cyan-900 justify-center items-center w-64 md:w-72 rounded shadow">
          <li @click="closeMenu" class="h-9 border-r-0 border-l-0 border-t-0 border-cyan-900 w-full hover:bg-slate-400 hover:text-white transition">
            <router-link to="/" class="w-full h-full inline-block">Home</router-link>
          </li>
          <li @click="closeMenu" class="h-9 border border-r-0 border-l-0 border-b-0 w-full border-cyan-900 hover:bg-slate-400 hover:text-white transition">
            <router-link to="/subsidiaries" class="w-full h-full inline-block">About</router-link>
          </li>
          <li @click="closeMenu" class="h-9 border border-r-0 border-l-0 border-b-0 border-cyan-900 w-full hover:bg-slate-400 hover:text-white transition">
            <router-link to="/about" class="w-full h-full inline-block">Products</router-link>
          </li>
          <li @click="closeMenu" class="h-9 border border-r-0 border-l-0 border-cyan-900 border-b-0 w-full hover:bg-slate-400 hover:text-white transition">
            <router-link to="/contacts" class="w-full h-full inline-block">Gallery</router-link>
          </li>
          <li @click="closeMenu" class="h-9 border border-r-0 border-l-0 border-cyan-900 border-b-0 w-full hover:bg-slate-400 hover:text-white transition">
            <router-link to="/contacts" class="w-full h-full inline-block">Contact</router-link>
          </li>
        </ul>
      </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}
</script>

<style scoped>
nav {
  backdrop-filter: blur(10px);
}
.translucent{
  backdrop-filter: blur(10px);
}
</style>
