<template>
  <b-modal size="lg" id="patch-product" :hide-header-close="true" no-fade>
    <template slot="modal-title">{{ t('productpatch.mixin.first.title') }}</template>
    <div class="row">
      <div class="col-8">
        <b-form-fieldset
          :description="t('productpatch.mixin.description.first')"
          :label="t('productpatch.mixin.label.first')">
          <b-form-input v-model="title" :state="isValidTitle"></b-form-input>
          <b-form-feedback v-for="(name, index) in errors.title" :key="index">
            {{ name }}
          </b-form-feedback>
        </b-form-fieldset>
      </div>

      <div class="col-4">
        <b-form-fieldset
          :description="t('productpatch.mixin.description.second')"
          :label="t('productpatch.mixin.label.second')">
          <b-form-input v-model="price" :state="isValidPrice"></b-form-input>
          <b-form-feedback v-for="(name, index) in errors.price" :key="index">
            {{ name }}
          </b-form-feedback>
        </b-form-fieldset>
      </div>
    </div>

    <b-form-fieldset
      :description="t('productpatch.mixin.description.third')"
      :label="t('productpatch.mixin.label.third')">
      <b-form-input textarea v-model="description" :state="isValidDescription"></b-form-input>
      <b-form-feedback v-for="(name, index) in errors.description" :key="index">
        {{ name }}
      </b-form-feedback>
    </b-form-fieldset>

    <template slot="modal-footer">
      <b-button size="sm" variant="outline-primary" @click="cancel">
        {{ t('productpatch.mixin.button.first') }}
      </b-button>
      <b-button size="sm" variant="outline-success" @click="patchProduct">
        {{ t('productpatch.mixin.button.second') }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import ProductPatchMixin from './ProductPatch.mixin'
import ProductValidation from './ProductValidation.mixin'

export default {
  mixins: [ProductPatchMixin, ProductValidation],

  async created () {
    const product = await this.$store.dispatch('getProduct', this.id)
    this.$root.$emit('bv::show::modal', 'patch-product')

    this.$store.commit('SET_PRODUCT_TITLE', product.title)
    this.$store.commit('SET_PRODUCT_DESCRIPTION', product.description)
    this.$store.commit('SET_PRODUCT_PRICE', product.price)
  },

  methods: {
    async patchProduct () {
      await this.$store.dispatch('patchProduct', {
        id: this.id,
        title: this.title,
        price: this.price,
        description: this.description
      })

      await this.$store.dispatch('getProductsByUser', this.user)

      this.$store.commit('SET_IS_VISIBLE_PRODUCT_PATCH', false)
      this.$store.commit('RESET_PRODUCT')
    },

    cancel () {
      this.$store.commit('SET_IS_VISIBLE_PRODUCT_PATCH', false)
      this.$root.$emit('bv::hide::modal', 'patch-product')
    }
  },

  destroyed () {
    this.$root.$emit('bv::hide::modal', 'patch-product')
    this.$store.commit('RESET_PRODUCT')
  }
}
</script>
