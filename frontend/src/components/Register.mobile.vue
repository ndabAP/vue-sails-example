<template>
  <div>
    <mt-field :label="t('register.mixin.label.first')" :state="isNameValidMobile" v-model="name"></mt-field>
    <mt-field :label="t('register.mixin.label.second')" :state="isPasswordValidMobile" v-model="password" type="password"></mt-field>

    <mt-cell title="">
      <mt-button size="small" type="primary" @click="create" plain>{{ t('register.mixin.button.first') }}</mt-button>
    </mt-cell>
  </div>
</template>

<script>
  import RegisterMixin from './Register.mixin'
  import UserValidation from './User.validation'

  export default {
    mixins: [RegisterMixin, UserValidation],

    computed: {
      isNameValidMobile: {
        get () {
          if (this.isNameValid) return 'success'

          return 'error'
        }
      },

      isPasswordValidMobile: {
        get () {
          if (this.isPasswordValid) return 'success'

          return 'error'
        }
      }
    }
  }
</script>
