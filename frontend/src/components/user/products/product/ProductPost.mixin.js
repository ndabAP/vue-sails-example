export default {
  created () {
    this.$store.commit('RESET_PRODUCT')
  },

  computed: {
    product: {
      get () {
        return this.$store.state.Product.product
      }
    },

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
    }
  }
}
