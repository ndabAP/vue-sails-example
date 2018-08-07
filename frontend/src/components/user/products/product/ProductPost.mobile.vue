<template>
  <div>
    <mt-field :label="t('productpost.mixin.label.first')" :state="isValidTitleMobile" v-model="title"></mt-field>
    <mt-field :label="t('productpost.mixin.label.third')" :state="isValidDescriptionMobile"
              v-model="description"></mt-field>
    <mt-field :label="t('productpost.mixin.label.second')" :state="isValidPriceMobile" v-model="price"></mt-field>

    <mt-cell title="">
      <mt-button size="small" type="primary" @click="postProduct" plain>{{ t('productpost.mixin.button.first') }}
      </mt-button>
    </mt-cell>
  </div>
</template>

<script>
import ProductPostMixin from './ProductPost.mixin'
import ProductValidation from './ProductValidation.mixin'
import { Toast } from 'mint-ui'

export default {
  mixins: [ProductPostMixin, ProductValidation],

  computed: {
    isValidTitleMobile: {
      get () {
        if (this.isValidTitle) return 'success'

        return 'error'
      }
    },

    isValidDescriptionMobile: {
      get () {
        if (this.isValidDescription) return 'success'

        return 'error'
      }
    },

    isValidPriceMobile: {
      get () {
        if (this.isValidPrice) return 'success'

        return 'error'
      }
    }
  },

  methods: {
    async postProduct () {
      await this.$store.dispatch('postProduct', {
        product: this.product,
        user: this.user
      })

      Toast({
        message: this.t('productpost.mixin.product.created'),
        position: 'bottom',
        duration: 3000
      })

      await this.$store.dispatch('getProductsByUser', this.user)
    }
  }
}
</script>
