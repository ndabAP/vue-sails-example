webpackJsonp([1],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Register__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Login__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_product_ProductIndex__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_product_ProductIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_product_ProductIndex__);







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home___default.a
  }, {
    path: '/register',
    name: 'Register',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Register___default.a
  }, {
    path: '/login',
    name: 'Login',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Login___default.a
  }, {
    path: '/products/index',
    name: 'Products/Index',
    component: __WEBPACK_IMPORTED_MODULE_5__components_product_ProductIndex___default.a
  }]
}));

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(77)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(93);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    products: [],
    isUserAuthenticated: false
  },

  mutations: {
    /**
    * @param state
    * @param products
    */
    SET_PRODUCTS (state, products) {
      state.products = products;
    },

    /**
    * @param state
    * @param isUserAuthenticated
    */
    SET_IS_USER_AUTHENTICATED (state, isUserAuthenticated) {
      state.isUserAuthenticated = isUserAuthenticated;
    }
  },

  actions: {
    /**
    * @param context
    */
    getProducts (context) {
      __WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.get('/api/products/get').then((response) => {
        context.commit('SET_PRODUCTS', response.body);
      }, (error) => {
        console.log(error);
      });
    },

    /**
    * @param context
    * @param isUserAuthenticated
    */
    setIsUserAuthenticated (context, isUserAuthenticated) {
      context.commit('SET_IS_USER_AUTHENTICATED', isUserAuthenticated);
    }
  }
}));


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  computed: {
    isUserAuthenticated: function isUserAuthenticated() {
      return this.$store.state.isUserAuthenticated;
    }
  }
});

/***/ }),

/***/ 52:
/***/ (function(module, exports) {



/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        email: '',
        name: ''
      }
    };
  },


  methods: {
    login: function login() {
      var _this = this;

      this.$http.post('/api/login/post', {
        email: this.form.email,
        name: this.form.name,
        noob: this.form.noob
      }).then(function (response) {
        _this.$store.dispatch('setIsUserAuthenticated', true);
        window.localStorage.setItem('token', response.body.token);

        _this.$message({
          message: 'Congrats, you are now logged in.',
          type: 'success'
        });

        _this.$router.push({
          name: 'Products/Index'
        });
      }, function (error) {
        if (error.status === 403) {
          _this.$message.error('Oops, wrong credentials.');
        } else {
          _this.$message.error('Oops, something went wrong.');
        }
      });
    }
  }
});

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        email: '',
        name: '',
        noob: true
      },
      rules: {
        email: [{
          required: true,
          message: 'Please enter your email address',
          trigger: 'blur'
        }, {
          type: 'email',
          message: 'Please enter a valid email address',
          trigger: 'change'
        }],
        name: [{
          required: true,
          message: 'Please enter your name',
          trigger: 'blur'
        }]
      }
    };
  },


  methods: {
    create: function create() {
      var _this = this;

      this.$refs.form.validate(function (valid) {
        if (valid) {
          _this.$http.post('/api/register/post', {
            email: _this.form.email,
            name: _this.form.name,
            noob: _this.form.noob
          }).then(function (response) {
            _this.$message({
              message: 'Congrats, you are now registered.',
              type: 'success'
            });
          }, function (error) {
            _this.$message.error('Oops, something went wrong.');
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        title: '',
        description: '',
        price: ''
      }
    };
  },


  methods: {
    create: function create() {
      var _this = this;

      this.$http.post('/api/product/post', {
        title: this.form.title,
        description: this.form.description,
        price: this.form.price
      }).then(function (response) {
        _this.$store.dispatch('getProducts');

        _this.$set(_this.form, 'title', '');
        _this.$set(_this.form, 'description', '');
        _this.$set(_this.form, 'price', '');

        _this.$message({
          message: 'Congrats, you have created a product.',
          type: 'success'
        });
      }, function (error) {
        _this.$message.error('Oops, something went wrong.');
      });
    }
  }
});

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductCreate__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductCreate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProductCreate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProductsGet__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProductsGet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ProductsGet__);





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ProductCreate: __WEBPACK_IMPORTED_MODULE_0__ProductCreate___default.a,
    ProductsGet: __WEBPACK_IMPORTED_MODULE_1__ProductsGet___default.a
  },

  data: function data() {
    return {
      defualtTab: 'create'
    };
  }
});

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isEditProductVisible: false,
      form: {
        id: '',
        title: '',
        description: '',
        price: ''
      }
    };
  },
  created: function created() {
    this.$store.dispatch('getProducts');
  },


  computed: {
    products: function products() {
      return this.$store.state.products;
    }
  },

  methods: {
    showPatchForm: function showPatchForm(id) {
      var _this = this;

      this.$http.get('/api/product/get', {
        params: {
          id: id
        }
      }).then(function (response) {
        var product = response.body;

        _this.form.title = product.title;
        _this.form.price = product.price;
        _this.form.description = product.description;
        _this.form.id = product.id;

        _this.$set(_this, 'isEditProductVisible', true);
      }, function (error) {
        _this.$message.error('Oops, something went wrong.');
      });
    },
    patch: function patch() {
      var _this2 = this;

      this.$http.patch('/api/product/patch', {
        id: this.form.id,
        title: this.form.title,
        price: this.form.price,
        description: this.form.description
      }).then(function (response) {
        _this2.$message({
          message: 'Congrats, you have updated a product.',
          type: 'success'
        });

        _this2.$store.dispatch('getProducts');
        _this2.$set(_this2, 'isEditProductVisible', false);
      }, function (error) {
        _this2.$message.error('Oops, something went wrong.');
      });
    },
    remove: function remove(id) {
      var _this3 = this;

      this.$http.delete('/api/product/remove', {
        params: {
          id: id
        }
      }).then(function (response) {
        _this3.$message({
          message: 'Congrats, you have deleted a product.',
          type: 'success'
        });

        _this3.$store.dispatch('getProducts');
      }, function (error) {
        _this3.$message.error('Oops, something went wrong.');
      });
    }
  }
});

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_resource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_theme_default_index_css__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_element_ui_lib_theme_default_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_index__ = __webpack_require__(28);








__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.interceptors.push(function (request, next) {
  if (request.url !== '/api/login/post') {
    var token = window.localStorage.getItem('token');
    request.headers.set('token', token);
  }

  next(function (response) {
    if (response.status === 500) {
      __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */].push({
        name: 'Home'
      });
    }
  });
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_6__state_index__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  template: '<App/>',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_2__App___default.a
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(76)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(84),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(86),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(88),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(87),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(90),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(89),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 10,
      "offset": 6
    }
  }, [_c('h1', [_vm._v("Home")]), _vm._v(" "), _c('p', [_vm._v("Hey, you!.")])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('el-menu', {
    attrs: {
      "theme": "dark",
      "mode": "horizontal",
      "router": true
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/"
    }
  }, [_vm._v("Home")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/register"
    }
  }, [_vm._v("Register")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/login"
    }
  }, [_vm._v("Login")]), _vm._v(" "), (_vm.isUserAuthenticated) ? _c('el-menu-item', {
    attrs: {
      "index": "/products/index"
    }
  }, [_vm._v("Products\n        ")]) : _vm._e()], 1), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 8,
      "offset": 6
    }
  }, [_c('h1', [_vm._v("Login")]), _vm._v(" "), _c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "E-Mail"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.email),
      callback: function($$v) {
        _vm.form.email = $$v
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Name"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.form.name = $$v
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('el-button', [_vm._v("Cancel")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "120px"
    }
  }, [_c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Title"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.title),
      callback: function($$v) {
        _vm.form.title = $$v
      },
      expression: "form.title"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Price"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.price),
      callback: function($$v) {
        _vm.form.price = $$v
      },
      expression: "form.price"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Description"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.form.description),
      callback: function($$v) {
        _vm.form.description = $$v
      },
      expression: "form.description"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.create
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('el-button', [_vm._v("Cancel")])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 8,
      "offset": 6
    }
  }, [_c('h1', [_vm._v("Register")]), _vm._v(" "), _c('el-form', {
    ref: "form",
    attrs: {
      "rules": _vm.rules,
      "model": _vm.form,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "E-Mail",
      "prop": "email"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.email),
      callback: function($$v) {
        _vm.form.email = $$v
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Name",
      "prop": "name"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.form.name = $$v
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Noob",
      "prop": "noob"
    }
  }, [_c('el-switch', {
    model: {
      value: (_vm.form.noob),
      callback: function($$v) {
        _vm.form.noob = $$v
      },
      expression: "form.noob"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.create
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('el-button', [_vm._v("Cancel")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-dialog', {
    attrs: {
      "title": "Patch product",
      "size": "large"
    },
    model: {
      value: (_vm.isEditProductVisible),
      callback: function($$v) {
        _vm.isEditProductVisible = $$v
      },
      expression: "isEditProductVisible"
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "120px"
    }
  }, [_c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Title"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.title),
      callback: function($$v) {
        _vm.form.title = $$v
      },
      expression: "form.title"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Price"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.price),
      callback: function($$v) {
        _vm.form.price = $$v
      },
      expression: "form.price"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Description"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.form.description),
      callback: function($$v) {
        _vm.form.description = $$v
      },
      expression: "form.description"
    }
  })], 1)], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.isEditProductVisible = false
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.patch
    }
  }, [_vm._v("Patch")])], 1)], 1), _vm._v(" "), (_vm.products.length > 0) ? _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.products
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "Title"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "description",
      "label": "Title"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "price",
      "label": "Price"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "fixed": "right",
      "label": "Operations",
      "width": "120"
    },
    scopedSlots: _vm._u([
      ["default", function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          nativeOn: {
            "click": function($event) {
              $event.preventDefault();
              _vm.showPatchForm(scope.row.id)
            }
          }
        }, [_vm._v("\n             Edit\n            ")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          nativeOn: {
            "click": function($event) {
              $event.preventDefault();
              _vm.remove(scope.row.id)
            }
          }
        }, [_vm._v("\n               Remove\n              ")])]
      }]
    ])
  })], 1) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 12,
      "offset": 6
    }
  }, [_c('br'), _vm._v(" "), _c('el-tabs', {
    model: {
      value: (_vm.defualtTab),
      callback: function($$v) {
        _vm.defualtTab = $$v
      },
      expression: "defualtTab"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "Get products",
      "name": "get"
    }
  }, [_c('products-get')], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "Create product",
      "name": "create"
    }
  }, [_c('product-create')], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[58]);
//# sourceMappingURL=app.63233cacc064af526c83.js.map