module.exports = {
  css: [
    '@/assets/css/main.styl',
    '@/animations/page_transitions.styl'
  ],
  plugins: [
    '@/plugins/mixin'
  ],
  modules: [
    ['nuxt-stylus-resources-loader', [
        __dirname + '/assets/css/mixin.styl',
    ]],
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // extend default options
      // const stylus = config.module.rules[0].options.loaders.stylus.find(e => e.loader == 'stylus-loader')
      // Object.assign(stylus.options, {
      //   import: [
      //     '@/assets/css/mixins.styl'
      //   ]
      // })
    }
  }
}
