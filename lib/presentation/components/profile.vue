<script setup lang="ts">

</script>

<template>
  <section class="v-profile">
    <picture>
      <img src="/images/elpandev.png" alt="elpandev" loading="lazy">
    </picture>
    <h1>Francisco Moncayo</h1>
    <p>Programador autodidacta desde el 2016, más exactamente el 26 de junio del 2016, día en el que registro mi primer videojuego en google play.</p>
    <p>Conozco y me desenvuelvo bien en varias tecnologías como Laravel (PHP), Vue/Nuxt (TS), React (TS) y Flutter (Dart) con las cuales he desarrollando proyectos durante toda mi carrera.</p>
    <div>
      <Clipboard class="email" value="francisco.moncayo.dev@gmail.com">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg>
        </template>
      </Clipboard>
      <Donwloader :href="'/documents/cv.pdf'" class="cv">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm1 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1zm3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
        </template>
      </Donwloader>
    </div>
  </section>
</template>
