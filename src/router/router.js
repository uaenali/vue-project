// import { ElLoadingComponent } from 'element-ui/types/loading'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: './home',
  },
  {
    path: '/login', //登录页
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/home', //布局页
    name: 'home',
    meta: { title: '首页' },
    redirect: '/index', //重定向
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: '/index', //首页
        name: 'index',
        meta: { title: '首页' },
        component: () => import('../views/home/index/index.vue'),
      },
      // 数据管理
      {
        path: '/stats', //数据管理
        name: 'stats',
        meta: { title: '数据管理' },
        component: () => import('../views/home/stats/index.vue'),
        children: [
          {
            path: '/stats/userList', //用户列表
            name: 'userList',
            meta: { title: '用户列表' },
            component: () => import('../views/home/stats/userList.vue'),
            // 二级路由没有出口，在对应index中定义出口
          },
          {
            path: '/stats/shopList', //商家列表
            name: 'shopList',
            meta: { title: '商家列表' },
            component: () => import('../views/home/stats/shopList.vue'),
          },
          {
            path: '/stats/foodList', //食品
            name: 'foodList',
            meta: { title: '食品列表' },
            component: () => import('../views/home/stats/foodList.vue'),
          },
          {
            path: '/stats/orderList', //订单
            name: 'orderList',
            meta: { title: '订单列表' },
            component: () => import('../views/home/stats/orderList.vue'),
          },
          {
            path: '/stats/adminList', //管理员
            name: 'adminList',
            meta: { title: '管理员列表' },
            component: () => import('../views/home/stats/adminList.vue'),
          },
        ],
      },
      // 图表
      {
        path: '/chart', //图表
        name: 'chart',
        meta: { title: '图表' },
        component: () => import('../views/home/chart/index.vue'),
        // 二级路由没有出口，在对应index中定义出口
        children: [
          {
            path: '/chart/visitor', //访客列表
            name: 'visitor',
            meta: { title: '访客列表' },
            component: () => import('../views/home/chart/visitor.vue'),
          },
        ],
      },
      // 编辑
      // {
      //   path: '/edit', //编辑
      //   name: 'chart',
      //   meta: { title: '编辑' },
      //   component: () => import('../views/home/edit/index.vue'),
      //   // 二级路由没有出口，在对应index中定义出口
      //   children: [
      //     {
      //       path: '/edit/vueEdit', //文本编辑
      //       name: 'vueEdit',
      //       meta: { title: '文本编辑' },
      //       component: () => import('../views/home/edit/vueEdit.vue'),
      //     },
      //   ],
      // },
      // {
      //   path: '/set', //设置
      //   name: 'set',
      //   meta: { title: '设置' },
      //   component: () => import('../views/home/set/index.vue'),
      //   // 二级路由没有出口，在对应index中定义出口
      //   children: [
      //     {
      //       path: '/set/adminSet', //管理员设置
      //       name: 'adminSet',
      //       meta: { title: '管理员设置' },
      //       component: () => import('../views/home/set/adminSet.vue'),
      //     },
      //   ],
      // },
      // {
      //   path: '/add', //添加数据
      //   name: 'add',
      //   meta: { title: '添加数据' },
      //   component: () => import('../views/home/add/index.vue'),
      //   children: [
      //     {
      //       path: '/add/addGoods', //添加商品
      //       name: 'addGoods',
      //       meta: { title: '添加商品' },
      //       component: () => import('../views/home/add/addGoods.vue'),
      //     },
      //   ],
      // },
    ],
  },

  // 注意以下2个地址应该在home目录
]
const router = new Router({
  routes,
})
export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '/login',//登录
//       name: 'login',
//       component: () => import(../views/login/index.vue)
//     },
//     {
//       path: '/home',//首页
//       name: 'home',
//       component: () => import(../views/home/index.vue)
//     },

//     {
//       path: '/about',
//       name: 'about',

//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
