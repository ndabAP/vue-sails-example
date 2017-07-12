webpackJsonp([1],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(114),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(109),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(115),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-8"
  }, [_c('b-form-fieldset', {
    attrs: {
      "description": _vm.$t('description.first'),
      "label": _vm.$t('label.first'),
      "label-size": 1
    }
  }, [_c('b-form-input', {
    model: {
      value: (_vm.title),
      callback: function($$v) {
        _vm.title = $$v
      },
      expression: "title"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('b-form-fieldset', {
    attrs: {
      "description": _vm.$t('description.second'),
      "label": _vm.$t('label.second'),
      "label-size": 1
    }
  }, [_c('b-form-input', {
    model: {
      value: (_vm.price),
      callback: function($$v) {
        _vm.price = $$v
      },
      expression: "price"
    }
  })], 1)], 1)]), _vm._v(" "), _c('b-form-fieldset', {
    attrs: {
      "description": _vm.$t('description.third'),
      "label": _vm.$t('label.third'),
      "label-size": 1
    }
  }, [_c('b-form-input', {
    attrs: {
      "textarea": ""
    },
    model: {
      value: (_vm.description),
      callback: function($$v) {
        _vm.description = $$v
      },
      expression: "description"
    }
  })], 1), _vm._v(" "), _c('b-button', {
    attrs: {
      "size": "sm",
      "variant": "outline-success"
    },
    on: {
      "click": _vm.create
    }
  }, [_vm._v(_vm._s(_vm.$t('button.first')))])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isEditProductVisible) ? _c('product-patch', {
    attrs: {
      "id": _vm.id
    }
  }) : _vm._e(), _vm._v(" "), (_vm.products.length > 0) ? _c('b-table', {
    attrs: {
      "items": _vm.products,
      "fields": _vm.fields
    },
    scopedSlots: _vm._u([
      ["price", function(item) {
        return [_vm._v("\n      $" + _vm._s(item.item.price) + "\n    ")]
      }],
      ["actions", function(item) {
        return [_c('b-button', {
          attrs: {
            "size": "sm",
            "variant": "outline-primary"
          },
          on: {
            "click": function($event) {
              _vm.showPatchForm(item.item.id)
            }
          }
        }, [_vm._v(_vm._s(_vm.$t('button.first')) + "\n      ")]), _vm._v(" "), _c('b-button', {
          attrs: {
            "size": "sm",
            "variant": "outline-warning"
          },
          on: {
            "click": function($event) {
              _vm.remove(item.item.id)
            }
          }
        }, [_vm._v(_vm._s(_vm.$t('button.second')))])]
      }]
    ])
  }) : _c('p', [_vm._v("No products yet, you should create one.")])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('b-modal', {
    attrs: {
      "size": "lg",
      "id": "patch-product"
    }
  }, [_c('template', {
    slot: "modal-title"
  }, [_vm._v(_vm._s(_vm.$t('template.first.title')))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-8"
  }, [_c('b-form-fieldset', {
    attrs: {
      "description": _vm.$t('description.first'),
      "label": _vm.$t('label.first'),
      "label-size": 1
    }
  }, [_c('b-form-input', {
    model: {
      value: (_vm.title),
      callback: function($$v) {
        _vm.title = $$v
      },
      expression: "title"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('b-form-fieldset', {
    attrs: {
      "description": _vm.$t('description.second'),
      "label": _vm.$t('label.second'),
      "label-size": 1
    }
  }, [_c('b-form-input', {
    model: {
      value: (_vm.price),
      callback: function($$v) {
        _vm.price = $$v
      },
      expression: "price"
    }
  })], 1)], 1)]), _vm._v(" "), _c('b-form-fieldset', {
    attrs: {
      "description": _vm.$t('description.third'),
      "label": _vm.$t('label.third'),
      "label-size": 1
    }
  }, [_c('b-form-input', {
    attrs: {
      "textarea": ""
    },
    model: {
      value: (_vm.description),
      callback: function($$v) {
        _vm.description = $$v
      },
      expression: "description"
    }
  })], 1), _vm._v(" "), _c('template', {
    slot: "modal-footer"
  }, [_c('b-button', {
    attrs: {
      "size": "sm",
      "variant": "outline-primary"
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.$t('button.first')))]), _vm._v(" "), _c('b-button', {
    attrs: {
      "size": "sm",
      "variant": "outline-success"
    },
    on: {
      "click": _vm.patchProduct
    }
  }, [_vm._v(_vm._s(_vm.$t('button.second')))])], 1)], 2)
},staticRenderFns: []}

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col"
  }, [_c('b-card', {
    attrs: {
      "no-block": ""
    }
  }, [_c('b-tabs', {
    ref: "tabs",
    attrs: {
      "card": ""
    }
  }, [_c('b-tab', {
    attrs: {
      "title": _vm.$t('tab.first')
    }
  }, [_c('products-get', {
    attrs: {
      "keep-alive": ""
    }
  })], 1), _vm._v(" "), _c('b-tab', {
    attrs: {
      "title": _vm.$t('tab.second')
    }
  }, [_c('product-create', {
    attrs: {
      "keep-alive": ""
    }
  })], 1)], 1)], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(97),
  /* template */
  __webpack_require__(117),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_ProductPatch__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_ProductPatch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__product_ProductPatch__);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ProductPatch: __WEBPACK_IMPORTED_MODULE_0__product_ProductPatch___default.a
  },

  data: function data() {
    return {
      id: ''
    };
  },
  created: function created() {
    this.$store.dispatch('getProductsByUser', this.user);
  },


  i18n: {
    messages: {
      en: {
        'field.first': 'Title',
        'field.second': 'Description',
        'field.third': 'Price',
        'field.fourth': 'Actions',
        'button.first': 'Patch',
        'button.second': 'Remove'
      },
      de: {
        'field.first': 'Titel',
        'field.second': 'Beschreibung',
        'field.third': 'Preis',
        'field.fourth': 'Aktionen',
        'button.first': 'Bearbeiten',
        'button.second': 'Entfernen'
      }
    }
  },

  computed: {
    fields: function fields() {
      return {
        title: {
          label: this.$t('field.first')
        },
        description: {
          label: this.$t('field.second')
        },
        price: {
          label: this.$t('field.third')
        },
        actions: {
          label: this.$t('field.fourth')
        }
      };
    },


    products: {
      get: function get() {
        return this.$store.state.products;
      }
    },

    user: {
      get: function get() {
        return this.$store.state.user;
      }
    },

    isEditProductVisible: {
      get: function get() {
        return this.$store.state.product.meta.isEditProductVisible;
      },
      set: function set(isEditProductVisible) {
        this.$store.commit('SET_IS_EDIT_PRODUCT_VISIBLE', isEditProductVisible);
      }
    }
  },

  methods: {
    showPatchForm: function showPatchForm(id) {
      this.$set(this, 'id', id);
      this.$store.commit('SET_IS_EDIT_PRODUCT_VISIBLE', true);
    },
    remove: function remove(id) {
      var _this = this;

      this.$http.delete('/api/user/product/remove', {
        params: {
          id: id
        }
      }).then(function () {

        _this.$store.dispatch('getProductsByUser', _this.user);
      }, function () {});
    }
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  i18n: {
    messages: {
      en: {
        'description.first': 'Define a title',
        'label.first': 'Title',
        'description.second': 'Define a price',
        'label.second': 'Price',
        'description.third': 'Define a description',
        'label.third': 'Description',
        'button.first': 'Create'
      },
      de: {
        'description.first': 'Definiere einen Titel',
        'label.first': 'Titel',
        'description.second': 'Definiere einen Preis',
        'label.second': 'Preis',
        'description.third': 'Definiere eine Beschreibung',
        'label.third': 'Beschreibung',
        'button.first': 'Erstellen'
      }
    }
  },

  created: function created() {
    this.$store.commit('RESET_PRODUCT');
  },


  computed: {
    product: {
      get: function get() {
        return this.$store.state.product;
      }
    },

    user: {
      get: function get() {
        return this.$store.state.user;
      }
    },

    title: {
      get: function get() {
        return this.$store.state.product.title;
      },
      set: function set(title) {
        this.$store.commit('SET_PRODUCT_TITLE', title);
      }
    },

    description: {
      get: function get() {
        return this.$store.state.product.description;
      },
      set: function set(description) {
        this.$store.commit('SET_PRODUCT_DESCRIPTION', description);
      }
    },

    price: {
      get: function get() {
        return this.$store.state.product.price;
      },
      set: function set(price) {
        this.$store.commit('SET_PRODUCT_PRICE', price);
      }
    }
  },

  methods: {
    create: function create() {
      var _this = this;

      this.$store.dispatch('saveProduct', {
        product: this.product,
        user: this.user
      }).then(function () {

        _this.$store.dispatch('getProductsByUser', _this.user);
      }, function (error) {
        console.error(error);
      });
    }
  }
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductCreate__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductCreate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProductCreate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProductsGet__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProductsGet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ProductsGet__);





/* harmony default export */ __webpack_exports__["default"] = ({
  i18n: {
    messages: {
      en: {
        'tab.first': 'Get products',
        'tab.second': 'Create product'
      },
      de: {
        'tab.first': 'Hole Produkte',
        'tab.second': 'Erstelle Produkt'
      }
    }
  },

  components: {
    ProductCreate: __WEBPACK_IMPORTED_MODULE_0__ProductCreate___default.a,
    ProductsGet: __WEBPACK_IMPORTED_MODULE_1__ProductsGet___default.a
  }
});

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],

  i18n: {
    messages: {
      en: {
        'template.first.title': 'Patch product',
        'description.first': 'Define a title',
        'label.first': 'Title',
        'description.second': 'Define a price',
        'label.second': 'Price',
        'description.third': 'Define a description',
        'label.third': 'Description',
        'button.first': 'Cancel',
        'button.second': 'Patch'
      },
      de: {
        'template.first.title': 'Bearbeite Produkt',
        'description.first': 'Definiere einen Titel',
        'label.first': 'Titel',
        'description.second': 'Definiere einen Preis',
        'label.second': 'Preis',
        'description.third': 'Definiere eine Beschreibung',
        'label.third': 'Beschreibung',
        'button.first': 'Abbrechen',
        'button.second': 'Speichern'
      }
    }
  },

  created: function created() {
    var _this = this;

    var id = this.id;

    this.$http.get('/api/user/product/get', {
      params: {
        id: id
      }
    }).then(function (response) {
      _this.$root.$emit('show::modal', 'patch-product');
      var product = response.body;

      _this.$store.commit('SET_PRODUCT_TITLE', product.title);
      _this.$store.commit('SET_PRODUCT_DESCRIPTION', product.description);
      _this.$store.commit('SET_PRODUCT_PRICE', product.price);
    }, function () {});
  },


  computed: {
    user: {
      get: function get() {
        return this.$store.state.user;
      }
    },

    title: {
      get: function get() {
        return this.$store.state.product.title;
      },
      set: function set(title) {
        this.$store.commit('SET_PRODUCT_TITLE', title);
      }
    },

    description: {
      get: function get() {
        return this.$store.state.product.description;
      },
      set: function set(description) {
        this.$store.commit('SET_PRODUCT_DESCRIPTION', description);
      }
    },

    price: {
      get: function get() {
        return this.$store.state.product.price;
      },
      set: function set(price) {
        this.$store.commit('SET_PRODUCT_PRICE', price);
      }
    },

    isEditProductVisible: {
      get: function get() {
        return this.$store.state.product.meta.isEditProductVisible;
      },
      set: function set(isEditProductVisible) {
        this.$store.commit('SET_IS_EDIT_PRODUCT_VISIBLE', isEditProductVisible);
      }
    }
  },

  methods: {
    patchProduct: function patchProduct() {
      var _this2 = this;

      this.$http.patch('/api/user/product/patch', {
        id: this.id,
        title: this.title,
        price: this.price,
        description: this.description
      }).then(function () {

        _this2.$store.dispatch('getProductsByUser', _this2.user);
        _this2.$store.commit('SET_IS_EDIT_PRODUCT_VISIBLE', false);
        _this2.$store.commit('RESET_PRODUCT');
      }, function () {});
    },
    cancel: function cancel() {
      this.$store.commit('SET_IS_EDIT_PRODUCT_VISIBLE', false);
      this.$root.$emit('hide::modal', 'patch-product');
    }
  },

  destroyed: function destroyed() {
    this.$root.$emit('hide::modal', 'patch-product');
    this.$store.commit('RESET_PRODUCT');
  }
});

/***/ })

});
//# sourceMappingURL=1.dbd75fed53da0e876518.js.map