import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import 'dayjs/locale/zh-cn';//中文
// import locale from 'element-plus/lib/locale/lang/zh-cn';//中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router'

import addComponentsAll from '@/components'

const app = createApp(App)
// 注册所有图标icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

/** 全局加载注册自定组件 */
addComponentsAll(app)

app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.mount('#app')
