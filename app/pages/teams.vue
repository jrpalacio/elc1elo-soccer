<script setup lang="ts">
    import teams from'@/data/teams'
</script>
<template>
<div>
    <section>
    <header>
        <h2 class="text-3xl">Equipos</h2>
        <p>Torneo <strong>Enrique Alfaro</strong> 2025</p>
    </header>
</section> 
<section>
     <ul class="galery">
        <li v-for="team in teams" :key="team.id" class="p-2 border border-amber-500 grid justify-center rounded">
            <img :src="team.logo" :alt="team.name">
            {{ team.name }}
        </li>
     </ul>
</section>
</div>
</template>

<style scoped>
.galery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
}
</style>