<template>
  <el-container>
    <el-main>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>产品列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-table :data="productData" style="width: 100%">
        <el-table-column prop="id" label="编号" width="180"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="price" label="价格（RMB/元）"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="props">
            <el-button icon="el-icon-edit" type="primary" size="mini">编辑</el-button>
            <el-button icon="el-icon-delete" type="danger" size="mini">删除</el-button>
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
export default {
  name: "ProductList",
  created: function() {
    this.getProductList();
  },
  data: function() {
    return {
      productData: []
    };
  },
  methods: {
    getProductList: function() {
      this.axios.get("http://localhost:3000/product").then(res => {
        this.productData = res.data;
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
 