<template>
  <div class="carousel-container">
    <el-carousel indicator-position="outside" :interval="3000">
      <el-carousel-item v-for="item in list" :key="item.src">
        <img :src="item.src" alt="" class="img-item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: 'https://w.wallhaven.cc/full/wq/wallhaven-wqdglr.jpg'
        },
        {
          src: 'https://w.wallhaven.cc/full/z8/wallhaven-z89dgo.png'
        },
        {
          src: 'https://w.wallhaven.cc/full/e7/wallhaven-e726z8.png'
        },
        {
          src: 'https://w.wallhaven.cc/full/j3/wallhaven-j3ypkm.png'
        },
        {
          src: 'https://w.wallhaven.cc/full/x8/wallhaven-x89d5z.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 700px;

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .img-item {
    width: 100%;
  }
}
</style>
