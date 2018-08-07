<template>
  <div>
    <mt-cell v-for="product in products" :key="product.id" :title="product.title">
      <mt-button size="small" @click="makeProductVisible(product)">{{ t('shopindex.mixin.button.second')}}</mt-button>
    </mt-cell>

    <mt-cell title="">
      <mt-button :disabled="isDisabledNextButton" size="small" type="primary" @click="currentPage++">{{
        t('shopindex.mixin.button.third')}}
      </mt-button>
    </mt-cell>
  </div>
</template>

<script>
import ShopIndexMixin from './ShopIndex.mixin'
import { Toast, MessageBox } from 'mint-ui'

export default {
  mixins: [ShopIndexMixin],

  computed: {
    isDisabledNextButton () {
      return this.currentPage === Math.ceil(this.amountOfProducts / 6)
    }
  },

  methods: {
    makeProductVisible (product) {
      MessageBox({
        title: product.title,
        message: product.description,
        showCancelButton: true,
        cancelButtonText: this.t('shopindex.mixin.cancelButtonText'),
        confirmButtonText: `${this.t('shopindex.mixin.confirmButtonText')} $${product.price}`
      }, action => {
        if (action === 'confirm') {
          this.pushToBasket(product)

          Toast({
            message: this.t('shopindex.mixin.product.added'),
            position: 'bottom',
            duration: 3000
          })
        }
      })
    }
  }
}
</script>
