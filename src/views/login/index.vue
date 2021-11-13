<template>
    <div class="login_page">
                <div class="inner">
                    <h2>哈哈管理平台</h2>
                <!-- 输入校验： 1.数据双向绑定v-model 2.告诉el-form校验那个数据model 3.form-item 去校验那个字段prop 4.校验规则rules -->
                <!-- 提交校验：1.绑定事件 2.设置ref属性 3.validate校验-->
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                    <!-- 姓名 -->
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
                    </el-form-item>

                    <!-- 密码 -->
                    <el-form-item label="密码" prop="password">
                        <el-input  type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                    </el-form-item>

                    <!-- 提交按钮 -->
                    <el-form-item>
                        <el-button type="primary" class="btn" @click="submitForm">登录</el-button> 
                    </el-form-item>
                </el-form>
                </div>
    </div>
</template>

<script>
// import { username, password } from './check';
export default {
    data() {
        return {
            ruleForm: {//初始化
                name: 'admin',
                password: '123456'
            },
        rules: {//校验规则
            name: [
                // { required: true, trigger: 'blur', validator:username }
                { required: true, message: '请输入登录名称', trigger: 'blur' },
                { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
            ],
            password: [
                // { required: true, trigger: 'blur', validator:password },
                { required: true, message: '请输入登录密码', trigger: 'blur' },
                { min: 6, max: 15, message: '长度在 6 到 18 个字符', trigger: 'blur' }
            ]
        }
       } 
    },
    methods: {
        submitForm(){
            this.$router.push("/home");//页面跳转
    }
    }
}
</script>

<style lang="scss" >
.login_page {  
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #324057;
    display: flex;
    justify-content: center;

    .inner {
        width: 400px;
        padding: 20px;
        background: #fff;
        align-self: center;
        border-radius: 10px;
        h2 {
            text-align: center;
            padding: 0 0 10px;
            border-bottom: 1px solid #ccc;
        }
        .btn {
            display: block;
            width: 100%;
        }
    }
}
    




</style>
