<template>
  <page-layout>
    <template #search>
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="类型名称">
          <el-input v-model="searchForm.name" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchForm.status" placeholder="请选择" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </template>
    <template #btnBox>
      <el-button type="primary">新增</el-button>
    </template>
    <el-table :data="tableData" height="100%" stripe>
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <template #footer>
      <page-pagination @refresh="getDataList" :page-no.sync="searchForm.pageNo" :page-size.sync="searchForm.pageSize" :total="pageTotal" />
    </template>
  </page-layout>
</template>
<script setup>
import { reactive, ref } from 'vue'
const searchForm = reactive({
  name: '',
  status: '',
  pageNo: 1,
  pageSize: 20
})
const pageTotal = ref(1)
let tableData = reactive([{ id: 1, name: '素' }])
const getDataList = () => {
  tableData = [{ id: 1, name: '1' }]
  pageTotal.value = 100
}
const onSubmit = () => {
  console.log('submit!')
}
const onReset = () => {
  console.log('onReset!')
}
</script>
<style lang="scss" scoped></style>
