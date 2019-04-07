<template>
  <el-container>
    <el-main>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>产品列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-table :data="productData" style="width: 100%" v-loading="loading">
        <el-table-column prop="id" label="编号" width="180"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="price" label="价格（RMB/元）"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="props">
            <el-button
              icon="el-icon-goods"
              v-on:click="addCart(props.row)"
              type="primary"
              size="mini"
            >加入购物车</el-button>
            <a class="el-button el-button--mini" v-bind:href="'/#/product/'+props.row.id">
              <i class="el-icon-message"></i>
              <span style="margin-left:5px;">a链接 详情</span>
            </a>
            <el-button
              icon="el-icon-message"
              type="info"
              size="mini"
              v-on:click="goToDetail(props.row)"
            >click 详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import { error } from "util";
export default {
  name: "ProductList",
  created: function() {
    this.getProductList();
  },
  data: function() {
    return {
      productData: [],
      loading: true
    };
  },
  methods: {
    getProductList: function() {
      // 获取产品数据
      this.loading = true;
      this.axios.get("http://localhost:3000/product").then(
        res => {
          // this.productData = res.data;
          // this.loading=false;
          setTimeout(() => {
            // 模拟loading
            this.productData = res.data;
            this.loading = false;
          }, 1000);
        },
        () => {
          this.loading = false,
          this.$notify.error({
            title: "错误",
            message: "获取产品失败，请刷新页面"
          });
        }
      );
    },
    addCart: function(product) {
      // 加入购物车
      // localStorage 中判断是否登录
      this.axios.get("http://localhost:3000/cart").then(res => {
        var id = 0;
        if (res.data.length === 0) {
          id = 3000000;
        } else {
          id = res.data[res.data.length - 1].id + 1;
        }
        var obj = {
          id: id,
          userId: 2,
          cartTime: new Date().toISOString(),
          productId: product.id
        };
        this.axios.post("http://localhost:3000/cart", obj).then(
          res => {
            this.$notify({
              title: "成功",
              message: `产品编号为${res.data.productId}添加成功`,
              type: "success"
            });
          },
          err => {
            throw (error(err),
            this.$notify.error({
              title: "错误",
              message: "产品未添加到购物车中，请重新尝试"
            }));
          }
        );
      });
    },
    goToDetail: function(item) {
      // this.$router.push({
      //   name: "prductDetail",
      //   params: { productDetailId: item.id }
      // });
      this.$router.push({ path: `/product/${item.id}` });
    }
  }
};
</script>

 <style scoped>
</style>
 