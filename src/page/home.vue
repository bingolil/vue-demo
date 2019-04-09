<template>
  <el-container>
    <el-main>
      <h4>home页</h4>
      <img :src="imgUrl" alt>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      imgUrl: require("@/assets/images/login-logo.png")
    };
  }
};
</script>

<style>
</style>
