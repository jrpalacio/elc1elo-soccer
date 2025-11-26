<template>
  <footer class="flex flex-col-reverse items-center gap-4 lg:flex-row lg:justify-between py-8 px-4 max-w-6xl mx-auto">
    <section>
      <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
      </p>
    </section>
    <section>
      <ul class="flex flex-row gap-4">
        <li>
          <a href="https://jrpalacio-dev.vercel.app/" rel="noopener" target="_blank" class="text-muted text-sm">
            <span class="truncate">
              jrpalacio.dev
            </span>
          </a>
        </li>
        <li>
          <a href="https://elc1elo.com" rel="noopener" target="_blank" class="text-muted text-sm ">
            <span class="truncate">
              elc1elo.com
            </span>
          </a>
        </li>
      </ul>
    </section>
    <section>
      <UButton
          icon="i-simple-icons-instagram"
          color="neutral"
          variant="ghost"
          to="https://www.instagram.com/el.cielosoccer"
          target="_blank"
          aria-label="Instagram"
        />
        <UButton
          icon="i-simple-icons-facebook"
          color="neutral"
          variant="ghost"
          to="https://www.facebook.com/elcielosoccer"
          target="_blank"
          aria-label="Facebook"
        />
    </section>
  </footer>
  </template>