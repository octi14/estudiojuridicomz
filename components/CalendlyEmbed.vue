<template>
  <div ref="root" class="calendly-embed">
    <iframe
      v-if="shouldLoad"
      class="calendly-embed-iframe"
      :key="iframeKey"
      :title="title"
      :src="src"
      width="100%"
      height="700"
      frameborder="0"
      loading="lazy"
    />
    <div
      v-else
      class="calendly-embed-iframe"
      aria-hidden="true"
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
    iframeKey: 'default',
  },
)

const root = ref<HTMLElement | null>(null)
const shouldLoad = ref(false)
let io: IntersectionObserver | null = null

onMounted(() => {
  const el = root.value
  if (!el || typeof IntersectionObserver === 'undefined') {
    shouldLoad.value = true
    return
  }
  io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        shouldLoad.value = true
        io?.disconnect()
        io = null
      }
    },
    { rootMargin: '240px 0px', threshold: 0 },
  )
  io.observe(el)
})

onUnmounted(() => {
  io?.disconnect()
  io = null
})
</script>
