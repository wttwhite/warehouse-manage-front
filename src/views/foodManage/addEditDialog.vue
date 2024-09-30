<template>
  <el-dialog title="新增" :visible.sync="visible" :close-on-click-modal="false" width="500px">
    <el-form ref="formRef" :rules="rules" :model="formData" label-position="top">
      <el-form-item label="食材名称" prop="followPersonId">
        <el-input v-model="formData.name" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="submitClick" :disabled="loading" v-loading="loading"> 确 定 </el-button>
    </div>
  </el-dialog>
</template>

<script setup>
// import { rentManagerUpdate } from '@/apis/holdasset-contract'
import { ref, reactive, defineEmits, defineExpose } from 'vue'
const visible = ref(false)
const loading = ref(false)
let formData = reactive({
  name: ''
})
const rules = {
  followPersonId: [{ required: true, message: '请选择经办人' }]
}
// 初始化
const showDialog = row => {
  visible.value = true
  formData.followPersonId = ''
  formData = {
    ...row
  }
}
// 通过实例暴露给外面
defineExpose({
  showDialog
})

// 提交
const emit = defineEmits(['refresh'])
const formRef = ref(null)
const submitClick = () => {
  formRef.value.validate(valid => {
    if (valid) {
      //   loading.value = true
      //   let params = {
      //     ...this.formData
      //   }
      //   await rentManagerUpdate(params).finally(() => {
      //     this.loading = false
      //   })
      // this.$message.success('新增成功')
      visible.value = false
      emit('refresh')
    } else {
      return false
    }
  })
}
</script>
<style lang="scss" scoped></style>
