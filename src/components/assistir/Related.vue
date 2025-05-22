<script setup lang="ts">
import RelatedCard from "@/components/assistir/RelatedCard.vue";
</script>

<template>
  <section class="py-6 px-4 md:px-16">
    <h3 class="text-xl md:text-2xl font-bold mb-4">Mais como este</h3>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
    >
      <RelatedCard
        v-for="i in 6"
        :key="i"
        :titulo="'Título Sugerido ' + i"
        :relevancia="Math.floor(Math.random() * 100)"
      />
    </div>
  </section>
</template>
