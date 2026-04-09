<template>
  <div class="calendly-embed">
    <iframe
      class="calendly-embed-iframe"
      :key="iframeKey"
      :title="title"
      :src="src"
      width="100%"
      height="700"
      frameborder="0"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    title?: string
    iframeKey?: string | number
  }>(),
  {
    title: 'Reservar turno — Estudio Jurídico MZ & ASOC.',
    iframeKey: 'default'
  }
)
</script>
