module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true
  },
  runtimeCompiler: true,
  chainWebpack: config => { 
    config.plugin('html').tap(args => { 
      args[0].title = 'Admin - لوحة التحكم'
      return args
  })},
  pluginOptions: {
    i18n: {
      locale: "ar",
      fallbackLocale: "ar",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
};
