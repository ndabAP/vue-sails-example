import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ProductIndex from '@/components/product/ProductIndex'
import ShoppingIndex from '@/components/product/shop/ShopIndex'
import BasketIndex from '@/components/product/shop/BasketIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/products/index',
      name: 'Products',
      component: ProductIndex,
      meta: {
        userOnly: true
      }
    },
    {
      path: '/shop/index',
      name: 'Shop',
      component: ShoppingIndex,
      meta: {
        userOnly: true
      }
    },
    {
      path: '/shop/basket/index',
      name: 'Basket',
      component: BasketIndex,
      meta: {
        userOnly: true
      }
    }
  ]
})
