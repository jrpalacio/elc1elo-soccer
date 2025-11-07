<script setup lang="ts">
import img from '@/assets/logo-el-cielo-resize.webp'
</script>
<template>
  <main class="min-h-dvh  max-w-md mx-auto bg-[#16181d] ">
    <header>
      <NuxtLink to="/" class="text-md font-bold">
        EL C1ELO <span class="text-neutral-400 font-semibold italic">SOCCER</span>
      </NuxtLink>
    </header>
    <div class="flex justify-center items-center">
      <img :src="img" alt="logotipo del cielo" class="sombra object-cover animate-pulse"></img>
    </div>
    <section class="flex flex-col items-center justify-center">
      <slot />
    </section>
    <footer>
      <p class="text-sm text-neutral-400 text-center">
        &copy; 2025 jrpalcio.dev
      </p>
    </footer>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1rem;
}

.sombra {
  filter: drop-shadow(
    0 0 16px rgb(255, 255, 255)
  );
}
</style>