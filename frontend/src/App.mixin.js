import { mapMutations } from 'vuex'
import locales from './locales'

export default {
  name: 'app',

  locales,

  mounted () {
    this.$translate.setLang('en')
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
    deleteCookie (cookie) {
      document.cookie = `${cookie}=; Max-Age=0`
    },

    ...mapMutations({
      setLocale: 'SET_LOCALE'
    })
  }
}
