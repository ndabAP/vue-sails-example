<template>
  <div class="row">
    <div class="col">
      <b-card no-body>
        <b-tabs card ref="tabs">
          <b-tab :title="t('productindex.mixin.tab.first')">
            <products-get></products-get>
          </b-tab>
          <b-tab :title="t('productindex.mixin.tab.second')">
            <product-post></product-post>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ProductPost: () => import('./product/ProductPost.desktop'),
    ProductsGet: () => import('./ProductsGet.desktop')
  }
}
</script>
