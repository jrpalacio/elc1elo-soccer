<template>
  <header class="sticky top-0 z-50 bg-blue-800/80 backdrop-blur-sm border-b border-neutral-800">
    <nav class="flex justify-between items-center p-4 max-w-6xl mx-auto">
      <NuxtLink to="/" class="text-sm ">EL C1ELO <span class="text-neutral-400 font-semibold italic">SOCCER</span>
      </NuxtLink>
      <ul class="hidden lg:flex gap-4">
        <li>
          <NuxtLink to="/standings">Tabla de posiciones</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/referees">Árbitros</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/teams">Equipos</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login">Inicia sesión</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/register">Regístrate</NuxtLink>
        </li>
      </ul>
      
      <USlideover title="El C1elo Soccer" class="lg:hidden">
          <UButton color="neutral" variant="soft" :ui="{
            base: 'ring-0 border-0'
          }" class="bg-transparent">
            <UIcon name="i-lucide-menu" class="size-5" />
          </UButton>

          <template #body>
            <Placeholder class="h-full" />
            <div class="flex flex-col gap-4">
              <NuxtLink to="/standings">Tabla de posiciones</NuxtLink>
              <NuxtLink to="/referees">Árbitros</NuxtLink>
              <NuxtLink to="/teams">Equipos</NuxtLink>
              <NuxtLink to="/login">Inicia sesión</NuxtLink>
              <NuxtLink to="/register">Regístrate</NuxtLink>
            </div>
          </template>
        </USlideover>

    </nav>
  </header>
</template>