<script setup lang="ts">
import Header from '@/components/assistir/Header.vue'
import Player from '@/components/assistir/Player.vue'
import Info from '@/components/assistir/Info.vue'
import Related from '@/components/assistir/Related.vue'
import Reviews from '@/components/assistir/Reviews.vue'
</script>

<template>
    <div class="bg-netflix-black text-white min-h-screen">
        <Header />
        <Player />
        <Info />
        <Related />
        <Reviews />
        <Footer />
    </div>
</template>