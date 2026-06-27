export default defineNuxtConfig({
  compatibilityDate: '2026-06-27',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Brandon Mbori — Expert Publicité en ligne & Design graphique',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Brandon Mbori, expert en publicité en ligne (Meta Ads, Google Ads) et designer graphique. Portfolio, services et contact."
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Archivo+Black&family=Inter:wght@400;500;600&display=swap'
        }
      ]
    }
  }
})
