<template>
  <div class="row justify-content-md-center">
    <div class="col-6">
      <div class="card">
        <div class="card-block">
      <div v-for="product in basket.products">
        <p>{{ product.title }} <span class="float-right">${{ product.price }}</span></p>
      </div>
      <hr>
      <p><span class="float-left">Total</span> <span class="float-right"><b>${{ totalPrice }}</b></span></p>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
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
      checkout() {
        this.$store.dispatch('checkout', this.basket).then(() => {
        })
      }
    }
  }
</script>

<style>
</style>
