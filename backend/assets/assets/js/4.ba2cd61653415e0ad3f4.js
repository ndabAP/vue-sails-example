webpackJsonp([4],{

/***/ 108:
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
      "click": _vm.create
    }
  }, [_vm._v(_vm._s(_vm.$t('button.first')))])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(108),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
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
      get: function get() {
        return this.$store.state.user;
      }
    },

    name: {
      get: function get() {
        return this.$store.state.user.name;
      },
      set: function set(name) {
        this.$store.dispatch('setUserName', name);
      }
    },

    password: {
      get: function get() {
        return this.$store.state.user.password;
      },
      set: function set(password) {
        this.$store.dispatch('setUserPassword', password);
      }
    }
  },

  methods: {
    create: function create() {
      this.$store.dispatch('saveUser', this.user);
    }
  }
});

/***/ })

});
//# sourceMappingURL=4.ba2cd61653415e0ad3f4.js.map