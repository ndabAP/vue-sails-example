import { Vue, store, LocaleMixin } from './bootstrap.mixin'
import App from './App.desktop'
import router from './router/router.desktop'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.http.interceptors.push((request, next) => {
  if (request.url !== '/api/login/post') {
    const xToken = window.localStorage.getItem('x-token')
    request.headers.set('X-Token', xToken)
  }

  next(response => {
    if ((response.status === 404) || (response.status === 504)) {
      router.push({name: 'Home'})
    }

    if (response.status === 403) router.push({name: 'Login'})
  })
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.userOnly)) {
    const getCookie = name => {
      const cookies = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
      return cookies ? cookies[1] : ''
    }

    if (getCookie('user')) {
      next()
    } else router.push({name: 'Login'})
  } else next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  mixins: [LocaleMixin],
  components: {
    App
  }
})
