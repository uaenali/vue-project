<template>
    <div class="about">
        <el-container>
            <!-- 左侧导航 -->
            <NavMenu />
            <el-container>
                <!-- 右侧主体 -->
                <!-- 头部 -->
                <el-header>
                    <Breadcrumb />
                    <Back />
                </el-header>
                <!-- 主体 -->
                <el-main><router-view /></el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
// 引入
import NavMenu from './navMenu.vue'
import Breadcrumb from './breadcrumb'
export default {
    data() {
        return {
            
            }   
    },
    methods: {
       goBack() {
           this.$router.push("/login");
       }
        },
    components: {
        NavMenu,
        Breadcrumb
        }
    }
</script>

<style scoped>
    .back {
        position: absolute;
        right: 0;
    }
</style>


