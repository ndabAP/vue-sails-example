webpackJsonp([0],{

/***/ 105:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col"
  }, [_c('b-carousel', {
    attrs: {
      "interval": 3000,
      "background": "transparent"
    }
  }, [_c('b-carousel-slide', {
    attrs: {
      "background": "transparent",
      "height": "150px"
    }
  }, [_c('h3', {
    staticClass: "text-info"
  }, [_vm._v(_vm._s(_vm.$t('h3.first')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('p.first')))])]), _vm._v(" "), _c('b-carousel-slide', {
    attrs: {
      "background": "transparent",
      "height": "150px"
    }
  }, [_c('h3', {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.$t('h3.second')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('p.second')))])]), _vm._v(" "), _c('b-carousel-slide', {
    attrs: {
      "background": "transparent",
      "height": "150px"
    }
  }, [_c('h3', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.$t('h3.third')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('p.third')))])])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, _vm._l((_vm.products), function(product) {
    return _c('div', {
      staticClass: "col-4"
    }, [_c('b-card', {
      key: product.id,
      staticClass: "mb-4",
      attrs: {
        "header": product.title,
        "show-footer": ""
      }
    }, [_c('p', [_vm._v(_vm._s(product.description))]), _vm._v(" "), _c('small', {
      staticClass: "text-muted",
      slot: "footer"
    }, [_c('span', {
      staticClass: "float-left"
    }, [_vm._v("$" + _vm._s(product.price))]), _vm._v(" "), _c('span', {
      staticClass: "float-right"
    }, [_vm._v(_vm._s(_vm.$t('span.first')) + " " + _vm._s(product.user.name))])])])], 1)
  })), _vm._v(" "), _c('b-pagination', {
    attrs: {
      "size": "sm",
      "total-rows": _vm.amountOfProducts,
      "per-page": 6
    },
    model: {
      value: (_vm.currentPage),
      callback: function($$v) {
        _vm.currentPage = $$v
      },
      expression: "currentPage"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.$store.dispatch('getProducts', this.currentPage);
  },
  data: function data() {
    return {
      currentPage: 1
    };
  },


  watch: {
    currentPage: function currentPage() {
      this.$store.dispatch('getProducts', this.currentPage);
    }
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
    products: function products() {
      return this.$store.state.products.products;
    },
    amountOfProducts: function amountOfProducts() {
      return this.$store.state.products.amountOfProducts;
    }
  }
});

/***/ })

});
//# sourceMappingURL=0.7c2263d506a097f5ba73.js.map