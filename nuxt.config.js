
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/js_motokiKasahara_v2/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: "~plugins/persistedstate.js", ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    babel: {
      presets({ isServer }) {
      return [
      [
      require.resolve('@nuxt/babel-preset-app'),
      // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
      {
      buildTarget: isServer ? 'server' : 'client',
      corejs: { version: 3 }
      }
      ]
      ]
      }
      },
      extend (config, { isDev, isClient }) {
        config.module.rules.push({
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          use: 'file-loader',
          exclude: /(node_modules)/
        });
      }
  },

  router: {
    base: '/js_motokiKasahara_v2/'
  },
}

