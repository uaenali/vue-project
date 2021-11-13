// 设置 管理员设置

<template>

        <div class="admin_set">
            <ul>
                <li>
                    <span>姓名：</span><span>张三</span>
                </li>
                <li>
                    <span>注册时间：</span><span>2011.11.2</span>
                </li>
                <li>
                    <span>管理员权限：</span><span>管理员</span>
                </li>
                <li>
                    <span>管理员 ID：</span><span>007</span>
                </li>
                <li>
                    <span>更换头像：</span>
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </li>    
            </ul>
        </div>
</template>
    
<style>
.admin_set{
        width: 40%;
        background-color: coral;
        min-height: 400px;
        margin: 20px auto 0;
        border-radius: 10px;
        ul > li {
            padding: 20px;
            span {
                color: #666;
            }
        }
          
    }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>