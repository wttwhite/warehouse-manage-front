export default [
  {
    path: '/typeManage',
    name: 'typeManage',
    meta: {
      menu: true,
      title: '类型管理'
    },
    component: () => import('@/views/typeManage/index.vue')
  }
]
