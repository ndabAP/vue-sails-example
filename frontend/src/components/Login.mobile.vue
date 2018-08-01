<template>
  <div>
    <mt-field :label="t('login.mixin.label.first')" v-model="name"></mt-field>
    <mt-field :label="t('login.mixin.label.second')" v-model="password" type="password"></mt-field>

    <mt-cell title="">
      <mt-button size="small" type="primary" @click="signIn" plain>{{ t('login.mixin.button.first') }}</mt-button>
    </mt-cell>
  </div>
</template>

<script>
import LoginMixin from './Login.mixin'

export default {
  mixins: [LoginMixin]
}
</script>
