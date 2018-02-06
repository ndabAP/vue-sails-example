<template>
  <div>
    <mt-field :label="t('productpost.mixin.label.first')" :state="isTitleValidMobile" v-model="title"></mt-field>
    <mt-field :label="t('productpost.mixin.label.third')" :state="isDescriptionValidMobile" v-model="description"></mt-field>
    <mt-field :label="t('productpost.mixin.label.second')" :state="isPriceValidMobile" v-model="price"></mt-field>

    <mt-cell title="">
      <mt-button size="small" type="primary" @click="postProduct" plain>{{ t('productpost.mixin.button.first') }}</mt-button>
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
      isTitleValidMobile: {
        get () {
          if (this.isTitleValid) return 'success'

          return 'error'
        }
      },

      isDescriptionValidMobile: {
        get () {
          if (this.isDescriptionValid) return 'success'

          return 'error'
        }
      },

      isPriceValidMobile: {
        get () {
          if (this.isPriceValid) return 'success'

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
          message: this.t('product.created'),
          position: 'bottom',
          duration: 3000
        })

        this.$store.dispatch('getProductsByUser', this.user)
      }
    }
  }
</script>
