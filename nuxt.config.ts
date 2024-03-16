import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    '/': { prerender: true }
  },
  alias: {
    '@css': resolve(__dirname, './assets/css'),
    '@scss': resolve(__dirname, './assets/scss')
  },
  css: ['@css/normalize.css', '@css/scrollbar.css'],
  modules: [
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    ['@element-plus/nuxt', { importStyle: 'scss', themes: ['dark'] }]
  ],
  colorMode: {
    classSuffix: ''
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                    @use "@scss/element/common/override.scss" as common;
                    @use "@scss/element/dark/override.scss" as dark;
                    @use "@scss/index.scss" as *;
                `
        }
      }
    }
  },
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      }
    ]
  }
})
