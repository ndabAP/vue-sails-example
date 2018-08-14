import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user.module'
import product from './product/product.module'
import products from './products/products.module'
import basket from './basket/basket.module'

Vue.use(Vuex)

const getCookie = name => {
  const cookies = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
  return cookies ? cookies[1] : ''
}

export default new Vuex.Store({
  plugins: [store => {
    store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'RESET_BASKET':
        case 'PUSH_TO_BASKET':
        case 'REMOVE_PRODUCT_FROM_BASKET':
          sessionStorage.setItem('basket', JSON.stringify(state.Basket.basket))
      }
    })
  }],

  modules: {
    User: user,
    Product: product,
    Products: products,
    Basket: basket
  },

  state: {
    locale: 'en',
    isUserAuthenticated: !!(getCookie('user')),
    isVisibleHelp: false
  },

  mutations: {
    SET_IS_USER_AUTHENTICATED (state, isUserAuthenticated) {
      state.isUserAuthenticated = isUserAuthenticated
    },

    SET_LOCALE (state, locale) {
      state.locale = locale
    },

    SET_IS_VISIBLE_HELP (state, isVisibleHelp) {
      state.isVisibleHelp = isVisibleHelp
    }
  }
})
