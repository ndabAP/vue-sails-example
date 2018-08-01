import Vue from 'vue'

export default {
  getUser (context) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('/api/user/get')
        .then(({body}) => {
          context.commit('SET_USER', body)
          resolve()
        })
        .catch(error => reject(error))
    })
  },

  signUp (context, {name, password}) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post('/api/register/post', {name, password})
        .then(() => {
          context.commit('RESET_USER')
          resolve()
        })
        .catch(error => reject(error))
    })
  },

  signIn (context, {name, password}) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post('/api/login/post', {
          name,
          password
        })
        .then(({body}) => {
          context.commit('SET_IS_USER_AUTHENTICATED', true)
          resolve(body)
        })
        .catch(error => reject(error))
    })
  }
}
