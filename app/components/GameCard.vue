<script setup lang="ts">
import type { Game } from '@/data/games';

const props = defineProps<{
  game: Game
}>()

const status = computed(() => {
  if (props.game.status === 'live') {
    return 'En vivo'
  } else if (props.game.status === 'pending') {
    return 'Pendiente'
  }
  return 'Finalizado'
})

const cardClasses = computed(() => {
  const baseClasses = 'snap-start flex-shrink-0 justify-center py-12 mx-1 border-1 rounded-4xl w-xs'

  const { status } = props.game
  const handleStatus = {
    live: `${baseClasses} border-5 border-green-500 bg-gradient-to-br from-green-900/80 to-green-800/10`,
    pending: `${baseClasses} border-blue-500 bg-gradient-to-br from-neutral-900/60 to-blue-800/40`,
    finished: `${baseClasses} border-neutral-500 bg-neutral-700/50 opacity-60`,
    default: `${baseClasses} border-neutral-400 bg-neutral-800`
  }
  return handleStatus[status as keyof typeof handleStatus] || handleStatus.default
})

const statusClasses = computed(() => {
  const { status } = props.game
  const handleStatus = {
    live: 'text-xs text-green-300 font-semibold',
    pending: 'text-xs text-yellow-300 font-semibold',
    finished: 'text-xs text-neutral-500',
    default: 'text-xs text-neutral-400'
  }
  return handleStatus[status as keyof typeof handleStatus] || handleStatus.default
})

const scoreClasses = computed(() => {
  const { status } = props.game
  const handleStatus = {
    live: 'text-2xl font-bold text-green-200',
    pending: 'text-2xl font-bold text-yellow-200',
    finished: 'text-2xl font-bold text-neutral-400',
    default: 'text-2xl font-bold'
  }
  return handleStatus[status as keyof typeof handleStatus] || handleStatus.default
})
</script>

<template>
  <article :class="cardClasses" style="position: relative; overflow: hidden;">
    <header
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col justify-center items-center gap-1">
      <p :class="statusClasses">{{ status }}</p>
      <template v-if="status !== 'Pendiente'">
        <p :class="scoreClasses">{{ props.game.homeTeam.goals }} - {{ props.game.awayTeam.goals }}</p>
      </template>
    </header>
    <div class="grid grid-cols-2">
      <section class="flex flex-col justify-center gap-2 items-center">
        <img :src="props.game.homeTeam.logo" :alt="props.game.homeTeam.name"
          class="size-12 object-contain aspect-square">
        <p class="text-center text-sm">{{ props.game.homeTeam.name }}</p>
      </section>
      <section class="flex flex-col justify-center gap-2 items-center">
        <img :src="props.game.awayTeam.logo" :alt="props.game.awayTeam.name"
          class="size-12 object-contain aspect-square">
        <p class="text-center text-sm">{{ props.game.awayTeam.name }}</p>
      </section>
    </div>
  </article>
</template>