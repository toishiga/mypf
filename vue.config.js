const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: 'docs',
  transpileDependencies: true,
  outputDir: 'docs'
})
