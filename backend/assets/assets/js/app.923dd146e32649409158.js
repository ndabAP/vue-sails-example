webpackJsonp([7], {

  /***/ 32: /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(12)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(80)

    __WEBPACK_IMPORTED_MODULE_0_vue__['a' /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__['a' /* default */])

    /* harmony default export */
    __webpack_exports__['a'] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__['a' /* default */]({
      mode: 'history',
      routes: [{
        path: '/',
        name: 'Home',
        component: function component (resolve) {
          __webpack_require__.e/* require */(0).then(function () {
            var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(41)];
            (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__))
          }.bind(this)).catch(__webpack_require__.oe)
        }
      }, {
        path: '/register',
        name: 'Register',
        component: function component (resolve) {
          __webpack_require__.e/* require */(4).then(function () {
            var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(86)];
            (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__))
          }.bind(this)).catch(__webpack_require__.oe)
        }
      }, {
        path: '/login',
        name: 'Login',
        component: function component (resolve) {
          __webpack_require__.e/* require */(5).then(function () {
            var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(85)];
            (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__))
          }.bind(this)).catch(__webpack_require__.oe)
        }
      }, {
        path: '/user/products/index',
        name: 'Products',
        component: function component (resolve) {
          __webpack_require__.e/* require */(1).then(function () {
            var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(87)];
            (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__))
          }.bind(this)).catch(__webpack_require__.oe)
        },
        meta: {
          userOnly: true
        }
      }, {
        path: '/shop/index',
        name: 'Shop',
        component: function component (resolve) {
          __webpack_require__.e/* require */(2).then(function () {
            var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(89)];
            (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__))
          }.bind(this)).catch(__webpack_require__.oe)
        },
        meta: {
          userOnly: true
        }
      }, {
        path: '/shop/basket/index',
        name: 'Basket',
        component: function component (resolve) {
          __webpack_require__.e/* require */(3).then(function () {
            var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(88)];
            (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__))
          }.bind(this)).catch(__webpack_require__.oe)
        },
        meta: {
          userOnly: true
        }
      }, {
        path: '*',
        component: function component (resolve) {
          __webpack_require__.e/* require */(0/* duplicate */).then(function () {
            var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(41)];
            (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__))
          }.bind(this)).catch(__webpack_require__.oe)
        }
      }]
    }))

    /***/
  }),

  /***/ 33: /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(44)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(12)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(82)

    __WEBPACK_IMPORTED_MODULE_1_vue__['a' /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vuex__['a' /* default */])

    var getCookie = function getCookie (name) {
      var a = ('; ' + document.cookie).match(';\\s*' + name + '=([^;]+)')
      return a ? a[1] : ''
    }

    /* harmony default export */
    __webpack_exports__['a'] = (new __WEBPACK_IMPORTED_MODULE_2_vuex__['a' /* default */].Store({
      state: {
        locale: 'en',
        user: {
          id: '',
          name: '',
          password: ''
        },
        product: {
          title: '',
          description: '',
          price: '',
          meta: {
            isEditProductVisible: false
          }
        },
        products: [],
        basket: {
          products: []
        },
        isUserAuthenticated: !!getCookie('user')
      },

      mutations: {
        SET_LOCALE: function SET_LOCALE (state, locale) {
          state.locale = locale
        },
        SET_USER: function SET_USER (state, user) {
          state.user = user
        },
        SET_PRODUCTS: function SET_PRODUCTS (state, products) {
          state.products = products
        },
        SET_IS_USER_AUTHENTICATED: function SET_IS_USER_AUTHENTICATED (state, isUserAuthenticated) {
          state.isUserAuthenticated = isUserAuthenticated
        },
        SET_USER_NAME: function SET_USER_NAME (state, name) {
          state.user.name = name
        },
        SET_USER_PASSWORD: function SET_USER_PASSWORD (state, password) {
          state.user.password = password
        },
        RESET_USER: function RESET_USER (state) {
          state.user.name = ''
          state.user.password = ''
        },
        SET_PRODUCT_TITLE: function SET_PRODUCT_TITLE (state, title) {
          state.product.title = title
        },
        SET_PRODUCT_DESCRIPTION: function SET_PRODUCT_DESCRIPTION (state, description) {
          state.product.description = description
        },
        SET_PRODUCT_PRICE: function SET_PRODUCT_PRICE (state, price) {
          state.product.price = price
        },
        SET_IS_EDIT_PRODUCT_VISIBLE: function SET_IS_EDIT_PRODUCT_VISIBLE (state, isEditProductVisible) {
          state.product.meta.isEditProductVisible = isEditProductVisible
        },
        RESET_PRODUCT: function RESET_PRODUCT (state) {
          state.product.title = ''
          state.product.description = ''
          state.product.price = ''
        },
        PUSH_TO_BASKET: function PUSH_TO_BASKET (state, product) {
          state.basket.products.push(product)
        },
        REMOVE_PRODUCT_FROM_BASKET: function REMOVE_PRODUCT_FROM_BASKET (state, productId) {
          state.basket.products.forEach(function (product, index) {
            if (productId === product.id) state.basket.products.splice(index, 1)
          })
        },
        CHECKOUT: function CHECKOUT (state) {},
        RESET_BASKET: function RESET_BASKET (state) {
          state.basket = {
            id: Math.random().toString(36).substr(2, 10),
            products: []
          }
        }
      },

      actions: {
        setLocale: function setLocale (context, locale) {
          context.commit('SET_LOCALE', locale)
        },
        getUser: function getUser (context) {
          __WEBPACK_IMPORTED_MODULE_1_vue__['a' /* default */].http.get('/api/user/get').then(function (response) {
            context.commit('SET_USER', response.body)
          }, function (error) {
            console.log(error)
          })
        },
        getProducts: function getProducts (context) {
          __WEBPACK_IMPORTED_MODULE_1_vue__['a' /* default */].http.get('/api/products/get').then(function (response) {
            context.commit('SET_PRODUCTS', response.body)
          }, function (error) {
            console.log(error)
          })
        },
        getProductsByUser: function getProductsByUser (context, user) {
          __WEBPACK_IMPORTED_MODULE_1_vue__['a' /* default */].http.get('/api/user/products/get').then(function (response) {
            context.commit('SET_PRODUCTS', response.body)
          }, function (error) {
            console.log(error)
          })
        },
        setIsUserAuthenticated: function setIsUserAuthenticated (context, isUserAuthenticated) {
          context.commit('SET_IS_USER_AUTHENTICATED', isUserAuthenticated)
        },
        setUserName: function setUserName (context, name) {
          context.commit('SET_USER_NAME', name)
        },
        setUserPassword: function setUserPassword (context, password) {
          context.commit('SET_USER_PASSWORD', password)
        },
        saveUser: function saveUser (context, user) {
          __WEBPACK_IMPORTED_MODULE_1_vue__['a' /* default */].http.post('/api/register/post', {
            name: user.name,
            password: user.password
          }).then(function (response) {
            context.commit('RESET_USER')
          }).catch(function (error) {
            console.log(error)
          })
        },
        setProductTitle: function setProductTitle (context, title) {
          context.commit('SET_PRODUCT_TITLE', title)
        },
        setProductDescription: function setProductDescription (context, description) {
          context.commit('SET_PRODUCT_DESCRIPTION', description)
        },
        setProductPrice: function setProductPrice (context, price) {
          context.commit('SET_PRODUCT_PRICE', price)
        },
        setIsEditProductVisible: function setIsEditProductVisible (context, isEditProductVisible) {
          context.commit('SET_IS_EDIT_PRODUCT_VISIBLE', isEditProductVisible)
        },
        saveProduct: function saveProduct (context, parameters) {
          return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_vue__['a' /* default */].http.post('/api/user/product/post', {
              title: parameters.product.title,
              description: parameters.product.description,
              price: parameters.product.price
            }).then(function () {
              context.commit('RESET_PRODUCT')
              resolve()
            }, function (error) {
              reject(error)
            })
          })
        },
        resetProduct: function resetProduct (context) {
          context.commit('RESET_PRODUCT')
        },
        removeProductFromBasket: function removeProductFromBasket (context, productId) {
          context.commit('REMOVE_PRODUCT_FROM_BASKET', productId)
        },
        pushToBasket: function pushToBasket (context, product) {
          context.commit('PUSH_TO_BASKET', product)
        },
        checkout: function checkout (context, basket) {
          return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_vue__['a' /* default */].http.post('/api/user/basket/post', {
              products: basket.products
            }).then(function () {
              context.commit('RESET_BASKET')
              resolve()
            }, function (error) {
              reject(error)
            })
          })
        },
        resetBasket: function resetBasket (context) {
          context.commit('RESET_BASKET')
        }
      }
    }))

    /***/
  }),

  /***/ 35: /***/ (function (module, exports) {

// removed by extract-text-webpack-plugin

    /***/
  }),

  /***/ 36: /***/ (function (module, exports) {

// removed by extract-text-webpack-plugin

    /***/
  }),

  /***/ 38: /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(40)(
      /* script */
      __webpack_require__(43),
      /* template */
      __webpack_require__(79),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),

  /***/ 42: /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(12)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(39)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(38)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(32)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_4__state_index__ = __webpack_require__(33)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_5_bootstrap_vue__ = __webpack_require__(34)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(36)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_7_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__(35)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_7_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bootstrap_vue_dist_bootstrap_vue_css__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_8_vue_i18n__ = __webpack_require__(37)

    __WEBPACK_IMPORTED_MODULE_0_vue__['a' /* default */].use(__WEBPACK_IMPORTED_MODULE_8_vue_i18n__['a' /* default */])

    var i18n = new __WEBPACK_IMPORTED_MODULE_8_vue_i18n__['a' /* default */]({
      locale: 'en'
    })

    __WEBPACK_IMPORTED_MODULE_0_vue__['a' /* default */].use(__WEBPACK_IMPORTED_MODULE_5_bootstrap_vue__['a' /* default */])
    __WEBPACK_IMPORTED_MODULE_0_vue__['a' /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__['a' /* default */])

    __WEBPACK_IMPORTED_MODULE_0_vue__['a' /* default */].http.interceptors.push(function (request, next) {
      if (request.url !== '/api/login/post') {
        var token = window.localStorage.getItem('token')
        request.headers.set('token', token)
      }

      next(function (response) {
        if (response.status === 404 || response.status === 504) {
          __WEBPACK_IMPORTED_MODULE_3__router__['a' /* default */].push({
            name: 'Home'
          })
        }
      })
    })

    __WEBPACK_IMPORTED_MODULE_3__router__['a' /* default */].beforeEach(function (to, from, next) {
      if (to.matched.some(function (record) {
          return record.meta.userOnly
        })) {
        var getCookie = function getCookie (name) {
          var a = ('; ' + document.cookie).match(';\\s*' + name + '=([^;]+)')
          return a ? a[1] : ''
        }

        if (getCookie('user')) {
          next()
        } else {
          __WEBPACK_IMPORTED_MODULE_3__router__['a' /* default */].push({
            name: 'Login'
          })
        }
      } else {
        next()
      }
    })

    var LocaleMixin = {
      computed: {
        locale: function locale () {
          return this.$store.state.locale
        }
      },

      watch: {
        locale: function locale () {
          this.$i18n.locale = this.locale
        }
      }
    }

    new __WEBPACK_IMPORTED_MODULE_0_vue__['a' /* default */]({
      el: '#app',
      store: __WEBPACK_IMPORTED_MODULE_4__state_index__['a' /* default */],
      router: __WEBPACK_IMPORTED_MODULE_3__router__['a' /* default */],
      i18n: i18n,
      template: '<App/>',
      mixins: [LocaleMixin],
      components: {
        App: __WEBPACK_IMPORTED_MODULE_2__App___default.a
      }
    })

    /***/
  }),

  /***/ 43: /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})

    /* harmony default export */
    __webpack_exports__['default'] = ({
      name: 'app',

      i18n: {
        messages: {
          en: {
            'home': 'Home',
            'register': 'Register',
            'login': 'Login',
            'shop': 'Shop',
            'basket': 'Basket',
            'products': 'Manage products'

          },
          de: {
            'home': 'Startseite',
            'register': 'Registrierung',
            'login': 'Login',
            'shop': 'Shop',
            'basket': 'Warenkorb',
            'products': 'Produktverwaltung'

          }
        }
      },

      computed: {
        isUserAuthenticated: function isUserAuthenticated () {
          return this.$store.state.isUserAuthenticated
        },

        basket: {
          get: function get () {
            return this.$store.state.basket
          }
        }
      },

      methods: {
        setLanguage: function setLanguage (language) {
          this.$store.dispatch('setLocale', language)
        }
      }

    })

    /***/
  }),

  /***/ 79: /***/ (function (module, exports) {

    module.exports = {
      render: function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('div', {
          attrs: {
            'id': 'app'
          }
        }, [_c('b-navbar', {
          attrs: {
            'toggleable': '',
            'type': 'inverse',
            'variant': 'primary'
          }
        }, [_c('b-nav-toggle', {
          attrs: {
            'target': 'nav_collapse'
          }
        }), _vm._v(' '), _c('b-link', {
          staticClass: 'navbar-brand',
          attrs: {
            'to': {
              name: 'Home'
            }
          }
        }, [_c('span', [_vm._v('Product paradise')])]), _vm._v(' '), _c('b-collapse', {
          attrs: {
            'is-nav': '',
            'id': 'nav_collapse'
          }
        }, [_c('b-nav', {
          attrs: {
            'is-nav-bar': ''
          }
        }, [_c('b-nav-item', {
          attrs: {
            'to': {
              name: 'Home'
            }
          }
        }, [_vm._v(_vm._s(_vm.$t('home')))]), _vm._v(' '), (!_vm.isUserAuthenticated) ? _c('b-nav-item', {
          attrs: {
            'to': {
              name: 'Register'
            }
          }
        }, [_vm._v(_vm._s(_vm.$t('register')))]) : _vm._e(), _vm._v(' '), (!_vm.isUserAuthenticated) ? _c('b-nav-item', {
          attrs: {
            'to': {
              name: 'Login'
            }
          }
        }, [_vm._v(_vm._s(_vm.$t('login')))]) : _vm._e(), _vm._v(' '), (_vm.isUserAuthenticated) ? _c('b-nav-item', {
          attrs: {
            'to': {
              name: 'Shop'
            }
          }
        }, [_vm._v(_vm._s(_vm.$t('shop')))]) : _vm._e()], 1), _vm._v(' '), _c('b-nav', {
          staticClass: 'ml-auto',
          attrs: {
            'is-nav-bar': ''
          }
        }, [(_vm.isUserAuthenticated) ? _c('b-nav-item', {
          attrs: {
            'disabled': !_vm.basket.products.length,
            'to': {
              name: 'Basket'
            }
          }
        }, [_vm._v('\n          ' + _vm._s(_vm.$t('basket')) + ' (' + _vm._s(_vm.basket.products.length) + ')\n        ')]) : _vm._e(), _vm._v(' '), (_vm.isUserAuthenticated) ? _c('b-nav-item', {
          attrs: {
            'to': {
              name: 'Products'
            }
          }
        }, [_vm._v(_vm._s(_vm.$t('products')))]) : _vm._e(), _vm._v(' '), _c('b-nav-item-dropdown', {
          attrs: {
            'text': 'Language',
            'right-alignment': ''
          }
        }, [_c('b-dropdown-item', {
          on: {
            'click': function ($event) {
              _vm.setLanguage('en')
            }
          }
        }, [_vm._v('English')]), _vm._v(' '), _c('b-dropdown-item', {
          on: {
            'click': function ($event) {
              _vm.setLanguage('de')
            }
          }
        }, [_vm._v('Deutsch')])], 1)], 1)], 1)], 1), _vm._v(' '), _c('div', {
          staticClass: 'container'
        }, [_c('router-view', {
          staticClass: 'mt-4'
        })], 1)], 1)
      }, staticRenderFns: []
    }

    /***/
  }),

  /***/ 84: /***/ (function (module, exports) {

    /* (ignored) */

    /***/
  })

}, [42])
//# sourceMappingURL=app.923dd146e32649409158.js.map
