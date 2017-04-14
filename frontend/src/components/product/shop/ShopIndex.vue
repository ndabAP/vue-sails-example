<template>
  <div>
    <div class="row">
      <div class="col-4" v-for="product in products" v-if="product.user.name !== user.name">
        <b-card :key="product.id"
                :header="product.title"
                class="mb-4"
                show-footer>
          <p>{{ product.description }}</p>
          <b-button @click="pushToBasket(product)" variant="outline-success" size="sm">Buy</b-button>
          <small slot="footer" class="text-muted">
            <span class="float-left">${{ product.price }}</span>
            <span class="float-right">by {{ product.user.name }}</span>
          </small>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('getProducts')
      this.$store.dispatch('getUser')
    },

    computed: {
      products() {
        return this.$store.state.products
      },

      user() {
        return this.$store.state.user
      }
    },

    methods: {
      /**
       * @param product
       */
      pushToBasket(product) {
        this.$store.dispatch('pushToBasket', product)
      }
    }
  }
</script>

<style>
  .fa-icon {
    width: auto;
    height: 2rem;
  }
</style>
