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
            ${{ product.price }}
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
      },

      basket: {
        get () {
          return this.$store.state.basket
        }
      },

      totalPrice () {
        let totalPrice = 0;
        this.basket.products.forEach((product) => {
          totalPrice += product.price
        });

        return totalPrice
      }
    },

    methods: {
      /**
       * @param product
       */
      pushToBasket(product) {
        this.$store.dispatch('pushToBasket', product)
      },

      checkout() {
        this.$store.dispatch('checkout', this.basket).then(() => {
          this.$message({
            message: 'Congrats, you have bought it.',
            type: 'success'
          })
        })
      }
    }
  }
</script>

<style>
  .el-tabs__content {
    overflow: visible; /* hack */
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
  }

  .price {
    font-size: 13px;
    color: #999;
  }
</style>
