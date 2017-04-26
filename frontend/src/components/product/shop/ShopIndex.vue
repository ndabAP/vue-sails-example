<template>
  <div>
    <b-alert variant="info" show>
      {{ $t('alert.first') }}
    </b-alert>
    <div class="row">
      <div class="col-4" v-for="product in products" v-if="product.user.name !== user.name">
        <b-card :key="product.id"
                :header="product.title"
                class="mb-4"
                show-footer>
          <p>{{ product.description }}</p>
          <b-button @click="pushToBasket(product)" variant="outline-success" size="sm">{{ $t('button.first') }}
          </b-button>
          <small slot="footer" class="text-muted">
            <span class="float-left">${{ product.price }}</span>
            <span class="float-right">{{ $t('span.first') }} {{ product.user.name }}</span>
          </small>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('getProducts')
      this.$store.dispatch('getUser')
    },

    i18n: {
      messages: {
        en: {
          'alert.first': 'Please notice that your own products are not visible in this list.',
          'span.first': 'by',
          'button.first': 'Buy'
        },
        de: {
          'alert.first': 'Deine Produkte sind in der folgenden Auflistung nicht enthalten.',
          'span.first': 'von',
          'button.first': 'Einkaufen'
        }
      }
    },

    computed: {
      products () {
        return this.$store.state.products
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
