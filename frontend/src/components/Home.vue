<template>
  <div>
    <div class="row">
      <div class="col">
        <b-carousel :interval="3000" background="transparent">
          <b-carousel-slide background="transparent" height="150px">
            <h3 class="text-info">{{ $t('h3.first') }}</h3>
            <p class="text-muted">{{ $t('p.first') }}</p>
          </b-carousel-slide>

          <b-carousel-slide background="transparent" height="150px">
            <h3 class="text-success">{{ $t('h3.second') }}</h3>
            <p class="text-muted">{{ $t('p.second') }}</p>
          </b-carousel-slide>

          <b-carousel-slide background="transparent" height="150px">
            <h3 class="text-primary">{{ $t('h3.third') }}</h3>
            <p class="text-muted">{{ $t('p.third') }}</p>
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
            <span class="float-right">{{ $t('span.first') }} {{ product.user.name }}</span>
          </small>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('getProducts')
    },

    i18n: {
      messages: {
        en: {
          'h3.first': 'Many products',
          'h3.second': 'Cheap products',
          'h3.third': 'Buy fast',
          'p.first': 'Our users offer many products.',
          'p.second': 'The products here are very cheap.',
          'p.third': 'Buy fast and easy here.',
          'span.first': 'by'
        },
        de: {
          'h3.first': 'Viele Produkte',
          'h3.second': 'Günstige Produkte',
          'h3.third': 'Kaufe schnell',
          'p.first': 'Unsere Kunden bieten viele Produkte.',
          'p.second': 'Die Produkte sind sehr günstig hier.',
          'p.third': 'Kaufe hier schnell und einfach.',
          'span.first': 'von'
        }
      }
    },

    computed: {
      products () {
        return this.$store.state.products
      }
    }
  }
</script>
