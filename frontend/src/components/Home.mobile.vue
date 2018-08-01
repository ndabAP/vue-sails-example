<template>
  <div>
    <mt-swipe :show-indicators="false">
      <mt-swipe-item class="slide1">
        {{ t('home.mixin.p.first') }}
      </mt-swipe-item>
      <mt-swipe-item class="slide2">
        {{ t('home.mixin.p.second') }}
      </mt-swipe-item>
      <mt-swipe-item class="slide3">
        {{ t('home.mixin.p.third') }}
      </mt-swipe-item>
    </mt-swipe>

    <mt-cell v-for="product in products" :key="product.id" :title="product.title">
      <mt-button size="small" @click="makeProductVisible(product)">{{ t('home.mixin.button.first') }}</mt-button>
    </mt-cell>

    <mt-cell title="">
      <mt-button
        :disabled="isDisabledNextButton"
        size="small"
        type="primary"
        @click="currentPage++">
        {{ t('home.mixin.button.second') }}
      </mt-button>
    </mt-cell>
  </div>
</template>

<script>
import HomeMixin from './Home.mixin'
import { MessageBox } from 'mint-ui'

export default {
  mixins: [HomeMixin],

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
        confirmButtonText: 'Okay'
      })
    }
  }
}
</script>

<style>
  .mint-swipe {
    height: 100px;
    text-align: center;
  }

  .mint-swipe-item {
    color: #000;
    line-height: 100px;
  }
</style>
