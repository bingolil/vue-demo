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
          <el-row>
            <el-col :span="8" :offset="8">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="邮箱">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                 <el-form-item label="密码">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                 <el-form-item label="邮ll箱">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
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
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  }
};
</script>

<style scoped>
.box-card {
  margin-top: 30px;
}
</style>
