import isEmpty from 'lodash/isEmpty'
import validate from 'validate.js'

export default {
  data: () => ({
    errors: {
      name: [],
      password: []
    }
  }),

  computed: {
    isValidName: {
      get () {
        if (isEmpty(this.user.name)) return null

        const validation = validate.single(this.user.name, {
          presence: true,
          length: {
            minimum: 3,
            message: 'Name must be at least three characters long'
          },

          format: {
            pattern: '^[A-Z](.*)$',
            message: 'Name must start capitalized'
          }
        })

        if (validation) {
          this.errors.name = validation

          return false
        }

        return true
      }
    },

    isValidPassword: {
      get () {
        if (isEmpty(this.user.password)) return null

        const validation = validate.single(this.user.password, {
          presence: true,
          length: {
            minimum: 3,
            message: 'Password must be at least three characters long'
          }
        })

        if (validation) {
          this.errors.password = validation

          return false
        }

        return true
      }
    }
  }
}
