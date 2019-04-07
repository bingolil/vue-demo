<template>
  <div style="padding-top:60px;">
    <el-steps :active="setp" align-center>
      <el-step title="填写账号信息" icon="el-icon-edit"></el-step>
      <el-step title="账号激活" icon="el-icon-message"></el-step>
      <el-step title="注册成功" icon="el-icon-success"></el-step>
    </el-steps>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: function() {
    return {
      setp: 0,
      user:{
          name:'',
          phoneNumber:'',
          email:'',
          pass:''
      },
      subpass:''
    };
  }
};
</script>

<style scoped>
.box-card {
  margin-top: 30px;
}
</style>
