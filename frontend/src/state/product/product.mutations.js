export default {
  SET_PRODUCT_TITLE (state, title) {
    state.product.title = title
  },

  SET_PRODUCT_DESCRIPTION (state, description) {
    state.product.description = description
  },

  SET_PRODUCT_PRICE (state, price) {
    state.product.price = price
  },

  SET_IS_VISIBLE_PRODUCT_PATCH (state, isVisibleProductPatch) {
    state.product.meta.isVisibleProductPatch = isVisibleProductPatch
  },

  RESET_PRODUCT (state) {
    state.product.title = ''
    state.product.description = ''
    state.product.price = null
  }
}
