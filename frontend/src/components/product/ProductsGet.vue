<template>
<div>
  <el-dialog title="Patch product" v-model="isEditProductVisible" size="large">
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
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="isEditProductVisible = false">Cancel</el-button>
      <el-button type="primary" @click="patch">Patch</el-button>
    </span>
  </el-dialog>

  <el-table v-if="products.length > 0" :data="products" style="width: 100%">
    <el-table-column prop="title" label="Title"></el-table-column>
    <el-table-column prop="description" label="Title"></el-table-column>
    <el-table-column prop="price" label="Price"></el-table-column>
      <el-table-column fixed="right" label="Operations" width="120">
        <template scope="scope">
            <el-button
             @click.native.prevent="showPatchForm(scope.row.id)" type="text"
             size="small">
             Edit
            </el-button>
            <el-button
               @click.native.prevent="remove(scope.row.id)" type="text"
               size="small">
               Remove
              </el-button>
          </template>
      </el-table-column>
   </el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      isEditProductVisible: false,
      form: {
        id: '',
        title: '',
        description: '',
        price: ''
      }
    }
  },

  created() {
    this.$store.dispatch('getProducts');
  },

  computed: {
    products () {
      return this.$store.state.products;
    }
  },

  methods: {
    /**
     * @param id
     */
    showPatchForm(id) {
      this.$http.get('/api/product/get', {
        params: {
          id
        }
      }).then((response) => {
        let product = response.body;

        this.form.title = product.title;
        this.form.price = product.price;
        this.form.description = product.description;
        this.form.id = product.id;

        this.$set(this, 'isEditProductVisible', true);
      }, (error) => {
        this.$message.error('Oops, something went wrong.');
      });
    },

    patch() {
      this.$http.patch('/api/product/patch', {
        id: this.form.id,
        title: this.form.title,
        price: this.form.price,
        description: this.form.description
      }).then((response) => {
        this.$message({
          message: 'Congrats, you have updated a product.',
          type: 'success'
        });

        this.$store.dispatch('getProducts');
        this.$set(this, 'isEditProductVisible', false);
      }, (error) => {
        this.$message.error('Oops, something went wrong.');
      });
    },

    /**
     * @param index
     */
    remove(id) {
      this.$http.delete('/api/product/remove', {
        params: {
          id
        }
      }).then((response) => {
        this.$message({
          message: 'Congrats, you have deleted a product.',
          type: 'success'
        });

        this.$store.dispatch('getProducts');
      }, (error) => {
        this.$message.error('Oops, something went wrong.');
      });
    }
  }
}
</script>
