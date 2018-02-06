import { mapActions } from 'vuex'

export default {
  created () {
    this.getProducts(this.currentPage)
  },

  data: () => ({
    currentPage: 1
  }),

  watch: {
    currentPage () {
      this.getProducts(this.currentPage)
    }
  },

  computed: {
    products: {
      get () {
        return this.$store.state.Products.products.products
      }
    },

    amountOfProducts: {
      get () {
        return this.$store.state.Products.products.amountOfProducts
      }
    }
  },

  methods: {
    ...mapActions(['getProducts'])
  }
}
