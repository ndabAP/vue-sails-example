export default {
  props: ['id'],

  computed: {
    user: {
      get () {
        return this.$store.state.User.user
      }
    },

    title: {
      get () {
        return this.$store.state.Product.product.title
      },

      set (title) {
        this.$store.commit('SET_PRODUCT_TITLE', title)
      }
    },

    description: {
      get () {
        return this.$store.state.Product.product.description
      },

      set (description) {
        this.$store.commit('SET_PRODUCT_DESCRIPTION', description)
      }
    },

    price: {
      get () {
        return this.$store.state.Product.product.price
      },

      set (price) {
        this.$store.commit('SET_PRODUCT_PRICE', price)
      }
    },

    isPatchProductVisible: {
      get () {
        return this.$store.state.Product.product.meta.isPatchProductVisible
      },

      set (isPatchProductVisible) {
        this.$store.commit('SET_IS_PATCH_PRODUCT_VISIBLE', isPatchProductVisible)
      }
    }
  }
}
