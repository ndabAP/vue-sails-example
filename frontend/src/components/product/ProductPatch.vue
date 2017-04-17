<template>
  <b-modal size="lg" id="patch-product" title="Submit your name">
    <template slot="modal-title">Patch product</template>
    <div class="row">
      <div class="col-8">
        <b-form-fieldset
          description="Patch the product title."
          label="Title"
          :label-size="1">
          <b-form-input v-model="title"></b-form-input>
        </b-form-fieldset>
      </div>

      <div class="col-4">
        <b-form-fieldset
          description="Patch the product price."
          label="Price"
          :label-size="1">
          <b-form-input v-model="price"></b-form-input>
        </b-form-fieldset>
      </div>
    </div>

    <b-form-fieldset
      description="Patch the product description."
      label="Description"
      :label-size="1">
      <b-form-input textarea v-model="description"></b-form-input>
    </b-form-fieldset>

    <template slot="modal-footer">
      <b-button size="sm" variant="outline-primary" @click="cancel">Cancel</b-button>
      <b-button size="sm" variant="outline-success" @click="patch">Patch</b-button>
    </template>
  </b-modal>
</template>

<script>
  export default {
    props: ['id'],

    created () {
      let id = this.id

      this.$http.get('/api/user/product/get', {
        params: {
          id
        }
      }).then((response) => {
        this.$root.$emit('show::modal', 'patch-product')
        let product = response.body

        this.$store.dispatch('setProductTitle', product.title)
        this.$store.dispatch('setProductDescription', product.description)
        this.$store.dispatch('setProductPrice', product.price)
      }, () => {
        // Error message
      })
    },

    computed: {
      user () {
        return this.$store.state.user
      },

      title: {
        get () {
          return this.$store.state.product.title
        },

        /**
         * @param title
         */
        set (title) {
          this.$store.dispatch('setProductTitle', title)
        }
      },

      description: {
        get () {
          return this.$store.state.product.description
        },

        /**
         * @param description
         */
        set (description) {
          this.$store.dispatch('setProductDescription', description)
        }
      },

      price: {
        get () {
          return this.$store.state.product.price
        },

        /**
         * @param price
         */
        set (price) {
          this.$store.dispatch('setProductPrice', price)
        }
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
      patch () {
        this.$http.patch('/api/user/product/patch', {
          id: this.id,
          title: this.title,
          price: this.price,
          description: this.description
        }).then(() => {
          // Success message

          this.$store.dispatch('getProductsByUser', this.user)
          this.$store.dispatch('setIsEditProductVisible', false)
          this.$store.dispatch('resetProduct')
        }, () => {
          // Error message
        })
      },

      cancel () {
        this.$store.dispatch('setIsEditProductVisible', false)
        this.$root.$emit('hide::modal', 'patch-product')
      }
    },

    destroyed () {
      this.$root.$emit('hide::modal', 'patch-product')
      this.$store.dispatch('resetProduct')
    }
  }
</script>
