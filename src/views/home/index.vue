<template>
  <div class="home">
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu />

      <main>
        <!-- 右侧主体 -->
        <!-- 头部 -->
        <Header />

        <!-- 卡片列表 -->
        <div class="card-container">
          <Card v-for="item in cardList" :key="item.title" :card="item" />
        </div>

        <div class="middle">
          <!-- 轮播图 -->
          <Carousel />
          <!-- 日历 -->
          <Calendar />
        </div>

        <!-- 表格 -->
        <Table />

        <!-- 主体 -->
        <router-view />
      </main>
    </el-container>
  </div>
</template>

<script>
// 引入
import NavMenu from './navMenu.vue'
import Table from '../../components/Table.vue'
import Header from '../../components/Header.vue'
import Card from '../../components/Card.vue'
import Carousel from '../../components/Carousel.vue'
import Calendar from '../../components/Calendar.vue'

export default {
  components: {
    NavMenu,
    Table,
    Header,
    Card,
    Carousel,
    Calendar,
  },
  data() {
    return {
      cardList: [
        {
          title: '百度',
          content: '百度',
          jumpLink: 'https://baidu.com',
        },
        {
          title: 'Github',
          content: 'Github',
          jumpLink: 'https://github.com',
        },
        {
          title: '京东',
          content: '京东',
          jumpLink: 'https://jd.com',
        },
        {
          title: 'Vue',
          content: 'Vue',
          jumpLink: 'https://cn.vuejs.org/v2/guide/index.html',
        },
        {
          title: 'React',
          content: 'React',
          jumpLink: 'https://zh-hans.reactjs.org/',
        },
        {
          title: 'ES6',
          content: 'ES6',
          jumpLink: 'https://es6.ruanyifeng.com/',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.home {
  main {
    width: 100%;
    padding: 0 70px;
    .card-container {
      display: flex;
      flex-wrap: wrap;
    }
    .middle {
      display: flex;
      margin-top: 50px;
    }
  }
}
</style>
