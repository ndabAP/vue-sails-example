<template>
  <div class="row">
    <div class="col">
      <b-card no-block>
        <b-tabs card ref="tabs">
          <b-tab title="Get products">
            <products-get></products-get>
          </b-tab>
          <b-tab title="Create product">
            <product-create></product-create>
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
    components: {
      ProductCreate,
      ProductsGet
    }}
</script>
