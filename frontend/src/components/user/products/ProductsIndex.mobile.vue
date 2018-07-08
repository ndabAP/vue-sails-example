<template>
  <div>
    <mt-navbar v-model="currentTab">
      <mt-tab-item id="products-get">{{ t('productindex.mixin.tab.first') }}</mt-tab-item>
      <mt-tab-item id="product-post">{{ t('productindex.mixin.tab.second') }}</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="currentTab">
      <mt-tab-container-item id="products-get">
        <products-get></products-get>
      </mt-tab-container-item>
      <mt-tab-container-item id="product-post">
        <product-post></product-post>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  components: {
    ProductPost: () => import('./product/ProductPost.mobile'),
    ProductsGet: () => import('./ProductsGet.mobile')
  },

  data: () => ({
    currentTab: 'products-get'
  })
}
</script>
