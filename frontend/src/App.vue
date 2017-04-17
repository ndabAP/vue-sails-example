<template>
  <div id="app">
    <b-navbar toggleable type="inverse" variant="primary">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="#">
        <span>Product paradise</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item :to="{ name: 'Home'}">Home</b-nav-item>
          <b-nav-item v-if="!isUserAuthenticated" :to="{ name: 'Register'}">Register</b-nav-item>
          <b-nav-item v-if="!isUserAuthenticated" :to="{ name: 'Login'}">Login</b-nav-item>
          <b-nav-item v-if="isUserAuthenticated" :to="{ name: 'Shop'}">Shop</b-nav-item>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item :disabled="!basket.products.length" v-if="isUserAuthenticated" :to="{ name: 'Basket'}">
            Basket ({{ basket.products.length }})
          </b-nav-item>
          <b-nav-item v-if="isUserAuthenticated" :to="{ name: 'Products'}">Manage products</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view class="mt-4"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      isUserAuthenticated () {
        return this.$store.state.isUserAuthenticated
      },

      basket: {
        get () {
          return this.$store.state.basket
        }
      }
    }
  }
</script>
