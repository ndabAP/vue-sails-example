<template>
  <div>
    <mt-field :label="t('register.mixin.label.first')" :state="isValidNameMobile" v-model="name"></mt-field>
    <mt-field :label="t('register.mixin.label.second')" :state="isValidPasswordMobile" v-model="password"
              type="password"></mt-field>

    <mt-cell title="">
      <mt-button size="small" type="primary" @click="signUp" plain>{{ t('register.mixin.button.first') }}</mt-button>
    </mt-cell>
  </div>
</template>

<script>
import RegisterMixin from './Register.mixin'
import UserValidation from './User.validation'

export default {
  mixins: [RegisterMixin, UserValidation],

  computed: {
    isValidNameMobile: {
      get () {
        if (this.isValidName) return 'success'

        return 'error'
      }
    },

    isValidPasswordMobile: {
      get () {
        if (this.isValidPassword) return 'success'

        return 'error'
      }
    }
  }
}
</script>
