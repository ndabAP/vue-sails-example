<template>
  <div class="row justify-content-md-center">
    <div class="col-6">
      <p>Here your can register.</p>
      <b-form-fieldset
        description="Define a name."
        label="Name *"
        :label-size="1">
        <b-form-input v-model="name"></b-form-input>
      </b-form-fieldset>
      <b-form-fieldset
        description="Set a password."
        label="Password *"
        :label-size="1">
        <b-form-input v-model="password" type="password"></b-form-input>
      </b-form-fieldset>
      <b-button variant="outline-success" size="sm" @click="create">Submit</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      user: {
        get() {
          return this.$store.state.user
        }
      },

      name: {
        get () {
          return this.$store.state.user.name
        },
        /**
         * @param name
         */
        set(name) {
          this.$store.dispatch('setUserName', name)
        }
      },

      password: {
        get () {
          return this.$store.state.user.password
        },
        /**
         * @param password
         */
        set(password) {
          this.$store.dispatch('setUserPassword', password)
        }
      }
    },

    methods: {
      create() {
        this.$store.dispatch('saveUser', this.user).then(() => {
          // Success message
        })
      }
    }
  }
</script>
