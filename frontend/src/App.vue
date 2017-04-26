<template>
  <div id="app">
    <b-navbar toggleable type="inverse" variant="primary">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" :to="{ name: 'Home'}">
        <span>Product paradise</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item :to="{ name: 'Home'}">{{ $t('home') }}</b-nav-item>
          <b-nav-item v-if="!isUserAuthenticated" :to="{ name: 'Register'}">{{ $t('register') }}</b-nav-item>
          <b-nav-item v-if="!isUserAuthenticated" :to="{ name: 'Login'}">{{ $t('login') }}</b-nav-item>
          <b-nav-item v-if="isUserAuthenticated" :to="{ name: 'Shop'}">{{ $t('shop') }}</b-nav-item>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item :disabled="!basket.products.length" v-if="isUserAuthenticated" :to="{ name: 'Basket'}">
            {{ $t('basket') }} ({{ basket.products.length }})
          </b-nav-item>
          <b-nav-item v-if="isUserAuthenticated" :to="{ name: 'Products'}">{{ $t('products') }}</b-nav-item>
          <b-nav-item-dropdown text="Language" right-alignment>
            <b-dropdown-item @click="setLanguage('en')">English</b-dropdown-item>
            <b-dropdown-item @click="setLanguage('de')">Deutsch</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view class="mt-4"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',

    i18n: {
      messages: {
        en: {
          'home': 'Home',
          'register': 'Register',
          'login': 'Login',
          'shop': 'Shop',
          'basket': 'Basket',
          'products': 'Manage products'

        },
        de: {
          'home': 'Startseite',
          'register': 'Registrierung',
          'login': 'Login',
          'shop': 'Shop',
          'basket': 'Warenkorb',
          'products': 'Produktverwaltung'

        }
      }
    },

    computed: {
      isUserAuthenticated () {
        return this.$store.state.isUserAuthenticated
      },

      basket: {
        get () {
          return this.$store.state.basket
        }
      }
    },

    methods: {

      /**
       * @param language
       */
      setLanguage (language) {
        this.$store.dispatch('setLocale', language)
      }
    }

  }
</script>
