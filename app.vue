<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import favicon from '~/assets/img/icono-balanza.svg'

useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: favicon }]
})
</script>
