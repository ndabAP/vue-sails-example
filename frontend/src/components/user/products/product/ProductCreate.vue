<template>
  <div>
    <div class="row">
      <div class="col-8">
        <b-form-fieldset
          :description="$t('description.first')"
          :label="$t('label.first')"
          :label-size="1">
          <b-form-input v-model="title"></b-form-input>
        </b-form-fieldset>
      </div>

      <div class="col-4">
        <b-form-fieldset
          :description="$t('description.second')"
          :label="$t('label.second')"
          :label-size="1">
          <b-form-input v-model="price"></b-form-input>
        </b-form-fieldset>
      </div>
    </div>

    <b-form-fieldset
      :description="$t('description.third')"
      :label="$t('label.third')"
      :label-size="1">
      <b-form-input textarea v-model="description"></b-form-input>
    </b-form-fieldset>

    <b-button size="sm" variant="outline-success" @click="create">{{ $t('button.first') }}</b-button>
  </div>
</template>

<script>
  export default {
    i18n: {
      messages: {
        en: {
          'description.first': 'Define a title',
          'label.first': 'Title',
          'description.second': 'Define a price',
          'label.second': 'Price',
          'description.third': 'Define a description',
          'label.third': 'Description',
          'button.first': 'Create'
        },
        de: {
          'description.first': 'Definiere einen Titel',
          'label.first': 'Titel',
          'description.second': 'Definiere einen Preis',
          'label.second': 'Preis',
          'description.third': 'Definiere eine Beschreibung',
          'label.third': 'Beschreibung',
          'button.first': 'Erstellen'
        }
      }
    },

    created () {
      this.$store.dispatch('resetProduct')
    },

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
          console.error(error)
        })
      }
    }
  }
</script>
