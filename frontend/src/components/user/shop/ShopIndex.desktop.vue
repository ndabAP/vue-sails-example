<template>
  <div>
    <b-alert variant="info" show>
      {{ t('shopindex.mixin.alert.first') }}
    </b-alert>
    <div class="row">
      <div class="col-4" v-for="product in products" :key="product.id">
        <b-card :key="product.id"
                :header="product.title"
                class="mb-4"
                show-footer>
          <p>{{ product.description }}</p>
          <b-button :disabled="product.user.name === user.name"
                    @click="pushToBasket(product)"
                    variant="outline-success"
                    size="sm">{{ t('shopindex.mixin.button.first') }}
          </b-button>
          <small slot="footer" class="text-muted">
            <span class="float-left">${{ product.price }}</span>
            <span class="float-right">{{ t('shopindex.mixin.span.first') }} {{ product.user.name }}</span>
          </small>
        </b-card>
      </div>
    </div>

    <b-pagination size="sm" :total-rows="amountOfProducts" :per-page="6" v-model="currentPage"></b-pagination>
  </div>
</template>

<script>
import ShopIndexMixin from './ShopIndex.mixin'

export default {
  mixins: [ShopIndexMixin]
}
</script>
