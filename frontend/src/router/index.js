import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ProductIndex from '@/components/product/ProductIndex'
import ShoppingIndex from '@/components/product/shopping/ShoppingIndex'

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
      path: '/products/index',
      name: 'Products/Index',
      component: ProductIndex
    },
    {
      path: '/products/shopping/index',
      name: 'Products/Shopping/Index',
      component: ShoppingIndex
    }
  ]
})
