const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/anHuiFeiYi/',
  configureWebpack: {
    devtool: 'source-map', // 添加这行
  },
})
