webpackJsonp([3],{

/***/ 107:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row justify-content-md-center"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('div', {
    staticClass: "card mb-2"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_vm._l((_vm.basket.products), function(product) {
    return _c('div', [_c('p', [_c('b', [_vm._v(_vm._s(product.title))]), _vm._v(" "), _c('span', {
      staticClass: "float-right"
    }, [_c('small', {
      staticClass: "text-muted"
    }, [_vm._v("$" + _vm._s(product.price))])])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(product.description))]), _vm._v(" "), _c('b-button', {
      attrs: {
        "size": "sm",
        "variant": "outline-danger"
      },
      on: {
        "click": function($event) {
          _vm.removeProduct(product.id)
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('button.first')) + "\n          ")]), _vm._v(" "), _c('hr')], 1)
  }), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "float-left"
  }, [_vm._v(_vm._s(_vm.$t('span.first')))]), _vm._v(" "), _c('span', {
    staticClass: "float-right"
  }, [_c('b', [_vm._v("$" + _vm._s(_vm.totalPrice))])])])], 2)])])])
},staticRenderFns: []}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  i18n: {
    messages: {
      en: {
        'button.first': 'Remove',
        'span.first': 'Total'
      },
      de: {
        'button.first': 'Entfernen',
        'span.first': 'Summe'
      }
    }
  },

  computed: {
    basket: {
      get: function get() {
        return this.$store.state.basket;
      }
    },

    totalPrice: function totalPrice() {
      var totalPrice = 0;
      this.basket.products.forEach(function (product) {
        totalPrice += product.price;
      });

      return Math.round(totalPrice * 100) / 100;
    }
  },

  methods: {
    checkout: function checkout() {
      this.$store.dispatch('checkout', this.basket).then(function () {});
    },
    removeProduct: function removeProduct(productId) {
      this.$store.dispatch('removeProductFromBasket', productId);
    }
  }
});

/***/ })

});
//# sourceMappingURL=3.10720444e7a3ed21f0d0.js.map