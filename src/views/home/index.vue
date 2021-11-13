<template>
  <div class="about">
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu />
      <el-container>
        <!-- 右侧主体 -->
        <!-- 头部 -->
        <el-header class="header">
          <Breadcrumb />
          <el-button class="exit" @click="goBack">退出</el-button>
        </el-header>

        <!-- 表格 -->
        <Table />

        <!-- 主体 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入
import NavMenu from './navMenu.vue'
import Breadcrumb from './breadcrumb'
import Table from '../../components/Table.vue'

export default {
  components: {
    NavMenu,
    Breadcrumb,
    Table,
  },
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .exit {
    height: 40px;
  }
}
</style>
