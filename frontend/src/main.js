import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './../state/index'

Vue.use(Element)
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  if (request.url !== '/api/login/post') {
    let token = window.localStorage.getItem('token');
    request.headers.set('token', token);
  }

  next((response) => {
    if (response.status === 500) {
      router.push({
        name: 'Home'
      });
    }
  });
});

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
});
