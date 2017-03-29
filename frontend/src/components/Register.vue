<template>
<el-row :gutter="20">
  <el-col :span="8" :offset="6">
    <h1>Register</h1>
    <el-form :rules="rules" ref="form" :model="form" label-width="120px">
      <el-form-item label="E-Mail" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Name" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Noob" prop="noob">
        <el-switch v-model="form.noob"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="create">Submit</el-button>
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
      form: {
        email: '',
        name: '',
        noob: true
      },
      rules: {
        email: [{
            required: true,
            message: 'Please enter your email address',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Please enter a valid email address',
            trigger: 'change'
          },
        ],
        name: [{
          required: true,
          message: 'Please enter your name',
          trigger: 'blur'
        }]
      }
    }
  },

  methods: {
    create() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$http.post('/api/register/post', {
            email: this.form.email,
            name: this.form.name,
            noob: this.form.noob
          }).then((response) => {
            this.$message({
              message: 'Congrats, you are now registered.',
              type: 'success'
            });
          }, (error) => {
            this.$message.error('Oops, something went wrong.');
          });
        }
      });
    }
  }
}
</script>
