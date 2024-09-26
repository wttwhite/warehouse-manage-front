<template>
  <section class="sidebar">
    <el-menu default-active="2" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
      <el-icon class="icon-btn" :size="24" :color="color" @click="isCollapse = !isCollapse">
        <Fold v-show="!isCollapse" />
        <Expand v-show="isCollapse" />
      </el-icon>
      <el-menu-item index="2">
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const color = ref('#837f7f')
const isCollapse = ref(false)

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
.sidebar {
  width: 200px;
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
