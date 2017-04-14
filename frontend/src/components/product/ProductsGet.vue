<template>
  <div>
    <product-patch v-if="isEditProductVisible" v-bind:id="id"></product-patch>

    <b-table :items="products" :fields="fields">
      <template slot="actions" scope="item">
        <b-button size="sm" variant="primary" @click="showPatchForm(item.item.id)">Patch</b-button>
        <b-button size="sm" variant="warning" @click="remove(item.item.id)">Remove</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  import ProductPatch from './ProductPatch'

  export default {
    components: {
      ProductPatch
    },

    data() {
      return {
        id: '',
        fields: {
          title: {
            label: 'Title'
          },
          description: {
            label: 'Description'
          },
          price: {
            label: 'Price'
          },
          actions: {
            label: 'Actions'
          }
        }
      }
    },

    created() {
      this.$store.dispatch('getProductsByUser', this.user)
    },

    computed: {
      products() {
        return this.$store.state.products
      },

      user() {
        return this.$store.state.user
      },

      isEditProductVisible: {
        get() {
          return this.$store.state.product.meta.isEditProductVisible
        },

        /**
         * @param isEditProductVisible
         */
        set(isEditProductVisible) {
          this.$store.dispatch('setIsEditProductVisible', isEditProductVisible)
        }
      }
    },

    methods: {
      /**
       * @productId
       */
      showPatchForm(id) {
        this.$set(this, 'id', id)
        this.$store.dispatch('setIsEditProductVisible', true)
      },

      /**
       * @param id
       */
      remove(id) {
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
