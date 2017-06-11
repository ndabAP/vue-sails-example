<template>
  <div>
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div class="card mb-2">
          <div class="card-block">
            <div v-for="(product, index) in basket.products">
              <p><b>{{ product.title }}</b> <span class="float-right"><small class="text-muted">${{ product.price
                }}</small></span></p>
              <p>{{ product.description }}</p>
              <b-button size="sm" variant="outline-danger" @click="removeProduct(index)">{{ $t('button.first') }}
              </b-button>
              <hr>
            </div>
            <p>
              <span class="float-left">{{ $t('span.first') }}</span>
                <span class="float-right">
                  <b>${{ totalPrice }}</b>
                </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-6">
        <b-button
          :disabled="basket.products.length === 0"
          size="sm"
          variant="outline-success float-right"
          @click="checkout">{{ $t('button.second') }}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    i18n: {
      messages: {
        en: {
          'button.first': 'Remove',
          'span.first': 'Total',
          'button.second': 'Checkout'
        },
        de: {
          'button.first': 'Entfernen',
          'span.first': 'Summe',
          'button.second': 'Kaufen'
        }
      }
    },

    computed: {
      basket: {
        get () {
          return this.$store.state.basket
        }
      },

      totalPrice () {
        let totalPrice = 0
        this.basket.products.forEach((product) => {
          totalPrice += product.price
        })

        return Math.round(totalPrice * 100) / 100
      }
    },

    methods: {
      checkout () {
        this.$store.dispatch('checkout', this.basket)
          .then(() => {
          })
      },

      /**
       * @param index
       */
      removeProduct (index) {
        this.$store.dispatch('removeProductFromBasket', index)
      }
    }
  }
</script>
