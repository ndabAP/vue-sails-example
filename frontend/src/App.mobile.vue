<template>
  <div id="app">
    <mt-header title="Product paradise">
      <router-link :to="{ name: 'Home'}" slot="left">
        <mt-button>{{ t('app.mixin.home')}}</mt-button>
      </router-link>
      <span slot="right">
        <mt-button icon="more" @click.native="isVisibleNavbar = true"></mt-button>
        </span>
    </mt-header>

    <router-view @userLoggedIn="setActions"></router-view>

    <footer class="mt-3 text-center">
      <span class="text-muted">
        <small>
          This shop is not real and only for demonstration purposes. <a
          href="https://github.com/ndabAP/vue-sails-example">Source code</a>
        </small>
      </span>
    </footer>

    <mt-actionsheet
      :cancelText="t('app.mixin.cancelText')"
      size="large"
      :actions="actions"
      v-model="isVisibleNavbar">
    </mt-actionsheet>
  </div>
</template>

<script>
import AppMixin from './App.mixin'
import { Toast } from 'mint-ui'

export default {
  mixins: [AppMixin],

  data: () => ({
    actions: [],
    isVisibleNavbar: false
  }),

  mounted () {
    this.setActions()
  },

  methods: {
    setActions () {
      let actions = []

      if (!this.isUserAuthenticated) {
        actions.push({
          name: this.t('app.mixin.register'),
          method: () => {
            this.$router.push({name: 'Register'})
          }
        })

        actions.push({
          name: this.t('app.mixin.login'),
          method: () => {
            this.$router.push({name: 'Login'})
          }
        })
      } else {
        actions.push({
          name: this.t('app.mixin.shop'),
          method: () => {
            this.$router.push({name: 'Shop'})
          }
        })

        actions.push({
          name: this.t('app.mixin.basket'),
          method: () => {
            this.$router.push({name: 'Basket'})
          }
        })

        actions.push({
          name: this.t('app.mixin.products'),
          method: () => {
            this.$router.push({name: 'Products'})
          }
        })

        actions.push({
          name: 'Logout',
          method: () => {
            this.deleteCookie('user')
            this.isUserAuthenticated = false

            this.$nextTick(() => this.setActions())

            Toast({
              message: this.t('app.mobile.logout'),
              position: 'bottom',
              duration: 3000
            })
            this.$router.push({name: 'Home'})
          }
        })
      }

      actions.push({
        name: 'Change language',
        method: () => {
          const locale = this.$store.state.locale

          if (locale === 'en') this.setLocale('de')
          if (locale === 'de') this.setLocale('en')

          Toast({
            message: this.t('app.mixin.language.changed'),
            position: 'bottom',
            duration: 3000
          })

          this.$nextTick(() => this.setActions())
        }
      })

      this.$set(this, 'actions', actions)
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  }

  button {
    margin-left: 5px !important;
  }

  .mt-3 {
    margin-top: 1rem !important;
  }

  .text-muted {
    color: #636c72 !important;
  }

  footer {
    padding: 0 10px;
  }

  .text-center {
    text-align: center !important;
  }
</style>
