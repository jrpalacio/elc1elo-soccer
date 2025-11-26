<script setup lang="ts">
const teams = ref([
  {
    id: 1,
    name: 'F.C. Barcelona',
    logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_64x64.png'
  },
  {
    id: 2,
    name: 'Villarreal',
    logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/WKH7Ak5cYD6Qm1EEqXzmVw_96x96.png'
  },
  {
    id: 3,
    name: 'RCD Espanyol',
    logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/TKitIqelDyN6M-kYt4Uc0g_96x96.png'
  }
])

</script>

<template>
  <section class="bg-[#202327] ">
    <template v-if="teams.length > 0">
      <ul class="flex flex-row gap-4 overflow-x-auto p-1 max-w-6xl mx-auto">
        <li v-for="team in teams" :key="team.id"
          class="flex flex-col items-center justify-center size-10 rounded-2xl aspect-square hover:bg-blue-400/10 transition-colors cursor-pointer">
          <img :src="team.logo" :alt="team.name" class="size-7 object-contain aspect-square">
        </li>
      </ul>
    </template>
    <template v-else>
      <h3 class="text-lg font-bold">No hay equipos</h3>
    </template>
  </section>
</template>