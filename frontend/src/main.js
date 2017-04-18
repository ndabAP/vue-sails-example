import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './../state/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  if (request.url !== '/api/login/post') {
    let token = window.localStorage.getItem('token')
    request.headers.set('token', token)
  }

  next((response) => {
    if ((response.status === 404) || (response.status === 504)) {
      router.push({
        name: 'Home'
      })
    }
  })
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.userOnly)) {
    /**
     * @param name
     * @returns {string}
     */
    const getCookie = (name) => {
      let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
      return a ? a[1] : ''
    }

    if (getCookie('user')) {
      next()
    } else {
      router.push({
        name: 'Login'
      })
    }
  } else {
    next()
  }
})

/* eslint no-new: "error" */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
