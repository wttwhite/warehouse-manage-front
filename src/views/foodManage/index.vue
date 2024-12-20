<template>
  <page-layout>
    <template #search>
      <el-form :inline="true" :model="searchForm" ref="searchFormRef">
        <el-form-item label="食材名称" prop="name">
          <el-input v-model="searchForm.name" placeholder="请输入" clearable />
        </el-form-item>
        <!-- <el-form-item label="保质期" prop="dateRange">
          <el-date-picker
            v-model="searchForm.dateRange"
            type="daterange"
            unlink-panels
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </el-form-item> -->
        <el-form-item label="食材类型" prop="type">
          <el-select v-model="searchForm.type" placeholder="请选择" clearable>
            <el-option :label="item.label" :value="key" v-for="(item, key) in typeOps" :key="key"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </template>
    <template #btnBox>
      <el-button type="primary" @click="addClick">新增</el-button>
    </template>
    <el-table :data="tableData" height="100%" stripe>
      <el-table-column type="index" label="序号" width="55" />
      <el-table-column
        v-for="(item, index) in TableColumnList"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width || ''"
        :min-width="item.minWidth || ''"
        show-overflow-tooltip
      >
        <template #default="{ row }">
          <span v-if="!item.format">
            {{ item.func ? item.func(row) : row[item.prop] }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button type="text" @click="editClick(row)">编辑</el-button>
          <el-button type="text" @click="deleteClick(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <page-pagination @refresh="getDataList" :page-no.sync="searchForm.pageNo" :page-size.sync="searchForm.pageSize" :total="pageTotal" />
    </template>
    <addEditDialog ref="addEditDialogRef" @refresh="getDataList(1)" />
  </page-layout>
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue'
import addEditDialog from './addEditDialog.vue'
import { getFoodPage, deleteFood } from '@/apis/food'
import { TableColumnList, TypeOps } from './const'
import { ElMessage, ElMessageBox } from 'element-plus'
const typeOps = ref(TypeOps)

onMounted(() => {
  getDataList()
})
const searchForm = reactive({
  name: '',
  pageNo: 1,
  pageSize: 20
})
const pageTotal = ref(1)
// 用reactive新增成功之后刷新表格数据，不会触发视图更新
// reactive函数只会在初始化时将对象转化成响应式对象，后续添加新属性不会触发视图更新
let tableData = ref([])
const getDataList = async () => {
  const { data } = await getFoodPage(searchForm)
  console.log('data', data)
  tableData.value = data?.records || []
  pageTotal.value = data?.total || 0
}
const onSearch = () => {
  getDataList(1)
}
const searchFormRef = ref(null)
const onReset = () => {
  searchFormRef.value.resetFields()
  getDataList(1)
}

// 新增编辑弹框
const addEditDialogRef = ref(null)
const addClick = () => {
  addEditDialogRef.value.showDialog()
}
const editClick = row => {
  addEditDialogRef.value.showDialog(row)
}
// 删除
const deleteClick = row => {
  ElMessageBox.confirm('确定删除吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      await deleteFood({ id: row.id })
      ElMessage.success('删除成功')
      getDataList(1)
    })
    .catch(() => {})
}
</script>
<style lang="scss" scoped></style>
