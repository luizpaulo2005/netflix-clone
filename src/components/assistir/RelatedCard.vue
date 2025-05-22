<script setup lang="ts">
defineProps({
  titulo: {
    type: String,
    required: true,
  },
  relevancia: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="movie-card transition-transform duration-300 relative">
    <img
      :src="`https://placehold.co/180x270/000000/FFFFFF?text=${encodeURIComponent(titulo)}`"
      :alt="titulo"
      class="rounded-md w-full"
    />
    <div
      class="movie-info absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md p-4 flex flex-col justify-end opacity-0 transition-opacity duration-300"
    >
      <h4 class="font-bold">{{ relevancia }}</h4>
      <div class="flex items-center text-xs mt-1">
        <span class="text-green-500 font-bold"
          >{{ relevancia }}% relevante</span
        >
      </div>
    </div>
  </div>
</template>
