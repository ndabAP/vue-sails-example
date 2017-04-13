<template>
  <div id="app">
    <el-menu theme="dark" mode="horizontal" :router="true">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item v-if="!isUserAuthenticated" index="/register">Register</el-menu-item>
      <el-menu-item v-if="!isUserAuthenticated" index="/login">Login</el-menu-item>
      <el-menu-item v-if="isUserAuthenticated" index="/products/index">Products</el-menu-item>
      <el-menu-item v-if="isUserAuthenticated" index="/products/shopping/index">Shopping</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      isUserAuthenticated () {
        return this.$store.state.isUserAuthenticated
      }
    }
  }
</script>

<style>
  body {
    font-family: 'Arial';
    margin: 0px;
  }
</style>
