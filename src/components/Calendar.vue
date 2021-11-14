<template>
  <div class="calendar-container">
    <el-calendar v-model="value"> </el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    }
  },
}
</script>

<style lang="scss" scoped>
.calendar-container {
  border: 1px solid #eee;
  width: 500px;
  margin-left: 50px;
}
</style>
