<script setup lang="ts">
    // custom layout 
    definePageMeta({
        layout: 'public-layout'
    })
</script>

<template>
    <header class="pt-4 pb-8">
        <h2 class="text-3xl">Árbitros</h2>
        <p>Torneo <strong>Enrique Alfaro</strong> 2025</p>
    </header>
    <section>
        <ul class="flex flex-col gap-6">
            <li class="border border-neutral-800 rounded-2xl p-4 flex flex-2 gap-4">
                <UAvatar alt="Juan Pérez" size="md" />
                <div>
                    <h3 class="text-xl font-semibold">Juan Pérez</h3>
                    <p>Experiencia: 5 años</p>
                </div>
            </li>
            <li class="border border-neutral-800 rounded-2xl p-4 flex flex-2 gap-4">
                <UAvatar alt="María Gómez" size="md" />

                <div>
                    <h3 class="text-xl font-semibold">María Gómez</h3>
                    <p>Experiencia: 3 años</p>
                </div>
            </li>
            <li class="border border-neutral-800 rounded-2xl p-4 flex flex-2 gap-4">
                  <UAvatar src="https://github.com/benjamincanac.png" size="md" />
                <div>
                    <h3 class="text-xl font-semibold">Carlos Rodríguez</h3>
                    <p>Experiencia: 4 años</p>
                </div>
            </li>
        </ul>
    </section>
</template>

