<template>
<el-form ref="form" :model="form" label-width="120px">
  <el-row :gutter="20">
    <el-col :span="18">
      <el-form-item label="Title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="Price">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-form-item label="Description">
    <el-input type="textarea" v-model="form.description"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="create">Submit</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        price: ''
      }
    }
  },

  methods: {
    create() {
      this.$http.post('/api/product/post', {
        title: this.form.title,
        description: this.form.description,
        price: this.form.price
      }).then((response) => {
        this.$store.dispatch('getProducts');

        this.$set(this.form, 'title', '');
        this.$set(this.form, 'description', '');
        this.$set(this.form, 'price', '');

        this.$message({
          message: 'Congrats, you have created a product.',
          type: 'success'
        });
      }, (error) => {
        this.$message.error('Oops, something went wrong.');
      });
    }
  }
}
</script>
