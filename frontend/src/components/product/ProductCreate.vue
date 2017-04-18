<template>
  <div>
    <div class="row">
      <div class="col-8">
        <b-form-fieldset
          description="Define a product title."
          label="Title"
          :label-size="1">
          <b-form-input v-model="title"></b-form-input>
        </b-form-fieldset>
      </div>

      <div class="col-4">
        <b-form-fieldset
          description="Define a product price."
          label="Price"
          :label-size="1">
          <b-form-input v-model="price"></b-form-input>
        </b-form-fieldset>
      </div>
    </div>

    <b-form-fieldset
      description="Define a product description."
      label="Description"
      :label-size="1">
      <b-form-input textarea v-model="description"></b-form-input>
    </b-form-fieldset>

    <b-button size="sm" variant="outline-success" @click="create">Create</b-button>
  </div>
</template>

<script>
  export default {
    computed: {
      product: {
        get () {
          return this.$store.state.product
        }
      },

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
      }
    },

    methods: {
      create () {
        this.$store.dispatch('saveProduct', {
          product: this.product,
          user: this.user
        }).then(() => {
          // Success message

          this.$store.dispatch('getProductsByUser', this.user)
        }, error => {
          // Error message
          console.log(error)
        })
      }
    }
  }
</script>
