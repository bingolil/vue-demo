<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="20">
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
              <router-link to="/Cart">购物车</router-link>
            </el-menu-item>
            <el-menu-item>
              <router-link to="/console">个人中心</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4">
          <div style="text-align:right;line-height:60px;">
            <router-link to="/login" class="el-button el-button--medium is-round">登录</router-link>
            <router-link to="/register" class="el-button el-button--medium is-round">注册</router-link>
          </div>
        </el-col>
      </el-row>
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

ul.el-menu{
  border-bottom: 0px;
}

header li.el-menu-item {
  padding: 0;
}

header li.el-menu-item a {
  display: block;
  padding: 0 20px;
  text-decoration: none;
}

ul.el-menu a.router-link-active {
  background: #007acc;
}
</style>
