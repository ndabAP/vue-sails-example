<template>
  <div class="row justify-content-md-center">
    <div class="col-6">
      <b-form-fieldset
        :description="$t('description.first')"
        :label="$t('label.first')"
        :label-size="1">
        <b-form-input v-model="name"></b-form-input>
      </b-form-fieldset>
      <b-form-fieldset
        :description="$t('description.second')"
        :label="$t('label.second')"
        :label-size="1">
        <b-form-input v-model="password" type="password"></b-form-input>
      </b-form-fieldset>
      <b-button variant="outline-success" size="sm" @click="login">{{ $t('button.first') }}</b-button>
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
        <figcaption class="figure-caption">{{ $t('figcaption.first') }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
  export default {
    i18n: {
      messages: {
        en: {
          'description.first': 'Enter your name',
          'label.first': 'Name',
          'description.second': 'Enter your password',
          'label.second': 'Password',
          'figcaption.first': 'You may choose one of these users to login.',
          'button.first': 'Submit'
        },
        de: {
          'description.first': 'Gebe deinen Namen ein',
          'label.first': 'Name',
          'description.second': 'Gebe dein Passwort ein',
          'label.second': 'Passwort',
          'figcaption.first': 'Du kannst einen dieser Nutzer wählen, um dich einzuloggen.',
          'button.first': 'Senden'
        }
      }
    },

    computed: {
      user: {
        get () {
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
        set (name) {
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
        set (password) {
          this.$store.dispatch('setUserPassword', password)
        }
      }
    },

    methods: {
      login () {
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
          }
        })
      }
    }
  }
</script>
