webpackJsonp([1], Array(33).concat([
  /* 33 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(106)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(87)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_3__components_Register__ = __webpack_require__(89)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_3__components_Register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Register__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_4__components_Login__ = __webpack_require__(88)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_4__components_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Login__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_5__components_product_ProductIndex__ = __webpack_require__(91)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_5__components_product_ProductIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_product_ProductIndex__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_6__components_product_shop_ShopIndex__ = __webpack_require__(95)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_6__components_product_shop_ShopIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_product_shop_ShopIndex__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_7__components_product_shop_BasketIndex__ = __webpack_require__(94)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_7__components_product_shop_BasketIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_product_shop_BasketIndex__)

    __WEBPACK_IMPORTED_MODULE_0_vue__['a' /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__['a' /* default */])

    /* harmony default export */
    __webpack_exports__['a'] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__['a' /* default */]({
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
        path: '/user/products/index',
        name: 'Products',
        component: __WEBPACK_IMPORTED_MODULE_5__components_product_ProductIndex___default.a,
        meta: {
          userOnly: true
        }
      }, {
        path: '/shop/index',
        name: 'Shop',
        component: __WEBPACK_IMPORTED_MODULE_6__components_product_shop_ShopIndex___default.a,
        meta: {
          userOnly: true
        }
      }, {
        path: '/shop/basket/index',
        name: 'Basket',
        component: __WEBPACK_IMPORTED_MODULE_7__components_product_shop_BasketIndex___default.a,
        meta: {
          userOnly: true
        }
      }, {
        path: '*',
        component: __WEBPACK_IMPORTED_MODULE_2__components_Home___default.a
      }]
    }))

    /***/
  }),
  /* 34 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(52)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(13)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(108)

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
  /* 35 */,
  /* 36 */
  /***/ (function (module, exports) {

// removed by extract-text-webpack-plugin

    /***/
  }),
  /* 37 */
  /***/ (function (module, exports) {

// removed by extract-text-webpack-plugin

    /***/
  }),
  /* 38 */,
  /* 39 */
  /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(2)(
      /* script */
      __webpack_require__(42),
      /* template */
      __webpack_require__(98),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),
  /* 40 */,
  /* 41 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(40)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(39)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(33)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_4__state_index__ = __webpack_require__(34)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_5_bootstrap_vue__ = __webpack_require__(35)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(37)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_7_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__(36)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_7_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bootstrap_vue_dist_bootstrap_vue_css__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_8_vue_i18n__ = __webpack_require__(38)

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
  /* 42 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

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
  /* 43 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})

    /* harmony default export */
    __webpack_exports__['default'] = ({
      created: function created () {
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
        products: function products () {
          return this.$store.state.products
        }
      }
    })

    /***/
  }),
  /* 44 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})

    /* harmony default export */
    __webpack_exports__['default'] = ({
      i18n: {
        messages: {
          en: {
            'description.first': 'Enter your name',
            'label.first': 'Name',
            'description.second': 'Enter your password',
            'label.second': 'Password',
            'figcaption.first': 'You may choose one of these users to login.',
            'button.first': 'Submit'
          },
          de: {
            'description.first': 'Gebe deinen Namen ein',
            'label.first': 'Name',
            'description.second': 'Gebe dein Passwort ein',
            'label.second': 'Passwort',
            'figcaption.first': 'Du kannst einen dieser Nutzer wählen, um dich einzuloggen.',
            'button.first': 'Senden'
          }
        }
      },

      computed: {
        user: {
          get: function get () {
            return this.$store.state.user
          }
        },

        name: {
          get: function get () {
            return this.$store.state.user.name
          },
          set: function set (name) {
            this.$store.dispatch('setUserName', name)
          }
        },

        password: {
          get: function get () {
            return this.$store.state.user.password
          },
          set: function set (password) {
            this.$store.dispatch('setUserPassword', password)
          }
        }
      },

      methods: {
        login: function login () {
          var _this = this

          this.$http.post('/api/login/post', {
            name: this.name,
            password: this.password
          }).then(function (response) {
            _this.$store.dispatch('setIsUserAuthenticated', true)
            window.localStorage.setItem('token', response.body.token)

            _this.$router.push({
              name: 'Products'
            })
          }, function (error) {
            if (error.status === 403) {}
          })
        }
      }
    })

    /***/
  }),
  /* 45 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})

    /* harmony default export */
    __webpack_exports__['default'] = ({
      i18n: {
        messages: {
          en: {
            'description.first': 'Enter a name',
            'label.first': 'Name *',
            'description.second': 'Enter a password',
            'label.second': 'Password *',
            'button.first': 'Create'
          },
          de: {
            'description.first': 'Gebe einen Namen ein',
            'label.first': 'Name *',
            'description.second': 'Gebe ein Passwort ein',
            'label.second': 'Passwort *',
            'figcaption.first': 'Du kannst einen dieser Nutzer wählen, um dich einzuloggen.',
            'button.first': 'Erstellen'
          }
        }
      },

      computed: {
        user: {
          get: function get () {
            return this.$store.state.user
          }
        },

        name: {
          get: function get () {
            return this.$store.state.user.name
          },
          set: function set (name) {
            this.$store.dispatch('setUserName', name)
          }
        },

        password: {
          get: function get () {
            return this.$store.state.user.password
          },
          set: function set (password) {
            this.$store.dispatch('setUserPassword', password)
          }
        }
      },

      methods: {
        create: function create () {
          this.$store.dispatch('saveUser', this.user)
        }
      }
    })

    /***/
  }),
  /* 46 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})

    /* harmony default export */
    __webpack_exports__['default'] = ({
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

      computed: {
        product: {
          get: function get () {
            return this.$store.state.product
          }
        },

        user: function user () {
          return this.$store.state.user
        },

        title: {
          get: function get () {
            return this.$store.state.product.title
          },
          set: function set (title) {
            this.$store.dispatch('setProductTitle', title)
          }
        },

        description: {
          get: function get () {
            return this.$store.state.product.description
          },
          set: function set (description) {
            this.$store.dispatch('setProductDescription', description)
          }
        },

        price: {
          get: function get () {
            return this.$store.state.product.price
          },
          set: function set (price) {
            this.$store.dispatch('setProductPrice', price)
          }
        }
      },

      methods: {
        create: function create () {
          var _this = this

          this.$store.dispatch('saveProduct', {
            product: this.product,
            user: this.user
          }).then(function () {

            _this.$store.dispatch('getProductsByUser', _this.user)
          }, function (error) {
            console.log(error)
          })
        }
      }
    })

    /***/
  }),
  /* 47 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__ProductCreate__ = __webpack_require__(90)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__ProductCreate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProductCreate__)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__ProductsGet__ = __webpack_require__(93)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__ProductsGet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ProductsGet__)

    /* harmony default export */
    __webpack_exports__['default'] = ({
      i18n: {
        messages: {
          en: {
            'tab.first': 'Get products',
            'tab.second': 'Create products'
          },
          de: {
            'tab.first': 'Hole Produkte',
            'tab.second': 'Erstelle Produkte'
          }
        }
      },

      components: {
        ProductCreate: __WEBPACK_IMPORTED_MODULE_0__ProductCreate___default.a,
        ProductsGet: __WEBPACK_IMPORTED_MODULE_1__ProductsGet___default.a
      }
    })

    /***/
  }),
  /* 48 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})

    /* harmony default export */
    __webpack_exports__['default'] = ({
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

      created: function created () {
        var _this = this

        var id = this.id

        this.$http.get('/api/user/product/get', {
          params: {
            id: id
          }
        }).then(function (response) {
          _this.$root.$emit('show::modal', 'patch-product')
          var product = response.body

          _this.$store.dispatch('setProductTitle', product.title)
          _this.$store.dispatch('setProductDescription', product.description)
          _this.$store.dispatch('setProductPrice', product.price)
        }, function () {})
      },

      computed: {
        user: function user () {
          return this.$store.state.user
        },

        title: {
          get: function get () {
            return this.$store.state.product.title
          },
          set: function set (title) {
            this.$store.dispatch('setProductTitle', title)
          }
        },

        description: {
          get: function get () {
            return this.$store.state.product.description
          },
          set: function set (description) {
            this.$store.dispatch('setProductDescription', description)
          }
        },

        price: {
          get: function get () {
            return this.$store.state.product.price
          },
          set: function set (price) {
            this.$store.dispatch('setProductPrice', price)
          }
        },

        isEditProductVisible: {
          get: function get () {
            return this.$store.state.product.meta.isEditProductVisible
          },
          set: function set (isEditProductVisible) {
            this.$store.dispatch('setIsEditProductVisible', isEditProductVisible)
          }
        }
      },

      methods: {
        patchProduct: function patchProduct () {
          var _this2 = this

          this.$http.patch('/api/user/product/patch', {
            id: this.id,
            title: this.title,
            price: this.price,
            description: this.description
          }).then(function () {

            _this2.$store.dispatch('getProductsByUser', _this2.user)
            _this2.$store.dispatch('setIsEditProductVisible', false)
            _this2.$store.dispatch('resetProduct')
          }, function () {})
        },
        cancel: function cancel () {
          this.$store.dispatch('setIsEditProductVisible', false)
          this.$root.$emit('hide::modal', 'patch-product')
        }
      },

      destroyed: function destroyed () {
        this.$root.$emit('hide::modal', 'patch-product')
        this.$store.dispatch('resetProduct')
      }
    })

    /***/
  }),
  /* 49 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__ProductPatch__ = __webpack_require__(92)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__ProductPatch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProductPatch__)

    /* harmony default export */
    __webpack_exports__['default'] = ({
      components: {
        ProductPatch: __WEBPACK_IMPORTED_MODULE_0__ProductPatch___default.a
      },

      data: function data () {
        return {
          id: ''
        }
      },
      created: function created () {
        this.$store.dispatch('getProductsByUser', this.user)
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
        fields: function fields () {
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
          }
        },
        products: function products () {
          return this.$store.state.products
        },
        user: function user () {
          return this.$store.state.user
        },

        isEditProductVisible: {
          get: function get () {
            return this.$store.state.product.meta.isEditProductVisible
          },
          set: function set (isEditProductVisible) {
            this.$store.dispatch('setIsEditProductVisible', isEditProductVisible)
          }
        }
      },

      methods: {
        showPatchForm: function showPatchForm (id) {
          this.$set(this, 'id', id)
          this.$store.dispatch('setIsEditProductVisible', true)
        },
        remove: function remove (id) {
          var _this = this

          this.$http.delete('/api/user/product/remove', {
            params: {
              id: id
            }
          }).then(function () {

            _this.$store.dispatch('getProductsByUser', _this.user)
          }, function () {})
        }
      }
    })

    /***/
  }),
  /* 50 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})

    /* harmony default export */
    __webpack_exports__['default'] = ({
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
          get: function get () {
            return this.$store.state.basket
          }
        },

        totalPrice: function totalPrice () {
          var totalPrice = 0
          this.basket.products.forEach(function (product) {
            totalPrice += product.price
          })

          return Math.round(totalPrice * 100) / 100
        }
      },

      methods: {
        checkout: function checkout () {
          this.$store.dispatch('checkout', this.basket).then(function () {})
        },
        removeProduct: function removeProduct (productId) {
          this.$store.dispatch('removeProductFromBasket', productId)
        }
      }
    })

    /***/
  }),
  /* 51 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', {value: true})

    /* harmony default export */
    __webpack_exports__['default'] = ({
      created: function created () {
        this.$store.dispatch('getProducts')
        this.$store.dispatch('getUser')
      },

      i18n: {
        messages: {
          en: {
            'alert.first': 'Please notice that your own products are not visible in this list.',
            'span.first': 'by',
            'button.first': 'Buy'
          },
          de: {
            'alert.first': 'Deine eigenen Produkte sind in der folgenden Auflistung nicht enthalten.',
            'span.first': 'von',
            'button.first': 'Einkaufen'
          }
        }
      },

      computed: {
        products: function products () {
          return this.$store.state.products
        },
        user: function user () {
          return this.$store.state.user
        }
      },

      methods: {
        pushToBasket: function pushToBasket (product) {
          this.$store.dispatch('pushToBasket', product)
        }
      }
    })

    /***/
  }),
  /* 52 */,
  /* 53 */,
  /* 54 */,
  /* 55 */,
  /* 56 */,
  /* 57 */,
  /* 58 */,
  /* 59 */,
  /* 60 */,
  /* 61 */,
  /* 62 */,
  /* 63 */,
  /* 64 */,
  /* 65 */,
  /* 66 */,
  /* 67 */,
  /* 68 */,
  /* 69 */,
  /* 70 */,
  /* 71 */,
  /* 72 */,
  /* 73 */,
  /* 74 */,
  /* 75 */,
  /* 76 */,
  /* 77 */,
  /* 78 */,
  /* 79 */,
  /* 80 */,
  /* 81 */,
  /* 82 */,
  /* 83 */,
  /* 84 */,
  /* 85 */,
  /* 86 */,
  /* 87 */
  /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(2)(
      /* script */
      __webpack_require__(43),
      /* template */
      __webpack_require__(97),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),
  /* 88 */
  /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(2)(
      /* script */
      __webpack_require__(44),
      /* template */
      __webpack_require__(99),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),
  /* 89 */
  /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(2)(
      /* script */
      __webpack_require__(45),
      /* template */
      __webpack_require__(102),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),
  /* 90 */
  /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(2)(
      /* script */
      __webpack_require__(46),
      /* template */
      __webpack_require__(101),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),
  /* 91 */
  /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(2)(
      /* script */
      __webpack_require__(47),
      /* template */
      __webpack_require__(105),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),
  /* 92 */
  /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(2)(
      /* script */
      __webpack_require__(48),
      /* template */
      __webpack_require__(103),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),
  /* 93 */
  /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(2)(
      /* script */
      __webpack_require__(49),
      /* template */
      __webpack_require__(104),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),
  /* 94 */
  /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(2)(
      /* script */
      __webpack_require__(50),
      /* template */
      __webpack_require__(100),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),
  /* 95 */
  /***/ (function (module, exports, __webpack_require__) {

    var Component = __webpack_require__(2)(
      /* script */
      __webpack_require__(51),
      /* template */
      __webpack_require__(96),
      /* scopeId */
      null,
      /* cssModules */
      null
    )

    module.exports = Component.exports

    /***/
  }),
  /* 96 */
  /***/ (function (module, exports) {

    module.exports = {
      render: function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('div', [_c('b-alert', {
          attrs: {
            'variant': 'info',
            'show': ''
          }
        }, [_vm._v('\n    ' + _vm._s(_vm.$t('alert.first')) + '\n  ')]), _vm._v(' '), _c('div', {
          staticClass: 'row'
        }, _vm._l((_vm.products), function (product) {
          return (product.user.name !== _vm.user.name) ? _c('div', {
            staticClass: 'col-4'
          }, [_c('b-card', {
            key: product.id,
            staticClass: 'mb-4',
            attrs: {
              'header': product.title,
              'show-footer': ''
            }
          }, [_c('p', [_vm._v(_vm._s(product.description))]), _vm._v(' '), _c('b-button', {
            attrs: {
              'variant': 'outline-success',
              'size': 'sm'
            },
            on: {
              'click': function ($event) {
                _vm.pushToBasket(product)
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('button.first')) + '\n        ')]), _vm._v(' '), _c('small', {
            staticClass: 'text-muted',
            slot: 'footer'
          }, [_c('span', {
            staticClass: 'float-left'
          }, [_vm._v('$' + _vm._s(product.price))]), _vm._v(' '), _c('span', {
            staticClass: 'float-right'
          }, [_vm._v(_vm._s(_vm.$t('span.first')) + ' ' + _vm._s(product.user.name))])])], 1)], 1) : _vm._e()
        }))], 1)
      }, staticRenderFns: []
    }

    /***/
  }),
  /* 97 */
  /***/ (function (module, exports) {

    module.exports = {
      render: function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('div', [_c('div', {
          staticClass: 'row'
        }, [_c('div', {
          staticClass: 'col'
        }, [_c('b-carousel', {
          attrs: {
            'interval': 3000,
            'background': 'transparent'
          }
        }, [_c('b-carousel-slide', {
          attrs: {
            'background': 'transparent',
            'height': '150px'
          }
        }, [_c('h3', {
          staticClass: 'text-info'
        }, [_vm._v(_vm._s(_vm.$t('h3.first')))]), _vm._v(' '), _c('p', {
          staticClass: 'text-muted'
        }, [_vm._v(_vm._s(_vm.$t('p.first')))])]), _vm._v(' '), _c('b-carousel-slide', {
          attrs: {
            'background': 'transparent',
            'height': '150px'
          }
        }, [_c('h3', {
          staticClass: 'text-success'
        }, [_vm._v(_vm._s(_vm.$t('h3.second')))]), _vm._v(' '), _c('p', {
          staticClass: 'text-muted'
        }, [_vm._v(_vm._s(_vm.$t('p.second')))])]), _vm._v(' '), _c('b-carousel-slide', {
          attrs: {
            'background': 'transparent',
            'height': '150px'
          }
        }, [_c('h3', {
          staticClass: 'text-primary'
        }, [_vm._v(_vm._s(_vm.$t('h3.third')))]), _vm._v(' '), _c('p', {
          staticClass: 'text-muted'
        }, [_vm._v(_vm._s(_vm.$t('p.third')))])])], 1)], 1)]), _vm._v(' '), _c('div', {
          staticClass: 'row'
        }, _vm._l((_vm.products), function (product) {
          return _c('div', {
            staticClass: 'col-4'
          }, [_c('b-card', {
            key: product.id,
            staticClass: 'mb-4',
            attrs: {
              'header': product.title,
              'show-footer': ''
            }
          }, [_c('p', [_vm._v(_vm._s(product.description))]), _vm._v(' '), _c('small', {
            staticClass: 'text-muted',
            slot: 'footer'
          }, [_c('span', {
            staticClass: 'float-left'
          }, [_vm._v('$' + _vm._s(product.price))]), _vm._v(' '), _c('span', {
            staticClass: 'float-right'
          }, [_vm._v(_vm._s(_vm.$t('span.first')) + ' ' + _vm._s(product.user.name))])])])], 1)
        }))])
      }, staticRenderFns: []
    }

    /***/
  }),
  /* 98 */
  /***/ (function (module, exports) {

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
  /* 99 */
  /***/ (function (module, exports) {

    module.exports = {
      render: function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('div', {
          staticClass: 'row justify-content-md-center'
        }, [_c('div', {
          staticClass: 'col-6'
        }, [_c('b-form-fieldset', {
          attrs: {
            'description': _vm.$t('description.first'),
            'label': _vm.$t('label.first'),
            'label-size': 1
          }
        }, [_c('b-form-input', {
          model: {
            value: (_vm.name),
            callback: function ($$v) {
              _vm.name = $$v
            },
            expression: 'name'
          }
        })], 1), _vm._v(' '), _c('b-form-fieldset', {
          attrs: {
            'description': _vm.$t('description.second'),
            'label': _vm.$t('label.second'),
            'label-size': 1
          }
        }, [_c('b-form-input', {
          attrs: {
            'type': 'password'
          },
          model: {
            value: (_vm.password),
            callback: function ($$v) {
              _vm.password = $$v
            },
            expression: 'password'
          }
        })], 1), _vm._v(' '), _c('b-button', {
          attrs: {
            'variant': 'outline-success',
            'size': 'sm'
          },
          on: {
            'click': _vm.login
          }
        }, [_vm._v(_vm._s(_vm.$t('button.first')))])], 1), _vm._v(' '), _c('div', {
          staticClass: 'col-6'
        }, [_c('figure', {
          staticClass: 'figure'
        }, [_c('pre', [_vm._v('\n      [\n        {\n          name: \'Joe\',\n          password: \'toasty\'\n        }, {\n          name: \'Anna\',\n          password: \'sunflower\'\n        }, {\n          name: \'Tom\',\n          password: \'jerry\'\n        }\n      ]\n    ')]), _vm._v(' '), _c('figcaption', {
          staticClass: 'figure-caption'
        }, [_vm._v(_vm._s(_vm.$t('figcaption.first')))])])])])
      }, staticRenderFns: []
    }

    /***/
  }),
  /* 100 */
  /***/ (function (module, exports) {

    module.exports = {
      render: function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('div', {
          staticClass: 'row justify-content-md-center'
        }, [_c('div', {
          staticClass: 'col-6'
        }, [_c('div', {
          staticClass: 'card mb-2'
        }, [_c('div', {
          staticClass: 'card-block'
        }, [_vm._l((_vm.basket.products), function (product) {
          return _c('div', [_c('p', [_c('b', [_vm._v(_vm._s(product.title))]), _vm._v(' '), _c('span', {
            staticClass: 'float-right'
          }, [_c('small', {
            staticClass: 'text-muted'
          }, [_vm._v('$' + _vm._s(product.price))])])]), _vm._v(' '), _c('p', [_vm._v(_vm._s(product.description))]), _vm._v(' '), _c('b-button', {
            attrs: {
              'size': 'sm',
              'variant': 'outline-danger'
            },
            on: {
              'click': function ($event) {
                _vm.removeProduct(product.id)
              }
            }
          }, [_vm._v(_vm._s(_vm.$t('button.first')) + '\n          ')]), _vm._v(' '), _c('hr')], 1)
        }), _vm._v(' '), _c('p', [_c('span', {
          staticClass: 'float-left'
        }, [_vm._v(_vm._s(_vm.$t('span.first')))]), _vm._v(' '), _c('span', {
          staticClass: 'float-right'
        }, [_c('b', [_vm._v('$' + _vm._s(_vm.totalPrice))])])])], 2)])])])
      }, staticRenderFns: []
    }

    /***/
  }),
  /* 101 */
  /***/ (function (module, exports) {

    module.exports = {
      render: function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('div', [_c('div', {
          staticClass: 'row'
        }, [_c('div', {
          staticClass: 'col-8'
        }, [_c('b-form-fieldset', {
          attrs: {
            'description': _vm.$t('description.first'),
            'label': _vm.$t('label.first'),
            'label-size': 1
          }
        }, [_c('b-form-input', {
          model: {
            value: (_vm.title),
            callback: function ($$v) {
              _vm.title = $$v
            },
            expression: 'title'
          }
        })], 1)], 1), _vm._v(' '), _c('div', {
          staticClass: 'col-4'
        }, [_c('b-form-fieldset', {
          attrs: {
            'description': _vm.$t('description.second'),
            'label': _vm.$t('label.second'),
            'label-size': 1
          }
        }, [_c('b-form-input', {
          model: {
            value: (_vm.price),
            callback: function ($$v) {
              _vm.price = $$v
            },
            expression: 'price'
          }
        })], 1)], 1)]), _vm._v(' '), _c('b-form-fieldset', {
          attrs: {
            'description': _vm.$t('description.third'),
            'label': _vm.$t('label.third'),
            'label-size': 1
          }
        }, [_c('b-form-input', {
          attrs: {
            'textarea': ''
          },
          model: {
            value: (_vm.description),
            callback: function ($$v) {
              _vm.description = $$v
            },
            expression: 'description'
          }
        })], 1), _vm._v(' '), _c('b-button', {
          attrs: {
            'size': 'sm',
            'variant': 'outline-success'
          },
          on: {
            'click': _vm.create
          }
        }, [_vm._v(_vm._s(_vm.$t('button.first')))])], 1)
      }, staticRenderFns: []
    }

    /***/
  }),
  /* 102 */
  /***/ (function (module, exports) {

    module.exports = {
      render: function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('div', {
          staticClass: 'row justify-content-md-center'
        }, [_c('div', {
          staticClass: 'col-6'
        }, [_c('b-form-fieldset', {
          attrs: {
            'description': _vm.$t('description.first'),
            'label': _vm.$t('label.first'),
            'label-size': 1
          }
        }, [_c('b-form-input', {
          model: {
            value: (_vm.name),
            callback: function ($$v) {
              _vm.name = $$v
            },
            expression: 'name'
          }
        })], 1), _vm._v(' '), _c('b-form-fieldset', {
          attrs: {
            'description': _vm.$t('description.second'),
            'label': _vm.$t('label.second'),
            'label-size': 1
          }
        }, [_c('b-form-input', {
          attrs: {
            'type': 'password'
          },
          model: {
            value: (_vm.password),
            callback: function ($$v) {
              _vm.password = $$v
            },
            expression: 'password'
          }
        })], 1), _vm._v(' '), _c('b-button', {
          attrs: {
            'variant': 'outline-success',
            'size': 'sm'
          },
          on: {
            'click': _vm.create
          }
        }, [_vm._v(_vm._s(_vm.$t('button.first')))])], 1)])
      }, staticRenderFns: []
    }

    /***/
  }),
  /* 103 */
  /***/ (function (module, exports) {

    module.exports = {
      render: function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('b-modal', {
          attrs: {
            'size': 'lg',
            'id': 'patch-product'
          }
        }, [_c('template', {
          slot: 'modal-title'
        }, [_vm._v(_vm._s(_vm.$t('template.first.title')))]), _vm._v(' '), _c('div', {
          staticClass: 'row'
        }, [_c('div', {
          staticClass: 'col-8'
        }, [_c('b-form-fieldset', {
          attrs: {
            'description': _vm.$t('description.first'),
            'label': _vm.$t('label.first'),
            'label-size': 1
          }
        }, [_c('b-form-input', {
          model: {
            value: (_vm.title),
            callback: function ($$v) {
              _vm.title = $$v
            },
            expression: 'title'
          }
        })], 1)], 1), _vm._v(' '), _c('div', {
          staticClass: 'col-4'
        }, [_c('b-form-fieldset', {
          attrs: {
            'description': _vm.$t('description.second'),
            'label': _vm.$t('label.second'),
            'label-size': 1
          }
        }, [_c('b-form-input', {
          model: {
            value: (_vm.price),
            callback: function ($$v) {
              _vm.price = $$v
            },
            expression: 'price'
          }
        })], 1)], 1)]), _vm._v(' '), _c('b-form-fieldset', {
          attrs: {
            'description': _vm.$t('description.third'),
            'label': _vm.$t('label.third'),
            'label-size': 1
          }
        }, [_c('b-form-input', {
          attrs: {
            'textarea': ''
          },
          model: {
            value: (_vm.description),
            callback: function ($$v) {
              _vm.description = $$v
            },
            expression: 'description'
          }
        })], 1), _vm._v(' '), _c('template', {
          slot: 'modal-footer'
        }, [_c('b-button', {
          attrs: {
            'size': 'sm',
            'variant': 'outline-primary'
          },
          on: {
            'click': _vm.cancel
          }
        }, [_vm._v(_vm._s(_vm.$t('button.first')))]), _vm._v(' '), _c('b-button', {
          attrs: {
            'size': 'sm',
            'variant': 'outline-success'
          },
          on: {
            'click': _vm.patchProduct
          }
        }, [_vm._v(_vm._s(_vm.$t('button.second')))])], 1)], 2)
      }, staticRenderFns: []
    }

    /***/
  }),
  /* 104 */
  /***/ (function (module, exports) {

    module.exports = {
      render: function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('div', [(_vm.isEditProductVisible) ? _c('product-patch', {
          attrs: {
            'id': _vm.id
          }
        }) : _vm._e(), _vm._v(' '), (_vm.products.length > 0) ? _c('b-table', {
          attrs: {
            'items': _vm.products,
            'fields': _vm.fields
          },
          scopedSlots: _vm._u([
            ['price', function (item) {
              return [_vm._v('\n      $' + _vm._s(item.item.price) + '\n    ')]
            }],
            ['actions', function (item) {
              return [_c('b-button', {
                attrs: {
                  'size': 'sm',
                  'variant': 'outline-primary'
                },
                on: {
                  'click': function ($event) {
                    _vm.showPatchForm(item.item.id)
                  }
                }
              }, [_vm._v(_vm._s(_vm.$t('button.first')) + '\n      ')]), _vm._v(' '), _c('b-button', {
                attrs: {
                  'size': 'sm',
                  'variant': 'outline-warning'
                },
                on: {
                  'click': function ($event) {
                    _vm.remove(item.item.id)
                  }
                }
              }, [_vm._v(_vm._s(_vm.$t('button.second')))])]
            }]
          ])
        }) : _c('p', [_vm._v('No products yet, you should create one.')])], 1)
      }, staticRenderFns: []
    }

    /***/
  }),
  /* 105 */
  /***/ (function (module, exports) {

    module.exports = {
      render: function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('div', {
          staticClass: 'row'
        }, [_c('div', {
          staticClass: 'col'
        }, [_c('b-card', {
          attrs: {
            'no-block': ''
          }
        }, [_c('b-tabs', {
          ref: 'tabs',
          attrs: {
            'card': ''
          }
        }, [_c('b-tab', {
          attrs: {
            'title': _vm.$t('tab.first')
          }
        }, [_c('products-get', {
          attrs: {
            'keep-alive': ''
          }
        })], 1), _vm._v(' '), _c('b-tab', {
          attrs: {
            'title': _vm.$t('tab.second')
          }
        }, [_c('product-create', {
          attrs: {
            'keep-alive': ''
          }
        })], 1)], 1)], 1)], 1)])
      }, staticRenderFns: []
    }

    /***/
  }),
  /* 106 */,
  /* 107 */,
  /* 108 */,
  /* 109 */,
  /* 110 */
  /***/ (function (module, exports) {

    /* (ignored) */

    /***/
  })
]), [41])
//# sourceMappingURL=app.536a671f1faf0130040b.js.map
