<template>
  <div>
    <product-patch v-if="isEditProductVisible" v-bind:id="id"></product-patch>

    <b-table :items="products" :fields="fields" v-if="products.length > 0">
      <template slot="price" scope="item">
        ${{ item.item.price }}
      </template>
      <template slot="actions" scope="item">
        <b-button size="sm" variant="outline-primary" @click="showPatchForm(item.item.id)">{{ $t('button.first') }}
        </b-button>
        <b-button size="sm" variant="outline-warning" @click="remove(item.item.id)">{{ $t('button.second') }}</b-button>
      </template>
    </b-table>

    <p v-else>No products yet, you should create one.</p>
  </div>
</template>

<script>
  import ProductPatch from './ProductPatch'

  export default {
    components: {
      ProductPatch
    },

    data () {
      return {
        id: ''
      }
    },

    created () {
      this.$store.dispatch('getProductsByUser', this.user)
    },

    i18n: {
      messages: {
        en: {
          'field.first': 'Title',
          'field.second': 'Description',
          'field.third': 'Price',
          'field.fourth': 'Actions',
          'button.first': 'Patch',
          'button.second': 'Remove'
        },
        de: {
          'field.first': 'Titel',
          'field.second': 'Beschreibung',
          'field.third': 'Preis',
          'field.fourth': 'Aktionen',
          'button.first': 'Bearbeiten',
          'button.second': 'Entfernen'
        }
      }
    },

    computed: {
      fields () {
        return {
          title: {
            label: this.$t('field.first')
          },
          description: {
            label: this.$t('field.second')
          },
          price: {
            label: this.$t('field.third')
          },
          actions: {
            label: this.$t('field.fourth')
          }
        }
      },

      products () {
        return this.$store.state.products
      },

      user () {
        return this.$store.state.user
      },

      isEditProductVisible: {
        get () {
          return this.$store.state.product.meta.isEditProductVisible
        },

        /**
         * @param isEditProductVisible
         */
        set (isEditProductVisible) {
          this.$store.dispatch('setIsEditProductVisible', isEditProductVisible)
        }
      }
    },

    methods: {
      /**
       * @productId
       */
      showPatchForm (id) {
        this.$set(this, 'id', id)
        this.$store.dispatch('setIsEditProductVisible', true)
      },

      /**
       * @param id
       */
      remove (id) {
        this.$http.delete('/api/user/product/remove', {
          params: {
            id
          }
        }).then(() => {
          // Success message

          this.$store.dispatch('getProductsByUser', this.user)
        }, () => {
          // Error message
        })
      }
    }
  }
</script>
