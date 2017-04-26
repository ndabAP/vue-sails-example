<template>
  <div class="row">
    <div class="col">
      <b-card no-block>
        <b-tabs card ref="tabs">
          <b-tab :title="$t('tab.first')">
            <products-get keep-alive></products-get>
          </b-tab>
          <b-tab :title="$t('tab.second')">
            <product-create keep-alive></product-create>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
  import ProductCreate from './ProductCreate'
  import ProductsGet from './ProductsGet'

  export default {
    i18n: {
      messages: {
        en: {
          'tab.first': 'Get products',
          'tab.second': 'Create products'
        },
        de: {
          'tab.first': 'Hole Produkte',
          'tab.second': 'Erstelle Produkte'
        }
      }
    },

    components: {
      ProductCreate,
      ProductsGet
    }
  }
</script>
