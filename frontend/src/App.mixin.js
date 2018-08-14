import { mapMutations } from 'vuex'
import locales from './locales'
import isNull from 'lodash/isNull'

export default {
  name: 'app',

  locales,

  mounted () {
    this.$translate.setLang('en')
  },

  created () {
    const basket = JSON.parse(sessionStorage.getItem('basket'))
    if (!isNull(basket)) this.$store.commit('SET_BASKET', basket)
  },

  computed: {
    isUserAuthenticated: {
      get () {
        return this.$store.state.isUserAuthenticated
      },

      set (isUserAuthenticated) {
        this.$store.commit('SET_IS_USER_AUTHENTICATED', isUserAuthenticated)
      }
    },

    basket: {
      get () {
        return this.$store.state.Basket.basket
      }
    }
  },

  methods: {
    deleteCookie: cookie => { document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;` },

    ...mapMutations({
      setLocale: 'SET_LOCALE'
    })
  }
}
