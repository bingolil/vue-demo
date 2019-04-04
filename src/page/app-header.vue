<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item>
          <router-link to="/" exact>首页</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link to="/product">产品列表</router-link>
        </el-menu-item>
         <el-menu-item>
          <router-link to="/console">个人中心</router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: "AppHeader",
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
header {
  background-color: rgb(84, 92, 100);
}

header li.el-menu-item {
  padding: 0;
}

header li.el-menu-item a {
  display: block;
  padding: 0 20px;
  text-decoration:none;
}

a.router-link-active{
  background: #007acc;
}
</style>
