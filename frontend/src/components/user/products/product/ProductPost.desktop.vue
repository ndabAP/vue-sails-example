<template>
  <div>
    <div class="row">
      <div class="col-8">
        <b-form-fieldset
          :description="t('productpost.mixin.description.first')"
          :label="t('productpost.mixin.label.first')">
          <b-form-input v-model="title" :state="isValidTitle"></b-form-input>
          <b-form-feedback v-for="(name, index) in errors.title" :key="index">
            {{ name }}
          </b-form-feedback>
        </b-form-fieldset>
      </div>

      <div class="col-4">
        <b-form-fieldset
          :description="t('productpost.mixin.description.second')"
          :label="t('productpost.mixin.label.second')">
          <b-form-input v-model="price" :state="isValidPrice"></b-form-input>
          <b-form-feedback v-for="(name, index) in errors.price" :key="index">
            {{ name }}
          </b-form-feedback>
        </b-form-fieldset>
      </div>
    </div>

    <b-form-fieldset
      :description="t('productpost.mixin.description.third')"
      :label="t('productpost.mixin.label.third')">
      <b-form-input textarea v-model="description" :state="isValidDescription"></b-form-input>
      <b-form-feedback v-for="(name, index) in errors.description" :key="index">
        {{ name }}
      </b-form-feedback>
    </b-form-fieldset>

    <b-button size="sm" variant="outline-success" @click="postProduct">{{ t('productpost.mixin.button.first') }}
    </b-button>
  </div>
</template>

<script>
import ProductPostMixin from './ProductPost.mixin'
import ProductValidation from './ProductValidation.mixin'

export default {
  mixins: [ProductPostMixin, ProductValidation],

  methods: {
    async postProduct () {
      await this.$store.dispatch('postProduct', {
        product: this.product,
        user: this.user
      })

      await this.$store.dispatch('getProductsByUser', this.user)
    }
  }
}
</script>
