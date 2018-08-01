<template>
  <div class="row justify-content-md-center">
    <div class="col-6">
      <b-form-fieldset :description="t('login.mixin.description.first')" :label="t('login.mixin.label.first')">
        <b-form-input v-model="name"></b-form-input>
      </b-form-fieldset>
      <b-form-fieldset :description="t('login.mixin.description.second')" :label="t('login.mixin.label.second')">
        <b-form-input v-model="password" type="password"></b-form-input>
      </b-form-fieldset>
      <b-button variant="outline-success" size="sm" @click="signIn">{{ t('login.mixin.button.first') }}</b-button>
    </div>
    <div class="col-6">
      <figure class="figure">
      <pre>
        [
          {
            name: 'Joe',
            password: 'toasty'
          }, {
            name: 'Anna',
            password: 'sunflower'
          }, {
            name: 'Tom',
            password: 'jerry'
          }
        ]
      </pre>
        <figcaption class="figure-caption">You may choose one of these users to login.</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import LoginMixin from './Login.mixin'

export default {
  mixins: [LoginMixin]
}
</script>
