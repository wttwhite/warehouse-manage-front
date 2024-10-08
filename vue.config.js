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
      '/app/holdasset-base': {
        target: 'http://192.168.1.223:8080',
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
