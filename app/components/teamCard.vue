<script setup lang="ts">
    defineProps<{
        team: {
            id: number;
            name: string;
            logo: string;
        }
    }>();
</script>

<template>
    <li :key="team.id" class="card border border-neutral-600 rounded-xl px-2 h-64">
        <div class="card__image w-full flex items-center justify-center">
            <img :src="team.logo" :alt="team.name" class="size-16 object-contain"/>
        </div>
        <div class="card__description h-24 w-full text-center flex items-center justify-center">
            <span class="text-sm">{{ team.name }}</span>
        </div>
    </li>
</template>

<style scoped>
    .card {
        display: grid;
        grid-template-rows: 1fr auto;
        justify-items: center;
        grid-template-areas: "image" "description";
    }

    .card__image {
        grid-area: image;
    }
    .card__description {
        grid-area: description;
    }
</style>