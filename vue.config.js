const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // css: {
  //   loaderOptions: {
  //     css: {},
  //     postcss: {
  //       plugins: [
  //         require('postcss-px2rem')({
  //           // 以设计稿750为例， 750 / 10 = 75
  //           remUnit: 75
  //         }),
  //       ]
  //     }
  //   }
  // },

})
