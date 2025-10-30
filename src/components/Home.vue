
<template>
  <div class="mt-16 bg-gray-50 text-gray-800">

    <!-- Hero Section -->

    <!-- About Preview Section -->
 
    <!-- Products Preview Section -->
    <section id="products" class="py-20 bg-gray-100 px-4 md:px-12 text-center">
      <h2 class="text-3xl font-bold text-blue-700 mb-10">Our Products</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-gray-600 mb-4">{{ product.description }}</p>
          <router-link
            to="/products"
            class="text-blue-700 font-medium hover:underline"
          >
            View More →
          </router-link>
        </div>
      </div>
    </section>

    <!-- Gallery Preview Section -->
    <section class="py-20 px-4 md:px-12 bg-white text-center">
      <h2 class="text-3xl font-bold text-blue-700 mb-10">Inside Our Plant</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <img
          v-for="n in 6"
          :key="n"
          :src="`https://via.placeholder.com/400x250?text=Gallery+${n}`"
          class="rounded-xl shadow-md hover:scale-105 transition-transform"
          alt="Gallery image"
        />
      </div>
      <router-link
        to="/gallery"
        class="inline-block mt-10 text-blue-700 font-semibold hover:underline"
      >
        View Full Gallery →
      </router-link>
    </section>

    <!-- Contact CTA -->
    <section class="bg-blue-700 text-white text-center py-16">
      <h2 class="text-3xl font-bold mb-4">Order Pure Water Today!</h2>
      <router-link
        to="/contact"
        class="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
      >
        Contact Us
      </router-link>
    </section>
  </div>
</template>

<script setup>


const products = [
  {
    name: "500ml Bottle",
    description: "Perfect for daily hydration on the go.",
    image: "https://via.placeholder.com/400x250?text=500ml+Bottle",
  },
  {
    name: "1L Bottle",
    description: "Great for home, work, or gym use.",
    image: "https://via.placeholder.com/400x250?text=1L+Bottle",
  },
  {
    name: "5L Bottle",
    description: "Ideal for family or office needs.",
    image: "https://via.placeholder.com/400x250?text=5L+Bottle",
  },
];
</script>


<style scoped>
nav {
  backdrop-filter: blur(10px);
}
</style>
