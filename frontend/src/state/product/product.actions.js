import Vue from 'vue'

export default {
  getProduct ({}, id) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('/api/user/products/product/get', {params: {id}})
        .then(({body}) => resolve(body))
        .catch(error => reject(error))
    })
  },

  deleteProduct ({}, id) {
    return new Promise((resolve, reject) => {
      Vue.http
        .delete('/api/user/products/product/delete', {params: {id}})
        .then(() => resolve())
        .catch(error => reject(error))
    })
  },

  postProduct (context, {product: {title, description, price}}) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post('/api/user/products/product/post', {title, description, price})
        .then(() => {
          context.commit('RESET_PRODUCT')
          resolve()
        })
        .catch(error => reject(error))
    })
  },

  patchProduct ({}, {id, title, description, price}) {
    return new Promise((resolve, reject) => {
      Vue.http
        .patch('/api/user/products/product/patch', {
          id,
          title,
          price,
          description
        })
        .then(() => resolve())
        .catch(error => reject(error))
    })
  }
}
