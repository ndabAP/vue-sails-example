import Vue from 'vue'
import localForage from 'localforage'

localForage.config({name: 'Products'})

export default {
  getProducts (context, page) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('/api/products/get', {params: {page}})
        .then(async ({body}) => {
          context.commit('SET_PRODUCTS', body)
          await localForage.setItem(`/api/products/get?page=${page}`, body)
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
