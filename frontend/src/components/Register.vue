<template>
<el-row :gutter="20">
  <el-col :span="8" :offset="6">
    <h1>Register</h1>
    <el-form :rules="rules" ref="user" :model="user" label-width="120px">
      <el-form-item label="E-Mail" prop="email">
        <el-input v-model="email"></el-input>
      </el-form-item>
      <el-form-item label="Name" prop="name">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="Noob" prop="noob">
        <el-switch v-model="noob"></el-switch>
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
      rules: {
        email: [{
          required: true,
          message: 'Please enter your email address',
          trigger: 'blur'
        }, {
          type: 'email',
          message: 'Please enter a valid email address',
          trigger: 'change'
        }],
        name: [{
          required: true,
          message: 'Please enter your name',
          trigger: 'blur'
        }]
      }
    }
  },

  computed: {
    user: {
      get() {
        return this.$store.state.user;
      }
    },

    email: {
      get() {
        return this.$store.state.user.email;
      },

      /**
       * @param email
       */
      set(email) {
        this.$store.dispatch('setUserEmail', email);
      }
    },

    name: {
      get() {
        return this.$store.state.user.name;
      },

      /**
       * @param name
       */
      set(name) {
        this.$store.dispatch('setUserName', name);
      }
    },

    noob: {
      get() {
        return this.$store.state.user.noob;
      },

      /**
       * @param noob
       */
      set(noob) {
        this.$store.dispatch('setUserNoob', noob);
      }
    }
  },

  methods: {
    create() {
      this.$refs.user.validate((valid) => {
        if (valid) {
          this.$store.dispatch('saveUser', this.user);
        }
      });
    }
  }
}
</script>
