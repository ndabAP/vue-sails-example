import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    isUserAuthenticated: false
  },

  mutations: {
    /**
    * @param state
    * @param products
    */
    SET_PRODUCTS (state, products) {
      state.products = products;
    },

    /**
    * @param state
    * @param isUserAuthenticated
    */
    SET_IS_USER_AUTHENTICATED (state, isUserAuthenticated) {
      state.isUserAuthenticated = isUserAuthenticated;
    }
  },

  actions: {
    /**
    * @param context
    */
    getProducts (context) {
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
    setIsUserAuthenticated (context, isUserAuthenticated) {
      context.commit('SET_IS_USER_AUTHENTICATED', isUserAuthenticated);
    }
  }
});
