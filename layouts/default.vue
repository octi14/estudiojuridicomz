<template>
  <div class="layout">
    <header class="site-header">
      <div class="header-topbar">
        <div class="container header-topbar-inner">
          <NuxtLink to="/" class="header-logo" aria-label="Inicio — Estudio Jurídico MZ & ASOC.">
            <img
              :src="logoHeader"
              alt=""
              class="header-logo-img"
              width="120"
              height="48"
            >
          </NuxtLink>

          <nav class="nav-desktop--hero" aria-label="Secciones principales">
            <NuxtLink to="/#areas-practica" class="nav-link nav-link--hero">Servicios legales</NuxtLink>
            <NuxtLink to="/#turnos" class="nav-link nav-link--hero">Turnos</NuxtLink>
            <NuxtLink to="/#contacto" class="nav-link nav-link--hero">Contacto</NuxtLink>
          </nav>

          <button type="button" class="menu-btn" aria-label="Abrir menú" @click="open = !open">
            <span class="menu-icon" :class="{ open }" />
          </button>
        </div>
      </div>

      <div class="nav-mobile-wrap">
        <Transition name="slide">
          <nav v-show="open" class="nav-mobile" aria-label="Menú móvil">
            <NuxtLink to="/#areas-practica" class="nav-mobile-link" @click="open = false">Servicios legales</NuxtLink>
            <NuxtLink to="/#turnos" class="nav-mobile-link" @click="open = false">Turnos</NuxtLink>
            <NuxtLink to="/#contacto" class="nav-mobile-link" @click="open = false">Contacto</NuxtLink>
          </nav>
        </Transition>
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logoHeader from '~/assets/img/logo-header.svg'
const open = ref(false)
</script>
