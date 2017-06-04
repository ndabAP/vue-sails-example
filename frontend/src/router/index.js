import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => {
        require(['./../components/Home.vue'], resolve)
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: resolve => {
        require(['./../components/Register.vue'], resolve)
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => {
        require(['./../components/Login.vue'], resolve)
      }
    },
    {
      path: '/user/products/index',
      name: 'Products',
      component: resolve => {
        require(['../components/user/products/product/ProductIndex.vue'], resolve)
      },
      meta: {
        userOnly: true
      }
    },
    {
      path: '/user/shop/index',
      name: 'Shop',
      component: resolve => {
        require(['../components/user/shop/ShopIndex.vue'], resolve)
      },
      meta: {
        userOnly: true
      }
    },
    {
      path: '/user/shop/basket/index',
      name: 'Basket',
      component: resolve => {
        require(['../components/user/shop/BasketIndex.vue'], resolve)
      },
      meta: {
        userOnly: true
      }
    },
    {
      path: '*',
      component: resolve => {
        require(['./../components/Home.vue'], resolve)
      }
    }
  ]
})
