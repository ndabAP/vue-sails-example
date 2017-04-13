<template>
  <el-dialog title="Patch product" size="large" v-model="isEditProductVisible">
    <el-form label-width="120px">
      <el-row :gutter="20">
        <el-col :span="18">
          <el-form-item label="Title *">
            <el-input :maxlength="15" :minlength="1" v-model="title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Price *">
            <el-input v-model="price"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Description">
        <el-input type="textarea" :maxlength="40" :minlength="25" v-model="description"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="isEditProductVisible = false">Cancel</el-button>
      <el-button type="success" @click="patch">Patch</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    props: ['id'],

    created() {
      let id = this.id

      this.$http.get('/api/product/get', {
        params: {
          id
        }
      }).then((response) => {
        let product = response.body

        this.$store.dispatch('setProductTitle', product.title)
        this.$store.dispatch('setProductDescription', product.description)
        this.$store.dispatch('setProductPrice', product.price)
      }, () => {
        this.$message.error('Oops, something went wrong.')
      });
    },

    computed: {
      title: {
        get() {
          return this.$store.state.product.title
        },

        /**
         * @param title
         */
        set(title) {
          this.$store.dispatch('setProductTitle', title)
        }
      },

      description: {
        get() {
          return this.$store.state.product.description
        },

        /**
         * @param description
         */
        set(description) {
          this.$store.dispatch('setProductDescription', description)
        }
      },

      price: {
        get() {
          return this.$store.state.product.price
        },

        /**
         * @param price
         */
        set(price) {
          this.$store.dispatch('setProductPrice', price)
        }
      },

      isEditProductVisible: {
        get() {
          return this.$store.state.product.meta.isEditProductVisible
        },

        /**
         * @param isEditProductVisible
         */
        set(isEditProductVisible) {
          this.$store.dispatch('setIsEditProductVisible', isEditProductVisible)
        }
      }
    },

    methods: {
      patch() {
        this.$http.patch('/api/product/patch', {
          id: this.id,
          title: this.title,
          price: this.price,
          description: this.description
        }).then(() => {
          this.$message({
            message: 'Congrats, you have updated a product.',
            type: 'success'
          })

          this.$store.dispatch('getProducts')
          this.$store.dispatch('setIsEditProductVisible', false)
          this.$store.dispatch('resetProduct')
        }, () => {
          this.$message.error('Oops, something went wrong.')
        })
      }
    },

    destroyed() {
      this.$store.dispatch('resetProduct')
    }
  }
</script>

<style>
</style>
