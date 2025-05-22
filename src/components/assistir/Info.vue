<script setup lang="ts">
import InfoEps from "@/components/assistir/InfoEps.vue";
</script>

<template>
  <section class="py-8 px-4 md:px-16 bg-netflix-black">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-start gap-8">
        <div class="md:w-2/3">
          <h1 class="text-3xl font-bold mb-2">Stranger Things</h1>
          <div class="flex items-center text-sm mb-4">
            <span class="text-green-500 font-bold">97% relevante</span>
            <span class="mx-2 border border-white/40 px-1">16</span>
            <span class="mr-2">2023</span>
            <span>4 Temporadas</span>
          </div>

          <h2 class="text-xl font-bold mb-2">
            S1:E1 "Capítulo Um: O Desaparecimento de Will Byers"
          </h2>
          <p class="text-netflix-light/80 mb-6">
            Em 6 de novembro de 1983, em Hawkins, Indiana, o cientista Will
            Byers desaparece misteriosamente. A mãe de Will, Joyce, torna-se
            frenética e tenta encontrar Will enquanto o chefe de polícia Jim
            Hopper inicia uma investigação. No dia seguinte, uma menina
            psicocinética que sabe sobre o desaparecimento de Will é encontrada
            por Mike, Lucas e Dustin.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 class="text-netflix-gray text-sm">Elenco:</h4>
              <p class="text-netflix-light">
                Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown
              </p>
            </div>
            <div>
              <h4 class="text-netflix-gray text-sm">Gêneros:</h4>
              <p class="text-netflix-light">Sci-Fi, Terror, Drama</p>
            </div>
            <div>
              <h4 class="text-netflix-gray text-sm">Cenas e momentos:</h4>
              <p class="text-netflix-light">Assustador, Suspense, Sombrio</p>
            </div>
          </div>
        </div>

        <div class="md:w-1/3">
          <h3 class="text-lg font-bold mb-3">Mais episódios</h3>
          <div class="space-y-4">
            <InfoEps
              v-for="i in 4"
              :key="i"
              :episodio="i"
              :titulo="`Episódio ${i}`"
              :tempo="Math.floor(Math.random() * 100)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
