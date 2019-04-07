<template>
  <div id="login">
    <div class="login-wrap">
      <div class="login-logo"></div>
      <div class="login-item">
        <input id="username" v-focus type="text" autocomplete="off" placeholder="邮箱">
      </div>
      <div class="login-item">
        <input id="password" type="password" autocomplete="off" placeholder="登录密码">
      </div>
      <div class="login-item">
        <button class="sub">登录</button>
      </div>
      <div class="register">
        <el-row>
          <el-col :span="8">
            <router-link to="/register">立即注册</router-link>
          </el-col>
          <el-col :span="8" style="text-align:center">
            <router-link to="/">返回首页</router-link>
          </el-col>
          <el-col :span="8" style="text-align:right">
            <router-link to="/register">找回密码</router-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {};
  },
  directives:{
    focus:{
      inserted:function(el){
        el.focus();
      }
    }
  }
};
</script>

<style scoped>
div#login {
  height: 100%;
  background: #fff url("http://localhost:8080/img/loginBg.png") 50% 50%
    no-repeat;
  background-size: cover;
  min-height: 550px;
}

div.login-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 430px;
  height: 550px;
  margin: -300px 0 0 -215px;
  border: 1px solid #fff;
  border-radius: 20px;
  overflow: hidden;
}

div.login-logo {
  width: 104px;
  height: 104px;
  margin: 50px auto 80px;
  background: url("http://localhost:8080/img/login-logo.png") 0 0 no-repeat;
}

div.login-item {
  position: relative;
  width: 360px;
  margin: 0 auto;
  padding-bottom: 30px;
}

div.login-item input {
  width: 288px;
  height: 48px;
  padding-left: 70px;
  border: 1px solid #fff;
  border-radius: 25px;
  font-size: 18px;
  color: #fff;
  background-color: transparent;
  outline: none;
}

#username {
  background: url("http://localhost:8080/img/email.png") 20px 14px no-repeat;
}

#password {
  background: url("http://localhost:8080/img/password.png") 20px 14px no-repeat;
}

button.sub {
  width: 360px;
  height: 50px;
  border: 0;
  border-radius: 25px;
  font-size: 18px;
  color: #1f6f4a;
  outline: none;
  cursor: pointer;
  background-color: #fff;
}

div.register {
  width: 360px;
  margin: 20px auto 0;
  font-size: 14px;
  overflow: hidden;
}

div.register a {
  color: white;
  text-decoration: none;
}

div.register a:hover {
  text-decoration: underline;
}

#login ::-webkit-input-placeholder {
  font-size: 18px;
  line-height: 1.4;
  color: #fff;
  line-height: 48px;
}
#login :-moz-placeholder {
  font-size: 18px;
  line-height: 1.4;
  color: #fff;
  line-height: 48px;
}
#login ::-moz-placeholder {
  font-size: 18px;
  line-height: 1.4;
  color: #fff;
  line-height: 48px;
}
#login :-ms-input-placeholder {
  font-size: 18px;
  line-height: 1.4;
  color: #fff;
  line-height: 48px;
}

@media screen and (max-width: 500px) {
  * {
    box-sizing: border-box;
  }
  div.login-wrap {
    position: static;
    width: auto;
    height: auto;
    margin: 0 30px;
    border: 0;
    border-radius: 0;
  }
  div.login-logo {
    margin: 50px auto;
  }
  div.login-item {
    width: auto;
  }
  div.login-item input,
  div.login-item button,
  div.register {
    width: 100%;
  }
}
</style>

