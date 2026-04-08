// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', 'nuxt-swiper'],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/'
  },
  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination', 'autoplay'],
  },
  vite: {
    build: {
      target: 'es2015',
      sourcemap: false,
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          // 🔥 Делим vendor'ы
          manualChunks(id) {
            if (!id.includes('node_modules')) return

            if (id.includes('@nuxtjs/i18n')) return 'i18n'
            if (id.includes('@nuxtjs/tailwindcss')) return 'tailwindcss'
            if (id.includes('nuxt-swiper')) return 'swiper'
            if (id.includes('vue')) return 'vue'
            if (id.includes('vue-router')) return 'vue-router'
            if (id.includes('sass')) return 'sass'

            return 'vendor'
          },

          // компактные имена файлов
          chunkFileNames: 'js/[hash].js',
          entryFileNames: 'js/[hash].js',
          assetFileNames: 'assets/[hash].[ext]'
        }
      },
    },
    esbuild: {
      drop: ['console', 'debugger'],   // ❌ убирает console.log в проде
    },
  }
})