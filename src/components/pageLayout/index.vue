<template>
  <div class="page-layout" v-loading="loading">
    <div v-if="hasSidebar" class="has-sidebar">
      <slot name="sidebar"></slot>
    </div>
    <section :class="'page-container'">
      <!-- <div v-if="!noBreadcrumb" class="page-breadcrumb">
          <slot name="breadcrumb"></slot>
        </div> -->
      <section class="page-main">
        <div class="page-search" v-if="!noSearch">
          <slot name="search"></slot>
        </div>
        <div class="btn-box" v-if="!noBtn">
          <slot name="btnBox"></slot>
        </div>
        <div
          class="page-content"
          :style="{
            'padding-right': contentPadRight + 'px'
          }"
        >
          <slot></slot>
        </div>
      </section>
      <div class="page-footer" v-if="!noPagination">
        <slot name="footer"></slot>
      </div>
    </section>
  </div>
</template>
<script setup>
defineProps({
  noBreadcrumb: { type: Boolean, default: false },
  // 默认有搜索
  noSearch: { type: Boolean, default: false },
  noBtn: { type: Boolean, default: false },
  noPagination: { type: Boolean, default: false },
  // 默认没有侧边栏，有侧边栏几率比没有的小
  hasSidebar: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  contentPadRight: { type: String, default: '16' }
})
</script>
<style lang="scss" scoped>
.page-layout {
  width: 100%;
  height: 100%;
  display: flex;
  background: #f2f3f5;
  box-sizing: border-box;
}

.page-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 0;
  height: 100%;
  .page-breadcrumb {
    padding: 16px 16px 0 16px;
    background: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    font-size: 18px;
    color: #0f1114;
    line-height: 26px;
    :deep(.breadcrumb) {
      padding-bottom: 0;
    }
  }
  .page-search {
    // 日期范围284px也够，遇到日期+时间范围的宽一点，暂时没有
    :deep(.el-date-editor.el-input),
    :deep(.el-date-editor.el-input__inner),
    :deep(.el-input),
    :deep(.el-select),
    :deep(.el-date-picker) {
      width: 284px;
    }
    // 表单内部的搜索弹框样式受表单影响
    :deep(.el-form--inline.el-form--label-right) {
      .el-form-item__label {
        padding: 0 12px 0 0;
      }
      .el-form-item__content {
        display: inline-block;
      }
    }
  }
  // 搜索
  .page-search {
    padding: 0 16px 0 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: #fff;
    flex-shrink: 0;
    // margin-bottom: 16px;

    :deep(.el-form-item--small.el-form-item) {
      margin-bottom: 16px;
    }

    :deep(.el-input__inner) {
      border-radius: 2px;
    }

    :deep(.el-form--inline .el-form-item) {
      margin-right: 32px;
    }

    :deep(.el-form--label-top .el-form-item__label) {
      padding: 0;
    }
  }

  .page-main {
    flex: 1;
    height: 0;
    padding-top: 16px;
    padding-left: 16px;
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 4px;

    .btn-box {
      margin-bottom: 16px;
      margin-right: 16px;
      padding-top: 16px;
      border-top: 1px solid #f2f3f5;

      :deep([flex-between]) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      :deep([class-unit]) {
        color: #686868;
      }
    }
  }

  .page-content {
    flex: 1;
    height: 0;
  }
}

.page-footer {
  width: 100%;
  height: 60px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  background: #fff;
  z-index: 5;
}

// 有左边栏的样式覆盖
.has-sidebar {
  margin-right: 16px;
  background-color: #fff;
}

// ::v-deep .el-date-editor.el-input,
// ::v-deep .el-date-editor.el-input__inner,
// ::v-deep .el-input,
// ::v-deep .el-select,
// ::v-deep .el-date-picker {
//   width: 100%;
// }
</style>
