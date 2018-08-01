<template>
  <div class="row justify-content-md-center">
    <div class="col-6">
      <b-form-fieldset
        :description="t('register.mixin.description.first')"
        :label="t('register.mixin.label.first')">
        <b-form-input v-model="name" :state="isValidName"></b-form-input>
        <b-form-feedback v-for="(name, index) in errors.name" :key="index">
          {{ name }}
        </b-form-feedback>
      </b-form-fieldset>

      <b-form-fieldset
        :description="t('register.mixin.description.second')"
        :label="t('register.mixin.label.second')">
        <b-form-input v-model="password" :state="isValidPassword" type="password"></b-form-input>
        <b-form-feedback v-for="(password, index) in errors.password" :key="index">
          {{ password }}
        </b-form-feedback>
      </b-form-fieldset>

      <b-button variant="outline-success" size="sm" @click="signUp">{{ t('register.mixin.button.first') }}</b-button>
    </div>
  </div>
</template>

<script>
import RegisterMixin from './Register.mixin'
import UserValidation from './User.validation'

export default {
  mixins: [RegisterMixin, UserValidation]
}
</script>
