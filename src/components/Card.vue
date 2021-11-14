<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="clearfix">
      <span>{{ card.title }}</span>
    </div>
    <div class="text item">
      <el-link type="primary" @click="jump(card.jumpLink)">{{
        card.content
      }}</el-link>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
  data() {
    return {}
  },
  methods: {
    jump(link) {
      window.open(link)
    },
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 400px;
  margin-top: 30px;
  margin-right: 30px;
}
</style>
