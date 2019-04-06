<template>
  <el-container>
    <el-main>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/#/product">产品列表</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>产品详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="box-card" style="margin-top:20px;">
        <div slot="header" class="clearfix">
          <span>产品编号：{{$route.params.productDetailId}}</span>
          <a
            style="float: right;"
            class="el-button el-button--mini"
            type="primary"
            href="javascript:history.go(-1)"
          >
            <i class="el-icon-back"></i>
            <span>返回</span>
          </a>
          <!-- <p>url参数对象，监听路由实时更新：{{paramsObj}}</p> -->
          <p>props中存param数据：产品id{{productDetailId}}</p>
          <p>产品信息：{{paramsObj}}</p>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "ProductDetail",
  props: ["productDetailId"],
  data: function() {
    return {
      paramsObj: null
    };
  },
  created: function() {
    // this.paramsObj = this.$route.params;
    this.getProductDetialById(this.productDetailId)
  },
  watch: {
    // $route() {
    //   this.paramsObj = this.$route.params;
    // }
  },
  methods:{
    getProductDetialById(id){
      this.axios.get('http://localhost:3000/product',{params:{id:id}}).then((res)=>{
        // console.log(res);
        this.paramsObj=res.data[0];
      })
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.paramsObj = to.params;
    next(true);
  }
};
</script>

<style scoped>
</style>
