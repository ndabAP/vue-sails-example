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
    }
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
      Vue.http.post('/api/register/post', {
        email: user.email,
        name: user.name,
        noob: user.noob
      }).then((response) => {
        context.commit('RESET_USER');
      }, (error) => {
        console.log(error);
      });
    }
  }
});
