<template>
  <div>
    <product-patch v-if="isEditProductVisible" v-bind:id="id"></product-patch>

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
  import ProductPatch from './ProductPatch'

  export default {
    components: {
      ProductPatch
    },

    data() {
      return {
        id: ''
      }
    },

    created() {
      this.$store.dispatch('getProducts');
    },

    computed: {
      products() {
        return this.$store.state.products;
      },

      isEditProductVisible: {
        get() {
          return this.$store.state.product.meta.isEditProductVisible;
        },

        /**
         * @param isEditProductVisible
         */
        set(isEditProductVisible) {
          this.$store.dispatch('setIsEditProductVisible', isEditProductVisible);
        }
      }
    },

    methods: {
      /**
       * @productId
       */
      showPatchForm(id) {
        this.$set(this, 'id', id);
        this.$store.dispatch('setIsEditProductVisible', true);
      },

      /**
       * @param id
       */
      remove(id) {
        this.$http.delete('/api/product/remove', {
          params: {
            id
          }
        }).then(() => {
          this.$message({
            message: 'Congrats, you have deleted a product.',
            type: 'success'
          });

          this.$store.dispatch('getProducts');
        }, () => {
          this.$message.error('Oops, something went wrong.');
        });
      }
    }
  }
</script>
