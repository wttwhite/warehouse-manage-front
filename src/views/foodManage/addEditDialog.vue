<template>
  <el-dialog :title="formData.id ? '编辑' : '新增'" v-model="visible" :close-on-click-modal="false" width="500px">
    <el-form ref="formRef" :rules="rules" :model="formData" label-width="90">
      <el-form-item label="食材名称" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="食材类型" prop="type">
        <el-select v-model="formData.type" placeholder="请选择">
          <el-option :label="item.label" :value="key" v-for="(item, key) in typeOps" :key="key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="库存" prop="inventory">
        <el-input v-model="formData.inventory">
          <template #append>
            <el-select v-model="formData.unit" placeholder="Select" style="width: 120px">
              <el-option :label="item.label" :value="key" v-for="(item, key) in unitOps" :key="key" />
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="生产日期" prop="productDate">
        <el-date-picker v-model="formData.productDate" type="date" @change="productDateChange" />
      </el-form-item>
      <el-form-item label="保质期" prop="sellByDate">
        <el-date-picker v-model="formData.sellByDate" type="date" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="submitClick" :disabled="loading" v-loading="loading"> 确 定 </el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { addFood, updateFood } from '@/apis/food'
import { ref, defineEmits, defineExpose } from 'vue'
import { TypeOps, UnitOps } from './const'
import { ElMessage } from 'element-plus'
import dayjs from 'dayjs'
const typeOps = ref(TypeOps)
const unitOps = ref(UnitOps)
const visible = ref(false)
const loading = ref(false)
const DefaultFormData = () => {
  return {
    name: '',
    type: '',
    inventory: '',
    unit: 'g',
    productDate: '',
    sellByDate: ''
  }
}
let formData = ref({})
const rules = {
  name: [{ required: true, message: '当前项必填', trigger: 'blur' }],
  type: [{ required: true, message: '当前项必填', trigger: 'blur' }],
  inventory: [{ required: true, message: '当前项必填', trigger: 'blur' }],
  sellByDate: [{ required: true, message: '当前项必填', trigger: 'blur' }]
}
const formRef = ref(null)
// 初始化
const showDialog = row => {
  visible.value = true
  formRef.value?.resetFields()
  formData.value = row ? { ...row } : DefaultFormData()
}
// 通过实例暴露给外面
defineExpose({
  showDialog
})

const productDateChange = val => {
  if (!formData.value.sellByDate) {
    formData.value.sellByDate = dayjs(val).add(1, 'year')
  }
}

// 提交
const emit = defineEmits(['refresh'])
const submitClick = () => {
  formRef.value.validate(async valid => {
    if (valid) {
      loading.value = true
      let params = {
        ...formData.value
      }
      if (formData.value.id) {
        await updateFood(params).finally(() => {
          loading.value = false
        })
        ElMessage.success('编辑成功')
      } else {
        await addFood(params).finally(() => {
          loading.value = false
        })
        ElMessage.success('新增成功')
      }

      visible.value = false
      emit('refresh')
    } else {
      return false
    }
  })
}
</script>
<style lang="scss" scoped></style>
