<template>
    <div>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="num" status="exception"></el-progress>

        <el-steps :active="active" finish-status="success">
            <el-step v-for="v in steps" :key="v" :title="v"></el-step>
        </el-steps>

        <el-button v-show="flag" style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
</template>

<script>

export default {
  data(){
      return {
          active: 0, //步骤初始化值
          flag: true,
          steps: ["步骤1","步骤2","步骤3","步骤4","步骤5"]
      }
  },
  computed: {
      num(){
          return this.active/this.steps.length*100;
      }
  },
//   如果进入++，到尽头，给出弹框
  methods: {
      next(){
          if(this.active++ >= this.steps.length) {
              this.$confirm('任务完成')
          }
        //   this.active ++;
      }
  }
        
  }
</script>
