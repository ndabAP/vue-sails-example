webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.$store.dispatch('getShopProducts', this.currentPage);
    this.$store.dispatch('getUser');
  },
  data: function data() {
    return {
      currentPage: 1
    };
  },


  i18n: {
    messages: {
      en: {
        'alert.first': 'Please notice that you cannot buy your own products.',
        'span.first': 'by',
        'button.first': 'Buy'
      },
      de: {
        'alert.first': 'Bitte nehme zur Kenntnis, dass deine eigenen Produkte nicht kaufbar sind.',
        'span.first': 'von',
        'button.first': 'Einkaufen'
      }
    }
  },

  watch: {
    currentPage: function currentPage() {
      this.$store.dispatch('getShopProducts', this.currentPage);
    }
  },

  computed: {
    products: function products() {
      return this.$store.state.products.products;
    },
    amountOfProducts: function amountOfProducts() {
      return this.$store.state.products.amountOfProducts;
    },
    user: function user() {
      return this.$store.state.user;
    }
  },

  methods: {
    pushToBasket: function pushToBasket(product) {
      this.$store.dispatch('pushToBasket', product);
    }
  }
});

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('b-alert', {
    attrs: {
      "variant": "info",
      "show": ""
    }
  }, [_vm._v("\n    " + _vm._s(_vm.$t('alert.first')) + "\n  ")]), _vm._v(" "), _c('div', {
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
    }, [_c('p', [_vm._v(_vm._s(product.description))]), _vm._v(" "), _c('b-button', {
      attrs: {
        "disabled": product.user.name === _vm.user.name,
        "variant": "outline-success",
        "size": "sm"
      },
      on: {
        "click": function($event) {
          _vm.pushToBasket(product)
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('button.first')) + "\n        ")]), _vm._v(" "), _c('small', {
      staticClass: "text-muted",
      slot: "footer"
    }, [_c('span', {
      staticClass: "float-left"
    }, [_vm._v("$" + _vm._s(product.price))]), _vm._v(" "), _c('span', {
      staticClass: "float-right"
    }, [_vm._v(_vm._s(_vm.$t('span.first')) + " " + _vm._s(product.user.name))])])], 1)], 1)
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

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(111),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=2.85f668d306c463e32593.js.map