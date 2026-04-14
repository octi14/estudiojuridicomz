<template>
  <footer id="contacto" class="footer">
    <div class="footer-main">
      <div class="container footer-inner">
        <div class="footer-inner-cluster">
          <div class="footer-brand">
            <img
              :src="logoFooter"
              alt="Estudio Jurídico MZ & ASOC."
              class="footer-brand-img"
              width="280"
              height="auto"
            >
          </div>

          <div class="footer-divider" aria-hidden="true" />

          <div class="footer-contact-block">
            <h2 class="footer-contact-title">
              Contacto
            </h2>
            <p class="footer-attn">
              Atención con turno previo
            </p>
            <ul class="footer-contact-list">
              <li class="footer-contact-item">
                <i class="bi bi-telephone-fill" aria-hidden="true" />
                <a href="https://wa.me/5492255507767" target="_blank" rel="noopener noreferrer">02255507767</a>
              </li>
              <li class="footer-contact-item">
                <i class="bi bi-envelope" aria-hidden="true" />
                <a href="mailto:micaelazulkovski@gmail.com">micaelazulkovski@gmail.com</a>
              </li>
              <li class="footer-contact-item">
                <i class="bi bi-pin-map-fill" aria-hidden="true" />
                <span>Av. 3 Nro 2467, Villa Gesell</span>
              </li>
              <li class="footer-contact-item">
                <i class="bi bi-instagram" aria-hidden="true" />
                <a href="https://www.instagram.com/estudiojuridicomz" target="_blank" rel="noopener noreferrer">estudiojuridicomz</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-powered-strip">
      <p class="footer-powered-text">
        Powered by <a href="https://darksalmon.com.ar" class="footer-powered-link" target="_blank" rel="noopener noreferrer">Darksalmon</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
/// <reference path="../env.d.ts" />
import logoFooter from '~/assets/img/logo-footer.svg'
</script>
