<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <br/>
      <el-tabs v-model="defaultTab">
        <el-tab-pane label="Get products" name="get">
          <products-get></products-get>
        </el-tab-pane>
        <el-tab-pane label="Create product" name="create">
          <product-create></product-create>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
  import ProductCreate from './ProductCreate'
  import ProductsGet from './ProductsGet'

  export default {
    components: {
      ProductCreate,
      ProductsGet
    },

    data() {
      return {
        defaultTab: 'create'
      }
    }
  }
</script>
