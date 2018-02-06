<template>
<div>
  <mt-cell v-for="(product, index) in basket.products" :key="product.id" :title="product.title">
    <mt-button size="small" @click="removeProduct(index)" type="danger">{{ t('basketindex.mixin.button.first') }}</mt-button>
  </mt-cell>
  <mt-cell :title="t('basketindex.mixin.span.first')">${{ totalPrice }}</mt-cell>
  <mt-cell>
    <mt-button :disabled="basket.products.length === 0" size="small" type="primary" @click="checkout" plain>{{ t('basketindex.mixin.button.second') }}</mt-button>
  </mt-cell>
</div>
</template>

<script>
import BasketIndexMixin from './BasketIndex.mixin'

export default {
  mixins: [BasketIndexMixin]
}
</script>
