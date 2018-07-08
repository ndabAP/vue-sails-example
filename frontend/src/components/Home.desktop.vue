<template>
  <div>
    <div class="d-flex justify-content-center">
      <b-carousel
        class="mb-4"
        background="transparent"
        :interval="3000"
        img-width="1100"
        img-height="200">
        <b-carousel-slide img-blank>
          <h3 class="text-info">{{ t('home.mixin.h3.first') }}</h3>
          <p class="text-muted">{{ t('home.mixin.p.first') }}</p>
        </b-carousel-slide>

        <b-carousel-slide img-blank>
          <h3 class="text-info">{{ t('home.mixin.h3.second') }}</h3>
          <p class="text-muted">{{ t('home.mixin.p.second') }}</p>
        </b-carousel-slide>

        <b-carousel-slide img-blank>
          <h3 class="text-info">{{ t('home.mixin.h3.third') }}</h3>
          <p class="text-muted">{{ t('home.mixin.p.third') }}</p>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="row">
      <div class="col-4" v-for="product in products" :key="product.id">
        <b-card :key="product.id" :header="product.title" class="mb-4" footer-tag="footer">
          <p class="card-text">{{ product.description }}</p>
          <small slot="footer" class="text-muted">
            <span class="float-left">${{ product.price }}</span>
            <span class="float-right">{{ t('home.mixin.span.first') }} {{ product.user.name }}</span>
          </small>
        </b-card>
      </div>
    </div>

    <b-pagination size="sm" :total-rows="amountOfProducts" :per-page="6" v-model="currentPage"></b-pagination>
  </div>
</template>

<script>
import HomeMixin from './Home.mixin'

export default {
  mixins: [HomeMixin]
}
</script>
