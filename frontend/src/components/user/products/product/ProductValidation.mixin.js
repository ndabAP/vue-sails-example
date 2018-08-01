import isEmpty from 'lodash/isEmpty'
import validate from 'validate.js'

export default {
  data: () => ({
    errors: {
      title: [],
      price: [],
      description: []
    }
  }),

  computed: {
    isValidTitle: {
      get () {
        if (isEmpty(this.title)) return null

        const validation = validate.single(this.title, {
          presence: true,
          format: {
            pattern: '^[A-Z](.*)$',
            message: 'Title must start capitalized'
          }
        })

        if (validation) {
          this.errors.title = validation

          return false
        }

        return true
      }
    },

    isValidPrice: {
      get () {
        if (this.price === null) return null

        const validation = validate.single(this.price, {
          presence: true,
          numericality: {
            notValid: 'Price must be number',
            greaterThan: 0,
            notGreaterThan: 'Price must be greater than zero'
          }
        })

        if (validation) {
          this.errors.price = validation

          return false
        }

        return true
      }
    },

    isValidDescription: {
      get () {
        if (isEmpty(this.description)) return null

        const validation = validate.single(this.description, {
          presence: true,
          length: {
            minimum: 40,
            message: 'Description must be at least forty characters long'
          }
        })

        if (validation) {
          this.errors.description = validation

          return false
        }

        return true
      }
    }
  }
}
