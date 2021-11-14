<template>
  <div>
    <el-header class="header">
      <Breadcrumb />

      <el-dropdown @command="handleJump">
        <span class="el-dropdown-link">
          uaenali
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in menuList"
            :key="item.value"
            :divided="item.value === '退出'"
            :command="item.path"
          >
            {{ item.value }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <div v-if="dialogVisible">
      <Dialog :dialogVisible="dialogVisible" @hideDialog="hideDialog" />
    </div>
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb.vue'
import Dialog from './Dialog.vue'

export default {
  components: { Breadcrumb, Dialog },
  data() {
    return {
      dialogVisible: false,
      menuList: [
        {
          value: '个人中心',
          path: '/user'
        },
        {
          value: '订单中心',
          path: '/order'
        },
        {
          value: '项目管理',
          path: '/project'
        },
        {
          value: '退出',
          path: '/login'
        }
      ]
    }
  },
  methods: {
    handleJump(path) {
      if (path === '/login') {
        this.dialogVisible = true
        return
      }
      this.$router.push(path)
    },
    hideDialog() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>
