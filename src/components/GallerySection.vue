<template>
    <section class="py-20 px-4 md:px-12 bg-white text-center">
      <h2 class="text-3xl font-bold text-cyan-700 mb-10">Inside Our Plant</h2>
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
        class="inline-block mt-10 text-cyan-700 font-semibold hover:underline"
      >
        View Full Gallery →
      </router-link>
    </section>
</template>

<script>

</script>