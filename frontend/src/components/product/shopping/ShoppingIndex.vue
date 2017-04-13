<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <br/>
      <el-tabs>
        <el-tab-pane label="Products">
          <el-row :gutter="20">
            <el-col :span="6" v-for="product in products" :key="product.id">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="line-height: 36px;">{{ product.title }}</span>
                  <el-button style="float: right;" @click="pushToBasket(product)" type="success">Buy</el-button>
                </div>
                <p>{{ product.description }}</p>
                <span class="price">Price: {{ product.price }}</span>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane :disabled="basket.products.length < 1">
          <span slot="label">Basket <span>{{ basket.products.length }}</span></span>
          <ul>
            <li v-for="product in basket.products">
              {{ product.title }} (price: {{ product.price }})
            </li>
          </ul>
          <p>Total price: {{ totalPrice }}</p>
          <el-button @click="checkout" type="success">Checkout</el-button>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('getProducts')
    },

    computed: {
      products() {
        return this.$store.state.products
      },

      basket: {
        get () {
          return this.$store.state.basket
        }
      },

      totalPrice () {
        let totalPrice = 0;
        this.basket.products.forEach((product) => {
          totalPrice += product.price
        });

        return totalPrice
      }
    },

    methods: {
      /**
       * @param product
       */
      pushToBasket(product) {
        this.$store.dispatch('pushToBasket', product)
      },

      checkout() {
        this.$store.dispatch('checkout', this.basket).then(() => {
          this.$message({
            message: 'Congrats, you have bought it.',
            type: 'success'
          })
        })
      }
    }
  }
</script>

<style>
  .el-tabs__content {
    overflow: visible; /* hack */
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
  }

  .price {
    font-size: 13px;
    color: #999;
  }
</style>
