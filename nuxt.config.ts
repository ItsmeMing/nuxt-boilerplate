// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: 'Sixth Element',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'my website description'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  //Uncomment these after installing dependencies
  // css: ['@/assets/styles/main.scss', '@/assets/styles/responsive.scss', '@/assets/styles/_variables.scss'],
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {}
  //   }
  // },
  // pinia: {
  //   autoImports: ['defineStore', 'storeToRefs', ['defineStore', 'definePiniaStore']]
  // },
  // modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@element-plus/nuxt'],
  // imports: { dirs: ['stores', 'repositories'] }
})
