<template>
  <div>
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div class="card mb-2">
          <div class="card-body">
            <div v-for="(product, index) in basket.products" :key="index">
              <p><b>{{ product.title }}</b> <span class="float-right"><small class="text-muted">${{ product.price
                }}</small></span></p>
              <p>{{ product.description }}</p>
              <b-button size="sm" variant="outline-danger" @click="removeProduct(index)">{{ t('basketindex.mixin.button.first') }}
              </b-button>
              <hr>
            </div>
            <p>
              <span class="float-left">{{ t('basketindex.mixin.span.first') }}</span>
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
          @click="checkout">{{ t('basketindex.mixin.button.second') }}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import BasketIndexMixin from './BasketIndex.mixin'

export default {
  mixins: [BasketIndexMixin]
}
</script>
