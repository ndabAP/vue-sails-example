import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './../state/index'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Element)
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  if (request.url !== '/api/login/post') {
    let token = window.localStorage.getItem('token')
    request.headers.set('token', token)
  }

  next((response) => {
    if (response.status === 404) {
      router.push({
        name: 'Home'
      })
    }
  })
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
