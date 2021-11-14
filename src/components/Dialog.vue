<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="cancel"
  >
    <span>你确定要退出登录吗?</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="ok">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean
    }
  },
  data() {
    return {}
  },
  methods: {
    cancel() {
      this.$emit('hideDialog')
    },
    ok() {
      this.$emit('hideDialog')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped></style>
