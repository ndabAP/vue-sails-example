import Vue from 'vue'

export default {
  getProducts (context, page) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('/api/products/get', {params: {page}})
        .then(({body}) => {
          context.commit('SET_PRODUCTS', body)
          resolve()
        })
        .catch(error => reject(error))
    })
  },

  getShopProducts (context, page) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('/api/user/products/get', {params: {page}})
        .then(({body}) => {
          context.commit('SET_PRODUCTS', body)
          resolve()
        })
        .catch(error => reject(error))
    })
  },

  getProductsByUser (context) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('/api/user/products/getProductsByUser')
        .then(({body}) => {
          context.commit('SET_PRODUCTS', body)
          resolve()
        })
        .catch(error => reject(error))
    })
  }
}
