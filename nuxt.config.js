
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Agencia Manager',
    title: 'Manager',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Manager el equipo para tu marca, ¿Que esperas para darle play a tus ideas?' },
      { hid: 'keywords', name: 'keywords', content: 'Agencia de publicidad en villavicencio, Agencia de mercadeo, Agencias en villavicencio, Manager, Agencia manager,  Agencia en villavicencio, volantes, impresiones, campañas, publicidad, desarrollo web, creacion de paginas, paginas web, equipo para tu marca, equipo, agencia, grabacion con drone, dron, drone, drones, asesorias, marketing, digita, fotografia, ilustracion, diseño web, redes sociales, pizas publiciarias, desarrollo de app, diseño editorial, cuñas, podcast, carro valla, plan estrategico, creacion de marca, diseño logotipos, apoyo logistico, manejo de redes sociales, community manager, transmisiones, publicidad con carro valla, capacitaciones, clases' }
  ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/styles.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
