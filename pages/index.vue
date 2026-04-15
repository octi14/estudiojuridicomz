<template>
  <div>
    <section id="inicio" class="home-hero">
      <div
        class="home-hero__bg"
        :style="{
          backgroundImage: `url(${imagenHero})`,
          transform: `translate3d(0, ${heroParallaxY}px, 0)`
        }"
        aria-hidden="true"
      />
      <div class="container home-hero-inner">
        <img
          :src="logoHero"
          alt="Estudio Jurídico MZ & ASOC."
          class="logo-hero-img"
          width="320"
          height="320"
        >
      </div>
    </section>

    <section id="quien-soy" class="section section--value">
      <div class="container">
        <div class="home-value">
          <h1 class="home-value-title">
            Gestión integral de Sucesiones y Contratos. Respuestas claras para tus asuntos civiles.
          </h1>
          <p class="home-value-lead">
            Acompañamiento a personas y empresas en la protección de sus bienes y la resolución de conflictos familiares con agilidad.
          </p>
          <div class="home-value-actions">
            <NuxtLink to="/#turnos" class="btn btn-primary btn-block">Solicitar turno</NuxtLink>
            <a href="https://wa.me/5492255507767" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-block">Contactate</a>
          </div>
        </div>
      </div>
    </section>

    <section id="areas-practica" class="section section--practice practice-section">
      <div class="container">
        <h2 class="section-title section-title--practice">
          Áreas de práctica
        </h2>
        <div class="card-grid-practice">
          <article
            v-for="area in practiceAreas"
            :key="area.title"
            class="practice-card"
          >
            <div class="practice-card-head">
              <img
                :src="iconBalanca"
                :alt="`Ícono — ${area.title}`"
                class="practice-card-icon-img"
                width="40"
                height="40"
              >
              <h3 class="practice-card-title">
                <template v-if="area.titleMobileLines">
                  <span class="practice-card-title__split">{{ area.titleMobileLines[0] }}<br>{{ area.titleMobileLines[1] }}</span>
                  <span class="practice-card-title__full">{{ area.title }}</span>
                </template>
                <template v-else>
                  {{ area.title }}
                </template>
              </h3>
            </div>
            <p class="practice-card-sub">
              {{ area.sub }}
            </p>
            <p class="practice-card-text">
              {{ area.text }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="turnos" class="section turnos-home-section">
      <div class="container">
        <div class="turnos-home-embed">
          <h2 class="section-title turnos-home-title">
            Turnos online
          </h2>
          <p class="turnos-home-subtitle">
            Agendá tu turno.
          </p>
          <CalendlyEmbed :src="calendlyUrl" :iframe-key="CALENDLY_EVENT_SLUG" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { CALENDLY_USER, CALENDLY_EVENT_SLUG } from '../composables/useCalendly'
import logoHero from '~/assets/img/logo-hero.svg'
import imagenHero from '~/assets/img/imagen-hero.svg'
import iconBalanca from '~/assets/img/icono-balanza.svg'

type PracticeArea = {
  title: string
  sub: string
  text: string
  /** Dos líneas solo en móvil (CSS); en desktop se usa `title`. */
  titleMobileLines?: readonly [string, string]
}

const practiceAreas: PracticeArea[] = [
  {
    title: 'Sucesiones',
    sub: 'Gestión Integral de Sucesiones ab-intestato o testamentarias',
    text: 'Tramitación integral de herencias en toda la Provincia de Buenos Aires. Inicio y continuación de procesos sucesorios, garantizando transparencia en cada etapa y la protección de los bienes familiares.'
  },
  {
    title: 'Contratos y Derecho Civil',
    titleMobileLines: ['Contratos y', 'Derecho Civil'],
    sub: 'Seguridad en Contratos y Asuntos Civiles',
    text: 'Respaldo técnico para asegurar tus bienes y transacciones. Asesoramiento a Inmobiliarias, procesos de compra, redacción de boletos de compraventa y contratos de locación. Revisión y auditoría de contratos Civiles y Comerciales mediante soluciones preventivas para evitar conflictos legales futuros. Gestión judicial en desalojos y regularización de dominios mediante usucapión (prescripción adquisitiva).'
  },
  {
    title: 'Derecho Digital',
    sub: 'Asesoría en Derecho Digital',
    text: 'Protección de Activos Digitales y Marcas. Asesoría integral en Registro de Marcas. Diseño de estrategias de privacidad y protección de datos para personas y organizaciones de todo tipo, asegurando el cumplimiento normativo en la era de la información.'
  },
  {
    title: 'Derecho de Familia',
    sub: 'Consultas de Familia y Vínculos',
    text: 'Asistencia profesional en la resolución de conflictos familiares, alimentos, cuidado personal, régimen de comunicación y divorcios. Un enfoque humano y equilibrado para proteger los intereses de todos los integrantes de la familia. Priorizando el bienestar de los menores y la búsqueda de soluciones equilibradas para los vínculos familiares.'
  }
]

const calendlyUrl = computed(
  () => `https://calendly.com/${CALENDLY_USER}/${CALENDLY_EVENT_SLUG}`
)

/** Parallax del fondo: el bloque hero y el logo hacen scroll normal; el fondo se desplaza más lento */
const heroParallaxY = ref(0)
let parallaxRaf = 0

function updateHeroParallax() {
  parallaxRaf = 0
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroParallaxY.value = 0
    return
  }
  const y = window.scrollY || document.documentElement.scrollTop
  const rate = window.matchMedia('(max-width: 767px)').matches ? 0.18 : 0.42
  heroParallaxY.value = Math.round(y * rate)
}

function onScrollParallax() {
  if (!parallaxRaf) {
    parallaxRaf = requestAnimationFrame(updateHeroParallax)
  }
}

onMounted(() => {
  updateHeroParallax()
  window.addEventListener('scroll', onScrollParallax, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScrollParallax)
  if (parallaxRaf) cancelAnimationFrame(parallaxRaf)
})
</script>
