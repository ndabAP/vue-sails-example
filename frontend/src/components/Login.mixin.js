import { mapMutations } from 'vuex'

export default {
  computed: {
    user: {
      get () {
        return this.$store.state.User.user
      }
    },

    name: {
      get () {
        return this.$store.state.User.user.name
      },

      set (name) {
        this.$store.commit('SET_USER_NAME', name)
      }
    },

    password: {
      get () {
        return this.$store.state.User.user.password
      },

      set (password) {
        this.$store.commit('SET_USER_PASSWORD', password)
      }
    }
  },

  methods: {
    async signIn () {
      const {xToken, cookie} = await this.$store.dispatch('signIn', this.user)

      window.localStorage.setItem('x-token', xToken)
      this.setCookie('user', cookie, 3600 * 24 * 7)
      this.setIsUserAuthenticated(true)
      this.$emit('userLoggedIn')

      this.$router.push({name: 'Products'})
    },

    setCookie (name, value, seconds) {
      const expires = seconds ? '; expires=' + new Date(new Date().getTime() + seconds * 1000).toGMTString() : ''
      document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
    },

    ...mapMutations({
      setIsUserAuthenticated: 'SET_IS_USER_AUTHENTICATED'
    })
  }
}
