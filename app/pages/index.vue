<script setup lang="ts">
import games from '@/data/games'
  // custom layout 
  definePageMeta({
      layout: 'public-layout'
  })
</script>

<template>
  <GameCarousel title="Jornada 8" :games="games"/>
  <GameList title="+ Partidos de la Jornada 8" :games="games" />
</template>

<style>
body {
  background-color: #16181d;
  color: #fff;
}
</style>