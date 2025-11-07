<script setup lang="ts">
definePageMeta({
  layout: 'auth-layout'
})

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log(email.value, password.value)
}
</script>

<template>
  <section>
    <header class="text-center">
      <h3 class="text-3xl font-bold">
        Bienvenido de nuevo
      </h3>
      <p class="text-md text-neutral-400 mt-2">
        Inicia sesión a <span class="font-semibold text-blue-200">EL C1ELO</span> <span
          class="italic text-blue-200">SOCCER</span>
        con una de las siguientes opciones o
        sus
        credenciales.
      </p>
    </header>
    <form class="flex flex-col gap-4 mt-10" @submit.prevent="handleSubmit">
      <label class="flex flex-col gap-1">
        <input type="text" v-model="email" placeholder="Correo electrónico" class="border border-neutral-400 p-2 rounded-sm">
      </label>
      <label class="flex flex-col gap-1">
        <input type="password" v-model="password" placeholder="Contraseña" class="border border-neutral-400 p-2 rounded-sm">
      </label>
      <button type="submit" class="bg-blue-500 text-white p-2 rounded-sm">Iniciar sesión</button>
    </form>
    <footer class="text-center mt-10">
      <p class="text-sm text-neutral-400">
        ¿No tienes una cuenta? <NuxtLink to="/register" class="text-blue-500">Regístrate</NuxtLink>
      </p>
    </footer>
  </section>
</template>