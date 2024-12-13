import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'
// https://vitejs.dev/config/
export default () => {
  // const env = loadEnv(mode, process.cwd())
  return defineConfig({
    base: './',
    server: {
      proxy: {
        // 代理配置
        '/api': {
          target: 'http://192.168.3.19:3000',
          changeOrigin: true
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~@': path.resolve(__dirname, 'src')
      }
    },
    esbuild: {
      drop: ['console', 'debugger']
    },
    build: {
      rollupOptions: {
        output: {
          //把所node_modules下包固定化打包
          manualChunks: id => {
            if (id.indexOf('node_modules') > -1) {
              return 'vendor'
            }
          },
          entryFileNames: 'assets/js/[name].[hash].js',
          chunkFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: 'assets/[ext]/[name].[hash].[ext]'
        }
      }
    },
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      })
    ],
    renderer: {
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ['legacy-js-api']
          }
        }
      }
    }
  })
}
