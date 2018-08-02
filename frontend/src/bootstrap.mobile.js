import { Vue, store, LocaleMixin } from './bootstrap.mixin'
import App from './App.mobile'
import router from './router/router.mobile'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.http.interceptors.push((request, next) => {
  if (request.url !== '/api/login/post') {
    const xToken = window.localStorage.getItem('x-token')
    request.headers.set('X-Token', xToken)
  }

  next(response => {
    if ((response.status === 404) || (response.status === 504)) {
      router.push({name: 'Home'})
    }
  })
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.userOnly)) {
    const getCookie = name => {
      let cookies = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
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
