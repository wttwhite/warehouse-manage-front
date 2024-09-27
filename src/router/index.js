import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/typeManage',
      name: 'typeManage',
      meta: {
        menu: true,
        title: '组件'
      },
      groupName: '组件',
      component: demo
    }
  ]
})
export default router
