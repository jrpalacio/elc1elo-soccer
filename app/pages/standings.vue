<template>
  <div class="flex items-center space-x-4">
    <button @click="prevWeek" class="px-2 py-1 rounded bg-gray-200">&#8592;</button>

    <div class="flex space-x-3">
      <div
        v-for="(day, index) in weekDays"
        :key="index"
        class="text-center cursor-pointer px-3 py-2 rounded-full"
        :class="{
          'bg-pink-500 text-white': isToday(day.date),
          'bg-gray-500': !isToday(day.date)
        }"
        @click="selectDay(day.date)"
      >
        <div class="text-xs">{{ day.short }}</div>
        <div class="font-semibold">{{ day.date.getDate() }}</div>
      </div>
    </div>

    <button @click="nextWeek" class="px-2 py-1 rounded bg-gray-200">&#8594;</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentDate = ref(new Date())

const weekDays = computed(() => {
  const startOfWeek = new Date(currentDate.value)
  const dayIndex = startOfWeek.getDay()
  startOfWeek.setDate(startOfWeek.getDate() - dayIndex + 1)

  const days = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek)
    d.setDate(startOfWeek.getDate() + i)
    days.push({
      date: d,
      short: d.toLocaleDateString('es-MX', { weekday: 'short' }),
    })
  }
  return days
})

function prevWeek() {
  const d = new Date(currentDate.value)
  d.setDate(d.getDate() - 7)
  currentDate.value = d
}

function nextWeek() {
  const d = new Date(currentDate.value)
  d.setDate(d.getDate() + 7)
  currentDate.value = d
}

function isToday(date) {
  const today = new Date()
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

function selectDay(date) {
  currentDate.value = new Date(date)
}
</script>

<style scoped>
</style>
