const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  filenameHashing: true,
  assetsDir: 'selfstatic',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/food': {
        target: 'http://192.168.3.19:3000',
        changeOrigin: true,
        pathRewrite: {
          // '/app': '',
        }
      }
    },
    client: {
      overlay: false // 编译错误时，取消全屏覆盖（建议关掉）
    }
  }
})
