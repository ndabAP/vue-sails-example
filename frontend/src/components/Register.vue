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
      <b-button variant="outline-success" size="sm" @click="create">{{ $t('button.first') }}</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    i18n: {
      messages: {
        en: {
          'description.first': 'Enter a name',
          'label.first': 'Name *',
          'description.second': 'Enter a password',
          'label.second': 'Password *',
          'button.first': 'Create'
        },
        de: {
          'description.first': 'Gebe einen Namen ein',
          'label.first': 'Name *',
          'description.second': 'Gebe ein Passwort ein',
          'label.second': 'Passwort *',
          'figcaption.first': 'Du kannst einen dieser Nutzer wählen, um dich einzuloggen.',
          'button.first': 'Erstellen'
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
          this.$store.commit('SET_USER_NAME', name)
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
          this.$store.commit('SET_USER_PASSWORD', password)
        }
      }
    },

    methods: {
      create () {
        this.$store.dispatch('saveUser', this.user)
      }
    }
  }
</script>
