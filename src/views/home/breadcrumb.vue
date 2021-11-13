<template>
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="v in lists" :key="v.path">
                <router-link :to="v.path">{{v.meta.title}}</router-link>
                </el-breadcrumb-item> 
        </el-breadcrumb>
    </div>
    
</template>

// npm install --save @/api/getData @/components/visitorPie @/config/env

<script>
// 引入

export default {
    data() {
        return {
           lists:[]
            }   
    },
    watch: {
        $route(to){
            // console.log(to);
            // this.lists = to.matched;//之前
            // 新增优化
            this.getBreadcrumb(to.matched);
        }
    },
    methods: {
        // 优化 只显示一个首页
        getBreadcrumb(matched){
            if(matched.length && matched[1].name == 'index') {
                matched = [{path:'/home', name:'home', meta: {title: '首页'}}];
            }
            this.lists = matched;
        }
       
    },
    mounted() {
        // this.lists = this.$route.matched;//之前
        this.getBreadcrumb(this.$route.matched);
        // console.log(this.$route.matched);
        }
        // 路由中的mount相当于一个对象可以获取路由信息,加载完成后，定义list 具体面包屑内容
    }
    // 面包屑： 1.进来拿到路由信息，2.监听路由变化，lists会随着路由变化从新获取相对的值
</script>
