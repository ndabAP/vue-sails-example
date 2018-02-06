import Vue from 'vue'

export default {
  checkout (context, basket) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post('/api/user/shop/basket/post', {products: basket.products})
        .then(() => {
          context.commit('RESET_BASKET')
          resolve()
        })
        .catch(error => reject(error))
    })
  }
}
