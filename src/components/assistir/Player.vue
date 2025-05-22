<script setup>
import { onMounted, ref } from "vue";

const videoContainer = ref(null);
const playButton = ref(null);
const videoControls = ref(null);

onMounted(() => {
  const togglePlay = () => {
    videoContainer.value.classList.toggle("playing");
    playButton.value.style.display = videoContainer.value.classList.contains(
      "playing"
    )
      ? "none"
      : "flex";
  };

  playButton.value.addEventListener("click", togglePlay);

  videoContainer.value.addEventListener("click", (e) => {
    if (
      !videoControls.value.contains(e.target) &&
      e.target !== playButton.value
    ) {
      togglePlay();
    }
  });

  videoContainer.value.addEventListener("mousemove", () => {
    videoControls.value.style.opacity = "1";
    clearTimeout(videoContainer.value.timeout);

    if (videoContainer.value.classList.contains("playing")) {
      videoContainer.value.timeout = setTimeout(() => {
        videoControls.value.style.opacity = "0";
      }, 3000);
    }
  });

  videoContainer.value.addEventListener("mouseleave", () => {
    if (videoContainer.value.classList.contains("playing")) {
      videoControls.value.style.opacity = "0";
    }
  });
});
</script>

<template>
  <section
    ref="videoContainer"
    class="video-container relative h-screen bg-black"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none"
    ></div>

    <!-- "Vídeo" como imagem (simulado) -->
    <img
      src="https://placehold.co/1920x1080/000000/FFFFFF?text=Stranger+Things"
      alt="Stranger Things"
      class="w-full h-full object-contain"
    />

    <!-- Botão central de play -->
    <div class="absolute inset-0 flex items-center justify-center z-20">
      <button ref="playButton" class="play-button bg-white/20 rounded-full p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Controles do player -->
    <div
      ref="videoControls"
      class="video-controls absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-30 transition-opacity duration-300 opacity-100"
    >
      <div class="video-progress mb-4">
        <div class="video-progress-filled"></div>
        <div class="video-progress-handle"></div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <button class="text-white">
            <!-- Ícone de play -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button class="text-white">
            <!-- Ícone de volume -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728"
              />
            </svg>
          </button>
          <div class="text-white text-sm">
            <span>00:15:22</span>
            <span class="mx-2">/</span>
            <span>00:50:32</span>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <button class="text-white">
            <!-- Ícone menu -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <button class="text-white">
            <!-- Ícone adicionar -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <button class="text-white">
            <!-- Ícone compartilhar -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
          <button class="text-white">
            <!-- Ícone tela cheia -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
