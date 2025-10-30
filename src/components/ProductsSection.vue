<template>
    <section id="products" class="py-20 bg-gray-100 px-4 md:px-12 text-center">
        <h2 class="text-3xl font-bold text-cyan-800 mb-10">Our Products</h2>
        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(product, index) in products" :key="index"
                class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
                <p class="text-gray-600 mb-4">{{ product.description }}</p>
                <router-link to="/products" class="text-cyan-700 font-medium hover:underline">
                    View More →
                </router-link>
            </div>
        </div>
    </section>

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