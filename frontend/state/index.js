import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      email: '',
      name: '',
      noob: false
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
    isUserAuthenticated: false
  },

  mutations: {

    /**
     * @param state
     * @param products
     */
    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    /**
     * @param state
     * @param isUserAuthenticated
     */
    SET_IS_USER_AUTHENTICATED(state, isUserAuthenticated) {
      state.isUserAuthenticated = isUserAuthenticated;
    },

    /**
     * @param state
     * @param email
     */
    SET_USER_EMAIL(state, email) {
      state.user.email = email;
    },

    /**
     * @param state
     * @param name
     */
    SET_USER_NAME(state, name) {
      state.user.name = name;
    },

    /**
     * @param state
     * @param noob
     */
    SET_USER_NOOB(state, noob) {
      state.user.noob = noob;
    },

    /**
     * @param state
     */
    RESET_USER(state) {
      state.user.email = '';
      state.user.name = '';
      state.user.noob = '';
    },

    /**
     * @param state
     * @param title
     */
    SET_PRODUCT_TITLE(state, title) {
      state.product.title = title;
    },

    /**
     * @param state
     * @param description
     */
    SET_PRODUCT_DESCRIPTION(state, description) {
      state.product.description = description;
    },

    /**
     * @param state
     * @param price
     */
    SET_PRODUCT_PRICE(state, price) {
      state.product.price = price;
    },

    /**
     * @param state
     * @param isEditProductVisible
     * @constructor
     */
    SET_IS_EDIT_PRODUCT_VISIBLE(state, isEditProductVisible) {
      state.product.meta.isEditProductVisible = isEditProductVisible;
    },

    /**
     * @param state
     */
    RESET_PRODUCT(state) {
      state.product.title = '';
      state.product.description = '';
      state.product.price = '';
    },
  },

  actions: {

    /**
     * @param context
     */
    getProducts(context) {
      Vue.http.get('/api/products/get').then((response) => {
        context.commit('SET_PRODUCTS', response.body);
      }, (error) => {
        console.log(error);
      });
    },

    /**
     * @param context
     * @param isUserAuthenticated
     */
    setIsUserAuthenticated(context, isUserAuthenticated) {
      context.commit('SET_IS_USER_AUTHENTICATED', isUserAuthenticated);
    },

    /**
     * @param context
     * @param email
     */
    setUserEmail(context, email) {
      context.commit('SET_USER_EMAIL', email);
    },

    /**
     * @param context
     * @param name
     */
    setUserName(context, name) {
      context.commit('SET_USER_NAME', name);
    },

    /**
     * @param context
     * @param noob
     */
    setUserNoob(context, noob) {
      context.commit('SET_USER_NOOB', noob);
    },

    /**
     * @param context
     * @param user
     */
    saveUser(context, user) {
      return new Promise((resolve, reject) => {
        Vue.http.post('/api/register/post', {
          email: user.email,
          name: user.name,
          noob: user.noob
        }).then((response) => {
          context.commit('RESET_USER');
          resolve();
        }, (error) => {
          reject();
        });
      });
    },

    /**
     * @param context
     * @param title
     */
    setProductTitle(context, title) {
      context.commit('SET_PRODUCT_TITLE', title);
    },

    /**
     * @param context
     * @param description
     */
    setProductDescription(context, description) {
      context.commit('SET_PRODUCT_DESCRIPTION', description);
    },

    /**
     * @param context
     * @param price
     */
    setProductPrice(context, price) {
      context.commit('SET_PRODUCT_PRICE', price);
    },

    /**
     * @param context
     * @param isEditProductVisible
     */
    setIsEditProductVisible(context, isEditProductVisible) {
      context.commit('SET_IS_EDIT_PRODUCT_VISIBLE', isEditProductVisible);
    },

    /**
     * @param context
     * @param product
     */
    saveProduct(context, product) {
      return new Promise((resolve, reject) => {
        Vue.http.post('/api/product/post', {
          title: product.title,
          description: product.description,
          price: product.price
        }).then(() => {
          context.commit('RESET_PRODUCT');
          resolve();
        }, () => {
          reject();
        });
      });
    },

    /**
     * @param context
     */
    resetProduct(context) {
      context.commit('RESET_PRODUCT');
    },

    patchProduct(context, product) {

    }
  }
});
