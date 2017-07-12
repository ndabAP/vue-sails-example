webpackJsonp([5],{

/***/ 111:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row justify-content-md-center"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('b-form-fieldset', {
    attrs: {
      "description": _vm.$t('description.first'),
      "label": _vm.$t('label.first'),
      "label-size": 1
    }
  }, [_c('b-form-input', {
    model: {
      value: (_vm.name),
      callback: function($$v) {
        _vm.name = $$v
      },
      expression: "name"
    }
  })], 1), _vm._v(" "), _c('b-form-fieldset', {
    attrs: {
      "description": _vm.$t('description.second'),
      "label": _vm.$t('label.second'),
      "label-size": 1
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "password"
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  })], 1), _vm._v(" "), _c('b-button', {
    attrs: {
      "variant": "outline-success",
      "size": "sm"
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v(_vm._s(_vm.$t('button.first')))])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('figure', {
    staticClass: "figure"
  }, [_c('pre', [_vm._v("\n      [\n        {\n          name: 'Joe',\n          password: 'toasty'\n        }, {\n          name: 'Anna',\n          password: 'sunflower'\n        }, {\n          name: 'Tom',\n          password: 'jerry'\n        }\n      ]\n    ")]), _vm._v(" "), _c('figcaption', {
    staticClass: "figure-caption"
  }, [_vm._v(_vm._s(_vm.$t('figcaption.first')))])])])])
},staticRenderFns: []}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(111),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
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
      get: function get() {
        return this.$store.state.user;
      }
    },

    name: {
      get: function get() {
        return this.$store.state.user.name;
      },
      set: function set(name) {
        this.$store.commit('SET_USER_NAME', name);
      }
    },

    password: {
      get: function get() {
        return this.$store.state.user.password;
      },
      set: function set(password) {
        this.$store.commit('SET_USER_PASSWORD', password);
      }
    }
  },

  methods: {
    login: function login() {
      var _this = this;

      this.$http.post('/api/login/post', {
        name: this.name,
        password: this.password
      }).then(function (response) {
        _this.$store.commit('SET_IS_USER_AUTHENTICATED', true);
        window.localStorage.setItem('token', response.body.token);

        _this.$router.push({
          name: 'Products'
        });
      }, function (error) {
        if (error.status === 403) {}
      });
    }
  }
});

/***/ })

});
//# sourceMappingURL=5.08a67d5696c00c298bbc.js.map