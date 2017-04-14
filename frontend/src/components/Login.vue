<template>
  <div class="row justify-content-md-center">
    <div class="col-6">
      <p>Here your can login.</p>
      <b-form-fieldset
        description="Enter your name."
        label="Name *"
        :label-size="1">
        <b-form-input v-model="name"></b-form-input>
      </b-form-fieldset>
      <b-form-fieldset
        description="Enter your password."
        label="Password *"
        :label-size="1">
        <b-form-input v-model="password" type="password"></b-form-input>
      </b-form-fieldset>
      <b-button variant="outline-success" size="sm" @click="login">Submit</b-button>
    </div>
    <div class="col-6">
      <figure class="figure">
       <pre>
        [
          {
            name: 'Joe',
            password: 'toasty'
          }, {
            name: 'Anna',
            password: 'sunflower'
          }, {
            name: 'Tom',
            password: 'jerry'
          }
        ]
      </pre>
        <figcaption class="figure-caption">You may choose one of these users to login.</figcaption>
      </figure>
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
      login() {
        this.$http.post('/api/login/post', {
          name: this.name,
          password: this.password
        }).then((response) => {
          this.$store.dispatch('setIsUserAuthenticated', true)
          window.localStorage.setItem('token', response.body.token)

          // Success message

          this.$router.push({
            name: 'Products'
          })
        }, (error) => {
          if (error.status === 403) {
            // Error message
          } else this.$message.error('Oops, something went wrong.')
        })
      }
    }
  }
</script>
