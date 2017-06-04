<template>
  <div>
    <b-alert variant="info" show>
      {{ $t('alert.first') }}
    </b-alert>
    <div class="row">
      <div class="col-4" v-for="product in products">
        <b-card :key="product.id"
                :header="product.title"
                class="mb-4"
                show-footer>
          <p>{{ product.description }}</p>
          <b-button v-bind:disabled="product.user.name === user.name"
                    @click="pushToBasket(product)"
                    variant="outline-success"
                    size="sm">{{ $t('button.first') }}
          </b-button>
          <small slot="footer" class="text-muted">
            <span class="float-left">${{ product.price }}</span>
            <span class="float-right">{{ $t('span.first') }} {{ product.user.name }}</span>
          </small>
        </b-card>
      </div>
    </div>

    <b-pagination size="sm" :total-rows="amountOfProducts" :per-page="6" v-model="currentPage"></b-pagination>
  </div>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('getShopProducts', this.currentPage)
      this.$store.dispatch('getUser')
    },

    data () {
      return {
        currentPage: 1
      }
    },

    i18n: {
      messages: {
        en: {
          'alert.first': 'Please notice that you cannot buy your own products.',
          'span.first': 'by',
          'button.first': 'Buy'
        },
        de: {
          'alert.first': 'Bitte nehme zur Kenntnis, dass deine eigenen Produkte nicht kaufbar sind.',
          'span.first': 'von',
          'button.first': 'Einkaufen'
        }
      }
    },

    watch: {
      currentPage () {
        this.$store.dispatch('getShopProducts', this.currentPage)
      }
    },

    computed: {
      products () {
        return this.$store.state.products.products
      },

      amountOfProducts () {
        return this.$store.state.products.amountOfProducts
      },

      user () {
        return this.$store.state.user
      }
    },

    methods: {
      /**
       * @param product
       */
      pushToBasket (product) {
        this.$store.dispatch('pushToBasket', product)
      }
    }
  }
</script>
