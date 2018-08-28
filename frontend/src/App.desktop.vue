<template>
  <div>
    <help-index
      v-if="isVisibleHelp"
      :io="io"
      @helpMounted="setIoHandler">
    </help-index>

    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand :to="{ name: 'Home'}">
        <span>Product paradise</span>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Home'}">{{ t('app.mixin.home') }}</b-nav-item>
          <b-nav-item v-if="!isUserAuthenticated" :to="{ name: 'Register'}">{{ t('app.mixin.register') }}</b-nav-item>
          <b-nav-item v-if="!isUserAuthenticated" :to="{ name: 'Login'}">{{ t('app.mixin.login') }}</b-nav-item>
          <b-nav-item v-if="isUserAuthenticated" :to="{ name: 'Shop'}">{{ t('app.mixin.shop') }}</b-nav-item>
          <b-nav-item v-if="isUserAuthenticated" @click="signOut">Logout</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="d-none d-lg-block" @click="setIsVisibleHelp(true)">{{ t('app.mixin.help') }}</b-nav-item>
          <b-nav-item :disabled="!basket.products.length" v-if="isUserAuthenticated" :to="{ name: 'Basket'}">
            {{ t('app.mixin.basket') }} ({{ basket.products.length }})
          </b-nav-item>
          <b-nav-item v-if="isUserAuthenticated" :to="{ name: 'Products'}">{{ t('app.mixin.products') }}</b-nav-item>
          <b-nav-item-dropdown text="Language" right-alignment>
            <b-dropdown-item @click="setLocale('en')">English</b-dropdown-item>
            <b-dropdown-item @click="setLocale('de')">Deutsch</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view class="mt-4"></router-view>
    </div>

    <footer class="mt-3 text-center">
      <div class="container">
        <span class="text-muted">
          <small>
            <img src="/img/baseline-info-24px.svg">
            This shop is not real and only for demonstration purposes.
            <a href="https://github.com/ndabAP/vue-sails-example">Source code</a>
          </small>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import * as socketIoClient from 'socket.io-client'
import * as sailsIo from 'sails.io.js'
import { mapMutations } from 'vuex'
import AppMixin from './App.mixin'

const HelpIndex = () => import('./components/help/Help.desktop')

export default {
  mixins: [AppMixin],

  components: {
    HelpIndex
  },

  data: () => ({
    io: null
  }),

  computed: {
    isVisibleHelp: {
      get () {
        return this.$store.state.isVisibleHelp
      }
    }
  },

  watch: {
    isVisibleHelp () {
      if (!this.isVisibleHelp) this.io.socket.disconnect()
      if (this.isVisibleHelp && this.io) this.io.socket.reconnect()
    }
  },

  methods: {
    setIoHandler () {
      if (!this.io) {
        const isProductionEnvironment = (process.env.NODE_ENV === 'production')

        let io = sailsIo(socketIoClient)
        let url

        if (isProductionEnvironment) {
          url = `${location.protocol}//${location.hostname}${location.port ? ':' + location.port : ''}`
        } else url = 'http://localhost:1337'

        io.sails.url = url
        io.sails.environment = process.env.NODE_ENV || 'development'
        io.sails.useCORSRouteToGetCookie = false

        this.$set(this, 'io', io)
      }
    },

    signOut () {
      this.deleteCookie('user')
      this.isUserAuthenticated = false
      localStorage.clear()

      this.$router.push({name: 'Home'})
    },

    ...mapMutations({
      setIsVisibleHelp: 'SET_IS_VISIBLE_HELP'
    })
  }
}
</script>

<style>
  .info {
    fill: #FF0000 !important
  }
</style>
