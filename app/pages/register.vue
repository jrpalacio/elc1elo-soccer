<script setup lang="ts">
    definePageMeta({
    layout: 'auth-layout'
    })
</script>

<template>
  <section class="mt-12">
    <header class="text-center">
      <h3 class="text-3xl font-bold">
        Regístrate
      </h3>
      <p class="text-md text-neutral-400 mt-2">
        Crea una cuenta en <span class="font-semibold text-blue-200">EL C1ELO</span> <span
          class="italic text-blue-200">SOCCER</span>
        para empezar a jugar.
      </p>
    </header>
    <form class="flex flex-col gap-4 mt-10">
      <label class="flex flex-col gap-1">
        <input type="text" placeholder="Nombre" class="border border-neutral-400 p-2 rounded-sm">
      </label>
      <label class="flex flex-col gap-1">
        <input type="text" placeholder="Apellido materno" class="border border-neutral-400 p-2 rounded-sm">
      </label>
      <label class="flex flex-col gap-1">
        <input type="text" placeholder="Apellido paterno" class="border border-neutral-400 p-2 rounded-sm">
      </label>
      <h3 class="text-sm text-neutral-400 font-semibold mt-4">
        Información de contacto <span class="text-neutral-400 font-normal">*</span>
      </h3>
      <label class="flex flex-col gap-1">
        <input type="text" placeholder="Telefono" class="border border-neutral-400 p-2 rounded-sm">
      </label>
      <label class="flex flex-col gap-1">
        <input type="text" placeholder="Correo electrónico" class="border border-neutral-400 p-2 rounded-sm">
      </label>

      <label class="flex flex-col gap-1">
        <input type="text" placeholder="Contraseña" class="border border-neutral-400 p-2 rounded-sm">
      </label>
      <label class="flex flex-col gap-1">
        <input type="text" placeholder="Confirmar contraseña" class="border border-neutral-400 p-2 rounded-sm">
      </label>
      <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">Registrarme</button>
    </form>
    <footer class="text-center mt-10">
      <p class="text-sm text-neutral-400">
        ¿Ya tienes una cuenta? <NuxtLink to="/login" class="text-blue-500">Inicia sesión</NuxtLink>
      </p>
    </footer>
  </section>
</template>