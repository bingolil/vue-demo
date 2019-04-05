<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="defaultOpen">
        <el-menu-item>
          <router-link to="/console" exact>
            <i class="el-icon-menu"></i>个人总览
          </router-link>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>个人中心
          </template>
          <el-menu-item index="1-1">
            <router-link to="/console/manage-ID">个人身份认证</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/console/order-list">订单列表</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <router-link to="/">首页</router-link>
        <span style="padding-left:80px;">王小虎</span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "ConsoleIndex",
  data: function() {
    return {
      defaultOpen: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.defaultOpen = [];
    });
  }
};
</script>
<style scoped>
.el-menu .el-menu-item {
  min-width: 160px;
  padding: 0 !important;
}

.el-menu .el-menu-item a {
  display: block;
  padding: 0 20px !important;
  text-decoration: none;
  color: #303133;
}

.el-menu .el-menu-item a.router-link-active {
  background: #303133;
  color: white;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  box-shadow: 0 0 2.25rem #b3c0d1;
}

.el-aside {
  color: #333;
}
</style>
