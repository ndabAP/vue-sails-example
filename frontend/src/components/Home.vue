<template>
  <div>
    <div class="row">
      <div class="col">
        <b-carousel :interval="3000" background="white">
          <b-carousel-slide background="white" height="150px">
            <h3 class="text-info">Many products</h3>
            <p class="text-muted">Our users offer many great products.</p>
          </b-carousel-slide>

          <b-carousel-slide background="white" height="150px">
            <h3 class="text-success">Cheap prices</h3>
            <p class="text-muted">The products here are very cheap.</p>
          </b-carousel-slide>

          <b-carousel-slide background="white" height="150px">
            <h3 class="text-primary">Buy fast</h3>
            <p class="text-muted">Buy fast and easy here.</p>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>

    <div class="row">
      <div class="col-4" v-for="product in products">
        <b-card :key="product.id"
                :header="product.title"
                class="mb-4"
                show-footer>
          <p>{{ product.description }}</p>
          <small slot="footer" class="text-muted">
            <span class="float-left">${{ product.price }}</span>
            <span class="float-right">by {{ product.user.name }}</span>
          </small>
        </b-card>
      </div>
    </div>
  </div>
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
    }
  }
</script>
