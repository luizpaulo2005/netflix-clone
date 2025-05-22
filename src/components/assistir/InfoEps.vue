<script setup>
defineProps({
  episodio: {
    type: Number,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  tempo: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-3 p-2 hover:bg-white/10 rounded-md transition-colors">
    <div class="w-24 h-16 flex-shrink-0">
      <img
        :src="`https://placehold.co/160x90/000000/FFFFFF?text=Ep+${episodio}`"
        :alt="`Episódio ${episodio}`"
        class="w-full h-full object-cover rounded"
      />
    </div>
    <div>
      <p class="font-medium">{{ episodio }}. {{ titulo }}</p>
      <p class="text-sm text-netflix-gray">{{ tempo }} min</p>
    </div>
  </div>
</template>
