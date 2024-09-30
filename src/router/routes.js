export default [
  {
    path: '/typeManage',
    name: 'typeManage',
    meta: {
      menu: true,
      title: '类型管理'
    },
    component: () => import('@/views/typeManage/index.vue')
  },
  {
    path: '/foodManage',
    name: 'foodManage',
    meta: {
      menu: true,
      title: '食材管理'
    },
    component: () => import('@/views/foodManage/index.vue')
  },
  {
    path: '/cookbookList',
    name: 'cookbookList',
    meta: {
      menu: true,
      title: '菜谱列表'
    },
    component: () => import('@/views/cookbookList/index.vue')
  }
]
