<template>
  <section>
    <el-config-provider :locale="locale">
      <el-button type="primary" icon="search">按钮</el-button>
    </el-config-provider>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      locale: zhCn
    }
  }
})
</script>

<style lang="less" scoped></style>
