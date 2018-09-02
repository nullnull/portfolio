module.exports = {
  css: [
    '@/assets/css/main.styl',
    '@/animations/page_transitions.styl',
    '@/animations/menu.styl',
  ],
  plugins: [
    '@/plugins/mixin',
    { src: '@/plugins/ga.js', ssr: false },
  ],
  modules: [
    ['nuxt-stylus-resources-loader', [
        __dirname + '/assets/css/mixin.styl',
    ]],
    '@nuxtjs/dotenv',
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: "Katsuma Narisawa",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Web App Engineer Katsuma Narisawa / Webエンジニア 成澤克麻の個人ページ。Webサービス開発全般/自然言語処理などの開発案件、またポートレートを中心とした撮影案件を引き受けています。お問い合わせはお気軽にどうぞ。" },
      { name: 'og:image', content: 'https://katsumanarisawa.netlify.com/ogp.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css", integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ", crossorigin: "anonymous"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300"},
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
