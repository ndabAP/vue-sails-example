import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTranslate from 'vue-translate-plugin'
import store from './../src/state/index'

Vue.use(VueResource)
Vue.use(VueTranslate)

const LocaleMixin = {
  computed: {
    locale: {
      get () {
        return this.$store.state.locale
      },

      set (locale) {
        this.$store.commit('SET_LOCALE', locale)
      }
    }
  },

  watch: {
    locale () {
      this.$translate.setLang(this.locale)
    }
  }
}

export {
  Vue,
  store,
  LocaleMixin
}
