# MicaZAbogada

Sitio institucional para abogada. Vue/Nuxt 3 con secciones en la home: Inicio, Quién soy, Áreas de práctica, **Turnos** (Calendly embebido) y **Contacto** en el pie.

## Cómo levantar el proyecto

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Configurar Calendly

1. Creá una cuenta en [calendly.com](https://calendly.com) y definí tipos de evento (ej. consultas de distinta duración).
2. En `composables/useCalendly.ts` ajustá:
   - `CALENDLY_USER`: tu usuario de Calendly.
   - `CALENDLY_EVENT_SLUG`: el slug del tipo de evento (debe existir en Calendly).

La URL del iframe en la home es `https://calendly.com/${CALENDLY_USER}/${CALENDLY_EVENT_SLUG}`.

## Contenido a personalizar

- **Quién soy / valor**: titular y párrafo introductorio en `pages/index.vue`.
- **Áreas de práctica**: tarjetas y textos en `pages/index.vue`.
- **Contacto**: datos en `components/SiteFooter.vue`.

## Build para producción

```bash
npm run build
npm run preview
```

Para desplegar: `npm run generate` si querés sitio estático, o usar el output de `npm run build` con un servidor Node (Nuxt en modo SSR).

## Repositorio

El desarrollo activo vive en [octi14/estudiojuridicomz](https://github.com/octi14/estudiojuridicomz) (repo público personal). Una copia anterior existía bajo la organización en GitHub; si aún existe, conviene archivarla o dejar un aviso allí apuntando a este repositorio.
