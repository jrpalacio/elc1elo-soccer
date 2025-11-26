<script setup lang="ts">
import type { Game } from '@/data/games'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps<{
  title: string;
  games: Game[];
}>()

const carrousel = ref<HTMLElement>()

const isAtStart = ref(true)
const isAtEnd = ref(false)

const updateButtonState = () => {
  const el = carrousel.value
  if (!el) return
  const threshold = 20
  isAtStart.value = el.scrollLeft <= threshold
  isAtEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - threshold
}

onMounted(() => {
  if (carrousel.value) {
    carrousel.value.addEventListener('scroll', updateButtonState)
    updateButtonState()
    const liveIndex = props.games.findIndex((game) => game.status === 'live')
    if (liveIndex > 0) {
      nextTick(() => {
        const cardEl = carrousel.value!.children[liveIndex] as HTMLElement
        if (cardEl) {
          const offset =
            cardEl.offsetLeft -
            carrousel.value!.clientWidth / 2 +
            cardEl.clientWidth / 2
          carrousel.value!.scrollTo({ left: offset, behavior: 'smooth' })
          cardEl.focus()
        }
      })
    }
  }
})

onBeforeUnmount(() => {
  if (carrousel.value) {
    carrousel.value.removeEventListener('scroll', updateButtonState)
  }
})
</script>

<template>
  <section class="flex flex-col py-4">
    <header class="pb-12">
      <h2 class="text-2xl font-semibold">{{ title }}</h2>
    </header>
    <div class="p-4">
      <ul
        ref="carrousel"
        class="flex gap-4 p-2 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth"
      >
        <GameCard
          v-for="(game) in props.games"
          :key="game.id"
          :game="game"
          :tabindex="game.status === 'live' ? 0 : -1"
        />
      </ul>
    </div>
  </section>
</template>