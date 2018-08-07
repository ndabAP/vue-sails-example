<template>
  <div>
    <product-patch v-if="isVisibleProductPatch" :id="id"></product-patch>

    <b-table :items="products" :fields="fields" v-if="products.length > 0">
      <template slot="price" slot-scope="item">
        ${{ item.item.price }}
      </template>
      <template slot="actions" slot-scope="item">
        <b-button-group>
          <b-button size="sm" variant="outline-primary" @click="showPatchForm(item.item.id)">
            {{ t('productsget.mixin.button.first') }}
          </b-button>
          <b-button size="sm" variant="outline-warning" @click="deleteProduct(item.item.id)">
            {{t('productsget.mixin.button.second') }}
          </b-button>
        </b-button-group>
      </template>
    </b-table>

    <p v-else>{{ t('productsget.mixin.p.first') }}</p>
  </div>
</template>

<script>
import ProductsGetMixin from './ProductsGet.mixin'

const ProductPatch = () => import('./product/ProductPatch.desktop')

export default {
  mixins: [ProductsGetMixin],

  components: {
    ProductPatch
  },

  methods: {
    showPatchForm (id) {
      this.$set(this, 'id', id)
      this.$store.commit('SET_IS_VISIBLE_PRODUCT_PATCH', true)
    },

    async deleteProduct (id) {
      await this.$store.dispatch('deleteProduct', id)
      await this.$store.dispatch('getProductsByUser', this.user)
    }
  }
}
</script>
