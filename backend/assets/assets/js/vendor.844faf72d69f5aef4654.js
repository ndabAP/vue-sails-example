webpackJsonp([0], [
  /* 0 */
  /***/ (function (module, exports, __webpack_require__) {

    var store = __webpack_require__(29)('wks')
      , uid = __webpack_require__(32)
      , Symbol = __webpack_require__(1).Symbol
      , USE_SYMBOL = typeof Symbol == 'function'

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] =
          USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
    }

    $exports.store = store

    /***/
  }),
  /* 1 */
  /***/ (function (module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
      ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')()
    if (typeof __g == 'number') __g = global // eslint-disable-line no-undef

    /***/
  }),
  /* 2 */
  /***/ (function (module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

    module.exports = function normalizeComponent (rawScriptExports,
                                                  compiledTemplate,
                                                  scopeId,
                                                  cssModules) {
      var esModule
      var scriptExports = rawScriptExports = rawScriptExports || {}

      // ES6 modules interop
      var type = typeof rawScriptExports.default
      if (type === 'object' || type === 'function') {
        esModule = rawScriptExports
        scriptExports = rawScriptExports.default
      }

      // Vue.extend constructor export interop
      var options = typeof scriptExports === 'function'
        ? scriptExports.options
        : scriptExports

      // render functions
      if (compiledTemplate) {
        options.render = compiledTemplate.render
        options.staticRenderFns = compiledTemplate.staticRenderFns
      }

      // scopedId
      if (scopeId) {
        options._scopeId = scopeId
      }

      // inject cssModules
      if (cssModules) {
        var computed = Object.create(options.computed || null)
        Object.keys(cssModules).forEach(function (key) {
          var module = cssModules[key]
          computed[key] = function () { return module }
        })
        options.computed = computed
      }

      return {
        esModule: esModule,
        exports: scriptExports,
        options: options
      }
    }

    /***/
  }),
  /* 3 */
  /***/ (function (module, exports, __webpack_require__) {

    var isObject = __webpack_require__(11)
    module.exports = function (it) {
      if (!isObject(it))throw TypeError(it + ' is not an object!')
      return it
    }

    /***/
  }),
  /* 4 */
  /***/ (function (module, exports, __webpack_require__) {

    var dP = __webpack_require__(12)
      , createDesc = __webpack_require__(28)
    module.exports = __webpack_require__(6) ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value))
    } : function (object, key, value) {
      object[key] = value
      return object
    }

    /***/
  }),
  /* 5 */
  /***/ (function (module, exports) {

    var core = module.exports = {version: '2.4.0'}
    if (typeof __e == 'number') __e = core // eslint-disable-line no-undef

    /***/
  }),
  /* 6 */
  /***/ (function (module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
    module.exports = !__webpack_require__(24)(function () {
      return Object.defineProperty({}, 'a', {get: function () { return 7 }}).a != 7
    })

    /***/
  }),
  /* 7 */
  /***/ (function (module, exports) {

    module.exports = {}

    /***/
  }),
  /* 8 */
  /***/ (function (module, exports) {

    var toString = {}.toString

    module.exports = function (it) {
      return toString.call(it).slice(8, -1)
    }

    /***/
  }),
  /* 9 */
  /***/ (function (module, exports, __webpack_require__) {

// optional / simple context binding
    var aFunction = __webpack_require__(14)
    module.exports = function (fn, that, length) {
      aFunction(fn)
      if (that === undefined)return fn
      switch (length) {
        case 1:
          return function (a) {
            return fn.call(that, a)
          }
        case 2:
          return function (a, b) {
            return fn.call(that, a, b)
          }
        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c)
          }
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments)
      }
    }

    /***/
  }),
  /* 10 */
  /***/ (function (module, exports) {

    var hasOwnProperty = {}.hasOwnProperty
    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key)
    }

    /***/
  }),
  /* 11 */
  /***/ (function (module, exports) {

    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function'
    }

    /***/
  }),
  /* 12 */
  /***/ (function (module, exports, __webpack_require__) {

    var anObject = __webpack_require__(3)
      , IE8_DOM_DEFINE = __webpack_require__(58)
      , toPrimitive = __webpack_require__(79)
      , dP = Object.defineProperty

    exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty (O, P, Attributes) {
      anObject(O)
      P = toPrimitive(P, true)
      anObject(Attributes)
      if (IE8_DOM_DEFINE)try {
        return dP(O, P, Attributes)
      } catch (e) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!')
      if ('value' in Attributes) O[P] = Attributes.value
      return O
    }

    /***/
  }),
  /* 13 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    /* WEBPACK VAR INJECTION */
    (function (global) {/*!
     * Vue.js v2.2.6
     * (c) 2014-2017 Evan You
     * Released under the MIT License.
     */
      /*  */

      /**
       * Convert a value to a string that is actually rendered.
       */
      function _toString (val) {
        return val == null
          ? ''
          : typeof val === 'object'
            ? JSON.stringify(val, null, 2)
            : String(val)
      }

      /**
       * Convert a input value to a number for persistence.
       * If the conversion fails, return original string.
       */
      function toNumber (val) {
        var n = parseFloat(val)
        return isNaN(n) ? val : n
      }

      /**
       * Make a map and return a function for checking if a key
       * is in that map.
       */
      function makeMap (str,
                        expectsLowerCase) {
        var map = Object.create(null)
        var list = str.split(',')
        for (var i = 0; i < list.length; i++) {
          map[list[i]] = true
        }
        return expectsLowerCase
          ? function (val) { return map[val.toLowerCase()] }
          : function (val) { return map[val] }
      }

      /**
       * Check if a tag is a built-in tag.
       */
      var isBuiltInTag = makeMap('slot,component', true)

      /**
       * Remove an item from an array
       */
      function remove (arr, item) {
        if (arr.length) {
          var index = arr.indexOf(item)
          if (index > -1) {
            return arr.splice(index, 1)
          }
        }
      }

      /**
       * Check whether the object has the property.
       */
      var hasOwnProperty = Object.prototype.hasOwnProperty

      function hasOwn (obj, key) {
        return hasOwnProperty.call(obj, key)
      }

      /**
       * Check if value is primitive
       */
      function isPrimitive (value) {
        return typeof value === 'string' || typeof value === 'number'
      }

      /**
       * Create a cached version of a pure function.
       */
      function cached (fn) {
        var cache = Object.create(null)
        return (function cachedFn (str) {
          var hit = cache[str]
          return hit || (cache[str] = fn(str))
        })
      }

      /**
       * Camelize a hyphen-delimited string.
       */
      var camelizeRE = /-(\w)/g
      var camelize = cached(function (str) {
        return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : '' })
      })

      /**
       * Capitalize a string.
       */
      var capitalize = cached(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      })

      /**
       * Hyphenate a camelCase string.
       */
      var hyphenateRE = /([^-])([A-Z])/g
      var hyphenate = cached(function (str) {
        return str
          .replace(hyphenateRE, '$1-$2')
          .replace(hyphenateRE, '$1-$2')
          .toLowerCase()
      })

      /**
       * Simple bind, faster than native
       */
      function bind (fn, ctx) {
        function boundFn (a) {
          var l = arguments.length
          return l
            ? l > 1
              ? fn.apply(ctx, arguments)
              : fn.call(ctx, a)
            : fn.call(ctx)
        }

        // record original fn length
        boundFn._length = fn.length
        return boundFn
      }

      /**
       * Convert an Array-like object to a real Array.
       */
      function toArray (list, start) {
        start = start || 0
        var i = list.length - start
        var ret = new Array(i)
        while (i--) {
          ret[i] = list[i + start]
        }
        return ret
      }

      /**
       * Mix properties into target object.
       */
      function extend (to, _from) {
        for (var key in _from) {
          to[key] = _from[key]
        }
        return to
      }

      /**
       * Quick object check - this is primarily used to tell
       * Objects from primitive values when we know the value
       * is a JSON-compliant type.
       */
      function isObject (obj) {
        return obj !== null && typeof obj === 'object'
      }

      /**
       * Strict object type check. Only returns true
       * for plain JavaScript objects.
       */
      var toString = Object.prototype.toString
      var OBJECT_STRING = '[object Object]'

      function isPlainObject (obj) {
        return toString.call(obj) === OBJECT_STRING
      }

      /**
       * Merge an Array of Objects into a single Object.
       */
      function toObject (arr) {
        var res = {}
        for (var i = 0; i < arr.length; i++) {
          if (arr[i]) {
            extend(res, arr[i])
          }
        }
        return res
      }

      /**
       * Perform no operation.
       */
      function noop () {}

      /**
       * Always return false.
       */
      var no = function () { return false }

      /**
       * Return same value
       */
      var identity = function (_) { return _ }

      /**
       * Generate a static keys string from compiler modules.
       */
      function genStaticKeys (modules) {
        return modules.reduce(function (keys, m) {
          return keys.concat(m.staticKeys || [])
        }, []).join(',')
      }

      /**
       * Check if two values are loosely equal - that is,
       * if they are plain objects, do they have the same shape?
       */
      function looseEqual (a, b) {
        var isObjectA = isObject(a)
        var isObjectB = isObject(b)
        if (isObjectA && isObjectB) {
          try {
            return JSON.stringify(a) === JSON.stringify(b)
          } catch (e) {
            // possible circular reference
            return a === b
          }
        } else if (!isObjectA && !isObjectB) {
          return String(a) === String(b)
        } else {
          return false
        }
      }

      function looseIndexOf (arr, val) {
        for (var i = 0; i < arr.length; i++) {
          if (looseEqual(arr[i], val)) { return i }
        }
        return -1
      }

      /**
       * Ensure a function is called only once.
       */
      function once (fn) {
        var called = false
        return function () {
          if (!called) {
            called = true
            fn()
          }
        }
      }

      /*  */

      var config = {
        /**
         * Option merge strategies (used in core/util/options)
         */
        optionMergeStrategies: Object.create(null),

        /**
         * Whether to suppress warnings.
         */
        silent: false,

        /**
         * Show production mode tip message on boot?
         */
        productionTip: 'production' !== 'production',

        /**
         * Whether to enable devtools
         */
        devtools: 'production' !== 'production',

        /**
         * Whether to record perf
         */
        performance: false,

        /**
         * Error handler for watcher errors
         */
        errorHandler: null,

        /**
         * Ignore certain custom elements
         */
        ignoredElements: [],

        /**
         * Custom user key aliases for v-on
         */
        keyCodes: Object.create(null),

        /**
         * Check if a tag is reserved so that it cannot be registered as a
         * component. This is platform-dependent and may be overwritten.
         */
        isReservedTag: no,

        /**
         * Check if a tag is an unknown element.
         * Platform-dependent.
         */
        isUnknownElement: no,

        /**
         * Get the namespace of an element
         */
        getTagNamespace: noop,

        /**
         * Parse the real tag name for the specific platform.
         */
        parsePlatformTagName: identity,

        /**
         * Check if an attribute must be bound using property, e.g. value
         * Platform-dependent.
         */
        mustUseProp: no,

        /**
         * List of asset types that a component can own.
         */
        _assetTypes: [
          'component',
          'directive',
          'filter'
        ],

        /**
         * List of lifecycle hooks.
         */
        _lifecycleHooks: [
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'beforeDestroy',
          'destroyed',
          'activated',
          'deactivated'
        ],

        /**
         * Max circular updates allowed in a scheduler flush cycle.
         */
        _maxUpdateCount: 100
      }

      /*  */

      var emptyObject = Object.freeze({})

      /**
       * Check if a string starts with $ or _
       */
      function isReserved (str) {
        var c = (str + '').charCodeAt(0)
        return c === 0x24 || c === 0x5F
      }

      /**
       * Define a property.
       */
      function def (obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
          value: val,
          enumerable: !!enumerable,
          writable: true,
          configurable: true
        })
      }

      /**
       * Parse simple path.
       */
      var bailRE = /[^\w.$]/

      function parsePath (path) {
        if (bailRE.test(path)) {
          return
        }
        var segments = path.split('.')
        return function (obj) {
          for (var i = 0; i < segments.length; i++) {
            if (!obj) { return }
            obj = obj[segments[i]]
          }
          return obj
        }
      }

      /*  */
      /* globals MutationObserver */

// can we use __proto__?
      var hasProto = '__proto__' in {}

// Browser environment sniffing
      var inBrowser = typeof window !== 'undefined'
      var UA = inBrowser && window.navigator.userAgent.toLowerCase()
      var isIE = UA && /msie|trident/.test(UA)
      var isIE9 = UA && UA.indexOf('msie 9.0') > 0
      var isEdge = UA && UA.indexOf('edge/') > 0
      var isAndroid = UA && UA.indexOf('android') > 0
      var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
      var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
      var _isServer
      var isServerRendering = function () {
        if (_isServer === undefined) {
          /* istanbul ignore if */
          if (!inBrowser && typeof global !== 'undefined') {
            // detect presence of vue-server-renderer and avoid
            // Webpack shimming the process
            _isServer = global['process'].env.VUE_ENV === 'server'
          } else {
            _isServer = false
          }
        }
        return _isServer
      }

// detect devtools
      var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__

      /* istanbul ignore next */
      function isNative (Ctor) {
        return /native code/.test(Ctor.toString())
      }

      var hasSymbol =
        typeof Symbol !== 'undefined' && isNative(Symbol) &&
        typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys)

      /**
       * Defer a task to execute it asynchronously.
       */
      var nextTick = (function () {
        var callbacks = []
        var pending = false
        var timerFunc

        function nextTickHandler () {
          pending = false
          var copies = callbacks.slice(0)
          callbacks.length = 0
          for (var i = 0; i < copies.length; i++) {
            copies[i]()
          }
        }

        // the nextTick behavior leverages the microtask queue, which can be accessed
        // via either native Promise.then or MutationObserver.
        // MutationObserver has wider support, however it is seriously bugged in
        // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
        // completely stops working after triggering a few times... so, if native
        // Promise is available, we will use it:
        /* istanbul ignore if */
        if (typeof Promise !== 'undefined' && isNative(Promise)) {
          var p = Promise.resolve()
          var logError = function (err) { console.error(err) }
          timerFunc = function () {
            p.then(nextTickHandler).catch(logError)
            // in problematic UIWebViews, Promise.then doesn't completely break, but
            // it can get stuck in a weird state where callbacks are pushed into the
            // microtask queue but the queue isn't being flushed, until the browser
            // needs to do some other work, e.g. handle a timer. Therefore we can
            // "force" the microtask queue to be flushed by adding an empty timer.
            if (isIOS) { setTimeout(noop) }
          }
        } else if (typeof MutationObserver !== 'undefined' && (
            isNative(MutationObserver) ||
            // PhantomJS and iOS 7.x
            MutationObserver.toString() === '[object MutationObserverConstructor]'
          )) {
          // use MutationObserver where native Promise is not available,
          // e.g. PhantomJS IE11, iOS7, Android 4.4
          var counter = 1
          var observer = new MutationObserver(nextTickHandler)
          var textNode = document.createTextNode(String(counter))
          observer.observe(textNode, {
            characterData: true
          })
          timerFunc = function () {
            counter = (counter + 1) % 2
            textNode.data = String(counter)
          }
        } else {
          // fallback to setTimeout
          /* istanbul ignore next */
          timerFunc = function () {
            setTimeout(nextTickHandler, 0)
          }
        }

        return function queueNextTick (cb, ctx) {
          var _resolve
          callbacks.push(function () {
            if (cb) { cb.call(ctx) }
            if (_resolve) { _resolve(ctx) }
          })
          if (!pending) {
            pending = true
            timerFunc()
          }
          if (!cb && typeof Promise !== 'undefined') {
            return new Promise(function (resolve) {
              _resolve = resolve
            })
          }
        }
      })()

      var _Set
      /* istanbul ignore if */
      if (typeof Set !== 'undefined' && isNative(Set)) {
        // use native Set when available.
        _Set = Set
      } else {
        // a non-standard Set polyfill that only works with primitive keys.
        _Set = (function () {
          function Set () {
            this.set = Object.create(null)
          }

          Set.prototype.has = function has (key) {
            return this.set[key] === true
          }
          Set.prototype.add = function add (key) {
            this.set[key] = true
          }
          Set.prototype.clear = function clear () {
            this.set = Object.create(null)
          }

          return Set
        }())
      }

      var warn = noop
      var tip = noop
      var formatComponentName

      if (false) {
        var hasConsole = typeof console !== 'undefined'
        var classifyRE = /(?:^|[-_])(\w)/g
        var classify = function (str) {
          return str
            .replace(classifyRE, function (c) { return c.toUpperCase() })
            .replace(/[-_]/g, '')
        }

        warn = function (msg, vm) {
          if (hasConsole && (!config.silent)) {
            console.error('[Vue warn]: ' + msg + ' ' + (
                vm ? formatLocation(formatComponentName(vm)) : ''
              ))
          }
        }

        tip = function (msg, vm) {
          if (hasConsole && (!config.silent)) {
            console.warn('[Vue tip]: ' + msg + ' ' + (
                vm ? formatLocation(formatComponentName(vm)) : ''
              ))
          }
        }

        formatComponentName = function (vm, includeFile) {
          if (vm.$root === vm) {
            return '<Root>'
          }
          var name = typeof vm === 'string'
            ? vm
            : typeof vm === 'function' && vm.options
              ? vm.options.name
              : vm._isVue
                ? vm.$options.name || vm.$options._componentTag
                : vm.name

          var file = vm._isVue && vm.$options.__file
          if (!name && file) {
            var match = file.match(/([^/\\]+)\.vue$/)
            name = match && match[1]
          }

          return (
            (name ? ('<' + (classify(name)) + '>') : '<Anonymous>') +
            (file && includeFile !== false ? (' at ' + file) : '')
          )
        }

        var formatLocation = function (str) {
          if (str === '<Anonymous>') {
            str += ' - use the "name" option for better debugging messages.'
          }
          return ('\n(found in ' + str + ')')
        }
      }

      /*  */

      var uid$1 = 0

      /**
       * A dep is an observable that can have multiple
       * directives subscribing to it.
       */
      var Dep = function Dep () {
        this.id = uid$1++
        this.subs = []
      }

      Dep.prototype.addSub = function addSub (sub) {
        this.subs.push(sub)
      }

      Dep.prototype.removeSub = function removeSub (sub) {
        remove(this.subs, sub)
      }

      Dep.prototype.depend = function depend () {
        if (Dep.target) {
          Dep.target.addDep(this)
        }
      }

      Dep.prototype.notify = function notify () {
        // stabilize the subscriber list first
        var subs = this.subs.slice()
        for (var i = 0, l = subs.length; i < l; i++) {
          subs[i].update()
        }
      }

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
      Dep.target = null
      var targetStack = []

      function pushTarget (_target) {
        if (Dep.target) { targetStack.push(Dep.target) }
        Dep.target = _target
      }

      function popTarget () {
        Dep.target = targetStack.pop()
      }

      /*
       * not type checking this file because flow doesn't play well with
       * dynamically accessing methods on Array prototype
       */

      var arrayProto = Array.prototype
      var arrayMethods = Object.create(arrayProto);
      [
        'push',
        'pop',
        'shift',
        'unshift',
        'splice',
        'sort',
        'reverse'
      ]
        .forEach(function (method) {
          // cache original method
          var original = arrayProto[method]
          def(arrayMethods, method, function mutator () {
            var arguments$1 = arguments

            // avoid leaking arguments:
            // http://jsperf.com/closure-with-arguments
            var i = arguments.length
            var args = new Array(i)
            while (i--) {
              args[i] = arguments$1[i]
            }
            var result = original.apply(this, args)
            var ob = this.__ob__
            var inserted
            switch (method) {
              case 'push':
                inserted = args
                break
              case 'unshift':
                inserted = args
                break
              case 'splice':
                inserted = args.slice(2)
                break
            }
            if (inserted) { ob.observeArray(inserted) }
            // notify change
            ob.dep.notify()
            return result
          })
        })

      /*  */

      var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

      /**
       * By default, when a reactive property is set, the new value is
       * also converted to become reactive. However when passing down props,
       * we don't want to force conversion because the value may be a nested value
       * under a frozen data structure. Converting it would defeat the optimization.
       */
      var observerState = {
        shouldConvert: true,
        isSettingProps: false
      }

      /**
       * Observer class that are attached to each observed
       * object. Once attached, the observer converts target
       * object's property keys into getter/setters that
       * collect dependencies and dispatches updates.
       */
      var Observer = function Observer (value) {
        this.value = value
        this.dep = new Dep()
        this.vmCount = 0
        def(value, '__ob__', this)
        if (Array.isArray(value)) {
          var augment = hasProto
            ? protoAugment
            : copyAugment
          augment(value, arrayMethods, arrayKeys)
          this.observeArray(value)
        } else {
          this.walk(value)
        }
      }

      /**
       * Walk through each property and convert them into
       * getter/setters. This method should only be called when
       * value type is Object.
       */
      Observer.prototype.walk = function walk (obj) {
        var keys = Object.keys(obj)
        for (var i = 0; i < keys.length; i++) {
          defineReactive$$1(obj, keys[i], obj[keys[i]])
        }
      }

      /**
       * Observe a list of Array items.
       */
      Observer.prototype.observeArray = function observeArray (items) {
        for (var i = 0, l = items.length; i < l; i++) {
          observe(items[i])
        }
      }

// helpers

      /**
       * Augment an target Object or Array by intercepting
       * the prototype chain using __proto__
       */
      function protoAugment (target, src) {
        /* eslint-disable no-proto */
        target.__proto__ = src
        /* eslint-enable no-proto */
      }

      /**
       * Augment an target Object or Array by defining
       * hidden properties.
       */
      /* istanbul ignore next */
      function copyAugment (target, src, keys) {
        for (var i = 0, l = keys.length; i < l; i++) {
          var key = keys[i]
          def(target, key, src[key])
        }
      }

      /**
       * Attempt to create an observer instance for a value,
       * returns the new observer if successfully observed,
       * or the existing observer if the value already has one.
       */
      function observe (value, asRootData) {
        if (!isObject(value)) {
          return
        }
        var ob
        if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
          ob = value.__ob__
        } else if (
          observerState.shouldConvert &&
          !isServerRendering() &&
          (Array.isArray(value) || isPlainObject(value)) &&
          Object.isExtensible(value) &&
          !value._isVue
        ) {
          ob = new Observer(value)
        }
        if (asRootData && ob) {
          ob.vmCount++
        }
        return ob
      }

      /**
       * Define a reactive property on an Object.
       */
      function defineReactive$$1 (obj,
                                  key,
                                  val,
                                  customSetter) {
        var dep = new Dep()

        var property = Object.getOwnPropertyDescriptor(obj, key)
        if (property && property.configurable === false) {
          return
        }

        // cater for pre-defined getter/setters
        var getter = property && property.get
        var setter = property && property.set

        var childOb = observe(val)
        Object.defineProperty(obj, key, {
          enumerable: true,
          configurable: true,
          get: function reactiveGetter () {
            var value = getter ? getter.call(obj) : val
            if (Dep.target) {
              dep.depend()
              if (childOb) {
                childOb.dep.depend()
              }
              if (Array.isArray(value)) {
                dependArray(value)
              }
            }
            return value
          },
          set: function reactiveSetter (newVal) {
            var value = getter ? getter.call(obj) : val
            /* eslint-disable no-self-compare */
            if (newVal === value || (newVal !== newVal && value !== value)) {
              return
            }
            /* eslint-enable no-self-compare */
            if (false) {
              customSetter()
            }
            if (setter) {
              setter.call(obj, newVal)
            } else {
              val = newVal
            }
            childOb = observe(newVal)
            dep.notify()
          }
        })
      }

      /**
       * Set a property on an object. Adds the new property and
       * triggers change notification if the property doesn't
       * already exist.
       */
      function set (target, key, val) {
        if (Array.isArray(target) && typeof key === 'number') {
          target.length = Math.max(target.length, key)
          target.splice(key, 1, val)
          return val
        }
        if (hasOwn(target, key)) {
          target[key] = val
          return val
        }
        var ob = (target ).__ob__
        if (target._isVue || (ob && ob.vmCount)) {
          'production' !== 'production' && warn(
            'Avoid adding reactive properties to a Vue instance or its root $data ' +
            'at runtime - declare it upfront in the data option.'
          )
          return val
        }
        if (!ob) {
          target[key] = val
          return val
        }
        defineReactive$$1(ob.value, key, val)
        ob.dep.notify()
        return val
      }

      /**
       * Delete a property and trigger change if necessary.
       */
      function del (target, key) {
        if (Array.isArray(target) && typeof key === 'number') {
          target.splice(key, 1)
          return
        }
        var ob = (target ).__ob__
        if (target._isVue || (ob && ob.vmCount)) {
          'production' !== 'production' && warn(
            'Avoid deleting properties on a Vue instance or its root $data ' +
            '- just set it to null.'
          )
          return
        }
        if (!hasOwn(target, key)) {
          return
        }
        delete target[key]
        if (!ob) {
          return
        }
        ob.dep.notify()
      }

      /**
       * Collect dependencies on array elements when the array is touched, since
       * we cannot intercept array element access like property getters.
       */
      function dependArray (value) {
        for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
          e = value[i]
          e && e.__ob__ && e.__ob__.dep.depend()
          if (Array.isArray(e)) {
            dependArray(e)
          }
        }
      }

      /*  */

      /**
       * Option overwriting strategies are functions that handle
       * how to merge a parent option value and a child option
       * value into the final value.
       */
      var strats = config.optionMergeStrategies

      /**
       * Options with restrictions
       */
      if (false) {
        strats.el = strats.propsData = function (parent, child, vm, key) {
          if (!vm) {
            warn(
              'option "' + key + '" can only be used during instance ' +
              'creation with the `new` keyword.'
            )
          }
          return defaultStrat(parent, child)
        }
      }

      /**
       * Helper that recursively merges two data objects together.
       */
      function mergeData (to, from) {
        if (!from) { return to }
        var key, toVal, fromVal
        var keys = Object.keys(from)
        for (var i = 0; i < keys.length; i++) {
          key = keys[i]
          toVal = to[key]
          fromVal = from[key]
          if (!hasOwn(to, key)) {
            set(to, key, fromVal)
          } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
            mergeData(toVal, fromVal)
          }
        }
        return to
      }

      /**
       * Data
       */
      strats.data = function (parentVal,
                              childVal,
                              vm) {
        if (!vm) {
          // in a Vue.extend merge, both should be functions
          if (!childVal) {
            return parentVal
          }
          if (typeof childVal !== 'function') {
            'production' !== 'production' && warn(
              'The "data" option should be a function ' +
              'that returns a per-instance value in component ' +
              'definitions.',
              vm
            )
            return parentVal
          }
          if (!parentVal) {
            return childVal
          }
          // when parentVal & childVal are both present,
          // we need to return a function that returns the
          // merged result of both functions... no need to
          // check if parentVal is a function here because
          // it has to be a function to pass previous merges.
          return function mergedDataFn () {
            return mergeData(
              childVal.call(this),
              parentVal.call(this)
            )
          }
        } else if (parentVal || childVal) {
          return function mergedInstanceDataFn () {
            // instance merge
            var instanceData = typeof childVal === 'function'
              ? childVal.call(vm)
              : childVal
            var defaultData = typeof parentVal === 'function'
              ? parentVal.call(vm)
              : undefined
            if (instanceData) {
              return mergeData(instanceData, defaultData)
            } else {
              return defaultData
            }
          }
        }
      }

      /**
       * Hooks and props are merged as arrays.
       */
      function mergeHook (parentVal,
                          childVal) {
        return childVal
          ? parentVal
            ? parentVal.concat(childVal)
            : Array.isArray(childVal)
              ? childVal
              : [childVal]
          : parentVal
      }

      config._lifecycleHooks.forEach(function (hook) {
        strats[hook] = mergeHook
      })

      /**
       * Assets
       *
       * When a vm is present (instance creation), we need to do
       * a three-way merge between constructor options, instance
       * options and parent options.
       */
      function mergeAssets (parentVal, childVal) {
        var res = Object.create(parentVal || null)
        return childVal
          ? extend(res, childVal)
          : res
      }

      config._assetTypes.forEach(function (type) {
        strats[type + 's'] = mergeAssets
      })

      /**
       * Watchers.
       *
       * Watchers hashes should not overwrite one
       * another, so we merge them as arrays.
       */
      strats.watch = function (parentVal, childVal) {
        /* istanbul ignore if */
        if (!childVal) { return Object.create(parentVal || null) }
        if (!parentVal) { return childVal }
        var ret = {}
        extend(ret, parentVal)
        for (var key in childVal) {
          var parent = ret[key]
          var child = childVal[key]
          if (parent && !Array.isArray(parent)) {
            parent = [parent]
          }
          ret[key] = parent
            ? parent.concat(child)
            : [child]
        }
        return ret
      }

      /**
       * Other object hashes.
       */
      strats.props =
        strats.methods =
          strats.computed = function (parentVal, childVal) {
            if (!childVal) { return Object.create(parentVal || null) }
            if (!parentVal) { return childVal }
            var ret = Object.create(null)
            extend(ret, parentVal)
            extend(ret, childVal)
            return ret
          }

      /**
       * Default strategy.
       */
      var defaultStrat = function (parentVal, childVal) {
        return childVal === undefined
          ? parentVal
          : childVal
      }

      /**
       * Validate component names
       */
      function checkComponents (options) {
        for (var key in options.components) {
          var lower = key.toLowerCase()
          if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + key
            )
          }
        }
      }

      /**
       * Ensure all props option syntax are normalized into the
       * Object-based format.
       */
      function normalizeProps (options) {
        var props = options.props
        if (!props) { return }
        var res = {}
        var i, val, name
        if (Array.isArray(props)) {
          i = props.length
          while (i--) {
            val = props[i]
            if (typeof val === 'string') {
              name = camelize(val)
              res[name] = {type: null}
            } else if (false) {
              warn('props must be strings when using array syntax.')
            }
          }
        } else if (isPlainObject(props)) {
          for (var key in props) {
            val = props[key]
            name = camelize(key)
            res[name] = isPlainObject(val)
              ? val
              : {type: val}
          }
        }
        options.props = res
      }

      /**
       * Normalize raw function directives into object format.
       */
      function normalizeDirectives (options) {
        var dirs = options.directives
        if (dirs) {
          for (var key in dirs) {
            var def = dirs[key]
            if (typeof def === 'function') {
              dirs[key] = {bind: def, update: def}
            }
          }
        }
      }

      /**
       * Merge two option objects into a new one.
       * Core utility used in both instantiation and inheritance.
       */
      function mergeOptions (parent,
                             child,
                             vm) {
        if (false) {
          checkComponents(child)
        }
        normalizeProps(child)
        normalizeDirectives(child)
        var extendsFrom = child.extends
        if (extendsFrom) {
          parent = typeof extendsFrom === 'function'
            ? mergeOptions(parent, extendsFrom.options, vm)
            : mergeOptions(parent, extendsFrom, vm)
        }
        if (child.mixins) {
          for (var i = 0, l = child.mixins.length; i < l; i++) {
            var mixin = child.mixins[i]
            if (mixin.prototype instanceof Vue$3) {
              mixin = mixin.options
            }
            parent = mergeOptions(parent, mixin, vm)
          }
        }
        var options = {}
        var key
        for (key in parent) {
          mergeField(key)
        }
        for (key in child) {
          if (!hasOwn(parent, key)) {
            mergeField(key)
          }
        }
        function mergeField (key) {
          var strat = strats[key] || defaultStrat
          options[key] = strat(parent[key], child[key], vm, key)
        }

        return options
      }

      /**
       * Resolve an asset.
       * This function is used because child instances need access
       * to assets defined in its ancestor chain.
       */
      function resolveAsset (options,
                             type,
                             id,
                             warnMissing) {
        /* istanbul ignore if */
        if (typeof id !== 'string') {
          return
        }
        var assets = options[type]
        // check local registration variations first
        if (hasOwn(assets, id)) { return assets[id] }
        var camelizedId = camelize(id)
        if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
        var PascalCaseId = capitalize(camelizedId)
        if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
        // fallback to prototype chain
        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
        if (false) {
          warn(
            'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
            options
          )
        }
        return res
      }

      /*  */

      function validateProp (key,
                             propOptions,
                             propsData,
                             vm) {
        var prop = propOptions[key]
        var absent = !hasOwn(propsData, key)
        var value = propsData[key]
        // handle boolean props
        if (isType(Boolean, prop.type)) {
          if (absent && !hasOwn(prop, 'default')) {
            value = false
          } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
            value = true
          }
        }
        // check default value
        if (value === undefined) {
          value = getPropDefaultValue(vm, prop, key)
          // since the default value is a fresh copy,
          // make sure to observe it.
          var prevShouldConvert = observerState.shouldConvert
          observerState.shouldConvert = true
          observe(value)
          observerState.shouldConvert = prevShouldConvert
        }
        if (false) {
          assertProp(prop, key, value, vm, absent)
        }
        return value
      }

      /**
       * Get the default value of a prop.
       */
      function getPropDefaultValue (vm, prop, key) {
        // no default, return undefined
        if (!hasOwn(prop, 'default')) {
          return undefined
        }
        var def = prop.default
        // warn against non-factory defaults for Object & Array
        if (false) {
          warn(
            'Invalid default value for prop "' + key + '": ' +
            'Props with type Object/Array must use a factory function ' +
            'to return the default value.',
            vm
          )
        }
        // the raw prop value was also undefined from previous render,
        // return previous default value to avoid unnecessary watcher trigger
        if (vm && vm.$options.propsData &&
          vm.$options.propsData[key] === undefined &&
          vm._props[key] !== undefined) {
          return vm._props[key]
        }
        // call factory function for non-Function types
        // a value is Function if its prototype is function even across different execution context
        return typeof def === 'function' && getType(prop.type) !== 'Function'
          ? def.call(vm)
          : def
      }

      /**
       * Assert whether a prop is valid.
       */
      function assertProp (prop,
                           name,
                           value,
                           vm,
                           absent) {
        if (prop.required && absent) {
          warn(
            'Missing required prop: "' + name + '"',
            vm
          )
          return
        }
        if (value == null && !prop.required) {
          return
        }
        var type = prop.type
        var valid = !type || type === true
        var expectedTypes = []
        if (type) {
          if (!Array.isArray(type)) {
            type = [type]
          }
          for (var i = 0; i < type.length && !valid; i++) {
            var assertedType = assertType(value, type[i])
            expectedTypes.push(assertedType.expectedType || '')
            valid = assertedType.valid
          }
        }
        if (!valid) {
          warn(
            'Invalid prop: type check failed for prop "' + name + '".' +
            ' Expected ' + expectedTypes.map(capitalize).join(', ') +
            ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
            vm
          )
          return
        }
        var validator = prop.validator
        if (validator) {
          if (!validator(value)) {
            warn(
              'Invalid prop: custom validator check failed for prop "' + name + '".',
              vm
            )
          }
        }
      }

      /**
       * Assert the type of a value
       */
      function assertType (value, type) {
        var valid
        var expectedType = getType(type)
        if (expectedType === 'String') {
          valid = typeof value === (expectedType = 'string')
        } else if (expectedType === 'Number') {
          valid = typeof value === (expectedType = 'number')
        } else if (expectedType === 'Boolean') {
          valid = typeof value === (expectedType = 'boolean')
        } else if (expectedType === 'Function') {
          valid = typeof value === (expectedType = 'function')
        } else if (expectedType === 'Object') {
          valid = isPlainObject(value)
        } else if (expectedType === 'Array') {
          valid = Array.isArray(value)
        } else {
          valid = value instanceof type
        }
        return {
          valid: valid,
          expectedType: expectedType
        }
      }

      /**
       * Use function string name to check built-in types,
       * because a simple equality check will fail when running
       * across different vms / iframes.
       */
      function getType (fn) {
        var match = fn && fn.toString().match(/^\s*function (\w+)/)
        return match && match[1]
      }

      function isType (type, fn) {
        if (!Array.isArray(fn)) {
          return getType(fn) === getType(type)
        }
        for (var i = 0, len = fn.length; i < len; i++) {
          if (getType(fn[i]) === getType(type)) {
            return true
          }
        }
        /* istanbul ignore next */
        return false
      }

      function handleError (err, vm, info) {
        if (config.errorHandler) {
          config.errorHandler.call(null, err, vm, info)
        } else {
          if (false) {
            warn(('Error in ' + info + ':'), vm)
          }
          /* istanbul ignore else */
          if (inBrowser && typeof console !== 'undefined') {
            console.error(err)
          } else {
            throw err
          }
        }
      }

      /* not type checking this file because flow doesn't play well with Proxy */

      var initProxy

      if (false) {
        var allowedGlobals = makeMap(
          'Infinity,undefined,NaN,isFinite,isNaN,' +
          'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
          'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
          'require' // for Webpack/Browserify
        )

        var warnNonPresent = function (target, key) {
          warn(
            'Property or method "' + key + '" is not defined on the instance but ' +
            'referenced during render. Make sure to declare reactive data ' +
            'properties in the data option.',
            target
          )
        }

        var hasProxy =
          typeof Proxy !== 'undefined' &&
          Proxy.toString().match(/native code/)

        if (hasProxy) {
          var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta')
          config.keyCodes = new Proxy(config.keyCodes, {
            set: function set (target, key, value) {
              if (isBuiltInModifier(key)) {
                warn(('Avoid overwriting built-in modifier in config.keyCodes: .' + key))
                return false
              } else {
                target[key] = value
                return true
              }
            }
          })
        }

        var hasHandler = {
          has: function has (target, key) {
            var has = key in target
            var isAllowed = allowedGlobals(key) || key.charAt(0) === '_'
            if (!has && !isAllowed) {
              warnNonPresent(target, key)
            }
            return has || !isAllowed
          }
        }

        var getHandler = {
          get: function get (target, key) {
            if (typeof key === 'string' && !(key in target)) {
              warnNonPresent(target, key)
            }
            return target[key]
          }
        }

        initProxy = function initProxy (vm) {
          if (hasProxy) {
            // determine which proxy handler to use
            var options = vm.$options
            var handlers = options.render && options.render._withStripped
              ? getHandler
              : hasHandler
            vm._renderProxy = new Proxy(vm, handlers)
          } else {
            vm._renderProxy = vm
          }
        }
      }

      var mark
      var measure

      if (false) {
        var perf = inBrowser && window.performance
        /* istanbul ignore if */
        if (
          perf &&
          perf.mark &&
          perf.measure &&
          perf.clearMarks &&
          perf.clearMeasures
        ) {
          mark = function (tag) { return perf.mark(tag) }
          measure = function (name, startTag, endTag) {
            perf.measure(name, startTag, endTag)
            perf.clearMarks(startTag)
            perf.clearMarks(endTag)
            perf.clearMeasures(name)
          }
        }
      }

      /*  */

      var VNode = function VNode (tag,
                                  data,
                                  children,
                                  text,
                                  elm,
                                  context,
                                  componentOptions) {
        this.tag = tag
        this.data = data
        this.children = children
        this.text = text
        this.elm = elm
        this.ns = undefined
        this.context = context
        this.functionalContext = undefined
        this.key = data && data.key
        this.componentOptions = componentOptions
        this.componentInstance = undefined
        this.parent = undefined
        this.raw = false
        this.isStatic = false
        this.isRootInsert = true
        this.isComment = false
        this.isCloned = false
        this.isOnce = false
      }

      var prototypeAccessors = {child: {}}

// DEPRECATED: alias for componentInstance for backwards compat.
      /* istanbul ignore next */
      prototypeAccessors.child.get = function () {
        return this.componentInstance
      }

      Object.defineProperties(VNode.prototype, prototypeAccessors)

      var createEmptyVNode = function () {
        var node = new VNode()
        node.text = ''
        node.isComment = true
        return node
      }

      function createTextVNode (val) {
        return new VNode(undefined, undefined, undefined, String(val))
      }

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
      function cloneVNode (vnode) {
        var cloned = new VNode(
          vnode.tag,
          vnode.data,
          vnode.children,
          vnode.text,
          vnode.elm,
          vnode.context,
          vnode.componentOptions
        )
        cloned.ns = vnode.ns
        cloned.isStatic = vnode.isStatic
        cloned.key = vnode.key
        cloned.isCloned = true
        return cloned
      }

      function cloneVNodes (vnodes) {
        var len = vnodes.length
        var res = new Array(len)
        for (var i = 0; i < len; i++) {
          res[i] = cloneVNode(vnodes[i])
        }
        return res
      }

      /*  */

      var normalizeEvent = cached(function (name) {
        var once$$1 = name.charAt(0) === '~' // Prefixed last, checked first
        name = once$$1 ? name.slice(1) : name
        var capture = name.charAt(0) === '!'
        name = capture ? name.slice(1) : name
        return {
          name: name,
          once: once$$1,
          capture: capture
        }
      })

      function createFnInvoker (fns) {
        function invoker () {
          var arguments$1 = arguments

          var fns = invoker.fns
          if (Array.isArray(fns)) {
            for (var i = 0; i < fns.length; i++) {
              fns[i].apply(null, arguments$1)
            }
          } else {
            // return handler return value for single handlers
            return fns.apply(null, arguments)
          }
        }

        invoker.fns = fns
        return invoker
      }

      function updateListeners (on,
                                oldOn,
                                add,
                                remove$$1,
                                vm) {
        var name, cur, old, event
        for (name in on) {
          cur = on[name]
          old = oldOn[name]
          event = normalizeEvent(name)
          if (!cur) {
            'production' !== 'production' && warn(
              'Invalid handler for event "' + (event.name) + '": got ' + String(cur),
              vm
            )
          } else if (!old) {
            if (!cur.fns) {
              cur = on[name] = createFnInvoker(cur)
            }
            add(event.name, cur, event.once, event.capture)
          } else if (cur !== old) {
            old.fns = cur
            on[name] = old
          }
        }
        for (name in oldOn) {
          if (!on[name]) {
            event = normalizeEvent(name)
            remove$$1(event.name, oldOn[name], event.capture)
          }
        }
      }

      /*  */

      function mergeVNodeHook (def, hookKey, hook) {
        var invoker
        var oldHook = def[hookKey]

        function wrappedHook () {
          hook.apply(this, arguments)
          // important: remove merged hook to ensure it's called only once
          // and prevent memory leak
          remove(invoker.fns, wrappedHook)
        }

        if (!oldHook) {
          // no existing hook
          invoker = createFnInvoker([wrappedHook])
        } else {
          /* istanbul ignore if */
          if (oldHook.fns && oldHook.merged) {
            // already a merged invoker
            invoker = oldHook
            invoker.fns.push(wrappedHook)
          } else {
            // existing plain hook
            invoker = createFnInvoker([oldHook, wrappedHook])
          }
        }

        invoker.merged = true
        def[hookKey] = invoker
      }

      /*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
      function simpleNormalizeChildren (children) {
        for (var i = 0; i < children.length; i++) {
          if (Array.isArray(children[i])) {
            return Array.prototype.concat.apply([], children)
          }
        }
        return children
      }

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
      function normalizeChildren (children) {
        return isPrimitive(children)
          ? [createTextVNode(children)]
          : Array.isArray(children)
            ? normalizeArrayChildren(children)
            : undefined
      }

      function normalizeArrayChildren (children, nestedIndex) {
        var res = []
        var i, c, last
        for (i = 0; i < children.length; i++) {
          c = children[i]
          if (c == null || typeof c === 'boolean') { continue }
          last = res[res.length - 1]
          //  nested
          if (Array.isArray(c)) {
            res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + '_' + i)))
          } else if (isPrimitive(c)) {
            if (last && last.text) {
              last.text += String(c)
            } else if (c !== '') {
              // convert primitive to vnode
              res.push(createTextVNode(c))
            }
          } else {
            if (c.text && last && last.text) {
              res[res.length - 1] = createTextVNode(last.text + c.text)
            } else {
              // default key for nested array children (likely generated by v-for)
              if (c.tag && c.key == null && nestedIndex != null) {
                c.key = '__vlist' + nestedIndex + '_' + i + '__'
              }
              res.push(c)
            }
          }
        }
        return res
      }

      /*  */

      function getFirstComponentChild (children) {
        return children && children.filter(function (c) { return c && c.componentOptions })[0]
      }

      /*  */

      function initEvents (vm) {
        vm._events = Object.create(null)
        vm._hasHookEvent = false
        // init parent attached events
        var listeners = vm.$options._parentListeners
        if (listeners) {
          updateComponentListeners(vm, listeners)
        }
      }

      var target

      function add (event, fn, once$$1) {
        if (once$$1) {
          target.$once(event, fn)
        } else {
          target.$on(event, fn)
        }
      }

      function remove$1 (event, fn) {
        target.$off(event, fn)
      }

      function updateComponentListeners (vm,
                                         listeners,
                                         oldListeners) {
        target = vm
        updateListeners(listeners, oldListeners || {}, add, remove$1, vm)
      }

      function eventsMixin (Vue) {
        var hookRE = /^hook:/
        Vue.prototype.$on = function (event, fn) {
          var this$1 = this

          var vm = this
          if (Array.isArray(event)) {
            for (var i = 0, l = event.length; i < l; i++) {
              this$1.$on(event[i], fn)
            }
          } else {
            (vm._events[event] || (vm._events[event] = [])).push(fn)
            // optimize hook:event cost by using a boolean flag marked at registration
            // instead of a hash lookup
            if (hookRE.test(event)) {
              vm._hasHookEvent = true
            }
          }
          return vm
        }

        Vue.prototype.$once = function (event, fn) {
          var vm = this

          function on () {
            vm.$off(event, on)
            fn.apply(vm, arguments)
          }

          on.fn = fn
          vm.$on(event, on)
          return vm
        }

        Vue.prototype.$off = function (event, fn) {
          var this$1 = this

          var vm = this
          // all
          if (!arguments.length) {
            vm._events = Object.create(null)
            return vm
          }
          // array of events
          if (Array.isArray(event)) {
            for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
              this$1.$off(event[i$1], fn)
            }
            return vm
          }
          // specific event
          var cbs = vm._events[event]
          if (!cbs) {
            return vm
          }
          if (arguments.length === 1) {
            vm._events[event] = null
            return vm
          }
          // specific handler
          var cb
          var i = cbs.length
          while (i--) {
            cb = cbs[i]
            if (cb === fn || cb.fn === fn) {
              cbs.splice(i, 1)
              break
            }
          }
          return vm
        }

        Vue.prototype.$emit = function (event) {
          var vm = this
          if (false) {
            var lowerCaseEvent = event.toLowerCase()
            if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
              tip(
                'Event "' + lowerCaseEvent + '" is emitted in component ' +
                (formatComponentName(vm)) + ' but the handler is registered for "' + event + '". ' +
                'Note that HTML attributes are case-insensitive and you cannot use ' +
                'v-on to listen to camelCase events when using in-DOM templates. ' +
                'You should probably use "' + (hyphenate(event)) + '" instead of "' + event + '".'
              )
            }
          }
          var cbs = vm._events[event]
          if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs
            var args = toArray(arguments, 1)
            for (var i = 0, l = cbs.length; i < l; i++) {
              cbs[i].apply(vm, args)
            }
          }
          return vm
        }
      }

      /*  */

      /**
       * Runtime helper for resolving raw children VNodes into a slot object.
       */
      function resolveSlots (children,
                             context) {
        var slots = {}
        if (!children) {
          return slots
        }
        var defaultSlot = []
        var name, child
        for (var i = 0, l = children.length; i < l; i++) {
          child = children[i]
          // named slots should only be respected if the vnode was rendered in the
          // same context.
          if ((child.context === context || child.functionalContext === context) &&
            child.data && (name = child.data.slot)) {
            var slot = (slots[name] || (slots[name] = []))
            if (child.tag === 'template') {
              slot.push.apply(slot, child.children)
            } else {
              slot.push(child)
            }
          } else {
            defaultSlot.push(child)
          }
        }
        // ignore whitespace
        if (!defaultSlot.every(isWhitespace)) {
          slots.default = defaultSlot
        }
        return slots
      }

      function isWhitespace (node) {
        return node.isComment || node.text === ' '
      }

      function resolveScopedSlots (fns) {
        var res = {}
        for (var i = 0; i < fns.length; i++) {
          res[fns[i][0]] = fns[i][1]
        }
        return res
      }

      /*  */

      var activeInstance = null

      function initLifecycle (vm) {
        var options = vm.$options

        // locate first non-abstract parent
        var parent = options.parent
        if (parent && !options.abstract) {
          while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent
          }
          parent.$children.push(vm)
        }

        vm.$parent = parent
        vm.$root = parent ? parent.$root : vm

        vm.$children = []
        vm.$refs = {}

        vm._watcher = null
        vm._inactive = null
        vm._directInactive = false
        vm._isMounted = false
        vm._isDestroyed = false
        vm._isBeingDestroyed = false
      }

      function lifecycleMixin (Vue) {
        Vue.prototype._update = function (vnode, hydrating) {
          var vm = this
          if (vm._isMounted) {
            callHook(vm, 'beforeUpdate')
          }
          var prevEl = vm.$el
          var prevVnode = vm._vnode
          var prevActiveInstance = activeInstance
          activeInstance = vm
          vm._vnode = vnode
          // Vue.prototype.__patch__ is injected in entry points
          // based on the rendering backend used.
          if (!prevVnode) {
            // initial render
            vm.$el = vm.__patch__(
              vm.$el, vnode, hydrating, false /* removeOnly */,
              vm.$options._parentElm,
              vm.$options._refElm
            )
          } else {
            // updates
            vm.$el = vm.__patch__(prevVnode, vnode)
          }
          activeInstance = prevActiveInstance
          // update __vue__ reference
          if (prevEl) {
            prevEl.__vue__ = null
          }
          if (vm.$el) {
            vm.$el.__vue__ = vm
          }
          // if parent is an HOC, update its $el as well
          if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
            vm.$parent.$el = vm.$el
          }
          // updated hook is called by the scheduler to ensure that children are
          // updated in a parent's updated hook.
        }

        Vue.prototype.$forceUpdate = function () {
          var vm = this
          if (vm._watcher) {
            vm._watcher.update()
          }
        }

        Vue.prototype.$destroy = function () {
          var vm = this
          if (vm._isBeingDestroyed) {
            return
          }
          callHook(vm, 'beforeDestroy')
          vm._isBeingDestroyed = true
          // remove self from parent
          var parent = vm.$parent
          if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
            remove(parent.$children, vm)
          }
          // teardown watchers
          if (vm._watcher) {
            vm._watcher.teardown()
          }
          var i = vm._watchers.length
          while (i--) {
            vm._watchers[i].teardown()
          }
          // remove reference from data ob
          // frozen object may not have observer.
          if (vm._data.__ob__) {
            vm._data.__ob__.vmCount--
          }
          // call the last hook...
          vm._isDestroyed = true
          // invoke destroy hooks on current rendered tree
          vm.__patch__(vm._vnode, null)
          // fire destroyed hook
          callHook(vm, 'destroyed')
          // turn off all instance listeners.
          vm.$off()
          // remove __vue__ reference
          if (vm.$el) {
            vm.$el.__vue__ = null
          }
          // remove reference to DOM nodes (prevents leak)
          vm.$options._parentElm = vm.$options._refElm = null
        }
      }

      function mountComponent (vm,
                               el,
                               hydrating) {
        vm.$el = el
        if (!vm.$options.render) {
          vm.$options.render = createEmptyVNode
          if (false) {
            /* istanbul ignore if */
            if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
              vm.$options.el || el) {
              warn(
                'You are using the runtime-only build of Vue where the template ' +
                'compiler is not available. Either pre-compile the templates into ' +
                'render functions, or use the compiler-included build.',
                vm
              )
            } else {
              warn(
                'Failed to mount component: template or render function not defined.',
                vm
              )
            }
          }
        }
        callHook(vm, 'beforeMount')

        var updateComponent
        /* istanbul ignore if */
        if (false) {
          updateComponent = function () {
            var name = vm._name
            var id = vm._uid
            var startTag = 'vue-perf-start:' + id
            var endTag = 'vue-perf-end:' + id

            mark(startTag)
            var vnode = vm._render()
            mark(endTag)
            measure((name + ' render'), startTag, endTag)

            mark(startTag)
            vm._update(vnode, hydrating)
            mark(endTag)
            measure((name + ' patch'), startTag, endTag)
          }
        } else {
          updateComponent = function () {
            vm._update(vm._render(), hydrating)
          }
        }

        vm._watcher = new Watcher(vm, updateComponent, noop)
        hydrating = false

        // manually mounted instance, call mounted on self
        // mounted is called for render-created child components in its inserted hook
        if (vm.$vnode == null) {
          vm._isMounted = true
          callHook(vm, 'mounted')
        }
        return vm
      }

      function updateChildComponent (vm,
                                     propsData,
                                     listeners,
                                     parentVnode,
                                     renderChildren) {
        // determine whether component has slot children
        // we need to do this before overwriting $options._renderChildren
        var hasChildren = !!(
          renderChildren ||               // has new static slots
          vm.$options._renderChildren ||  // has old static slots
          parentVnode.data.scopedSlots || // has new scoped slots
          vm.$scopedSlots !== emptyObject // has old scoped slots
        )

        vm.$options._parentVnode = parentVnode
        vm.$vnode = parentVnode // update vm's placeholder node without re-render
        if (vm._vnode) { // update child tree's parent
          vm._vnode.parent = parentVnode
        }
        vm.$options._renderChildren = renderChildren

        // update props
        if (propsData && vm.$options.props) {
          observerState.shouldConvert = false
          if (false) {
            observerState.isSettingProps = true
          }
          var props = vm._props
          var propKeys = vm.$options._propKeys || []
          for (var i = 0; i < propKeys.length; i++) {
            var key = propKeys[i]
            props[key] = validateProp(key, vm.$options.props, propsData, vm)
          }
          observerState.shouldConvert = true
          if (false) {
            observerState.isSettingProps = false
          }
          // keep a copy of raw propsData
          vm.$options.propsData = propsData
        }
        // update listeners
        if (listeners) {
          var oldListeners = vm.$options._parentListeners
          vm.$options._parentListeners = listeners
          updateComponentListeners(vm, listeners, oldListeners)
        }
        // resolve slots + force update if has children
        if (hasChildren) {
          vm.$slots = resolveSlots(renderChildren, parentVnode.context)
          vm.$forceUpdate()
        }
      }

      function isInInactiveTree (vm) {
        while (vm && (vm = vm.$parent)) {
          if (vm._inactive) { return true }
        }
        return false
      }

      function activateChildComponent (vm, direct) {
        if (direct) {
          vm._directInactive = false
          if (isInInactiveTree(vm)) {
            return
          }
        } else if (vm._directInactive) {
          return
        }
        if (vm._inactive || vm._inactive == null) {
          vm._inactive = false
          for (var i = 0; i < vm.$children.length; i++) {
            activateChildComponent(vm.$children[i])
          }
          callHook(vm, 'activated')
        }
      }

      function deactivateChildComponent (vm, direct) {
        if (direct) {
          vm._directInactive = true
          if (isInInactiveTree(vm)) {
            return
          }
        }
        if (!vm._inactive) {
          vm._inactive = true
          for (var i = 0; i < vm.$children.length; i++) {
            deactivateChildComponent(vm.$children[i])
          }
          callHook(vm, 'deactivated')
        }
      }

      function callHook (vm, hook) {
        var handlers = vm.$options[hook]
        if (handlers) {
          for (var i = 0, j = handlers.length; i < j; i++) {
            try {
              handlers[i].call(vm)
            } catch (e) {
              handleError(e, vm, (hook + ' hook'))
            }
          }
        }
        if (vm._hasHookEvent) {
          vm.$emit('hook:' + hook)
        }
      }

      /*  */

      var queue = []
      var has = {}
      var circular = {}
      var waiting = false
      var flushing = false
      var index = 0

      /**
       * Reset the scheduler's state.
       */
      function resetSchedulerState () {
        queue.length = 0
        has = {}
        if (false) {
          circular = {}
        }
        waiting = flushing = false
      }

      /**
       * Flush both queues and run the watchers.
       */
      function flushSchedulerQueue () {
        flushing = true
        var watcher, id, vm

        // Sort queue before flush.
        // This ensures that:
        // 1. Components are updated from parent to child. (because parent is always
        //    created before the child)
        // 2. A component's user watchers are run before its render watcher (because
        //    user watchers are created before the render watcher)
        // 3. If a component is destroyed during a parent component's watcher run,
        //    its watchers can be skipped.
        queue.sort(function (a, b) { return a.id - b.id })

        // do not cache length because more watchers might be pushed
        // as we run existing watchers
        for (index = 0; index < queue.length; index++) {
          watcher = queue[index]
          id = watcher.id
          has[id] = null
          watcher.run()
          // in dev build, check and stop circular updates.
          if (false) {
            circular[id] = (circular[id] || 0) + 1
            if (circular[id] > config._maxUpdateCount) {
              warn(
                'You may have an infinite update loop ' + (
                  watcher.user
                    ? ('in watcher with expression "' + (watcher.expression) + '"')
                    : 'in a component render function.'
                ),
                watcher.vm
              )
              break
            }
          }
        }

        // reset scheduler before updated hook called
        var oldQueue = queue.slice()
        resetSchedulerState()

        // call updated hooks
        index = oldQueue.length
        while (index--) {
          watcher = oldQueue[index]
          vm = watcher.vm
          if (vm._watcher === watcher && vm._isMounted) {
            callHook(vm, 'updated')
          }
        }

        // devtool hook
        /* istanbul ignore if */
        if (devtools && config.devtools) {
          devtools.emit('flush')
        }
      }

      /**
       * Push a watcher into the watcher queue.
       * Jobs with duplicate IDs will be skipped unless it's
       * pushed when the queue is being flushed.
       */
      function queueWatcher (watcher) {
        var id = watcher.id
        if (has[id] == null) {
          has[id] = true
          if (!flushing) {
            queue.push(watcher)
          } else {
            // if already flushing, splice the watcher based on its id
            // if already past its id, it will be run next immediately.
            var i = queue.length - 1
            while (i >= 0 && queue[i].id > watcher.id) {
              i--
            }
            queue.splice(Math.max(i, index) + 1, 0, watcher)
          }
          // queue the flush
          if (!waiting) {
            waiting = true
            nextTick(flushSchedulerQueue)
          }
        }
      }

      /*  */

      var uid$2 = 0

      /**
       * A watcher parses an expression, collects dependencies,
       * and fires callback when the expression value changes.
       * This is used for both the $watch() api and directives.
       */
      var Watcher = function Watcher (vm,
                                      expOrFn,
                                      cb,
                                      options) {
        this.vm = vm
        vm._watchers.push(this)
        // options
        if (options) {
          this.deep = !!options.deep
          this.user = !!options.user
          this.lazy = !!options.lazy
          this.sync = !!options.sync
        } else {
          this.deep = this.user = this.lazy = this.sync = false
        }
        this.cb = cb
        this.id = ++uid$2 // uid for batching
        this.active = true
        this.dirty = this.lazy // for lazy watchers
        this.deps = []
        this.newDeps = []
        this.depIds = new _Set()
        this.newDepIds = new _Set()
        this.expression = false
          ? expOrFn.toString()
          : ''
        // parse expression for getter
        if (typeof expOrFn === 'function') {
          this.getter = expOrFn
        } else {
          this.getter = parsePath(expOrFn)
          if (!this.getter) {
            this.getter = function () {}
            'production' !== 'production' && warn(
              'Failed watching path: "' + expOrFn + '" ' +
              'Watcher only accepts simple dot-delimited paths. ' +
              'For full control, use a function instead.',
              vm
            )
          }
        }
        this.value = this.lazy
          ? undefined
          : this.get()
      }

      /**
       * Evaluate the getter, and re-collect dependencies.
       */
      Watcher.prototype.get = function get () {
        pushTarget(this)
        var value
        var vm = this.vm
        if (this.user) {
          try {
            value = this.getter.call(vm, vm)
          } catch (e) {
            handleError(e, vm, ('getter for watcher "' + (this.expression) + '"'))
          }
        } else {
          value = this.getter.call(vm, vm)
        }
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
          traverse(value)
        }
        popTarget()
        this.cleanupDeps()
        return value
      }

      /**
       * Add a dependency to this directive.
       */
      Watcher.prototype.addDep = function addDep (dep) {
        var id = dep.id
        if (!this.newDepIds.has(id)) {
          this.newDepIds.add(id)
          this.newDeps.push(dep)
          if (!this.depIds.has(id)) {
            dep.addSub(this)
          }
        }
      }

      /**
       * Clean up for dependency collection.
       */
      Watcher.prototype.cleanupDeps = function cleanupDeps () {
        var this$1 = this

        var i = this.deps.length
        while (i--) {
          var dep = this$1.deps[i]
          if (!this$1.newDepIds.has(dep.id)) {
            dep.removeSub(this$1)
          }
        }
        var tmp = this.depIds
        this.depIds = this.newDepIds
        this.newDepIds = tmp
        this.newDepIds.clear()
        tmp = this.deps
        this.deps = this.newDeps
        this.newDeps = tmp
        this.newDeps.length = 0
      }

      /**
       * Subscriber interface.
       * Will be called when a dependency changes.
       */
      Watcher.prototype.update = function update () {
        /* istanbul ignore else */
        if (this.lazy) {
          this.dirty = true
        } else if (this.sync) {
          this.run()
        } else {
          queueWatcher(this)
        }
      }

      /**
       * Scheduler job interface.
       * Will be called by the scheduler.
       */
      Watcher.prototype.run = function run () {
        if (this.active) {
          var value = this.get()
          if (
            value !== this.value ||
            // Deep watchers and watchers on Object/Arrays should fire even
            // when the value is the same, because the value may
            // have mutated.
            isObject(value) ||
            this.deep
          ) {
            // set new value
            var oldValue = this.value
            this.value = value
            if (this.user) {
              try {
                this.cb.call(this.vm, value, oldValue)
              } catch (e) {
                handleError(e, this.vm, ('callback for watcher "' + (this.expression) + '"'))
              }
            } else {
              this.cb.call(this.vm, value, oldValue)
            }
          }
        }
      }

      /**
       * Evaluate the value of the watcher.
       * This only gets called for lazy watchers.
       */
      Watcher.prototype.evaluate = function evaluate () {
        this.value = this.get()
        this.dirty = false
      }

      /**
       * Depend on all deps collected by this watcher.
       */
      Watcher.prototype.depend = function depend () {
        var this$1 = this

        var i = this.deps.length
        while (i--) {
          this$1.deps[i].depend()
        }
      }

      /**
       * Remove self from all dependencies' subscriber list.
       */
      Watcher.prototype.teardown = function teardown () {
        var this$1 = this

        if (this.active) {
          // remove self from vm's watcher list
          // this is a somewhat expensive operation so we skip it
          // if the vm is being destroyed.
          if (!this.vm._isBeingDestroyed) {
            remove(this.vm._watchers, this)
          }
          var i = this.deps.length
          while (i--) {
            this$1.deps[i].removeSub(this$1)
          }
          this.active = false
        }
      }

      /**
       * Recursively traverse an object to evoke all converted
       * getters, so that every nested property inside the object
       * is collected as a "deep" dependency.
       */
      var seenObjects = new _Set()

      function traverse (val) {
        seenObjects.clear()
        _traverse(val, seenObjects)
      }

      function _traverse (val, seen) {
        var i, keys
        var isA = Array.isArray(val)
        if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
          return
        }
        if (val.__ob__) {
          var depId = val.__ob__.dep.id
          if (seen.has(depId)) {
            return
          }
          seen.add(depId)
        }
        if (isA) {
          i = val.length
          while (i--) { _traverse(val[i], seen) }
        } else {
          keys = Object.keys(val)
          i = keys.length
          while (i--) { _traverse(val[keys[i]], seen) }
        }
      }

      /*  */

      var sharedPropertyDefinition = {
        enumerable: true,
        configurable: true,
        get: noop,
        set: noop
      }

      function proxy (target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter () {
          return this[sourceKey][key]
        }
        sharedPropertyDefinition.set = function proxySetter (val) {
          this[sourceKey][key] = val
        }
        Object.defineProperty(target, key, sharedPropertyDefinition)
      }

      function initState (vm) {
        vm._watchers = []
        var opts = vm.$options
        if (opts.props) { initProps(vm, opts.props) }
        if (opts.methods) { initMethods(vm, opts.methods) }
        if (opts.data) {
          initData(vm)
        } else {
          observe(vm._data = {}, true /* asRootData */)
        }
        if (opts.computed) { initComputed(vm, opts.computed) }
        if (opts.watch) { initWatch(vm, opts.watch) }
      }

      var isReservedProp = {key: 1, ref: 1, slot: 1}

      function initProps (vm, propsOptions) {
        var propsData = vm.$options.propsData || {}
        var props = vm._props = {}
        // cache prop keys so that future props updates can iterate using Array
        // instead of dynamic object key enumeration.
        var keys = vm.$options._propKeys = []
        var isRoot = !vm.$parent
        // root instance props should be converted
        observerState.shouldConvert = isRoot
        var loop = function (key) {
          keys.push(key)
          var value = validateProp(key, propsOptions, propsData, vm)
          /* istanbul ignore else */
          if (false) {
            if (isReservedProp[key]) {
              warn(
                ('"' + key + '" is a reserved attribute and cannot be used as component prop.'),
                vm
              )
            }
            defineReactive$$1(props, key, value, function () {
              if (vm.$parent && !observerState.isSettingProps) {
                warn(
                  'Avoid mutating a prop directly since the value will be ' +
                  'overwritten whenever the parent component re-renders. ' +
                  'Instead, use a data or computed property based on the prop\'s ' +
                  'value. Prop being mutated: "' + key + '"',
                  vm
                )
              }
            })
          } else {
            defineReactive$$1(props, key, value)
          }
          // static props are already proxied on the component's prototype
          // during Vue.extend(). We only need to proxy props defined at
          // instantiation here.
          if (!(key in vm)) {
            proxy(vm, '_props', key)
          }
        }

        for (var key in propsOptions) loop(key);
        observerState.shouldConvert = true
      }

      function initData (vm) {
        var data = vm.$options.data
        data = vm._data = typeof data === 'function'
          ? getData(data, vm)
          : data || {}
        if (!isPlainObject(data)) {
          data = {}
          'production' !== 'production' && warn(
            'data functions should return an object:\n' +
            'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
            vm
          )
        }
        // proxy data on instance
        var keys = Object.keys(data)
        var props = vm.$options.props
        var i = keys.length
        while (i--) {
          if (props && hasOwn(props, keys[i])) {
            'production' !== 'production' && warn(
              'The data property "' + (keys[i]) + '" is already declared as a prop. ' +
              'Use prop default value instead.',
              vm
            )
          } else if (!isReserved(keys[i])) {
            proxy(vm, '_data', keys[i])
          }
        }
        // observe data
        observe(data, true /* asRootData */)
      }

      function getData (data, vm) {
        try {
          return data.call(vm)
        } catch (e) {
          handleError(e, vm, 'data()')
          return {}
        }
      }

      var computedWatcherOptions = {lazy: true}

      function initComputed (vm, computed) {
        var watchers = vm._computedWatchers = Object.create(null)

        for (var key in computed) {
          var userDef = computed[key]
          var getter = typeof userDef === 'function' ? userDef : userDef.get
          if (false) {
            if (getter === undefined) {
              warn(
                ('No getter function has been defined for computed property "' + key + '".'),
                vm
              )
              getter = noop
            }
          }
          // create internal watcher for the computed property.
          watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions)

          // component-defined computed properties are already defined on the
          // component prototype. We only need to define computed properties defined
          // at instantiation here.
          if (!(key in vm)) {
            defineComputed(vm, key, userDef)
          }
        }
      }

      function defineComputed (target, key, userDef) {
        if (typeof userDef === 'function') {
          sharedPropertyDefinition.get = createComputedGetter(key)
          sharedPropertyDefinition.set = noop
        } else {
          sharedPropertyDefinition.get = userDef.get
            ? userDef.cache !== false
              ? createComputedGetter(key)
              : userDef.get
            : noop
          sharedPropertyDefinition.set = userDef.set
            ? userDef.set
            : noop
        }
        Object.defineProperty(target, key, sharedPropertyDefinition)
      }

      function createComputedGetter (key) {
        return function computedGetter () {
          var watcher = this._computedWatchers && this._computedWatchers[key]
          if (watcher) {
            if (watcher.dirty) {
              watcher.evaluate()
            }
            if (Dep.target) {
              watcher.depend()
            }
            return watcher.value
          }
        }
      }

      function initMethods (vm, methods) {
        var props = vm.$options.props
        for (var key in methods) {
          vm[key] = methods[key] == null ? noop : bind(methods[key], vm)
          if (false) {
            if (methods[key] == null) {
              warn(
                'method "' + key + '" has an undefined value in the component definition. ' +
                'Did you reference the function correctly?',
                vm
              )
            }
            if (props && hasOwn(props, key)) {
              warn(
                ('method "' + key + '" has already been defined as a prop.'),
                vm
              )
            }
          }
        }
      }

      function initWatch (vm, watch) {
        for (var key in watch) {
          var handler = watch[key]
          if (Array.isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
              createWatcher(vm, key, handler[i])
            }
          } else {
            createWatcher(vm, key, handler)
          }
        }
      }

      function createWatcher (vm, key, handler) {
        var options
        if (isPlainObject(handler)) {
          options = handler
          handler = handler.handler
        }
        if (typeof handler === 'string') {
          handler = vm[handler]
        }
        vm.$watch(key, handler, options)
      }

      function stateMixin (Vue) {
        // flow somehow has problems with directly declared definition object
        // when using Object.defineProperty, so we have to procedurally build up
        // the object here.
        var dataDef = {}
        dataDef.get = function () { return this._data }
        var propsDef = {}
        propsDef.get = function () { return this._props }
        if (false) {
          dataDef.set = function (newData) {
            warn(
              'Avoid replacing instance root $data. ' +
              'Use nested data properties instead.',
              this
            )
          }
          propsDef.set = function () {
            warn('$props is readonly.', this)
          }
        }
        Object.defineProperty(Vue.prototype, '$data', dataDef)
        Object.defineProperty(Vue.prototype, '$props', propsDef)

        Vue.prototype.$set = set
        Vue.prototype.$delete = del

        Vue.prototype.$watch = function (expOrFn,
                                         cb,
                                         options) {
          var vm = this
          options = options || {}
          options.user = true
          var watcher = new Watcher(vm, expOrFn, cb, options)
          if (options.immediate) {
            cb.call(vm, watcher.value)
          }
          return function unwatchFn () {
            watcher.teardown()
          }
        }
      }

      /*  */

// hooks to be invoked on component VNodes during patch
      var componentVNodeHooks = {
        init: function init (vnode,
                             hydrating,
                             parentElm,
                             refElm) {
          if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
            var child = vnode.componentInstance = createComponentInstanceForVnode(
              vnode,
              activeInstance,
              parentElm,
              refElm
            )
            child.$mount(hydrating ? vnode.elm : undefined, hydrating)
          } else if (vnode.data.keepAlive) {
            // kept-alive components, treat as a patch
            var mountedNode = vnode // work around flow
            componentVNodeHooks.prepatch(mountedNode, mountedNode)
          }
        },

        prepatch: function prepatch (oldVnode, vnode) {
          var options = vnode.componentOptions
          var child = vnode.componentInstance = oldVnode.componentInstance
          updateChildComponent(
            child,
            options.propsData, // updated props
            options.listeners, // updated listeners
            vnode, // new parent vnode
            options.children // new children
          )
        },

        insert: function insert (vnode) {
          if (!vnode.componentInstance._isMounted) {
            vnode.componentInstance._isMounted = true
            callHook(vnode.componentInstance, 'mounted')
          }
          if (vnode.data.keepAlive) {
            activateChildComponent(vnode.componentInstance, true /* direct */)
          }
        },

        destroy: function destroy (vnode) {
          if (!vnode.componentInstance._isDestroyed) {
            if (!vnode.data.keepAlive) {
              vnode.componentInstance.$destroy()
            } else {
              deactivateChildComponent(vnode.componentInstance, true /* direct */)
            }
          }
        }
      }

      var hooksToMerge = Object.keys(componentVNodeHooks)

      function createComponent (Ctor,
                                data,
                                context,
                                children,
                                tag) {
        if (!Ctor) {
          return
        }

        var baseCtor = context.$options._base
        if (isObject(Ctor)) {
          Ctor = baseCtor.extend(Ctor)
        }

        if (typeof Ctor !== 'function') {
          if (false) {
            warn(('Invalid Component definition: ' + (String(Ctor))), context)
          }
          return
        }

        // async component
        if (!Ctor.cid) {
          if (Ctor.resolved) {
            Ctor = Ctor.resolved
          } else {
            Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
              // it's ok to queue this on every render because
              // $forceUpdate is buffered by the scheduler.
              context.$forceUpdate()
            })
            if (!Ctor) {
              // return nothing if this is indeed an async component
              // wait for the callback to trigger parent update.
              return
            }
          }
        }

        // resolve constructor options in case global mixins are applied after
        // component constructor creation
        resolveConstructorOptions(Ctor)

        data = data || {}

        // transform component v-model data into props & events
        if (data.model) {
          transformModel(Ctor.options, data)
        }

        // extract props
        var propsData = extractProps(data, Ctor, tag)

        // functional component
        if (Ctor.options.functional) {
          return createFunctionalComponent(Ctor, propsData, data, context, children)
        }

        // extract listeners, since these needs to be treated as
        // child component listeners instead of DOM listeners
        var listeners = data.on
        // replace with listeners with .native modifier
        data.on = data.nativeOn

        if (Ctor.options.abstract) {
          // abstract components do not keep anything
          // other than props & listeners
          data = {}
        }

        // merge component management hooks onto the placeholder node
        mergeHooks(data)

        // return a placeholder vnode
        var name = Ctor.options.name || tag
        var vnode = new VNode(
          ('vue-component-' + (Ctor.cid) + (name ? ('-' + name) : '')),
          data, undefined, undefined, undefined, context,
          {Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children}
        )
        return vnode
      }

      function createFunctionalComponent (Ctor,
                                          propsData,
                                          data,
                                          context,
                                          children) {
        var props = {}
        var propOptions = Ctor.options.props
        if (propOptions) {
          for (var key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData)
          }
        }
        // ensure the createElement function in functional components
        // gets a unique context - this is necessary for correct named slot check
        var _context = Object.create(context)
        var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true) }
        var vnode = Ctor.options.render.call(null, h, {
          props: props,
          data: data,
          parent: context,
          children: children,
          slots: function () { return resolveSlots(children, context) }
        })
        if (vnode instanceof VNode) {
          vnode.functionalContext = context
          if (data.slot) {
            (vnode.data || (vnode.data = {})).slot = data.slot
          }
        }
        return vnode
      }

      function createComponentInstanceForVnode (vnode, // we know it's MountedComponentVNode but flow doesn't
                                                parent, // activeInstance in lifecycle state
                                                parentElm,
                                                refElm) {
        var vnodeComponentOptions = vnode.componentOptions
        var options = {
          _isComponent: true,
          parent: parent,
          propsData: vnodeComponentOptions.propsData,
          _componentTag: vnodeComponentOptions.tag,
          _parentVnode: vnode,
          _parentListeners: vnodeComponentOptions.listeners,
          _renderChildren: vnodeComponentOptions.children,
          _parentElm: parentElm || null,
          _refElm: refElm || null
        }
        // check inline-template render functions
        var inlineTemplate = vnode.data.inlineTemplate
        if (inlineTemplate) {
          options.render = inlineTemplate.render
          options.staticRenderFns = inlineTemplate.staticRenderFns
        }
        return new vnodeComponentOptions.Ctor(options)
      }

      function resolveAsyncComponent (factory,
                                      baseCtor,
                                      cb) {
        if (factory.requested) {
          // pool callbacks
          factory.pendingCallbacks.push(cb)
        } else {
          factory.requested = true
          var cbs = factory.pendingCallbacks = [cb]
          var sync = true

          var resolve = function (res) {
            if (isObject(res)) {
              res = baseCtor.extend(res)
            }
            // cache resolved
            factory.resolved = res
            // invoke callbacks only if this is not a synchronous resolve
            // (async resolves are shimmed as synchronous during SSR)
            if (!sync) {
              for (var i = 0, l = cbs.length; i < l; i++) {
                cbs[i](res)
              }
            }
          }

          var reject = function (reason) {
            'production' !== 'production' && warn(
              'Failed to resolve async component: ' + (String(factory)) +
              (reason ? ('\nReason: ' + reason) : '')
            )
          }

          var res = factory(resolve, reject)

          // handle promise
          if (res && typeof res.then === 'function' && !factory.resolved) {
            res.then(resolve, reject)
          }

          sync = false
          // return in case resolved synchronously
          return factory.resolved
        }
      }

      function extractProps (data, Ctor, tag) {
        // we are only extracting raw values here.
        // validation and default values are handled in the child
        // component itself.
        var propOptions = Ctor.options.props
        if (!propOptions) {
          return
        }
        var res = {}
        var attrs = data.attrs
        var props = data.props
        var domProps = data.domProps
        if (attrs || props || domProps) {
          for (var key in propOptions) {
            var altKey = hyphenate(key)
            if (false) {
              var keyInLowerCase = key.toLowerCase()
              if (
                key !== keyInLowerCase &&
                attrs && attrs.hasOwnProperty(keyInLowerCase)
              ) {
                tip(
                  'Prop "' + keyInLowerCase + '" is passed to component ' +
                  (formatComponentName(tag || Ctor)) + ', but the declared prop name is' +
                  ' "' + key + '". ' +
                  'Note that HTML attributes are case-insensitive and camelCased ' +
                  'props need to use their kebab-case equivalents when using in-DOM ' +
                  'templates. You should probably use "' + altKey + '" instead of "' + key + '".'
                )
              }
            }
            checkProp(res, props, key, altKey, true) ||
            checkProp(res, attrs, key, altKey) ||
            checkProp(res, domProps, key, altKey)
          }
        }
        return res
      }

      function checkProp (res,
                          hash,
                          key,
                          altKey,
                          preserve) {
        if (hash) {
          if (hasOwn(hash, key)) {
            res[key] = hash[key]
            if (!preserve) {
              delete hash[key]
            }
            return true
          } else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey]
            if (!preserve) {
              delete hash[altKey]
            }
            return true
          }
        }
        return false
      }

      function mergeHooks (data) {
        if (!data.hook) {
          data.hook = {}
        }
        for (var i = 0; i < hooksToMerge.length; i++) {
          var key = hooksToMerge[i]
          var fromParent = data.hook[key]
          var ours = componentVNodeHooks[key]
          data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours
        }
      }

      function mergeHook$1 (one, two) {
        return function (a, b, c, d) {
          one(a, b, c, d)
          two(a, b, c, d)
        }
      }

// transform component v-model info (value and callback) into
// prop and event handler respectively.
      function transformModel (options, data) {
        var prop = (options.model && options.model.prop) || 'value'
        var event = (options.model && options.model.event) || 'input';
        (data.props || (data.props = {}))[prop] = data.model.value
        var on = data.on || (data.on = {})
        if (on[event]) {
          on[event] = [data.model.callback].concat(on[event])
        } else {
          on[event] = data.model.callback
        }
      }

      /*  */

      var SIMPLE_NORMALIZE = 1
      var ALWAYS_NORMALIZE = 2

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
      function createElement (context,
                              tag,
                              data,
                              children,
                              normalizationType,
                              alwaysNormalize) {
        if (Array.isArray(data) || isPrimitive(data)) {
          normalizationType = children
          children = data
          data = undefined
        }
        if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE }
        return _createElement(context, tag, data, children, normalizationType)
      }

      function _createElement (context,
                               tag,
                               data,
                               children,
                               normalizationType) {
        if (data && data.__ob__) {
          'production' !== 'production' && warn(
            'Avoid using observed data object as vnode data: ' + (JSON.stringify(data)) + '\n' +
            'Always create fresh vnode data objects in each render!',
            context
          )
          return createEmptyVNode()
        }
        if (!tag) {
          // in case of component :is set to falsy value
          return createEmptyVNode()
        }
        // support single function children as default scoped slot
        if (Array.isArray(children) &&
          typeof children[0] === 'function') {
          data = data || {}
          data.scopedSlots = {default: children[0]}
          children.length = 0
        }
        if (normalizationType === ALWAYS_NORMALIZE) {
          children = normalizeChildren(children)
        } else if (normalizationType === SIMPLE_NORMALIZE) {
          children = simpleNormalizeChildren(children)
        }
        var vnode, ns
        if (typeof tag === 'string') {
          var Ctor
          ns = config.getTagNamespace(tag)
          if (config.isReservedTag(tag)) {
            // platform built-in elements
            vnode = new VNode(
              config.parsePlatformTagName(tag), data, children,
              undefined, undefined, context
            )
          } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
            // component
            vnode = createComponent(Ctor, data, context, children, tag)
          } else {
            // unknown or unlisted namespaced elements
            // check at runtime because it may get assigned a namespace when its
            // parent normalizes children
            vnode = new VNode(
              tag, data, children,
              undefined, undefined, context
            )
          }
        } else {
          // direct component options / constructor
          vnode = createComponent(tag, data, context, children)
        }
        if (vnode) {
          if (ns) { applyNS(vnode, ns) }
          return vnode
        } else {
          return createEmptyVNode()
        }
      }

      function applyNS (vnode, ns) {
        vnode.ns = ns
        if (vnode.tag === 'foreignObject') {
          // use default namespace inside foreignObject
          return
        }
        if (vnode.children) {
          for (var i = 0, l = vnode.children.length; i < l; i++) {
            var child = vnode.children[i]
            if (child.tag && !child.ns) {
              applyNS(child, ns)
            }
          }
        }
      }

      /*  */

      /**
       * Runtime helper for rendering v-for lists.
       */
      function renderList (val,
                           render) {
        var ret, i, l, keys, key
        if (Array.isArray(val) || typeof val === 'string') {
          ret = new Array(val.length)
          for (i = 0, l = val.length; i < l; i++) {
            ret[i] = render(val[i], i)
          }
        } else if (typeof val === 'number') {
          ret = new Array(val)
          for (i = 0; i < val; i++) {
            ret[i] = render(i + 1, i)
          }
        } else if (isObject(val)) {
          keys = Object.keys(val)
          ret = new Array(keys.length)
          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i]
            ret[i] = render(val[key], key, i)
          }
        }
        return ret
      }

      /*  */

      /**
       * Runtime helper for rendering <slot>
       */
      function renderSlot (name,
                           fallback,
                           props,
                           bindObject) {
        var scopedSlotFn = this.$scopedSlots[name]
        if (scopedSlotFn) { // scoped slot
          props = props || {}
          if (bindObject) {
            extend(props, bindObject)
          }
          return scopedSlotFn(props) || fallback
        } else {
          var slotNodes = this.$slots[name]
          // warn duplicate slot usage
          if (slotNodes && 'production' !== 'production') {
            slotNodes._rendered && warn(
              'Duplicate presence of slot "' + name + '" found in the same render tree ' +
              '- this will likely cause render errors.',
              this
            )
            slotNodes._rendered = true
          }
          return slotNodes || fallback
        }
      }

      /*  */

      /**
       * Runtime helper for resolving filters
       */
      function resolveFilter (id) {
        return resolveAsset(this.$options, 'filters', id, true) || identity
      }

      /*  */

      /**
       * Runtime helper for checking keyCodes from config.
       */
      function checkKeyCodes (eventKeyCode,
                              key,
                              builtInAlias) {
        var keyCodes = config.keyCodes[key] || builtInAlias
        if (Array.isArray(keyCodes)) {
          return keyCodes.indexOf(eventKeyCode) === -1
        } else {
          return keyCodes !== eventKeyCode
        }
      }

      /*  */

      /**
       * Runtime helper for merging v-bind="object" into a VNode's data.
       */
      function bindObjectProps (data,
                                tag,
                                value,
                                asProp) {
        if (value) {
          if (!isObject(value)) {
            'production' !== 'production' && warn(
              'v-bind without argument expects an Object or Array value',
              this
            )
          } else {
            if (Array.isArray(value)) {
              value = toObject(value)
            }
            var hash
            for (var key in value) {
              if (key === 'class' || key === 'style') {
                hash = data
              } else {
                var type = data.attrs && data.attrs.type
                hash = asProp || config.mustUseProp(tag, type, key)
                  ? data.domProps || (data.domProps = {})
                  : data.attrs || (data.attrs = {})
              }
              if (!(key in hash)) {
                hash[key] = value[key]
              }
            }
          }
        }
        return data
      }

      /*  */

      /**
       * Runtime helper for rendering static trees.
       */
      function renderStatic (index,
                             isInFor) {
        var tree = this._staticTrees[index]
        // if has already-rendered static tree and not inside v-for,
        // we can reuse the same tree by doing a shallow clone.
        if (tree && !isInFor) {
          return Array.isArray(tree)
            ? cloneVNodes(tree)
            : cloneVNode(tree)
        }
        // otherwise, render a fresh tree.
        tree = this._staticTrees[index] =
          this.$options.staticRenderFns[index].call(this._renderProxy)
        markStatic(tree, ('__static__' + index), false)
        return tree
      }

      /**
       * Runtime helper for v-once.
       * Effectively it means marking the node as static with a unique key.
       */
      function markOnce (tree,
                         index,
                         key) {
        markStatic(tree, ('__once__' + index + (key ? ('_' + key) : '')), true)
        return tree
      }

      function markStatic (tree,
                           key,
                           isOnce) {
        if (Array.isArray(tree)) {
          for (var i = 0; i < tree.length; i++) {
            if (tree[i] && typeof tree[i] !== 'string') {
              markStaticNode(tree[i], (key + '_' + i), isOnce)
            }
          }
        } else {
          markStaticNode(tree, key, isOnce)
        }
      }

      function markStaticNode (node, key, isOnce) {
        node.isStatic = true
        node.key = key
        node.isOnce = isOnce
      }

      /*  */

      function initRender (vm) {
        vm.$vnode = null // the placeholder node in parent tree
        vm._vnode = null // the root of the child tree
        vm._staticTrees = null
        var parentVnode = vm.$options._parentVnode
        var renderContext = parentVnode && parentVnode.context
        vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext)
        vm.$scopedSlots = emptyObject
        // bind the createElement fn to this instance
        // so that we get proper render context inside it.
        // args order: tag, data, children, normalizationType, alwaysNormalize
        // internal version is used by render functions compiled from templates
        vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false) }
        // normalization is always applied for the public version, used in
        // user-written render functions.
        vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true) }
      }

      function renderMixin (Vue) {
        Vue.prototype.$nextTick = function (fn) {
          return nextTick(fn, this)
        }

        Vue.prototype._render = function () {
          var vm = this
          var ref = vm.$options
          var render = ref.render
          var staticRenderFns = ref.staticRenderFns
          var _parentVnode = ref._parentVnode

          if (vm._isMounted) {
            // clone slot nodes on re-renders
            for (var key in vm.$slots) {
              vm.$slots[key] = cloneVNodes(vm.$slots[key])
            }
          }

          vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject

          if (staticRenderFns && !vm._staticTrees) {
            vm._staticTrees = []
          }
          // set parent vnode. this allows render functions to have access
          // to the data on the placeholder node.
          vm.$vnode = _parentVnode
          // render self
          var vnode
          try {
            vnode = render.call(vm._renderProxy, vm.$createElement)
          } catch (e) {
            handleError(e, vm, 'render function')
            // return error render result,
            // or previous vnode to prevent render error causing blank component
            /* istanbul ignore else */
            if (false) {
              vnode = vm.$options.renderError
                ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
                : vm._vnode
            } else {
              vnode = vm._vnode
            }
          }
          // return empty vnode in case the render function errored out
          if (!(vnode instanceof VNode)) {
            if (false) {
              warn(
                'Multiple root nodes returned from render function. Render function ' +
                'should return a single root node.',
                vm
              )
            }
            vnode = createEmptyVNode()
          }
          // set parent
          vnode.parent = _parentVnode
          return vnode
        }

        // internal render helpers.
        // these are exposed on the instance prototype to reduce generated render
        // code size.
        Vue.prototype._o = markOnce
        Vue.prototype._n = toNumber
        Vue.prototype._s = _toString
        Vue.prototype._l = renderList
        Vue.prototype._t = renderSlot
        Vue.prototype._q = looseEqual
        Vue.prototype._i = looseIndexOf
        Vue.prototype._m = renderStatic
        Vue.prototype._f = resolveFilter
        Vue.prototype._k = checkKeyCodes
        Vue.prototype._b = bindObjectProps
        Vue.prototype._v = createTextVNode
        Vue.prototype._e = createEmptyVNode
        Vue.prototype._u = resolveScopedSlots
      }

      /*  */

      function initProvide (vm) {
        var provide = vm.$options.provide
        if (provide) {
          vm._provided = typeof provide === 'function'
            ? provide.call(vm)
            : provide
        }
      }

      function initInjections (vm) {
        var inject = vm.$options.inject
        if (inject) {
          // inject is :any because flow is not smart enough to figure out cached
          // isArray here
          var isArray = Array.isArray(inject)
          var keys = isArray
            ? inject
            : hasSymbol
              ? Reflect.ownKeys(inject)
              : Object.keys(inject)

          var loop = function (i) {
            var key = keys[i]
            var provideKey = isArray ? key : inject[key]
            var source = vm
            while (source) {
              if (source._provided && provideKey in source._provided) {
                /* istanbul ignore else */
                if (false) {
                  defineReactive$$1(vm, key, source._provided[provideKey], function () {
                    warn(
                      'Avoid mutating an injected value directly since the changes will be ' +
                      'overwritten whenever the provided component re-renders. ' +
                      'injection being mutated: "' + key + '"',
                      vm
                    )
                  })
                } else {
                  defineReactive$$1(vm, key, source._provided[provideKey])
                }
                break
              }
              source = source.$parent
            }
          }

          for (var i = 0; i < keys.length; i++) loop(i);
        }
      }

      /*  */

      var uid = 0

      function initMixin (Vue) {
        Vue.prototype._init = function (options) {
          var vm = this
          // a uid
          vm._uid = uid++

          var startTag, endTag
          /* istanbul ignore if */
          if (false) {
            startTag = 'vue-perf-init:' + (vm._uid)
            endTag = 'vue-perf-end:' + (vm._uid)
            mark(startTag)
          }

          // a flag to avoid this being observed
          vm._isVue = true
          // merge options
          if (options && options._isComponent) {
            // optimize internal component instantiation
            // since dynamic options merging is pretty slow, and none of the
            // internal component options needs special treatment.
            initInternalComponent(vm, options)
          } else {
            vm.$options = mergeOptions(
              resolveConstructorOptions(vm.constructor),
              options || {},
              vm
            )
          }
          /* istanbul ignore else */
          if (false) {
            initProxy(vm)
          } else {
            vm._renderProxy = vm
          }
          // expose real self
          vm._self = vm
          initLifecycle(vm)
          initEvents(vm)
          initRender(vm)
          callHook(vm, 'beforeCreate')
          initInjections(vm) // resolve injections before data/props
          initState(vm)
          initProvide(vm) // resolve provide after data/props
          callHook(vm, 'created')

          /* istanbul ignore if */
          if (false) {
            vm._name = formatComponentName(vm, false)
            mark(endTag)
            measure(((vm._name) + ' init'), startTag, endTag)
          }

          if (vm.$options.el) {
            vm.$mount(vm.$options.el)
          }
        }
      }

      function initInternalComponent (vm, options) {
        var opts = vm.$options = Object.create(vm.constructor.options)
        // doing this because it's faster than dynamic enumeration.
        opts.parent = options.parent
        opts.propsData = options.propsData
        opts._parentVnode = options._parentVnode
        opts._parentListeners = options._parentListeners
        opts._renderChildren = options._renderChildren
        opts._componentTag = options._componentTag
        opts._parentElm = options._parentElm
        opts._refElm = options._refElm
        if (options.render) {
          opts.render = options.render
          opts.staticRenderFns = options.staticRenderFns
        }
      }

      function resolveConstructorOptions (Ctor) {
        var options = Ctor.options
        if (Ctor.super) {
          var superOptions = resolveConstructorOptions(Ctor.super)
          var cachedSuperOptions = Ctor.superOptions
          if (superOptions !== cachedSuperOptions) {
            // super option changed,
            // need to resolve new options.
            Ctor.superOptions = superOptions
            // check if there are any late-modified/attached options (#4976)
            var modifiedOptions = resolveModifiedOptions(Ctor)
            // update base extend options
            if (modifiedOptions) {
              extend(Ctor.extendOptions, modifiedOptions)
            }
            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
            if (options.name) {
              options.components[options.name] = Ctor
            }
          }
        }
        return options
      }

      function resolveModifiedOptions (Ctor) {
        var modified
        var latest = Ctor.options
        var sealed = Ctor.sealedOptions
        for (var key in latest) {
          if (latest[key] !== sealed[key]) {
            if (!modified) { modified = {} }
            modified[key] = dedupe(latest[key], sealed[key])
          }
        }
        return modified
      }

      function dedupe (latest, sealed) {
        // compare latest and sealed to ensure lifecycle hooks won't be duplicated
        // between merges
        if (Array.isArray(latest)) {
          var res = []
          sealed = Array.isArray(sealed) ? sealed : [sealed]
          for (var i = 0; i < latest.length; i++) {
            if (sealed.indexOf(latest[i]) < 0) {
              res.push(latest[i])
            }
          }
          return res
        } else {
          return latest
        }
      }

      function Vue$3 (options) {
        if (false) {
          warn('Vue is a constructor and should be called with the `new` keyword')
        }
        this._init(options)
      }

      initMixin(Vue$3)
      stateMixin(Vue$3)
      eventsMixin(Vue$3)
      lifecycleMixin(Vue$3)
      renderMixin(Vue$3)

      /*  */

      function initUse (Vue) {
        Vue.use = function (plugin) {
          /* istanbul ignore if */
          if (plugin.installed) {
            return
          }
          // additional parameters
          var args = toArray(arguments, 1)
          args.unshift(this)
          if (typeof plugin.install === 'function') {
            plugin.install.apply(plugin, args)
          } else if (typeof plugin === 'function') {
            plugin.apply(null, args)
          }
          plugin.installed = true
          return this
        }
      }

      /*  */

      function initMixin$1 (Vue) {
        Vue.mixin = function (mixin) {
          this.options = mergeOptions(this.options, mixin)
        }
      }

      /*  */

      function initExtend (Vue) {
        /**
         * Each instance constructor, including Vue, has a unique
         * cid. This enables us to create wrapped "child
         * constructors" for prototypal inheritance and cache them.
         */
        Vue.cid = 0
        var cid = 1

        /**
         * Class inheritance
         */
        Vue.extend = function (extendOptions) {
          extendOptions = extendOptions || {}
          var Super = this
          var SuperId = Super.cid
          var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
          if (cachedCtors[SuperId]) {
            return cachedCtors[SuperId]
          }

          var name = extendOptions.name || Super.options.name
          if (false) {
            if (!/^[a-zA-Z][\w-]*$/.test(name)) {
              warn(
                'Invalid component name: "' + name + '". Component names ' +
                'can only contain alphanumeric characters and the hyphen, ' +
                'and must start with a letter.'
              )
            }
          }

          var Sub = function VueComponent (options) {
            this._init(options)
          }
          Sub.prototype = Object.create(Super.prototype)
          Sub.prototype.constructor = Sub
          Sub.cid = cid++
          Sub.options = mergeOptions(
            Super.options,
            extendOptions
          )
          Sub['super'] = Super

          // For props and computed properties, we define the proxy getters on
          // the Vue instances at extension time, on the extended prototype. This
          // avoids Object.defineProperty calls for each instance created.
          if (Sub.options.props) {
            initProps$1(Sub)
          }
          if (Sub.options.computed) {
            initComputed$1(Sub)
          }

          // allow further extension/mixin/plugin usage
          Sub.extend = Super.extend
          Sub.mixin = Super.mixin
          Sub.use = Super.use

          // create asset registers, so extended classes
          // can have their private assets too.
          config._assetTypes.forEach(function (type) {
            Sub[type] = Super[type]
          })
          // enable recursive self-lookup
          if (name) {
            Sub.options.components[name] = Sub
          }

          // keep a reference to the super options at extension time.
          // later at instantiation we can check if Super's options have
          // been updated.
          Sub.superOptions = Super.options
          Sub.extendOptions = extendOptions
          Sub.sealedOptions = extend({}, Sub.options)

          // cache constructor
          cachedCtors[SuperId] = Sub
          return Sub
        }
      }

      function initProps$1 (Comp) {
        var props = Comp.options.props
        for (var key in props) {
          proxy(Comp.prototype, '_props', key)
        }
      }

      function initComputed$1 (Comp) {
        var computed = Comp.options.computed
        for (var key in computed) {
          defineComputed(Comp.prototype, key, computed[key])
        }
      }

      /*  */

      function initAssetRegisters (Vue) {
        /**
         * Create asset registration methods.
         */
        config._assetTypes.forEach(function (type) {
          Vue[type] = function (id,
                                definition) {
            if (!definition) {
              return this.options[type + 's'][id]
            } else {
              /* istanbul ignore if */
              if (false) {
                if (type === 'component' && config.isReservedTag(id)) {
                  warn(
                    'Do not use built-in or reserved HTML elements as component ' +
                    'id: ' + id
                  )
                }
              }
              if (type === 'component' && isPlainObject(definition)) {
                definition.name = definition.name || id
                definition = this.options._base.extend(definition)
              }
              if (type === 'directive' && typeof definition === 'function') {
                definition = {bind: definition, update: definition}
              }
              this.options[type + 's'][id] = definition
              return definition
            }
          }
        })
      }

      /*  */

      var patternTypes = [String, RegExp]

      function getComponentName (opts) {
        return opts && (opts.Ctor.options.name || opts.tag)
      }

      function matches (pattern, name) {
        if (typeof pattern === 'string') {
          return pattern.split(',').indexOf(name) > -1
        } else if (pattern instanceof RegExp) {
          return pattern.test(name)
        }
        /* istanbul ignore next */
        return false
      }

      function pruneCache (cache, filter) {
        for (var key in cache) {
          var cachedNode = cache[key]
          if (cachedNode) {
            var name = getComponentName(cachedNode.componentOptions)
            if (name && !filter(name)) {
              pruneCacheEntry(cachedNode)
              cache[key] = null
            }
          }
        }
      }

      function pruneCacheEntry (vnode) {
        if (vnode) {
          if (!vnode.componentInstance._inactive) {
            callHook(vnode.componentInstance, 'deactivated')
          }
          vnode.componentInstance.$destroy()
        }
      }

      var KeepAlive = {
        name: 'keep-alive',
        abstract: true,

        props: {
          include: patternTypes,
          exclude: patternTypes
        },

        created: function created () {
          this.cache = Object.create(null)
        },

        destroyed: function destroyed () {
          var this$1 = this

          for (var key in this$1.cache) {
            pruneCacheEntry(this$1.cache[key])
          }
        },

        watch: {
          include: function include (val) {
            pruneCache(this.cache, function (name) { return matches(val, name) })
          },
          exclude: function exclude (val) {
            pruneCache(this.cache, function (name) { return !matches(val, name) })
          }
        },

        render: function render () {
          var vnode = getFirstComponentChild(this.$slots.default)
          var componentOptions = vnode && vnode.componentOptions
          if (componentOptions) {
            // check pattern
            var name = getComponentName(componentOptions)
            if (name && (
                (this.include && !matches(this.include, name)) ||
                (this.exclude && matches(this.exclude, name))
              )) {
              return vnode
            }
            var key = vnode.key == null
              // same constructor may get registered as different local components
              // so cid alone is not enough (#3269)
              ? componentOptions.Ctor.cid + (componentOptions.tag ? ('::' + (componentOptions.tag)) : '')
              : vnode.key
            if (this.cache[key]) {
              vnode.componentInstance = this.cache[key].componentInstance
            } else {
              this.cache[key] = vnode
            }
            vnode.data.keepAlive = true
          }
          return vnode
        }
      }

      var builtInComponents = {
        KeepAlive: KeepAlive
      }

      /*  */

      function initGlobalAPI (Vue) {
        // config
        var configDef = {}
        configDef.get = function () { return config }
        if (false) {
          configDef.set = function () {
            warn(
              'Do not replace the Vue.config object, set individual fields instead.'
            )
          }
        }
        Object.defineProperty(Vue, 'config', configDef)

        // exposed util methods.
        // NOTE: these are not considered part of the public API - avoid relying on
        // them unless you are aware of the risk.
        Vue.util = {
          warn: warn,
          extend: extend,
          mergeOptions: mergeOptions,
          defineReactive: defineReactive$$1
        }

        Vue.set = set
        Vue.delete = del
        Vue.nextTick = nextTick

        Vue.options = Object.create(null)
        config._assetTypes.forEach(function (type) {
          Vue.options[type + 's'] = Object.create(null)
        })

        // this is used to identify the "base" constructor to extend all plain-object
        // components with in Weex's multi-instance scenarios.
        Vue.options._base = Vue

        extend(Vue.options.components, builtInComponents)

        initUse(Vue)
        initMixin$1(Vue)
        initExtend(Vue)
        initAssetRegisters(Vue)
      }

      initGlobalAPI(Vue$3)

      Object.defineProperty(Vue$3.prototype, '$isServer', {
        get: isServerRendering
      })

      Vue$3.version = '2.2.6'

      /*  */

// attributes that should be using props for binding
      var acceptValue = makeMap('input,textarea,option,select')
      var mustUseProp = function (tag, type, attr) {
        return (
          (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
          (attr === 'selected' && tag === 'option') ||
          (attr === 'checked' && tag === 'input') ||
          (attr === 'muted' && tag === 'video')
        )
      }

      var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck')

      var isBooleanAttr = makeMap(
        'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
        'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
        'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
        'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
        'required,reversed,scoped,seamless,selected,sortable,translate,' +
        'truespeed,typemustmatch,visible'
      )

      var xlinkNS = 'http://www.w3.org/1999/xlink'

      var isXlink = function (name) {
        return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
      }

      var getXlinkProp = function (name) {
        return isXlink(name) ? name.slice(6, name.length) : ''
      }

      var isFalsyAttrValue = function (val) {
        return val == null || val === false
      }

      /*  */

      function genClassForVnode (vnode) {
        var data = vnode.data
        var parentNode = vnode
        var childNode = vnode
        while (childNode.componentInstance) {
          childNode = childNode.componentInstance._vnode
          if (childNode.data) {
            data = mergeClassData(childNode.data, data)
          }
        }
        while ((parentNode = parentNode.parent)) {
          if (parentNode.data) {
            data = mergeClassData(data, parentNode.data)
          }
        }
        return genClassFromData(data)
      }

      function mergeClassData (child, parent) {
        return {
          staticClass: concat(child.staticClass, parent.staticClass),
          class: child.class
            ? [child.class, parent.class]
            : parent.class
        }
      }

      function genClassFromData (data) {
        var dynamicClass = data.class
        var staticClass = data.staticClass
        if (staticClass || dynamicClass) {
          return concat(staticClass, stringifyClass(dynamicClass))
        }
        /* istanbul ignore next */
        return ''
      }

      function concat (a, b) {
        return a ? b ? (a + ' ' + b) : a : (b || '')
      }

      function stringifyClass (value) {
        var res = ''
        if (!value) {
          return res
        }
        if (typeof value === 'string') {
          return value
        }
        if (Array.isArray(value)) {
          var stringified
          for (var i = 0, l = value.length; i < l; i++) {
            if (value[i]) {
              if ((stringified = stringifyClass(value[i]))) {
                res += stringified + ' '
              }
            }
          }
          return res.slice(0, -1)
        }
        if (isObject(value)) {
          for (var key in value) {
            if (value[key]) { res += key + ' ' }
          }
          return res.slice(0, -1)
        }
        /* istanbul ignore next */
        return res
      }

      /*  */

      var namespaceMap = {
        svg: 'http://www.w3.org/2000/svg',
        math: 'http://www.w3.org/1998/Math/MathML'
      }

      var isHTMLTag = makeMap(
        'html,body,base,head,link,meta,style,title,' +
        'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
        'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
        'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
        's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
        'embed,object,param,source,canvas,script,noscript,del,ins,' +
        'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
        'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
        'output,progress,select,textarea,' +
        'details,dialog,menu,menuitem,summary,' +
        'content,element,shadow,template'
      )

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
      var isSVG = makeMap(
        'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
        'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
        'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
        true
      )

      var isPreTag = function (tag) { return tag === 'pre' }

      var isReservedTag = function (tag) {
        return isHTMLTag(tag) || isSVG(tag)
      }

      function getTagNamespace (tag) {
        if (isSVG(tag)) {
          return 'svg'
        }
        // basic support for MathML
        // note it doesn't support other MathML elements being component roots
        if (tag === 'math') {
          return 'math'
        }
      }

      var unknownElementCache = Object.create(null)

      function isUnknownElement (tag) {
        /* istanbul ignore if */
        if (!inBrowser) {
          return true
        }
        if (isReservedTag(tag)) {
          return false
        }
        tag = tag.toLowerCase()
        /* istanbul ignore if */
        if (unknownElementCache[tag] != null) {
          return unknownElementCache[tag]
        }
        var el = document.createElement(tag)
        if (tag.indexOf('-') > -1) {
          // http://stackoverflow.com/a/28210364/1070244
          return (unknownElementCache[tag] = (
            el.constructor === window.HTMLUnknownElement ||
            el.constructor === window.HTMLElement
          ))
        } else {
          return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
        }
      }

      /*  */

      /**
       * Query an element selector if it's not an element already.
       */
      function query (el) {
        if (typeof el === 'string') {
          var selected = document.querySelector(el)
          if (!selected) {
            'production' !== 'production' && warn(
              'Cannot find element: ' + el
            )
            return document.createElement('div')
          }
          return selected
        } else {
          return el
        }
      }

      /*  */

      function createElement$1 (tagName, vnode) {
        var elm = document.createElement(tagName)
        if (tagName !== 'select') {
          return elm
        }
        // false or null will remove the attribute but undefined will not
        if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
          elm.setAttribute('multiple', 'multiple')
        }
        return elm
      }

      function createElementNS (namespace, tagName) {
        return document.createElementNS(namespaceMap[namespace], tagName)
      }

      function createTextNode (text) {
        return document.createTextNode(text)
      }

      function createComment (text) {
        return document.createComment(text)
      }

      function insertBefore (parentNode, newNode, referenceNode) {
        parentNode.insertBefore(newNode, referenceNode)
      }

      function removeChild (node, child) {
        node.removeChild(child)
      }

      function appendChild (node, child) {
        node.appendChild(child)
      }

      function parentNode (node) {
        return node.parentNode
      }

      function nextSibling (node) {
        return node.nextSibling
      }

      function tagName (node) {
        return node.tagName
      }

      function setTextContent (node, text) {
        node.textContent = text
      }

      function setAttribute (node, key, val) {
        node.setAttribute(key, val)
      }

      var nodeOps = Object.freeze({
        createElement: createElement$1,
        createElementNS: createElementNS,
        createTextNode: createTextNode,
        createComment: createComment,
        insertBefore: insertBefore,
        removeChild: removeChild,
        appendChild: appendChild,
        parentNode: parentNode,
        nextSibling: nextSibling,
        tagName: tagName,
        setTextContent: setTextContent,
        setAttribute: setAttribute
      })

      /*  */

      var ref = {
        create: function create (_, vnode) {
          registerRef(vnode)
        },
        update: function update (oldVnode, vnode) {
          if (oldVnode.data.ref !== vnode.data.ref) {
            registerRef(oldVnode, true)
            registerRef(vnode)
          }
        },
        destroy: function destroy (vnode) {
          registerRef(vnode, true)
        }
      }

      function registerRef (vnode, isRemoval) {
        var key = vnode.data.ref
        if (!key) { return }

        var vm = vnode.context
        var ref = vnode.componentInstance || vnode.elm
        var refs = vm.$refs
        if (isRemoval) {
          if (Array.isArray(refs[key])) {
            remove(refs[key], ref)
          } else if (refs[key] === ref) {
            refs[key] = undefined
          }
        } else {
          if (vnode.data.refInFor) {
            if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
              refs[key].push(ref)
            } else {
              refs[key] = [ref]
            }
          } else {
            refs[key] = ref
          }
        }
      }

      /**
       * Virtual DOM patching algorithm based on Snabbdom by
       * Simon Friis Vindum (@paldepind)
       * Licensed under the MIT License
       * https://github.com/paldepind/snabbdom/blob/master/LICENSE
       *
       * modified by Evan You (@yyx990803)
       *

       /*
       * Not type-checking this because this file is perf-critical and the cost
       * of making flow understand it is not worth it.
       */

      var emptyNode = new VNode('', {}, [])

      var hooks = ['create', 'activate', 'update', 'remove', 'destroy']

      function isUndef (v) {
        return v === undefined || v === null
      }

      function isDef (v) {
        return v !== undefined && v !== null
      }

      function isTrue (v) {
        return v === true
      }

      function sameVnode (a, b) {
        return (
          a.key === b.key &&
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        )
      }

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
      function sameInputType (a, b) {
        if (a.tag !== 'input') { return true }
        var i
        var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type
        var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type
        return typeA === typeB
      }

      function createKeyToOldIdx (children, beginIdx, endIdx) {
        var i, key
        var map = {}
        for (i = beginIdx; i <= endIdx; ++i) {
          key = children[i].key
          if (isDef(key)) { map[key] = i }
        }
        return map
      }

      function createPatchFunction (backend) {
        var i, j
        var cbs = {}

        var modules = backend.modules
        var nodeOps = backend.nodeOps

        for (i = 0; i < hooks.length; ++i) {
          cbs[hooks[i]] = []
          for (j = 0; j < modules.length; ++j) {
            if (isDef(modules[j][hooks[i]])) {
              cbs[hooks[i]].push(modules[j][hooks[i]])
            }
          }
        }

        function emptyNodeAt (elm) {
          return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
        }

        function createRmCb (childElm, listeners) {
          function remove$$1 () {
            if (--remove$$1.listeners === 0) {
              removeNode(childElm)
            }
          }

          remove$$1.listeners = listeners
          return remove$$1
        }

        function removeNode (el) {
          var parent = nodeOps.parentNode(el)
          // element may have already been removed due to v-html / v-text
          if (isDef(parent)) {
            nodeOps.removeChild(parent, el)
          }
        }

        var inPre = 0

        function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
          vnode.isRootInsert = !nested // for transition enter check
          if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
            return
          }

          var data = vnode.data
          var children = vnode.children
          var tag = vnode.tag
          if (isDef(tag)) {
            if (false) {
              if (data && data.pre) {
                inPre++
              }
              if (
                !inPre &&
                !vnode.ns &&
                !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
                config.isUnknownElement(tag)
              ) {
                warn(
                  'Unknown custom element: <' + tag + '> - did you ' +
                  'register the component correctly? For recursive components, ' +
                  'make sure to provide the "name" option.',
                  vnode.context
                )
              }
            }
            vnode.elm = vnode.ns
              ? nodeOps.createElementNS(vnode.ns, tag)
              : nodeOps.createElement(tag, vnode)
            setScope(vnode)

            /* istanbul ignore if */
            {
              createChildren(vnode, children, insertedVnodeQueue)
              if (isDef(data)) {
                invokeCreateHooks(vnode, insertedVnodeQueue)
              }
              insert(parentElm, vnode.elm, refElm)
            }

            if (false) {
              inPre--
            }
          } else if (isTrue(vnode.isComment)) {
            vnode.elm = nodeOps.createComment(vnode.text)
            insert(parentElm, vnode.elm, refElm)
          } else {
            vnode.elm = nodeOps.createTextNode(vnode.text)
            insert(parentElm, vnode.elm, refElm)
          }
        }

        function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
          var i = vnode.data
          if (isDef(i)) {
            var isReactivated = isDef(vnode.componentInstance) && i.keepAlive
            if (isDef(i = i.hook) && isDef(i = i.init)) {
              i(vnode, false /* hydrating */, parentElm, refElm)
            }
            // after calling the init hook, if the vnode is a child component
            // it should've created a child instance and mounted it. the child
            // component also has set the placeholder vnode's elm.
            // in that case we can just return the element and be done.
            if (isDef(vnode.componentInstance)) {
              initComponent(vnode, insertedVnodeQueue)
              if (isTrue(isReactivated)) {
                reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
              }
              return true
            }
          }
        }

        function initComponent (vnode, insertedVnodeQueue) {
          if (isDef(vnode.data.pendingInsert)) {
            insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
          }
          vnode.elm = vnode.componentInstance.$el
          if (isPatchable(vnode)) {
            invokeCreateHooks(vnode, insertedVnodeQueue)
            setScope(vnode)
          } else {
            // empty component root.
            // skip all element-related modules except for ref (#3455)
            registerRef(vnode)
            // make sure to invoke the insert hook
            insertedVnodeQueue.push(vnode)
          }
        }

        function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
          var i
          // hack for #4339: a reactivated component with inner transition
          // does not trigger because the inner node's created hooks are not called
          // again. It's not ideal to involve module-specific logic in here but
          // there doesn't seem to be a better way to do it.
          var innerNode = vnode
          while (innerNode.componentInstance) {
            innerNode = innerNode.componentInstance._vnode
            if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
              for (i = 0; i < cbs.activate.length; ++i) {
                cbs.activate[i](emptyNode, innerNode)
              }
              insertedVnodeQueue.push(innerNode)
              break
            }
          }
          // unlike a newly created component,
          // a reactivated keep-alive component doesn't insert itself
          insert(parentElm, vnode.elm, refElm)
        }

        function insert (parent, elm, ref) {
          if (isDef(parent)) {
            if (isDef(ref)) {
              nodeOps.insertBefore(parent, elm, ref)
            } else {
              nodeOps.appendChild(parent, elm)
            }
          }
        }

        function createChildren (vnode, children, insertedVnodeQueue) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; ++i) {
              createElm(children[i], insertedVnodeQueue, vnode.elm, null, true)
            }
          } else if (isPrimitive(vnode.text)) {
            nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text))
          }
        }

        function isPatchable (vnode) {
          while (vnode.componentInstance) {
            vnode = vnode.componentInstance._vnode
          }
          return isDef(vnode.tag)
        }

        function invokeCreateHooks (vnode, insertedVnodeQueue) {
          for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
            cbs.create[i$1](emptyNode, vnode)
          }
          i = vnode.data.hook // Reuse variable
          if (isDef(i)) {
            if (isDef(i.create)) { i.create(emptyNode, vnode) }
            if (isDef(i.insert)) { insertedVnodeQueue.push(vnode) }
          }
        }

        // set scope id attribute for scoped CSS.
        // this is implemented as a special case to avoid the overhead
        // of going through the normal attribute patching process.
        function setScope (vnode) {
          var i
          var ancestor = vnode
          while (ancestor) {
            if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
              nodeOps.setAttribute(vnode.elm, i, '')
            }
            ancestor = ancestor.parent
          }
          // for slot content they should also get the scopeId from the host instance.
          if (isDef(i = activeInstance) &&
            i !== vnode.context &&
            isDef(i = i.$options._scopeId)) {
            nodeOps.setAttribute(vnode.elm, i, '')
          }
        }

        function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
          for (; startIdx <= endIdx; ++startIdx) {
            createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm)
          }
        }

        function invokeDestroyHook (vnode) {
          var i, j
          var data = vnode.data
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode) }
            for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode) }
          }
          if (isDef(i = vnode.children)) {
            for (j = 0; j < vnode.children.length; ++j) {
              invokeDestroyHook(vnode.children[j])
            }
          }
        }

        function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
          for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx]
            if (isDef(ch)) {
              if (isDef(ch.tag)) {
                removeAndInvokeRemoveHook(ch)
                invokeDestroyHook(ch)
              } else { // Text node
                removeNode(ch.elm)
              }
            }
          }
        }

        function removeAndInvokeRemoveHook (vnode, rm) {
          if (isDef(rm) || isDef(vnode.data)) {
            var listeners = cbs.remove.length + 1
            if (isDef(rm)) {
              // we have a recursively passed down rm callback
              // increase the listeners count
              rm.listeners += listeners
            } else {
              // directly removing
              rm = createRmCb(vnode.elm, listeners)
            }
            // recursively invoke hooks on child component root node
            if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
              removeAndInvokeRemoveHook(i, rm)
            }
            for (i = 0; i < cbs.remove.length; ++i) {
              cbs.remove[i](vnode, rm)
            }
            if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
              i(vnode, rm)
            } else {
              rm()
            }
          } else {
            removeNode(vnode.elm)
          }
        }

        function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
          var oldStartIdx = 0
          var newStartIdx = 0
          var oldEndIdx = oldCh.length - 1
          var oldStartVnode = oldCh[0]
          var oldEndVnode = oldCh[oldEndIdx]
          var newEndIdx = newCh.length - 1
          var newStartVnode = newCh[0]
          var newEndVnode = newCh[newEndIdx]
          var oldKeyToIdx, idxInOld, elmToMove, refElm

          // removeOnly is a special flag used only by <transition-group>
          // to ensure removed elements stay in correct relative positions
          // during leaving transitions
          var canMove = !removeOnly

          while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (isUndef(oldStartVnode)) {
              oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
            } else if (isUndef(oldEndVnode)) {
              oldEndVnode = oldCh[--oldEndIdx]
            } else if (sameVnode(oldStartVnode, newStartVnode)) {
              patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
              oldStartVnode = oldCh[++oldStartIdx]
              newStartVnode = newCh[++newStartIdx]
            } else if (sameVnode(oldEndVnode, newEndVnode)) {
              patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
              oldEndVnode = oldCh[--oldEndIdx]
              newEndVnode = newCh[--newEndIdx]
            } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
              patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
              canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
              oldStartVnode = oldCh[++oldStartIdx]
              newEndVnode = newCh[--newEndIdx]
            } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
              patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
              canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
              oldEndVnode = oldCh[--oldEndIdx]
              newStartVnode = newCh[++newStartIdx]
            } else {
              if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) }
              idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null
              if (isUndef(idxInOld)) { // New element
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
                newStartVnode = newCh[++newStartIdx]
              } else {
                elmToMove = oldCh[idxInOld]
                /* istanbul ignore if */
                if (false) {
                  warn(
                    'It seems there are duplicate keys that is causing an update error. ' +
                    'Make sure each v-for item has a unique key.'
                  )
                }
                if (sameVnode(elmToMove, newStartVnode)) {
                  patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
                  oldCh[idxInOld] = undefined
                  canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm)
                  newStartVnode = newCh[++newStartIdx]
                } else {
                  // same key but different element. treat as new element
                  createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
                  newStartVnode = newCh[++newStartIdx]
                }
              }
            }
          }
          if (oldStartIdx > oldEndIdx) {
            refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
            addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
          } else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
          }
        }

        function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
          if (oldVnode === vnode) {
            return
          }
          // reuse element for static trees.
          // note we only do this if the vnode is cloned -
          // if the new node is not cloned it means the render functions have been
          // reset by the hot-reload-api and we need to do a proper re-render.
          if (isTrue(vnode.isStatic) &&
            isTrue(oldVnode.isStatic) &&
            vnode.key === oldVnode.key &&
            (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
            vnode.elm = oldVnode.elm
            vnode.componentInstance = oldVnode.componentInstance
            return
          }
          var i
          var data = vnode.data
          if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
            i(oldVnode, vnode)
          }
          var elm = vnode.elm = oldVnode.elm
          var oldCh = oldVnode.children
          var ch = vnode.children
          if (isDef(data) && isPatchable(vnode)) {
            for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode) }
            if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode) }
          }
          if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
              if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly) }
            } else if (isDef(ch)) {
              if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, '') }
              addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
            } else if (isDef(oldCh)) {
              removeVnodes(elm, oldCh, 0, oldCh.length - 1)
            } else if (isDef(oldVnode.text)) {
              nodeOps.setTextContent(elm, '')
            }
          } else if (oldVnode.text !== vnode.text) {
            nodeOps.setTextContent(elm, vnode.text)
          }
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode) }
          }
        }

        function invokeInsertHook (vnode, queue, initial) {
          // delay insert hooks for component root nodes, invoke them after the
          // element is really inserted
          if (isTrue(initial) && isDef(vnode.parent)) {
            vnode.parent.data.pendingInsert = queue
          } else {
            for (var i = 0; i < queue.length; ++i) {
              queue[i].data.hook.insert(queue[i])
            }
          }
        }

        var bailed = false
        // list of modules that can skip create hook during hydration because they
        // are already rendered on the client or has no need for initialization
        var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key')

        // Note: this is a browser-only function so we can assume elms are DOM nodes.
        function hydrate (elm, vnode, insertedVnodeQueue) {
          if (false) {
            if (!assertNodeMatch(elm, vnode)) {
              return false
            }
          }
          vnode.elm = elm
          var tag = vnode.tag
          var data = vnode.data
          var children = vnode.children
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */) }
            if (isDef(i = vnode.componentInstance)) {
              // child component. it should have hydrated its own tree.
              initComponent(vnode, insertedVnodeQueue)
              return true
            }
          }
          if (isDef(tag)) {
            if (isDef(children)) {
              // empty element, allow client to pick up and populate children
              if (!elm.hasChildNodes()) {
                createChildren(vnode, children, insertedVnodeQueue)
              } else {
                var childrenMatch = true
                var childNode = elm.firstChild
                for (var i$1 = 0; i$1 < children.length; i$1++) {
                  if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                    childrenMatch = false
                    break
                  }
                  childNode = childNode.nextSibling
                }
                // if childNode is not null, it means the actual childNodes list is
                // longer than the virtual children list.
                if (!childrenMatch || childNode) {
                  if (false) {
                    bailed = true
                    console.warn('Parent: ', elm)
                    console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children)
                  }
                  return false
                }
              }
            }
            if (isDef(data)) {
              for (var key in data) {
                if (!isRenderedModule(key)) {
                  invokeCreateHooks(vnode, insertedVnodeQueue)
                  break
                }
              }
            }
          } else if (elm.data !== vnode.text) {
            elm.data = vnode.text
          }
          return true
        }

        function assertNodeMatch (node, vnode) {
          if (isDef(vnode.tag)) {
            return (
              vnode.tag.indexOf('vue-component') === 0 ||
              vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
            )
          } else {
            return node.nodeType === (vnode.isComment ? 8 : 3)
          }
        }

        return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
          if (isUndef(vnode)) {
            if (isDef(oldVnode)) { invokeDestroyHook(oldVnode) }
            return
          }

          var isInitialPatch = false
          var insertedVnodeQueue = []

          if (isUndef(oldVnode)) {
            // empty mount (likely as component), create new root element
            isInitialPatch = true
            createElm(vnode, insertedVnodeQueue, parentElm, refElm)
          } else {
            var isRealElement = isDef(oldVnode.nodeType)
            if (!isRealElement && sameVnode(oldVnode, vnode)) {
              // patch existing root node
              patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
            } else {
              if (isRealElement) {
                // mounting to a real element
                // check if this is server-rendered content and if we can perform
                // a successful hydration.
                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
                  oldVnode.removeAttribute('server-rendered')
                  hydrating = true
                }
                if (isTrue(hydrating)) {
                  if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                    invokeInsertHook(vnode, insertedVnodeQueue, true)
                    return oldVnode
                  } else if (false) {
                    warn(
                      'The client-side rendered virtual DOM tree is not matching ' +
                      'server-rendered content. This is likely caused by incorrect ' +
                      'HTML markup, for example nesting block-level elements inside ' +
                      '<p>, or missing <tbody>. Bailing hydration and performing ' +
                      'full client-side render.'
                    )
                  }
                }
                // either not server-rendered, or hydration failed.
                // create an empty node and replace it
                oldVnode = emptyNodeAt(oldVnode)
              }
              // replacing existing element
              var oldElm = oldVnode.elm
              var parentElm$1 = nodeOps.parentNode(oldElm)
              createElm(
                vnode,
                insertedVnodeQueue,
                // extremely rare edge case: do not insert if old element is in a
                // leaving transition. Only happens when combining transition +
                // keep-alive + HOCs. (#4590)
                oldElm._leaveCb ? null : parentElm$1,
                nodeOps.nextSibling(oldElm)
              )

              if (isDef(vnode.parent)) {
                // component root element replaced.
                // update parent placeholder node element, recursively
                var ancestor = vnode.parent
                while (ancestor) {
                  ancestor.elm = vnode.elm
                  ancestor = ancestor.parent
                }
                if (isPatchable(vnode)) {
                  for (var i = 0; i < cbs.create.length; ++i) {
                    cbs.create[i](emptyNode, vnode.parent)
                  }
                }
              }

              if (isDef(parentElm$1)) {
                removeVnodes(parentElm$1, [oldVnode], 0, 0)
              } else if (isDef(oldVnode.tag)) {
                invokeDestroyHook(oldVnode)
              }
            }
          }

          invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
          return vnode.elm
        }
      }

      /*  */

      var directives = {
        create: updateDirectives,
        update: updateDirectives,
        destroy: function unbindDirectives (vnode) {
          updateDirectives(vnode, emptyNode)
        }
      }

      function updateDirectives (oldVnode, vnode) {
        if (oldVnode.data.directives || vnode.data.directives) {
          _update(oldVnode, vnode)
        }
      }

      function _update (oldVnode, vnode) {
        var isCreate = oldVnode === emptyNode
        var isDestroy = vnode === emptyNode
        var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context)
        var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context)

        var dirsWithInsert = []
        var dirsWithPostpatch = []

        var key, oldDir, dir
        for (key in newDirs) {
          oldDir = oldDirs[key]
          dir = newDirs[key]
          if (!oldDir) {
            // new directive, bind
            callHook$1(dir, 'bind', vnode, oldVnode)
            if (dir.def && dir.def.inserted) {
              dirsWithInsert.push(dir)
            }
          } else {
            // existing directive, update
            dir.oldValue = oldDir.value
            callHook$1(dir, 'update', vnode, oldVnode)
            if (dir.def && dir.def.componentUpdated) {
              dirsWithPostpatch.push(dir)
            }
          }
        }

        if (dirsWithInsert.length) {
          var callInsert = function () {
            for (var i = 0; i < dirsWithInsert.length; i++) {
              callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode)
            }
          }
          if (isCreate) {
            mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert)
          } else {
            callInsert()
          }
        }

        if (dirsWithPostpatch.length) {
          mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
            for (var i = 0; i < dirsWithPostpatch.length; i++) {
              callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode)
            }
          })
        }

        if (!isCreate) {
          for (key in oldDirs) {
            if (!newDirs[key]) {
              // no longer present, unbind
              callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy)
            }
          }
        }
      }

      var emptyModifiers = Object.create(null)

      function normalizeDirectives$1 (dirs,
                                      vm) {
        var res = Object.create(null)
        if (!dirs) {
          return res
        }
        var i, dir
        for (i = 0; i < dirs.length; i++) {
          dir = dirs[i]
          if (!dir.modifiers) {
            dir.modifiers = emptyModifiers
          }
          res[getRawDirName(dir)] = dir
          dir.def = resolveAsset(vm.$options, 'directives', dir.name, true)
        }
        return res
      }

      function getRawDirName (dir) {
        return dir.rawName || ((dir.name) + '.' + (Object.keys(dir.modifiers || {}).join('.')))
      }

      function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
        var fn = dir.def && dir.def[hook]
        if (fn) {
          fn(vnode.elm, dir, vnode, oldVnode, isDestroy)
        }
      }

      var baseModules = [
        ref,
        directives
      ]

      /*  */

      function updateAttrs (oldVnode, vnode) {
        if (!oldVnode.data.attrs && !vnode.data.attrs) {
          return
        }
        var key, cur, old
        var elm = vnode.elm
        var oldAttrs = oldVnode.data.attrs || {}
        var attrs = vnode.data.attrs || {}
        // clone observed objects, as the user probably wants to mutate it
        if (attrs.__ob__) {
          attrs = vnode.data.attrs = extend({}, attrs)
        }

        for (key in attrs) {
          cur = attrs[key]
          old = oldAttrs[key]
          if (old !== cur) {
            setAttr(elm, key, cur)
          }
        }
        // #4391: in IE9, setting type can reset value for input[type=radio]
        /* istanbul ignore if */
        if (isIE9 && attrs.value !== oldAttrs.value) {
          setAttr(elm, 'value', attrs.value)
        }
        for (key in oldAttrs) {
          if (attrs[key] == null) {
            if (isXlink(key)) {
              elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
            } else if (!isEnumeratedAttr(key)) {
              elm.removeAttribute(key)
            }
          }
        }
      }

      function setAttr (el, key, value) {
        if (isBooleanAttr(key)) {
          // set attribute for blank value
          // e.g. <option disabled>Select one</option>
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key)
          } else {
            el.setAttribute(key, key)
          }
        } else if (isEnumeratedAttr(key)) {
          el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true')
        } else if (isXlink(key)) {
          if (isFalsyAttrValue(value)) {
            el.removeAttributeNS(xlinkNS, getXlinkProp(key))
          } else {
            el.setAttributeNS(xlinkNS, key, value)
          }
        } else {
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key)
          } else {
            el.setAttribute(key, value)
          }
        }
      }

      var attrs = {
        create: updateAttrs,
        update: updateAttrs
      }

      /*  */

      function updateClass (oldVnode, vnode) {
        var el = vnode.elm
        var data = vnode.data
        var oldData = oldVnode.data
        if (!data.staticClass && !data.class &&
          (!oldData || (!oldData.staticClass && !oldData.class))) {
          return
        }

        var cls = genClassForVnode(vnode)

        // handle transition classes
        var transitionClass = el._transitionClasses
        if (transitionClass) {
          cls = concat(cls, stringifyClass(transitionClass))
        }

        // set the class
        if (cls !== el._prevClass) {
          el.setAttribute('class', cls)
          el._prevClass = cls
        }
      }

      var klass = {
        create: updateClass,
        update: updateClass
      }

      /*  */

      var validDivisionCharRE = /[\w).+\-_$\]]/

      function parseFilters (exp) {
        var inSingle = false
        var inDouble = false
        var inTemplateString = false
        var inRegex = false
        var curly = 0
        var square = 0
        var paren = 0
        var lastFilterIndex = 0
        var c, prev, i, expression, filters

        for (i = 0; i < exp.length; i++) {
          prev = c
          c = exp.charCodeAt(i)
          if (inSingle) {
            if (c === 0x27 && prev !== 0x5C) { inSingle = false }
          } else if (inDouble) {
            if (c === 0x22 && prev !== 0x5C) { inDouble = false }
          } else if (inTemplateString) {
            if (c === 0x60 && prev !== 0x5C) { inTemplateString = false }
          } else if (inRegex) {
            if (c === 0x2f && prev !== 0x5C) { inRegex = false }
          } else if (
            c === 0x7C && // pipe
            exp.charCodeAt(i + 1) !== 0x7C &&
            exp.charCodeAt(i - 1) !== 0x7C &&
            !curly && !square && !paren
          ) {
            if (expression === undefined) {
              // first filter, end of expression
              lastFilterIndex = i + 1
              expression = exp.slice(0, i).trim()
            } else {
              pushFilter()
            }
          } else {
            switch (c) {
              case 0x22:
                inDouble = true
                break         // "
              case 0x27:
                inSingle = true
                break         // '
              case 0x60:
                inTemplateString = true
                break // `
              case 0x28:
                paren++
                break                 // (
              case 0x29:
                paren--
                break                 // )
              case 0x5B:
                square++
                break                // [
              case 0x5D:
                square--
                break                // ]
              case 0x7B:
                curly++
                break                 // {
              case 0x7D:
                curly--
                break                 // }
            }
            if (c === 0x2f) { // /
              var j = i - 1
              var p = (void 0)
              // find first non-whitespace prev char
              for (; j >= 0; j--) {
                p = exp.charAt(j)
                if (p !== ' ') { break }
              }
              if (!p || !validDivisionCharRE.test(p)) {
                inRegex = true
              }
            }
          }
        }

        if (expression === undefined) {
          expression = exp.slice(0, i).trim()
        } else if (lastFilterIndex !== 0) {
          pushFilter()
        }

        function pushFilter () {
          (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim())
          lastFilterIndex = i + 1
        }

        if (filters) {
          for (i = 0; i < filters.length; i++) {
            expression = wrapFilter(expression, filters[i])
          }
        }

        return expression
      }

      function wrapFilter (exp, filter) {
        var i = filter.indexOf('(')
        if (i < 0) {
          // _f: resolveFilter
          return ('_f("' + filter + '")(' + exp + ')')
        } else {
          var name = filter.slice(0, i)
          var args = filter.slice(i + 1)
          return ('_f("' + name + '")(' + exp + ',' + args)
        }
      }

      /*  */

      function baseWarn (msg) {
        console.error(('[Vue compiler]: ' + msg))
      }

      function pluckModuleFunction (modules,
                                    key) {
        return modules
          ? modules.map(function (m) { return m[key] }).filter(function (_) { return _ })
          : []
      }

      function addProp (el, name, value) {
        (el.props || (el.props = [])).push({name: name, value: value})
      }

      function addAttr (el, name, value) {
        (el.attrs || (el.attrs = [])).push({name: name, value: value})
      }

      function addDirective (el,
                             name,
                             rawName,
                             value,
                             arg,
                             modifiers) {
        (el.directives || (el.directives = [])).push({
          name: name,
          rawName: rawName,
          value: value,
          arg: arg,
          modifiers: modifiers
        })
      }

      function addHandler (el,
                           name,
                           value,
                           modifiers,
                           important) {
        // check capture modifier
        if (modifiers && modifiers.capture) {
          delete modifiers.capture
          name = '!' + name // mark the event as captured
        }
        if (modifiers && modifiers.once) {
          delete modifiers.once
          name = '~' + name // mark the event as once
        }
        var events
        if (modifiers && modifiers.native) {
          delete modifiers.native
          events = el.nativeEvents || (el.nativeEvents = {})
        } else {
          events = el.events || (el.events = {})
        }
        var newHandler = {value: value, modifiers: modifiers}
        var handlers = events[name]
        /* istanbul ignore if */
        if (Array.isArray(handlers)) {
          important ? handlers.unshift(newHandler) : handlers.push(newHandler)
        } else if (handlers) {
          events[name] = important ? [newHandler, handlers] : [handlers, newHandler]
        } else {
          events[name] = newHandler
        }
      }

      function getBindingAttr (el,
                               name,
                               getStatic) {
        var dynamicValue =
          getAndRemoveAttr(el, ':' + name) ||
          getAndRemoveAttr(el, 'v-bind:' + name)
        if (dynamicValue != null) {
          return parseFilters(dynamicValue)
        } else if (getStatic !== false) {
          var staticValue = getAndRemoveAttr(el, name)
          if (staticValue != null) {
            return JSON.stringify(staticValue)
          }
        }
      }

      function getAndRemoveAttr (el, name) {
        var val
        if ((val = el.attrsMap[name]) != null) {
          var list = el.attrsList
          for (var i = 0, l = list.length; i < l; i++) {
            if (list[i].name === name) {
              list.splice(i, 1)
              break
            }
          }
        }
        return val
      }

      /*  */

      /**
       * Cross-platform code generation for component v-model
       */
      function genComponentModel (el,
                                  value,
                                  modifiers) {
        var ref = modifiers || {}
        var number = ref.number
        var trim = ref.trim

        var baseValueExpression = '$$v'
        var valueExpression = baseValueExpression
        if (trim) {
          valueExpression =
            '(typeof ' + baseValueExpression + ' === \'string\'' +
            '? ' + baseValueExpression + '.trim()' +
            ': ' + baseValueExpression + ')'
        }
        if (number) {
          valueExpression = '_n(' + valueExpression + ')'
        }
        var assignment = genAssignmentCode(value, valueExpression)

        el.model = {
          value: ('(' + value + ')'),
          expression: ('"' + value + '"'),
          callback: ('function (' + baseValueExpression + ') {' + assignment + '}')
        }
      }

      /**
       * Cross-platform codegen helper for generating v-model value assignment code.
       */
      function genAssignmentCode (value,
                                  assignment) {
        var modelRs = parseModel(value)
        if (modelRs.idx === null) {
          return (value + '=' + assignment)
        } else {
          return 'var $$exp = ' + (modelRs.exp) + ', $$idx = ' + (modelRs.idx) + ';' +
            'if (!Array.isArray($$exp)){' +
            value + '=' + assignment + '}' +
            'else{$$exp.splice($$idx, 1, ' + assignment + ')}'
        }
      }

      /**
       * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
       *
       * for loop possible cases:
       *
       * - test
       * - test[idx]
       * - test[test1[idx]]
       * - test["a"][idx]
       * - xxx.test[a[a].test1[idx]]
       * - test.xxx.a["asa"][test1[idx]]
       *
       */

      var len
      var str
      var chr
      var index$1
      var expressionPos
      var expressionEndPos

      function parseModel (val) {
        str = val
        len = str.length
        index$1 = expressionPos = expressionEndPos = 0

        if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
          return {
            exp: val,
            idx: null
          }
        }

        while (!eof()) {
          chr = next()
          /* istanbul ignore if */
          if (isStringStart(chr)) {
            parseString(chr)
          } else if (chr === 0x5B) {
            parseBracket(chr)
          }
        }

        return {
          exp: val.substring(0, expressionPos),
          idx: val.substring(expressionPos + 1, expressionEndPos)
        }
      }

      function next () {
        return str.charCodeAt(++index$1)
      }

      function eof () {
        return index$1 >= len
      }

      function isStringStart (chr) {
        return chr === 0x22 || chr === 0x27
      }

      function parseBracket (chr) {
        var inBracket = 1
        expressionPos = index$1
        while (!eof()) {
          chr = next()
          if (isStringStart(chr)) {
            parseString(chr)
            continue
          }
          if (chr === 0x5B) { inBracket++ }
          if (chr === 0x5D) { inBracket-- }
          if (inBracket === 0) {
            expressionEndPos = index$1
            break
          }
        }
      }

      function parseString (chr) {
        var stringQuote = chr
        while (!eof()) {
          chr = next()
          if (chr === stringQuote) {
            break
          }
        }
      }

      /*  */

      var warn$1

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
      var RANGE_TOKEN = '__r'
      var CHECKBOX_RADIO_TOKEN = '__c'

      function model (el,
                      dir,
                      _warn) {
        warn$1 = _warn
        var value = dir.value
        var modifiers = dir.modifiers
        var tag = el.tag
        var type = el.attrsMap.type

        if (false) {
          var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type']
          if (tag === 'input' && dynamicType) {
            warn$1(
              '<input :type="' + dynamicType + '" v-model="' + value + '">:\n' +
              'v-model does not support dynamic input types. Use v-if branches instead.'
            )
          }
          // inputs with type="file" are read only and setting the input's
          // value will throw an error.
          if (tag === 'input' && type === 'file') {
            warn$1(
              '<' + (el.tag) + ' v-model="' + value + '" type="file">:\n' +
              'File inputs are read only. Use a v-on:change listener instead.'
            )
          }
        }

        if (tag === 'select') {
          genSelect(el, value, modifiers)
        } else if (tag === 'input' && type === 'checkbox') {
          genCheckboxModel(el, value, modifiers)
        } else if (tag === 'input' && type === 'radio') {
          genRadioModel(el, value, modifiers)
        } else if (tag === 'input' || tag === 'textarea') {
          genDefaultModel(el, value, modifiers)
        } else if (!config.isReservedTag(tag)) {
          genComponentModel(el, value, modifiers)
          // component v-model doesn't need extra runtime
          return false
        } else if (false) {
          warn$1(
            '<' + (el.tag) + ' v-model="' + value + '">: ' +
            'v-model is not supported on this element type. ' +
            'If you are working with contenteditable, it\'s recommended to ' +
            'wrap a library dedicated for that purpose inside a custom component.'
          )
        }

        // ensure runtime directive metadata
        return true
      }

      function genCheckboxModel (el,
                                 value,
                                 modifiers) {
        var number = modifiers && modifiers.number
        var valueBinding = getBindingAttr(el, 'value') || 'null'
        var trueValueBinding = getBindingAttr(el, 'true-value') || 'true'
        var falseValueBinding = getBindingAttr(el, 'false-value') || 'false'
        addProp(el, 'checked',
          'Array.isArray(' + value + ')' +
          '?_i(' + value + ',' + valueBinding + ')>-1' + (
            trueValueBinding === 'true'
              ? (':(' + value + ')')
              : (':_q(' + value + ',' + trueValueBinding + ')')
          )
        )
        addHandler(el, CHECKBOX_RADIO_TOKEN,
          'var $$a=' + value + ',' +
          '$$el=$event.target,' +
          '$$c=$$el.checked?(' + trueValueBinding + '):(' + falseValueBinding + ');' +
          'if(Array.isArray($$a)){' +
          'var $$v=' + (number ? '_n(' + valueBinding + ')' : valueBinding) + ',' +
          '$$i=_i($$a,$$v);' +
          'if($$c){$$i<0&&(' + value + '=$$a.concat($$v))}' +
          'else{$$i>-1&&(' + value + '=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}' +
          '}else{' + value + '=$$c}',
          null, true
        )
      }

      function genRadioModel (el,
                              value,
                              modifiers) {
        var number = modifiers && modifiers.number
        var valueBinding = getBindingAttr(el, 'value') || 'null'
        valueBinding = number ? ('_n(' + valueBinding + ')') : valueBinding
        addProp(el, 'checked', ('_q(' + value + ',' + valueBinding + ')'))
        addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true)
      }

      function genSelect (el,
                          value,
                          modifiers) {
        var number = modifiers && modifiers.number
        var selectedVal = 'Array.prototype.filter' +
          '.call($event.target.options,function(o){return o.selected})' +
          '.map(function(o){var val = "_value" in o ? o._value : o.value;' +
          'return ' + (number ? '_n(val)' : 'val') + '})'

        var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]'
        var code = 'var $$selectedVal = ' + selectedVal + ';'
        code = code + ' ' + (genAssignmentCode(value, assignment))
        addHandler(el, 'change', code, null, true)
      }

      function genDefaultModel (el,
                                value,
                                modifiers) {
        var type = el.attrsMap.type
        var ref = modifiers || {}
        var lazy = ref.lazy
        var number = ref.number
        var trim = ref.trim
        var needCompositionGuard = !lazy && type !== 'range'
        var event = lazy
          ? 'change'
          : type === 'range'
            ? RANGE_TOKEN
            : 'input'

        var valueExpression = '$event.target.value'
        if (trim) {
          valueExpression = '$event.target.value.trim()'
        }
        if (number) {
          valueExpression = '_n(' + valueExpression + ')'
        }

        var code = genAssignmentCode(value, valueExpression)
        if (needCompositionGuard) {
          code = 'if($event.target.composing)return;' + code
        }

        addProp(el, 'value', ('(' + value + ')'))
        addHandler(el, event, code, null, true)
        if (trim || number || type === 'number') {
          addHandler(el, 'blur', '$forceUpdate()')
        }
      }

      /*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
      function normalizeEvents (on) {
        var event
        /* istanbul ignore if */
        if (on[RANGE_TOKEN]) {
          // IE input[type=range] only supports `change` event
          event = isIE ? 'change' : 'input'
          on[event] = [].concat(on[RANGE_TOKEN], on[event] || [])
          delete on[RANGE_TOKEN]
        }
        if (on[CHECKBOX_RADIO_TOKEN]) {
          // Chrome fires microtasks in between click/change, leads to #4521
          event = isChrome ? 'click' : 'change'
          on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || [])
          delete on[CHECKBOX_RADIO_TOKEN]
        }
      }

      var target$1

      function add$1 (event,
                      handler,
                      once,
                      capture) {
        if (once) {
          var oldHandler = handler
          var _target = target$1 // save current target element in closure
          handler = function (ev) {
            var res = arguments.length === 1
              ? oldHandler(ev)
              : oldHandler.apply(null, arguments)
            if (res !== null) {
              remove$2(event, handler, capture, _target)
            }
          }
        }
        target$1.addEventListener(event, handler, capture)
      }

      function remove$2 (event,
                         handler,
                         capture,
                         _target) {
        (_target || target$1).removeEventListener(event, handler, capture)
      }

      function updateDOMListeners (oldVnode, vnode) {
        if (!oldVnode.data.on && !vnode.data.on) {
          return
        }
        var on = vnode.data.on || {}
        var oldOn = oldVnode.data.on || {}
        target$1 = vnode.elm
        normalizeEvents(on)
        updateListeners(on, oldOn, add$1, remove$2, vnode.context)
      }

      var events = {
        create: updateDOMListeners,
        update: updateDOMListeners
      }

      /*  */

      function updateDOMProps (oldVnode, vnode) {
        if (!oldVnode.data.domProps && !vnode.data.domProps) {
          return
        }
        var key, cur
        var elm = vnode.elm
        var oldProps = oldVnode.data.domProps || {}
        var props = vnode.data.domProps || {}
        // clone observed objects, as the user probably wants to mutate it
        if (props.__ob__) {
          props = vnode.data.domProps = extend({}, props)
        }

        for (key in oldProps) {
          if (props[key] == null) {
            elm[key] = ''
          }
        }
        for (key in props) {
          cur = props[key]
          // ignore children if the node has textContent or innerHTML,
          // as these will throw away existing DOM nodes and cause removal errors
          // on subsequent patches (#3360)
          if (key === 'textContent' || key === 'innerHTML') {
            if (vnode.children) { vnode.children.length = 0 }
            if (cur === oldProps[key]) { continue }
          }

          if (key === 'value') {
            // store value as _value as well since
            // non-string values will be stringified
            elm._value = cur
            // avoid resetting cursor position when value is the same
            var strCur = cur == null ? '' : String(cur)
            if (shouldUpdateValue(elm, vnode, strCur)) {
              elm.value = strCur
            }
          } else {
            elm[key] = cur
          }
        }
      }

// check platforms/web/util/attrs.js acceptValue

      function shouldUpdateValue (elm,
                                  vnode,
                                  checkVal) {
        return (!elm.composing && (
          vnode.tag === 'option' ||
          isDirty(elm, checkVal) ||
          isInputChanged(elm, checkVal)
        ))
      }

      function isDirty (elm, checkVal) {
        // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
        return document.activeElement !== elm && elm.value !== checkVal
      }

      function isInputChanged (elm, newVal) {
        var value = elm.value
        var modifiers = elm._vModifiers // injected by v-model runtime
        if ((modifiers && modifiers.number) || elm.type === 'number') {
          return toNumber(value) !== toNumber(newVal)
        }
        if (modifiers && modifiers.trim) {
          return value.trim() !== newVal.trim()
        }
        return value !== newVal
      }

      var domProps = {
        create: updateDOMProps,
        update: updateDOMProps
      }

      /*  */

      var parseStyleText = cached(function (cssText) {
        var res = {}
        var listDelimiter = /;(?![^(]*\))/g
        var propertyDelimiter = /:(.+)/
        cssText.split(listDelimiter).forEach(function (item) {
          if (item) {
            var tmp = item.split(propertyDelimiter)
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim())
          }
        })
        return res
      })

// merge static and dynamic style data on the same vnode
      function normalizeStyleData (data) {
        var style = normalizeStyleBinding(data.style)
        // static style is pre-processed into an object during compilation
        // and is always a fresh object, so it's safe to merge into it
        return data.staticStyle
          ? extend(data.staticStyle, style)
          : style
      }

// normalize possible array / string values into Object
      function normalizeStyleBinding (bindingStyle) {
        if (Array.isArray(bindingStyle)) {
          return toObject(bindingStyle)
        }
        if (typeof bindingStyle === 'string') {
          return parseStyleText(bindingStyle)
        }
        return bindingStyle
      }

      /**
       * parent component style should be after child's
       * so that parent component's style could override it
       */
      function getStyle (vnode, checkChild) {
        var res = {}
        var styleData

        if (checkChild) {
          var childNode = vnode
          while (childNode.componentInstance) {
            childNode = childNode.componentInstance._vnode
            if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
              extend(res, styleData)
            }
          }
        }

        if ((styleData = normalizeStyleData(vnode.data))) {
          extend(res, styleData)
        }

        var parentNode = vnode
        while ((parentNode = parentNode.parent)) {
          if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
            extend(res, styleData)
          }
        }
        return res
      }

      /*  */

      var cssVarRE = /^--/
      var importantRE = /\s*!important$/
      var setProp = function (el, name, val) {
        /* istanbul ignore if */
        if (cssVarRE.test(name)) {
          el.style.setProperty(name, val)
        } else if (importantRE.test(val)) {
          el.style.setProperty(name, val.replace(importantRE, ''), 'important')
        } else {
          el.style[normalize(name)] = val
        }
      }

      var prefixes = ['Webkit', 'Moz', 'ms']

      var testEl
      var normalize = cached(function (prop) {
        testEl = testEl || document.createElement('div')
        prop = camelize(prop)
        if (prop !== 'filter' && (prop in testEl.style)) {
          return prop
        }
        var upper = prop.charAt(0).toUpperCase() + prop.slice(1)
        for (var i = 0; i < prefixes.length; i++) {
          var prefixed = prefixes[i] + upper
          if (prefixed in testEl.style) {
            return prefixed
          }
        }
      })

      function updateStyle (oldVnode, vnode) {
        var data = vnode.data
        var oldData = oldVnode.data

        if (!data.staticStyle && !data.style &&
          !oldData.staticStyle && !oldData.style) {
          return
        }

        var cur, name
        var el = vnode.elm
        var oldStaticStyle = oldVnode.data.staticStyle
        var oldStyleBinding = oldVnode.data.style || {}

        // if static style exists, stylebinding already merged into it when doing normalizeStyleData
        var oldStyle = oldStaticStyle || oldStyleBinding

        var style = normalizeStyleBinding(vnode.data.style) || {}

        vnode.data.style = style.__ob__ ? extend({}, style) : style

        var newStyle = getStyle(vnode, true)

        for (name in oldStyle) {
          if (newStyle[name] == null) {
            setProp(el, name, '')
          }
        }
        for (name in newStyle) {
          cur = newStyle[name]
          if (cur !== oldStyle[name]) {
            // ie9 setting to null has no effect, must use empty string
            setProp(el, name, cur == null ? '' : cur)
          }
        }
      }

      var style = {
        create: updateStyle,
        update: updateStyle
      }

      /*  */

      /**
       * Add class with compatibility for SVG since classList is not supported on
       * SVG elements in IE
       */
      function addClass (el, cls) {
        /* istanbul ignore if */
        if (!cls || !(cls = cls.trim())) {
          return
        }

        /* istanbul ignore else */
        if (el.classList) {
          if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) { return el.classList.add(c) })
          } else {
            el.classList.add(cls)
          }
        } else {
          var cur = ' ' + (el.getAttribute('class') || '') + ' '
          if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim())
          }
        }
      }

      /**
       * Remove class with compatibility for SVG since classList is not supported on
       * SVG elements in IE
       */
      function removeClass (el, cls) {
        /* istanbul ignore if */
        if (!cls || !(cls = cls.trim())) {
          return
        }

        /* istanbul ignore else */
        if (el.classList) {
          if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c) })
          } else {
            el.classList.remove(cls)
          }
        } else {
          var cur = ' ' + (el.getAttribute('class') || '') + ' '
          var tar = ' ' + cls + ' '
          while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ')
          }
          el.setAttribute('class', cur.trim())
        }
      }

      /*  */

      function resolveTransition (def$$1) {
        if (!def$$1) {
          return
        }
        /* istanbul ignore else */
        if (typeof def$$1 === 'object') {
          var res = {}
          if (def$$1.css !== false) {
            extend(res, autoCssTransition(def$$1.name || 'v'))
          }
          extend(res, def$$1)
          return res
        } else if (typeof def$$1 === 'string') {
          return autoCssTransition(def$$1)
        }
      }

      var autoCssTransition = cached(function (name) {
        return {
          enterClass: (name + '-enter'),
          enterToClass: (name + '-enter-to'),
          enterActiveClass: (name + '-enter-active'),
          leaveClass: (name + '-leave'),
          leaveToClass: (name + '-leave-to'),
          leaveActiveClass: (name + '-leave-active')
        }
      })

      var hasTransition = inBrowser && !isIE9
      var TRANSITION = 'transition'
      var ANIMATION = 'animation'

// Transition property/event sniffing
      var transitionProp = 'transition'
      var transitionEndEvent = 'transitionend'
      var animationProp = 'animation'
      var animationEndEvent = 'animationend'
      if (hasTransition) {
        /* istanbul ignore if */
        if (window.ontransitionend === undefined &&
          window.onwebkittransitionend !== undefined) {
          transitionProp = 'WebkitTransition'
          transitionEndEvent = 'webkitTransitionEnd'
        }
        if (window.onanimationend === undefined &&
          window.onwebkitanimationend !== undefined) {
          animationProp = 'WebkitAnimation'
          animationEndEvent = 'webkitAnimationEnd'
        }
      }

// binding to window is necessary to make hot reload work in IE in strict mode
      var raf = inBrowser && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout

      function nextFrame (fn) {
        raf(function () {
          raf(fn)
        })
      }

      function addTransitionClass (el, cls) {
        (el._transitionClasses || (el._transitionClasses = [])).push(cls)
        addClass(el, cls)
      }

      function removeTransitionClass (el, cls) {
        if (el._transitionClasses) {
          remove(el._transitionClasses, cls)
        }
        removeClass(el, cls)
      }

      function whenTransitionEnds (el,
                                   expectedType,
                                   cb) {
        var ref = getTransitionInfo(el, expectedType)
        var type = ref.type
        var timeout = ref.timeout
        var propCount = ref.propCount
        if (!type) { return cb() }
        var event = type === TRANSITION ? transitionEndEvent : animationEndEvent
        var ended = 0
        var end = function () {
          el.removeEventListener(event, onEnd)
          cb()
        }
        var onEnd = function (e) {
          if (e.target === el) {
            if (++ended >= propCount) {
              end()
            }
          }
        }
        setTimeout(function () {
          if (ended < propCount) {
            end()
          }
        }, timeout + 1)
        el.addEventListener(event, onEnd)
      }

      var transformRE = /\b(transform|all)(,|$)/

      function getTransitionInfo (el, expectedType) {
        var styles = window.getComputedStyle(el)
        var transitionDelays = styles[transitionProp + 'Delay'].split(', ')
        var transitionDurations = styles[transitionProp + 'Duration'].split(', ')
        var transitionTimeout = getTimeout(transitionDelays, transitionDurations)
        var animationDelays = styles[animationProp + 'Delay'].split(', ')
        var animationDurations = styles[animationProp + 'Duration'].split(', ')
        var animationTimeout = getTimeout(animationDelays, animationDurations)

        var type
        var timeout = 0
        var propCount = 0
        /* istanbul ignore if */
        if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
            type = TRANSITION
            timeout = transitionTimeout
            propCount = transitionDurations.length
          }
        } else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
            type = ANIMATION
            timeout = animationTimeout
            propCount = animationDurations.length
          }
        } else {
          timeout = Math.max(transitionTimeout, animationTimeout)
          type = timeout > 0
            ? transitionTimeout > animationTimeout
              ? TRANSITION
              : ANIMATION
            : null
          propCount = type
            ? type === TRANSITION
              ? transitionDurations.length
              : animationDurations.length
            : 0
        }
        var hasTransform =
          type === TRANSITION &&
          transformRE.test(styles[transitionProp + 'Property'])
        return {
          type: type,
          timeout: timeout,
          propCount: propCount,
          hasTransform: hasTransform
        }
      }

      function getTimeout (delays, durations) {
        /* istanbul ignore next */
        while (delays.length < durations.length) {
          delays = delays.concat(delays)
        }

        return Math.max.apply(null, durations.map(function (d, i) {
          return toMs(d) + toMs(delays[i])
        }))
      }

      function toMs (s) {
        return Number(s.slice(0, -1)) * 1000
      }

      /*  */

      function enter (vnode, toggleDisplay) {
        var el = vnode.elm

        // call leave callback now
        if (el._leaveCb) {
          el._leaveCb.cancelled = true
          el._leaveCb()
        }

        var data = resolveTransition(vnode.data.transition)
        if (!data) {
          return
        }

        /* istanbul ignore if */
        if (el._enterCb || el.nodeType !== 1) {
          return
        }

        var css = data.css
        var type = data.type
        var enterClass = data.enterClass
        var enterToClass = data.enterToClass
        var enterActiveClass = data.enterActiveClass
        var appearClass = data.appearClass
        var appearToClass = data.appearToClass
        var appearActiveClass = data.appearActiveClass
        var beforeEnter = data.beforeEnter
        var enter = data.enter
        var afterEnter = data.afterEnter
        var enterCancelled = data.enterCancelled
        var beforeAppear = data.beforeAppear
        var appear = data.appear
        var afterAppear = data.afterAppear
        var appearCancelled = data.appearCancelled
        var duration = data.duration

        // activeInstance will always be the <transition> component managing this
        // transition. One edge case to check is when the <transition> is placed
        // as the root node of a child component. In that case we need to check
        // <transition>'s parent for appear check.
        var context = activeInstance
        var transitionNode = activeInstance.$vnode
        while (transitionNode && transitionNode.parent) {
          transitionNode = transitionNode.parent
          context = transitionNode.context
        }

        var isAppear = !context._isMounted || !vnode.isRootInsert

        if (isAppear && !appear && appear !== '') {
          return
        }

        var startClass = isAppear && appearClass
          ? appearClass
          : enterClass
        var activeClass = isAppear && appearActiveClass
          ? appearActiveClass
          : enterActiveClass
        var toClass = isAppear && appearToClass
          ? appearToClass
          : enterToClass

        var beforeEnterHook = isAppear
          ? (beforeAppear || beforeEnter)
          : beforeEnter
        var enterHook = isAppear
          ? (typeof appear === 'function' ? appear : enter)
          : enter
        var afterEnterHook = isAppear
          ? (afterAppear || afterEnter)
          : afterEnter
        var enterCancelledHook = isAppear
          ? (appearCancelled || enterCancelled)
          : enterCancelled

        var explicitEnterDuration = toNumber(
          isObject(duration)
            ? duration.enter
            : duration
        )

        if (false) {
          checkDuration(explicitEnterDuration, 'enter', vnode)
        }

        var expectsCSS = css !== false && !isIE9
        var userWantsControl = getHookArgumentsLength(enterHook)

        var cb = el._enterCb = once(function () {
          if (expectsCSS) {
            removeTransitionClass(el, toClass)
            removeTransitionClass(el, activeClass)
          }
          if (cb.cancelled) {
            if (expectsCSS) {
              removeTransitionClass(el, startClass)
            }
            enterCancelledHook && enterCancelledHook(el)
          } else {
            afterEnterHook && afterEnterHook(el)
          }
          el._enterCb = null
        })

        if (!vnode.data.show) {
          // remove pending leave element on enter by injecting an insert hook
          mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
            var parent = el.parentNode
            var pendingNode = parent && parent._pending && parent._pending[vnode.key]
            if (pendingNode &&
              pendingNode.tag === vnode.tag &&
              pendingNode.elm._leaveCb) {
              pendingNode.elm._leaveCb()
            }
            enterHook && enterHook(el, cb)
          })
        }

        // start enter transition
        beforeEnterHook && beforeEnterHook(el)
        if (expectsCSS) {
          addTransitionClass(el, startClass)
          addTransitionClass(el, activeClass)
          nextFrame(function () {
            addTransitionClass(el, toClass)
            removeTransitionClass(el, startClass)
            if (!cb.cancelled && !userWantsControl) {
              if (isValidDuration(explicitEnterDuration)) {
                setTimeout(cb, explicitEnterDuration)
              } else {
                whenTransitionEnds(el, type, cb)
              }
            }
          })
        }

        if (vnode.data.show) {
          toggleDisplay && toggleDisplay()
          enterHook && enterHook(el, cb)
        }

        if (!expectsCSS && !userWantsControl) {
          cb()
        }
      }

      function leave (vnode, rm) {
        var el = vnode.elm

        // call enter callback now
        if (el._enterCb) {
          el._enterCb.cancelled = true
          el._enterCb()
        }

        var data = resolveTransition(vnode.data.transition)
        if (!data) {
          return rm()
        }

        /* istanbul ignore if */
        if (el._leaveCb || el.nodeType !== 1) {
          return
        }

        var css = data.css
        var type = data.type
        var leaveClass = data.leaveClass
        var leaveToClass = data.leaveToClass
        var leaveActiveClass = data.leaveActiveClass
        var beforeLeave = data.beforeLeave
        var leave = data.leave
        var afterLeave = data.afterLeave
        var leaveCancelled = data.leaveCancelled
        var delayLeave = data.delayLeave
        var duration = data.duration

        var expectsCSS = css !== false && !isIE9
        var userWantsControl = getHookArgumentsLength(leave)

        var explicitLeaveDuration = toNumber(
          isObject(duration)
            ? duration.leave
            : duration
        )

        if (false) {
          checkDuration(explicitLeaveDuration, 'leave', vnode)
        }

        var cb = el._leaveCb = once(function () {
          if (el.parentNode && el.parentNode._pending) {
            el.parentNode._pending[vnode.key] = null
          }
          if (expectsCSS) {
            removeTransitionClass(el, leaveToClass)
            removeTransitionClass(el, leaveActiveClass)
          }
          if (cb.cancelled) {
            if (expectsCSS) {
              removeTransitionClass(el, leaveClass)
            }
            leaveCancelled && leaveCancelled(el)
          } else {
            rm()
            afterLeave && afterLeave(el)
          }
          el._leaveCb = null
        })

        if (delayLeave) {
          delayLeave(performLeave)
        } else {
          performLeave()
        }

        function performLeave () {
          // the delayed leave may have already been cancelled
          if (cb.cancelled) {
            return
          }
          // record leaving element
          if (!vnode.data.show) {
            (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode
          }
          beforeLeave && beforeLeave(el)
          if (expectsCSS) {
            addTransitionClass(el, leaveClass)
            addTransitionClass(el, leaveActiveClass)
            nextFrame(function () {
              addTransitionClass(el, leaveToClass)
              removeTransitionClass(el, leaveClass)
              if (!cb.cancelled && !userWantsControl) {
                if (isValidDuration(explicitLeaveDuration)) {
                  setTimeout(cb, explicitLeaveDuration)
                } else {
                  whenTransitionEnds(el, type, cb)
                }
              }
            })
          }
          leave && leave(el, cb)
          if (!expectsCSS && !userWantsControl) {
            cb()
          }
        }
      }

// only used in dev mode
      function checkDuration (val, name, vnode) {
        if (typeof val !== 'number') {
          warn(
            '<transition> explicit ' + name + ' duration is not a valid number - ' +
            'got ' + (JSON.stringify(val)) + '.',
            vnode.context
          )
        } else if (isNaN(val)) {
          warn(
            '<transition> explicit ' + name + ' duration is NaN - ' +
            'the duration expression might be incorrect.',
            vnode.context
          )
        }
      }

      function isValidDuration (val) {
        return typeof val === 'number' && !isNaN(val)
      }

      /**
       * Normalize a transition hook's argument length. The hook may be:
       * - a merged hook (invoker) with the original in .fns
       * - a wrapped component method (check ._length)
       * - a plain function (.length)
       */
      function getHookArgumentsLength (fn) {
        if (!fn) { return false }
        var invokerFns = fn.fns
        if (invokerFns) {
          // invoker
          return getHookArgumentsLength(
            Array.isArray(invokerFns)
              ? invokerFns[0]
              : invokerFns
          )
        } else {
          return (fn._length || fn.length) > 1
        }
      }

      function _enter (_, vnode) {
        if (!vnode.data.show) {
          enter(vnode)
        }
      }

      var transition = inBrowser ? {
        create: _enter,
        activate: _enter,
        remove: function remove$$1 (vnode, rm) {
          /* istanbul ignore else */
          if (!vnode.data.show) {
            leave(vnode, rm)
          } else {
            rm()
          }
        }
      } : {}

      var platformModules = [
        attrs,
        klass,
        events,
        domProps,
        style,
        transition
      ]

      /*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
      var modules = platformModules.concat(baseModules)

      var patch = createPatchFunction({nodeOps: nodeOps, modules: modules})

      /**
       * Not type checking this file because flow doesn't like attaching
       * properties to Elements.
       */

      /* istanbul ignore if */
      if (isIE9) {
        // http://www.matts411.com/post/internet-explorer-9-oninput/
        document.addEventListener('selectionchange', function () {
          var el = document.activeElement
          if (el && el.vmodel) {
            trigger(el, 'input')
          }
        })
      }

      var model$1 = {
        inserted: function inserted (el, binding, vnode) {
          if (vnode.tag === 'select') {
            var cb = function () {
              setSelected(el, binding, vnode.context)
            }
            cb()
            /* istanbul ignore if */
            if (isIE || isEdge) {
              setTimeout(cb, 0)
            }
          } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
            el._vModifiers = binding.modifiers
            if (!binding.modifiers.lazy) {
              if (!isAndroid) {
                el.addEventListener('compositionstart', onCompositionStart)
                el.addEventListener('compositionend', onCompositionEnd)
              }
              /* istanbul ignore if */
              if (isIE9) {
                el.vmodel = true
              }
            }
          }
        },
        componentUpdated: function componentUpdated (el, binding, vnode) {
          if (vnode.tag === 'select') {
            setSelected(el, binding, vnode.context)
            // in case the options rendered by v-for have changed,
            // it's possible that the value is out-of-sync with the rendered options.
            // detect such cases and filter out values that no longer has a matching
            // option in the DOM.
            var needReset = el.multiple
              ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options) })
              : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options)
            if (needReset) {
              trigger(el, 'change')
            }
          }
        }
      }

      function setSelected (el, binding, vm) {
        var value = binding.value
        var isMultiple = el.multiple
        if (isMultiple && !Array.isArray(value)) {
          'production' !== 'production' && warn(
            '<select multiple v-model="' + (binding.expression) + '"> ' +
            'expects an Array value for its binding, but got ' + (Object.prototype.toString.call(value).slice(8, -1)),
            vm
          )
          return
        }
        var selected, option
        for (var i = 0, l = el.options.length; i < l; i++) {
          option = el.options[i]
          if (isMultiple) {
            selected = looseIndexOf(value, getValue(option)) > -1
            if (option.selected !== selected) {
              option.selected = selected
            }
          } else {
            if (looseEqual(getValue(option), value)) {
              if (el.selectedIndex !== i) {
                el.selectedIndex = i
              }
              return
            }
          }
        }
        if (!isMultiple) {
          el.selectedIndex = -1
        }
      }

      function hasNoMatchingOption (value, options) {
        for (var i = 0, l = options.length; i < l; i++) {
          if (looseEqual(getValue(options[i]), value)) {
            return false
          }
        }
        return true
      }

      function getValue (option) {
        return '_value' in option
          ? option._value
          : option.value
      }

      function onCompositionStart (e) {
        e.target.composing = true
      }

      function onCompositionEnd (e) {
        e.target.composing = false
        trigger(e.target, 'input')
      }

      function trigger (el, type) {
        var e = document.createEvent('HTMLEvents')
        e.initEvent(type, true, true)
        el.dispatchEvent(e)
      }

      /*  */

// recursively search for possible transition defined inside the component root
      function locateNode (vnode) {
        return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
          ? locateNode(vnode.componentInstance._vnode)
          : vnode
      }

      var show = {
        bind: function bind (el, ref, vnode) {
          var value = ref.value

          vnode = locateNode(vnode)
          var transition = vnode.data && vnode.data.transition
          var originalDisplay = el.__vOriginalDisplay =
            el.style.display === 'none' ? '' : el.style.display
          if (value && transition && !isIE9) {
            vnode.data.show = true
            enter(vnode, function () {
              el.style.display = originalDisplay
            })
          } else {
            el.style.display = value ? originalDisplay : 'none'
          }
        },

        update: function update (el, ref, vnode) {
          var value = ref.value
          var oldValue = ref.oldValue

          /* istanbul ignore if */
          if (value === oldValue) { return }
          vnode = locateNode(vnode)
          var transition = vnode.data && vnode.data.transition
          if (transition && !isIE9) {
            vnode.data.show = true
            if (value) {
              enter(vnode, function () {
                el.style.display = el.__vOriginalDisplay
              })
            } else {
              leave(vnode, function () {
                el.style.display = 'none'
              })
            }
          } else {
            el.style.display = value ? el.__vOriginalDisplay : 'none'
          }
        },

        unbind: function unbind (el,
                                 binding,
                                 vnode,
                                 oldVnode,
                                 isDestroy) {
          if (!isDestroy) {
            el.style.display = el.__vOriginalDisplay
          }
        }
      }

      var platformDirectives = {
        model: model$1,
        show: show
      }

      /*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

      var transitionProps = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
      }

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
      function getRealChild (vnode) {
        var compOptions = vnode && vnode.componentOptions
        if (compOptions && compOptions.Ctor.options.abstract) {
          return getRealChild(getFirstComponentChild(compOptions.children))
        } else {
          return vnode
        }
      }

      function extractTransitionData (comp) {
        var data = {}
        var options = comp.$options
        // props
        for (var key in options.propsData) {
          data[key] = comp[key]
        }
        // events.
        // extract listeners and pass them directly to the transition methods
        var listeners = options._parentListeners
        for (var key$1 in listeners) {
          data[camelize(key$1)] = listeners[key$1]
        }
        return data
      }

      function placeholder (h, rawChild) {
        return /\d-keep-alive$/.test(rawChild.tag)
          ? h('keep-alive')
          : null
      }

      function hasParentTransition (vnode) {
        while ((vnode = vnode.parent)) {
          if (vnode.data.transition) {
            return true
          }
        }
      }

      function isSameChild (child, oldChild) {
        return oldChild.key === child.key && oldChild.tag === child.tag
      }

      var Transition = {
        name: 'transition',
        props: transitionProps,
        abstract: true,

        render: function render (h) {
          var this$1 = this

          var children = this.$slots.default
          if (!children) {
            return
          }

          // filter out text nodes (possible whitespaces)
          children = children.filter(function (c) { return c.tag })
          /* istanbul ignore if */
          if (!children.length) {
            return
          }

          // warn multiple elements
          if (false) {
            warn(
              '<transition> can only be used on a single element. Use ' +
              '<transition-group> for lists.',
              this.$parent
            )
          }

          var mode = this.mode

          // warn invalid mode
          if (false) {
            warn(
              'invalid <transition> mode: ' + mode,
              this.$parent
            )
          }

          var rawChild = children[0]

          // if this is a component root node and the component's
          // parent container node also has transition, skip.
          if (hasParentTransition(this.$vnode)) {
            return rawChild
          }

          // apply transition data to child
          // use getRealChild() to ignore abstract components e.g. keep-alive
          var child = getRealChild(rawChild)
          /* istanbul ignore if */
          if (!child) {
            return rawChild
          }

          if (this._leaving) {
            return placeholder(h, rawChild)
          }

          // ensure a key that is unique to the vnode type and to this transition
          // component instance. This key will be used to remove pending leaving nodes
          // during entering.
          var id = '__transition-' + (this._uid) + '-'
          child.key = child.key == null
            ? id + child.tag
            : isPrimitive(child.key)
              ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
              : child.key

          var data = (child.data || (child.data = {})).transition = extractTransitionData(this)
          var oldRawChild = this._vnode
          var oldChild = getRealChild(oldRawChild)

          // mark v-show
          // so that the transition module can hand over the control to the directive
          if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show' })) {
            child.data.show = true
          }

          if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
            // replace old child transition data with fresh one
            // important for dynamic transitions!
            var oldData = oldChild && (oldChild.data.transition = extend({}, data))
            // handle transition mode
            if (mode === 'out-in') {
              // return placeholder node and queue update when leave finishes
              this._leaving = true
              mergeVNodeHook(oldData, 'afterLeave', function () {
                this$1._leaving = false
                this$1.$forceUpdate()
              })
              return placeholder(h, rawChild)
            } else if (mode === 'in-out') {
              var delayedLeave
              var performLeave = function () { delayedLeave() }
              mergeVNodeHook(data, 'afterEnter', performLeave)
              mergeVNodeHook(data, 'enterCancelled', performLeave)
              mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave })
            }
          }

          return rawChild
        }
      }

      /*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

      var props = extend({
        tag: String,
        moveClass: String
      }, transitionProps)

      delete props.mode

      var TransitionGroup = {
        props: props,

        render: function render (h) {
          var tag = this.tag || this.$vnode.data.tag || 'span'
          var map = Object.create(null)
          var prevChildren = this.prevChildren = this.children
          var rawChildren = this.$slots.default || []
          var children = this.children = []
          var transitionData = extractTransitionData(this)

          for (var i = 0; i < rawChildren.length; i++) {
            var c = rawChildren[i]
            if (c.tag) {
              if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                children.push(c)
                map[c.key] = c
                ;(c.data || (c.data = {})).transition = transitionData
              } else if (false) {
                var opts = c.componentOptions
                var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag
                warn(('<transition-group> children must be keyed: <' + name + '>'))
              }
            }
          }

          if (prevChildren) {
            var kept = []
            var removed = []
            for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
              var c$1 = prevChildren[i$1]
              c$1.data.transition = transitionData
              c$1.data.pos = c$1.elm.getBoundingClientRect()
              if (map[c$1.key]) {
                kept.push(c$1)
              } else {
                removed.push(c$1)
              }
            }
            this.kept = h(tag, null, kept)
            this.removed = removed
          }

          return h(tag, null, children)
        },

        beforeUpdate: function beforeUpdate () {
          // force removing pass
          this.__patch__(
            this._vnode,
            this.kept,
            false, // hydrating
            true // removeOnly (!important, avoids unnecessary moves)
          )
          this._vnode = this.kept
        },

        updated: function updated () {
          var children = this.prevChildren
          var moveClass = this.moveClass || ((this.name || 'v') + '-move')
          if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
            return
          }

          // we divide the work into three loops to avoid mixing DOM reads and writes
          // in each iteration - which helps prevent layout thrashing.
          children.forEach(callPendingCbs)
          children.forEach(recordPosition)
          children.forEach(applyTranslation)

          // force reflow to put everything in position
          var body = document.body
          var f = body.offsetHeight // eslint-disable-line

          children.forEach(function (c) {
            if (c.data.moved) {
              var el = c.elm
              var s = el.style
              addTransitionClass(el, moveClass)
              s.transform = s.WebkitTransform = s.transitionDuration = ''
              el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
                if (!e || /transform$/.test(e.propertyName)) {
                  el.removeEventListener(transitionEndEvent, cb)
                  el._moveCb = null
                  removeTransitionClass(el, moveClass)
                }
              })
            }
          })
        },

        methods: {
          hasMove: function hasMove (el, moveClass) {
            /* istanbul ignore if */
            if (!hasTransition) {
              return false
            }
            if (this._hasMove != null) {
              return this._hasMove
            }
            // Detect whether an element with the move class applied has
            // CSS transitions. Since the element may be inside an entering
            // transition at this very moment, we make a clone of it and remove
            // all other transition classes applied to ensure only the move class
            // is applied.
            var clone = el.cloneNode()
            if (el._transitionClasses) {
              el._transitionClasses.forEach(function (cls) { removeClass(clone, cls) })
            }
            addClass(clone, moveClass)
            clone.style.display = 'none'
            this.$el.appendChild(clone)
            var info = getTransitionInfo(clone)
            this.$el.removeChild(clone)
            return (this._hasMove = info.hasTransform)
          }
        }
      }

      function callPendingCbs (c) {
        /* istanbul ignore if */
        if (c.elm._moveCb) {
          c.elm._moveCb()
        }
        /* istanbul ignore if */
        if (c.elm._enterCb) {
          c.elm._enterCb()
        }
      }

      function recordPosition (c) {
        c.data.newPos = c.elm.getBoundingClientRect()
      }

      function applyTranslation (c) {
        var oldPos = c.data.pos
        var newPos = c.data.newPos
        var dx = oldPos.left - newPos.left
        var dy = oldPos.top - newPos.top
        if (dx || dy) {
          c.data.moved = true
          var s = c.elm.style
          s.transform = s.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)'
          s.transitionDuration = '0s'
        }
      }

      var platformComponents = {
        Transition: Transition,
        TransitionGroup: TransitionGroup
      }

      /*  */

// install platform specific utils
      Vue$3.config.mustUseProp = mustUseProp
      Vue$3.config.isReservedTag = isReservedTag
      Vue$3.config.getTagNamespace = getTagNamespace
      Vue$3.config.isUnknownElement = isUnknownElement

// install platform runtime directives & components
      extend(Vue$3.options.directives, platformDirectives)
      extend(Vue$3.options.components, platformComponents)

// install platform patch function
      Vue$3.prototype.__patch__ = inBrowser ? patch : noop

// public mount method
      Vue$3.prototype.$mount = function (el,
                                         hydrating) {
        el = el && inBrowser ? query(el) : undefined
        return mountComponent(this, el, hydrating)
      }

// devtools global hook
      /* istanbul ignore next */
      setTimeout(function () {
        if (config.devtools) {
          if (devtools) {
            devtools.emit('init', Vue$3)
          } else if (false) {
            console[console.info ? 'info' : 'log'](
              'Download the Vue Devtools extension for a better development experience:\n' +
              'https://github.com/vuejs/vue-devtools'
            )
          }
        }
        if (false) {
          console[console.info ? 'info' : 'log'](
            'You are running Vue in development mode.\n' +
            'Make sure to turn on production mode when deploying for production.\n' +
            'See more tips at https://vuejs.org/guide/deployment.html'
          )
        }
      }, 0)

      /*  */

// check whether current browser encodes a char inside attribute values
      function shouldDecode (content, encoded) {
        var div = document.createElement('div')
        div.innerHTML = '<div a="' + content + '">'
        return div.innerHTML.indexOf(encoded) > 0
      }

// #3663
// IE encodes newlines inside attribute values while other browsers don't
      var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false

      /*  */

      var isUnaryTag = makeMap(
        'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
        'link,meta,param,source,track,wbr'
      )

// Elements that you can, intentionally, leave open
// (and which close themselves)
      var canBeLeftOpenTag = makeMap(
        'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
      )

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
      var isNonPhrasingTag = makeMap(
        'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
        'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
        'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
        'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
        'title,tr,track'
      )

      /*  */

      var decoder

      function decode (html) {
        decoder = decoder || document.createElement('div')
        decoder.innerHTML = html
        return decoder.textContent
      }

      /**
       * Not type-checking this file because it's mostly vendor code.
       */

      /*!
       * HTML Parser By John Resig (ejohn.org)
       * Modified by Juriy "kangax" Zaytsev
       * Original code by Erik Arvidsson, Mozilla Public License
       * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
       */

// Regular Expressions for parsing tags and attributes
      var singleAttrIdentifier = /([^\s"'<>/=]+)/
      var singleAttrAssign = /(?:=)/
      var singleAttrValues = [
        // attr value double quotes
        /"([^"]*)"+/.source,
        // attr value, single quotes
        /'([^']*)'+/.source,
        // attr value, no quotes
        /([^\s"'=<>`]+)/.source
      ]
      var attribute = new RegExp(
        '^\\s*' + singleAttrIdentifier.source +
        '(?:\\s*(' + singleAttrAssign.source + ')' +
        '\\s*(?:' + singleAttrValues.join('|') + '))?'
      )

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
      var ncname = '[a-zA-Z_][\\w\\-\\.]*'
      var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
      var startTagOpen = new RegExp('^<' + qnameCapture)
      var startTagClose = /^\s*(\/?)>/
      var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>')
      var doctype = /^<!DOCTYPE [^>]+>/i
      var comment = /^<!--/
      var conditionalComment = /^<!\[/

      var IS_REGEX_CAPTURING_BROKEN = false
      'x'.replace(/x(.)?/g, function (m, g) {
        IS_REGEX_CAPTURING_BROKEN = g === ''
      })

// Special Elements (can contain anything)
      var isPlainTextElement = makeMap('script,style,textarea', true)
      var reCache = {}

      var decodingMap = {
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&amp;': '&',
        '&#10;': '\n'
      }
      var encodedAttr = /&(?:lt|gt|quot|amp);/g
      var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g

      function decodeAttr (value, shouldDecodeNewlines) {
        var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr
        return value.replace(re, function (match) { return decodingMap[match] })
      }

      function parseHTML (html, options) {
        var stack = []
        var expectHTML = options.expectHTML
        var isUnaryTag$$1 = options.isUnaryTag || no
        var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no
        var index = 0
        var last, lastTag
        while (html) {
          last = html
          // Make sure we're not in a plaintext content element like script/style
          if (!lastTag || !isPlainTextElement(lastTag)) {
            var textEnd = html.indexOf('<')
            if (textEnd === 0) {
              // Comment:
              if (comment.test(html)) {
                var commentEnd = html.indexOf('-->')

                if (commentEnd >= 0) {
                  advance(commentEnd + 3)
                  continue
                }
              }

              // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
              if (conditionalComment.test(html)) {
                var conditionalEnd = html.indexOf(']>')

                if (conditionalEnd >= 0) {
                  advance(conditionalEnd + 2)
                  continue
                }
              }

              // Doctype:
              var doctypeMatch = html.match(doctype)
              if (doctypeMatch) {
                advance(doctypeMatch[0].length)
                continue
              }

              // End tag:
              var endTagMatch = html.match(endTag)
              if (endTagMatch) {
                var curIndex = index
                advance(endTagMatch[0].length)
                parseEndTag(endTagMatch[1], curIndex, index)
                continue
              }

              // Start tag:
              var startTagMatch = parseStartTag()
              if (startTagMatch) {
                handleStartTag(startTagMatch)
                continue
              }
            }

            var text = (void 0), rest$1 = (void 0), next = (void 0)
            if (textEnd >= 0) {
              rest$1 = html.slice(textEnd)
              while (
              !endTag.test(rest$1) &&
              !startTagOpen.test(rest$1) &&
              !comment.test(rest$1) &&
              !conditionalComment.test(rest$1)
                ) {
                // < in plain text, be forgiving and treat it as text
                next = rest$1.indexOf('<', 1)
                if (next < 0) { break }
                textEnd += next
                rest$1 = html.slice(textEnd)
              }
              text = html.substring(0, textEnd)
              advance(textEnd)
            }

            if (textEnd < 0) {
              text = html
              html = ''
            }

            if (options.chars && text) {
              options.chars(text)
            }
          } else {
            var stackedTag = lastTag.toLowerCase()
            var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'))
            var endTagLength = 0
            var rest = html.replace(reStackedTag, function (all, text, endTag) {
              endTagLength = endTag.length
              if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
                text = text
                  .replace(/<!--([\s\S]*?)-->/g, '$1')
                  .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')
              }
              if (options.chars) {
                options.chars(text)
              }
              return ''
            })
            index += html.length - rest.length
            html = rest
            parseEndTag(stackedTag, index - endTagLength, index)
          }

          if (html === last) {
            options.chars && options.chars(html)
            if (false) {
              options.warn(('Mal-formatted tag at end of template: "' + html + '"'))
            }
            break
          }
        }

        // Clean up any remaining tags
        parseEndTag()

        function advance (n) {
          index += n
          html = html.substring(n)
        }

        function parseStartTag () {
          var start = html.match(startTagOpen)
          if (start) {
            var match = {
              tagName: start[1],
              attrs: [],
              start: index
            }
            advance(start[0].length)
            var end, attr
            while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
              advance(attr[0].length)
              match.attrs.push(attr)
            }
            if (end) {
              match.unarySlash = end[1]
              advance(end[0].length)
              match.end = index
              return match
            }
          }
        }

        function handleStartTag (match) {
          var tagName = match.tagName
          var unarySlash = match.unarySlash

          if (expectHTML) {
            if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
              parseEndTag(lastTag)
            }
            if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
              parseEndTag(tagName)
            }
          }

          var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash

          var l = match.attrs.length
          var attrs = new Array(l)
          for (var i = 0; i < l; i++) {
            var args = match.attrs[i]
            // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
            if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
              if (args[3] === '') { delete args[3] }
              if (args[4] === '') { delete args[4] }
              if (args[5] === '') { delete args[5] }
            }
            var value = args[3] || args[4] || args[5] || ''
            attrs[i] = {
              name: args[1],
              value: decodeAttr(
                value,
                options.shouldDecodeNewlines
              )
            }
          }

          if (!unary) {
            stack.push({tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs})
            lastTag = tagName
          }

          if (options.start) {
            options.start(tagName, attrs, unary, match.start, match.end)
          }
        }

        function parseEndTag (tagName, start, end) {
          var pos, lowerCasedTagName
          if (start == null) { start = index }
          if (end == null) { end = index }

          if (tagName) {
            lowerCasedTagName = tagName.toLowerCase()
          }

          // Find the closest opened tag of the same type
          if (tagName) {
            for (pos = stack.length - 1; pos >= 0; pos--) {
              if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                break
              }
            }
          } else {
            // If no tag name is provided, clean shop
            pos = 0
          }

          if (pos >= 0) {
            // Close all the open elements, up the stack
            for (var i = stack.length - 1; i >= pos; i--) {
              if (false) {
                options.warn(
                  ('tag <' + (stack[i].tag) + '> has no matching end tag.')
                )
              }
              if (options.end) {
                options.end(stack[i].tag, start, end)
              }
            }

            // Remove the open elements from the stack
            stack.length = pos
            lastTag = pos && stack[pos - 1].tag
          } else if (lowerCasedTagName === 'br') {
            if (options.start) {
              options.start(tagName, [], true, start, end)
            }
          } else if (lowerCasedTagName === 'p') {
            if (options.start) {
              options.start(tagName, [], false, start, end)
            }
            if (options.end) {
              options.end(tagName, start, end)
            }
          }
        }
      }

      /*  */

      var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g
      var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g

      var buildRegex = cached(function (delimiters) {
        var open = delimiters[0].replace(regexEscapeRE, '\\$&')
        var close = delimiters[1].replace(regexEscapeRE, '\\$&')
        return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
      })

      function parseText (text,
                          delimiters) {
        var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE
        if (!tagRE.test(text)) {
          return
        }
        var tokens = []
        var lastIndex = tagRE.lastIndex = 0
        var match, index
        while ((match = tagRE.exec(text))) {
          index = match.index
          // push text token
          if (index > lastIndex) {
            tokens.push(JSON.stringify(text.slice(lastIndex, index)))
          }
          // tag token
          var exp = parseFilters(match[1].trim())
          tokens.push(('_s(' + exp + ')'))
          lastIndex = index + match[0].length
        }
        if (lastIndex < text.length) {
          tokens.push(JSON.stringify(text.slice(lastIndex)))
        }
        return tokens.join('+')
      }

      /*  */

      var onRE = /^@|^v-on:/
      var dirRE = /^v-|^@|^:/
      var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/
      var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/

      var argRE = /:(.*)$/
      var bindRE = /^:|^v-bind:/
      var modifierRE = /\.[^.]+/g

      var decodeHTMLCached = cached(decode)

// configurable state
      var warn$2
      var delimiters
      var transforms
      var preTransforms
      var postTransforms
      var platformIsPreTag
      var platformMustUseProp
      var platformGetTagNamespace

      /**
       * Convert HTML string to AST.
       */
      function parse (template,
                      options) {
        warn$2 = options.warn || baseWarn
        platformGetTagNamespace = options.getTagNamespace || no
        platformMustUseProp = options.mustUseProp || no
        platformIsPreTag = options.isPreTag || no
        preTransforms = pluckModuleFunction(options.modules, 'preTransformNode')
        transforms = pluckModuleFunction(options.modules, 'transformNode')
        postTransforms = pluckModuleFunction(options.modules, 'postTransformNode')
        delimiters = options.delimiters

        var stack = []
        var preserveWhitespace = options.preserveWhitespace !== false
        var root
        var currentParent
        var inVPre = false
        var inPre = false
        var warned = false

        function warnOnce (msg) {
          if (!warned) {
            warned = true
            warn$2(msg)
          }
        }

        function endPre (element) {
          // check pre state
          if (element.pre) {
            inVPre = false
          }
          if (platformIsPreTag(element.tag)) {
            inPre = false
          }
        }

        parseHTML(template, {
          warn: warn$2,
          expectHTML: options.expectHTML,
          isUnaryTag: options.isUnaryTag,
          canBeLeftOpenTag: options.canBeLeftOpenTag,
          shouldDecodeNewlines: options.shouldDecodeNewlines,
          start: function start (tag, attrs, unary) {
            // check namespace.
            // inherit parent ns if there is one
            var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag)

            // handle IE svg bug
            /* istanbul ignore if */
            if (isIE && ns === 'svg') {
              attrs = guardIESVGBug(attrs)
            }

            var element = {
              type: 1,
              tag: tag,
              attrsList: attrs,
              attrsMap: makeAttrsMap(attrs),
              parent: currentParent,
              children: []
            }
            if (ns) {
              element.ns = ns
            }

            if (isForbiddenTag(element) && !isServerRendering()) {
              element.forbidden = true
              'production' !== 'production' && warn$2(
                'Templates should only be responsible for mapping the state to the ' +
                'UI. Avoid placing tags with side-effects in your templates, such as ' +
                '<' + tag + '>' + ', as they will not be parsed.'
              )
            }

            // apply pre-transforms
            for (var i = 0; i < preTransforms.length; i++) {
              preTransforms[i](element, options)
            }

            if (!inVPre) {
              processPre(element)
              if (element.pre) {
                inVPre = true
              }
            }
            if (platformIsPreTag(element.tag)) {
              inPre = true
            }
            if (inVPre) {
              processRawAttrs(element)
            } else {
              processFor(element)
              processIf(element)
              processOnce(element)
              processKey(element)

              // determine whether this is a plain element after
              // removing structural attributes
              element.plain = !element.key && !attrs.length

              processRef(element)
              processSlot(element)
              processComponent(element)
              for (var i$1 = 0; i$1 < transforms.length; i$1++) {
                transforms[i$1](element, options)
              }
              processAttrs(element)
            }

            function checkRootConstraints (el) {
              if (false) {
                if (el.tag === 'slot' || el.tag === 'template') {
                  warnOnce(
                    'Cannot use <' + (el.tag) + '> as component root element because it may ' +
                    'contain multiple nodes.'
                  )
                }
                if (el.attrsMap.hasOwnProperty('v-for')) {
                  warnOnce(
                    'Cannot use v-for on stateful component root element because ' +
                    'it renders multiple elements.'
                  )
                }
              }
            }

            // tree management
            if (!root) {
              root = element
              checkRootConstraints(root)
            } else if (!stack.length) {
              // allow root elements with v-if, v-else-if and v-else
              if (root.if && (element.elseif || element.else)) {
                checkRootConstraints(element)
                addIfCondition(root, {
                  exp: element.elseif,
                  block: element
                })
              } else if (false) {
                warnOnce(
                  'Component template should contain exactly one root element. ' +
                  'If you are using v-if on multiple elements, ' +
                  'use v-else-if to chain them instead.'
                )
              }
            }
            if (currentParent && !element.forbidden) {
              if (element.elseif || element.else) {
                processIfConditions(element, currentParent)
              } else if (element.slotScope) { // scoped slot
                currentParent.plain = false
                var name = element.slotTarget || '"default"';
                (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element
              } else {
                currentParent.children.push(element)
                element.parent = currentParent
              }
            }
            if (!unary) {
              currentParent = element
              stack.push(element)
            } else {
              endPre(element)
            }
            // apply post-transforms
            for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
              postTransforms[i$2](element, options)
            }
          },

          end: function end () {
            // remove trailing whitespace
            var element = stack[stack.length - 1]
            var lastNode = element.children[element.children.length - 1]
            if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
              element.children.pop()
            }
            // pop stack
            stack.length -= 1
            currentParent = stack[stack.length - 1]
            endPre(element)
          },

          chars: function chars (text) {
            if (!currentParent) {
              if (false) {
                if (text === template) {
                  warnOnce(
                    'Component template requires a root element, rather than just text.'
                  )
                } else if ((text = text.trim())) {
                  warnOnce(
                    ('text "' + text + '" outside root element will be ignored.')
                  )
                }
              }
              return
            }
            // IE textarea placeholder bug
            /* istanbul ignore if */
            if (isIE &&
              currentParent.tag === 'textarea' &&
              currentParent.attrsMap.placeholder === text) {
              return
            }
            var children = currentParent.children
            text = inPre || text.trim()
              ? decodeHTMLCached(text)
              // only preserve whitespace if its not right after a starting tag
              : preserveWhitespace && children.length ? ' ' : ''
            if (text) {
              var expression
              if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
                children.push({
                  type: 2,
                  expression: expression,
                  text: text
                })
              } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
                children.push({
                  type: 3,
                  text: text
                })
              }
            }
          }
        })
        return root
      }

      function processPre (el) {
        if (getAndRemoveAttr(el, 'v-pre') != null) {
          el.pre = true
        }
      }

      function processRawAttrs (el) {
        var l = el.attrsList.length
        if (l) {
          var attrs = el.attrs = new Array(l)
          for (var i = 0; i < l; i++) {
            attrs[i] = {
              name: el.attrsList[i].name,
              value: JSON.stringify(el.attrsList[i].value)
            }
          }
        } else if (!el.pre) {
          // non root node in pre blocks with no attributes
          el.plain = true
        }
      }

      function processKey (el) {
        var exp = getBindingAttr(el, 'key')
        if (exp) {
          if (false) {
            warn$2('<template> cannot be keyed. Place the key on real elements instead.')
          }
          el.key = exp
        }
      }

      function processRef (el) {
        var ref = getBindingAttr(el, 'ref')
        if (ref) {
          el.ref = ref
          el.refInFor = checkInFor(el)
        }
      }

      function processFor (el) {
        var exp
        if ((exp = getAndRemoveAttr(el, 'v-for'))) {
          var inMatch = exp.match(forAliasRE)
          if (!inMatch) {
            'production' !== 'production' && warn$2(
              ('Invalid v-for expression: ' + exp)
            )
            return
          }
          el.for = inMatch[2].trim()
          var alias = inMatch[1].trim()
          var iteratorMatch = alias.match(forIteratorRE)
          if (iteratorMatch) {
            el.alias = iteratorMatch[1].trim()
            el.iterator1 = iteratorMatch[2].trim()
            if (iteratorMatch[3]) {
              el.iterator2 = iteratorMatch[3].trim()
            }
          } else {
            el.alias = alias
          }
        }
      }

      function processIf (el) {
        var exp = getAndRemoveAttr(el, 'v-if')
        if (exp) {
          el.if = exp
          addIfCondition(el, {
            exp: exp,
            block: el
          })
        } else {
          if (getAndRemoveAttr(el, 'v-else') != null) {
            el.else = true
          }
          var elseif = getAndRemoveAttr(el, 'v-else-if')
          if (elseif) {
            el.elseif = elseif
          }
        }
      }

      function processIfConditions (el, parent) {
        var prev = findPrevElement(parent.children)
        if (prev && prev.if) {
          addIfCondition(prev, {
            exp: el.elseif,
            block: el
          })
        } else if (false) {
          warn$2(
            'v-' + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + ' ' +
            'used on element <' + (el.tag) + '> without corresponding v-if.'
          )
        }
      }

      function findPrevElement (children) {
        var i = children.length
        while (i--) {
          if (children[i].type === 1) {
            return children[i]
          } else {
            if (false) {
              warn$2(
                'text "' + (children[i].text.trim()) + '" between v-if and v-else(-if) ' +
                'will be ignored.'
              )
            }
            children.pop()
          }
        }
      }

      function addIfCondition (el, condition) {
        if (!el.ifConditions) {
          el.ifConditions = []
        }
        el.ifConditions.push(condition)
      }

      function processOnce (el) {
        var once$$1 = getAndRemoveAttr(el, 'v-once')
        if (once$$1 != null) {
          el.once = true
        }
      }

      function processSlot (el) {
        if (el.tag === 'slot') {
          el.slotName = getBindingAttr(el, 'name')
          if (false) {
            warn$2(
              '`key` does not work on <slot> because slots are abstract outlets ' +
              'and can possibly expand into multiple elements. ' +
              'Use the key on a wrapping element instead.'
            )
          }
        } else {
          var slotTarget = getBindingAttr(el, 'slot')
          if (slotTarget) {
            el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget
          }
          if (el.tag === 'template') {
            el.slotScope = getAndRemoveAttr(el, 'scope')
          }
        }
      }

      function processComponent (el) {
        var binding
        if ((binding = getBindingAttr(el, 'is'))) {
          el.component = binding
        }
        if (getAndRemoveAttr(el, 'inline-template') != null) {
          el.inlineTemplate = true
        }
      }

      function processAttrs (el) {
        var list = el.attrsList
        var i, l, name, rawName, value, modifiers, isProp
        for (i = 0, l = list.length; i < l; i++) {
          name = rawName = list[i].name
          value = list[i].value
          if (dirRE.test(name)) {
            // mark element as dynamic
            el.hasBindings = true
            // modifiers
            modifiers = parseModifiers(name)
            if (modifiers) {
              name = name.replace(modifierRE, '')
            }
            if (bindRE.test(name)) { // v-bind
              name = name.replace(bindRE, '')
              value = parseFilters(value)
              isProp = false
              if (modifiers) {
                if (modifiers.prop) {
                  isProp = true
                  name = camelize(name)
                  if (name === 'innerHtml') { name = 'innerHTML' }
                }
                if (modifiers.camel) {
                  name = camelize(name)
                }
              }
              if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                addProp(el, name, value)
              } else {
                addAttr(el, name, value)
              }
            } else if (onRE.test(name)) { // v-on
              name = name.replace(onRE, '')
              addHandler(el, name, value, modifiers)
            } else { // normal directives
              name = name.replace(dirRE, '')
              // parse arg
              var argMatch = name.match(argRE)
              var arg = argMatch && argMatch[1]
              if (arg) {
                name = name.slice(0, -(arg.length + 1))
              }
              addDirective(el, name, rawName, value, arg, modifiers)
              if (false) {
                checkForAliasModel(el, value)
              }
            }
          } else {
            // literal attribute
            if (false) {
              var expression = parseText(value, delimiters)
              if (expression) {
                warn$2(
                  name + '="' + value + '": ' +
                  'Interpolation inside attributes has been removed. ' +
                  'Use v-bind or the colon shorthand instead. For example, ' +
                  'instead of <div id="{{ val }}">, use <div :id="val">.'
                )
              }
            }
            addAttr(el, name, JSON.stringify(value))
          }
        }
      }

      function checkInFor (el) {
        var parent = el
        while (parent) {
          if (parent.for !== undefined) {
            return true
          }
          parent = parent.parent
        }
        return false
      }

      function parseModifiers (name) {
        var match = name.match(modifierRE)
        if (match) {
          var ret = {}
          match.forEach(function (m) { ret[m.slice(1)] = true })
          return ret
        }
      }

      function makeAttrsMap (attrs) {
        var map = {}
        for (var i = 0, l = attrs.length; i < l; i++) {
          if (false) {
            warn$2('duplicate attribute: ' + attrs[i].name)
          }
          map[attrs[i].name] = attrs[i].value
        }
        return map
      }

      function isForbiddenTag (el) {
        return (
          el.tag === 'style' ||
          (el.tag === 'script' && (
            !el.attrsMap.type ||
            el.attrsMap.type === 'text/javascript'
          ))
        )
      }

      var ieNSBug = /^xmlns:NS\d+/
      var ieNSPrefix = /^NS\d+:/

      /* istanbul ignore next */
      function guardIESVGBug (attrs) {
        var res = []
        for (var i = 0; i < attrs.length; i++) {
          var attr = attrs[i]
          if (!ieNSBug.test(attr.name)) {
            attr.name = attr.name.replace(ieNSPrefix, '')
            res.push(attr)
          }
        }
        return res
      }

      function checkForAliasModel (el, value) {
        var _el = el
        while (_el) {
          if (_el.for && _el.alias === value) {
            warn$2(
              '<' + (el.tag) + ' v-model="' + value + '">: ' +
              'You are binding v-model directly to a v-for iteration alias. ' +
              'This will not be able to modify the v-for source array because ' +
              'writing to the alias is like modifying a function local variable. ' +
              'Consider using an array of objects and use v-model on an object property instead.'
            )
          }
          _el = _el.parent
        }
      }

      /*  */

      var isStaticKey
      var isPlatformReservedTag

      var genStaticKeysCached = cached(genStaticKeys$1)

      /**
       * Goal of the optimizer: walk the generated template AST tree
       * and detect sub-trees that are purely static, i.e. parts of
       * the DOM that never needs to change.
       *
       * Once we detect these sub-trees, we can:
       *
       * 1. Hoist them into constants, so that we no longer need to
       *    create fresh nodes for them on each re-render;
       * 2. Completely skip them in the patching process.
       */
      function optimize (root, options) {
        if (!root) { return }
        isStaticKey = genStaticKeysCached(options.staticKeys || '')
        isPlatformReservedTag = options.isReservedTag || no
        // first pass: mark all non-static nodes.
        markStatic$1(root)
        // second pass: mark static roots.
        markStaticRoots(root, false)
      }

      function genStaticKeys$1 (keys) {
        return makeMap(
          'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
          (keys ? ',' + keys : '')
        )
      }

      function markStatic$1 (node) {
        node.static = isStatic(node)
        if (node.type === 1) {
          // do not make component slot content static. this avoids
          // 1. components not able to mutate slot nodes
          // 2. static slot content fails for hot-reloading
          if (
            !isPlatformReservedTag(node.tag) &&
            node.tag !== 'slot' &&
            node.attrsMap['inline-template'] == null
          ) {
            return
          }
          for (var i = 0, l = node.children.length; i < l; i++) {
            var child = node.children[i]
            markStatic$1(child)
            if (!child.static) {
              node.static = false
            }
          }
        }
      }

      function markStaticRoots (node, isInFor) {
        if (node.type === 1) {
          if (node.static || node.once) {
            node.staticInFor = isInFor
          }
          // For a node to qualify as a static root, it should have children that
          // are not just static text. Otherwise the cost of hoisting out will
          // outweigh the benefits and it's better off to just always render it fresh.
          if (node.static && node.children.length && !(
              node.children.length === 1 &&
              node.children[0].type === 3
            )) {
            node.staticRoot = true
            return
          } else {
            node.staticRoot = false
          }
          if (node.children) {
            for (var i = 0, l = node.children.length; i < l; i++) {
              markStaticRoots(node.children[i], isInFor || !!node.for)
            }
          }
          if (node.ifConditions) {
            walkThroughConditionsBlocks(node.ifConditions, isInFor)
          }
        }
      }

      function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
        for (var i = 1, len = conditionBlocks.length; i < len; i++) {
          markStaticRoots(conditionBlocks[i].block, isInFor)
        }
      }

      function isStatic (node) {
        if (node.type === 2) { // expression
          return false
        }
        if (node.type === 3) { // text
          return true
        }
        return !!(node.pre || (
          !node.hasBindings && // no dynamic bindings
          !node.if && !node.for && // not v-if or v-for or v-else
          !isBuiltInTag(node.tag) && // not a built-in
          isPlatformReservedTag(node.tag) && // not a component
          !isDirectChildOfTemplateFor(node) &&
          Object.keys(node).every(isStaticKey)
        ))
      }

      function isDirectChildOfTemplateFor (node) {
        while (node.parent) {
          node = node.parent
          if (node.tag !== 'template') {
            return false
          }
          if (node.for) {
            return true
          }
        }
        return false
      }

      /*  */

      var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/
      var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/

// keyCode aliases
      var keyCodes = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        'delete': [8, 46]
      }

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
      var genGuard = function (condition) { return ('if(' + condition + ')return null;') }

      var modifierCode = {
        stop: '$event.stopPropagation();',
        prevent: '$event.preventDefault();',
        self: genGuard('$event.target !== $event.currentTarget'),
        ctrl: genGuard('!$event.ctrlKey'),
        shift: genGuard('!$event.shiftKey'),
        alt: genGuard('!$event.altKey'),
        meta: genGuard('!$event.metaKey'),
        left: genGuard('\'button\' in $event && $event.button !== 0'),
        middle: genGuard('\'button\' in $event && $event.button !== 1'),
        right: genGuard('\'button\' in $event && $event.button !== 2')
      }

      function genHandlers (events, native) {
        var res = native ? 'nativeOn:{' : 'on:{'
        for (var name in events) {
          res += '"' + name + '":' + (genHandler(name, events[name])) + ','
        }
        return res.slice(0, -1) + '}'
      }

      function genHandler (name,
                           handler) {
        if (!handler) {
          return 'function(){}'
        }

        if (Array.isArray(handler)) {
          return ('[' + (handler.map(function (handler) { return genHandler(name, handler) }).join(',')) + ']')
        }

        var isMethodPath = simplePathRE.test(handler.value)
        var isFunctionExpression = fnExpRE.test(handler.value)

        if (!handler.modifiers) {
          return isMethodPath || isFunctionExpression
            ? handler.value
            : ('function($event){' + (handler.value) + '}') // inline statement
        } else {
          var code = ''
          var genModifierCode = ''
          var keys = []
          for (var key in handler.modifiers) {
            if (modifierCode[key]) {
              genModifierCode += modifierCode[key]
              // left/right
              if (keyCodes[key]) {
                keys.push(key)
              }
            } else {
              keys.push(key)
            }
          }
          if (keys.length) {
            code += genKeyFilter(keys)
          }
          // Make sure modifiers like prevent and stop get executed after key filtering
          if (genModifierCode) {
            code += genModifierCode
          }
          var handlerCode = isMethodPath
            ? handler.value + '($event)'
            : isFunctionExpression
              ? ('(' + (handler.value) + ')($event)')
              : handler.value
          return ('function($event){' + code + handlerCode + '}')
        }
      }

      function genKeyFilter (keys) {
        return ('if(!(\'button\' in $event)&&' + (keys.map(genFilterCode).join('&&')) + ')return null;')
      }

      function genFilterCode (key) {
        var keyVal = parseInt(key, 10)
        if (keyVal) {
          return ('$event.keyCode!==' + keyVal)
        }
        var alias = keyCodes[key]
        return ('_k($event.keyCode,' + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ')')
      }

      /*  */

      function bind$1 (el, dir) {
        el.wrapData = function (code) {
          return ('_b(' + code + ',\'' + (el.tag) + '\',' + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ')')
        }
      }

      /*  */

      var baseDirectives = {
        bind: bind$1,
        cloak: noop
      }

      /*  */

// configurable state
      var warn$3
      var transforms$1
      var dataGenFns
      var platformDirectives$1
      var isPlatformReservedTag$1
      var staticRenderFns
      var onceCount
      var currentOptions

      function generate (ast,
                         options) {
        // save previous staticRenderFns so generate calls can be nested
        var prevStaticRenderFns = staticRenderFns
        var currentStaticRenderFns = staticRenderFns = []
        var prevOnceCount = onceCount
        onceCount = 0
        currentOptions = options
        warn$3 = options.warn || baseWarn
        transforms$1 = pluckModuleFunction(options.modules, 'transformCode')
        dataGenFns = pluckModuleFunction(options.modules, 'genData')
        platformDirectives$1 = options.directives || {}
        isPlatformReservedTag$1 = options.isReservedTag || no
        var code = ast ? genElement(ast) : '_c("div")'
        staticRenderFns = prevStaticRenderFns
        onceCount = prevOnceCount
        return {
          render: ('with(this){return ' + code + '}'),
          staticRenderFns: currentStaticRenderFns
        }
      }

      function genElement (el) {
        if (el.staticRoot && !el.staticProcessed) {
          return genStatic(el)
        } else if (el.once && !el.onceProcessed) {
          return genOnce(el)
        } else if (el.for && !el.forProcessed) {
          return genFor(el)
        } else if (el.if && !el.ifProcessed) {
          return genIf(el)
        } else if (el.tag === 'template' && !el.slotTarget) {
          return genChildren(el) || 'void 0'
        } else if (el.tag === 'slot') {
          return genSlot(el)
        } else {
          // component or element
          var code
          if (el.component) {
            code = genComponent(el.component, el)
          } else {
            var data = el.plain ? undefined : genData(el)

            var children = el.inlineTemplate ? null : genChildren(el, true)
            code = '_c(\'' + (el.tag) + '\'' + (data ? (',' + data) : '') + (children ? (',' + children) : '') + ')'
          }
          // module transforms
          for (var i = 0; i < transforms$1.length; i++) {
            code = transforms$1[i](el, code)
          }
          return code
        }
      }

// hoist static sub-trees out
      function genStatic (el) {
        el.staticProcessed = true
        staticRenderFns.push(('with(this){return ' + (genElement(el)) + '}'))
        return ('_m(' + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ')')
      }

// v-once
      function genOnce (el) {
        el.onceProcessed = true
        if (el.if && !el.ifProcessed) {
          return genIf(el)
        } else if (el.staticInFor) {
          var key = ''
          var parent = el.parent
          while (parent) {
            if (parent.for) {
              key = parent.key
              break
            }
            parent = parent.parent
          }
          if (!key) {
            'production' !== 'production' && warn$3(
              'v-once can only be used inside v-for that is keyed. '
            )
            return genElement(el)
          }
          return ('_o(' + (genElement(el)) + ',' + (onceCount++) + (key ? (',' + key) : '') + ')')
        } else {
          return genStatic(el)
        }
      }

      function genIf (el) {
        el.ifProcessed = true // avoid recursion
        return genIfConditions(el.ifConditions.slice())
      }

      function genIfConditions (conditions) {
        if (!conditions.length) {
          return '_e()'
        }

        var condition = conditions.shift()
        if (condition.exp) {
          return ('(' + (condition.exp) + ')?' + (genTernaryExp(condition.block)) + ':' + (genIfConditions(conditions)))
        } else {
          return ('' + (genTernaryExp(condition.block)))
        }

        // v-if with v-once should generate code like (a)?_m(0):_m(1)
        function genTernaryExp (el) {
          return el.once ? genOnce(el) : genElement(el)
        }
      }

      function genFor (el) {
        var exp = el.for
        var alias = el.alias
        var iterator1 = el.iterator1 ? (',' + (el.iterator1)) : ''
        var iterator2 = el.iterator2 ? (',' + (el.iterator2)) : ''

        if (
          false
        ) {
          warn$3(
            '<' + (el.tag) + ' v-for="' + alias + ' in ' + exp + '">: component lists rendered with ' +
            'v-for should have explicit keys. ' +
            'See https://vuejs.org/guide/list.html#key for more info.',
            true /* tip */
          )
        }

        el.forProcessed = true // avoid recursion
        return '_l((' + exp + '),' +
          'function(' + alias + iterator1 + iterator2 + '){' +
          'return ' + (genElement(el)) +
          '})'
      }

      function genData (el) {
        var data = '{'

        // directives first.
        // directives may mutate the el's other properties before they are generated.
        var dirs = genDirectives(el)
        if (dirs) { data += dirs + ',' }

        // key
        if (el.key) {
          data += 'key:' + (el.key) + ','
        }
        // ref
        if (el.ref) {
          data += 'ref:' + (el.ref) + ','
        }
        if (el.refInFor) {
          data += 'refInFor:true,'
        }
        // pre
        if (el.pre) {
          data += 'pre:true,'
        }
        // record original tag name for components using "is" attribute
        if (el.component) {
          data += 'tag:"' + (el.tag) + '",'
        }
        // module data generation functions
        for (var i = 0; i < dataGenFns.length; i++) {
          data += dataGenFns[i](el)
        }
        // attributes
        if (el.attrs) {
          data += 'attrs:{' + (genProps(el.attrs)) + '},'
        }
        // DOM props
        if (el.props) {
          data += 'domProps:{' + (genProps(el.props)) + '},'
        }
        // event handlers
        if (el.events) {
          data += (genHandlers(el.events)) + ','
        }
        if (el.nativeEvents) {
          data += (genHandlers(el.nativeEvents, true)) + ','
        }
        // slot target
        if (el.slotTarget) {
          data += 'slot:' + (el.slotTarget) + ','
        }
        // scoped slots
        if (el.scopedSlots) {
          data += (genScopedSlots(el.scopedSlots)) + ','
        }
        // component v-model
        if (el.model) {
          data += 'model:{value:' + (el.model.value) + ',callback:' + (el.model.callback) + ',expression:' + (el.model.expression) + '},'
        }
        // inline-template
        if (el.inlineTemplate) {
          var inlineTemplate = genInlineTemplate(el)
          if (inlineTemplate) {
            data += inlineTemplate + ','
          }
        }
        data = data.replace(/,$/, '') + '}'
        // v-bind data wrap
        if (el.wrapData) {
          data = el.wrapData(data)
        }
        return data
      }

      function genDirectives (el) {
        var dirs = el.directives
        if (!dirs) { return }
        var res = 'directives:['
        var hasRuntime = false
        var i, l, dir, needRuntime
        for (i = 0, l = dirs.length; i < l; i++) {
          dir = dirs[i]
          needRuntime = true
          var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name]
          if (gen) {
            // compile-time directive that manipulates AST.
            // returns true if it also needs a runtime counterpart.
            needRuntime = !!gen(el, dir, warn$3)
          }
          if (needRuntime) {
            hasRuntime = true
            res += '{name:"' + (dir.name) + '",rawName:"' + (dir.rawName) + '"' + (dir.value ? (',value:(' + (dir.value) + '),expression:' + (JSON.stringify(dir.value))) : '') + (dir.arg ? (',arg:"' + (dir.arg) + '"') : '') + (dir.modifiers ? (',modifiers:' + (JSON.stringify(dir.modifiers))) : '') + '},'
          }
        }
        if (hasRuntime) {
          return res.slice(0, -1) + ']'
        }
      }

      function genInlineTemplate (el) {
        var ast = el.children[0]
        if (false) {
          warn$3('Inline-template components must have exactly one child element.')
        }
        if (ast.type === 1) {
          var inlineRenderFns = generate(ast, currentOptions)
          return ('inlineTemplate:{render:function(){' + (inlineRenderFns.render) + '},staticRenderFns:[' + (inlineRenderFns.staticRenderFns.map(function (code) { return ('function(){' + code + '}') }).join(',')) + ']}')
        }
      }

      function genScopedSlots (slots) {
        return ('scopedSlots:_u([' + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]) }).join(',')) + '])')
      }

      function genScopedSlot (key, el) {
        return '[' + key + ',function(' + (String(el.attrsMap.scope)) + '){' +
          'return ' + (el.tag === 'template'
            ? genChildren(el) || 'void 0'
            : genElement(el)) + '}]'
      }

      function genChildren (el, checkSkip) {
        var children = el.children
        if (children.length) {
          var el$1 = children[0]
          // optimize single v-for
          if (children.length === 1 &&
            el$1.for &&
            el$1.tag !== 'template' &&
            el$1.tag !== 'slot') {
            return genElement(el$1)
          }
          var normalizationType = checkSkip ? getNormalizationType(children) : 0
          return ('[' + (children.map(genNode).join(',')) + ']' + (normalizationType ? (',' + normalizationType) : ''))
        }
      }

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
      function getNormalizationType (children) {
        var res = 0
        for (var i = 0; i < children.length; i++) {
          var el = children[i]
          if (el.type !== 1) {
            continue
          }
          if (needsNormalization(el) ||
            (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block) }))) {
            res = 2
            break
          }
          if (maybeComponent(el) ||
            (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block) }))) {
            res = 1
          }
        }
        return res
      }

      function needsNormalization (el) {
        return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
      }

      function maybeComponent (el) {
        return !isPlatformReservedTag$1(el.tag)
      }

      function genNode (node) {
        if (node.type === 1) {
          return genElement(node)
        } else {
          return genText(node)
        }
      }

      function genText (text) {
        return ('_v(' + (text.type === 2
          ? text.expression // no need for () because already wrapped in _s()
          : transformSpecialNewlines(JSON.stringify(text.text))) + ')')
      }

      function genSlot (el) {
        var slotName = el.slotName || '"default"'
        var children = genChildren(el)
        var res = '_t(' + slotName + (children ? (',' + children) : '')
        var attrs = el.attrs && ('{' + (el.attrs.map(function (a) { return ((camelize(a.name)) + ':' + (a.value)) }).join(',')) + '}')
        var bind$$1 = el.attrsMap['v-bind']
        if ((attrs || bind$$1) && !children) {
          res += ',null'
        }
        if (attrs) {
          res += ',' + attrs
        }
        if (bind$$1) {
          res += (attrs ? '' : ',null') + ',' + bind$$1
        }
        return res + ')'
      }

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
      function genComponent (componentName, el) {
        var children = el.inlineTemplate ? null : genChildren(el, true)
        return ('_c(' + componentName + ',' + (genData(el)) + (children ? (',' + children) : '') + ')')
      }

      function genProps (props) {
        var res = ''
        for (var i = 0; i < props.length; i++) {
          var prop = props[i]
          res += '"' + (prop.name) + '":' + (transformSpecialNewlines(prop.value)) + ','
        }
        return res.slice(0, -1)
      }

// #3895, #4268
      function transformSpecialNewlines (text) {
        return text
          .replace(/\u2028/g, '\\u2028')
          .replace(/\u2029/g, '\\u2029')
      }

      /*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
      var prohibitedKeywordRE = new RegExp('\\b' + (
          'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
          'super,throw,while,yield,delete,export,import,return,switch,default,' +
          'extends,finally,continue,debugger,function,arguments'
        ).split(',').join('\\b|\\b') + '\\b')

// these unary operators should not be used as property/method names
      var unaryOperatorsRE = new RegExp('\\b' + (
          'delete,typeof,void'
        ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)')

// check valid identifier for v-for
      var identRE = /[A-Za-z_$][\w$]*/

// strip strings in expressions
      var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g

// detect problematic expressions in a template
      function detectErrors (ast) {
        var errors = []
        if (ast) {
          checkNode(ast, errors)
        }
        return errors
      }

      function checkNode (node, errors) {
        if (node.type === 1) {
          for (var name in node.attrsMap) {
            if (dirRE.test(name)) {
              var value = node.attrsMap[name]
              if (value) {
                if (name === 'v-for') {
                  checkFor(node, ('v-for="' + value + '"'), errors)
                } else if (onRE.test(name)) {
                  checkEvent(value, (name + '="' + value + '"'), errors)
                } else {
                  checkExpression(value, (name + '="' + value + '"'), errors)
                }
              }
            }
          }
          if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
              checkNode(node.children[i], errors)
            }
          }
        } else if (node.type === 2) {
          checkExpression(node.expression, node.text, errors)
        }
      }

      function checkEvent (exp, text, errors) {
        var keywordMatch = exp.replace(stripStringRE, '').match(unaryOperatorsRE)
        if (keywordMatch) {
          errors.push(
            'avoid using JavaScript unary operator as property name: ' +
            '"' + (keywordMatch[0]) + '" in expression ' + (text.trim())
          )
        }
        checkExpression(exp, text, errors)
      }

      function checkFor (node, text, errors) {
        checkExpression(node.for || '', text, errors)
        checkIdentifier(node.alias, 'v-for alias', text, errors)
        checkIdentifier(node.iterator1, 'v-for iterator', text, errors)
        checkIdentifier(node.iterator2, 'v-for iterator', text, errors)
      }

      function checkIdentifier (ident, type, text, errors) {
        if (typeof ident === 'string' && !identRE.test(ident)) {
          errors.push(('invalid ' + type + ' "' + ident + '" in expression: ' + (text.trim())))
        }
      }

      function checkExpression (exp, text, errors) {
        try {
          new Function(('return ' + exp))
        } catch (e) {
          var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE)
          if (keywordMatch) {
            errors.push(
              'avoid using JavaScript keyword as property name: ' +
              '"' + (keywordMatch[0]) + '" in expression ' + (text.trim())
            )
          } else {
            errors.push(('invalid expression: ' + (text.trim())))
          }
        }
      }

      /*  */

      function baseCompile (template,
                            options) {
        var ast = parse(template.trim(), options)
        optimize(ast, options)
        var code = generate(ast, options)
        return {
          ast: ast,
          render: code.render,
          staticRenderFns: code.staticRenderFns
        }
      }

      function makeFunction (code, errors) {
        try {
          return new Function(code)
        } catch (err) {
          errors.push({err: err, code: code})
          return noop
        }
      }

      function createCompiler (baseOptions) {
        var functionCompileCache = Object.create(null)

        function compile (template,
                          options) {
          var finalOptions = Object.create(baseOptions)
          var errors = []
          var tips = []
          finalOptions.warn = function (msg, tip$$1) {
            (tip$$1 ? tips : errors).push(msg)
          }

          if (options) {
            // merge custom modules
            if (options.modules) {
              finalOptions.modules = (baseOptions.modules || []).concat(options.modules)
            }
            // merge custom directives
            if (options.directives) {
              finalOptions.directives = extend(
                Object.create(baseOptions.directives),
                options.directives
              )
            }
            // copy other options
            for (var key in options) {
              if (key !== 'modules' && key !== 'directives') {
                finalOptions[key] = options[key]
              }
            }
          }

          var compiled = baseCompile(template, finalOptions)
          if (false) {
            errors.push.apply(errors, detectErrors(compiled.ast))
          }
          compiled.errors = errors
          compiled.tips = tips
          return compiled
        }

        function compileToFunctions (template,
                                     options,
                                     vm) {
          options = options || {}

          /* istanbul ignore if */
          if (false) {
            // detect possible CSP restriction
            try {
              new Function('return 1')
            } catch (e) {
              if (e.toString().match(/unsafe-eval|CSP/)) {
                warn(
                  'It seems you are using the standalone build of Vue.js in an ' +
                  'environment with Content Security Policy that prohibits unsafe-eval. ' +
                  'The template compiler cannot work in this environment. Consider ' +
                  'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                  'templates into render functions.'
                )
              }
            }
          }

          // check cache
          var key = options.delimiters
            ? String(options.delimiters) + template
            : template
          if (functionCompileCache[key]) {
            return functionCompileCache[key]
          }

          // compile
          var compiled = compile(template, options)

          // check compilation errors/tips
          if (false) {
            if (compiled.errors && compiled.errors.length) {
              warn(
                'Error compiling template:\n\n' + template + '\n\n' +
                compiled.errors.map(function (e) { return ('- ' + e) }).join('\n') + '\n',
                vm
              )
            }
            if (compiled.tips && compiled.tips.length) {
              compiled.tips.forEach(function (msg) { return tip(msg, vm) })
            }
          }

          // turn code into functions
          var res = {}
          var fnGenErrors = []
          res.render = makeFunction(compiled.render, fnGenErrors)
          var l = compiled.staticRenderFns.length
          res.staticRenderFns = new Array(l)
          for (var i = 0; i < l; i++) {
            res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i], fnGenErrors)
          }

          // check function generation errors.
          // this should only happen if there is a bug in the compiler itself.
          // mostly for codegen development use
          /* istanbul ignore if */
          if (false) {
            if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
              warn(
                'Failed to generate render function:\n\n' +
                fnGenErrors.map(function (ref) {
                  var err = ref.err
                  var code = ref.code

                  return ((err.toString()) + ' in\n\n' + code + '\n')
                }).join('\n'),
                vm
              )
            }
          }

          return (functionCompileCache[key] = res)
        }

        return {
          compile: compile,
          compileToFunctions: compileToFunctions
        }
      }

      /*  */

      function transformNode (el, options) {
        var warn = options.warn || baseWarn
        var staticClass = getAndRemoveAttr(el, 'class')
        if (false) {
          var expression = parseText(staticClass, options.delimiters)
          if (expression) {
            warn(
              'class="' + staticClass + '": ' +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div class="{{ val }}">, use <div :class="val">.'
            )
          }
        }
        if (staticClass) {
          el.staticClass = JSON.stringify(staticClass)
        }
        var classBinding = getBindingAttr(el, 'class', false /* getStatic */)
        if (classBinding) {
          el.classBinding = classBinding
        }
      }

      function genData$1 (el) {
        var data = ''
        if (el.staticClass) {
          data += 'staticClass:' + (el.staticClass) + ','
        }
        if (el.classBinding) {
          data += 'class:' + (el.classBinding) + ','
        }
        return data
      }

      var klass$1 = {
        staticKeys: ['staticClass'],
        transformNode: transformNode,
        genData: genData$1
      }

      /*  */

      function transformNode$1 (el, options) {
        var warn = options.warn || baseWarn
        var staticStyle = getAndRemoveAttr(el, 'style')
        if (staticStyle) {
          /* istanbul ignore if */
          if (false) {
            var expression = parseText(staticStyle, options.delimiters)
            if (expression) {
              warn(
                'style="' + staticStyle + '": ' +
                'Interpolation inside attributes has been removed. ' +
                'Use v-bind or the colon shorthand instead. For example, ' +
                'instead of <div style="{{ val }}">, use <div :style="val">.'
              )
            }
          }
          el.staticStyle = JSON.stringify(parseStyleText(staticStyle))
        }

        var styleBinding = getBindingAttr(el, 'style', false /* getStatic */)
        if (styleBinding) {
          el.styleBinding = styleBinding
        }
      }

      function genData$2 (el) {
        var data = ''
        if (el.staticStyle) {
          data += 'staticStyle:' + (el.staticStyle) + ','
        }
        if (el.styleBinding) {
          data += 'style:(' + (el.styleBinding) + '),'
        }
        return data
      }

      var style$1 = {
        staticKeys: ['staticStyle'],
        transformNode: transformNode$1,
        genData: genData$2
      }

      var modules$1 = [
        klass$1,
        style$1
      ]

      /*  */

      function text (el, dir) {
        if (dir.value) {
          addProp(el, 'textContent', ('_s(' + (dir.value) + ')'))
        }
      }

      /*  */

      function html (el, dir) {
        if (dir.value) {
          addProp(el, 'innerHTML', ('_s(' + (dir.value) + ')'))
        }
      }

      var directives$1 = {
        model: model,
        text: text,
        html: html
      }

      /*  */

      var baseOptions = {
        expectHTML: true,
        modules: modules$1,
        directives: directives$1,
        isPreTag: isPreTag,
        isUnaryTag: isUnaryTag,
        mustUseProp: mustUseProp,
        canBeLeftOpenTag: canBeLeftOpenTag,
        isReservedTag: isReservedTag,
        getTagNamespace: getTagNamespace,
        staticKeys: genStaticKeys(modules$1)
      }

      var ref$1 = createCompiler(baseOptions)
      var compileToFunctions = ref$1.compileToFunctions

      /*  */

      var idToTemplate = cached(function (id) {
        var el = query(id)
        return el && el.innerHTML
      })

      var mount = Vue$3.prototype.$mount
      Vue$3.prototype.$mount = function (el,
                                         hydrating) {
        el = el && query(el)

        /* istanbul ignore if */
        if (el === document.body || el === document.documentElement) {
          'production' !== 'production' && warn(
            'Do not mount Vue to <html> or <body> - mount to normal elements instead.'
          )
          return this
        }

        var options = this.$options
        // resolve template/el and convert to render function
        if (!options.render) {
          var template = options.template
          if (template) {
            if (typeof template === 'string') {
              if (template.charAt(0) === '#') {
                template = idToTemplate(template)
                /* istanbul ignore if */
                if (false) {
                  warn(
                    ('Template element not found or is empty: ' + (options.template)),
                    this
                  )
                }
              }
            } else if (template.nodeType) {
              template = template.innerHTML
            } else {
              if (false) {
                warn('invalid template option:' + template, this)
              }
              return this
            }
          } else if (el) {
            template = getOuterHTML(el)
          }
          if (template) {
            /* istanbul ignore if */
            if (false) {
              mark('compile')
            }

            var ref = compileToFunctions(template, {
              shouldDecodeNewlines: shouldDecodeNewlines,
              delimiters: options.delimiters
            }, this)
            var render = ref.render
            var staticRenderFns = ref.staticRenderFns
            options.render = render
            options.staticRenderFns = staticRenderFns

            /* istanbul ignore if */
            if (false) {
              mark('compile end')
              measure(((this._name) + ' compile'), 'compile', 'compile end')
            }
          }
        }
        return mount.call(this, el, hydrating)
      }

      /**
       * Get outerHTML of elements, taking care
       * of SVG elements in IE as well.
       */
      function getOuterHTML (el) {
        if (el.outerHTML) {
          return el.outerHTML
        } else {
          var container = document.createElement('div')
          container.appendChild(el.cloneNode(true))
          return container.innerHTML
        }
      }

      Vue$3.compile = compileToFunctions

      /* harmony default export */
      __webpack_exports__['a'] = (Vue$3)

      /* WEBPACK VAR INJECTION */
    }.call(__webpack_exports__, __webpack_require__(109)))

    /***/
  }),
  /* 14 */
  /***/ (function (module, exports) {

    module.exports = function (it) {
      if (typeof it != 'function')throw TypeError(it + ' is not a function!')
      return it
    }

    /***/
  }),
  /* 15 */
  /***/ (function (module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
      if (it == undefined)throw TypeError('Can\'t call method on  ' + it)
      return it
    }

    /***/
  }),
  /* 16 */
  /***/ (function (module, exports, __webpack_require__) {

    var isObject = __webpack_require__(11)
      , document = __webpack_require__(1).document
      // in old IE typeof document.createElement is 'object'
      , is = isObject(document) && isObject(document.createElement)
    module.exports = function (it) {
      return is ? document.createElement(it) : {}
    }

    /***/
  }),
  /* 17 */
  /***/ (function (module, exports, __webpack_require__) {

    var def = __webpack_require__(12).f
      , has = __webpack_require__(10)
      , TAG = __webpack_require__(0)('toStringTag')

    module.exports = function (it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {configurable: true, value: tag})
    }

    /***/
  }),
  /* 18 */
  /***/ (function (module, exports, __webpack_require__) {

    var shared = __webpack_require__(29)('keys')
      , uid = __webpack_require__(32)
    module.exports = function (key) {
      return shared[key] || (shared[key] = uid(key))
    }

    /***/
  }),
  /* 19 */
  /***/ (function (module, exports) {

// 7.1.4 ToInteger
    var ceil = Math.ceil
      , floor = Math.floor
    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it)
    }

    /***/
  }),
  /* 20 */
  /***/ (function (module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = __webpack_require__(60)
      , defined = __webpack_require__(15)
    module.exports = function (it) {
      return IObject(defined(it))
    }

    /***/
  }),
  /* 21 */
  /***/ (function (module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
    var cof = __webpack_require__(8)
      , TAG = __webpack_require__(0)('toStringTag')
      // ES3 wrong here
      , ARG = cof(function () { return arguments }()) == 'Arguments'

// fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
      try {
        return it[key]
      } catch (e) { /* empty */ }
    }

    module.exports = function (it) {
      var O, T, B
      return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
          // builtinTag case
          : ARG ? cof(O)
            // ES3 arguments fallback
            : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B
    }

    /***/
  }),
  /* 22 */
  /***/ (function (module, exports) {

// IE 8- don't enum bug keys
    module.exports = (
      'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
    ).split(',')

    /***/
  }),
  /* 23 */
  /***/ (function (module, exports, __webpack_require__) {

    var global = __webpack_require__(1)
      , core = __webpack_require__(5)
      , ctx = __webpack_require__(9)
      , hide = __webpack_require__(4)
      , PROTOTYPE = 'prototype'

    var $export = function (type, name, source) {
      var IS_FORCED = type & $export.F
        , IS_GLOBAL = type & $export.G
        , IS_STATIC = type & $export.S
        , IS_PROTO = type & $export.P
        , IS_BIND = type & $export.B
        , IS_WRAP = type & $export.W
        , exports = IS_GLOBAL ? core : core[name] || (core[name] = {})
        , expProto = exports[PROTOTYPE]
        , target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
        , key, own, out
      if (IS_GLOBAL) source = name
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined
        if (own && key in exports)continue
        // export native or passed
        out = own ? target[key] : source[key]
        // prevent global pollution for namespaces
        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
          // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global)
            // wrap global constructors for prevent change them in library
            : IS_WRAP && target[key] == out ? (function (C) {
              var F = function (a, b, c) {
                if (this instanceof C) {
                  switch (arguments.length) {
                    case 0:
                      return new C
                    case 1:
                      return new C(a)
                    case 2:
                      return new C(a, b)
                  }
                  return new C(a, b, c)
                }
                return C.apply(this, arguments)
              }
              F[PROTOTYPE] = C[PROTOTYPE]
              return F
              // make static versions for prototype methods
            })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out
        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
        if (IS_PROTO) {
          (exports.virtual || (exports.virtual = {}))[key] = out
          // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
          if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out)
        }
      }
    }
// type bitmap
    $export.F = 1   // forced
    $export.G = 2   // global
    $export.S = 4   // static
    $export.P = 8   // proto
    $export.B = 16  // bind
    $export.W = 32  // wrap
    $export.U = 64  // safe
    $export.R = 128 // real proto method for `library`
    module.exports = $export

    /***/
  }),
  /* 24 */
  /***/ (function (module, exports) {

    module.exports = function (exec) {
      try {
        return !!exec()
      } catch (e) {
        return true
      }
    }

    /***/
  }),
  /* 25 */
  /***/ (function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__(1).document && document.documentElement

    /***/
  }),
  /* 26 */
  /***/ (function (module, exports, __webpack_require__) {

    'use strict'

    var LIBRARY = __webpack_require__(27)
      , $export = __webpack_require__(23)
      , redefine = __webpack_require__(73)
      , hide = __webpack_require__(4)
      , has = __webpack_require__(10)
      , Iterators = __webpack_require__(7)
      , $iterCreate = __webpack_require__(63)
      , setToStringTag = __webpack_require__(17)
      , getPrototypeOf = __webpack_require__(69)
      , ITERATOR = __webpack_require__(0)('iterator')
      , BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
      , FF_ITERATOR = '@@iterator'
      , KEYS = 'keys'
      , VALUES = 'values'

    var returnThis = function () { return this }

    module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next)
      var getMethod = function (kind) {
        if (!BUGGY && kind in proto)return proto[kind]
        switch (kind) {
          case KEYS:
            return function keys () { return new Constructor(this, kind) }
          case VALUES:
            return function values () { return new Constructor(this, kind) }
        }
        return function entries () { return new Constructor(this, kind) }
      }
      var TAG = NAME + ' Iterator'
        , DEF_VALUES = DEFAULT == VALUES
        , VALUES_BUG = false
        , proto = Base.prototype
        , $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
        , $default = $native || getMethod(DEFAULT)
        , $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
        , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
        , methods, key, IteratorPrototype
      // Fix native
      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base))
        if (IteratorPrototype !== Object.prototype) {
          // Set @@toStringTag to native iterators
          setToStringTag(IteratorPrototype, TAG, true)
          // fix for some old engines
          if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis)
        }
      }
      // fix Array#{values, @@iterator}.name in V8 / FF
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true
        $default = function values () { return $native.call(this) }
      }
      // Define iterator
      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default)
      }
      // Plug for library
      Iterators[NAME] = $default
      Iterators[TAG] = returnThis
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        }
        if (FORCED)for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key])
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods)
      }
      return methods
    }

    /***/
  }),
  /* 27 */
  /***/ (function (module, exports) {

    module.exports = true

    /***/
  }),
  /* 28 */
  /***/ (function (module, exports) {

    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      }
    }

    /***/
  }),
  /* 29 */
  /***/ (function (module, exports, __webpack_require__) {

    var global = __webpack_require__(1)
      , SHARED = '__core-js_shared__'
      , store = global[SHARED] || (global[SHARED] = {})
    module.exports = function (key) {
      return store[key] || (store[key] = {})
    }

    /***/
  }),
  /* 30 */
  /***/ (function (module, exports, __webpack_require__) {

    var ctx = __webpack_require__(9)
      , invoke = __webpack_require__(59)
      , html = __webpack_require__(25)
      , cel = __webpack_require__(16)
      , global = __webpack_require__(1)
      , process = global.process
      , setTask = global.setImmediate
      , clearTask = global.clearImmediate
      , MessageChannel = global.MessageChannel
      , counter = 0
      , queue = {}
      , ONREADYSTATECHANGE = 'onreadystatechange'
      , defer, channel, port
    var run = function () {
      var id = +this
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id]
        delete queue[id]
        fn()
      }
    }
    var listener = function (event) {
      run.call(event.data)
    }
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if (!setTask || !clearTask) {
      setTask = function setImmediate (fn) {
        var args = [], i = 1
        while (arguments.length > i)args.push(arguments[i++])
        queue[++counter] = function () {
          invoke(typeof fn == 'function' ? fn : Function(fn), args)
        }
        defer(counter)
        return counter
      }
      clearTask = function clearImmediate (id) {
        delete queue[id]
      }
      // Node.js 0.8-
      if (__webpack_require__(8)(process) == 'process') {
        defer = function (id) {
          process.nextTick(ctx(run, id, 1))
        }
        // Browsers with MessageChannel, includes WebWorkers
      } else if (MessageChannel) {
        channel = new MessageChannel
        port = channel.port2
        channel.port1.onmessage = listener
        defer = ctx(port.postMessage, port, 1)
        // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function (id) {
          global.postMessage(id + '', '*')
        }
        global.addEventListener('message', listener, false)
        // IE8-
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function (id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this)
            run.call(id)
          }
        }
        // Rest old browsers
      } else {
        defer = function (id) {
          setTimeout(ctx(run, id, 1), 0)
        }
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    }

    /***/
  }),
  /* 31 */
  /***/ (function (module, exports, __webpack_require__) {

// 7.1.15 ToLength
    var toInteger = __webpack_require__(19)
      , min = Math.min
    module.exports = function (it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0 // pow(2, 53) - 1 == 9007199254740991
    }

    /***/
  }),
  /* 32 */
  /***/ (function (module, exports) {

    var id = 0
      , px = Math.random()
    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36))
    }

    /***/
  }),
  /* 33 */,
  /* 34 */,
  /* 35 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_tether__ = __webpack_require__(86)
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_tether___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tether__)

    function observeDOM (t, e, i) {
      var n = window.MutationObserver || window.WebKitMutationObserver, s = window.addEventListener
      if (n) {
        var r = new n(function (t) {(t[0].addedNodes.length > 0 || t[0].removedNodes.length > 0) && e()})
        r.observe(t, Object.assign({childList: !0, subtree: !0}, i))
      } else s && (t.addEventListener('DOMNodeInserted', e, !1), t.addEventListener('DOMNodeRemoved', e, !1))
    }

    function targets (t, e, i, n) {
      var s = t.__vue__
      if (!s)return void console.warn('__vue__ is not available on element', t)
      var r = Object.keys(e.modifiers || {}).filter(function (t) {return !all_listen_types[t]})
      e.value && r.push(e.value)
      var a = function () {n({targets: r, vm: s})}
      Object.keys(all_listen_types).forEach(function (n) {(i[n] || e.modifiers[n]) && (console.log(n), t.addEventListener(n, a))})
    }

    var alert = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return t.localShow ? i('div', {
            class: t.classObject,
            attrs: {role: 'alert'}
          }, [t.dismissible ? i('button', {
            staticClass: 'close',
            attrs: {type: 'button', 'data-dismiss': 'alert', 'aria-label': 'Close'},
            on: {click: function (e) {e.stopPropagation(), e.preventDefault(), t.dismiss(e)}}
          }, [i('span', {attrs: {'aria-hidden': 'true'}}, [t._v('×')])]) : t._e(), t._t('default')], 2) : t._e()
        },
        staticRenderFns: [],
        data: function () {return {countDownTimerId: null, dismissed: !1}},
        created: function () {this.state && console.warn('<b-alrt> state property is deprecated, please use variant instead.')},
        computed: {
          classObject: function () {return ['alert', this.alertVariant, this.dismissible ? 'alert-dismissible' : '']},
          alertVariant: function () {
            var t = this.state || this.variant || 'info'
            return 'alert-' + t
          },
          localShow: function () {return !this.dismissed && (this.countDownTimerId || this.show)}
        },
        props: {
          variant: {type: String, default: 'info'},
          state: {type: String, default: null},
          dismissible: {type: Boolean, default: !1},
          show: {type: [Boolean, Number], default: !1}
        },
        watch: {show: function () {this.showChanged()}},
        mounted: function () {this.showChanged()},
        methods: {
          dismiss: function () {this.dismissed = !0, this.$emit('dismissed'), this.clearCounter()},
          clearCounter: function () {this.countDownTimerId && clearInterval(this.countDownTimerId)},
          showChanged: function () {
            var t = this
            if (this.dismissed = !1, this.show !== !0 && this.show !== !1 && null !== this.show && 0 !== this.show) {
              var e = this.show
              this.$emit('dismiss-count-down', e), this.clearCounter(), this.countDownTimerId = setInterval(function () {return e < 2 ? t.dismiss() : (e--, void t.$emit('dismiss-count-down', e))}, 1e3)
            }
          }
        }
      }, bLink = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i(t.componentType, {
            tag: 'a',
            attrs: {'active-class': t.activeClass, to: t.to, href: t.hrefString, exact: t.exact},
            on: {click: t.click}
          }, [t._t('default')], 2)
        },
        staticRenderFns: [],
        computed: {
          componentType: function () {return this.$router && this.to ? 'router-link' : 'a'},
          hrefString: function () {return this.to ? this.to.path || this.to : this.href}
        },
        props: {
          activeClass: {type: String, default: 'active'},
          to: {type: [String, Object], default: null},
          href: {type: String, default: '#'},
          exact: {type: Boolean, default: !1}
        },
        methods: {click: function (t) {this.$emit('click', t), this.$root.$emit('shown::dropdown', this)}}
      }, breadcrumb = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('ol', {staticClass: 'breadcrumb'}, [t._l(t.items2, function (e) {
            return i('li', {
              class: ['breadcrumb-item', e.__active ? 'active' : null],
              on: {click: function (i) {t.onclick(e)}}
            }, [e.active ? i('span', {domProps: {innerHTML: t._s(e.text)}}) : i('b-link', {
              attrs: {
                to: e.to,
                href: e.href || e.link
              }, domProps: {innerHTML: t._s(e.text)}
            })], 1)
          }), t._t('default')], 2)
        },
        staticRenderFns: [],
        components: {bLink: bLink},
        computed: {
          componentType: function () {return this.to ? 'router-link' : 'a'},
          items2: function () {
            var t = this.items.length > 0 && this.items[this.items.length - 1]
            return this.items.map(function (e) {
              return 'string' == typeof e ? {
                text: e,
                link: '#',
                active: e === t
              } : (e.active !== !0 && e.active !== !1 ? e.__active = e === t : e.__active = e.active, e)
            })
          }
        },
        props: {items: {type: Array, default: function () {return []}, required: !0}},
        methods: {onclick: function (t) {this.$emit('click', t), this.$router && this.to && this.$router.push(this.to)}}
      }, bBtn = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i(t.componentType, {
            tag: 'button',
            class: t.classObject,
            attrs: {to: t.to, href: t.href, disabled: t.disabled},
            on: {click: t.onclick}
          }, [t._t('default')], 2)
        },
        staticRenderFns: [],
        components: {bLink: bLink},
        computed: {
          classObject: function () {return ['btn', this.btnVariant, this.btnSize, this.btnBlock, this.btnDisabled, this.inactive ? 'btn-inactive' : '']},
          componentType: function () {return this.href || this.to ? 'b-link' : 'button'},
          btnBlock: function () {return this.block ? 'btn-block' : ''},
          btnVariant: function () {return this.variant ? 'btn-' + this.variant : 'btn-secondary'},
          btnSize: function () {return this.size ? 'btn-' + this.size : ''},
          btnDisabled: function () {return this.disabled ? 'disabled' : ''}
        },
        props: {
          block: {type: Boolean, default: !1},
          disabled: {type: Boolean, default: !1},
          inactive: {type: Boolean, default: !1},
          role: {type: String, default: ''},
          size: {type: String, default: 'md'},
          variant: {type: String, default: null},
          to: {type: [String, Object]},
          href: {type: String}
        },
        methods: {onclick: function (t) {this.$emit('click', t)}}
      }, buttonGroup = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {class: t.classObject, attrs: {role: 'group'}}, [t._t('default')], 2)
        },
        staticRenderFns: [],
        computed: {classObject: function () {return ['btn-' + (this.toolbar ? 'toolbar' : 'group'), this.vertical ? 'btn-group-vertical' : '', this.size ? 'btn-group-' + this.size : '']}},
        props: {
          vertical: {type: Boolean, default: !1},
          toolbar: {type: Boolean, default: !1},
          size: {type: String, default: null}
        }
      }, bInputGroupAddon = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('span', {staticClass: 'input-group-addon', attrs: {id: t.thisId}}, [t._t('default')], 2)
        },
        staticRenderFns: [],
        computed: {thisId: function () {return this.id || 'b_input_group_addon_' + this._uid}},
        props: {id: {type: String, default: null}}
      }, inputGroup = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {class: t.classObject}, [t._t('left', [t.left ? i('b-input-group-addon', {domProps: {innerHTML: t._s(t.left)}}) : t._e()]), t._t('default'), t._t('right', [t.right ? i('b-input-group-addon', {domProps: {innerHTML: t._s(t.right)}}) : t._e()])], 2)
        },
        staticRenderFns: [],
        components: {bInputGroupAddon: bInputGroupAddon},
        computed: {classObject: function () {return ['input-group', this.size ? 'input-group-' + this.size : '', this.state ? 'has-' + this.state : '']}},
        props: {
          size: {type: String, default: null},
          state: {type: String, default: null},
          left: {type: String, default: null},
          right: {type: String, default: null}
        }
      }, inputGroupButton = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {staticClass: 'input-group-btn'}, [t._t('default')], 2)
        }, staticRenderFns: []
      }, card = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {class: ['card', t.cardVariant, t.cardAlign, t.cardInverse]}, [t._t('img', [t.img ? i('img', {
            staticClass: 'card-img',
            attrs: {src: t.img, alt: t.imgAlt}
          }) : t._e()]), t.header || t.showHeader ? i(t.headerTag, {
            tag: 'component',
            staticClass: 'card-header'
          }, [t._t('header', [i('div', {domProps: {innerHTML: t._s(t.header)}})])], 2) : t._e(), t.noBlock ? [t._t('default')] : i('div', {class: t.blockClass}, [t.title ? i('h4', {
            staticClass: 'card-title',
            domProps: {innerHTML: t._s(t.title)}
          }) : t._e(), t.subTitle ? i('h6', {
            staticClass: 'card-subtitle mb-2 text-muted',
            domProps: {innerHTML: t._s(t.subTitle)}
          }) : t._e(), t._t('default')], 2), t.footer || t.showFooter ? i(t.footerTag, {
            tag: 'component',
            staticClass: 'card-footer'
          }, [t._t('footer', [i('div', {domProps: {innerHTML: t._s(t.footer)}})])], 2) : t._e()], 2)
        },
        staticRenderFns: [],
        computed: {
          blockClass: function () {return ['card-block', this.overlay ? 'card-img-overlay' : null]},
          cardVariant: function () {return this.variant ? 'card-' + this.variant : null},
          cardInverse: function () {return this.overlay || this.inverse ? 'card-inverse' : null === this.inverse && this.variant && this.variant.length > 0 && this.variant.indexOf('outline') === -1 ? 'card-inverse' : void 0},
          cardAlign: function () {return this.align ? 'text-' + this.align : null}
        },
        props: {
          align: {type: String, default: null},
          inverse: {type: Boolean, default: null},
          variant: {type: String, default: null},
          header: {type: String, default: null},
          showHeader: {type: Boolean, default: !1},
          headerTag: {type: String, default: 'div'},
          footer: {type: String, default: null},
          showFooter: {type: Boolean, default: !1},
          footerTag: {type: String, default: 'div'},
          title: {type: String, default: null},
          subTitle: {type: String, default: null},
          noBlock: {type: Boolean, default: !1},
          img: {type: String, default: null},
          imgAlt: {type: String, default: null},
          overlay: {type: Boolean, default: !1}
        }
      }, cardGroup = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {class: ['card-' + t.type]}, [t._t('default')], 2)
        },
        staticRenderFns: [],
        computed: {type: function () {return this.deck ? 'deck' : this.columns ? 'columns' : 'group'}},
        props: {deck: {type: Boolean, default: !1}, columns: {type: Boolean, default: !1}}
      }, DIRECTION = {
        next: {current: 'carousel-item-left', next: 'carousel-item-right', overlay: 'carousel-item-next'},
        prev: {current: 'carousel-item-right', next: 'carousel-item-left', overlay: 'carousel-item-prev'}
      }, carousel = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {
            staticClass: 'carousel slide',
            style: {background: t.background, height: t.height},
            on: {mouseenter: t.pause, mouseleave: t.start}
          }, [i('ol', {
            directives: [{name: 'show', rawName: 'v-show', value: t.indicators, expression: 'indicators'}],
            staticClass: 'carousel-indicators'
          }, t._l(t.slides.length, function (e) {
            return i('li', {
              class: {active: e - 1 === t.index},
              on: {click: function (i) {t.index = e - 1}}
            })
          })), i('div', {
            staticClass: 'carousel-inner',
            attrs: {role: 'listbox'}
          }, [t._t('default')], 2), t.controls ? [i('a', {
            staticClass: 'carousel-control-prev',
            attrs: {href: '#', role: 'button', 'data-slide': 'prev'},
            on: {click: function (e) {e.stopPropagation(), e.preventDefault(), t.prev(e)}}
          }, [i('span', {
            staticClass: 'carousel-control-prev-icon',
            attrs: {'aria-hidden': 'true'}
          }), t._v(' '), i('span', {staticClass: 'sr-only'}, [t._v('Previous')])]), i('a', {
            staticClass: 'carousel-control-next',
            attrs: {href: '#', role: 'button', 'data-slide': 'next'},
            on: {click: function (e) {e.stopPropagation(), e.preventDefault(), t.next(e)}}
          }, [i('span', {
            staticClass: 'carousel-control-next-icon',
            attrs: {'aria-hidden': 'true'}
          }), t._v(' '), i('span', {staticClass: 'sr-only'}, [t._v('Next')])])] : t._e()], 2)
        },
        staticRenderFns: [],
        data: function () {return {index: 0, isSliding: !1, slides: []}},
        props: {
          interval: {type: Number, default: 5e3},
          indicators: {type: Boolean, default: !1},
          controls: {type: Boolean, default: !1},
          height: {type: String},
          background: {type: String}
        },
        methods: {
          prev: function () {this.index <= 0 ? this.index = this.slides.length - 1 : this.index--},
          next: function () {this.index >= this.slides.length - 1 ? this.index = 0 : this.index++},
          pause: function () {0 !== this.interval && 'undefined' != typeof this.interval && clearInterval(this._intervalId)},
          start: function () {
            var t = this
            0 !== this.interval && 'undefined' != typeof this.interval && (this._intervalId = setInterval(function () {t.next()}, this.interval))
          }
        },
        mounted: function () {this.slides = this.$el.querySelectorAll('.carousel-item'), this.slides[0].classList.add('active'), this.start()},
        watch: {
          index: function (t, e) {
            var i = this
            if (t !== e) {
              if (this.isSliding)return void(this.index = e)
              var n = t > e ? DIRECTION.next : DIRECTION.prev
              0 === e && t === this.slides.length - 1 ? n = DIRECTION.prev : e === this.slides.length - 1 && 0 === t && (n = DIRECTION.next)
              var s = this.slides[e], r = this.slides[t]
              s && r && (this.isSliding = !0, r.classList.add(n.next, n.overlay), s.classList.add(n.current), this._carouselAnimation = setTimeout(function () {i.isSliding = !1, i.$emit('slide', t), s.classList.remove('active'), r.classList.add('active'), s.classList.remove(n.current), r.classList.remove(n.next, n.overlay)}, 500))
            }
          }
        },
        destroyed: function () {clearTimeout(this._carouselAnimation), clearInterval(this._intervalId)}
      }, carouselSlide = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {
            staticClass: 'carousel-item',
            style: {background: t.background, height: t.height}
          }, [t.img ? i('img', {
            staticClass: 'd-block img-fluid',
            attrs: {src: t.img, alt: t.imgAlt}
          }) : t._e(), i('div', {staticClass: 'carousel-caption d-none d-md-block'}, [t.caption ? i('h3', {domProps: {innerHTML: t._s(t.caption)}}) : t._e(), t.text ? i('p', {domProps: {innerHTML: t._s(t.text)}}) : t._e(), t._t('default')], 2)])
        },
        staticRenderFns: [],
        props: {
          img: {type: String},
          imgAlt: {type: String},
          caption: {type: String},
          text: {type: String},
          background: {type: String},
          height: {type: String}
        }
      }, collapse = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('transition', {
            attrs: {name: 'collapse'},
            on: {enter: t.enter, 'after-enter': t.clearHeight, leave: t.leave, 'after-leave': t.clearHeight}
          }, [i('div', {
            directives: [{name: 'show', rawName: 'v-show', value: t.show, expression: 'show'}],
            class: t.classObject
          }, [t._t('default')], 2)])
        },
        staticRenderFns: [],
        data: function () {return {show: !1}},
        computed: {classObject: function () {return {'navbar-collapse': this.isNav, show: this.show}}},
        props: {isNav: {type: Boolean, default: !1}, id: {type: String, required: !0}},
        methods: {
          toggle: function () {this.show = !this.show}, enter: function (t) {
            t.style.height = 'auto'
            var e = getComputedStyle(t).height
            t.style.height = '0px', t.offsetHeight, t.style.height = e
          }, leave: function (t) {
            t.style.height = 'auto'
            var e = getComputedStyle(t).height
            t.style.height = e, t.offsetHeight, t.style.height = '0px'
          }, clearHeight: function (t) {t.style.height = null}
        },
        created: function () {
          var t = this
          this.$root.$on('collapse::toggle', function (e) {e === t.id && t.toggle()})
        }
      }, clickOut = {
        mounted: function () {'undefined' != typeof document && document.documentElement.addEventListener('click', this._clickOutListener)},
        destroyed: function () {'undefined' != typeof document && document.removeEventListener('click', this._clickOutListener)},
        methods: {_clickOutListener: function (t) {this.$el.contains(t.target) || this.clickOutListener && this.clickOutListener()}}
      }, dropdown = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {class: ['dropdown', 'btn-group', t.visible ? 'show' : '', t.dropup ? 'dropup' : '']}, [i('b-button', {
            class: [t.split ? '' : 'dropdown-toggle', t.link ? 'btn-link' : ''],
            attrs: {
              'aria-haspopup': 'true',
              'aria-expanded': t.visible,
              variant: t.variant,
              size: t.size,
              disabled: t.disabled
            },
            on: {click: t.click}
          }, [t._t('text', [t._v(t._s(t.text))])], 2), t.split ? i('b-button', {
            staticClass: 'dropdown-toggle dropdown-toggle-split',
            class: [t.link ? 'btn-link' : ''],
            attrs: {variant: t.variant, size: t.size, disabled: t.disabled},
            on: {click: t.toggle}
          }, [i('span', {staticClass: 'sr-only'}, [t._v('Toggle Dropdown')])]) : t._e(), i('div', {
            class: ['dropdown-menu', t.right ? 'dropdown-menu-right' : ''],
            attrs: {tabindex: '-1'}
          }, [t._t('default')], 2)], 1)
        },
        staticRenderFns: [],
        mixins: [clickOut],
        components: {bButton: bBtn},
        data: function () {return {visible: !1}},
        props: {
          split: {type: Boolean, default: !1},
          text: {type: String, default: ''},
          size: {type: String, default: null},
          variant: {type: String, default: null},
          dropup: {type: Boolean, default: !1},
          disabled: {type: Boolean, default: !1},
          right: {type: Boolean, default: !1},
          link: {type: Boolean, default: !1}
        },
        created: function () {
          var t = this
          this.$root.$on('shown::dropdown', function (e) {e !== t && (t.visible = !1)})
        },
        watch: {visible: function (t, e) {t !== e && (t ? this.$root.$emit('shown::dropdown', this) : this.$root.$emit('hidden::dropdown', this))}},
        methods: {
          toggle: function () {this.visible = !this.visible},
          clickOutListener: function () {this.visible = !1},
          click: function (t) {this.split ? (this.$emit('click', t), this.$root.$emit('shown::dropdown', this)) : this.toggle()}
        }
      }, dropdownItem = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i(t.itemType, {
            tag: 'a',
            staticClass: 'dropdown-item',
            attrs: {to: t.to, href: t.hrefString, tabindex: '0'},
            on: {click: t.click}
          }, [t._t('default')], 2)
        },
        staticRenderFns: [],
        extends: bLink,
        computed: {itemType: function () {return this.href || this.to ? this.componentType : 'button'}}
      }, dropdownDivider = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {staticClass: 'dropdown-divider', attrs: {role: 'separator'}})
        }, staticRenderFns: [], props: {}
      }, dropdownHeader = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i(t.tag, {tag: 'component', staticClass: 'dropdown-header'}, [t._t('default')], 2)
        }, staticRenderFns: [], props: {tag: {type: String, default: 'h6'}}
      }, dropdownSelect = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {
            staticClass: 'dropdown-select',
            class: {open: t.show, dropdown: !t.dropup, dropup: t.dropup}
          }, [i('button', {
            class: ['btn', 'dropdown', t.dropdownToggle, t.btnVariant, t.btnSize],
            attrs: {id: t.id, role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'show', disabled: t.disabled},
            on: {click: function (e) {e.preventDefault(), t.toggle(e)}}
          }, [i('span', {
            staticClass: 'checked-items',
            domProps: {innerHTML: t._s(t.displayItem)}
          })]), i('ul', {
            staticClass: 'dropdown-menu',
            class: {'dropdown-menu-right': 'right' == t.position},
            attrs: {'aria-labelledby': 'dLabel'}
          }, t._l(t.list, function (e) {
            return i('li', [i('button', {
              staticClass: 'dropdown-item',
              attrs: {click: t.select(e)}
            }, [t._v(t._s(e.text))])])
          }))])
        },
        staticRenderFns: [],
        data: function () {return {show: !1, selected: !1}},
        computed: {
          btnVariant: function () {return this.variant && 'default' !== this.variant ? 'btn-' + this.variant : 'btn-secondary'},
          btnSize: function () {return this.size && 'default' !== this.size ? 'btn-' + this.size : ''},
          dropdownToggle: function () {return this.caret ? 'dropdown-toggle' : ''},
          displayItem: function () {
            if (this.returnObject && this.model && !this.model.text || !this.returnObject && this.model && 0 === this.model.length || this.forceDefault)return this.defaultText
            if (this.returnObject && this.model && this.model.text)return this.model.text
            if (!this.returnObject && this.model) {
              var t = this.model || ''
              return this.list.forEach(function (e) {e.value === this.model && (t = e.text)}), t
            }
            return ''
          }
        },
        props: {
          id: {type: String},
          model: {required: !1},
          list: {type: Array, default: [], required: !0},
          caret: {type: Boolean, default: !0},
          position: {type: String, default: 'left'},
          size: {type: String, default: ''},
          variant: {type: String, default: 'default'},
          defaultText: {type: String, default: 'Plase select one'},
          forceDefault: {type: Boolean, default: !1},
          returnObject: {type: Boolean, default: !1},
          dropup: {type: Boolean, default: !1},
          disabled: {type: Boolean, default: !1}
        },
        methods: {
          toggle: function (t) {this.show = !this.show, this.show ? (this.$root.$emit('shown:dropdown', this.id), t.stopPropagation()) : this.$root.$emit('hidden::dropdown', this.id)},
          select: function (t) {this.returnObject ? this.model = t : this.model = t.value, this.show = !1, this.$root.$emit('selected::dropdown', this.id, this.model)}
        },
        created: function () {
          var t = this.$root
          t.$on('hide::dropdown', function () {this.show = !1})
        }
      }, form = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('form', {class: t.classObject}, [t._t('default')], 2)
        },
        staticRenderFns: [],
        computed: {classObject: function () {return [this.inline ? 'form-inline' : '']}},
        props: {inline: {type: Boolean, default: !1}}
      }, formFieldset = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {class: ['form-group', 'row', t.inputState]}, [t.label ? i('label', {
            class: ['col-form-label', t.labelLayout],
            attrs: {for: t.target},
            domProps: {innerHTML: t._s(t.label)}
          }) : t._e(), i('div', {
            ref: 'content',
            class: t.inputLayout
          }, [t._t('default'), t.feedback ? i('div', {
            staticClass: 'form-text form-control-feedback',
            attrs: {role: 'alert'},
            domProps: {innerHTML: t._s(t.feedback)}
          }) : t._e(), t.description ? i('small', {
            staticClass: 'form-text text-muted',
            domProps: {innerHTML: t._s(t.description)}
          }) : t._e()], 2)])
        },
        staticRenderFns: [],
        data: function () {return {target: null}},
        computed: {
          inputState: function () {return this.state ? 'has-' + this.state : ''},
          labelLayout: function () {return this.horizontal ? 'col-sm-' + this.labelSize : 'col-12'},
          inputLayout: function () {return this.horizontal ? 'col-sm-' + (12 - this.labelSize) : 'col-12'}
        },
        mounted: function () {
          var t = this.$refs.content
          t && (this.target = t.querySelector(this.inputSelector).id || !1)
        },
        props: {
          state: {type: String, default: null},
          horizontal: {type: Boolean, default: !1},
          labelSize: {type: Number, default: 3},
          label: {type: String, default: null},
          description: {type: String, default: null},
          feedback: {type: String, default: null},
          inputSelector: {type: String, default: 'input, select, textarea'}
        }
      }, formMixin = {
        computed: {
          inputClass: function () {return [this.size ? 'form-control-' + this.size : null, this.state ? 'form-control-' + this.state : null]},
          custom: function () {return !this.plain}
        },
        props: {
          name: {type: String},
          disabled: {type: Boolean},
          plain: {type: Boolean, default: !1},
          state: {type: String},
          size: {type: String},
          id: {type: String}
        }
      }, formCheckBoxMixin = {
        computed: {
          checkboxClass: function () {
            return {
              'custom-control': this.custom,
              'form-check-inline': this.inline
            }
          }
        }
      }, formCheckbox = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('label', {class: [t.inputClass, t.checkboxClass, t.custom ? 'custom-checkbox' : null]}, [i('input', {
            class: [t.custom ? 'custom-control-input' : null],
            attrs: {type: 'checkbox', id: t.id || 'b_' + t._uid, name: t.name, disabled: t.disabled},
            domProps: {value: t.value, checked: t.checked === t.value},
            on: {change: function (e) {t.$emit('change', e.target.checked ? t.value : t.uncheckedValue)}}
          }), t._v(' '), t.custom ? i('span', {staticClass: 'custom-control-indicator'}) : t._e(), t._v(' '), i('span', {class: [t.custom ? 'custom-control-description' : null]}, [t._t('default')], 2)])
        },
        staticRenderFns: [],
        mixins: [formMixin, formCheckBoxMixin],
        model: {prop: 'checked', event: 'change'},
        props: {value: {default: !0}, uncheckedValue: {default: !1}, checked: {default: !0}}
      }, formOptions = {
        computed: {
          formOptions: function () {
            var t = this, e = this.options || {}
            return e = Array.isArray(e) ? e.map(function (e) {
              return 'object' == typeof e ? {
                value: e[t.valueField],
                text: e[t.textField],
                disabled: e.disabled || !1
              } : {text: String(e), value: e || {}}
            }) : Object.keys(e).map(function (i) {
              var n = e[i] || {}
              return 'object' != typeof n && (n = {text: String(n)}), n.value = n[t.valueField] || i, n
            })
          },
          selectedValue: function () {
            for (var t = this, e = this.formOptions,
                   i = 0; i < e.length; i++)if (e[i].value === t.localValue)return t.returnObject ? e[i] : e[i].value
          }
        },
        props: {valueField: {type: [String], default: 'value'}, textField: {type: [String], default: 'text'}},
        watch: {
          localValue: function (t, e) {t !== e && this.$emit('input', this.selectedValue)},
          value: function (t, e) {t !== e && (this.localValue = t)}
        }
      }, formRadio = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {class: [t.inputClass, this.stacked ? 'custom-controls-stacked' : '']}, t._l(t.formOptions, function (e) {
            return i('label', {class: [t.checkboxClass, t.custom ? 'custom-radio' : null]}, [i('input', {
              directives: [{
                name: 'model',
                rawName: 'v-model',
                value: t.localValue,
                expression: 'localValue'
              }],
              ref: 'inputs',
              refInFor: !0,
              class: t.custom ? 'custom-control-input' : null,
              attrs: {type: 'radio', name: e.name, id: e.id, disabled: e.disabled},
              domProps: {value: e.value, checked: t._q(t.localValue, e.value)},
              on: {__c: function (i) {t.localValue = e.value}}
            }), t._v(' '), t.custom ? i('span', {staticClass: 'custom-control-indicator'}) : t._e(), t._v(' '), i('span', {
              class: t.custom ? 'custom-control-description' : null,
              domProps: {innerHTML: t._s(e.text)}
            })])
          }))
        },
        staticRenderFns: [],
        mixins: [formMixin, formCheckBoxMixin, formOptions],
        data: function () {return {localValue: this.value}},
        computed: {inputState: function () {return this.state ? 'has-' + this.state : ''}},
        props: {
          value: {},
          options: {type: [Array, Object], default: null, required: !0},
          stacked: {type: Boolean, default: !1},
          returnObject: {type: Boolean, default: !1}
        }
      }, formInput = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i(t.textarea ? 'textarea' : 'input', {
            ref: 'input',
            tag: 'input',
            class: ['form-control', t.inputClass],
            attrs: {
              type: t.type,
              name: t.name,
              id: t.id || 'b_' + t._uid,
              disabled: t.disabled,
              rows: t.rows || t.rowsCount,
              placeholder: t.placeholder
            },
            domProps: {value: t.value},
            on: {
              input: function (e) {t.onInput(e.target.value)},
              change: function (e) {t.onChange(e.target.value)},
              keyup: function (e) {t.onKeyUp(e)},
              focus: function (e) {t.$emit('focus')},
              blur: function (e) {t.$emit('blur')}
            }
          })
        },
        staticRenderFns: [],
        mixins: [formMixin],
        computed: {rowsCount: function () {return (this.value || '').toString().split('\n').length}},
        methods: {
          format: function (t) {
            if (this.formatter) {
              var e = this.formatter(t)
              e !== t && (t = e, this.$refs.input.value = e)
            }
            return t
          },
          onInput: function (t) {this.lazyFormatter || (t = this.format(t)), this.$emit('input', t)},
          onChange: function (t) {t = this.format(t), this.$emit('input', t), this.$emit('change', t)},
          onKeyUp: function (t) {this.$emit('keyup', t)}
        },
        props: {
          value: {default: null},
          type: {type: String, default: 'text'},
          placeholder: {type: String, default: null},
          rows: {type: Number, default: null},
          textarea: {type: Boolean, default: !1},
          formatter: {type: Function},
          lazyFormatter: {type: Boolean, default: !1}
        }
      }, formFile = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('label', {
            class: [t.custom ? 'custom-file' : null, t.inputClass],
            on: {dragover: function (e) {e.stopPropagation(), e.preventDefault(), t.dragover(e)}}
          }, [t.dragging ? i('span', {
            staticClass: 'drop-here',
            attrs: {'data-drop': t.dropLabel},
            on: {
              dragover: function (e) {e.stopPropagation(), e.preventDefault(), t.dragover(e)},
              drop: function (e) {e.stopPropagation(), e.preventDefault(), t.drop(e)},
              dragleave: function (e) {e.stopPropagation(), e.preventDefault(), t.dragging = !1}
            }
          }) : t._e(), i('input', {
            ref: 'input',
            staticClass: 'custom-file-input',
            attrs: {
              type: 'file',
              name: t.name,
              id: t.id || 'b_' + t._uid,
              disabled: t.disabled,
              accept: t.accept,
              multiple: t.multiple,
              webkitdirectory: t.directory
            },
            on: {change: t.onFileChange}
          }), t._v(' '), t.custom ? i('span', {
            class: ['custom-file-control', t.dragging ? 'dragging' : null, t.inputClass],
            attrs: {'data-choose': t.computedChooseLabel, 'data-selected': t.selectedLabel}
          }) : t._e()])
        },
        staticRenderFns: [],
        mixins: [formMixin],
        data: function () {return {selectedFile: null, dragging: !1}},
        computed: {
          selectedLabel: function () {return this.selectedFile && 0 !== this.selectedFile.length ? this.multiple ? 1 === this.selectedFile.length ? this.selectedFile[0].name : this.selectedFormat.replace(':names', this.selectedFile.map(function (t) {return t.name}).join(',')).replace(':count', this.selectedFile.length) : this.selectedFile.name : this.placeholder || 'No file chosen'},
          computedChooseLabel: function () {return this.chooseLabel || (this.multiple ? 'Choose Files' : 'Choose File')}
        },
        watch: {selectedFile: function (t, e) {t !== e && (!t && this.multiple ? this.$emit('input', []) : this.$emit('input', t))}},
        methods: {
          onFileChange: function (t) {
            var e = this
            this.$emit('change', t)
            var i = t.dataTransfer && t.dataTransfer.items
            if (i && !this.noTraverse) {
              for (var n = [], s = 0; s < i.length; s++) {
                var r = i[s].webkitGetAsEntry()
                r && n.push(e.traverseFileTree(r))
              }
              return void Promise.all(n).then(function (t) {e.setFiles(Array.prototype.concat.apply([], t))})
            }
            this.setFiles(t.target.files || t.dataTransfer.files)
          },
          setFiles: function (t) {
            var e = this
            if (!t)return void(this.selectedFile = null)
            if (!this.multiple)return void(this.selectedFile = t[0])
            for (var i = [], n = 0; n < t.length; n++)t[n].type.match(e.accept) && i.push(t[n]);
            this.selectedFile = i
          },
          dragover: function (t) {this.noDrop || (this.dragging = !0, t.dataTransfer.dropEffect = 'copy')},
          drop: function (t) {this.noDrop || (this.dragging = !1, t.dataTransfer.files && t.dataTransfer.files.length > 0 && this.onFileChange(t))},
          traverseFileTree: function (t, e) {
            var i = this
            return new Promise(function (n) {
              e = e || '', t.isFile ? t.file(function (t) {t.$path = e, n(t)}) : t.isDirectory && t.createReader().readEntries(function (s) {
                  for (var r = [], a = 0; a < s.length; a++)r.push(i.traverseFileTree(s[a], e + t.name + '/'));
                  Promise.all(r).then(function (t) {n(Array.prototype.concat.apply([], t))})
                })
            })
          }
        },
        props: {
          accept: {type: String, default: ''},
          placeholder: {type: String, default: null},
          chooseLabel: {type: String, default: null},
          multiple: {type: Boolean, default: !1},
          directory: {type: Boolean, default: !1},
          noTraverse: {type: Boolean, default: !1},
          selectedFormat: {type: String, default: ':count Files'},
          noDrop: {type: Boolean, default: !1},
          dropLabel: {type: String, default: 'Drop files here'}
        }
      }, formSelect = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('select', {
            directives: [{
              name: 'model',
              rawName: 'v-model',
              value: t.localValue,
              expression: 'localValue'
            }],
            ref: 'input',
            class: [t.inputClass, t.custom ? 'custom-select' : null],
            attrs: {name: t.name, id: t.id || 'b_' + t._uid, disabled: t.disabled},
            on: {
              change: function (e) {
                var i = Array.prototype.filter.call(e.target.options, function (t) {return t.selected}).map(function (t) {
                  var e = '_value' in t ? t._value : t.value
                  return e
                })
                t.localValue = e.target.multiple ? i : i[0]
              }
            }
          }, t._l(t.formOptions, function (e) {
            return i('option', {
              attrs: {disabled: e.disabled},
              domProps: {value: e.value, innerHTML: t._s(e.text)}
            })
          }))
        },
        staticRenderFns: [],
        mixins: [formMixin, formOptions],
        data: function () {return {localValue: this.value}},
        props: {value: {}, options: {type: [Array, Object], required: !0}, returnObject: {type: Boolean, default: !1}}
      }, jumbotron = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {class: ['jumbotron', t.fluid ? 'jumbotron-fluid' : null]}, [i('div', {staticClass: 'container'}, [t.header ? i('h1', {
            staticClass: 'display-3',
            domProps: {innerHTML: t._s(t.header)}
          }) : t._e(), t.lead ? i('p', {
            staticClass: 'lead',
            domProps: {innerHTML: t._s(t.lead)}
          }) : t._e(), t._t('default')], 2)])
        },
        staticRenderFns: [],
        computed: {},
        props: {
          fluid: {type: Boolean, default: !1},
          header: {type: String, default: null},
          lead: {type: String, default: null}
        }
      }, badge = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('span', {class: ['badge', t.badgeVariant, t.badgePill]}, [t._t('default')], 2)
        },
        staticRenderFns: [],
        computed: {
          badgeVariant: function () {return this.variant && 'default' !== this.variant ? 'badge-' + this.variant : 'badge-default'},
          badgePill: function () {return this.pill ? 'badge-pill' : ''}
        },
        props: {variant: {type: String, default: 'default'}, pill: {type: Boolean, default: !1}}
      }, listGroup = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i(t.tag, {
            tag: 'component',
            class: ['list-group', t.flush ? 'list-group-flush' : null]
          }, [t._t('default')], 2)
        }, staticRenderFns: [], props: {tag: {type: String, default: 'div'}, flush: {type: Boolean, default: !1}}
      }, actionTags = ['a', 'router-link', 'button', 'b-link'], listGroupItem = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i(t.myTag, {
            ref: 'item',
            tag: 'component',
            class: t.classObject,
            attrs: {to: t.to, href: t.href}
          }, [t._t('default')], 2)
        },
        staticRenderFns: [],
        components: {bLink: bLink},
        computed: {
          classObject: function () {return ['list-group-item', this.listState, this.active ? 'active' : null, this.disabled ? 'disabled' : null, this.isAction ? 'list-group-item-action' : null]},
          isAction: function () {return this.action !== !1 && (this.action || this.to || this.href || actionTags.indexOf(this.tag) !== -1)},
          listState: function () {return this.variant ? 'list-group-item-' + this.variant : null},
          myTag: function () {return this.tag ? this.tag : this.to || this.href ? 'b-link' : 'div'}
        },
        props: {
          tag: {type: String, default: null},
          active: {type: Boolean, default: !1},
          action: {type: Boolean, default: null},
          disabled: {type: Boolean, default: !1},
          variant: {type: String, default: null},
          to: {type: String, default: null},
          href: {type: String, default: null}
        }
      }, media = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {staticClass: 'media'}, [t.rightAlign ? t._e() : i('div', {class: ['d-flex', 'mr-3', t.verticalAlignClass]}, [t._t('aside')], 2), i('div', {staticClass: 'media-body'}, [t._t('default')], 2), t.rightAlign ? i('div', {class: ['d-flex', 'ml-3', t.verticalAlignClass]}, [t._t('aside')], 2) : t._e()])
        },
        staticRenderFns: [],
        computed: {verticalAlignClass: function () {return 'align-self-' + this.verticalAlign}},
        props: {rightAlign: {type: Boolean, default: !1}, verticalAlign: {type: String, default: 'top'}}
      }, modal = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', [i('transition-group', {
            attrs: {
              'enter-class': 'hidden',
              'enter-to-class': '',
              'enter-active-class': '',
              'leave-class': 'show',
              'leave-active-class': '',
              'leave-to-class': 'hidden'
            }
          }, [i('div', {
            directives: [{name: 'show', rawName: 'v-show', value: t.is_visible, expression: 'is_visible'}],
            key: 'modal',
            class: ['modal', {fade: t.fade, show: t.is_visible}],
            attrs: {id: t.id, role: 'dialog'},
            on: {
              click: function (e) {t.onClickOut(e)},
              keyup: function (e) {return 'button' in e || !t._k(e.keyCode, 'esc', 27) ? void t.onEsc(e) : null}
            }
          }, [i('div', {class: ['modal-dialog', 'modal-' + t.size]}, [i('div', {
            ref: 'content',
            staticClass: 'modal-content',
            attrs: {
              tabindex: '-1',
              role: 'document',
              'aria-labeledby': t.hideHeader ? '' : t.id + '_modal_title',
              'aria-describedby': t.id + '_modal_body'
            },
            on: {click: function (t) {t.stopPropagation()}}
          }, [t.hideHeader ? t._e() : i('header', {staticClass: 'modal-header'}, [t._t('modal-header', [i('h5', {
            staticClass: 'modal-title',
            attrs: {id: t.id + '_modal_title'}
          }, [t._t('modal-title', [t._v(t._s(t.title))])], 2), t.hideHeaderClose ? t._e() : i('button', {
            staticClass: 'close',
            attrs: {type: 'button', 'aria-label': t.closeTitle},
            on: {click: t.hide}
          }, [i('span', {attrs: {'aria-hidden': 'true'}}, [t._v('×')])])])], 2), i('div', {
            staticClass: 'modal-body',
            attrs: {id: t.id + '_modal_body'}
          }, [t._t('default')], 2), t.hideFooter ? t._e() : i('footer', {staticClass: 'modal-footer'}, [t._t('modal-footer', [i('b-btn', {
            attrs: {
              variant: 'secondary'
            }, on: {click: function (e) {t.hide(!1)}}
          }, [t._v(t._s(t.closeTitle))]), i('b-btn', {
            attrs: {variant: 'primary'},
            on: {click: function (e) {t.hide(!0)}}
          }, [t._v(t._s(t.okTitle))])])], 2)])])]), t.is_visible ? i('div', {
            key: 'modal-backdrop',
            class: ['modal-backdrop', {fade: t.fade, show: t.is_visible}]
          }) : t._e()])], 1)
        },
        staticRenderFns: [],
        components: {bBtn: bBtn},
        data: function () {return {is_visible: !1}},
        model: {prop: 'visible', event: 'change'},
        computed: {body: function () {if ('undefined' != typeof document)return document.querySelector('body')}},
        watch: {visible: function (t, e) {t !== e && (t ? this.show() : this.hide())}},
        props: {
          id: {type: String, default: null},
          title: {type: String, default: ''},
          size: {type: String, default: 'md'},
          fade: {type: Boolean, default: !0},
          closeTitle: {type: String, default: 'Close'},
          okTitle: {type: String, default: 'OK'},
          closeOnBackdrop: {type: Boolean, default: !0},
          closeOnEsc: {type: Boolean, default: !0},
          hideHeader: {type: Boolean, default: !1},
          hideFooter: {type: Boolean, default: !1},
          hideHeaderClose: {type: Boolean, default: !1}
        },
        methods: {
          show: function () {this.is_visible || (this.is_visible = !0, this.$root.$emit('shown::modal', this.id), this.body.classList.add('modal-open'), this.$emit('shown'), this.$emit('change', !0))},
          hide: function (t) {
            if (this.is_visible) {
              var e = !1, i = {isOK: t, cancel: function () {e = !0}}
              this.$emit('change', !1), this.$emit('hidden', i), t === !0 ? this.$emit('ok', i) : t === !1 && this.$emit('cancel', i), e || (this.is_visible = !1, this.$root.$emit('hidden::modal', this.id), this.body.classList.remove('modal-open'))
            }
          },
          onClickOut: function () {this.closeOnBackdrop && this.hide()},
          onEsc: function () {this.is_visible && this.closeOnEsc && this.hide()},
          enforceFocus: function (t) {this.is_visible && document !== t.target && this.$refs.content && this.$refs.content !== t.target && !this.$refs.content.contains(t.target) && this.$refs.content.focus()}
        },
        created: function () {
          var t = this
          this.$root.$on('show::modal', function (e) {e === t.id && t.show()}), this.$root.$on('hide::modal', function (e) {e === t.id && t.hide()})
        },
        mounted: function () {'undefined' != typeof document && document.addEventListener('focus', this.enforceFocus), this.visible === !0 && this.show()},
        destroyed: function () {'undefined' != typeof document && document.removeEventListener('focus', this.enforceFocus)}
      }, nav = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i(t.type, {tag: 'component', class: t.classObject}, [t._t('default')], 2)
        },
        staticRenderFns: [],
        computed: {
          classObject: function () {
            return {
              nav: !0,
              'navbar-nav': this.isNavBar,
              'nav-tabs': this.tabs,
              'nav-pills': this.pills,
              'flex-column': this.vertical,
              'nav-fill': this.fill
            }
          }
        },
        props: {
          type: {type: String, default: 'ul'},
          fill: {type: Boolean, default: !1},
          tabs: {type: Boolean, default: !1},
          pills: {type: Boolean, default: !1},
          vertical: {type: Boolean, default: !1},
          isNavBar: {type: Boolean, default: !1}
        }
      }, navItem = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('li', {staticClass: 'nav-item', on: {click: t.onclick}}, [i('b-link', {
            class: t.classObject,
            attrs: {to: t.to, href: t.href, exact: t.exact}
          }, [t._t('default')], 2)], 1)
        },
        staticRenderFns: [],
        components: {bLink: bLink},
        computed: {classObject: function () {return ['nav-link', this.active ? 'active' : '', this.disabled ? 'disabled' : '']}},
        props: {
          active: {type: Boolean, default: !1},
          disabled: {type: Boolean, default: !1},
          to: {type: [String, Object]},
          href: {type: String},
          exact: {type: Boolean}
        },
        methods: {onclick: function (t) {this.$root.$emit('shown::dropdown', this), this.$emit('click', t)}}
      }, navItemDropdown = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('li', {
            class: {
              'nav-item': !0,
              show: t.visible,
              dropdown: !t.dropup,
              dropup: t.dropup
            }
          }, [i('a', {
            class: ['nav-link', t.dropdownToggle],
            attrs: {href: '', 'aria-haspopup': 'true', 'aria-expanded': t.visible, disabled: t.disabled},
            on: {click: function (e) {e.stopPropagation(), e.preventDefault(), t.toggle(e)}}
          }, [t._t('text', [t._v(t._s(t.text))])], 2), i('div', {
            class: {
              'dropdown-menu': !0,
              'dropdown-menu-right': t.rightAlignment
            }
          }, [t._t('default')], 2)])
        },
        staticRenderFns: [],
        mixins: [clickOut],
        data: function () {return {visible: !1}},
        computed: {dropdownToggle: function () {return this.caret ? 'dropdown-toggle' : ''}},
        props: {
          caret: {type: Boolean, default: !0},
          text: {type: String, default: ''},
          dropup: {type: Boolean, default: !1},
          rightAlignment: {type: Boolean, default: !1},
          disabled: {type: Boolean, default: !1},
          class: ['class']
        },
        created: function () {
          var t = this
          this.$root.$on('shown::dropdown', function (e) {e !== t && t.close()})
        },
        watch: {visible: function (t, e) {t !== e && (t ? this.$root.$emit('shown::dropdown', this) : this.$root.$emit('hidden::dropdown', this))}},
        methods: {
          toggle: function () {this.visible = !this.visible},
          open: function () {this.visible = !0},
          close: function () {this.visible = !1},
          clickOutListener: function () {this.close()}
        }
      }, navToggle = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('button', {
            class: t.classObject,
            attrs: {type: 'button', 'aria-label': t.label},
            on: {click: t.onclick}
          }, [i('span', {staticClass: 'navbar-toggler-icon'})])
        },
        staticRenderFns: [],
        computed: {classObject: function () {return ['navbar-toggler', 'navbar-toggler-' + this.position]}},
        props: {
          label: {type: String, default: 'Toggle navigation'},
          position: {type: String, default: 'right'},
          target: {required: !0}
        },
        methods: {
          onclick: function () {
            var t = this.target
            t.toggle && t.toggle(), this.$root.$emit('collapse::toggle', this.target)
          }
        }
      }, navbar = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('nav', {class: t.classObject}, [t._t('default')], 2)
        },
        staticRenderFns: [],
        computed: {classObject: function () {return ['navbar', this.type ? 'navbar-' + this.type : null, this.variant ? 'bg-' + this.variant : null, this.fixed ? 'fixed-' + this.fixed : null, this.sticky ? 'sticky-top' : null, this.toggleable ? 'navbar-toggleable-' + this.toggleBreakpoint : null]}},
        props: {
          type: {type: String, default: 'light'},
          variant: {type: String},
          toggleable: {type: Boolean, default: !1},
          toggleBreakpoint: {type: String, default: 'sm'},
          fixed: {type: String},
          sticky: {type: String}
        }
      }, bPagination = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {
            staticClass: 'btn-group pagination',
            attrs: {role: 'group', 'aria-label': 'Pagination'}
          }, [i('button', {
            class: ['btn', 'btn-' + t.secondaryVariant, t.btnSize],
            attrs: {type: 'button', disabled: 1 == t.currentPage},
            on: {click: function (e) {e.preventDefault(), 1 == t.currentPage ? t._return : t.currentPage--}}
          }, [i('span', {attrs: {'aria-hidden': 'true'}}, [t._v('«')])]), t._v(' '), i('button', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: t.showPrev,
              expression: 'showPrev'
            }],
            class: ['btn', 'btn-' + t.secondaryVariant, t.btnSize, 1 === t.currentPage ? 'active' : ''],
            attrs: {type: 'button'},
            on: {click: function (e) {e.preventDefault(), t.currentPage = 1}}
          }, [t._v('1')]), t._v(' '), i('span', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: t.showPrev,
              expression: 'showPrev'
            }], class: ['btn', 'btn-' + t.secondaryVariant, t.btnSize]
          }, [t._v('...')]), t._v(' '), t._l(t.pageLinks, function (e, n) {
            return i('button', {
              class: ['btn', t.btnSize, t.btnVariant(n), n + t.diff === t.currentPage ? 'active' : '', n + t.diff !== t.currentPage ? 'hidden-xs-down' : ''],
              attrs: {type: 'button'},
              on: {click: function (e) {e.preventDefault(), t.currentPage = n + t.diff}}
            }, [t._v(t._s(n + t.diff))])
          }), t._v(' '), i('span', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: t.showNext,
              expression: 'showNext'
            }], class: ['btn', 'btn-' + t.secondaryVariant, t.btnSize]
          }, [t._v('...')]), t._v(' '), i('button', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: t.showNext,
              expression: 'showNext'
            }],
            class: ['btn', 'btn-' + t.secondaryVariant, t.btnSize, t.numberOfPages === t.currentPage ? 'active' : ''],
            attrs: {type: 'button'},
            on: {click: function (e) {e.preventDefault(), t.currentPage = t.numberOfPages}}
          }, [t._v(t._s(t.numberOfPages))]), t._v(' '), i('button', {
            class: ['btn', 'btn-' + t.secondaryVariant, t.btnSize],
            attrs: {type: 'button', disabled: t.currentPage == t.numberOfPages},
            on: {click: function (e) {e.preventDefault(), t.currentPage == t.numberOfPages ? t._return : t.currentPage++}}
          }, [i('span', {attrs: {'aria-hidden': 'true'}}, [t._v('»')])])], 2)
        },
        staticRenderFns: [],
        data: function () {return {diff: 1, showPrev: !1, showNext: !1, currentPage: this.value}},
        computed: {
          numberOfPages: function () {
            var t = Math.ceil(this.totalRows / this.perPage)
            return t < 1 ? 1 : t
          },
          btnSize: function () {return this.size && 'default' !== this.size ? 'btn-' + this.size : ''},
          pageLinks: function () {
            var t = this.limit
            return this.currentPage > this.numberOfPages && (this.currentPage = 1), this.diff = 1, this.showPrev = !1, this.showNext = !1, this.numberOfPages <= this.limit ? this.numberOfPages : (this.currentPage <= this.limit - 2 && (this.diff = 1, this.showNext = !0, t = this.limit - 2), this.currentPage > this.numberOfPages - this.limit + 2 && (this.diff = this.numberOfPages - this.limit + 3, this.showPrev = !0, t = this.limit - 2), this.currentPage >= this.limit - 2 && this.currentPage <= this.numberOfPages - this.limit + 2 && (this.diff = this.currentPage - 1, this.showPrev = !0, this.showNext = !0, t = this.limit - 4), t)
          }
        },
        methods: {
          btnVariant: function (t) {return t + this.diff === this.currentPage ? 'btn-' + this.variant : 'btn-' + this.secondaryVariant},
          _return: function () {}
        },
        watch: {
          currentPage: function (t) {this.$emit('input', t)},
          value: function (t, e) {t !== e && (this.currentPage = t)}
        },
        props: {
          value: {type: Number, default: 1},
          limit: {type: Number, default: 7},
          perPage: {type: Number, default: 20},
          totalRows: {type: Number, default: 20},
          size: {type: String, default: 'md'},
          variant: {type: String, default: 'primary'},
          secondaryVariant: {type: String, default: 'secondary'}
        }
      }, TRIGGER_LISTENERS = {
        click: {click: 'toggle'},
        hover: {mouseenter: 'show', mouseleave: 'hide'},
        focus: {focus: 'show', blur: 'hide'}
      }, PLACEMENT_PARAMS = {
        top: {attachment: 'bottom center', targetAttachment: 'top center'},
        bottom: {attachment: 'top center', targetAttachment: 'bottom center'},
        left: {attachment: 'middle right', targetAttachment: 'middle left'},
        right: {attachment: 'middle left', targetAttachment: 'middle right'}
      }, TETHER_CLASS_PREFIX = 'tether-', TRANSITION_DURATION = 150, bPopover = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', [i('span', {ref: 'trigger'}, [t._t('default')], 2), i('div', {
            ref: 'popover',
            staticClass: 'popover fade',
            class: [t.classState ? 'show' : '', t.popoverAlignment],
            style: t.popoverStyle,
            attrs: {tabindex: '-1'},
            on: {focus: function (e) {t.$emit('focus')}, blur: function (e) {t.$emit('blur')}}
          }, [i('div', {staticClass: 'popover-arrow'}), t.title ? i('h3', {
            staticClass: 'popover-title',
            domProps: {innerHTML: t._s(t.title)}
          }) : t._e(), i('div', {staticClass: 'popover-content'}, [i('div', {staticClass: 'popover-content-wrapper'}, [t._t('content', [i('span', {domProps: {innerHTML: t._s(t.content)}})])], 2)])])])
        },
        staticRenderFns: [],
        props: {
          constraints: {type: Array, default: function () {return []}},
          content: {type: String, default: ''},
          debounce: {type: [Number], default: 300, validator: function (t) {return t >= 0}},
          delay: {
            type: [Number, Object],
            default: 0,
            validator: function (t) {return 'number' == typeof t ? t >= 0 : null !== t && 'object' == typeof t && ('number' == typeof t.show && 'number' == typeof t.hide && t.show >= 0 && t.hide >= 0)}
          },
          offset: {
            type: String,
            default: '0 0',
            validator: function (t) {return /^((0\s?)|([+-]?[0-9]+(px|%)\s?)){2}$/.test(t)}
          },
          placement: {
            type: String,
            default: 'top',
            validator: function (t) {return Object.keys(PLACEMENT_PARAMS).indexOf(t) !== -1}
          },
          popoverStyle: {type: Object, default: null},
          show: {type: Boolean, default: null},
          targetOffset: {
            type: String,
            default: '0 0',
            validator: function (t) {return /^((0\s?)|([+-]?[0-9]+(px|%)\s?)){2}$/.test(t)}
          },
          title: {type: String, default: ''},
          triggers: {
            type: [Boolean, String, Array],
            default: function () {return ['click', 'focus']},
            validator: function (t) {
              if (t === !1 || '' === t)return !0
              if ('string' == typeof t)return Object.keys(TRIGGER_LISTENERS).indexOf(t) !== -1
              if (Array.isArray(t)) {
                var e = Object.keys(TRIGGER_LISTENERS)
                return t.forEach(function (t) {if (e.indexOf(t) === -1)return !1}), !0
              }
              return !1
            }
          }
        },
        data: function () {return {triggerState: this.show, classState: this.show, lastEvent: null}},
        computed: {
          normalizedTriggers: function () {return this.triggers === !1 ? [] : 'string' == typeof this.triggers ? [this.triggers] : this.triggers},
          popoverAlignment: function () {return this.placement && 'default' !== this.placement ? 'popover-' + this.placement : 'popover-top'},
          showState: function () {return this.show !== !1 && (this.triggerState || this.show)}
        },
        watch: {
          constraints: function () {this.setOptions()},
          normalizedTriggers: function (t, e) {this.updateListeners(t, e)},
          offset: function () {this.setOptions()},
          placement: function () {this.setOptions()},
          showState: function (t) {
            var e = this, i = this.getDelay(t)
            clearTimeout(this._timeout), i ? this._timeout = setTimeout(function () {return e.togglePopover(t)}, i) : this.togglePopover(t)
          }
        },
        methods: {
          addListener: function (t) {
            var e = this
            for (var i in TRIGGER_LISTENERS[t])e._trigger.addEventListener(i, function (t) {return e.eventHandler(t)})
          },
          destroyTether: function () {
            if (this._tether && !this.showState) {
              this._tether.destroy(), this._tether = null
              var t = new RegExp('(^|[^-]\\b)(' + TETHER_CLASS_PREFIX + '\\S*)', 'g')
              this._trigger.className = this._trigger.className.replace(t, '')
            }
          },
          eventHandler: function (t) {
            var e = this
            if (!(this.normalizedTriggers.length > 1 && this.debounce > 0 && null !== this.lastEvent && t.timeStamp <= this.lastEvent + this.debounce))for (var i in TRIGGER_LISTENERS)for (var n in TRIGGER_LISTENERS[i])if (n === t.type) {
              var s = TRIGGER_LISTENERS[i][n]
              return void(('toggle' === s || e.triggerState && 'hide' === s || !e.triggerState && 'show' === s) && (e.triggerState = !e.triggerState, e.lastEvent = t.timeStamp))
            }
          },
          getDelay: function (t) {return 'object' == typeof this.delay ? t ? this.delay.show : this.delay.hide : this.delay},
          getTetherOptions: function () {
            return {
              element: this._popover,
              target: this._trigger,
              constraints: this.constraints,
              attachment: PLACEMENT_PARAMS[this.placement].attachment,
              targetAttachment: PLACEMENT_PARAMS[this.placement].targetAttachment,
              offset: this.offset,
              targetOffset: this.targetOffset
            }
          },
          hidePopover: function () {
            var t = this
            this.classState = !1, clearTimeout(this._timeout), this._timeout = setTimeout(function () {t._popover.style.display = 'none', t.destroyTether()}, TRANSITION_DURATION)
          },
          refreshPosition: function () {
            var t = this
            this._tether && this.$nextTick(function () {t._tether.position()})
          },
          removeListener: function (t) {
            var e = this
            for (var i in TRIGGER_LISTENERS[t])e._trigger.removeEventListener(i, function (t) {return e.eventHandler(t)})
          },
          setOptions: function () {this._tether && this._tether.setOptions(this.getTetherOptions())},
          showPopover: function () {
            var e = this
            clearTimeout(this._timeout), this._tether || (this._tether = new __WEBPACK_IMPORTED_MODULE_0_tether___default.a(this.getTetherOptions())), this._popover.style.display = 'block', this.refreshPosition(), this.$nextTick(function () {e.classState = !0})
          },
          togglePopover: function (t) {this.$emit('showChange', t), t ? (this.showPopover(), this.$root.$emit('shown::popover')) : (this.hidePopover(), this.$root.$emit('hidden::popover'))},
          updateListeners: function (t, e) {
            var i = this
            void 0 === e && (e = [])
            var n = [], s = []
            t.forEach(function (t) {e.indexOf(t) === -1 && n.push(t)}), e.forEach(function (e) {t.indexOf(e) === -1 && s.push(e)}), n.forEach(function (t) {return i.addListener(t)}), s.forEach(function (t) {return i.removeListener(t)})
          }
        },
        created: function () {
          var t = this
          this.$root.$on('hide::popover', function () {t.triggerState = !1})
        },
        mounted: function () {this._trigger = this.$refs.trigger.children[0], this._popover = this.$refs.popover, this._timeout = 0, this.updateListeners(this.normalizedTriggers), this.showState && this.showPopover()},
        updated: function () {this.refreshPosition()},
        beforeDestroy: function () {
          var t = this
          this.normalizedTriggers.forEach(function (e) {return t.removeListener(e)}), clearTimeout(this._timeout), this.destroyTether()
        }
      }, progress = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {staticClass: 'progress'}, [i('transition', [i('div', {
            class: t.classObject,
            style: t.styleObject,
            attrs: {role: 'progressbar', 'aria-valuenow': t.value, 'aria-valuemin': 0, 'aria-valuemax': t.max}
          }, [t._t('default', [t.showProgress ? [t._v(t._s(t.progress) + '%')] : t.showValue ? [t._v(t._s(t.value))] : t._e()])], 2)])], 1)
        },
        staticRenderFns: [],
        computed: {
          classObject: function () {return ['progress-bar', this.progressVariant, this.striped || this.animated ? 'progress-bar-striped' : '', this.animated ? 'progress-bar-animated' : '']},
          styleObject: function () {return {width: this.progress + '%'}},
          progressVariant: function () {return this.variant ? 'bg-' + this.variant : null},
          progress: function () {
            var t = Math.pow(10, this.precision)
            return Math.round(100 * t * this.value / this.max) / t
          }
        },
        props: {
          striped: {type: Boolean, default: !1},
          animated: {type: Boolean, default: !1},
          precision: {type: Number, default: 0},
          value: {type: Number, default: 0},
          max: {type: Number, default: 100},
          variant: {type: String, default: null},
          showProgress: {type: Boolean, default: !1},
          showValue: {type: Boolean, default: !1}
        }
      },
      toString = function (t) {return t ? t instanceof Object ? Object.keys(t).map(function (e) {return toString(t[e])}).join(' ') : String(t) : ''},
      defaultSortCompare = function (t, e, i) {return toString(t[i]).localeCompare(toString(e[i]), void 0, {numeric: !0})},
      table = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('table', {class: ['table', t.striped ? 'table-striped' : '', t.hover ? 'table-hover' : '']}, [i('thead', [i('tr', t._l(t.fields, function (e, n) {
            return i('th', {
              class: [e.sortable ? 'sorting' : null, t.sortBy === n ? 'sorting_' + (t.sortDesc ? 'desc' : 'asc') : '', e.class ? e.class : null],
              domProps: {innerHTML: t._s(e.label)},
              on: {click: function (i) {t.headClick(e, n)}}
            })
          }))]), i('tbody', t._l(t._items, function (e, n) {
            return i('tr', {
              key: t.items_key,
              class: [e.state ? 'table-' + e.state : null],
              on: {click: function (i) {t.rowClicked(e, n)}}
            }, t._l(t.fields, function (s, r) {
              return i('td', {class: [s.class ? s.class : null]}, [t._t(r, [t._v(t._s(e[r]))], {
                value: e[r],
                item: e,
                index: n
              })], 2)
            }))
          }))])
        },
        staticRenderFns: [],
        components: {bPagination: bPagination},
        data: function () {return {sortBy: null, sortDesc: !0}},
        props: {
          items: {type: Array, default: function () {return []}},
          fields: {type: Object, default: function () {}},
          striped: {type: Boolean, default: !1},
          hover: {type: Boolean, default: !1},
          perPage: {type: Number, default: null},
          items_key: {type: String, default: null},
          currentPage: {type: Number, default: 1},
          filter: {type: [String, RegExp, Function], default: null},
          sortCompare: {type: Function, default: null},
          itemsProvider: {type: Function, default: null},
          value: {type: Array, default: function () {return []}}
        },
        computed: {
          _items: function () {
            var t = this
            if (!this.items)return []
            if (this.itemsProvider)return this.itemsProvider(this)
            var e = this.items
            if (this.filter)if (this.filter instanceof Function) e = e.filter(this.filter) else {
              var i
              i = this.filter instanceof RegExp ? this.filter : new RegExp('.*' + this.filter + '.*', 'ig'), e = e.filter(function (t) {
                var e = i.test(toString(t))
                return i.lastIndex = 0, e
              })
            }
            var n = this.sortCompare || defaultSortCompare
            return this.sortBy && (e = e.sort(function (e, i) {
              var s = n(e, i, t.sortBy)
              return t.sortDesc ? s : s * -1
            })), this.$emit('input', e), this.perPage && (e = e.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)), e
          }
        },
        methods: {
          rowClicked: function (t, e) {this.$emit('row-clicked', t, e)},
          headClick: function (t, e) {return t.sortable ? (e === this.sortBy && (this.sortDesc = !this.sortDesc), void(this.sortBy = e)) : void(this.sortBy = null)}
        }
      }, tabs = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', {staticClass: 'tabs'}, [t.bottom ? i('div', {
            ref: 'tabsContainer',
            class: ['tab-content', {'card-block': t.card}]
          }, [t._t('default'), t.tabs && t.tabs.length ? t._e() : t._t('empty')], 2) : t._e(), i('div', {class: {'card-header': t.card}}, [i('ul', {class: ['nav', 'nav-' + t.navStyle, t.card ? 'card-header-' + t.navStyle : null]}, [t._l(t.tabs, function (e, n) {
            return i('li', {staticClass: 'nav-item'}, [e.headHtml ? i('div', {
              class: ['tab-head', {
                small: t.small,
                active: e.localActive,
                disabled: e.disabled
              }], domProps: {innerHTML: t._s(e.headHtml)}
            }) : i('a', {
              class: ['nav-link', {small: t.small, active: e.localActive, disabled: e.disabled}],
              attrs: {href: e.href},
              domProps: {innerHTML: t._s(e.title)},
              on: {click: function (e) {e.preventDefault(), e.stopPropagation(), t.setTab(n)}}
            })])
          }), t._t('tabs')], 2)]), t.bottom ? t._e() : i('div', {
            ref: 'tabsContainer',
            class: ['tab-content', {'card-block': t.card}]
          }, [t._t('default'), t.tabs && t.tabs.length ? t._e() : t._t('empty')], 2)])
        },
        staticRenderFns: [],
        data: function () {return {currentTab: this.value, tabs: []}},
        props: {
          noFade: {type: Boolean, default: !1},
          card: {type: Boolean, default: !1},
          small: {type: Boolean, default: !1},
          value: {type: Number, default: 0},
          pills: {type: Boolean, default: !1},
          lazy: {type: Boolean, default: !1},
          bottom: {type: Boolean, default: !1}
        },
        watch: {
          currentTab: function (t, e) {t !== e && (this.$root.$emit('changed::tab', this, t, this.tabs[t]), this.$emit('input', t), this.tabs[t].$emit('click'))},
          value: function (t, e) {t !== e && this.setTab(t)},
          fade: function (t, e) {
            var i = this
            t !== e && this.tabs.forEach(function (e) {i.$set(e, 'fade', t)})
          }
        },
        computed: {fade: function () {return !this.noFade}, navStyle: function () {return this.pills ? 'pills' : 'tabs'}},
        methods: {
          nextTab: function () {this.setTab(this.currentTab + 1)},
          previousTab: function () {this.setTab(this.currentTab - 1)},
          setTab: function (t, e) {
            if (e || t !== this.currentTab) {
              var i = this.tabs[t]
              i && (i.disabled || (this.tabs[this.currentTab] && this.$set(this.tabs[this.currentTab], 'localActive', !1), this.$set(i, 'localActive', !0), this.currentTab = t))
            }
          },
          updateTabs: function () {
            var t = this
            this.$slots.default ? this.tabs = this.$slots.default.filter(function (t) {return t.componentInstance || !1}).map(function (t) {return t.componentInstance}) : this.tabs = [], this.tabs.forEach(function (e) {t.$set(e, 'fade', t.fade), t.$set(e, 'lazy', t.lazy)})
            var e = this.currentTab
            null !== this.currentTab && void 0 !== this.currentTab || this.tabs.forEach(function (t, i) {t.active && (e = i)}), e > this.tabs.length - 1 && (e = this.tabs.length - 1), this.setTab(e || 0, !0)
          }
        },
        mounted: function () {this.updateTabs(), observeDOM(this.$refs.tabsContainer, this.updateTabs.bind(this), {subtree: !1})}
      }, tab = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('transition', {
            attrs: {mode: 'out-in'},
            on: {enter: t.enter, 'before-leave': t.beforeLeave}
          }, [t.localActive || !t.lazy ? i('div', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: t.localActive || t.lazy,
              expression: 'localActive || lazy'
            }],
            ref: 'panel',
            staticClass: 'tab-pane',
            class: [{show: t.show, fade: t.fade, disabled: t.disabled, active: t.localActive}],
            attrs: {role: 'tabpanel'}
          }, [t._t('default')], 2) : t._e()])
        },
        staticRenderFns: [],
        methods: {enter: function () {this.show = !0}, beforeLeave: function () {this.show = !1}},
        data: function () {return {fade: !1, localActive: !1, lazy: !0, show: !1}},
        props: {
          id: {type: String, default: ''},
          title: {type: String, default: ''},
          headHtml: {type: String, default: null},
          disabled: {type: Boolean, default: !1},
          active: {type: Boolean, default: !1},
          href: {type: String, default: '#'}
        }
      }, tooltip = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e
          return i('div', [i('span', {ref: 'trigger'}, [t._t('default')], 2), i('div', {
            ref: 'popover',
            class: ['tooltip', 'tooltip-' + this.placement],
            style: {opacity: t.showState ? 1 : 0},
            attrs: {tabindex: '-1'},
            on: {focus: function (e) {t.$emit('focus')}, blur: function (e) {t.$emit('blur')}}
          }, [i('div', {staticClass: 'tooltip-inner'}, [t._t('content', [i('span', {domProps: {innerHTML: t._s(t.content || t.title)}})])], 2)])])
        }, staticRenderFns: [], extends: bPopover, props: {triggers: {type: [Boolean, String, Array], default: 'hover'}}
      }, components = Object.freeze({
        bAlert: alert,
        bBreadcrumb: breadcrumb,
        bButton: bBtn,
        bBtn: bBtn,
        bButtonGroup: buttonGroup,
        bInputGroup: inputGroup,
        bInputGroupAddon: bInputGroupAddon,
        bInputGroupButton: inputGroupButton,
        bCard: card,
        bCardGroup: cardGroup,
        bDropdown: dropdown,
        bDropdownItem: dropdownItem,
        bDropdownDivider: dropdownDivider,
        bDropdownHeader: dropdownHeader,
        bDropdownSelect: dropdownSelect,
        bForm: form,
        bFormCheckbox: formCheckbox,
        bFormFieldset: formFieldset,
        bFormFile: formFile,
        bFormRadio: formRadio,
        bFormInput: formInput,
        bFormSelect: formSelect,
        bJumbotron: jumbotron,
        bBadge: badge,
        bMedia: media,
        bModal: modal,
        bNavbar: navbar,
        bPagination: bPagination,
        bPopover: bPopover,
        bProgress: progress,
        bTable: table,
        bTooltip: tooltip,
        bTab: tab,
        bTabs: tabs,
        bNav: nav,
        bNavItem: navItem,
        bNavItemDropdown: navItemDropdown,
        bNavToggle: navToggle,
        bListGroupItem: listGroupItem,
        bListGroup: listGroup,
        bCarouselSlide: carouselSlide,
        bCarousel: carousel,
        bCollapse: collapse,
        bLink: bLink
      }), all_listen_types = {hover: !0, click: !0, focus: !0}, listen_types = {click: !0}, toggle = {
        bind: function (t, e) {
          targets(t, e, listen_types, function (t) {
            var e = t.targets, i = t.vm
            e.forEach(function (t) {i.$root.$emit('collapse::toggle', t)})
          })
        }
      }, listen_types$1 = {click: !0}, modal$1 = {
        bind: function (t, e) {
          targets(t, e, listen_types$1, function (t) {
            var e = t.targets, i = t.vm
            e.forEach(function (t) {i.$root.$emit('show::modal', t)})
          })
        }
      }, directives = Object.freeze({bToggle: toggle, bModal: modal$1}), VuePlugin = {
        install: function (t) {
          if (!t._bootstrap_vue_installed) {
            t._bootstrap_vue_installed = !0
            for (var e in components)t.component(e, components[e]);
            for (var i in directives)t.directive(i, directives[i])
          }
        }
      }
    'undefined' != typeof window && window.Vue && window.Vue.use(VuePlugin)
    /* harmony default export */
    __webpack_exports__['a'] = (VuePlugin)
//# sourceMappingURL=bootstrap-vue.esm.js.map

    /***/
  }),
  /* 36 */,
  /* 37 */,
  /* 38 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /*!
     * vue-i18n v6.1.1
     * (c) 2017 kazuya kawaguchi
     * Released under the MIT License.
     */
    /*  */

    /**
     * utilites
     */

    function warn (msg, err) {
      if (typeof console !== 'undefined') {
        console.warn('[vue-i18n] ' + msg)
        if (err) {
          console.warn(err.stack)
        }
      }
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty

    function hasOwn (obj, key) {
      return hasOwnProperty.call(obj, key)
    }

    function isObject (obj) {
      return obj !== null && typeof obj === 'object'
    }

    var toString = Object.prototype.toString
    var OBJECT_STRING = '[object Object]'

    function isPlainObject (obj) {
      return toString.call(obj) === OBJECT_STRING
    }

    function isNull (val) {
      return val === null || val === undefined
    }

    function parseArgs () {
      var args = [], len = arguments.length
      while (len--) args[len] = arguments[len]

      var locale = null
      var params = null
      if (args.length === 1) {
        if (isObject(args[0]) || Array.isArray(args[0])) {
          params = args[0]
        } else if (typeof args[0] === 'string') {
          locale = args[0]
        }
      } else if (args.length === 2) {
        if (typeof args[0] === 'string') {
          locale = args[0]
        }
        if (isObject(args[1]) || Array.isArray(args[1])) {
          params = args[1]
        }
      }

      return {locale: locale, params: params}
    }

    function getOldChoiceIndexFixed (choice) {
      return choice
        ? choice > 1
          ? 1
          : 0
        : 1
    }

    function getChoiceIndex (choice, choicesLength) {
      choice = Math.abs(choice)

      if (choicesLength === 2) { return getOldChoiceIndexFixed(choice) }

      return choice ? Math.min(choice, 2) : 0
    }

    function fetchChoice (message, choice) {
      if (!message && typeof message !== 'string') { return null }
      var choices = message.split('|')

      choice = getChoiceIndex(choice, choices.length)
      if (!choices[choice]) { return message }
      return choices[choice].trim()
    }

    function looseClone (obj) {
      return JSON.parse(JSON.stringify(obj))
    }

    /*  */

    function extend (Vue) {
      Vue.prototype.$t = function (key) {
        var values = [], len = arguments.length - 1
        while (len-- > 0) values[len] = arguments[len + 1]

        var i18n = this.$i18n
        return i18n._t.apply(i18n, [key, i18n.locale, i18n.messages, this].concat(values))
      }

      Vue.prototype.$tc = function (key, choice) {
        var values = [], len = arguments.length - 2
        while (len-- > 0) values[len] = arguments[len + 2]

        var i18n = this.$i18n
        return i18n._tc.apply(i18n, [key, i18n.locale, i18n.messages, this, choice].concat(values))
      }

      Vue.prototype.$te = function (key, locale) {
        var i18n = this.$i18n
        return i18n._te(key, i18n.locale, i18n.messages, locale)
      }
    }

    /*  */

    var mixin = {
      beforeCreate: function beforeCreate () {
        var this$1 = this

        var options = this.$options
        options.i18n = options.i18n || (options.__i18n ? {} : null)

        if (options.i18n) {
          if (options.i18n instanceof VueI18n) {
            this._i18n = options.i18n
            this._i18nWatcher = this._i18n.watchI18nData(function () { return this$1.$forceUpdate() })
          } else if (isPlainObject(options.i18n)) {
            // component local i18n
            if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
              options.i18n.root = this.$root.$i18n
              options.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn
            }

            // init locale messages via custom blocks
            if (options.__i18n) {
              try {
                options.i18n.messages = JSON.parse(options.__i18n)
              } catch (e) {
                if (false) {
                  warn('Cannot parse locale messages via custom blocks.')
                }
              }
            }

            this._i18n = new VueI18n(options.i18n)
            this._i18nWatcher = this._i18n.watchI18nData(function () { return this$1.$forceUpdate() })

            if (options.i18n.sync === undefined || !!options.i18n.sync) {
              this._localeWatcher = this.$i18n.watchLocale(function () { return this$1.$forceUpdate() })
            }
          } else {
            if (false) {
              warn('Cannot be interpreted \'i18n\' option.')
            }
          }
        } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
          // root i18n
          this._i18n = this.$root.$i18n
          this._i18nWatcher = this._i18n.watchI18nData(function () { return this$1.$forceUpdate() })
        }
      },

      beforeDestroy: function beforeDestroy () {
        if (!this._i18n) { return }

        if (this._i18nWatcher) {
          this._i18n.unwatchI18nData()
          delete this._i18nWatcher
        }

        if (this._localeWatcher) {
          this._i18n.unwatchLocale()
          delete this._localeWatcher
        }

        this._i18n = null
      }
    }

    var Vue

    function install (_Vue) {
      Vue = _Vue

      var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1
      if (false) {
        warn('already installed.')
        return
      }
      install.installed = true

      if (false) {
        warn(('vue-i18n (' + (install.version) + ') need to use Vue 2.0 or later (Vue: ' + (Vue.version) + ').'))
        return
      }

      Object.defineProperty(Vue.prototype, '$i18n', {
        get: function get () { return this._i18n }
      })

      extend(Vue)
      Vue.mixin(mixin)

      // use object-based merge strategy
      var strats = Vue.config.optionMergeStrategies
      strats.i18n = strats.methods
    }

    /*  */

    var BaseFormatter = function BaseFormatter (options) {
      if (options === void 0) options = {}

      this._options = options
    }

    var prototypeAccessors$1 = {options: {}}

    prototypeAccessors$1.options.get = function () { return this._options }

    BaseFormatter.prototype.format = function format (message) {
      var values = [], len = arguments.length - 1
      while (len-- > 0) values[len] = arguments[len + 1]

      return template.apply(void 0, [message].concat(values))
    }

    Object.defineProperties(BaseFormatter.prototype, prototypeAccessors$1)

    /**
     *  String format template
     *  - Inspired:
     *    https://github.com/Matt-Esch/string-template/index.js
     */

    var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g

    /**
     * template
     *
     * @param {String} string
     * @param {Array} ...values
     * @return {String}
     */

    function template (str) {
      var values = [], len = arguments.length - 1
      while (len-- > 0) values[len] = arguments[len + 1]

      if (values.length === 1 && typeof values[0] === 'object') {
        values = values[0]
      } else {
        values = {}
      }

      if (!values || !values.hasOwnProperty) {
        values = {}
      }

      return str.replace(RE_NARGS, function (match, prefix, i, index) {
        var result

        if (str[index - 1] === '{' &&
          str[index + match.length] === '}') {
          return i
        } else {
          result = hasOwn(values, i) ? values[i] : match
          if (isNull(result)) {
            return ''
          }

          return result
        }
      })
    }

    /*  */

    /**
     *  Path paerser
     *  - Inspired:
     *    Vue.js Path parser
     */

// cache
    var pathCache = Object.create(null)

// actions
    var APPEND = 0
    var PUSH = 1
    var INC_SUB_PATH_DEPTH = 2
    var PUSH_SUB_PATH = 3

// states
    var BEFORE_PATH = 0
    var IN_PATH = 1
    var BEFORE_IDENT = 2
    var IN_IDENT = 3
    var IN_SUB_PATH = 4
    var IN_SINGLE_QUOTE = 5
    var IN_DOUBLE_QUOTE = 6
    var AFTER_PATH = 7
    var ERROR = 8

    var pathStateMachine = []

    pathStateMachine[BEFORE_PATH] = {
      'ws': [BEFORE_PATH],
      'ident': [IN_IDENT, APPEND],
      '[': [IN_SUB_PATH],
      'eof': [AFTER_PATH]
    }

    pathStateMachine[IN_PATH] = {
      'ws': [IN_PATH],
      '.': [BEFORE_IDENT],
      '[': [IN_SUB_PATH],
      'eof': [AFTER_PATH]
    }

    pathStateMachine[BEFORE_IDENT] = {
      'ws': [BEFORE_IDENT],
      'ident': [IN_IDENT, APPEND],
      '0': [IN_IDENT, APPEND],
      'number': [IN_IDENT, APPEND]
    }

    pathStateMachine[IN_IDENT] = {
      'ident': [IN_IDENT, APPEND],
      '0': [IN_IDENT, APPEND],
      'number': [IN_IDENT, APPEND],
      'ws': [IN_PATH, PUSH],
      '.': [BEFORE_IDENT, PUSH],
      '[': [IN_SUB_PATH, PUSH],
      'eof': [AFTER_PATH, PUSH]
    }

    pathStateMachine[IN_SUB_PATH] = {
      '\'': [IN_SINGLE_QUOTE, APPEND],
      '"': [IN_DOUBLE_QUOTE, APPEND],
      '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
      ']': [IN_PATH, PUSH_SUB_PATH],
      'eof': ERROR,
      'else': [IN_SUB_PATH, APPEND]
    }

    pathStateMachine[IN_SINGLE_QUOTE] = {
      '\'': [IN_SUB_PATH, APPEND],
      'eof': ERROR,
      'else': [IN_SINGLE_QUOTE, APPEND]
    }

    pathStateMachine[IN_DOUBLE_QUOTE] = {
      '"': [IN_SUB_PATH, APPEND],
      'eof': ERROR,
      'else': [IN_DOUBLE_QUOTE, APPEND]
    }

    /**
     * Check if an expression is a literal value.
     */

    var literalValueRE = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/

    function isLiteral (exp) {
      return literalValueRE.test(exp)
    }

    /**
     * Strip quotes from a string
     */

    function stripQuotes (str) {
      var a = str.charCodeAt(0)
      var b = str.charCodeAt(str.length - 1)
      return a === b && (a === 0x22 || a === 0x27)
        ? str.slice(1, -1)
        : str
    }

    /**
     * Determine the type of a character in a keypath.
     */

    function getPathCharType (ch) {
      if (ch === undefined || ch === null) { return 'eof' }

      var code = ch.charCodeAt(0)

      switch (code) {
        case 0x5B: // [
        case 0x5D: // ]
        case 0x2E: // .
        case 0x22: // "
        case 0x27: // '
        case 0x30: // 0
          return ch

        case 0x5F: // _
        case 0x24: // $
        case 0x2D: // -
          return 'ident'

        case 0x20: // Space
        case 0x09: // Tab
        case 0x0A: // Newline
        case 0x0D: // Return
        case 0xA0:  // No-break space
        case 0xFEFF:  // Byte Order Mark
        case 0x2028:  // Line Separator
        case 0x2029:  // Paragraph Separator
          return 'ws'
      }

      // a-z, A-Z
      if ((code >= 0x61 && code <= 0x7A) || (code >= 0x41 && code <= 0x5A)) {
        return 'ident'
      }

      // 1-9
      if (code >= 0x31 && code <= 0x39) { return 'number' }

      return 'else'
    }

    /**
     * Format a subPath, return its plain form if it is
     * a literal string or number. Otherwise prepend the
     * dynamic indicator (*).
     */

    function formatSubPath (path) {
      var trimmed = path.trim()
      // invalid leading 0
      if (path.charAt(0) === '0' && isNaN(path)) { return false }

      return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
    }

    /**
     * Parse a string path into an array of segments
     */

    function parse (path) {
      var keys = []
      var index = -1
      var mode = BEFORE_PATH
      var subPathDepth = 0
      var c
      var key
      var newChar
      var type
      var transition
      var action
      var typeMap
      var actions = []

      actions[PUSH] = function () {
        if (key !== undefined) {
          keys.push(key)
          key = undefined
        }
      }

      actions[APPEND] = function () {
        if (key === undefined) {
          key = newChar
        } else {
          key += newChar
        }
      }

      actions[INC_SUB_PATH_DEPTH] = function () {
        actions[APPEND]()
        subPathDepth++
      }

      actions[PUSH_SUB_PATH] = function () {
        if (subPathDepth > 0) {
          subPathDepth--
          mode = IN_SUB_PATH
          actions[APPEND]()
        } else {
          subPathDepth = 0
          key = formatSubPath(key)
          if (key === false) {
            return false
          } else {
            actions[PUSH]()
          }
        }
      }

      function maybeUnescapeQuote () {
        var nextChar = path[index + 1]
        if ((mode === IN_SINGLE_QUOTE && nextChar === '\'') ||
          (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
          index++
          newChar = '\\' + nextChar
          actions[APPEND]()
          return true
        }
      }

      while (mode !== null) {
        index++
        c = path[index]

        if (c === '\\' && maybeUnescapeQuote()) {
          continue
        }

        type = getPathCharType(c)
        typeMap = pathStateMachine[mode]
        transition = typeMap[type] || typeMap['else'] || ERROR

        if (transition === ERROR) {
          return // parse error
        }

        mode = transition[0]
        action = actions[transition[1]]
        if (action) {
          newChar = transition[2]
          newChar = newChar === undefined
            ? c
            : newChar
          if (action() === false) {
            return
          }
        }

        if (mode === AFTER_PATH) {
          return keys
        }
      }
    }

    /**
     * External parse that check for a cache hit first
     */

    function parsePath (path) {
      var hit = pathCache[path]
      if (!hit) {
        hit = parse(path)
        if (hit) {
          pathCache[path] = hit
        }
      }
      return hit || []
    }

    function empty (target) {
      if (target === null || target === undefined) { return true }

      if (Array.isArray(target)) {
        if (target.length > 0) { return false }
        if (target.length === 0) { return true }
      } else if (isPlainObject(target)) {
        for (var key in target) {
          if (hasOwn(target, key)) { return false }
        }
      }

      return true
    }

    /**
     * Get path value from path string
     */
    function getPathValue (obj, path) {
      if (!isObject(obj)) { return null }

      var paths = parsePath(path)
      if (empty(paths)) {
        return null
      } else {
        var length = paths.length
        var ret = null
        var last = obj
        var i = 0
        while (i < length) {
          var value = last[paths[i]]
          if (value === undefined) {
            last = null
            break
          }
          last = value
          i++
        }

        ret = last
        return ret
      }
    }

    /*  */

    var VueI18n = function VueI18n (options) {
      if (options === void 0) options = {}

      var locale = options.locale || 'en-US'
      var fallbackLocale = options.fallbackLocale || 'en-US'
      var messages = options.messages || {}
      this._vm = null
      this._formatter = options.formatter || new BaseFormatter()
      this._missing = options.missing || null
      this._root = options.root || null
      this._sync = options.sync === undefined ? true : !!options.sync
      this._fallbackRoot = options.fallbackRoot === undefined
        ? true
        : !!options.fallbackRoot
      this._silentTranslationWarn = options.silentTranslationWarn === undefined
        ? false
        : !!options.silentTranslationWarn

      this._exist = function (message, key) {
        if (!message || !key) { return false }
        return !isNull(getPathValue(message, key))
      }

      this._initVM({locale: locale, fallbackLocale: fallbackLocale, messages: messages})
    }

    var prototypeAccessors = {
      vm: {},
      messages: {},
      locale: {},
      fallbackLocale: {},
      missing: {},
      formatter: {},
      silentTranslationWarn: {}
    }

    VueI18n.prototype._initVM = function _initVM (data) {
      var silent = Vue.config.silent
      Vue.config.silent = true
      this._vm = new Vue({data: data})
      Vue.config.silent = silent
    }

    VueI18n.prototype.watchI18nData = function watchI18nData (fn) {
      this._i18nWatcher = this._vm.$watch('$data', function () {
        fn && fn()
      }, {deep: true})
      return this._i18nWatcher
    }

    VueI18n.prototype.unwatchI18nData = function unwatchI18nData () {
      if (this._i18nWatcher) {
        this._i18nWatcher()
        delete this._i18nWatcher
      }
      return true
    }

    VueI18n.prototype.watchLocale = function watchLocale (fn) {
      if (!this._sync || !this._root) { return null }
      var target = this._vm
      this._watcher = this._root.vm.$watch('locale', function (val) {
        target.$set(target, 'locale', val)
        fn && fn()
      }, {immediate: true})
      return this._watcher
    }

    VueI18n.prototype.unwatchLocale = function unwatchLocale () {
      if (!this._sync || !this._watcher) { return false }
      if (this._watcher) {
        this._watcher()
        delete this._watcher
      }
      return true
    }

    prototypeAccessors.vm.get = function () { return this._vm }

    prototypeAccessors.messages.get = function () { return looseClone(this._vm.messages) }

    prototypeAccessors.locale.get = function () { return this._vm.locale }
    prototypeAccessors.locale.set = function (locale) {
      this._vm.$set(this._vm, 'locale', locale)
    }

    prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale }
    prototypeAccessors.fallbackLocale.set = function (locale) {
      this._vm.$set(this._vm, 'fallbackLocale', locale)
    }

    prototypeAccessors.missing.get = function () { return this._missing }
    prototypeAccessors.missing.set = function (handler) { this._missing = handler }

    prototypeAccessors.formatter.get = function () { return this._formatter }
    prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter }

    prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn }
    prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent }

    VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm) {
      if (!isNull(result)) { return result }
      if (this.missing) {
        this.missing.apply(null, [locale, key, vm])
      } else {
        if (false) {
          warn(
            'Cannot translate the value of keypath \'' + key + '\'. ' +
            'Use the value of keypath as default.'
          )
        }
      }
      return key
    }

    VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
      return !val && !isNull(this._root) && this._fallbackRoot
    }

    VueI18n.prototype._interpolate = function _interpolate (message, key, values) {
      var this$1 = this

      if (!message) { return null }

      var pathRet = getPathValue(message, key)
      if (Array.isArray(pathRet)) { return pathRet }

      var ret
      if (isNull(pathRet)) {
        if (isPlainObject(message)) {
          ret = message[key]
          if (typeof ret !== 'string') {
            if (false) {
              warn(('Value of key \'' + key + '\' is not a string!'))
            }
            return null
          }
        } else {
          return null
        }
      } else {
        if (typeof pathRet === 'string') {
          ret = pathRet
        } else {
          if (false) {
            warn(('Value of key \'' + key + '\' is not a string!'))
          }
          return null
        }
      }

      // Check for the existance of links within the translated string
      if (ret.indexOf('@:') >= 0) {
        // Match all the links within the local
        // We are going to replace each of
        // them with its translation
        var matches = ret.match(/(@:[\w|.]+)/g)
        for (var idx in matches) {
          var link = matches[idx]
          // Remove the leading @:
          var linkPlaceholder = link.substr(2)
          // Translate the link
          var translatedstring = this$1._interpolate(message, linkPlaceholder, values)
          // Replace the link with the translated string
          ret = ret.replace(link, translatedstring)
        }
      }

      return !values ? ret : this._format(ret, values)
    }

    VueI18n.prototype._format = function _format (message) {
      var values = [], len = arguments.length - 1
      while (len-- > 0) values[len] = arguments[len + 1]

      return (ref = this._formatter).format.apply(ref, [message].concat(values))
      var ref
    }

    VueI18n.prototype._translate = function _translate (messages, locale, fallback, key, args) {
      var res = null
      res = this._interpolate(messages[locale], key, args)
      if (!isNull(res)) { return res }

      res = this._interpolate(messages[fallback], key, args)
      if (!isNull(res)) {
        if (false) {
          warn(('Fall back to translate the keypath \'' + key + '\' with \'' + fallback + '\' locale.'))
        }
        return res
      } else {
        return null
      }
    }

    VueI18n.prototype._t = function _t (key, _locale, messages, host) {
      var values = [], len = arguments.length - 4
      while (len-- > 0) values[len] = arguments[len + 4]

      if (!key) { return '' }

      var parsedArgs = parseArgs.apply(void 0, values)
      var locale = parsedArgs.locale || _locale

      var ret = this._translate(messages, locale, this.fallbackLocale, key, parsedArgs.params)
      if (this._isFallbackRoot(ret)) {
        if (false) {
          warn(('Fall back to translate the keypath \'' + key + '\' with root locale.'))
        }
        if (!this._root) { throw Error('unexpected error') }
        return (ref = this._root).t.apply(ref, [key].concat(values))
      } else {
        return this._warnDefault(locale, key, ret, host)
      }
      var ref
    }

    VueI18n.prototype.t = function t (key) {
      var values = [], len = arguments.length - 1
      while (len-- > 0) values[len] = arguments[len + 1]

      return (ref = this)._t.apply(ref, [key, this.locale, this.messages, null].concat(values))
      var ref
    }

    VueI18n.prototype._tc = function _tc (key, _locale, messages, host, choice) {
      var values = [], len = arguments.length - 5
      while (len-- > 0) values[len] = arguments[len + 5]

      if (!key) { return '' }
      if (choice !== undefined) {
        return fetchChoice((ref = this)._t.apply(ref, [key, _locale, messages, host].concat(values)), choice)
      } else {
        return (ref$1 = this)._t.apply(ref$1, [key, _locale, messages, host].concat(values))
      }
      var ref
      var ref$1
    }

    VueI18n.prototype.tc = function tc (key, choice) {
      var values = [], len = arguments.length - 2
      while (len-- > 0) values[len] = arguments[len + 2]

      return (ref = this)._tc.apply(ref, [key, this.locale, this.messages, null, choice].concat(values))
      var ref
    }

    VueI18n.prototype._te = function _te (key, locale, messages) {
      var args = [], len = arguments.length - 3
      while (len-- > 0) args[len] = arguments[len + 3]

      var _locale = parseArgs.apply(void 0, args).locale || locale
      return this._exist(messages[_locale], key)
    }

    VueI18n.prototype.te = function te (key, locale) {
      return this._te(key, this.locale, this.messages, locale)
    }

    VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
      return looseClone(this._vm.messages[locale])
    }

    VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
      this._vm.messages[locale] = message
    }

    VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
      this._vm.messages[locale] = Vue.util.extend(this.getLocaleMessage(locale), message)
    }

    Object.defineProperties(VueI18n.prototype, prototypeAccessors)

    VueI18n.install = install
    VueI18n.version = '6.1.1'

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueI18n)
    }

    /* harmony default export */
    __webpack_exports__['a'] = (VueI18n)

    /***/
  }),
  /* 39 */,
  /* 40 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /* unused harmony export Url */
    /* unused harmony export Http */
    /* unused harmony export Resource */
    /*!
     * vue-resource v1.3.1
     * https://github.com/pagekit/vue-resource
     * Released under the MIT License.
     */

    /**
     * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
     */

    var RESOLVED = 0
    var REJECTED = 1
    var PENDING = 2

    function Promise$1 (executor) {

      this.state = PENDING
      this.value = undefined
      this.deferred = []

      var promise = this

      try {
        executor(function (x) {
          promise.resolve(x)
        }, function (r) {
          promise.reject(r)
        })
      } catch (e) {
        promise.reject(e)
      }
    }

    Promise$1.reject = function (r) {
      return new Promise$1(function (resolve, reject) {
        reject(r)
      })
    }

    Promise$1.resolve = function (x) {
      return new Promise$1(function (resolve, reject) {
        resolve(x)
      })
    }

    Promise$1.all = function all (iterable) {
      return new Promise$1(function (resolve, reject) {
        var count = 0, result = []

        if (iterable.length === 0) {
          resolve(result)
        }

        function resolver (i) {
          return function (x) {
            result[i] = x
            count += 1

            if (count === iterable.length) {
              resolve(result)
            }
          }
        }

        for (var i = 0; i < iterable.length; i += 1) {
          Promise$1.resolve(iterable[i]).then(resolver(i), reject)
        }
      })
    }

    Promise$1.race = function race (iterable) {
      return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
          Promise$1.resolve(iterable[i]).then(resolve, reject)
        }
      })
    }

    var p$1 = Promise$1.prototype

    p$1.resolve = function resolve (x) {
      var promise = this

      if (promise.state === PENDING) {
        if (x === promise) {
          throw new TypeError('Promise settled with itself.')
        }

        var called = false

        try {
          var then = x && x['then']

          if (x !== null && typeof x === 'object' && typeof then === 'function') {
            then.call(x, function (x) {
              if (!called) {
                promise.resolve(x)
              }
              called = true

            }, function (r) {
              if (!called) {
                promise.reject(r)
              }
              called = true
            })
            return
          }
        } catch (e) {
          if (!called) {
            promise.reject(e)
          }
          return
        }

        promise.state = RESOLVED
        promise.value = x
        promise.notify()
      }
    }

    p$1.reject = function reject (reason) {
      var promise = this

      if (promise.state === PENDING) {
        if (reason === promise) {
          throw new TypeError('Promise settled with itself.')
        }

        promise.state = REJECTED
        promise.value = reason
        promise.notify()
      }
    }

    p$1.notify = function notify () {
      var promise = this

      nextTick(function () {
        if (promise.state !== PENDING) {
          while (promise.deferred.length) {
            var deferred = promise.deferred.shift(),
              onResolved = deferred[0],
              onRejected = deferred[1],
              resolve = deferred[2],
              reject = deferred[3]

            try {
              if (promise.state === RESOLVED) {
                if (typeof onResolved === 'function') {
                  resolve(onResolved.call(undefined, promise.value))
                } else {
                  resolve(promise.value)
                }
              } else if (promise.state === REJECTED) {
                if (typeof onRejected === 'function') {
                  resolve(onRejected.call(undefined, promise.value))
                } else {
                  reject(promise.value)
                }
              }
            } catch (e) {
              reject(e)
            }
          }
        }
      })
    }

    p$1.then = function then (onResolved, onRejected) {
      var promise = this

      return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject])
        promise.notify()
      })
    }

    p$1.catch = function (onRejected) {
      return this.then(undefined, onRejected)
    }

    /**
     * Promise adapter.
     */

    if (typeof Promise === 'undefined') {
      window.Promise = Promise$1
    }

    function PromiseObj (executor, context) {

      if (executor instanceof Promise) {
        this.promise = executor
      } else {
        this.promise = new Promise(executor.bind(context))
      }

      this.context = context
    }

    PromiseObj.all = function (iterable, context) {
      return new PromiseObj(Promise.all(iterable), context)
    }

    PromiseObj.resolve = function (value, context) {
      return new PromiseObj(Promise.resolve(value), context)
    }

    PromiseObj.reject = function (reason, context) {
      return new PromiseObj(Promise.reject(reason), context)
    }

    PromiseObj.race = function (iterable, context) {
      return new PromiseObj(Promise.race(iterable), context)
    }

    var p = PromiseObj.prototype

    p.bind = function (context) {
      this.context = context
      return this
    }

    p.then = function (fulfilled, rejected) {

      if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context)
      }

      if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context)
      }

      return new PromiseObj(this.promise.then(fulfilled, rejected), this.context)
    }

    p.catch = function (rejected) {

      if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context)
      }

      return new PromiseObj(this.promise.catch(rejected), this.context)
    }

    p.finally = function (callback) {

      return this.then(function (value) {
          callback.call(this)
          return value
        }, function (reason) {
          callback.call(this)
          return Promise.reject(reason)
        }
      )
    }

    /**
     * Utility functions.
     */

    var ref = {}
    var hasOwnProperty = ref.hasOwnProperty

    var ref$1 = []
    var slice = ref$1.slice
    var debug = false
    var ntick

    var inBrowser = typeof window !== 'undefined'

    var Util = function (ref) {
      var config = ref.config
      var nextTick = ref.nextTick

      ntick = nextTick
      debug = config.debug || !config.silent
    }

    function warn (msg) {
      if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg)
      }
    }

    function error (msg) {
      if (typeof console !== 'undefined') {
        console.error(msg)
      }
    }

    function nextTick (cb, ctx) {
      return ntick(cb, ctx)
    }

    function trim (str) {
      return str ? str.replace(/^\s*|\s*$/g, '') : ''
    }

    function toLower (str) {
      return str ? str.toLowerCase() : ''
    }

    function toUpper (str) {
      return str ? str.toUpperCase() : ''
    }

    var isArray = Array.isArray

    function isString (val) {
      return typeof val === 'string'
    }

    function isFunction (val) {
      return typeof val === 'function'
    }

    function isObject (obj) {
      return obj !== null && typeof obj === 'object'
    }

    function isPlainObject (obj) {
      return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype
    }

    function isBlob (obj) {
      return typeof Blob !== 'undefined' && obj instanceof Blob
    }

    function isFormData (obj) {
      return typeof FormData !== 'undefined' && obj instanceof FormData
    }

    function when (value, fulfilled, rejected) {

      var promise = PromiseObj.resolve(value)

      if (arguments.length < 2) {
        return promise
      }

      return promise.then(fulfilled, rejected)
    }

    function options (fn, obj, opts) {

      opts = opts || {}

      if (isFunction(opts)) {
        opts = opts.call(obj)
      }

      return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts})
    }

    function each (obj, iterator) {

      var i, key

      if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
          iterator.call(obj[i], obj[i], i)
        }
      } else if (isObject(obj)) {
        for (key in obj) {
          if (hasOwnProperty.call(obj, key)) {
            iterator.call(obj[key], obj[key], key)
          }
        }
      }

      return obj
    }

    var assign = Object.assign || _assign

    function merge (target) {

      var args = slice.call(arguments, 1)

      args.forEach(function (source) {
        _merge(target, source, true)
      })

      return target
    }

    function defaults (target) {

      var args = slice.call(arguments, 1)

      args.forEach(function (source) {

        for (var key in source) {
          if (target[key] === undefined) {
            target[key] = source[key]
          }
        }

      })

      return target
    }

    function _assign (target) {

      var args = slice.call(arguments, 1)

      args.forEach(function (source) {
        _merge(target, source)
      })

      return target
    }

    function _merge (target, source, deep) {
      for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
          if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
            target[key] = {}
          }
          if (isArray(source[key]) && !isArray(target[key])) {
            target[key] = []
          }
          _merge(target[key], source[key], deep)
        } else if (source[key] !== undefined) {
          target[key] = source[key]
        }
      }
    }

    /**
     * Root Prefix Transform.
     */

    var root = function (options$$1, next) {

      var url = next(options$$1)

      if (isString(options$$1.root) && !url.match(/^(https?:)?\//)) {
        url = options$$1.root + '/' + url
      }

      return url
    }

    /**
     * Query Parameter Transform.
     */

    var query = function (options$$1, next) {

      var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1)

      each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
          query[key] = value
        }
      })

      query = Url.params(query)

      if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query
      }

      return url
    }

    /**
     * URL Template v2.0.6 (https://github.com/bramstein/url-template)
     */

    function expand (url, params, variables) {

      var tmpl = parse(url), expanded = tmpl.expand(params)

      if (variables) {
        variables.push.apply(variables, tmpl.vars)
      }

      return expanded
    }

    function parse (template) {

      var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = []

      return {
        vars: variables,
        expand: function expand (context) {
          return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
            if (expression) {

              var operator = null, values = []

              if (operators.indexOf(expression.charAt(0)) !== -1) {
                operator = expression.charAt(0)
                expression = expression.substr(1)
              }

              expression.split(/,/g).forEach(function (variable) {
                var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable)
                values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]))
                variables.push(tmp[1])
              })

              if (operator && operator !== '+') {

                var separator = ','

                if (operator === '?') {
                  separator = '&'
                } else if (operator !== '#') {
                  separator = operator
                }

                return (values.length !== 0 ? operator : '') + values.join(separator)
              } else {
                return values.join(',')
              }

            } else {
              return encodeReserved(literal)
            }
          })
        }
      }
    }

    function getValues (context, operator, key, modifier) {

      var value = context[key], result = []

      if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          value = value.toString()

          if (modifier && modifier !== '*') {
            value = value.substring(0, parseInt(modifier, 10))
          }

          result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null))
        } else {
          if (modifier === '*') {
            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null))
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  result.push(encodeValue(operator, value[k], k))
                }
              })
            }
          } else {
            var tmp = []

            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                tmp.push(encodeValue(operator, value))
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  tmp.push(encodeURIComponent(k))
                  tmp.push(encodeValue(operator, value[k].toString()))
                }
              })
            }

            if (isKeyOperator(operator)) {
              result.push(encodeURIComponent(key) + '=' + tmp.join(','))
            } else if (tmp.length !== 0) {
              result.push(tmp.join(','))
            }
          }
        }
      } else {
        if (operator === ';') {
          result.push(encodeURIComponent(key))
        } else if (value === '' && (operator === '&' || operator === '?')) {
          result.push(encodeURIComponent(key) + '=')
        } else if (value === '') {
          result.push('')
        }
      }

      return result
    }

    function isDefined (value) {
      return value !== undefined && value !== null
    }

    function isKeyOperator (operator) {
      return operator === ';' || operator === '&' || operator === '?'
    }

    function encodeValue (operator, value, key) {

      value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value)

      if (key) {
        return encodeURIComponent(key) + '=' + value
      } else {
        return value
      }
    }

    function encodeReserved (str) {
      return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
          part = encodeURI(part)
        }
        return part
      }).join('')
    }

    /**
     * URL Template (RFC 6570) Transform.
     */

    var template = function (options) {

      var variables = [], url = expand(options.url, options.params, variables)

      variables.forEach(function (key) {
        delete options.params[key]
      })

      return url
    }

    /**
     * Service for URL templating.
     */

    function Url (url, params) {

      var self = this || {}, options$$1 = url, transform

      if (isString(url)) {
        options$$1 = {url: url, params: params}
      }

      options$$1 = merge({}, Url.options, self.$options, options$$1)

      Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
          handler = Url.transform[handler]
        }

        if (isFunction(handler)) {
          transform = factory(handler, transform, self.$vm)
        }

      })

      return transform(options$$1)
    }

    /**
     * Url options.
     */

    Url.options = {
      url: '',
      root: null,
      params: {}
    }

    /**
     * Url transforms.
     */

    Url.transform = {template: template, query: query, root: root}
    Url.transforms = ['template', 'query', 'root']

    /**
     * Encodes a Url parameter string.
     *
     * @param {Object} obj
     */

    Url.params = function (obj) {

      var params = [], escape = encodeURIComponent

      params.add = function (key, value) {

        if (isFunction(value)) {
          value = value()
        }

        if (value === null) {
          value = ''
        }

        this.push(escape(key) + '=' + escape(value))
      }

      serialize(params, obj)

      return params.join('&').replace(/%20/g, '+')
    }

    /**
     * Parse a URL and return its components.
     *
     * @param {String} url
     */

    Url.parse = function (url) {

      var el = document.createElement('a')

      if (document.documentMode) {
        el.href = url
        url = el.href
      }

      el.href = url

      return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
      }
    }

    function factory (handler, next, vm) {
      return function (options$$1) {
        return handler.call(vm, options$$1, next)
      }
    }

    function serialize (params, obj, scope) {

      var array = isArray(obj), plain = isPlainObject(obj), hash

      each(obj, function (value, key) {

        hash = isObject(value) || isArray(value)

        if (scope) {
          key = scope + '[' + (plain || hash ? key : '') + ']'
        }

        if (!scope && array) {
          params.add(value.name, value.value)
        } else if (hash) {
          serialize(params, value, key)
        } else {
          params.add(key, value)
        }
      })
    }

    /**
     * XDomain client (Internet Explorer).
     */

    var xdrClient = function (request) {
      return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
          var type = ref.type

          var status = 0

          if (type === 'load') {
            status = 200
          } else if (type === 'error') {
            status = 500
          }

          resolve(request.respondWith(xdr.responseText, {status: status}))
        }

        request.abort = function () { return xdr.abort() }

        xdr.open(request.method, request.getUrl())

        if (request.timeout) {
          xdr.timeout = request.timeout
        }

        xdr.onload = handler
        xdr.onabort = handler
        xdr.onerror = handler
        xdr.ontimeout = handler
        xdr.onprogress = function () {}
        xdr.send(request.getBody())
      })
    }

    /**
     * CORS Interceptor.
     */

    var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest()

    var cors = function (request, next) {

      if (inBrowser) {

        var orgUrl = Url.parse(location.href)
        var reqUrl = Url.parse(request.getUrl())

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

          request.crossOrigin = true
          request.emulateHTTP = false

          if (!SUPPORTS_CORS) {
            request.client = xdrClient
          }
        }
      }

      next()
    }

    /**
     * Body Interceptor.
     */

    var body = function (request, next) {

      if (isFormData(request.body)) {

        request.headers.delete('Content-Type')

      } else if (isObject(request.body) || isArray(request.body)) {

        if (request.emulateJSON) {
          request.body = Url.params(request.body)
          request.headers.set('Content-Type', 'application/x-www-form-urlencoded')
        } else {
          request.body = JSON.stringify(request.body)
        }
      }

      next(function (response) {

        Object.defineProperty(response, 'data', {

          get: function get () {
            return this.body
          },

          set: function set (body) {
            this.body = body
          }

        })

        return response.bodyText ? when(response.text(), function (text) {

          var type = response.headers.get('Content-Type') || ''

          if (type.indexOf('application/json') === 0 || isJson(text)) {

            try {
              response.body = JSON.parse(text)
            } catch (e) {
              response.body = null
            }

          } else {
            response.body = text
          }

          return response

        }) : response

      })
    }

    function isJson (str) {

      var start = str.match(/^\[|^\{(?!\{)/), end = {'[': /]$/, '{': /}$/}

      return start && end[start[0]].test(str)
    }

    /**
     * JSONP client (Browser).
     */

    var jsonpClient = function (request) {
      return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback',
          callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler,
          script

        handler = function (ref) {
          var type = ref.type

          var status = 0

          if (type === 'load' && body !== null) {
            status = 200
          } else if (type === 'error') {
            status = 500
          }

          if (status && window[callback]) {
            delete window[callback]
            document.body.removeChild(script)
          }

          resolve(request.respondWith(body, {status: status}))
        }

        window[callback] = function (result) {
          body = JSON.stringify(result)
        }

        request.abort = function () {
          handler({type: 'abort'})
        }

        request.params[name] = callback

        if (request.timeout) {
          setTimeout(request.abort, request.timeout)
        }

        script = document.createElement('script')
        script.src = request.getUrl()
        script.type = 'text/javascript'
        script.async = true
        script.onload = handler
        script.onerror = handler

        document.body.appendChild(script)
      })
    }

    /**
     * JSONP Interceptor.
     */

    var jsonp = function (request, next) {

      if (request.method == 'JSONP') {
        request.client = jsonpClient
      }

      next()
    }

    /**
     * Before Interceptor.
     */

    var before = function (request, next) {

      if (isFunction(request.before)) {
        request.before.call(this, request)
      }

      next()
    }

    /**
     * HTTP method override Interceptor.
     */

    var method = function (request, next) {

      if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method)
        request.method = 'POST'
      }

      next()
    }

    /**
     * Header Interceptor.
     */

    var header = function (request, next) {

      var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
      )

      each(headers, function (value, name) {
        if (!request.headers.has(name)) {
          request.headers.set(name, value)
        }
      })

      next()
    }

    /**
     * XMLHttp client (Browser).
     */

    var xhrClient = function (request) {
      return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

          var response = request.respondWith(
            'response' in xhr ? xhr.response : xhr.responseText, {
              status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
              statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
            }
          )

          each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
            response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1))
          })

          resolve(response)
        }

        request.abort = function () { return xhr.abort() }

        if (request.progress) {
          if (request.method === 'GET') {
            xhr.addEventListener('progress', request.progress)
          } else if (/^(POST|PUT)$/i.test(request.method)) {
            xhr.upload.addEventListener('progress', request.progress)
          }
        }

        xhr.open(request.method, request.getUrl(), true)

        if (request.timeout) {
          xhr.timeout = request.timeout
        }

        if (request.responseType && 'responseType' in xhr) {
          xhr.responseType = request.responseType
        }

        if (request.withCredentials || request.credentials) {
          xhr.withCredentials = true
        }

        if (!request.crossOrigin) {
          request.headers.set('X-Requested-With', 'XMLHttpRequest')
        }

        request.headers.forEach(function (value, name) {
          xhr.setRequestHeader(name, value)
        })

        xhr.onload = handler
        xhr.onabort = handler
        xhr.onerror = handler
        xhr.ontimeout = handler
        xhr.send(request.getBody())
      })
    }

    /**
     * Http client (Node).
     */

    var nodeClient = function (request) {

      var client = __webpack_require__(110)

      return new PromiseObj(function (resolve) {

        var url = request.getUrl()
        var body = request.getBody()
        var method = request.method
        var headers = {}, handler

        request.headers.forEach(function (value, name) {
          headers[name] = value
        })

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

          var response = request.respondWith(resp.body, {
              status: resp.statusCode,
              statusText: trim(resp.statusMessage)
            }
          )

          each(resp.headers, function (value, name) {
            response.headers.set(name, value)
          })

          resolve(response)

        }, function (error$$1) { return handler(error$$1.response) })
      })
    }

    /**
     * Base client.
     */

    var Client = function (context) {

      var reqHandlers = [sendRequest], resHandlers = [], handler

      if (!isObject(context)) {
        context = null
      }

      function Client (request) {
        return new PromiseObj(function (resolve) {

          function exec () {

            handler = reqHandlers.pop()

            if (isFunction(handler)) {
              handler.call(context, request, next)
            } else {
              warn(('Invalid interceptor of type ' + (typeof handler) + ', must be a function'))
              next()
            }
          }

          function next (response) {

            if (isFunction(response)) {

              resHandlers.unshift(response)

            } else if (isObject(response)) {

              resHandlers.forEach(function (handler) {
                response = when(response, function (response) {
                  return handler.call(context, response) || response
                })
              })

              when(response, resolve)

              return
            }

            exec()
          }

          exec()

        }, context)
      }

      Client.use = function (handler) {
        reqHandlers.push(handler)
      }

      return Client
    }

    function sendRequest (request, resolve) {

      var client = request.client || (inBrowser ? xhrClient : nodeClient)

      resolve(client(request))
    }

    /**
     * HTTP Headers.
     */

    var Headers = function Headers (headers) {
      var this$1 = this

      this.map = {}

      each(headers, function (value, name) { return this$1.append(name, value) })
    }

    Headers.prototype.has = function has (name) {
      return getName(this.map, name) !== null
    }

    Headers.prototype.get = function get (name) {

      var list = this.map[getName(this.map, name)]

      return list ? list.join() : null
    }

    Headers.prototype.getAll = function getAll (name) {
      return this.map[getName(this.map, name)] || []
    }

    Headers.prototype.set = function set (name, value) {
      this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)]
    }

    Headers.prototype.append = function append (name, value) {

      var list = this.map[getName(this.map, name)]

      if (list) {
        list.push(trim(value))
      } else {
        this.set(name, value)
      }
    }

    Headers.prototype.delete = function delete$1 (name) {
      delete this.map[getName(this.map, name)]
    }

    Headers.prototype.deleteAll = function deleteAll () {
      this.map = {}
    }

    Headers.prototype.forEach = function forEach (callback, thisArg) {
      var this$1 = this

      each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1) })
      })
    }

    function getName (map, name) {
      return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev
      }, null)
    }

    function normalizeName (name) {

      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name')
      }

      return trim(name)
    }

    /**
     * HTTP Response.
     */

    var Response = function Response (body, ref) {
      var url = ref.url
      var headers = ref.headers
      var status = ref.status
      var statusText = ref.statusText

      this.url = url
      this.ok = status >= 200 && status < 300
      this.status = status || 0
      this.statusText = statusText || ''
      this.headers = new Headers(headers)
      this.body = body

      if (isString(body)) {

        this.bodyText = body

      } else if (isBlob(body)) {

        this.bodyBlob = body

        if (isBlobText(body)) {
          this.bodyText = blobText(body)
        }
      }
    }

    Response.prototype.blob = function blob () {
      return when(this.bodyBlob)
    }

    Response.prototype.text = function text () {
      return when(this.bodyText)
    }

    Response.prototype.json = function json () {
      return when(this.text(), function (text) { return JSON.parse(text) })
    }

    function blobText (body) {
      return new PromiseObj(function (resolve) {

        var reader = new FileReader()

        reader.readAsText(body)
        reader.onload = function () {
          resolve(reader.result)
        }

      })
    }

    function isBlobText (body) {
      return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1
    }

    /**
     * HTTP Request.
     */

    var Request = function Request (options$$1) {

      this.body = null
      this.params = {}

      assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
      })

      if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers)
      }
    }

    Request.prototype.getUrl = function getUrl () {
      return Url(this)
    }

    Request.prototype.getBody = function getBody () {
      return this.body
    }

    Request.prototype.respondWith = function respondWith (body, options$$1) {
      return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}))
    }

    /**
     * Service for sending network requests.
     */

    var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'}
    var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'}

    function Http (options$$1) {

      var self = this || {}, client = Client(self.$vm)

      defaults(options$$1 || {}, self.$options, Http.options)

      Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
          handler = Http.interceptor[handler]
        }

        if (isFunction(handler)) {
          client.use(handler)
        }

      })

      return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response)

      }, function (response) {

        if (response instanceof Error) {
          error(response)
        }

        return PromiseObj.reject(response)
      })
    }

    Http.options = {}

    Http.headers = {
      put: JSON_CONTENT_TYPE,
      post: JSON_CONTENT_TYPE,
      patch: JSON_CONTENT_TYPE,
      delete: JSON_CONTENT_TYPE,
      common: COMMON_HEADERS,
      custom: {}
    }

    Http.interceptor = {before: before, method: method, body: body, jsonp: jsonp, header: header, cors: cors}
    Http.interceptors = ['before', 'method', 'body', 'jsonp', 'header', 'cors'];

    ['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

      Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}))
      }

    });

    ['post', 'put', 'patch'].forEach(function (method$$1) {

      Http[method$$1] = function (url, body$$1, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body$$1}))
      }

    })

    /**
     * Service for interacting with RESTful services.
     */

    function Resource (url, params, actions, options$$1) {

      var self = this || {}, resource = {}

      actions = assign({},
        Resource.actions,
        actions
      )

      each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action)

        resource[name] = function () {
          return (self.$http || Http)(opts(action, arguments))
        }
      })

      return resource
    }

    function opts (action, args) {

      var options$$1 = assign({}, action), params = {}, body

      switch (args.length) {

        case 2:

          params = args[0]
          body = args[1]

          break

        case 1:

          if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
            body = args[0]
          } else {
            params = args[0]
          }

          break

        case 0:

          break

        default:

          throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments'
      }

      options$$1.body = body
      options$$1.params = assign({}, options$$1.params, params)

      return options$$1
    }

    Resource.actions = {

      get: {method: 'GET'},
      save: {method: 'POST'},
      query: {method: 'GET'},
      update: {method: 'PUT'},
      remove: {method: 'DELETE'},
      delete: {method: 'DELETE'}

    }

    /**
     * Install plugin.
     */

    function plugin (Vue) {

      if (plugin.installed) {
        return
      }

      Util(Vue)

      Vue.url = Url
      Vue.http = Http
      Vue.resource = Resource
      Vue.Promise = PromiseObj

      Object.defineProperties(Vue.prototype, {

        $url: {
          get: function get () {
            return options(Vue.url, this, this.$options.url)
          }
        },

        $http: {
          get: function get () {
            return options(Vue.http, this, this.$options.http)
          }
        },

        $resource: {
          get: function get () {
            return Vue.resource.bind(this)
          }
        },

        $promise: {
          get: function get () {
            var this$1 = this

            return function (executor) { return new Vue.Promise(executor, this$1) }
          }
        }

      })
    }

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(plugin)
    }

    /* harmony default export */
    __webpack_exports__['a'] = (plugin)

    /***/
  }),
  /* 41 */,
  /* 42 */,
  /* 43 */,
  /* 44 */,
  /* 45 */,
  /* 46 */,
  /* 47 */,
  /* 48 */,
  /* 49 */,
  /* 50 */,
  /* 51 */,
  /* 52 */
  /***/ (function (module, exports, __webpack_require__) {

    module.exports = {'default': __webpack_require__(53), __esModule: true}

    /***/
  }),
  /* 53 */
  /***/ (function (module, exports, __webpack_require__) {

    __webpack_require__(82)
    __webpack_require__(84)
    __webpack_require__(85)
    __webpack_require__(83)
    module.exports = __webpack_require__(5).Promise

    /***/
  }),
  /* 54 */
  /***/ (function (module, exports) {

    module.exports = function () { /* empty */ }

    /***/
  }),
  /* 55 */
  /***/ (function (module, exports) {

    module.exports = function (it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
        throw TypeError(name + ': incorrect invocation!')
      }
      return it
    }

    /***/
  }),
  /* 56 */
  /***/ (function (module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
    var toIObject = __webpack_require__(20)
      , toLength = __webpack_require__(31)
      , toIndex = __webpack_require__(77)
    module.exports = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIObject($this)
          , length = toLength(O.length)
          , index = toIndex(fromIndex, length)
          , value
        // Array#includes uses SameValueZero equality algorithm
        if (IS_INCLUDES && el != el)while (length > index) {
          value = O[index++]
          if (value != value)return true
          // Array#toIndex ignores holes, Array#includes - not
        } else for (; length > index; index++)if (IS_INCLUDES || index in O) {
          if (O[index] === el)return IS_INCLUDES || index || 0
        }
        return !IS_INCLUDES && -1
      }
    }

    /***/
  }),
  /* 57 */
  /***/ (function (module, exports, __webpack_require__) {

    var ctx = __webpack_require__(9)
      , call = __webpack_require__(62)
      , isArrayIter = __webpack_require__(61)
      , anObject = __webpack_require__(3)
      , toLength = __webpack_require__(31)
      , getIterFn = __webpack_require__(80)
      , BREAK = {}
      , RETURN = {}
    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () { return iterable } : getIterFn(iterable)
        , f = ctx(fn, that, entries ? 2 : 1)
        , index = 0
        , length, step, iterator, result
      if (typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!')
      // fast case for arrays with default iterator
      if (isArrayIter(iterFn))for (length = toLength(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index])
        if (result === BREAK || result === RETURN)return result
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = call(iterator, f, step.value, entries)
        if (result === BREAK || result === RETURN)return result
      }
    }
    exports.BREAK = BREAK
    exports.RETURN = RETURN

    /***/
  }),
  /* 58 */
  /***/ (function (module, exports, __webpack_require__) {

    module.exports = !__webpack_require__(6) && !__webpack_require__(24)(function () {
        return Object.defineProperty(__webpack_require__(16)('div'), 'a', {get: function () { return 7 }}).a != 7
      })

    /***/
  }),
  /* 59 */
  /***/ (function (module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
    module.exports = function (fn, args, that) {
      var un = that === undefined
      switch (args.length) {
        case 0:
          return un ? fn()
            : fn.call(that)
        case 1:
          return un ? fn(args[0])
            : fn.call(that, args[0])
        case 2:
          return un ? fn(args[0], args[1])
            : fn.call(that, args[0], args[1])
        case 3:
          return un ? fn(args[0], args[1], args[2])
            : fn.call(that, args[0], args[1], args[2])
        case 4:
          return un ? fn(args[0], args[1], args[2], args[3])
            : fn.call(that, args[0], args[1], args[2], args[3])
      }
      return fn.apply(that, args)
    }

    /***/
  }),
  /* 60 */
  /***/ (function (module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = __webpack_require__(8)
    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it)
    }

    /***/
  }),
  /* 61 */
  /***/ (function (module, exports, __webpack_require__) {

// check on default Array iterator
    var Iterators = __webpack_require__(7)
      , ITERATOR = __webpack_require__(0)('iterator')
      , ArrayProto = Array.prototype

    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it)
    }

    /***/
  }),
  /* 62 */
  /***/ (function (module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
    var anObject = __webpack_require__(3)
    module.exports = function (iterator, fn, value, entries) {
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value)
        // 7.4.6 IteratorClose(iterator, completion)
      } catch (e) {
        var ret = iterator['return']
        if (ret !== undefined) anObject(ret.call(iterator))
        throw e
      }
    }

    /***/
  }),
  /* 63 */
  /***/ (function (module, exports, __webpack_require__) {

    'use strict'

    var create = __webpack_require__(67)
      , descriptor = __webpack_require__(28)
      , setToStringTag = __webpack_require__(17)
      , IteratorPrototype = {}

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    __webpack_require__(4)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this })

    module.exports = function (Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)})
      setToStringTag(Constructor, NAME + ' Iterator')
    }

    /***/
  }),
  /* 64 */
  /***/ (function (module, exports, __webpack_require__) {

    var ITERATOR = __webpack_require__(0)('iterator')
      , SAFE_CLOSING = false

    try {
      var riter = [7][ITERATOR]()
      riter['return'] = function () { SAFE_CLOSING = true }
      Array.from(riter, function () { throw 2 })
    } catch (e) { /* empty */ }

    module.exports = function (exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING)return false
      var safe = false
      try {
        var arr = [7]
          , iter = arr[ITERATOR]()
        iter.next = function () { return {done: safe = true} }
        arr[ITERATOR] = function () { return iter }
        exec(arr)
      } catch (e) { /* empty */ }
      return safe
    }

    /***/
  }),
  /* 65 */
  /***/ (function (module, exports) {

    module.exports = function (done, value) {
      return {value: value, done: !!done}
    }

    /***/
  }),
  /* 66 */
  /***/ (function (module, exports, __webpack_require__) {

    var global = __webpack_require__(1)
      , macrotask = __webpack_require__(30).set
      , Observer = global.MutationObserver || global.WebKitMutationObserver
      , process = global.process
      , Promise = global.Promise
      , isNode = __webpack_require__(8)(process) == 'process'

    module.exports = function () {
      var head, last, notify

      var flush = function () {
        var parent, fn
        if (isNode && (parent = process.domain)) parent.exit()
        while (head) {
          fn = head.fn
          head = head.next
          try {
            fn()
          } catch (e) {
            if (head) notify()
            else last = undefined
            throw e
          }
        }
        last = undefined
        if (parent) parent.enter()
      }

      // Node.js
      if (isNode) {
        notify = function () {
          process.nextTick(flush)
        }
        // browsers with MutationObserver
      } else if (Observer) {
        var toggle = true
          , node = document.createTextNode('')
        new Observer(flush).observe(node, {characterData: true}) // eslint-disable-line no-new
        notify = function () {
          node.data = toggle = !toggle
        }
        // environments with maybe non-completely correct, but existent Promise
      } else if (Promise && Promise.resolve) {
        var promise = Promise.resolve()
        notify = function () {
          promise.then(flush)
        }
        // for other environments - macrotask based on:
        // - setImmediate
        // - MessageChannel
        // - window.postMessag
        // - onreadystatechange
        // - setTimeout
      } else {
        notify = function () {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(global, flush)
        }
      }

      return function (fn) {
        var task = {fn: fn, next: undefined}
        if (last) last.next = task
        if (!head) {
          head = task
          notify()
        }
        last = task
      }
    }

    /***/
  }),
  /* 67 */
  /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    var anObject = __webpack_require__(3)
      , dPs = __webpack_require__(68)
      , enumBugKeys = __webpack_require__(22)
      , IE_PROTO = __webpack_require__(18)('IE_PROTO')
      , Empty = function () { /* empty */ }
      , PROTOTYPE = 'prototype'

// Create object with fake `null` prototype: use iframe Object with cleared prototype
    var createDict = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = __webpack_require__(16)('iframe')
        , i = enumBugKeys.length
        , lt = '<'
        , gt = '>'
        , iframeDocument
      iframe.style.display = 'none'
      __webpack_require__(25).appendChild(iframe)
      iframe.src = 'javascript:' // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);
      iframeDocument = iframe.contentWindow.document
      iframeDocument.open()
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt)
      iframeDocument.close()
      createDict = iframeDocument.F
      while (i--)delete createDict[PROTOTYPE][enumBugKeys[i]]
      return createDict()
    }

    module.exports = Object.create || function create (O, Properties) {
        var result
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O)
          result = new Empty
          Empty[PROTOTYPE] = null
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O
        } else result = createDict()
        return Properties === undefined ? result : dPs(result, Properties)
      }

    /***/
  }),
  /* 68 */
  /***/ (function (module, exports, __webpack_require__) {

    var dP = __webpack_require__(12)
      , anObject = __webpack_require__(3)
      , getKeys = __webpack_require__(71)

    module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties (O, Properties) {
      anObject(O)
      var keys = getKeys(Properties)
        , length = keys.length
        , i = 0
        , P
      while (length > i)dP.f(O, P = keys[i++], Properties[P])
      return O
    }

    /***/
  }),
  /* 69 */
  /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    var has = __webpack_require__(10)
      , toObject = __webpack_require__(78)
      , IE_PROTO = __webpack_require__(18)('IE_PROTO')
      , ObjectProto = Object.prototype

    module.exports = Object.getPrototypeOf || function (O) {
        O = toObject(O)
        if (has(O, IE_PROTO))return O[IE_PROTO]
        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype
        }
        return O instanceof Object ? ObjectProto : null
      }

    /***/
  }),
  /* 70 */
  /***/ (function (module, exports, __webpack_require__) {

    var has = __webpack_require__(10)
      , toIObject = __webpack_require__(20)
      , arrayIndexOf = __webpack_require__(56)(false)
      , IE_PROTO = __webpack_require__(18)('IE_PROTO')

    module.exports = function (object, names) {
      var O = toIObject(object)
        , i = 0
        , result = []
        , key
      for (key in O)if (key != IE_PROTO) has(O, key) && result.push(key)
      // Don't enum bug & hidden keys
      while (names.length > i)if (has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key)
      }
      return result
    }

    /***/
  }),
  /* 71 */
  /***/ (function (module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys = __webpack_require__(70)
      , enumBugKeys = __webpack_require__(22)

    module.exports = Object.keys || function keys (O) {
        return $keys(O, enumBugKeys)
      }

    /***/
  }),
  /* 72 */
  /***/ (function (module, exports, __webpack_require__) {

    var hide = __webpack_require__(4)
    module.exports = function (target, src, safe) {
      for (var key in src) {
        if (safe && target[key]) target[key] = src[key]
        else hide(target, key, src[key])
      }
      return target
    }

    /***/
  }),
  /* 73 */
  /***/ (function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__(4)

    /***/
  }),
  /* 74 */
  /***/ (function (module, exports, __webpack_require__) {

    'use strict'

    var global = __webpack_require__(1)
      , core = __webpack_require__(5)
      , dP = __webpack_require__(12)
      , DESCRIPTORS = __webpack_require__(6)
      , SPECIES = __webpack_require__(0)('species')

    module.exports = function (KEY) {
      var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY]
      if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
        configurable: true,
        get: function () { return this }
      })
    }

    /***/
  }),
  /* 75 */
  /***/ (function (module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
    var anObject = __webpack_require__(3)
      , aFunction = __webpack_require__(14)
      , SPECIES = __webpack_require__(0)('species')
    module.exports = function (O, D) {
      var C = anObject(O).constructor, S
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S)
    }

    /***/
  }),
  /* 76 */
  /***/ (function (module, exports, __webpack_require__) {

    var toInteger = __webpack_require__(19)
      , defined = __webpack_require__(15)
// true  -> String#at
// false -> String#codePointAt
    module.exports = function (TO_STRING) {
      return function (that, pos) {
        var s = String(defined(that))
          , i = toInteger(pos)
          , l = s.length
          , a, b
        if (i < 0 || i >= l)return TO_STRING ? '' : undefined
        a = s.charCodeAt(i)
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
          ? TO_STRING ? s.charAt(i) : a
          : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000
      }
    }

    /***/
  }),
  /* 77 */
  /***/ (function (module, exports, __webpack_require__) {

    var toInteger = __webpack_require__(19)
      , max = Math.max
      , min = Math.min
    module.exports = function (index, length) {
      index = toInteger(index)
      return index < 0 ? max(index + length, 0) : min(index, length)
    }

    /***/
  }),
  /* 78 */
  /***/ (function (module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
    var defined = __webpack_require__(15)
    module.exports = function (it) {
      return Object(defined(it))
    }

    /***/
  }),
  /* 79 */
  /***/ (function (module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = __webpack_require__(11)
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
    module.exports = function (it, S) {
      if (!isObject(it))return it
      var fn, val
      if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val
      if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val
      if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val
      throw TypeError('Can\'t convert object to primitive value')
    }

    /***/
  }),
  /* 80 */
  /***/ (function (module, exports, __webpack_require__) {

    var classof = __webpack_require__(21)
      , ITERATOR = __webpack_require__(0)('iterator')
      , Iterators = __webpack_require__(7)
    module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
      if (it != undefined)return it[ITERATOR]
        || it['@@iterator']
        || Iterators[classof(it)]
    }

    /***/
  }),
  /* 81 */
  /***/ (function (module, exports, __webpack_require__) {

    'use strict'

    var addToUnscopables = __webpack_require__(54)
      , step = __webpack_require__(65)
      , Iterators = __webpack_require__(7)
      , toIObject = __webpack_require__(20)

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
    module.exports = __webpack_require__(26)(Array, 'Array', function (iterated, kind) {
      this._t = toIObject(iterated) // target
      this._i = 0                   // next index
      this._k = kind                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
      var O = this._t
        , kind = this._k
        , index = this._i++
      if (!O || index >= O.length) {
        this._t = undefined
        return step(1)
      }
      if (kind == 'keys')return step(0, index)
      if (kind == 'values')return step(0, O[index])
      return step(0, [index, O[index]])
    }, 'values')

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    Iterators.Arguments = Iterators.Array

    addToUnscopables('keys')
    addToUnscopables('values')
    addToUnscopables('entries')

    /***/
  }),
  /* 82 */
  /***/ (function (module, exports) {



    /***/
  }),
  /* 83 */
  /***/ (function (module, exports, __webpack_require__) {

    'use strict'

    var LIBRARY = __webpack_require__(27)
      , global = __webpack_require__(1)
      , ctx = __webpack_require__(9)
      , classof = __webpack_require__(21)
      , $export = __webpack_require__(23)
      , isObject = __webpack_require__(11)
      , aFunction = __webpack_require__(14)
      , anInstance = __webpack_require__(55)
      , forOf = __webpack_require__(57)
      , speciesConstructor = __webpack_require__(75)
      , task = __webpack_require__(30).set
      , microtask = __webpack_require__(66)()
      , PROMISE = 'Promise'
      , TypeError = global.TypeError
      , process = global.process
      , $Promise = global[PROMISE]
      , process = global.process
      , isNode = classof(process) == 'process'
      , empty = function () { /* empty */ }
      , Internal, GenericPromiseCapability, Wrapper

    var USE_NATIVE = !!function () {
      try {
        // correct subclassing with @@species support
        var promise = $Promise.resolve(1)
          ,
          FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function (exec) { exec(empty, empty) }
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise
      } catch (e) { /* empty */ }
    }()

// helpers
    var sameConstructor = function (a, b) {
      // with library wrapper special case
      return a === b || a === $Promise && b === Wrapper
    }
    var isThenable = function (it) {
      var then
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false
    }
    var newPromiseCapability = function (C) {
      return sameConstructor($Promise, C)
        ? new PromiseCapability(C)
        : new GenericPromiseCapability(C)
    }
    var PromiseCapability = GenericPromiseCapability = function (C) {
      var resolve, reject
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor')
        resolve = $$resolve
        reject = $$reject
      })
      this.resolve = aFunction(resolve)
      this.reject = aFunction(reject)
    }
    var perform = function (exec) {
      try {
        exec()
      } catch (e) {
        return {error: e}
      }
    }
    var notify = function (promise, isReject) {
      if (promise._n)return
      promise._n = true
      var chain = promise._c
      microtask(function () {
        var value = promise._v
          , ok = promise._s == 1
          , i = 0
        var run = function (reaction) {
          var handler = ok ? reaction.ok : reaction.fail
            , resolve = reaction.resolve
            , reject = reaction.reject
            , domain = reaction.domain
            , result, then
          try {
            if (handler) {
              if (!ok) {
                if (promise._h == 2) onHandleUnhandled(promise)
                promise._h = 1
              }
              if (handler === true) result = value
              else {
                if (domain) domain.enter()
                result = handler(value)
                if (domain) domain.exit()
              }
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'))
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject)
              } else resolve(result)
            } else reject(value)
          } catch (e) {
            reject(e)
          }
        }
        while (chain.length > i)run(chain[i++]) // variable length - can't use forEach
        promise._c = []
        promise._n = false
        if (isReject && !promise._h) onUnhandled(promise)
      })
    }
    var onUnhandled = function (promise) {
      task.call(global, function () {
        var value = promise._v
          , abrupt, handler, console
        if (isUnhandled(promise)) {
          abrupt = perform(function () {
            if (isNode) {
              process.emit('unhandledRejection', value, promise)
            } else if (handler = global.onunhandledrejection) {
              handler({promise: promise, reason: value})
            } else if ((console = global.console) && console.error) {
              console.error('Unhandled promise rejection', value)
            }
          })
          // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
          promise._h = isNode || isUnhandled(promise) ? 2 : 1
        }
        promise._a = undefined
        if (abrupt)throw abrupt.error
      })
    }
    var isUnhandled = function (promise) {
      if (promise._h == 1)return false
      var chain = promise._a || promise._c
        , i = 0
        , reaction
      while (chain.length > i) {
        reaction = chain[i++]
        if (reaction.fail || !isUnhandled(reaction.promise))return false
      }
      return true
    }
    var onHandleUnhandled = function (promise) {
      task.call(global, function () {
        var handler
        if (isNode) {
          process.emit('rejectionHandled', promise)
        } else if (handler = global.onrejectionhandled) {
          handler({promise: promise, reason: promise._v})
        }
      })
    }
    var $reject = function (value) {
      var promise = this
      if (promise._d)return
      promise._d = true
      promise = promise._w || promise // unwrap
      promise._v = value
      promise._s = 2
      if (!promise._a) promise._a = promise._c.slice()
      notify(promise, true)
    }
    var $resolve = function (value) {
      var promise = this
        , then
      if (promise._d)return
      promise._d = true
      promise = promise._w || promise // unwrap
      try {
        if (promise === value)throw TypeError('Promise can\'t be resolved itself')
        if (then = isThenable(value)) {
          microtask(function () {
            var wrapper = {_w: promise, _d: false} // wrap
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1))
            } catch (e) {
              $reject.call(wrapper, e)
            }
          })
        } else {
          promise._v = value
          promise._s = 1
          notify(promise, false)
        }
      } catch (e) {
        $reject.call({_w: promise, _d: false}, e) // wrap
      }
    }

// constructor polyfill
    if (!USE_NATIVE) {
      // 25.4.3.1 Promise(executor)
      $Promise = function Promise (executor) {
        anInstance(this, $Promise, PROMISE, '_h')
        aFunction(executor)
        Internal.call(this)
        try {
          executor(ctx($resolve, this, 1), ctx($reject, this, 1))
        } catch (err) {
          $reject.call(this, err)
        }
      }
      Internal = function Promise (executor) {
        this._c = []             // <- awaiting reactions
        this._a = undefined      // <- checked in isUnhandled reactions
        this._s = 0              // <- state
        this._d = false          // <- done
        this._v = undefined      // <- value
        this._h = 0              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = false          // <- notify
      }
      Internal.prototype = __webpack_require__(72)($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then (onFulfilled, onRejected) {
          var reaction = newPromiseCapability(speciesConstructor(this, $Promise))
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true
          reaction.fail = typeof onRejected == 'function' && onRejected
          reaction.domain = isNode ? process.domain : undefined
          this._c.push(reaction)
          if (this._a) this._a.push(reaction)
          if (this._s) notify(this, false)
          return reaction.promise
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        'catch': function (onRejected) {
          return this.then(undefined, onRejected)
        }
      })
      PromiseCapability = function () {
        var promise = new Internal
        this.promise = promise
        this.resolve = ctx($resolve, promise, 1)
        this.reject = ctx($reject, promise, 1)
      }
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise})
    __webpack_require__(17)($Promise, PROMISE)
    __webpack_require__(74)(PROMISE)
    Wrapper = __webpack_require__(5)[PROMISE]

// statics
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
      // 25.4.4.5 Promise.reject(r)
      reject: function reject (r) {
        var capability = newPromiseCapability(this)
          , $$reject = capability.reject
        $$reject(r)
        return capability.promise
      }
    })
    $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
      // 25.4.4.6 Promise.resolve(x)
      resolve: function resolve (x) {
        // instanceof instead of internal slot check because we should fix it without replacement native Promise core
        if (x instanceof $Promise && sameConstructor(x.constructor, this))return x
        var capability = newPromiseCapability(this)
          , $$resolve = capability.resolve
        $$resolve(x)
        return capability.promise
      }
    })
    $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(64)(function (iter) {
        $Promise.all(iter)['catch'](empty)
      })), PROMISE, {
      // 25.4.4.1 Promise.all(iterable)
      all: function all (iterable) {
        var C = this
          , capability = newPromiseCapability(C)
          , resolve = capability.resolve
          , reject = capability.reject
        var abrupt = perform(function () {
          var values = []
            , index = 0
            , remaining = 1
          forOf(iterable, false, function (promise) {
            var $index = index++
              , alreadyCalled = false
            values.push(undefined)
            remaining++
            C.resolve(promise).then(function (value) {
              if (alreadyCalled)return
              alreadyCalled = true
              values[$index] = value
              --remaining || resolve(values)
            }, reject)
          })
          --remaining || resolve(values)
        })
        if (abrupt) reject(abrupt.error)
        return capability.promise
      },
      // 25.4.4.4 Promise.race(iterable)
      race: function race (iterable) {
        var C = this
          , capability = newPromiseCapability(C)
          , reject = capability.reject
        var abrupt = perform(function () {
          forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject)
          })
        })
        if (abrupt) reject(abrupt.error)
        return capability.promise
      }
    })

    /***/
  }),
  /* 84 */
  /***/ (function (module, exports, __webpack_require__) {

    'use strict'

    var $at = __webpack_require__(76)(true)

// 21.1.3.27 String.prototype[@@iterator]()
    __webpack_require__(26)(String, 'String', function (iterated) {
      this._t = String(iterated) // target
      this._i = 0                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function () {
      var O = this._t
        , index = this._i
        , point
      if (index >= O.length)return {value: undefined, done: true}
      point = $at(O, index)
      this._i += point.length
      return {value: point, done: false}
    })

    /***/
  }),
  /* 85 */
  /***/ (function (module, exports, __webpack_require__) {

    __webpack_require__(81)
    var global = __webpack_require__(1)
      , hide = __webpack_require__(4)
      , Iterators = __webpack_require__(7)
      , TO_STRING_TAG = __webpack_require__(0)('toStringTag')

    for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'],
           i = 0; i < 5; i++) {
      var NAME = collections[i]
        , Collection = global[NAME]
        , proto = Collection && Collection.prototype
      if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME)
      Iterators[NAME] = Iterators.Array
    }

    /***/
  }),
  /* 86 */
  /***/ (function (module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*! tether 1.4.0 */

    (function (root, factory) {
      if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
          __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
      } else if (typeof exports === 'object') {
        module.exports = factory(require, exports, module)
      } else {
        root.Tether = factory()
      }
    }(this, function (require, exports, module) {

      'use strict'

      var _createClass = (function () {
        function defineProperties (target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps)
          if (staticProps) defineProperties(Constructor, staticProps)
          return Constructor
        }
      })()

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

      var TetherBase = undefined
      if (typeof TetherBase === 'undefined') {
        TetherBase = {modules: []}
      }

      var zeroElement = null

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
      function getActualBoundingClientRect (node) {
        var boundingRect = node.getBoundingClientRect()

        // The original object returned by getBoundingClientRect is immutable, so we clone it
        // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
        var rect = {}
        for (var k in boundingRect) {
          rect[k] = boundingRect[k]
        }

        if (node.ownerDocument !== document) {
          var _frameElement = node.ownerDocument.defaultView.frameElement
          if (_frameElement) {
            var frameRect = getActualBoundingClientRect(_frameElement)
            rect.top += frameRect.top
            rect.bottom += frameRect.top
            rect.left += frameRect.left
            rect.right += frameRect.left
          }
        }

        return rect
      }

      function getScrollParents (el) {
        // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
        // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        var computedStyle = getComputedStyle(el) || {}
        var position = computedStyle.position
        var parents = []

        if (position === 'fixed') {
          return [el]
        }

        var parent = el
        while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
          var style = undefined
          try {
            style = getComputedStyle(parent)
          } catch (err) {}

          if (typeof style === 'undefined' || style === null) {
            parents.push(parent)
            return parents
          }

          var _style = style
          var overflow = _style.overflow
          var overflowX = _style.overflowX
          var overflowY = _style.overflowY

          if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
            if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
              parents.push(parent)
            }
          }
        }

        parents.push(el.ownerDocument.body)

        // If the node is within a frame, account for the parent window scroll
        if (el.ownerDocument !== document) {
          parents.push(el.ownerDocument.defaultView)
        }

        return parents
      }

      var uniqueId = (function () {
        var id = 0
        return function () {
          return ++id
        }
      })()

      var zeroPosCache = {}
      var getOrigin = function getOrigin () {
        // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
        // jitter as the user scrolls that messes with our ability to detect if two positions
        // are equivilant or not.  We place an element at the top left of the page that will
        // get the same jitter, so we can cancel the two out.
        var node = zeroElement
        if (!node || !document.body.contains(node)) {
          node = document.createElement('div')
          node.setAttribute('data-tether-id', uniqueId())
          extend(node.style, {
            top: 0,
            left: 0,
            position: 'absolute'
          })

          document.body.appendChild(node)

          zeroElement = node
        }

        var id = node.getAttribute('data-tether-id')
        if (typeof zeroPosCache[id] === 'undefined') {
          zeroPosCache[id] = getActualBoundingClientRect(node)

          // Clear the cache when this position call is done
          defer(function () {
            delete zeroPosCache[id]
          })
        }

        return zeroPosCache[id]
      }

      function removeUtilElements () {
        if (zeroElement) {
          document.body.removeChild(zeroElement)
        }
        zeroElement = null
      }

      function getBounds (el) {
        var doc = undefined
        if (el === document) {
          doc = document
          el = document.documentElement
        } else {
          doc = el.ownerDocument
        }

        var docEl = doc.documentElement

        var box = getActualBoundingClientRect(el)

        var origin = getOrigin()

        box.top -= origin.top
        box.left -= origin.left

        if (typeof box.width === 'undefined') {
          box.width = document.body.scrollWidth - box.left - box.right
        }
        if (typeof box.height === 'undefined') {
          box.height = document.body.scrollHeight - box.top - box.bottom
        }

        box.top = box.top - docEl.clientTop
        box.left = box.left - docEl.clientLeft
        box.right = doc.body.clientWidth - box.width - box.left
        box.bottom = doc.body.clientHeight - box.height - box.top

        return box
      }

      function getOffsetParent (el) {
        return el.offsetParent || document.documentElement
      }

      var _scrollBarSize = null

      function getScrollBarSize () {
        if (_scrollBarSize) {
          return _scrollBarSize
        }
        var inner = document.createElement('div')
        inner.style.width = '100%'
        inner.style.height = '200px'

        var outer = document.createElement('div')
        extend(outer.style, {
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          visibility: 'hidden',
          width: '200px',
          height: '150px',
          overflow: 'hidden'
        })

        outer.appendChild(inner)

        document.body.appendChild(outer)

        var widthContained = inner.offsetWidth
        outer.style.overflow = 'scroll'
        var widthScroll = inner.offsetWidth

        if (widthContained === widthScroll) {
          widthScroll = outer.clientWidth
        }

        document.body.removeChild(outer)

        var width = widthContained - widthScroll

        _scrollBarSize = {width: width, height: width}
        return _scrollBarSize
      }

      function extend () {
        var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0]

        var args = []

        Array.prototype.push.apply(args, arguments)

        args.slice(1).forEach(function (obj) {
          if (obj) {
            for (var key in obj) {
              if (({}).hasOwnProperty.call(obj, key)) {
                out[key] = obj[key]
              }
            }
          }
        })

        return out
      }

      function removeClass (el, name) {
        if (typeof el.classList !== 'undefined') {
          name.split(' ').forEach(function (cls) {
            if (cls.trim()) {
              el.classList.remove(cls)
            }
          })
        } else {
          var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi')
          var className = getClassName(el).replace(regex, ' ')
          setClassName(el, className)
        }
      }

      function addClass (el, name) {
        if (typeof el.classList !== 'undefined') {
          name.split(' ').forEach(function (cls) {
            if (cls.trim()) {
              el.classList.add(cls)
            }
          })
        } else {
          removeClass(el, name)
          var cls = getClassName(el) + (' ' + name)
          setClassName(el, cls)
        }
      }

      function hasClass (el, name) {
        if (typeof el.classList !== 'undefined') {
          return el.classList.contains(name)
        }
        var className = getClassName(el)
        return new RegExp('(^| )' + name + '( |$)', 'gi').test(className)
      }

      function getClassName (el) {
        // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
        // completely separately SVGAnimatedString base classes
        if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
          return el.className.baseVal
        }
        return el.className
      }

      function setClassName (el, className) {
        el.setAttribute('class', className)
      }

      function updateClasses (el, add, all) {
        // Of the set of 'all' classes, we need the 'add' classes, and only the
        // 'add' classes to be set.
        all.forEach(function (cls) {
          if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
            removeClass(el, cls)
          }
        })

        add.forEach(function (cls) {
          if (!hasClass(el, cls)) {
            addClass(el, cls)
          }
        })
      }

      var deferred = []

      var defer = function defer (fn) {
        deferred.push(fn)
      }

      var flush = function flush () {
        var fn = undefined
        while (fn = deferred.pop()) {
          fn()
        }
      }

      var Evented = (function () {
        function Evented () {
          _classCallCheck(this, Evented)
        }

        _createClass(Evented, [{
          key: 'on',
          value: function on (event, handler, ctx) {
            var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3]

            if (typeof this.bindings === 'undefined') {
              this.bindings = {}
            }
            if (typeof this.bindings[event] === 'undefined') {
              this.bindings[event] = []
            }
            this.bindings[event].push({handler: handler, ctx: ctx, once: once})
          }
        }, {
          key: 'once',
          value: function once (event, handler, ctx) {
            this.on(event, handler, ctx, true)
          }
        }, {
          key: 'off',
          value: function off (event, handler) {
            if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
              return
            }

            if (typeof handler === 'undefined') {
              delete this.bindings[event]
            } else {
              var i = 0
              while (i < this.bindings[event].length) {
                if (this.bindings[event][i].handler === handler) {
                  this.bindings[event].splice(i, 1)
                } else {
                  ++i
                }
              }
            }
          }
        }, {
          key: 'trigger',
          value: function trigger (event) {
            if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
              var i = 0

              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key]
              }

              while (i < this.bindings[event].length) {
                var _bindings$event$i = this.bindings[event][i]
                var handler = _bindings$event$i.handler
                var ctx = _bindings$event$i.ctx
                var once = _bindings$event$i.once

                var context = ctx
                if (typeof context === 'undefined') {
                  context = this
                }

                handler.apply(context, args)

                if (once) {
                  this.bindings[event].splice(i, 1)
                } else {
                  ++i
                }
              }
            }
          }
        }])

        return Evented
      })()

      TetherBase.Utils = {
        getActualBoundingClientRect: getActualBoundingClientRect,
        getScrollParents: getScrollParents,
        getBounds: getBounds,
        getOffsetParent: getOffsetParent,
        extend: extend,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        updateClasses: updateClasses,
        defer: defer,
        flush: flush,
        uniqueId: uniqueId,
        Evented: Evented,
        getScrollBarSize: getScrollBarSize,
        removeUtilElements: removeUtilElements
      }
      /* globals TetherBase, performance */

      'use strict'

      var _slicedToArray = (function () {
        function sliceIterator (arr, i) {
          var _arr = []
          var _n = true
          var _d = false
          var _e = undefined
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value)
              if (i && _arr.length === i) break
            }
          } catch (err) {
            _d = true
            _e = err
          } finally { try { if (!_n && _i['return']) _i['return']() } finally { if (_d) throw _e } }
          return _arr
        }

        return function (arr, i) { if (Array.isArray(arr)) { return arr } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i) } else { throw new TypeError('Invalid attempt to destructure non-iterable instance') } }
      })()

      var _createClass = (function () {
        function defineProperties (target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps)
          if (staticProps) defineProperties(Constructor, staticProps)
          return Constructor
        }
      })()

      var _get = function get (_x6, _x7, _x8) {
        var _again = true
        _function: while (_again) {
          var object = _x6, property = _x7, receiver = _x8
          _again = false
          if (object === null) object = Function.prototype
          var desc = Object.getOwnPropertyDescriptor(object, property)
          if (desc === undefined) {
            var parent = Object.getPrototypeOf(object)
            if (parent === null) { return undefined } else {
              _x6 = parent
              _x7 = property
              _x8 = receiver
              _again = true
              desc = parent = undefined
              continue _function
            }
          } else if ('value' in desc) { return desc.value } else {
            var getter = desc.get
            if (getter === undefined) { return undefined }
            return getter.call(receiver)
          }
        }
      }

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

      function _inherits (subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        })
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
      }

      if (typeof TetherBase === 'undefined') {
        throw new Error('You must include the utils.js file before tether.js')
      }

      var _TetherBase$Utils = TetherBase.Utils
      var getScrollParents = _TetherBase$Utils.getScrollParents
      var getBounds = _TetherBase$Utils.getBounds
      var getOffsetParent = _TetherBase$Utils.getOffsetParent
      var extend = _TetherBase$Utils.extend
      var addClass = _TetherBase$Utils.addClass
      var removeClass = _TetherBase$Utils.removeClass
      var updateClasses = _TetherBase$Utils.updateClasses
      var defer = _TetherBase$Utils.defer
      var flush = _TetherBase$Utils.flush
      var getScrollBarSize = _TetherBase$Utils.getScrollBarSize
      var removeUtilElements = _TetherBase$Utils.removeUtilElements

      function within (a, b) {
        var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2]

        return a + diff >= b && b >= a - diff
      }

      var transformKey = (function () {
        if (typeof document === 'undefined') {
          return ''
        }
        var el = document.createElement('div')

        var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']
        for (var i = 0; i < transforms.length; ++i) {
          var key = transforms[i]
          if (el.style[key] !== undefined) {
            return key
          }
        }
      })()

      var tethers = []

      var position = function position () {
        tethers.forEach(function (tether) {
          tether.position(false)
        })
        flush()
      };

      function now () {
        if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
          return performance.now()
        }
        return +new Date()
      }

      (function () {
        var lastCall = null
        var lastDuration = null
        var pendingTimeout = null

        var tick = function tick () {
          if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
            // We voluntarily throttle ourselves if we can't manage 60fps
            lastDuration = Math.min(lastDuration - 16, 250)

            // Just in case this is the last event, remember to position just once more
            pendingTimeout = setTimeout(tick, 250)
            return
          }

          if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
            // Some browsers call events a little too frequently, refuse to run more than is reasonable
            return
          }

          if (pendingTimeout != null) {
            clearTimeout(pendingTimeout)
            pendingTimeout = null
          }

          lastCall = now()
          position()
          lastDuration = now() - lastCall
        }

        if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
          ['resize', 'scroll', 'touchmove'].forEach(function (event) {
            window.addEventListener(event, tick)
          })
        }
      })()

      var MIRROR_LR = {
        center: 'center',
        left: 'right',
        right: 'left'
      }

      var MIRROR_TB = {
        middle: 'middle',
        top: 'bottom',
        bottom: 'top'
      }

      var OFFSET_MAP = {
        top: 0,
        left: 0,
        middle: '50%',
        center: '50%',
        bottom: '100%',
        right: '100%'
      }

      var autoToFixedAttachment = function autoToFixedAttachment (attachment, relativeToAttachment) {
        var left = attachment.left
        var top = attachment.top

        if (left === 'auto') {
          left = MIRROR_LR[relativeToAttachment.left]
        }

        if (top === 'auto') {
          top = MIRROR_TB[relativeToAttachment.top]
        }

        return {left: left, top: top}
      }

      var attachmentToOffset = function attachmentToOffset (attachment) {
        var left = attachment.left
        var top = attachment.top

        if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
          left = OFFSET_MAP[attachment.left]
        }

        if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
          top = OFFSET_MAP[attachment.top]
        }

        return {left: left, top: top}
      }

      function addOffset () {
        var out = {top: 0, left: 0}

        for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
          offsets[_key] = arguments[_key]
        }

        offsets.forEach(function (_ref) {
          var top = _ref.top
          var left = _ref.left

          if (typeof top === 'string') {
            top = parseFloat(top, 10)
          }
          if (typeof left === 'string') {
            left = parseFloat(left, 10)
          }

          out.top += top
          out.left += left
        })

        return out
      }

      function offsetToPx (offset, size) {
        if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
          offset.left = parseFloat(offset.left, 10) / 100 * size.width
        }
        if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
          offset.top = parseFloat(offset.top, 10) / 100 * size.height
        }

        return offset
      }

      var parseOffset = function parseOffset (value) {
        var _value$split = value.split(' ')

        var _value$split2 = _slicedToArray(_value$split, 2)

        var top = _value$split2[0]
        var left = _value$split2[1]

        return {top: top, left: left}
      }
      var parseAttachment = parseOffset

      var TetherClass = (function (_Evented) {
        _inherits(TetherClass, _Evented)

        function TetherClass (options) {
          var _this = this

          _classCallCheck(this, TetherClass)

          _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this)
          this.position = this.position.bind(this)

          tethers.push(this)

          this.history = []

          this.setOptions(options, false)

          TetherBase.modules.forEach(function (module) {
            if (typeof module.initialize !== 'undefined') {
              module.initialize.call(_this)
            }
          })

          this.position()
        }

        _createClass(TetherClass, [{
          key: 'getClass',
          value: function getClass () {
            var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0]
            var classes = this.options.classes

            if (typeof classes !== 'undefined' && classes[key]) {
              return this.options.classes[key]
            } else if (this.options.classPrefix) {
              return this.options.classPrefix + '-' + key
            } else {
              return key
            }
          }
        }, {
          key: 'setOptions',
          value: function setOptions (options) {
            var _this2 = this

            var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1]

            var defaults = {
              offset: '0 0',
              targetOffset: '0 0',
              targetAttachment: 'auto auto',
              classPrefix: 'tether'
            }

            this.options = extend(defaults, options)

            var _options = this.options
            var element = _options.element
            var target = _options.target
            var targetModifier = _options.targetModifier

            this.element = element
            this.target = target
            this.targetModifier = targetModifier

            if (this.target === 'viewport') {
              this.target = document.body
              this.targetModifier = 'visible'
            } else if (this.target === 'scroll-handle') {
              this.target = document.body
              this.targetModifier = 'scroll-handle'
            }

            ['element', 'target'].forEach(function (key) {
              if (typeof _this2[key] === 'undefined') {
                throw new Error('Tether Error: Both element and target must be defined')
              }

              if (typeof _this2[key].jquery !== 'undefined') {
                _this2[key] = _this2[key][0]
              } else if (typeof _this2[key] === 'string') {
                _this2[key] = document.querySelector(_this2[key])
              }
            })

            addClass(this.element, this.getClass('element'))
            if (!(this.options.addTargetClasses === false)) {
              addClass(this.target, this.getClass('target'))
            }

            if (!this.options.attachment) {
              throw new Error('Tether Error: You must provide an attachment')
            }

            this.targetAttachment = parseAttachment(this.options.targetAttachment)
            this.attachment = parseAttachment(this.options.attachment)
            this.offset = parseOffset(this.options.offset)
            this.targetOffset = parseOffset(this.options.targetOffset)

            if (typeof this.scrollParents !== 'undefined') {
              this.disable()
            }

            if (this.targetModifier === 'scroll-handle') {
              this.scrollParents = [this.target]
            } else {
              this.scrollParents = getScrollParents(this.target)
            }

            if (!(this.options.enabled === false)) {
              this.enable(pos)
            }
          }
        }, {
          key: 'getTargetBounds',
          value: function getTargetBounds () {
            if (typeof this.targetModifier !== 'undefined') {
              if (this.targetModifier === 'visible') {
                if (this.target === document.body) {
                  return {top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth}
                } else {
                  var bounds = getBounds(this.target)

                  var out = {
                    height: bounds.height,
                    width: bounds.width,
                    top: bounds.top,
                    left: bounds.left
                  }

                  out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top))
                  out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)))
                  out.height = Math.min(innerHeight, out.height)
                  out.height -= 2

                  out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left))
                  out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)))
                  out.width = Math.min(innerWidth, out.width)
                  out.width -= 2

                  if (out.top < pageYOffset) {
                    out.top = pageYOffset
                  }
                  if (out.left < pageXOffset) {
                    out.left = pageXOffset
                  }

                  return out
                }
              } else if (this.targetModifier === 'scroll-handle') {
                var bounds = undefined
                var target = this.target
                if (target === document.body) {
                  target = document.documentElement

                  bounds = {
                    left: pageXOffset,
                    top: pageYOffset,
                    height: innerHeight,
                    width: innerWidth
                  }
                } else {
                  bounds = getBounds(target)
                }

                var style = getComputedStyle(target)

                var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body

                var scrollBottom = 0
                if (hasBottomScroll) {
                  scrollBottom = 15
                }

                var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom

                var out = {
                  width: 15,
                  height: height * 0.975 * (height / target.scrollHeight),
                  left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
                }

                var fitAdj = 0
                if (height < 408 && this.target === document.body) {
                  fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58
                }

                if (this.target !== document.body) {
                  out.height = Math.max(out.height, 24)
                }

                var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height)
                out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth)

                if (this.target === document.body) {
                  out.height = Math.max(out.height, 24)
                }

                return out
              }
            } else {
              return getBounds(this.target)
            }
          }
        }, {
          key: 'clearCache',
          value: function clearCache () {
            this._cache = {}
          }
        }, {
          key: 'cache',
          value: function cache (k, getter) {
            // More than one module will often need the same DOM info, so
            // we keep a cache which is cleared on each position call
            if (typeof this._cache === 'undefined') {
              this._cache = {}
            }

            if (typeof this._cache[k] === 'undefined') {
              this._cache[k] = getter.call(this)
            }

            return this._cache[k]
          }
        }, {
          key: 'enable',
          value: function enable () {
            var _this3 = this

            var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0]

            if (!(this.options.addTargetClasses === false)) {
              addClass(this.target, this.getClass('enabled'))
            }
            addClass(this.element, this.getClass('enabled'))
            this.enabled = true

            this.scrollParents.forEach(function (parent) {
              if (parent !== _this3.target.ownerDocument) {
                parent.addEventListener('scroll', _this3.position)
              }
            })

            if (pos) {
              this.position()
            }
          }
        }, {
          key: 'disable',
          value: function disable () {
            var _this4 = this

            removeClass(this.target, this.getClass('enabled'))
            removeClass(this.element, this.getClass('enabled'))
            this.enabled = false

            if (typeof this.scrollParents !== 'undefined') {
              this.scrollParents.forEach(function (parent) {
                parent.removeEventListener('scroll', _this4.position)
              })
            }
          }
        }, {
          key: 'destroy',
          value: function destroy () {
            var _this5 = this

            this.disable()

            tethers.forEach(function (tether, i) {
              if (tether === _this5) {
                tethers.splice(i, 1)
              }
            })

            // Remove any elements we were using for convenience from the DOM
            if (tethers.length === 0) {
              removeUtilElements()
            }
          }
        }, {
          key: 'updateAttachClasses',
          value: function updateAttachClasses (elementAttach, targetAttach) {
            var _this6 = this

            elementAttach = elementAttach || this.attachment
            targetAttach = targetAttach || this.targetAttachment
            var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center']

            if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
              // updateAttachClasses can be called more than once in a position call, so
              // we need to clean up after ourselves such that when the last defer gets
              // ran it doesn't add any extra classes from previous calls.
              this._addAttachClasses.splice(0, this._addAttachClasses.length)
            }

            if (typeof this._addAttachClasses === 'undefined') {
              this._addAttachClasses = []
            }
            var add = this._addAttachClasses

            if (elementAttach.top) {
              add.push(this.getClass('element-attached') + '-' + elementAttach.top)
            }
            if (elementAttach.left) {
              add.push(this.getClass('element-attached') + '-' + elementAttach.left)
            }
            if (targetAttach.top) {
              add.push(this.getClass('target-attached') + '-' + targetAttach.top)
            }
            if (targetAttach.left) {
              add.push(this.getClass('target-attached') + '-' + targetAttach.left)
            }

            var all = []
            sides.forEach(function (side) {
              all.push(_this6.getClass('element-attached') + '-' + side)
              all.push(_this6.getClass('target-attached') + '-' + side)
            })

            defer(function () {
              if (!(typeof _this6._addAttachClasses !== 'undefined')) {
                return
              }

              updateClasses(_this6.element, _this6._addAttachClasses, all)
              if (!(_this6.options.addTargetClasses === false)) {
                updateClasses(_this6.target, _this6._addAttachClasses, all)
              }

              delete _this6._addAttachClasses
            })
          }
        }, {
          key: 'position',
          value: function position () {
            var _this7 = this

            var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0]

            // flushChanges commits the changes immediately, leave true unless you are positioning multiple
            // tethers (in which case call Tether.Utils.flush yourself when you're done)

            if (!this.enabled) {
              return
            }

            this.clearCache()

            // Turn 'auto' attachments into the appropriate corner or edge
            var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment)

            this.updateAttachClasses(this.attachment, targetAttachment)

            var elementPos = this.cache('element-bounds', function () {
              return getBounds(_this7.element)
            })

            var width = elementPos.width
            var height = elementPos.height

            if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
              var _lastSize = this.lastSize

              // We cache the height and width to make it possible to position elements that are
              // getting hidden.
              width = _lastSize.width
              height = _lastSize.height
            } else {
              this.lastSize = {width: width, height: height}
            }

            var targetPos = this.cache('target-bounds', function () {
              return _this7.getTargetBounds()
            })
            var targetSize = targetPos

            // Get an actual px offset from the attachment
            var offset = offsetToPx(attachmentToOffset(this.attachment), {width: width, height: height})
            var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize)

            var manualOffset = offsetToPx(this.offset, {width: width, height: height})
            var manualTargetOffset = offsetToPx(this.targetOffset, targetSize)

            // Add the manually provided offset
            offset = addOffset(offset, manualOffset)
            targetOffset = addOffset(targetOffset, manualTargetOffset)

            // It's now our goal to make (element position + offset) == (target position + target offset)
            var left = targetPos.left + targetOffset.left - offset.left
            var top = targetPos.top + targetOffset.top - offset.top

            for (var i = 0; i < TetherBase.modules.length; ++i) {
              var _module2 = TetherBase.modules[i]
              var ret = _module2.position.call(this, {
                left: left,
                top: top,
                targetAttachment: targetAttachment,
                targetPos: targetPos,
                elementPos: elementPos,
                offset: offset,
                targetOffset: targetOffset,
                manualOffset: manualOffset,
                manualTargetOffset: manualTargetOffset,
                scrollbarSize: scrollbarSize,
                attachment: this.attachment
              })

              if (ret === false) {
                return false
              } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
                continue
              } else {
                top = ret.top
                left = ret.left
              }
            }

            // We describe the position three different ways to give the optimizer
            // a chance to decide the best possible way to position the element
            // with the fewest repaints.
            var next = {
              // It's position relative to the page (absolute positioning when
              // the element is a child of the body)
              page: {
                top: top,
                left: left
              },

              // It's position relative to the viewport (fixed positioning)
              viewport: {
                top: top - pageYOffset,
                bottom: pageYOffset - top - height + innerHeight,
                left: left - pageXOffset,
                right: pageXOffset - left - width + innerWidth
              }
            }

            var doc = this.target.ownerDocument
            var win = doc.defaultView

            var scrollbarSize = undefined
            if (win.innerHeight > doc.documentElement.clientHeight) {
              scrollbarSize = this.cache('scrollbar-size', getScrollBarSize)
              next.viewport.bottom -= scrollbarSize.height
            }

            if (win.innerWidth > doc.documentElement.clientWidth) {
              scrollbarSize = this.cache('scrollbar-size', getScrollBarSize)
              next.viewport.right -= scrollbarSize.width
            }

            if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
              // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
              next.page.bottom = doc.body.scrollHeight - top - height
              next.page.right = doc.body.scrollWidth - left - width
            }

            if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
              (function () {
                var offsetParent = _this7.cache('target-offsetparent', function () {
                  return getOffsetParent(_this7.target)
                })
                var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
                  return getBounds(offsetParent)
                })
                var offsetParentStyle = getComputedStyle(offsetParent)
                var offsetParentSize = offsetPosition

                var offsetBorder = {};
                ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
                  offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width'])
                })

                offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right
                offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom

                if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
                  if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
                    // We're within the visible part of the target's scroll parent
                    var scrollTop = offsetParent.scrollTop
                    var scrollLeft = offsetParent.scrollLeft

                    // It's position relative to the target's offset parent (absolute positioning when
                    // the element is moved to be a child of the target's offset parent).
                    next.offset = {
                      top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                      left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
                    }
                  }
                }
              })()
            }

            // We could also travel up the DOM and try each containing context, rather than only
            // looking at the body, but we're gonna get diminishing returns.

            this.move(next)

            this.history.unshift(next)

            if (this.history.length > 3) {
              this.history.pop()
            }

            if (flushChanges) {
              flush()
            }

            return true
          }

          // THE ISSUE
        }, {
          key: 'move',
          value: function move (pos) {
            var _this8 = this

            if (!(typeof this.element.parentNode !== 'undefined')) {
              return
            }

            var same = {}

            for (var type in pos) {
              same[type] = {}

              for (var key in pos[type]) {
                var found = false

                for (var i = 0; i < this.history.length; ++i) {
                  var point = this.history[i]
                  if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
                    found = true
                    break
                  }
                }

                if (!found) {
                  same[type][key] = true
                }
              }
            }

            var css = {top: '', left: '', right: '', bottom: ''}

            var transcribe = function transcribe (_same, _pos) {
              var hasOptimizations = typeof _this8.options.optimizations !== 'undefined'
              var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null
              if (gpu !== false) {
                var yPos = undefined,
                  xPos = undefined
                if (_same.top) {
                  css.top = 0
                  yPos = _pos.top
                } else {
                  css.bottom = 0
                  yPos = -_pos.bottom
                }

                if (_same.left) {
                  css.left = 0
                  xPos = _pos.left
                } else {
                  css.right = 0
                  xPos = -_pos.right
                }

                if (window.matchMedia) {
                  // HubSpot/tether#207
                  var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches
                  if (!retina) {
                    xPos = Math.round(xPos)
                    yPos = Math.round(yPos)
                  }
                }

                css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)'

                if (transformKey !== 'msTransform') {
                  // The Z transform will keep this in the GPU (faster, and prevents artifacts),
                  // but IE9 doesn't support 3d transforms and will choke.
                  css[transformKey] += ' translateZ(0)'
                }
              } else {
                if (_same.top) {
                  css.top = _pos.top + 'px'
                } else {
                  css.bottom = _pos.bottom + 'px'
                }

                if (_same.left) {
                  css.left = _pos.left + 'px'
                } else {
                  css.right = _pos.right + 'px'
                }
              }
            }

            var moved = false
            if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
              css.position = 'absolute'
              transcribe(same.page, pos.page)
            } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
              css.position = 'fixed'
              transcribe(same.viewport, pos.viewport)
            } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
              (function () {
                css.position = 'absolute'
                var offsetParent = _this8.cache('target-offsetparent', function () {
                  return getOffsetParent(_this8.target)
                })

                if (getOffsetParent(_this8.element) !== offsetParent) {
                  defer(function () {
                    _this8.element.parentNode.removeChild(_this8.element)
                    offsetParent.appendChild(_this8.element)
                  })
                }

                transcribe(same.offset, pos.offset)
                moved = true
              })()
            } else {
              css.position = 'absolute'
              transcribe({top: true, left: true}, pos.page)
            }

            if (!moved) {
              if (this.options.bodyElement) {
                this.options.bodyElement.appendChild(this.element)
              } else {
                var offsetParentIsBody = true
                var currentNode = this.element.parentNode
                while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
                  if (getComputedStyle(currentNode).position !== 'static') {
                    offsetParentIsBody = false
                    break
                  }

                  currentNode = currentNode.parentNode
                }

                if (!offsetParentIsBody) {
                  this.element.parentNode.removeChild(this.element)
                  this.element.ownerDocument.body.appendChild(this.element)
                }
              }
            }

            // Any css change will trigger a repaint, so let's avoid one if nothing changed
            var writeCSS = {}
            var write = false
            for (var key in css) {
              var val = css[key]
              var elVal = this.element.style[key]

              if (elVal !== val) {
                write = true
                writeCSS[key] = val
              }
            }

            if (write) {
              defer(function () {
                extend(_this8.element.style, writeCSS)
                _this8.trigger('repositioned')
              })
            }
          }
        }])

        return TetherClass
      })(Evented)

      TetherClass.modules = []

      TetherBase.position = position

      var Tether = extend(TetherClass, TetherBase)
      /* globals TetherBase */

      'use strict'

      var _slicedToArray = (function () {
        function sliceIterator (arr, i) {
          var _arr = []
          var _n = true
          var _d = false
          var _e = undefined
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value)
              if (i && _arr.length === i) break
            }
          } catch (err) {
            _d = true
            _e = err
          } finally { try { if (!_n && _i['return']) _i['return']() } finally { if (_d) throw _e } }
          return _arr
        }

        return function (arr, i) { if (Array.isArray(arr)) { return arr } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i) } else { throw new TypeError('Invalid attempt to destructure non-iterable instance') } }
      })()

      var _TetherBase$Utils = TetherBase.Utils
      var getBounds = _TetherBase$Utils.getBounds
      var extend = _TetherBase$Utils.extend
      var updateClasses = _TetherBase$Utils.updateClasses
      var defer = _TetherBase$Utils.defer

      var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom']

      function getBoundingRect (tether, to) {
        if (to === 'scrollParent') {
          to = tether.scrollParents[0]
        } else if (to === 'window') {
          to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]
        }

        if (to === document) {
          to = to.documentElement
        }

        if (typeof to.nodeType !== 'undefined') {
          (function () {
            var node = to
            var size = getBounds(to)
            var pos = size
            var style = getComputedStyle(to)

            to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top]

            // Account any parent Frames scroll offset
            if (node.ownerDocument !== document) {
              var win = node.ownerDocument.defaultView
              to[0] += win.pageXOffset
              to[1] += win.pageYOffset
              to[2] += win.pageXOffset
              to[3] += win.pageYOffset
            }

            BOUNDS_FORMAT.forEach(function (side, i) {
              side = side[0].toUpperCase() + side.substr(1)
              if (side === 'Top' || side === 'Left') {
                to[i] += parseFloat(style['border' + side + 'Width'])
              } else {
                to[i] -= parseFloat(style['border' + side + 'Width'])
              }
            })
          })()
        }

        return to
      }

      TetherBase.modules.push({
        position: function position (_ref) {
          var _this = this

          var top = _ref.top
          var left = _ref.left
          var targetAttachment = _ref.targetAttachment

          if (!this.options.constraints) {
            return true
          }

          var _cache = this.cache('element-bounds', function () {
            return getBounds(_this.element)
          })

          var height = _cache.height
          var width = _cache.width

          if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
            var _lastSize = this.lastSize

            // Handle the item getting hidden as a result of our positioning without glitching
            // the classes in and out
            width = _lastSize.width
            height = _lastSize.height
          }

          var targetSize = this.cache('target-bounds', function () {
            return _this.getTargetBounds()
          })

          var targetHeight = targetSize.height
          var targetWidth = targetSize.width

          var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')]

          this.options.constraints.forEach(function (constraint) {
            var outOfBoundsClass = constraint.outOfBoundsClass
            var pinnedClass = constraint.pinnedClass

            if (outOfBoundsClass) {
              allClasses.push(outOfBoundsClass)
            }
            if (pinnedClass) {
              allClasses.push(pinnedClass)
            }
          })

          allClasses.forEach(function (cls) {
            ['left', 'top', 'right', 'bottom'].forEach(function (side) {
              allClasses.push(cls + '-' + side)
            })
          })

          var addClasses = []

          var tAttachment = extend({}, targetAttachment)
          var eAttachment = extend({}, this.attachment)

          this.options.constraints.forEach(function (constraint) {
            var to = constraint.to
            var attachment = constraint.attachment
            var pin = constraint.pin

            if (typeof attachment === 'undefined') {
              attachment = ''
            }

            var changeAttachX = undefined,
              changeAttachY = undefined
            if (attachment.indexOf(' ') >= 0) {
              var _attachment$split = attachment.split(' ')

              var _attachment$split2 = _slicedToArray(_attachment$split, 2)

              changeAttachY = _attachment$split2[0]
              changeAttachX = _attachment$split2[1]
            } else {
              changeAttachX = changeAttachY = attachment
            }

            var bounds = getBoundingRect(_this, to)

            if (changeAttachY === 'target' || changeAttachY === 'both') {
              if (top < bounds[1] && tAttachment.top === 'top') {
                top += targetHeight
                tAttachment.top = 'bottom'
              }

              if (top + height > bounds[3] && tAttachment.top === 'bottom') {
                top -= targetHeight
                tAttachment.top = 'top'
              }
            }

            if (changeAttachY === 'together') {
              if (tAttachment.top === 'top') {
                if (eAttachment.top === 'bottom' && top < bounds[1]) {
                  top += targetHeight
                  tAttachment.top = 'bottom'

                  top += height
                  eAttachment.top = 'top'
                } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
                  top -= height - targetHeight
                  tAttachment.top = 'bottom'

                  eAttachment.top = 'bottom'
                }
              }

              if (tAttachment.top === 'bottom') {
                if (eAttachment.top === 'top' && top + height > bounds[3]) {
                  top -= targetHeight
                  tAttachment.top = 'top'

                  top -= height
                  eAttachment.top = 'bottom'
                } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
                  top += height - targetHeight
                  tAttachment.top = 'top'

                  eAttachment.top = 'top'
                }
              }

              if (tAttachment.top === 'middle') {
                if (top + height > bounds[3] && eAttachment.top === 'top') {
                  top -= height
                  eAttachment.top = 'bottom'
                } else if (top < bounds[1] && eAttachment.top === 'bottom') {
                  top += height
                  eAttachment.top = 'top'
                }
              }
            }

            if (changeAttachX === 'target' || changeAttachX === 'both') {
              if (left < bounds[0] && tAttachment.left === 'left') {
                left += targetWidth
                tAttachment.left = 'right'
              }

              if (left + width > bounds[2] && tAttachment.left === 'right') {
                left -= targetWidth
                tAttachment.left = 'left'
              }
            }

            if (changeAttachX === 'together') {
              if (left < bounds[0] && tAttachment.left === 'left') {
                if (eAttachment.left === 'right') {
                  left += targetWidth
                  tAttachment.left = 'right'

                  left += width
                  eAttachment.left = 'left'
                } else if (eAttachment.left === 'left') {
                  left += targetWidth
                  tAttachment.left = 'right'

                  left -= width
                  eAttachment.left = 'right'
                }
              } else if (left + width > bounds[2] && tAttachment.left === 'right') {
                if (eAttachment.left === 'left') {
                  left -= targetWidth
                  tAttachment.left = 'left'

                  left -= width
                  eAttachment.left = 'right'
                } else if (eAttachment.left === 'right') {
                  left -= targetWidth
                  tAttachment.left = 'left'

                  left += width
                  eAttachment.left = 'left'
                }
              } else if (tAttachment.left === 'center') {
                if (left + width > bounds[2] && eAttachment.left === 'left') {
                  left -= width
                  eAttachment.left = 'right'
                } else if (left < bounds[0] && eAttachment.left === 'right') {
                  left += width
                  eAttachment.left = 'left'
                }
              }
            }

            if (changeAttachY === 'element' || changeAttachY === 'both') {
              if (top < bounds[1] && eAttachment.top === 'bottom') {
                top += height
                eAttachment.top = 'top'
              }

              if (top + height > bounds[3] && eAttachment.top === 'top') {
                top -= height
                eAttachment.top = 'bottom'
              }
            }

            if (changeAttachX === 'element' || changeAttachX === 'both') {
              if (left < bounds[0]) {
                if (eAttachment.left === 'right') {
                  left += width
                  eAttachment.left = 'left'
                } else if (eAttachment.left === 'center') {
                  left += width / 2
                  eAttachment.left = 'left'
                }
              }

              if (left + width > bounds[2]) {
                if (eAttachment.left === 'left') {
                  left -= width
                  eAttachment.left = 'right'
                } else if (eAttachment.left === 'center') {
                  left -= width / 2
                  eAttachment.left = 'right'
                }
              }
            }

            if (typeof pin === 'string') {
              pin = pin.split(',').map(function (p) {
                return p.trim()
              })
            } else if (pin === true) {
              pin = ['top', 'left', 'right', 'bottom']
            }

            pin = pin || []

            var pinned = []
            var oob = []

            if (top < bounds[1]) {
              if (pin.indexOf('top') >= 0) {
                top = bounds[1]
                pinned.push('top')
              } else {
                oob.push('top')
              }
            }

            if (top + height > bounds[3]) {
              if (pin.indexOf('bottom') >= 0) {
                top = bounds[3] - height
                pinned.push('bottom')
              } else {
                oob.push('bottom')
              }
            }

            if (left < bounds[0]) {
              if (pin.indexOf('left') >= 0) {
                left = bounds[0]
                pinned.push('left')
              } else {
                oob.push('left')
              }
            }

            if (left + width > bounds[2]) {
              if (pin.indexOf('right') >= 0) {
                left = bounds[2] - width
                pinned.push('right')
              } else {
                oob.push('right')
              }
            }

            if (pinned.length) {
              (function () {
                var pinnedClass = undefined
                if (typeof _this.options.pinnedClass !== 'undefined') {
                  pinnedClass = _this.options.pinnedClass
                } else {
                  pinnedClass = _this.getClass('pinned')
                }

                addClasses.push(pinnedClass)
                pinned.forEach(function (side) {
                  addClasses.push(pinnedClass + '-' + side)
                })
              })()
            }

            if (oob.length) {
              (function () {
                var oobClass = undefined
                if (typeof _this.options.outOfBoundsClass !== 'undefined') {
                  oobClass = _this.options.outOfBoundsClass
                } else {
                  oobClass = _this.getClass('out-of-bounds')
                }

                addClasses.push(oobClass)
                oob.forEach(function (side) {
                  addClasses.push(oobClass + '-' + side)
                })
              })()
            }

            if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
              eAttachment.left = tAttachment.left = false
            }
            if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
              eAttachment.top = tAttachment.top = false
            }

            if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
              _this.updateAttachClasses(eAttachment, tAttachment)
              _this.trigger('update', {
                attachment: eAttachment,
                targetAttachment: tAttachment
              })
            }
          })

          defer(function () {
            if (!(_this.options.addTargetClasses === false)) {
              updateClasses(_this.target, addClasses, allClasses)
            }
            updateClasses(_this.element, addClasses, allClasses)
          })

          return {top: top, left: left}
        }
      })
      /* globals TetherBase */

      'use strict'

      var _TetherBase$Utils = TetherBase.Utils
      var getBounds = _TetherBase$Utils.getBounds
      var updateClasses = _TetherBase$Utils.updateClasses
      var defer = _TetherBase$Utils.defer

      TetherBase.modules.push({
        position: function position (_ref) {
          var _this = this

          var top = _ref.top
          var left = _ref.left

          var _cache = this.cache('element-bounds', function () {
            return getBounds(_this.element)
          })

          var height = _cache.height
          var width = _cache.width

          var targetPos = this.getTargetBounds()

          var bottom = top + height
          var right = left + width

          var abutted = []
          if (top <= targetPos.bottom && bottom >= targetPos.top) {
            ['left', 'right'].forEach(function (side) {
              var targetPosSide = targetPos[side]
              if (targetPosSide === left || targetPosSide === right) {
                abutted.push(side)
              }
            })
          }

          if (left <= targetPos.right && right >= targetPos.left) {
            ['top', 'bottom'].forEach(function (side) {
              var targetPosSide = targetPos[side]
              if (targetPosSide === top || targetPosSide === bottom) {
                abutted.push(side)
              }
            })
          }

          var allClasses = []
          var addClasses = []

          var sides = ['left', 'top', 'right', 'bottom']
          allClasses.push(this.getClass('abutted'))
          sides.forEach(function (side) {
            allClasses.push(_this.getClass('abutted') + '-' + side)
          })

          if (abutted.length) {
            addClasses.push(this.getClass('abutted'))
          }

          abutted.forEach(function (side) {
            addClasses.push(_this.getClass('abutted') + '-' + side)
          })

          defer(function () {
            if (!(_this.options.addTargetClasses === false)) {
              updateClasses(_this.target, addClasses, allClasses)
            }
            updateClasses(_this.element, addClasses, allClasses)
          })

          return true
        }
      })
      /* globals TetherBase */

      'use strict'

      var _slicedToArray = (function () {
        function sliceIterator (arr, i) {
          var _arr = []
          var _n = true
          var _d = false
          var _e = undefined
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value)
              if (i && _arr.length === i) break
            }
          } catch (err) {
            _d = true
            _e = err
          } finally { try { if (!_n && _i['return']) _i['return']() } finally { if (_d) throw _e } }
          return _arr
        }

        return function (arr, i) { if (Array.isArray(arr)) { return arr } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i) } else { throw new TypeError('Invalid attempt to destructure non-iterable instance') } }
      })()

      TetherBase.modules.push({
        position: function position (_ref) {
          var top = _ref.top
          var left = _ref.left

          if (!this.options.shift) {
            return
          }

          var shift = this.options.shift
          if (typeof this.options.shift === 'function') {
            shift = this.options.shift.call(this, {top: top, left: left})
          }

          var shiftTop = undefined,
            shiftLeft = undefined
          if (typeof shift === 'string') {
            shift = shift.split(' ')
            shift[1] = shift[1] || shift[0]

            var _shift = shift

            var _shift2 = _slicedToArray(_shift, 2)

            shiftTop = _shift2[0]
            shiftLeft = _shift2[1]

            shiftTop = parseFloat(shiftTop, 10)
            shiftLeft = parseFloat(shiftLeft, 10)
          } else {
            shiftTop = shift.top
            shiftLeft = shift.left
          }

          top += shiftTop
          left += shiftLeft

          return {top: top, left: left}
        }
      })
      return Tether

    }))

    /***/
  }),
  /* 87 */,
  /* 88 */,
  /* 89 */,
  /* 90 */,
  /* 91 */,
  /* 92 */,
  /* 93 */,
  /* 94 */,
  /* 95 */,
  /* 96 */,
  /* 97 */,
  /* 98 */,
  /* 99 */,
  /* 100 */,
  /* 101 */,
  /* 102 */,
  /* 103 */,
  /* 104 */,
  /* 105 */,
  /* 106 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /**
     * vue-router v2.4.0
     * (c) 2017 Evan You
     * @license MIT
     */
    /*  */

    function assert (condition, message) {
      if (!condition) {
        throw new Error(('[vue-router] ' + message))
      }
    }

    function warn (condition, message) {
      if (false) {
        typeof console !== 'undefined' && console.warn(('[vue-router] ' + message))
      }
    }

    var View = {
      name: 'router-view',
      functional: true,
      props: {
        name: {
          type: String,
          default: 'default'
        }
      },
      render: function render (h, ref) {
        var props = ref.props
        var children = ref.children
        var parent = ref.parent
        var data = ref.data

        data.routerView = true

        var name = props.name
        var route = parent.$route
        var cache = parent._routerViewCache || (parent._routerViewCache = {})

        // determine current view depth, also check to see if the tree
        // has been toggled inactive but kept-alive.
        var depth = 0
        var inactive = false
        while (parent) {
          if (parent.$vnode && parent.$vnode.data.routerView) {
            depth++
          }
          if (parent._inactive) {
            inactive = true
          }
          parent = parent.$parent
        }
        data.routerViewDepth = depth

        // render previous view if the tree is inactive and kept-alive
        if (inactive) {
          return h(cache[name], data, children)
        }

        var matched = route.matched[depth]
        // render empty node if no matched route
        if (!matched) {
          cache[name] = null
          return h()
        }

        var component = cache[name] = matched.components[name]

        // attach instance registration hook
        // this will be called in the instance's injected lifecycle hooks
        data.registerRouteInstance = function (vm, val) {
          // val could be undefined for unregistration
          if (matched.instances[name] !== vm) {
            matched.instances[name] = val
          }
        }

        // resolve props
        data.props = resolveProps(route, matched.props && matched.props[name])

        return h(component, data, children)
      }
    }

    function resolveProps (route, config) {
      switch (typeof config) {
        case 'undefined':
          return
        case 'object':
          return config
        case 'function':
          return config(route)
        case 'boolean':
          return config ? route.params : undefined
        default:
          if (false) {
            warn(
              false,
              'props in "' + (route.path) + '" is a ' + (typeof config) + ', ' +
              'expecting an object, function or boolean.'
            )
          }
      }
    }

    /*  */

    var encodeReserveRE = /[!'()*]/g
    var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16) }
    var commaRE = /%2C/g

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
    var encode = function (str) {
      return encodeURIComponent(str)
        .replace(encodeReserveRE, encodeReserveReplacer)
        .replace(commaRE, ',')
    }

    var decode = decodeURIComponent

    function resolveQuery (query,
                           extraQuery,
                           _parseQuery) {
      if (extraQuery === void 0) extraQuery = {}

      var parse = _parseQuery || parseQuery
      var parsedQuery
      try {
        parsedQuery = parse(query || '')
      } catch (e) {
        'production' !== 'production' && warn(false, e.message)
        parsedQuery = {}
      }
      for (var key in extraQuery) {
        var val = extraQuery[key]
        parsedQuery[key] = Array.isArray(val) ? val.slice() : val
      }
      return parsedQuery
    }

    function parseQuery (query) {
      var res = {}

      query = query.trim().replace(/^(\?|#|&)/, '')

      if (!query) {
        return res
      }

      query.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=')
        var key = decode(parts.shift())
        var val = parts.length > 0
          ? decode(parts.join('='))
          : null

        if (res[key] === undefined) {
          res[key] = val
        } else if (Array.isArray(res[key])) {
          res[key].push(val)
        } else {
          res[key] = [res[key], val]
        }
      })

      return res
    }

    function stringifyQuery (obj) {
      var res = obj ? Object.keys(obj).map(function (key) {
        var val = obj[key]

        if (val === undefined) {
          return ''
        }

        if (val === null) {
          return encode(key)
        }

        if (Array.isArray(val)) {
          var result = []
          val.slice().forEach(function (val2) {
            if (val2 === undefined) {
              return
            }
            if (val2 === null) {
              result.push(encode(key))
            } else {
              result.push(encode(key) + '=' + encode(val2))
            }
          })
          return result.join('&')
        }

        return encode(key) + '=' + encode(val)
      }).filter(function (x) { return x.length > 0 }).join('&') : null
      return res ? ('?' + res) : ''
    }

    /*  */

    var trailingSlashRE = /\/?$/

    function createRoute (record,
                          location,
                          redirectedFrom,
                          router) {
      var stringifyQuery$$1 = router && router.options.stringifyQuery
      var route = {
        name: location.name || (record && record.name),
        meta: (record && record.meta) || {},
        path: location.path || '/',
        hash: location.hash || '',
        query: location.query || {},
        params: location.params || {},
        fullPath: getFullPath(location, stringifyQuery$$1),
        matched: record ? formatMatch(record) : []
      }
      if (redirectedFrom) {
        route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1)
      }
      return Object.freeze(route)
    }

// the starting route that represents the initial state
    var START = createRoute(null, {
      path: '/'
    })

    function formatMatch (record) {
      var res = []
      while (record) {
        res.unshift(record)
        record = record.parent
      }
      return res
    }

    function getFullPath (ref,
                          _stringifyQuery) {
      var path = ref.path
      var query = ref.query
      if (query === void 0) query = {}
      var hash = ref.hash
      if (hash === void 0) hash = ''

      var stringify = _stringifyQuery || stringifyQuery
      return (path || '/') + stringify(query) + hash
    }

    function isSameRoute (a, b) {
      if (b === START) {
        return a === b
      } else if (!b) {
        return false
      } else if (a.path && b.path) {
        return (
          a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
          a.hash === b.hash &&
          isObjectEqual(a.query, b.query)
        )
      } else if (a.name && b.name) {
        return (
          a.name === b.name &&
          a.hash === b.hash &&
          isObjectEqual(a.query, b.query) &&
          isObjectEqual(a.params, b.params)
        )
      } else {
        return false
      }
    }

    function isObjectEqual (a, b) {
      if (a === void 0) a = {}
      if (b === void 0) b = {}

      var aKeys = Object.keys(a)
      var bKeys = Object.keys(b)
      if (aKeys.length !== bKeys.length) {
        return false
      }
      return aKeys.every(function (key) { return String(a[key]) === String(b[key]) })
    }

    function isIncludedRoute (current, target) {
      return (
        current.path.replace(trailingSlashRE, '/').indexOf(
          target.path.replace(trailingSlashRE, '/')
        ) === 0 &&
        (!target.hash || current.hash === target.hash) &&
        queryIncludes(current.query, target.query)
      )
    }

    function queryIncludes (current, target) {
      for (var key in target) {
        if (!(key in current)) {
          return false
        }
      }
      return true
    }

    /*  */

// work around weird flow bug
    var toTypes = [String, Object]
    var eventTypes = [String, Array]

    var Link = {
      name: 'router-link',
      props: {
        to: {
          type: toTypes,
          required: true
        },
        tag: {
          type: String,
          default: 'a'
        },
        exact: Boolean,
        append: Boolean,
        replace: Boolean,
        activeClass: {
          type: String,
          default: 'router-link-active'
        },
        event: {
          type: eventTypes,
          default: 'click'
        }
      },
      render: function render (h) {
        var this$1 = this

        var router = this.$router
        var current = this.$route
        var ref = router.resolve(this.to, current, this.append)
        var location = ref.location
        var route = ref.route
        var href = ref.href

        var classes = {}
        var globalActiveClass = router.options.linkActiveClass
        var activeClass = globalActiveClass == null
          ? this.activeClass
          : globalActiveClass
        var compareTarget = location.path
          ? createRoute(null, location, null, router)
          : route

        classes[activeClass] = this.exact
          ? isSameRoute(current, compareTarget)
          : isIncludedRoute(current, compareTarget)

        var handler = function (e) {
          if (guardEvent(e)) {
            if (this$1.replace) {
              router.replace(location)
            } else {
              router.push(location)
            }
          }
        }

        var on = {click: guardEvent}
        if (Array.isArray(this.event)) {
          this.event.forEach(function (e) { on[e] = handler })
        } else {
          on[this.event] = handler
        }

        var data = {
          class: classes
        }

        if (this.tag === 'a') {
          data.on = on
          data.attrs = {href: href}
        } else {
          // find the first <a> child and apply listener and href
          var a = findAnchor(this.$slots.default)
          if (a) {
            // in case the <a> is a static node
            a.isStatic = false
            var extend = _Vue.util.extend
            var aData = a.data = extend({}, a.data)
            aData.on = on
            var aAttrs = a.data.attrs = extend({}, a.data.attrs)
            aAttrs.href = href
          } else {
            // doesn't have <a> child, apply listener to self
            data.on = on
          }
        }

        return h(this.tag, data, this.$slots.default)
      }
    }

    function guardEvent (e) {
      // don't redirect with control keys
      if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
      // don't redirect when preventDefault called
      if (e.defaultPrevented) { return }
      // don't redirect on right click
      if (e.button !== undefined && e.button !== 0) { return }
      // don't redirect if `target="_blank"`
      if (e.currentTarget && e.currentTarget.getAttribute) {
        var target = e.currentTarget.getAttribute('target')
        if (/\b_blank\b/i.test(target)) { return }
      }
      // this may be a Weex event which doesn't have this method
      if (e.preventDefault) {
        e.preventDefault()
      }
      return true
    }

    function findAnchor (children) {
      if (children) {
        var child
        for (var i = 0; i < children.length; i++) {
          child = children[i]
          if (child.tag === 'a') {
            return child
          }
          if (child.children && (child = findAnchor(child.children))) {
            return child
          }
        }
      }
    }

    var _Vue

    function install (Vue) {
      if (install.installed) { return }
      install.installed = true

      _Vue = Vue

      Object.defineProperty(Vue.prototype, '$router', {
        get: function get () { return this.$root._router }
      })

      Object.defineProperty(Vue.prototype, '$route', {
        get: function get () { return this.$root._route }
      })

      var isDef = function (v) { return v !== undefined }

      var registerInstance = function (vm, callVal) {
        var i = vm.$options._parentVnode
        if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
          i(vm, callVal)
        }
      }

      Vue.mixin({
        beforeCreate: function beforeCreate () {
          if (isDef(this.$options.router)) {
            this._router = this.$options.router
            this._router.init(this)
            Vue.util.defineReactive(this, '_route', this._router.history.current)
          }
          registerInstance(this, this)
        },
        destroyed: function destroyed () {
          registerInstance(this)
        }
      })

      Vue.component('router-view', View)
      Vue.component('router-link', Link)

      var strats = Vue.config.optionMergeStrategies
      // use the same hook merging strategy for route hooks
      strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created
    }

    /*  */

    var inBrowser = typeof window !== 'undefined'

    /*  */

    function resolvePath (relative,
                          base,
                          append) {
      var firstChar = relative.charAt(0)
      if (firstChar === '/') {
        return relative
      }

      if (firstChar === '?' || firstChar === '#') {
        return base + relative
      }

      var stack = base.split('/')

      // remove trailing segment if:
      // - not appending
      // - appending to trailing slash (last segment is empty)
      if (!append || !stack[stack.length - 1]) {
        stack.pop()
      }

      // resolve relative path
      var segments = relative.replace(/^\//, '').split('/')
      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i]
        if (segment === '..') {
          stack.pop()
        } else if (segment !== '.') {
          stack.push(segment)
        }
      }

      // ensure leading slash
      if (stack[0] !== '') {
        stack.unshift('')
      }

      return stack.join('/')
    }

    function parsePath (path) {
      var hash = ''
      var query = ''

      var hashIndex = path.indexOf('#')
      if (hashIndex >= 0) {
        hash = path.slice(hashIndex)
        path = path.slice(0, hashIndex)
      }

      var queryIndex = path.indexOf('?')
      if (queryIndex >= 0) {
        query = path.slice(queryIndex + 1)
        path = path.slice(0, queryIndex)
      }

      return {
        path: path,
        query: query,
        hash: hash
      }
    }

    function cleanPath (path) {
      return path.replace(/\/\//g, '/')
    }

    /*  */

    function createRouteMap (routes,
                             oldPathMap,
                             oldNameMap) {
      var pathMap = oldPathMap || Object.create(null)
      var nameMap = oldNameMap || Object.create(null)

      routes.forEach(function (route) {
        addRouteRecord(pathMap, nameMap, route)
      })

      return {
        pathMap: pathMap,
        nameMap: nameMap
      }
    }

    function addRouteRecord (pathMap,
                             nameMap,
                             route,
                             parent,
                             matchAs) {
      var path = route.path
      var name = route.name
      if (false) {
        assert(path != null, '"path" is required in a route configuration.')
        assert(
          typeof route.component !== 'string',
          'route config "component" for path: ' + (String(path || name)) + ' cannot be a ' +
          'string id. Use an actual component instead.'
        )
      }

      var record = {
        path: normalizePath(path, parent),
        components: route.components || {default: route.component},
        instances: {},
        name: name,
        parent: parent,
        matchAs: matchAs,
        redirect: route.redirect,
        beforeEnter: route.beforeEnter,
        meta: route.meta || {},
        props: route.props == null
          ? {}
          : route.components
            ? route.props
            : {default: route.props}
      }

      if (route.children) {
        // Warn if route is named and has a default child route.
        // If users navigate to this route by name, the default child will
        // not be rendered (GH Issue #629)
        if (false) {
          if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path) })) {
            warn(
              false,
              'Named Route \'' + (route.name) + '\' has a default child route. ' +
              'When navigating to this named route (:to="{name: \'' + (route.name) + '\'"), ' +
              'the default child route will not be rendered. Remove the name from ' +
              'this route and use the name of the default child route for named ' +
              'links instead.'
            )
          }
        }
        route.children.forEach(function (child) {
          var childMatchAs = matchAs
            ? cleanPath((matchAs + '/' + (child.path)))
            : undefined
          addRouteRecord(pathMap, nameMap, child, record, childMatchAs)
        })
      }

      if (route.alias !== undefined) {
        if (Array.isArray(route.alias)) {
          route.alias.forEach(function (alias) {
            var aliasRoute = {
              path: alias,
              children: route.children
            }
            addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path)
          })
        } else {
          var aliasRoute = {
            path: route.alias,
            children: route.children
          }
          addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path)
        }
      }

      if (!pathMap[record.path]) {
        pathMap[record.path] = record
      }

      if (name) {
        if (!nameMap[name]) {
          nameMap[name] = record
        } else if (false) {
          warn(
            false,
            'Duplicate named routes definition: ' +
            '{ name: "' + name + '", path: "' + (record.path) + '" }'
          )
        }
      }
    }

    function normalizePath (path, parent) {
      path = path.replace(/\/$/, '')
      if (path[0] === '/') { return path }
      if (parent == null) { return path }
      return cleanPath(((parent.path) + '/' + path))
    }

    var index$1 = Array.isArray || function (arr) {
        return Object.prototype.toString.call(arr) == '[object Array]'
      }

    var isarray = index$1

    /**
     * Expose `pathToRegexp`.
     */
    var index = pathToRegexp
    var parse_1 = parse
    var compile_1 = compile
    var tokensToFunction_1 = tokensToFunction
    var tokensToRegExp_1 = tokensToRegExp

    /**
     * The main path matching regexp utility.
     *
     * @type {RegExp}
     */
    var PATH_REGEXP = new RegExp([
      // Match escaped characters that would otherwise appear in future matches.
      // This allows the user to escape special characters that won't transform.
      '(\\\\.)',
      // Match Express-style parameters and un-named parameters with a prefix
      // and optional suffixes. Matches appear as:
      //
      // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
      // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
      // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
      '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
    ].join('|'), 'g')

    /**
     * Parse a string for the raw tokens.
     *
     * @param  {string}  str
     * @param  {Object=} options
     * @return {!Array}
     */
    function parse (str, options) {
      var tokens = []
      var key = 0
      var index = 0
      var path = ''
      var defaultDelimiter = options && options.delimiter || '/'
      var res

      while ((res = PATH_REGEXP.exec(str)) != null) {
        var m = res[0]
        var escaped = res[1]
        var offset = res.index
        path += str.slice(index, offset)
        index = offset + m.length

        // Ignore already escaped sequences.
        if (escaped) {
          path += escaped[1]
          continue
        }

        var next = str[index]
        var prefix = res[2]
        var name = res[3]
        var capture = res[4]
        var group = res[5]
        var modifier = res[6]
        var asterisk = res[7]

        // Push the current path onto the tokens.
        if (path) {
          tokens.push(path)
          path = ''
        }

        var partial = prefix != null && next != null && next !== prefix
        var repeat = modifier === '+' || modifier === '*'
        var optional = modifier === '?' || modifier === '*'
        var delimiter = res[2] || defaultDelimiter
        var pattern = capture || group

        tokens.push({
          name: name || key++,
          prefix: prefix || '',
          delimiter: delimiter,
          optional: optional,
          repeat: repeat,
          partial: partial,
          asterisk: !!asterisk,
          pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
        })
      }

      // Match any characters still remaining.
      if (index < str.length) {
        path += str.substr(index)
      }

      // If the path exists, push it onto the end.
      if (path) {
        tokens.push(path)
      }

      return tokens
    }

    /**
     * Compile a string to a template function for the path.
     *
     * @param  {string}             str
     * @param  {Object=}            options
     * @return {!function(Object=, Object=)}
     */
    function compile (str, options) {
      return tokensToFunction(parse(str, options))
    }

    /**
     * Prettier encoding of URI path segments.
     *
     * @param  {string}
     * @return {string}
     */
    function encodeURIComponentPretty (str) {
      return encodeURI(str).replace(/[\/?#]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    /**
     * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
     *
     * @param  {string}
     * @return {string}
     */
    function encodeAsterisk (str) {
      return encodeURI(str).replace(/[?#]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    /**
     * Expose a method for transforming tokens into the path function.
     */
    function tokensToFunction (tokens) {
      // Compile all the tokens into regexps.
      var matches = new Array(tokens.length)

      // Compile all the patterns before compilation.
      for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === 'object') {
          matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
        }
      }

      return function (obj, opts) {
        var path = ''
        var data = obj || {}
        var options = opts || {}
        var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i]

          if (typeof token === 'string') {
            path += token

            continue
          }

          var value = data[token.name]
          var segment

          if (value == null) {
            if (token.optional) {
              // Prepend partial segment prefixes.
              if (token.partial) {
                path += token.prefix
              }

              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to be defined')
            }
          }

          if (isarray(value)) {
            if (!token.repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
            }

            if (value.length === 0) {
              if (token.optional) {
                continue
              } else {
                throw new TypeError('Expected "' + token.name + '" to not be empty')
              }
            }

            for (var j = 0; j < value.length; j++) {
              segment = encode(value[j])

              if (!matches[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
              }

              path += (j === 0 ? token.prefix : token.delimiter) + segment
            }

            continue
          }

          segment = token.asterisk ? encodeAsterisk(value) : encode(value)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
          }

          path += token.prefix + segment
        }

        return path
      }
    }

    /**
     * Escape a regular expression string.
     *
     * @param  {string} str
     * @return {string}
     */
    function escapeString (str) {
      return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
    }

    /**
     * Escape the capturing group by escaping special characters and meaning.
     *
     * @param  {string} group
     * @return {string}
     */
    function escapeGroup (group) {
      return group.replace(/([=!:$\/()])/g, '\\$1')
    }

    /**
     * Attach the keys as a property of the regexp.
     *
     * @param  {!RegExp} re
     * @param  {Array}   keys
     * @return {!RegExp}
     */
    function attachKeys (re, keys) {
      re.keys = keys
      return re
    }

    /**
     * Get the flags for a regexp from the options.
     *
     * @param  {Object} options
     * @return {string}
     */
    function flags (options) {
      return options.sensitive ? '' : 'i'
    }

    /**
     * Pull out keys from a regexp.
     *
     * @param  {!RegExp} path
     * @param  {!Array}  keys
     * @return {!RegExp}
     */
    function regexpToRegexp (path, keys) {
      // Use a negative lookahead to match only capturing groups.
      var groups = path.source.match(/\((?!\?)/g)

      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: null,
            delimiter: null,
            optional: false,
            repeat: false,
            partial: false,
            asterisk: false,
            pattern: null
          })
        }
      }

      return attachKeys(path, keys)
    }

    /**
     * Transform an array into a regexp.
     *
     * @param  {!Array}  path
     * @param  {Array}   keys
     * @param  {!Object} options
     * @return {!RegExp}
     */
    function arrayToRegexp (path, keys, options) {
      var parts = []

      for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source)
      }

      var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

      return attachKeys(regexp, keys)
    }

    /**
     * Create a path regexp from string input.
     *
     * @param  {string}  path
     * @param  {!Array}  keys
     * @param  {!Object} options
     * @return {!RegExp}
     */
    function stringToRegexp (path, keys, options) {
      return tokensToRegExp(parse(path, options), keys, options)
    }

    /**
     * Expose a function for taking tokens and returning a RegExp.
     *
     * @param  {!Array}          tokens
     * @param  {(Array|Object)=} keys
     * @param  {Object=}         options
     * @return {!RegExp}
     */
    function tokensToRegExp (tokens, keys, options) {
      if (!isarray(keys)) {
        options = /** @type {!Object} */ (keys || options)
        keys = []
      }

      options = options || {}

      var strict = options.strict
      var end = options.end !== false
      var route = ''

      // Iterate over the tokens and create our regexp string.
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]

        if (typeof token === 'string') {
          route += escapeString(token)
        } else {
          var prefix = escapeString(token.prefix)
          var capture = '(?:' + token.pattern + ')'

          keys.push(token)

          if (token.repeat) {
            capture += '(?:' + prefix + capture + ')*'
          }

          if (token.optional) {
            if (!token.partial) {
              capture = '(?:' + prefix + '(' + capture + '))?'
            } else {
              capture = prefix + '(' + capture + ')?'
            }
          } else {
            capture = prefix + '(' + capture + ')'
          }

          route += capture
        }
      }

      var delimiter = escapeString(options.delimiter || '/')
      var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

      // In non-strict mode we allow a slash at the end of match. If the path to
      // match already ends with a slash, we remove it for consistency. The slash
      // is valid at the end of a path match, not in the middle. This is important
      // in non-ending mode, where "/test/" shouldn't match "/test//route".
      if (!strict) {
        route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
      }

      if (end) {
        route += '$'
      } else {
        // In non-ending mode, we need the capturing groups to match as much as
        // possible by using a positive lookahead to the end or next path segment.
        route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
      }

      return attachKeys(new RegExp('^' + route, flags(options)), keys)
    }

    /**
     * Normalize the given path string, returning a regular expression.
     *
     * An empty array can be passed in for the keys, which will hold the
     * placeholder key descriptions. For example, using `/user/:id`, `keys` will
     * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
     *
     * @param  {(string|RegExp|Array)} path
     * @param  {(Array|Object)=}       keys
     * @param  {Object=}               options
     * @return {!RegExp}
     */
    function pathToRegexp (path, keys, options) {
      if (!isarray(keys)) {
        options = /** @type {!Object} */ (keys || options)
        keys = []
      }

      options = options || {}

      if (path instanceof RegExp) {
        return regexpToRegexp(path, /** @type {!Array} */ (keys))
      }

      if (isarray(path)) {
        return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
      }

      return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
    }

    index.parse = parse_1
    index.compile = compile_1
    index.tokensToFunction = tokensToFunction_1
    index.tokensToRegExp = tokensToRegExp_1

    /*  */

    var regexpCache = Object.create(null)

    function getRouteRegex (path) {
      var hit = regexpCache[path]
      var keys, regexp

      if (hit) {
        keys = hit.keys
        regexp = hit.regexp
      } else {
        keys = []
        regexp = index(path, keys)
        regexpCache[path] = {keys: keys, regexp: regexp}
      }

      return {keys: keys, regexp: regexp}
    }

    var regexpCompileCache = Object.create(null)

    function fillParams (path,
                         params,
                         routeMsg) {
      try {
        var filler =
          regexpCompileCache[path] ||
          (regexpCompileCache[path] = index.compile(path))
        return filler(params || {}, {pretty: true})
      } catch (e) {
        if (false) {
          warn(false, ('missing param for ' + routeMsg + ': ' + (e.message)))
        }
        return ''
      }
    }

    /*  */

    function normalizeLocation (raw,
                                current,
                                append,
                                router) {
      var next = typeof raw === 'string' ? {path: raw} : raw
      // named target
      if (next.name || next._normalized) {
        return next
      }

      // relative params
      if (!next.path && next.params && current) {
        next = assign({}, next)
        next._normalized = true
        var params = assign(assign({}, current.params), next.params)
        if (current.name) {
          next.name = current.name
          next.params = params
        } else if (current.matched) {
          var rawPath = current.matched[current.matched.length - 1].path
          next.path = fillParams(rawPath, params, ('path ' + (current.path)))
        } else if (false) {
          warn(false, 'relative params navigation requires a current route.')
        }
        return next
      }

      var parsedPath = parsePath(next.path || '')
      var basePath = (current && current.path) || '/'
      var path = parsedPath.path
        ? resolvePath(parsedPath.path, basePath, append || next.append)
        : (current && current.path) || '/'

      var query = resolveQuery(
        parsedPath.query,
        next.query,
        router && router.options.parseQuery
      )

      var hash = next.hash || parsedPath.hash
      if (hash && hash.charAt(0) !== '#') {
        hash = '#' + hash
      }

      return {
        _normalized: true,
        path: path,
        query: query,
        hash: hash
      }
    }

    function assign (a, b) {
      for (var key in b) {
        a[key] = b[key]
      }
      return a
    }

    /*  */

    function createMatcher (routes,
                            router) {
      var ref = createRouteMap(routes)
      var pathMap = ref.pathMap
      var nameMap = ref.nameMap

      function addRoutes (routes) {
        createRouteMap(routes, pathMap, nameMap)
      }

      function match (raw,
                      currentRoute,
                      redirectedFrom) {
        var location = normalizeLocation(raw, currentRoute, false, router)
        var name = location.name

        if (name) {
          var record = nameMap[name]
          if (false) {
            warn(record, ('Route with name \'' + name + '\' does not exist'))
          }
          var paramNames = getRouteRegex(record.path).keys
            .filter(function (key) { return !key.optional })
            .map(function (key) { return key.name })

          if (typeof location.params !== 'object') {
            location.params = {}
          }

          if (currentRoute && typeof currentRoute.params === 'object') {
            for (var key in currentRoute.params) {
              if (!(key in location.params) && paramNames.indexOf(key) > -1) {
                location.params[key] = currentRoute.params[key]
              }
            }
          }

          if (record) {
            location.path = fillParams(record.path, location.params, ('named route "' + name + '"'))
            return _createRoute(record, location, redirectedFrom)
          }
        } else if (location.path) {
          location.params = {}
          for (var path in pathMap) {
            if (matchRoute(path, location.params, location.path)) {
              return _createRoute(pathMap[path], location, redirectedFrom)
            }
          }
        }
        // no match
        return _createRoute(null, location)
      }

      function redirect (record,
                         location) {
        var originalRedirect = record.redirect
        var redirect = typeof originalRedirect === 'function'
          ? originalRedirect(createRoute(record, location, null, router))
          : originalRedirect

        if (typeof redirect === 'string') {
          redirect = {path: redirect}
        }

        if (!redirect || typeof redirect !== 'object') {
          if (false) {
            warn(
              false, ('invalid redirect option: ' + (JSON.stringify(redirect)))
            )
          }
          return _createRoute(null, location)
        }

        var re = redirect
        var name = re.name
        var path = re.path
        var query = location.query
        var hash = location.hash
        var params = location.params
        query = re.hasOwnProperty('query') ? re.query : query
        hash = re.hasOwnProperty('hash') ? re.hash : hash
        params = re.hasOwnProperty('params') ? re.params : params

        if (name) {
          // resolved named direct
          var targetRecord = nameMap[name]
          if (false) {
            assert(targetRecord, ('redirect failed: named route "' + name + '" not found.'))
          }
          return match({
            _normalized: true,
            name: name,
            query: query,
            hash: hash,
            params: params
          }, undefined, location)
        } else if (path) {
          // 1. resolve relative redirect
          var rawPath = resolveRecordPath(path, record)
          // 2. resolve params
          var resolvedPath = fillParams(rawPath, params, ('redirect route with path "' + rawPath + '"'))
          // 3. rematch with existing query and hash
          return match({
            _normalized: true,
            path: resolvedPath,
            query: query,
            hash: hash
          }, undefined, location)
        } else {
          if (false) {
            warn(false, ('invalid redirect option: ' + (JSON.stringify(redirect))))
          }
          return _createRoute(null, location)
        }
      }

      function alias (record,
                      location,
                      matchAs) {
        var aliasedPath = fillParams(matchAs, location.params, ('aliased route with path "' + matchAs + '"'))
        var aliasedMatch = match({
          _normalized: true,
          path: aliasedPath
        })
        if (aliasedMatch) {
          var matched = aliasedMatch.matched
          var aliasedRecord = matched[matched.length - 1]
          location.params = aliasedMatch.params
          return _createRoute(aliasedRecord, location)
        }
        return _createRoute(null, location)
      }

      function _createRoute (record,
                             location,
                             redirectedFrom) {
        if (record && record.redirect) {
          return redirect(record, redirectedFrom || location)
        }
        if (record && record.matchAs) {
          return alias(record, location, record.matchAs)
        }
        return createRoute(record, location, redirectedFrom, router)
      }

      return {
        match: match,
        addRoutes: addRoutes
      }
    }

    function matchRoute (path,
                         params,
                         pathname) {
      var ref = getRouteRegex(path)
      var regexp = ref.regexp
      var keys = ref.keys
      var m = pathname.match(regexp)

      if (!m) {
        return false
      } else if (!params) {
        return true
      }

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1]
        var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
        if (key) { params[key.name] = val }
      }

      return true
    }

    function resolveRecordPath (path, record) {
      return resolvePath(path, record.parent ? record.parent.path : '/', true)
    }

    /*  */

    var positionStore = Object.create(null)

    function setupScroll () {
      window.addEventListener('popstate', function (e) {
        saveScrollPosition()
        if (e.state && e.state.key) {
          setStateKey(e.state.key)
        }
      })
    }

    function handleScroll (router,
                           to,
                           from,
                           isPop) {
      if (!router.app) {
        return
      }

      var behavior = router.options.scrollBehavior
      if (!behavior) {
        return
      }

      if (false) {
        assert(typeof behavior === 'function', 'scrollBehavior must be a function')
      }

      // wait until re-render finishes before scrolling
      router.app.$nextTick(function () {
        var position = getScrollPosition()
        var shouldScroll = behavior(to, from, isPop ? position : null)
        if (!shouldScroll) {
          return
        }
        var isObject = typeof shouldScroll === 'object'
        if (isObject && typeof shouldScroll.selector === 'string') {
          var el = document.querySelector(shouldScroll.selector)
          if (el) {
            position = getElementPosition(el)
          } else if (isValidPosition(shouldScroll)) {
            position = normalizePosition(shouldScroll)
          }
        } else if (isObject && isValidPosition(shouldScroll)) {
          position = normalizePosition(shouldScroll)
        }

        if (position) {
          window.scrollTo(position.x, position.y)
        }
      })
    }

    function saveScrollPosition () {
      var key = getStateKey()
      if (key) {
        positionStore[key] = {
          x: window.pageXOffset,
          y: window.pageYOffset
        }
      }
    }

    function getScrollPosition () {
      var key = getStateKey()
      if (key) {
        return positionStore[key]
      }
    }

    function getElementPosition (el) {
      var docEl = document.documentElement
      var docRect = docEl.getBoundingClientRect()
      var elRect = el.getBoundingClientRect()
      return {
        x: elRect.left - docRect.left,
        y: elRect.top - docRect.top
      }
    }

    function isValidPosition (obj) {
      return isNumber(obj.x) || isNumber(obj.y)
    }

    function normalizePosition (obj) {
      return {
        x: isNumber(obj.x) ? obj.x : window.pageXOffset,
        y: isNumber(obj.y) ? obj.y : window.pageYOffset
      }
    }

    function isNumber (v) {
      return typeof v === 'number'
    }

    /*  */

    var supportsPushState = inBrowser && (function () {
        var ua = window.navigator.userAgent

        if (
          (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
          ua.indexOf('Mobile Safari') !== -1 &&
          ua.indexOf('Chrome') === -1 &&
          ua.indexOf('Windows Phone') === -1
        ) {
          return false
        }

        return window.history && 'pushState' in window.history
      })()

// use User Timing api (if present) for more accurate key precision
    var Time = inBrowser && window.performance && window.performance.now
      ? window.performance
      : Date

    var _key = genKey()

    function genKey () {
      return Time.now().toFixed(3)
    }

    function getStateKey () {
      return _key
    }

    function setStateKey (key) {
      _key = key
    }

    function pushState (url, replace) {
      saveScrollPosition()
      // try...catch the pushState call to get around Safari
      // DOM Exception 18 where it limits to 100 pushState calls
      var history = window.history
      try {
        if (replace) {
          history.replaceState({key: _key}, '', url)
        } else {
          _key = genKey()
          history.pushState({key: _key}, '', url)
        }
      } catch (e) {
        window.location[replace ? 'replace' : 'assign'](url)
      }
    }

    function replaceState (url) {
      pushState(url, true)
    }

    /*  */

    function runQueue (queue, fn, cb) {
      var step = function (index) {
        if (index >= queue.length) {
          cb()
        } else {
          if (queue[index]) {
            fn(queue[index], function () {
              step(index + 1)
            })
          } else {
            step(index + 1)
          }
        }
      }
      step(0)
    }

    /*  */

    var History = function History (router, base) {
      this.router = router
      this.base = normalizeBase(base)
      // start with a route object that stands for "nowhere"
      this.current = START
      this.pending = null
      this.ready = false
      this.readyCbs = []
      this.readyErrorCbs = []
      this.errorCbs = []
    }

    History.prototype.listen = function listen (cb) {
      this.cb = cb
    }

    History.prototype.onReady = function onReady (cb, errorCb) {
      if (this.ready) {
        cb()
      } else {
        this.readyCbs.push(cb)
        if (errorCb) {
          this.readyErrorCbs.push(errorCb)
        }
      }
    }

    History.prototype.onError = function onError (errorCb) {
      this.errorCbs.push(errorCb)
    }

    History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
      var this$1 = this

      var route = this.router.match(location, this.current)
      this.confirmTransition(route, function () {
        this$1.updateRoute(route)
        onComplete && onComplete(route)
        this$1.ensureURL()

        // fire ready cbs once
        if (!this$1.ready) {
          this$1.ready = true
          this$1.readyCbs.forEach(function (cb) { cb(route) })
        }
      }, function (err) {
        if (onAbort) {
          onAbort(err)
        }
        if (err && !this$1.ready) {
          this$1.ready = true
          this$1.readyErrorCbs.forEach(function (cb) { cb(err) })
        }
      })
    }

    History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
      var this$1 = this

      var current = this.current
      var abort = function (err) {
        if (err instanceof Error) {
          this$1.errorCbs.forEach(function (cb) { cb(err) })
        }
        onAbort && onAbort(err)
      }
      if (
        isSameRoute(route, current) &&
        // in the case the route map has been dynamically appended to
        route.matched.length === current.matched.length
      ) {
        this.ensureURL()
        return abort()
      }

      var ref = resolveQueue(this.current.matched, route.matched)
      var updated = ref.updated
      var deactivated = ref.deactivated
      var activated = ref.activated

      var queue = [].concat(
        // in-component leave guards
        extractLeaveGuards(deactivated),
        // global before hooks
        this.router.beforeHooks,
        // in-component update hooks
        extractUpdateHooks(updated),
        // in-config enter guards
        activated.map(function (m) { return m.beforeEnter }),
        // async components
        resolveAsyncComponents(activated)
      )

      this.pending = route
      var iterator = function (hook, next) {
        if (this$1.pending !== route) {
          return abort()
        }
        try {
          hook(route, current, function (to) {
            if (to === false || to instanceof Error) {
              // next(false) -> abort navigation, ensure current URL
              this$1.ensureURL(true)
              abort(to)
            } else if (typeof to === 'string' || typeof to === 'object') {
              // next('/') or next({ path: '/' }) -> redirect
              abort()
              if (typeof to === 'object' && to.replace) {
                this$1.replace(to)
              } else {
                this$1.push(to)
              }
            } else {
              // confirm transition and pass on the value
              next(to)
            }
          })
        } catch (e) {
          abort(e)
        }
      }

      runQueue(queue, iterator, function () {
        var postEnterCbs = []
        var isValid = function () { return this$1.current === route }
        var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid)
        // wait until async components are resolved before
        // extracting in-component enter guards
        runQueue(enterGuards, iterator, function () {
          if (this$1.pending !== route) {
            return abort()
          }
          this$1.pending = null
          onComplete(route)
          if (this$1.router.app) {
            this$1.router.app.$nextTick(function () {
              postEnterCbs.forEach(function (cb) { cb() })
            })
          }
        })
      })
    }

    History.prototype.updateRoute = function updateRoute (route) {
      var prev = this.current
      this.current = route
      this.cb && this.cb(route)
      this.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev)
      })
    }

    function normalizeBase (base) {
      if (!base) {
        if (inBrowser) {
          // respect <base> tag
          var baseEl = document.querySelector('base')
          base = (baseEl && baseEl.getAttribute('href')) || '/'
        } else {
          base = '/'
        }
      }
      // make sure there's the starting slash
      if (base.charAt(0) !== '/') {
        base = '/' + base
      }
      // remove trailing slash
      return base.replace(/\/$/, '')
    }

    function resolveQueue (current,
                           next) {
      var i
      var max = Math.max(current.length, next.length)
      for (i = 0; i < max; i++) {
        if (current[i] !== next[i]) {
          break
        }
      }
      return {
        updated: next.slice(0, i),
        activated: next.slice(i),
        deactivated: current.slice(i)
      }
    }

    function extractGuards (records,
                            name,
                            bind,
                            reverse) {
      var guards = flatMapComponents(records, function (def, instance, match, key) {
        var guard = extractGuard(def, name)
        if (guard) {
          return Array.isArray(guard)
            ? guard.map(function (guard) { return bind(guard, instance, match, key) })
            : bind(guard, instance, match, key)
        }
      })
      return flatten(reverse ? guards.reverse() : guards)
    }

    function extractGuard (def,
                           key) {
      if (typeof def !== 'function') {
        // extend now so that global mixins are applied.
        def = _Vue.extend(def)
      }
      return def.options[key]
    }

    function extractLeaveGuards (deactivated) {
      return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
    }

    function extractUpdateHooks (updated) {
      return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
    }

    function bindGuard (guard, instance) {
      return function boundRouteGuard () {
        return guard.apply(instance, arguments)
      }
    }

    function extractEnterGuards (activated,
                                 cbs,
                                 isValid) {
      return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
        return bindEnterGuard(guard, match, key, cbs, isValid)
      })
    }

    function bindEnterGuard (guard,
                             match,
                             key,
                             cbs,
                             isValid) {
      return function routeEnterGuard (to, from, next) {
        return guard(to, from, function (cb) {
          next(cb)
          if (typeof cb === 'function') {
            cbs.push(function () {
              // #750
              // if a router-view is wrapped with an out-in transition,
              // the instance may not have been registered at this time.
              // we will need to poll for registration until current route
              // is no longer valid.
              poll(cb, match.instances, key, isValid)
            })
          }
        })
      }
    }

    function poll (cb, // somehow flow cannot infer this is a function
                   instances,
                   key,
                   isValid) {
      if (instances[key]) {
        cb(instances[key])
      } else if (isValid()) {
        setTimeout(function () {
          poll(cb, instances, key, isValid)
        }, 16)
      }
    }

    function resolveAsyncComponents (matched) {
      var _next
      var pending = 0
      var error = null

      flatMapComponents(matched, function (def, _, match, key) {
        // if it's a function and doesn't have cid attached,
        // assume it's an async component resolve function.
        // we are not using Vue's default async resolving mechanism because
        // we want to halt the navigation until the incoming component has been
        // resolved.
        if (typeof def === 'function' && def.cid === undefined) {
          pending++

          var resolve = once(function (resolvedDef) {
            // save resolved on async factory in case it's used elsewhere
            def.resolved = typeof resolvedDef === 'function'
              ? resolvedDef
              : _Vue.extend(resolvedDef)
            match.components[key] = resolvedDef
            pending--
            if (pending <= 0 && _next) {
              _next()
            }
          })

          var reject = once(function (reason) {
            var msg = 'Failed to resolve async component ' + key + ': ' + reason
            'production' !== 'production' && warn(false, msg)
            if (!error) {
              error = reason instanceof Error
                ? reason
                : new Error(msg)
              if (_next) { _next(error) }
            }
          })

          var res
          try {
            res = def(resolve, reject)
          } catch (e) {
            reject(e)
          }
          if (res) {
            if (typeof res.then === 'function') {
              res.then(resolve, reject)
            } else {
              // new syntax in Vue 2.3
              var comp = res.component
              if (comp && typeof comp.then === 'function') {
                comp.then(resolve, reject)
              }
            }
          }
        }
      })

      return function (to, from, next) {
        if (error) {
          next(error)
        } else if (pending <= 0) {
          next()
        } else {
          _next = next
        }
      }
    }

    function flatMapComponents (matched,
                                fn) {
      return flatten(matched.map(function (m) {
        return Object.keys(m.components).map(function (key) {
          return fn(
            m.components[key],
            m.instances[key],
            m, key
          )
        })
      }))
    }

    function flatten (arr) {
      return Array.prototype.concat.apply([], arr)
    }

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
    function once (fn) {
      var called = false
      return function () {
        if (called) { return }
        called = true
        return fn.apply(this, arguments)
      }
    }

    /*  */

    var HTML5History = (function (History$$1) {
      function HTML5History (router, base) {
        var this$1 = this

        History$$1.call(this, router, base)

        var expectScroll = router.options.scrollBehavior

        if (expectScroll) {
          setupScroll()
        }

        window.addEventListener('popstate', function (e) {
          this$1.transitionTo(getLocation(this$1.base), function (route) {
            if (expectScroll) {
              handleScroll(router, route, this$1.current, true)
            }
          })
        })
      }

      if (History$$1) HTML5History.__proto__ = History$$1
      HTML5History.prototype = Object.create(History$$1 && History$$1.prototype)
      HTML5History.prototype.constructor = HTML5History

      HTML5History.prototype.go = function go (n) {
        window.history.go(n)
      }

      HTML5History.prototype.push = function push (location, onComplete, onAbort) {
        var this$1 = this

        var ref = this
        var fromRoute = ref.current
        this.transitionTo(location, function (route) {
          pushState(cleanPath(this$1.base + route.fullPath))
          handleScroll(this$1.router, route, fromRoute, false)
          onComplete && onComplete(route)
        }, onAbort)
      }

      HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
        var this$1 = this

        var ref = this
        var fromRoute = ref.current
        this.transitionTo(location, function (route) {
          replaceState(cleanPath(this$1.base + route.fullPath))
          handleScroll(this$1.router, route, fromRoute, false)
          onComplete && onComplete(route)
        }, onAbort)
      }

      HTML5History.prototype.ensureURL = function ensureURL (push) {
        if (getLocation(this.base) !== this.current.fullPath) {
          var current = cleanPath(this.base + this.current.fullPath)
          push ? pushState(current) : replaceState(current)
        }
      }

      HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
        return getLocation(this.base)
      }

      return HTML5History
    }(History))

    function getLocation (base) {
      var path = window.location.pathname
      if (base && path.indexOf(base) === 0) {
        path = path.slice(base.length)
      }
      return (path || '/') + window.location.search + window.location.hash
    }

    /*  */

    var HashHistory = (function (History$$1) {
      function HashHistory (router, base, fallback) {
        History$$1.call(this, router, base)
        // check history fallback deeplinking
        if (fallback && checkFallback(this.base)) {
          return
        }
        ensureSlash()
      }

      if (History$$1) HashHistory.__proto__ = History$$1
      HashHistory.prototype = Object.create(History$$1 && History$$1.prototype)
      HashHistory.prototype.constructor = HashHistory

      // this is delayed until the app mounts
      // to avoid the hashchange listener being fired too early
      HashHistory.prototype.setupListeners = function setupListeners () {
        var this$1 = this

        window.addEventListener('hashchange', function () {
          if (!ensureSlash()) {
            return
          }
          this$1.transitionTo(getHash(), function (route) {
            replaceHash(route.fullPath)
          })
        })
      }

      HashHistory.prototype.push = function push (location, onComplete, onAbort) {
        this.transitionTo(location, function (route) {
          pushHash(route.fullPath)
          onComplete && onComplete(route)
        }, onAbort)
      }

      HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
        this.transitionTo(location, function (route) {
          replaceHash(route.fullPath)
          onComplete && onComplete(route)
        }, onAbort)
      }

      HashHistory.prototype.go = function go (n) {
        window.history.go(n)
      }

      HashHistory.prototype.ensureURL = function ensureURL (push) {
        var current = this.current.fullPath
        if (getHash() !== current) {
          push ? pushHash(current) : replaceHash(current)
        }
      }

      HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
        return getHash()
      }

      return HashHistory
    }(History))

    function checkFallback (base) {
      var location = getLocation(base)
      if (!/^\/#/.test(location)) {
        window.location.replace(
          cleanPath(base + '/#' + location)
        )
        return true
      }
    }

    function ensureSlash () {
      var path = getHash()
      if (path.charAt(0) === '/') {
        return true
      }
      replaceHash('/' + path)
      return false
    }

    function getHash () {
      // We can't use window.location.hash here because it's not
      // consistent across browsers - Firefox will pre-decode it!
      var href = window.location.href
      var index = href.indexOf('#')
      return index === -1 ? '' : href.slice(index + 1)
    }

    function pushHash (path) {
      window.location.hash = path
    }

    function replaceHash (path) {
      var i = window.location.href.indexOf('#')
      window.location.replace(
        window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
      )
    }

    /*  */

    var AbstractHistory = (function (History$$1) {
      function AbstractHistory (router, base) {
        History$$1.call(this, router, base)
        this.stack = []
        this.index = -1
      }

      if (History$$1) AbstractHistory.__proto__ = History$$1
      AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype)
      AbstractHistory.prototype.constructor = AbstractHistory

      AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
        var this$1 = this

        this.transitionTo(location, function (route) {
          this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
          this$1.index++
          onComplete && onComplete(route)
        }, onAbort)
      }

      AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
        var this$1 = this

        this.transitionTo(location, function (route) {
          this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
          onComplete && onComplete(route)
        }, onAbort)
      }

      AbstractHistory.prototype.go = function go (n) {
        var this$1 = this

        var targetIndex = this.index + n
        if (targetIndex < 0 || targetIndex >= this.stack.length) {
          return
        }
        var route = this.stack[targetIndex]
        this.confirmTransition(route, function () {
          this$1.index = targetIndex
          this$1.updateRoute(route)
        })
      }

      AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
        var current = this.stack[this.stack.length - 1]
        return current ? current.fullPath : '/'
      }

      AbstractHistory.prototype.ensureURL = function ensureURL () {
        // noop
      }

      return AbstractHistory
    }(History))

    /*  */

    var VueRouter = function VueRouter (options) {
      if (options === void 0) options = {}

      this.app = null
      this.apps = []
      this.options = options
      this.beforeHooks = []
      this.afterHooks = []
      this.matcher = createMatcher(options.routes || [], this)

      var mode = options.mode || 'hash'
      this.fallback = mode === 'history' && !supportsPushState
      if (this.fallback) {
        mode = 'hash'
      }
      if (!inBrowser) {
        mode = 'abstract'
      }
      this.mode = mode

      switch (mode) {
        case 'history':
          this.history = new HTML5History(this, options.base)
          break
        case 'hash':
          this.history = new HashHistory(this, options.base, this.fallback)
          break
        case 'abstract':
          this.history = new AbstractHistory(this, options.base)
          break
        default:
          if (false) {
            assert(false, ('invalid mode: ' + mode))
          }
      }
    }

    var prototypeAccessors = {currentRoute: {}}

    VueRouter.prototype.match = function match (raw,
                                                current,
                                                redirectedFrom) {
      return this.matcher.match(raw, current, redirectedFrom)
    }

    prototypeAccessors.currentRoute.get = function () {
      return this.history && this.history.current
    }

    VueRouter.prototype.init = function init (app /* Vue component instance */) {
      var this$1 = this

      'production' !== 'production' && assert(
        install.installed,
        'not installed. Make sure to call `Vue.use(VueRouter)` ' +
        'before creating root instance.'
      )

      this.apps.push(app)

      // main app already initialized.
      if (this.app) {
        return
      }

      this.app = app

      var history = this.history

      if (history instanceof HTML5History) {
        history.transitionTo(history.getCurrentLocation())
      } else if (history instanceof HashHistory) {
        var setupHashListener = function () {
          history.setupListeners()
        }
        history.transitionTo(
          history.getCurrentLocation(),
          setupHashListener,
          setupHashListener
        )
      }

      history.listen(function (route) {
        this$1.apps.forEach(function (app) {
          app._route = route
        })
      })
    }

    VueRouter.prototype.beforeEach = function beforeEach (fn) {
      this.beforeHooks.push(fn)
    }

    VueRouter.prototype.afterEach = function afterEach (fn) {
      this.afterHooks.push(fn)
    }

    VueRouter.prototype.onReady = function onReady (cb, errorCb) {
      this.history.onReady(cb, errorCb)
    }

    VueRouter.prototype.onError = function onError (errorCb) {
      this.history.onError(errorCb)
    }

    VueRouter.prototype.push = function push (location, onComplete, onAbort) {
      this.history.push(location, onComplete, onAbort)
    }

    VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
      this.history.replace(location, onComplete, onAbort)
    }

    VueRouter.prototype.go = function go (n) {
      this.history.go(n)
    }

    VueRouter.prototype.back = function back () {
      this.go(-1)
    }

    VueRouter.prototype.forward = function forward () {
      this.go(1)
    }

    VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
      var route = to
        ? this.resolve(to).route
        : this.currentRoute
      if (!route) {
        return []
      }
      return [].concat.apply([], route.matched.map(function (m) {
        return Object.keys(m.components).map(function (key) {
          return m.components[key]
        })
      }))
    }

    VueRouter.prototype.resolve = function resolve (to,
                                                    current,
                                                    append) {
      var location = normalizeLocation(
        to,
        current || this.history.current,
        append,
        this
      )
      var route = this.match(location, current)
      var fullPath = route.redirectedFrom || route.fullPath
      var base = this.history.base
      var href = createHref(base, fullPath, this.mode)
      return {
        location: location,
        route: route,
        href: href,
        // for backwards compat
        normalizedTo: location,
        resolved: route
      }
    }

    VueRouter.prototype.addRoutes = function addRoutes (routes) {
      this.matcher.addRoutes(routes)
      if (this.history.current !== START) {
        this.history.transitionTo(this.history.getCurrentLocation())
      }
    }

    Object.defineProperties(VueRouter.prototype, prototypeAccessors)

    function createHref (base, fullPath, mode) {
      var path = mode === 'hash' ? '#' + fullPath : fullPath
      return base ? cleanPath(base + '/' + path) : path
    }

    VueRouter.install = install
    VueRouter.version = '2.4.0'

    if (inBrowser && window.Vue) {
      window.Vue.use(VueRouter)
    }

    /* harmony default export */
    __webpack_exports__['a'] = (VueRouter)

    /***/
  }),
  /* 107 */
  /***/ (function (module, exports) {

    /**
     * Translates the list format produced by css-loader into something
     * easier to manipulate.
     */
    module.exports = function listToStyles (parentId, list) {
      var styles = []
      var newStyles = {}
      for (var i = 0; i < list.length; i++) {
        var item = list[i]
        var id = item[0]
        var css = item[1]
        var media = item[2]
        var sourceMap = item[3]
        var part = {
          id: parentId + ':' + i,
          css: css,
          media: media,
          sourceMap: sourceMap
        }
        if (!newStyles[id]) {
          styles.push(newStyles[id] = {id: id, parts: [part]})
        } else {
          newStyles[id].parts.push(part)
        }
      }
      return styles
    }

    /***/
  }),
  /* 108 */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    /* unused harmony export Store */
    /* unused harmony export mapState */
    /* unused harmony export mapMutations */
    /* unused harmony export mapGetters */
    /* unused harmony export mapActions */
    /**
     * vuex v2.3.0
     * (c) 2017 Evan You
     * @license MIT
     */
    var applyMixin = function (Vue) {
      var version = Number(Vue.version.split('.')[0])

      if (version >= 2) {
        var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
        Vue.mixin(usesInit ? {init: vuexInit} : {beforeCreate: vuexInit})
      } else {
        // override init and inject vuex init procedure
        // for 1.x backwards compatibility.
        var _init = Vue.prototype._init
        Vue.prototype._init = function (options) {
          if (options === void 0) options = {}

          options.init = options.init
            ? [vuexInit].concat(options.init)
            : vuexInit
          _init.call(this, options)
        }
      }

      /**
       * Vuex init hook, injected into each instances init hooks list.
       */

      function vuexInit () {
        var options = this.$options
        // store injection
        if (options.store) {
          this.$store = options.store
        } else if (options.parent && options.parent.$store) {
          this.$store = options.parent.$store
        }
      }
    }

    var devtoolHook =
      typeof window !== 'undefined' &&
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__

    function devtoolPlugin (store) {
      if (!devtoolHook) { return }

      store._devtoolHook = devtoolHook

      devtoolHook.emit('vuex:init', store)

      devtoolHook.on('vuex:travel-to-state', function (targetState) {
        store.replaceState(targetState)
      })

      store.subscribe(function (mutation, state) {
        devtoolHook.emit('vuex:mutation', mutation, state)
      })
    }

    /**
     * Get the first item that pass the test
     * by second argument function
     *
     * @param {Array} list
     * @param {Function} f
     * @return {*}
     */
    /**
     * Deep copy the given object considering circular structure.
     * This function caches all nested objects and its copies.
     * If it detects circular structure, use cached copy to avoid infinite loop.
     *
     * @param {*} obj
     * @param {Array<Object>} cache
     * @return {*}
     */

    /**
     * forEach for object
     */
    function forEachValue (obj, fn) {
      Object.keys(obj).forEach(function (key) { return fn(obj[key], key) })
    }

    function isObject (obj) {
      return obj !== null && typeof obj === 'object'
    }

    function isPromise (val) {
      return val && typeof val.then === 'function'
    }

    function assert (condition, msg) {
      if (!condition) { throw new Error(('[vuex] ' + msg)) }
    }

    var Module = function Module (rawModule, runtime) {
      this.runtime = runtime
      this._children = Object.create(null)
      this._rawModule = rawModule
      var rawState = rawModule.state
      this.state = (typeof rawState === 'function' ? rawState() : rawState) || {}
    }

    var prototypeAccessors$1 = {namespaced: {}}

    prototypeAccessors$1.namespaced.get = function () {
      return !!this._rawModule.namespaced
    }

    Module.prototype.addChild = function addChild (key, module) {
      this._children[key] = module
    }

    Module.prototype.removeChild = function removeChild (key) {
      delete this._children[key]
    }

    Module.prototype.getChild = function getChild (key) {
      return this._children[key]
    }

    Module.prototype.update = function update (rawModule) {
      this._rawModule.namespaced = rawModule.namespaced
      if (rawModule.actions) {
        this._rawModule.actions = rawModule.actions
      }
      if (rawModule.mutations) {
        this._rawModule.mutations = rawModule.mutations
      }
      if (rawModule.getters) {
        this._rawModule.getters = rawModule.getters
      }
    }

    Module.prototype.forEachChild = function forEachChild (fn) {
      forEachValue(this._children, fn)
    }

    Module.prototype.forEachGetter = function forEachGetter (fn) {
      if (this._rawModule.getters) {
        forEachValue(this._rawModule.getters, fn)
      }
    }

    Module.prototype.forEachAction = function forEachAction (fn) {
      if (this._rawModule.actions) {
        forEachValue(this._rawModule.actions, fn)
      }
    }

    Module.prototype.forEachMutation = function forEachMutation (fn) {
      if (this._rawModule.mutations) {
        forEachValue(this._rawModule.mutations, fn)
      }
    }

    Object.defineProperties(Module.prototype, prototypeAccessors$1)

    var ModuleCollection = function ModuleCollection (rawRootModule) {
      var this$1 = this

      // register root module (Vuex.Store options)
      this.root = new Module(rawRootModule, false)

      // register all nested modules
      if (rawRootModule.modules) {
        forEachValue(rawRootModule.modules, function (rawModule, key) {
          this$1.register([key], rawModule, false)
        })
      }
    }

    ModuleCollection.prototype.get = function get (path) {
      return path.reduce(function (module, key) {
        return module.getChild(key)
      }, this.root)
    }

    ModuleCollection.prototype.getNamespace = function getNamespace (path) {
      var module = this.root
      return path.reduce(function (namespace, key) {
        module = module.getChild(key)
        return namespace + (module.namespaced ? key + '/' : '')
      }, '')
    }

    ModuleCollection.prototype.update = function update$1 (rawRootModule) {
      update(this.root, rawRootModule)
    }

    ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
      var this$1 = this
      if (runtime === void 0) runtime = true

      var parent = this.get(path.slice(0, -1))
      var newModule = new Module(rawModule, runtime)
      parent.addChild(path[path.length - 1], newModule)

      // register nested modules
      if (rawModule.modules) {
        forEachValue(rawModule.modules, function (rawChildModule, key) {
          this$1.register(path.concat(key), rawChildModule, runtime)
        })
      }
    }

    ModuleCollection.prototype.unregister = function unregister (path) {
      var parent = this.get(path.slice(0, -1))
      var key = path[path.length - 1]
      if (!parent.getChild(key).runtime) { return }

      parent.removeChild(key)
    }

    function update (targetModule, newModule) {
      // update target module
      targetModule.update(newModule)

      // update nested modules
      if (newModule.modules) {
        for (var key in newModule.modules) {
          if (!targetModule.getChild(key)) {
            console.warn(
              '[vuex] trying to add a new module \'' + key + '\' on hot reloading, ' +
              'manual reload is needed'
            )
            return
          }
          update(targetModule.getChild(key), newModule.modules[key])
        }
      }
    }

    var Vue // bind on install

    var Store = function Store (options) {
      var this$1 = this
      if (options === void 0) options = {}

      assert(Vue, 'must call Vue.use(Vuex) before creating a store instance.')
      assert(typeof Promise !== 'undefined', 'vuex requires a Promise polyfill in this browser.')

      var state = options.state
      if (state === void 0) state = {}
      var plugins = options.plugins
      if (plugins === void 0) plugins = []
      var strict = options.strict
      if (strict === void 0) strict = false

      // store internal state
      this._committing = false
      this._actions = Object.create(null)
      this._mutations = Object.create(null)
      this._wrappedGetters = Object.create(null)
      this._modules = new ModuleCollection(options)
      this._modulesNamespaceMap = Object.create(null)
      this._subscribers = []
      this._watcherVM = new Vue()

      // bind commit and dispatch to self
      var store = this
      var ref = this
      var dispatch = ref.dispatch
      var commit = ref.commit
      this.dispatch = function boundDispatch (type, payload) {
        return dispatch.call(store, type, payload)
      }
      this.commit = function boundCommit (type, payload, options) {
        return commit.call(store, type, payload, options)
      }

      // strict mode
      this.strict = strict

      // init root module.
      // this also recursively registers all sub-modules
      // and collects all module getters inside this._wrappedGetters
      installModule(this, state, [], this._modules.root)

      // initialize the store vm, which is responsible for the reactivity
      // (also registers _wrappedGetters as computed properties)
      resetStoreVM(this, state)

      // apply plugins
      plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1) })
    }

    var prototypeAccessors = {state: {}}

    prototypeAccessors.state.get = function () {
      return this._vm._data.$$state
    }

    prototypeAccessors.state.set = function (v) {
      assert(false, 'Use store.replaceState() to explicit replace store state.')
    }

    Store.prototype.commit = function commit (_type, _payload, _options) {
      var this$1 = this

      // check object-style commit
      var ref = unifyObjectStyle(_type, _payload, _options)
      var type = ref.type
      var payload = ref.payload
      var options = ref.options

      var mutation = {type: type, payload: payload}
      var entry = this._mutations[type]
      if (!entry) {
        console.error(('[vuex] unknown mutation type: ' + type))
        return
      }
      this._withCommit(function () {
        entry.forEach(function commitIterator (handler) {
          handler(payload)
        })
      })
      this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state) })

      if (options && options.silent) {
        console.warn(
          '[vuex] mutation type: ' + type + '. Silent option has been removed. ' +
          'Use the filter functionality in the vue-devtools'
        )
      }
    }

    Store.prototype.dispatch = function dispatch (_type, _payload) {
      // check object-style dispatch
      var ref = unifyObjectStyle(_type, _payload)
      var type = ref.type
      var payload = ref.payload

      var entry = this._actions[type]
      if (!entry) {
        console.error(('[vuex] unknown action type: ' + type))
        return
      }
      return entry.length > 1
        ? Promise.all(entry.map(function (handler) { return handler(payload) }))
        : entry[0](payload)
    }

    Store.prototype.subscribe = function subscribe (fn) {
      var subs = this._subscribers
      if (subs.indexOf(fn) < 0) {
        subs.push(fn)
      }
      return function () {
        var i = subs.indexOf(fn)
        if (i > -1) {
          subs.splice(i, 1)
        }
      }
    }

    Store.prototype.watch = function watch (getter, cb, options) {
      var this$1 = this

      assert(typeof getter === 'function', 'store.watch only accepts a function.')
      return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters) }, cb, options)
    }

    Store.prototype.replaceState = function replaceState (state) {
      var this$1 = this

      this._withCommit(function () {
        this$1._vm._data.$$state = state
      })
    }

    Store.prototype.registerModule = function registerModule (path, rawModule) {
      if (typeof path === 'string') { path = [path] }
      assert(Array.isArray(path), 'module path must be a string or an Array.')
      this._modules.register(path, rawModule)
      installModule(this, this.state, path, this._modules.get(path))
      // reset store to update getters...
      resetStoreVM(this, this.state)
    }

    Store.prototype.unregisterModule = function unregisterModule (path) {
      var this$1 = this

      if (typeof path === 'string') { path = [path] }
      assert(Array.isArray(path), 'module path must be a string or an Array.')
      this._modules.unregister(path)
      this._withCommit(function () {
        var parentState = getNestedState(this$1.state, path.slice(0, -1))
        Vue.delete(parentState, path[path.length - 1])
      })
      resetStore(this)
    }

    Store.prototype.hotUpdate = function hotUpdate (newOptions) {
      this._modules.update(newOptions)
      resetStore(this, true)
    }

    Store.prototype._withCommit = function _withCommit (fn) {
      var committing = this._committing
      this._committing = true
      fn()
      this._committing = committing
    }

    Object.defineProperties(Store.prototype, prototypeAccessors)

    function resetStore (store, hot) {
      store._actions = Object.create(null)
      store._mutations = Object.create(null)
      store._wrappedGetters = Object.create(null)
      store._modulesNamespaceMap = Object.create(null)
      var state = store.state
      // init all modules
      installModule(store, state, [], store._modules.root, true)
      // reset vm
      resetStoreVM(store, state, hot)
    }

    function resetStoreVM (store, state, hot) {
      var oldVm = store._vm

      // bind store public getters
      store.getters = {}
      var wrappedGetters = store._wrappedGetters
      var computed = {}
      forEachValue(wrappedGetters, function (fn, key) {
        // use computed to leverage its lazy-caching mechanism
        computed[key] = function () { return fn(store) }
        Object.defineProperty(store.getters, key, {
          get: function () { return store._vm[key] },
          enumerable: true // for local getters
        })
      })

      // use a Vue instance to store the state tree
      // suppress warnings just in case the user has added
      // some funky global mixins
      var silent = Vue.config.silent
      Vue.config.silent = true
      store._vm = new Vue({
        data: {
          $$state: state
        },
        computed: computed
      })
      Vue.config.silent = silent

      // enable strict mode for new vm
      if (store.strict) {
        enableStrictMode(store)
      }

      if (oldVm) {
        if (hot) {
          // dispatch changes in all subscribed watchers
          // to force getter re-evaluation for hot reloading.
          store._withCommit(function () {
            oldVm._data.$$state = null
          })
        }
        Vue.nextTick(function () { return oldVm.$destroy() })
      }
    }

    function installModule (store, rootState, path, module, hot) {
      var isRoot = !path.length
      var namespace = store._modules.getNamespace(path)

      // register in namespace map
      if (module.namespaced) {
        store._modulesNamespaceMap[namespace] = module
      }

      // set state
      if (!isRoot && !hot) {
        var parentState = getNestedState(rootState, path.slice(0, -1))
        var moduleName = path[path.length - 1]
        store._withCommit(function () {
          Vue.set(parentState, moduleName, module.state)
        })
      }

      var local = module.context = makeLocalContext(store, namespace, path)

      module.forEachMutation(function (mutation, key) {
        var namespacedType = namespace + key
        registerMutation(store, namespacedType, mutation, local)
      })

      module.forEachAction(function (action, key) {
        var namespacedType = namespace + key
        registerAction(store, namespacedType, action, local)
      })

      module.forEachGetter(function (getter, key) {
        var namespacedType = namespace + key
        registerGetter(store, namespacedType, getter, local)
      })

      module.forEachChild(function (child, key) {
        installModule(store, rootState, path.concat(key), child, hot)
      })
    }

    /**
     * make localized dispatch, commit, getters and state
     * if there is no namespace, just use root ones
     */
    function makeLocalContext (store, namespace, path) {
      var noNamespace = namespace === ''

      var local = {
        dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
          var args = unifyObjectStyle(_type, _payload, _options)
          var payload = args.payload
          var options = args.options
          var type = args.type

          if (!options || !options.root) {
            type = namespace + type
            if (!store._actions[type]) {
              console.error(('[vuex] unknown local action type: ' + (args.type) + ', global type: ' + type))
              return
            }
          }

          return store.dispatch(type, payload)
        },

        commit: noNamespace ? store.commit : function (_type, _payload, _options) {
          var args = unifyObjectStyle(_type, _payload, _options)
          var payload = args.payload
          var options = args.options
          var type = args.type

          if (!options || !options.root) {
            type = namespace + type
            if (!store._mutations[type]) {
              console.error(('[vuex] unknown local mutation type: ' + (args.type) + ', global type: ' + type))
              return
            }
          }

          store.commit(type, payload, options)
        }
      }

      // getters and state object must be gotten lazily
      // because they will be changed by vm update
      Object.defineProperties(local, {
        getters: {
          get: noNamespace
            ? function () { return store.getters }
            : function () { return makeLocalGetters(store, namespace) }
        },
        state: {
          get: function () { return getNestedState(store.state, path) }
        }
      })

      return local
    }

    function makeLocalGetters (store, namespace) {
      var gettersProxy = {}

      var splitPos = namespace.length
      Object.keys(store.getters).forEach(function (type) {
        // skip if the target getter is not match this namespace
        if (type.slice(0, splitPos) !== namespace) { return }

        // extract local getter type
        var localType = type.slice(splitPos)

        // Add a port to the getters proxy.
        // Define as getter property because
        // we do not want to evaluate the getters in this time.
        Object.defineProperty(gettersProxy, localType, {
          get: function () { return store.getters[type] },
          enumerable: true
        })
      })

      return gettersProxy
    }

    function registerMutation (store, type, handler, local) {
      var entry = store._mutations[type] || (store._mutations[type] = [])
      entry.push(function wrappedMutationHandler (payload) {
        handler(local.state, payload)
      })
    }

    function registerAction (store, type, handler, local) {
      var entry = store._actions[type] || (store._actions[type] = [])
      entry.push(function wrappedActionHandler (payload, cb) {
        var res = handler({
          dispatch: local.dispatch,
          commit: local.commit,
          getters: local.getters,
          state: local.state,
          rootGetters: store.getters,
          rootState: store.state
        }, payload, cb)
        if (!isPromise(res)) {
          res = Promise.resolve(res)
        }
        if (store._devtoolHook) {
          return res.catch(function (err) {
            store._devtoolHook.emit('vuex:error', err)
            throw err
          })
        } else {
          return res
        }
      })
    }

    function registerGetter (store, type, rawGetter, local) {
      if (store._wrappedGetters[type]) {
        console.error(('[vuex] duplicate getter key: ' + type))
        return
      }
      store._wrappedGetters[type] = function wrappedGetter (store) {
        return rawGetter(
          local.state, // local state
          local.getters, // local getters
          store.state, // root state
          store.getters // root getters
        )
      }
    }

    function enableStrictMode (store) {
      store._vm.$watch(function () { return this._data.$$state }, function () {
        assert(store._committing, 'Do not mutate vuex store state outside mutation handlers.')
      }, {deep: true, sync: true})
    }

    function getNestedState (state, path) {
      return path.length
        ? path.reduce(function (state, key) { return state[key] }, state)
        : state
    }

    function unifyObjectStyle (type, payload, options) {
      if (isObject(type) && type.type) {
        options = payload
        payload = type
        type = type.type
      }

      assert(typeof type === 'string', ('Expects string as the type, but found ' + (typeof type) + '.'))

      return {type: type, payload: payload, options: options}
    }

    function install (_Vue) {
      if (Vue) {
        console.error(
          '[vuex] already installed. Vue.use(Vuex) should be called only once.'
        )
        return
      }
      Vue = _Vue
      applyMixin(Vue)
    }

// auto install in dist mode
    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }

    var mapState = normalizeNamespace(function (namespace, states) {
      var res = {}
      normalizeMap(states).forEach(function (ref) {
        var key = ref.key
        var val = ref.val

        res[key] = function mappedState () {
          var state = this.$store.state
          var getters = this.$store.getters
          if (namespace) {
            var module = getModuleByNamespace(this.$store, 'mapState', namespace)
            if (!module) {
              return
            }
            state = module.context.state
            getters = module.context.getters
          }
          return typeof val === 'function'
            ? val.call(this, state, getters)
            : state[val]
        }
        // mark vuex getter for devtools
        res[key].vuex = true
      })
      return res
    })

    var mapMutations = normalizeNamespace(function (namespace, mutations) {
      var res = {}
      normalizeMap(mutations).forEach(function (ref) {
        var key = ref.key
        var val = ref.val

        val = namespace + val
        res[key] = function mappedMutation () {
          var args = [], len = arguments.length
          while (len--) args[len] = arguments[len]

          if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
            return
          }
          return this.$store.commit.apply(this.$store, [val].concat(args))
        }
      })
      return res
    })

    var mapGetters = normalizeNamespace(function (namespace, getters) {
      var res = {}
      normalizeMap(getters).forEach(function (ref) {
        var key = ref.key
        var val = ref.val

        val = namespace + val
        res[key] = function mappedGetter () {
          if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
            return
          }
          if (!(val in this.$store.getters)) {
            console.error(('[vuex] unknown getter: ' + val))
            return
          }
          return this.$store.getters[val]
        }
        // mark vuex getter for devtools
        res[key].vuex = true
      })
      return res
    })

    var mapActions = normalizeNamespace(function (namespace, actions) {
      var res = {}
      normalizeMap(actions).forEach(function (ref) {
        var key = ref.key
        var val = ref.val

        val = namespace + val
        res[key] = function mappedAction () {
          var args = [], len = arguments.length
          while (len--) args[len] = arguments[len]

          if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
            return
          }
          return this.$store.dispatch.apply(this.$store, [val].concat(args))
        }
      })
      return res
    })

    function normalizeMap (map) {
      return Array.isArray(map)
        ? map.map(function (key) { return ({key: key, val: key}) })
        : Object.keys(map).map(function (key) { return ({key: key, val: map[key]}) })
    }

    function normalizeNamespace (fn) {
      return function (namespace, map) {
        if (typeof namespace !== 'string') {
          map = namespace
          namespace = ''
        } else if (namespace.charAt(namespace.length - 1) !== '/') {
          namespace += '/'
        }
        return fn(namespace, map)
      }
    }

    function getModuleByNamespace (store, helper, namespace) {
      var module = store._modulesNamespaceMap[namespace]
      if (!module) {
        console.error(('[vuex] module namespace not found in ' + helper + '(): ' + namespace))
      }
      return module
    }

    var index_esm = {
      Store: Store,
      install: install,
      version: '2.3.0',
      mapState: mapState,
      mapMutations: mapMutations,
      mapGetters: mapGetters,
      mapActions: mapActions
    }

    /* harmony default export */
    __webpack_exports__['a'] = (index_esm)

    /***/
  }),
  /* 109 */
  /***/ (function (module, exports) {

    var g

// This works in non-strict mode
    g = (function () {
      return this
    })()

    try {
      // This works if eval is allowed (see CSP)
      g = g || Function('return this')() || (1, eval)('this')
    } catch (e) {
      // This works if the window reference is available
      if (typeof window === 'object')
        g = window
    }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

    module.exports = g

    /***/
  }),
  /* 110 */,
  /* 111 */
  /***/ (function (module, exports) {

    /*
     MIT License http://www.opensource.org/licenses/mit-license.php
     Author Tobias Koppers @sokra
     */
// css base code, injected by the css-loader
    module.exports = function () {
      var list = []

      // return the list of modules as css string
      list.toString = function toString () {
        var result = []
        for (var i = 0; i < this.length; i++) {
          var item = this[i]
          if (item[2]) {
            result.push('@media ' + item[2] + '{' + item[1] + '}')
          } else {
            result.push(item[1])
          }
        }
        return result.join('')
      }

      // import a list of modules into the list
      list.i = function (modules, mediaQuery) {
        if (typeof modules === 'string')
          modules = [[null, modules, '']]
        var alreadyImportedModules = {}
        for (var i = 0; i < this.length; i++) {
          var id = this[i][0]
          if (typeof id === 'number')
            alreadyImportedModules[id] = true
        }
        for (i = 0; i < modules.length; i++) {
          var item = modules[i]
          // skip already imported module
          // this implementation is not 100% perfect for weird media query combinations
          //  when a module is imported multiple times with different media queries.
          //  I hope this will never occur (Hey this way we have smaller bundles)
          if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
            if (mediaQuery && !item[2]) {
              item[2] = mediaQuery
            } else if (mediaQuery) {
              item[2] = '(' + item[2] + ') and (' + mediaQuery + ')'
            }
            list.push(item)
          }
        }
      }
      return list
    }

    /***/
  }),
  /* 112 */
  /***/ (function (module, exports, __webpack_require__) {

    /*
     MIT License http://www.opensource.org/licenses/mit-license.php
     Author Tobias Koppers @sokra
     Modified by Evan You @yyx990803
     */

    var hasDocument = typeof document !== 'undefined'

    if (typeof DEBUG !== 'undefined' && DEBUG) {
      if (!hasDocument) {
        throw new Error(
          'vue-style-loader cannot be used in a non-browser environment. ' +
          'Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment.'
        )
      }
    }

    var listToStyles = __webpack_require__(107)

    /*
     type StyleObject = {
     id: number;
     parts: Array<StyleObjectPart>
     }

     type StyleObjectPart = {
     css: string;
     media: string;
     sourceMap: ?string
     }
     */

    var stylesInDom = {
      /*
       [id: number]: {
       id: number,
       refs: number,
       parts: Array<(obj?: StyleObjectPart) => void>
       }
       */
    }

    var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
    var singletonElement = null
    var singletonCounter = 0
    var isProduction = false
    var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

    module.exports = function (parentId, list, _isProduction) {
      isProduction = _isProduction

      var styles = listToStyles(parentId, list)
      addStylesToDom(styles)

      return function update (newList) {
        var mayRemove = []
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i]
          var domStyle = stylesInDom[item.id]
          domStyle.refs--
          mayRemove.push(domStyle)
        }
        if (newList) {
          styles = listToStyles(parentId, newList)
          addStylesToDom(styles)
        } else {
          styles = []
        }
        for (var i = 0; i < mayRemove.length; i++) {
          var domStyle = mayRemove[i]
          if (domStyle.refs === 0) {
            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j]()
            }
            delete stylesInDom[domStyle.id]
          }
        }
      }
    }

    function addStylesToDom (styles /* Array<StyleObject> */) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i]
        var domStyle = stylesInDom[item.id]
        if (domStyle) {
          domStyle.refs++
          for (var j = 0; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j])
          }
          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j]))
          }
          if (domStyle.parts.length > item.parts.length) {
            domStyle.parts.length = item.parts.length
          }
        } else {
          var parts = []
          for (var j = 0; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j]))
          }
          stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts}
        }
      }
    }

    function createStyleElement () {
      var styleElement = document.createElement('style')
      styleElement.type = 'text/css'
      head.appendChild(styleElement)
      return styleElement
    }

    function addStyle (obj /* StyleObjectPart */) {
      var update, remove
      var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

      if (styleElement) {
        if (isProduction) {
          // has SSR styles and in production mode.
          // simply do nothing.
          return noop
        } else {
          // has SSR styles but in dev mode.
          // for some reason Chrome can't handle source map in server-rendered
          // style tags - source maps in <style> only works if the style tag is
          // created and inserted dynamically. So we remove the server rendered
          // styles and inject new ones.
          styleElement.parentNode.removeChild(styleElement)
        }
      }

      if (isOldIE) {
        // use singleton mode for IE9.
        var styleIndex = singletonCounter++
        styleElement = singletonElement || (singletonElement = createStyleElement())
        update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
        remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
      } else {
        // use multi-style-tag mode in all other cases
        styleElement = createStyleElement()
        update = applyToTag.bind(null, styleElement)
        remove = function () {
          styleElement.parentNode.removeChild(styleElement)
        }
      }

      update(obj)

      return function updateStyle (newObj /* StyleObjectPart */) {
        if (newObj) {
          if (newObj.css === obj.css &&
            newObj.media === obj.media &&
            newObj.sourceMap === obj.sourceMap) {
            return
          }
          update(obj = newObj)
        } else {
          remove()
        }
      }
    }

    var replaceText = (function () {
      var textStore = []

      return function (index, replacement) {
        textStore[index] = replacement
        return textStore.filter(Boolean).join('\n')
      }
    })()

    function applyToSingletonTag (styleElement, index, remove, obj) {
      var css = remove ? '' : obj.css

      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = replaceText(index, css)
      } else {
        var cssNode = document.createTextNode(css)
        var childNodes = styleElement.childNodes
        if (childNodes[index]) styleElement.removeChild(childNodes[index])
        if (childNodes.length) {
          styleElement.insertBefore(cssNode, childNodes[index])
        } else {
          styleElement.appendChild(cssNode)
        }
      }
    }

    function applyToTag (styleElement, obj) {
      var css = obj.css
      var media = obj.media
      var sourceMap = obj.sourceMap

      if (media) {
        styleElement.setAttribute('media', media)
      }

      if (sourceMap) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
        // http://stackoverflow.com/a/26603875
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
      }

      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css
      } else {
        while (styleElement.firstChild) {
          styleElement.removeChild(styleElement.firstChild)
        }
        styleElement.appendChild(document.createTextNode(css))
      }
    }

    /***/
  })
])
//# sourceMappingURL=vendor.844faf72d69f5aef4654.js.map
