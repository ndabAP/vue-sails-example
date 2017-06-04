import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * @param name
 * @returns {string}
 */
const getCookie = name => {
  let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
  return a ? a[1] : ''
}

export default new Vuex.Store({
  state: {
    locale: 'en',
    user: {
      id: '',
      name: '',
      password: ''
    },
    product: {
      title: '',
      description: '',
      price: '',
      meta: {
        isEditProductVisible: false
      }
    },
    products: [],
    basket: {
      products: []
    },
    isUserAuthenticated: !!(getCookie('user'))
  },

  mutations: {

    /**
     * @param state
     * @param locale
     * @constructor
     */
    SET_LOCALE (state, locale) {
      state.locale = locale
    },

    /**
     * @param state
     * @param user
     * @constructor
     */
    SET_USER (state, user) {
      state.user = user
    },

    /**
     * @param state
     * @param products
     */
    SET_PRODUCTS (state, products) {
      state.products = products
    },

    /**
     * @param state
     * @param isUserAuthenticated
     */
    SET_IS_USER_AUTHENTICATED (state, isUserAuthenticated) {
      state.isUserAuthenticated = isUserAuthenticated
    },

    /**
     * @param state
     * @param name
     */
    SET_USER_NAME (state, name) {
      state.user.name = name
    },

    /**
     * @param state
     * @param password
     */
    SET_USER_PASSWORD (state, password) {
      state.user.password = password
    },

    /**
     * @param state
     */
    RESET_USER (state) {
      state.user.name = ''
      state.user.password = ''
    },

    /**
     * @param state
     * @param title
     */
    SET_PRODUCT_TITLE (state, title) {
      state.product.title = title
    },

    /**
     * @param state
     * @param description
     */
    SET_PRODUCT_DESCRIPTION (state, description) {
      state.product.description = description
    },

    /**
     * @param state
     * @param price
     */
    SET_PRODUCT_PRICE (state, price) {
      state.product.price = price
    },

    /**
     * @param state
     * @param isEditProductVisible
     * @constructor
     */
    SET_IS_EDIT_PRODUCT_VISIBLE (state, isEditProductVisible) {
      state.product.meta.isEditProductVisible = isEditProductVisible
    },

    /**
     * @param state
     */
    RESET_PRODUCT (state) {
      state.product.title = ''
      state.product.description = ''
      state.product.price = ''
    },

    /**
     * @param state
     * @param product
     * @constructor
     */
    PUSH_TO_BASKET (state, product) {
      state.basket.products.push(product)
    },

    /**
     * @param state
     * @param productId
     * @constructor
     */
    REMOVE_PRODUCT_FROM_BASKET (state, productId) {
      state.basket.products.forEach((product, index) => {
        if (productId === product.id) state.basket.products.splice(index, 1)
      })
    },

    CHECKOUT (state) {
      // Implement
    },

    RESET_BASKET (state) {
      state.basket = {
        id: Math.random().toString(36).substr(2, 10),
        products: []
      }
    }
  },

  actions: {

    /**
     * @param context
     * @param locale
     */
    setLocale (context, locale) {
      context.commit('SET_LOCALE', locale)
    },

    /**
     * @param context
     */
    getUser (context) {
      Vue.http.get('/api/user/get')
        .then(response => {
          context.commit('SET_USER', response.body)
        }, (error) => {
          console.error(error)
        })
    },

    /**
     * @param context
     * @param page
     */
    getProducts (context, page) {
      Vue.http.get('/api/products/get', {
        params: {
          page
        }
      })
        .then(response => {
          context.commit('SET_PRODUCTS', response.body)
        }, (error) => {
          console.error(error)
        })
    },

    /**
     * @param context
     * @param page
     */
    getShopProducts (context, page) {
      Vue.http.get('/api/user/products/get', {
        params: {
          page
        }
      })
        .then(response => {
          context.commit('SET_PRODUCTS', response.body)
        }, (error) => {
          console.error(error)
        })
    },

    /**
     * @param context
     */
    getProductsByUser (context) {
      Vue.http.get('/api/user/products/getByUser')
        .then(response => {
          context.commit('SET_PRODUCTS', response.body)
        }, error => {
          console.error(error)
        })
    },

    /**
     * @param context
     * @param isUserAuthenticated
     */
    setIsUserAuthenticated (context, isUserAuthenticated) {
      context.commit('SET_IS_USER_AUTHENTICATED', isUserAuthenticated)
    },

    /**
     * @param context
     * @param name
     */
    setUserName (context, name) {
      context.commit('SET_USER_NAME', name)
    },

    /**
     * @param context
     * @param password
     */
    setUserPassword (context, password) {
      context.commit('SET_USER_PASSWORD', password)
    },

    /**
     * @param context
     * @param user
     */
    saveUser (context, user) {
      Vue.http.post('/api/register/post', {
        name: user.name,
        password: user.password
      })
        .then(() => {
          context.commit('RESET_USER')
        })
        .catch(error => {
          console.error(error)
        })
    },

    /**
     * @param context
     * @param title
     */
    setProductTitle (context, title) {
      context.commit('SET_PRODUCT_TITLE', title)
    },

    /**
     * @param context
     * @param description
     */
    setProductDescription (context, description) {
      context.commit('SET_PRODUCT_DESCRIPTION', description)
    },

    /**
     * @param context
     * @param price
     */
    setProductPrice (context, price) {
      context.commit('SET_PRODUCT_PRICE', price)
    },

    /**
     * @param context
     * @param isEditProductVisible
     */
    setIsEditProductVisible (context, isEditProductVisible) {
      context.commit('SET_IS_EDIT_PRODUCT_VISIBLE', isEditProductVisible)
    },

    /**
     * @param context
     * @param parameters
     */
    saveProduct (context, parameters) {
      return new Promise((resolve, reject) => {
        Vue.http.post('/api/user/product/post', {
          title: parameters.product.title,
          description: parameters.product.description,
          price: parameters.product.price
        })
          .then(() => {
            context.commit('RESET_PRODUCT')
            resolve()
          }, error => {
            reject(error)
          })
      })
    },

    /**
     * @param context
     */
    resetProduct (context) {
      context.commit('RESET_PRODUCT')
    },

    /**
     * @param context
     * @param productId
     */
    removeProductFromBasket (context, productId) {
      context.commit('REMOVE_PRODUCT_FROM_BASKET', productId)
    },

    /**
     * @param context
     * @param product
     */
    pushToBasket (context, product) {
      context.commit('PUSH_TO_BASKET', product)
    },

    /**
     * @param context
     * @param basket
     * @returns {Promise}
     */
    checkout (context, basket) {
      return new Promise((resolve, reject) => {
        Vue.http.post('/api/user/basket/post', {
          products: basket.products
        }).then(() => {
          context.commit('RESET_BASKET')
          resolve()
        }, error => {
          reject(error)
        })
      })
    },

    /**
     * @param context
     */
    resetBasket (context) {
      context.commit('RESET_BASKET')
    }
  }
})
