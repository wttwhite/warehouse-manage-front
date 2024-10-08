<template>
  <section :class="['sidebar', { 'sidebar-collapse': !isCollapse }]">
    <el-menu default-active="2" :collapse="isCollapse" :collapse-transition="false">
      <el-icon class="icon-btn" :size="24" :color="color" @click="isCollapse = !isCollapse">
        <Fold v-show="!isCollapse" />
        <Expand v-show="isCollapse" />
      </el-icon>
      <el-menu-item v-for="(item, index) in menuList" :key="index" :index="index + ''" @click="menuItemClick(item)">
        <el-icon><document /></el-icon>
        <template #title>{{ item?.meta?.title }}</template>
      </el-menu-item>
    </el-menu>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import routes from '../router/routes'
const color = ref('#837f7f')
const isCollapse = ref(false)
const router = useRouter()
const menuList = routes.filter(item => item.meta?.menu)
const menuItemClick = item => {
  router.push(item.path)
}
// const props = defineProps({
//   foo: String
// })
// const emit = defineEmits(['change', 'delete'])
// emit('change')
// 通过实例暴露给外面
// defineExpose({
//   a,
//   b
// })
</script>
<style lang="scss" scoped>
.sidebar-collapse {
  width: 200px;
  flex-shrink: 0;
}
.sidebar {
  height: 100%;
  position: relative;
  .icon-btn {
    padding: 8px 20px;
    cursor: pointer;
  }
  .el-menu {
    height: 100%;
    .el-menu-item .el-menu-tooltip__trigger {
      padding-left: 0;
    }
  }
}
</style>
