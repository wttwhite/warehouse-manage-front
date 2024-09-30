import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'

import pageLayout from './components/common/pageLayout.vue'
import pagePagination from './components/common/pagePagination.vue'

const app = createApp(App)
// 注册所有图标icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('page-layout', pageLayout)
app.component('page-pagination', pagePagination)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
