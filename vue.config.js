module.exports = {
  chainWebpack: config => config.plugin('VuetifyLoaderPlugin').tap(args => [{}]),
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
