<template>
  <el-aside class="aside">
    <el-menu default-active="1" class="el-menu-vertical-demo" router>
      <!-- 注意上边结尾加上路由router，点击模块进行跳转 -->
      <!-- 无子级 -->
      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 无子级 -->
      <!-- <el-menu-item index="/set">
        <i class="el-icon-menu"></i>
        <span slot="title">设置</span>
      </el-menu-item> -->
      <!-- 有子级 -->
      <el-submenu index="/add">
        <template slot="title"><i class="el-icon-menu"></i>添加数据</template>
        <el-menu-item index="/add/addGoods"
          ><i class="el-icon-star-on"></i>添加商品</el-menu-item
        >
      </el-submenu>

      <!-- 数据管理 -->
      <el-submenu index="/stats">
        <template slot="title"
          ><i class="el-icon-document"></i>数据管理</template
        >
        <el-menu-item index="/stats/userList">用户列表</el-menu-item>
        <el-menu-item index="/stats/shopList">商家列表</el-menu-item>
        <el-menu-item index="/stats/foodList">食品列表</el-menu-item>
        <el-menu-item index="/stats/orderList">订单列表</el-menu-item>
        <el-menu-item index="/stats/adminList">管理员列表</el-menu-item>
      </el-submenu>

      <!-- 图表 -->
      <el-submenu index="/chart">
        <template slot="title"><i class="el-icon-star-on"></i>图表</template>
        <el-menu-item index="/chart/visitor">用户分布</el-menu-item>
        <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
      </el-submenu>

      <!-- 文本编辑 -->
      <el-submenu index="/edit">
        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
        <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
        <el-menu-item index="/edit/vueEdit">文本编辑</el-menu-item>
      </el-submenu>

      <!-- 设置 -->
      <el-submenu index="/set">
        <template slot="title"><i class="el-icon-setting"></i>设置</template>
        <el-menu-item index="/set/adminSet">管理员设置</el-menu-item>
        <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
      </el-submenu>

      <!-- 有子级 -->
      <!-- <el-submenu index="/wms">
          <template slot="title">
            <i class="el-icon-menu"></i>信息管理
          </template>
          <el-menu-item index="/wms/list">
          <i class="el-icon-star-on"></i>列表管理</el-menu-item>
        </el-submenu> -->
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
// .aside {
//   background-color: lightblue;
//   height: 100vh;

//   .el-menu {
//     background-color: transparent;
//     .el-menu-item:hover,
//     .el-submenu:hover {
//       background-color: #000;
//     }
//   }
// }
</style>
