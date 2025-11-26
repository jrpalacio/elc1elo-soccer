<script setup lang="ts">
import type { Game } from '@/data/games';

const props = defineProps<{
  game: Game
}>()

console.log(props.game)
</script>

<template>
  <div class="border-neutral-400/20 bg-gray-800/40 rounded-3xl w-full  py-8 ">
    <footer class="flex text-center justify-center items-center gap-1 pb-6">
      <p class="text-sm text-neutral-400">Lunes, 30 de Junio,</p>
      <p class="text-sm text-neutral-400">{{ props.game.time }} hrs</p>
    </footer>
    <article class="relative">
      <header
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col justify-center items-center gap-1">
        <p class="text-2xl text-yellow-200 font-semibold">VS</p>
      </header>
      <div class="grid grid-cols-2">
        <section class="flex flex-col justify-center gap-2 items-center">
          <img :src="props.game.homeTeam.logo" :alt="props.game.homeTeam.name"
            class="size-12 object-contain aspect-square">
          <p class="text-center text-sm text-neutral-400">{{ props.game.homeTeam.name }}</p>
        </section>
        <section class="flex flex-col justify-center gap-2 items-center">
          <img :src="props.game.awayTeam.logo" :alt="props.game.awayTeam.name"
            class="size-12 object-contain aspect-square">
          <p class="text-center text-sm text-neutral-400">{{ props.game.awayTeam.name }}</p>
        </section>
      </div>
    </article>
  </div>
</template>