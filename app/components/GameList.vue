<script setup lang="ts">
import type { Game } from '@/data/games';

const props = defineProps<{
  title: string,
  games: Game[]
}>()

</script>

<template>
  <section class="flex flex-col gap-2">
    <header>
      <h3 class="text-2xl font-bold">{{ title }}</h3>
    </header>
    <div ref="carrousel"
      class="flex flex-col gap-4 px-4 py-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth">
      <GameCardList v-for="game in props.games" :key="game.id" :game="game" />
    </div>
  </section>
</template>