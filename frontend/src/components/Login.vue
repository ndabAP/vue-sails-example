<template>
<el-row :gutter="20">
  <el-col :span="8" :offset="6">
    <h1>Login</h1>
    <el-form ref="form" label-width="120px">
      <el-form-item label="E-Mail">
        <el-input v-model="email"></el-input>
      </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Submit</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name: ''
    }
  },

  methods: {
    login() {
      this.$http.post('/api/login/post', {
        email: this.email,
        name: this.name
      }).then((response) => {
        this.$store.dispatch('setIsUserAuthenticated', true);
        window.localStorage.setItem('token', response.body.token);

        this.$message({
          message: 'Congrats, you are now logged in.',
          type: 'success'
        });

        this.$router.push({
          name: 'Products/Index'
        });
      }, (error) => {
        if (error.status === 403) {
          this.$message.error('Oops, wrong credentials.');
        } else {
          this.$message.error('Oops, something went wrong.');
        }
      });
    }
  }
}
</script>
