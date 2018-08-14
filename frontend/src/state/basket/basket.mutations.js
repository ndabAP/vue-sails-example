export default {
  PUSH_TO_BASKET (state, product) {
    state.basket.products.push(product)
  },

  REMOVE_PRODUCT_FROM_BASKET (state, index) {
    state.basket.products.splice(index, 1)
  },

  RESET_BASKET (state) {
    state.basket = {
      id: Math.random().toString(36).substr(2, 10),
      products: []
    }
  },

  SET_BASKET (state, basket) {
    state.basket = basket
  }
}
