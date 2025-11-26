<script setup lang="ts">
    import teams from'@/data/teams'

    // custom layout 
    definePageMeta({
        layout: 'public-layout'
    })
</script>
<template>
    <header class="pt-4 pb-8">
        <h2 class="text-3xl">Equipos</h2>
        <p>Torneo <strong>Enrique Alfaro</strong> 2025</p>
    </header>
    <section>
        <ul class="galery">
            <team-card v-for="team in teams" :key="team.id" :team="team" />
        </ul>
    </section>
</template>

<style scoped>
.galery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
}
</style>