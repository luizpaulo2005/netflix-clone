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
  classificacao: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
  },
  temporadas: {
    type: Number,
  },
});
</script>

<template>
  <a href="/assistir">
    <div
      class="movie-card flex-none w-[180px] transition-transform duration-300 relative"
    >
      <img
        :src="`https://placehold.co/180x270/000000/FFFFFF?text=${titulo}`"
        :alt="titulo"
        class="rounded-md w-full"
      />
      <div
        class="movie-info absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md p-4 flex flex-col justify-end opacity-0 transition-opacity duration-300"
      >
        <h4 class="font-bold">{{ titulo }}</h4>
        <div class="flex items-center text-xs mt-1">
          <span class="text-green-500 font-bold"
            >{{ relevancia }}% relevante</span
          >
          <span class="mx-2 border border-white/40 px-1">{{
            classificacao
          }}</span>
          <span v-if="temporadas">{{ temporadas }} temporada(s)</span>
          <span v-else>{{ ano }}</span>
        </div>
      </div>
    </div>
  </a>
</template>
