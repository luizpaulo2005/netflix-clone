<script setup lang="ts">
import Header from "@/components/index/Header.vue";
import Hero from "@/components/index/Hero.vue";
import MovieCard from "@/components/index/MovieCard.vue";
import Footer from "@/components/index/Footer.vue";
</script>

<template>
  <div class="bg-netflix-black text-white min-h-screen">
    <Header />
    <Hero />
    <section class="py-10 px-4 md:px-16 -mt-16 relative z-30">
        <h3 class="text-xl md:text-2xl font-bold mb-4">Populares na Netflix</h3>
        <div class="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4 justify-center">
            <MovieCard
                v-for="i in 6"
                :key="i"
                :titulo="'Filme ' + i"
                :relevancia="Math.floor(Math.random() * 100)"
                :classificacao="'16'"
                :ano="2023"
            />
        </div>
    </section>

    <section class="py-6 px-4 md:px-16">
        <h3 class="text-xl md:text-2xl font-bold mb-4">Séries em alta</h3>
        <div class="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4 justify-center">
            <MovieCard
                v-for="i in 6"
                :key="i"
                :titulo="'Série ' + i"
                :relevancia="Math.floor(Math.random() * 100)"
                :classificacao="'16'"
                :temporadas="Math.floor(Math.random() * 100)"
            />
        </div>
    </section>

    <section class="py-6 px-4 md:px-16">
        <h3 class="text-xl md:text-2xl font-bold mb-4">Originais Netflix</h3>
        <div class="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4 justify-center">
            <MovieCard
                v-for="i in 6"
                :key="i"
                :titulo="'Original ' + i"
                :relevancia="Math.floor(Math.random() * 100)"
                :classificacao="'16'"
                :ano="2023"
            />
        </div>
    </section>
    <Footer />
  </div>
</template>
