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
      }
    },

    basket: {
      get () {
        return this.$store.state.Basket.basket
      }
    }
  },

  methods: {
    ...mapMutations({
      setLocale: 'SET_LOCALE'
    })
  }
}
