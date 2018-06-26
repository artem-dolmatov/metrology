module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Поверка счетчиков воды в Тюмени. Без снятия. Стоимость от 450 рублей!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: '5aa1ed764640c5a9'},
      { name: 'google-site-verification', content: 'j1xuZYTMdHWO6v3DNFQREa7C44jCV3e4svg-9igev0w'},
      { hid: 'description', name: 'description', content: 'Поверка счетчиков воды в Тюмени. На дому, без снятия и нарушения пломб. Стоимость от 450 рублей. Работаем ежедневно с 08:00 до 21:00.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '49362667',
        webvisor: true,
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ],
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],    
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
    }
  }
}
