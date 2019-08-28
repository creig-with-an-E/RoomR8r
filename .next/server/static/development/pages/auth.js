module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components */ "./src/components/index.js");
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/authActions */ "./store/actions/authActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js";







class Auth extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      registrationFormSelected: false,
      //boolean to toggle betweeen the login and registration fo
      email: "",
      password: "",
      password_confirm: "",
      loading: false //updated by componentDidUpdate

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmitHandler", event => {
      // handles both form submissions passing data to either login or signup action
      event.preventDefault();
      this.setState({
        loading: true
      });
      const {
        email,
        password
      } = this.state;

      if (!this.state.registrationFormSelected) {
        this.props.login(email, password);
      } else if (this.state.registrationFormSelected) {
        this.props.signup(email, password);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", event => {
      if (event.target.name === "password" && this.props.error) {
        this.props.clearError();
      }

      this.setState({
        [event.target.name]: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleAuthForms", () => {
      this.setState({
        registrationFormSelected: !this.state.registrationFormSelected
      });
    });
  }

  componentDidMount() {
    //reseting errors on initial page mount
    this.props.clearError();
  }

  componentDidUpdate(prevProps, prevState) {
    // checks that loading has completed at state level
    if (this.props.userToken !== prevProps.userToken) {
      this.props.userToken ? next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/") : null;
      this.setState({
        loading: false
      });
    }

    if (this.props.error !== prevProps.error) {
      this.setState({
        loading: false,
        password: ""
      });
    }
  }

  render() {
    const button = !this.state.loading ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.onSubmitHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, !this.state.registrationFormSelected ? "Login" : "Create Account") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    });
    const registrationFormSelected = this.state.registrationFormSelected;
    let form = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      onSubmit: this.onSubmitHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      required: true,
      value: this.state.email,
      onChange: this.onChange,
      style: styles.inputStyle,
      placeholder: "email@gmail.com",
      type: "email",
      name: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      required: true,
      value: this.state.password,
      onChange: this.onChange,
      style: styles.inputStyle,
      placeholder: "password",
      type: "password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), this.state.registrationFormSelected ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      required: true,
      value: this.state.password_confirm,
      onChange: this.onChange,
      style: styles.inputStyle,
      placeholder: "confirm password",
      type: "password",
      name: "password_confirm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }) : null, button, this.props.error ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      style: styles.errorStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, " ", this.props.error, " ") : null));
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: styles.containerStyle,
      className: "jsx-3721349288",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3721349288",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      style: styles.logoStyle,
      className: "jsx-3721349288",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "RoomR", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      style: {
        color: "#FF5941"
      },
      className: "jsx-3721349288",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "8"), "r"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      style: styles.header,
      className: "jsx-3721349288",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Gamble with the lottery not your accomodation")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: styles.mainAreaStyle,
      className: "jsx-3721349288",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, form), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      style: styles.paragraphStyle,
      className: "jsx-3721349288",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, !registrationFormSelected ? "Dont Have an account?" : "Returning user", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      style: styles.createAccountButton,
      onClick: this.toggleAuthForms,
      className: "jsx-3721349288" + " " + "createAccountButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, !registrationFormSelected ? "Create Account" : "login")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3721349288",
      __self: this
    }, ".createAccountButton.jsx-3721349288:hover{opacity:0.7;cursor:default;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR3NCLEFBR3lCLFlBRWYsZUFBQyIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3BhZ2VzL2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0J1dHRvbiwgU3Bpbm5lcn0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzXCJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbnNcIlxuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY2xhc3MgQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZDpmYWxzZSwgLy9ib29sZWFuIHRvIHRvZ2dsZSBiZXR3ZWVlbiB0aGUgbG9naW4gYW5kIHJlZ2lzdHJhdGlvbiBmb1xuICAgIGVtYWlsOlwiXCIsXG4gICAgcGFzc3dvcmQ6XCJcIixcbiAgICBwYXNzd29yZF9jb25maXJtOlwiXCIsXG4gICAgbG9hZGluZzogZmFsc2UsIC8vdXBkYXRlZCBieSBjb21wb25lbnREaWRVcGRhdGVcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAvL3Jlc2V0aW5nIGVycm9ycyBvbiBpbml0aWFsIHBhZ2UgbW91bnRcbiAgICB0aGlzLnByb3BzLmNsZWFyRXJyb3IoKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgLy8gY2hlY2tzIHRoYXQgbG9hZGluZyBoYXMgY29tcGxldGVkIGF0IHN0YXRlIGxldmVsXG4gICAgaWYodGhpcy5wcm9wcy51c2VyVG9rZW4gIT09IHByZXZQcm9wcy51c2VyVG9rZW4pe1xuICAgICAgdGhpcy5wcm9wcy51c2VyVG9rZW4gPyBSb3V0ZXIucHVzaChcIi9cIikgOiBudWxsXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pXG4gICAgfVxuICAgIGlmKHRoaXMucHJvcHMuZXJyb3IgIT09IHByZXZQcm9wcy5lcnJvcil7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgcGFzc3dvcmQ6XCJcIn0pXG4gICAgfVxuICB9XG4gIG9uU3VibWl0SGFuZGxlcj0oZXZlbnQpPT57XG4gICAgLy8gaGFuZGxlcyBib3RoIGZvcm0gc3VibWlzc2lvbnMgcGFzc2luZyBkYXRhIHRvIGVpdGhlciBsb2dpbiBvciBzaWdudXAgYWN0aW9uXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxuICAgIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmR9ID0gdGhpcy5zdGF0ZVxuICAgIGlmKCF0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZCl7XG4gICAgICB0aGlzLnByb3BzLmxvZ2luKGVtYWlsLHBhc3N3b3JkKVxuICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUucmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkKXtcbiAgICAgIHRoaXMucHJvcHMuc2lnbnVwKGVtYWlsLHBhc3N3b3JkKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlPShldmVudCk9PntcbiAgICBpZihldmVudC50YXJnZXQubmFtZSA9PT0gXCJwYXNzd29yZFwiICYmIHRoaXMucHJvcHMuZXJyb3Ipe1xuICAgICAgdGhpcy5wcm9wcy5jbGVhckVycm9yKClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIHRvZ2dsZUF1dGhGb3Jtcz0oKT0+e1xuICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZDohdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWR9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBidXR0b24gPSAhdGhpcy5zdGF0ZS5sb2FkaW5nID8oPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU3VibWl0SGFuZGxlcn0+XG4gICAgICB7IXRoaXMuc3RhdGUucmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkPyBcIkxvZ2luXCIgOlwiQ3JlYXRlIEFjY291bnRcIn08L0J1dHRvbj5cbiAgICAgICk6IDxTcGlubmVyIC8+XG4gICAgY29uc3QgcmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkID0gdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWRcblxuICAgIGxldCBmb3JtID0gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRTdHlsZX0gcGxhY2Vob2xkZXI9XCJlbWFpbEBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZD8gIFxuICAgICAgICAgICAgICAgICAgKCA8aW5wdXQgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRfY29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29uZmlybSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1cIiAvPiApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICB7LyogZGlzcGxheWluZyBidXR0b24gb3Igc3Bpbm5lciAqL31cbiAgICAgICAgICAgICAgICAgIHtidXR0b259XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZXJyb3IgPyA8cCBzdHlsZT17c3R5bGVzLmVycm9yU3R5bGV9PiB7dGhpcy5wcm9wcy5lcnJvcn0gPC9wPjogbnVsbCB9XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17c3R5bGVzLmxvZ29TdHlsZX0+Um9vbVI8c3BhbiBzdHlsZT17e2NvbG9yOlwiI0ZGNTk0MVwifX0+ODwvc3Bhbj5yPC9oMT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5HYW1ibGUgd2l0aCB0aGUgbG90dGVyeSBub3QgeW91ciBhY2NvbW9kYXRpb248L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYWluQXJlYVN0eWxlfT5cbiAgICAgICAgICB7Zm9ybX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBoU3R5bGV9PlxuICAgICAgICAgICAgeyFyZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQ/XCJEb250IEhhdmUgYW4gYWNjb3VudD9cIjpcIlJldHVybmluZyB1c2VyXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcmVhdGVBY2NvdW50QnV0dG9uXCIgc3R5bGU9e3N0eWxlcy5jcmVhdGVBY2NvdW50QnV0dG9ufSBcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVBdXRoRm9ybXN9PlxuICAgICAgICAgICAgICAgIHshcmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkP1wiQ3JlYXRlIEFjY291bnRcIjpcImxvZ2luXCJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY3JlYXRlQWNjb3VudEJ1dHRvbiA6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiB7XG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOlwiI2ZmZmZmYVwiLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBtYWluQXJlYVN0eWxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMxOTE5MjNcIixcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2NjY1wiLCAgICBcbiAgICAvLyBoZWlnaHQ6IFwiMjUwcHhcIixcbiAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBwYWRkaW5nOlwiMjBweFwiLFxuICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJcbiAgfSxcbiAgbG9nb1N0eWxlOnt0ZXh0QWxpZ246XCJjZW50ZXJcIiwgXG4gICAgY29sb3I6XCIjNDc0QTQ4XCIsXG4gICAgZm9udEZhbWlseTogJ0xleGVuZCBUZXJhLCBzYW5zLXNlcmlmJywgXG4gICAgZm9udFdlaWdodDpcImJvbGRcIn0sXG4gIGlucHV0U3R5bGU6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgLy8gcGFkZGluZzogXCIxMHB4XCIsXG4gICAgaGVpZ2h0OlwiMzZweFwiLFxuICAgIHdpZHRoOiBcIjI2NnB4XCIsXG4gICAgLy8gcGFkZGluZ0xlZnQ6XCIxMHB4XCIsXG4gICAgbWFyZ2luOiBcIjE1cHggYXV0b1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIlxuICB9LFxuICBoZWFkZXI6e1xuICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxuICAgIGNvbG9yOlwiIzE5MTkyM1wiLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxuICAgIGZvbnRTaXplOjIyLFxuICAgIGZvbnRGYW1pbHk6ICdQb3BwaW5zLCBzYW5zLXNlcmlmJywgXG4gIH0sXG4gIGVycm9yU3R5bGU6e1xuICAgIG1hcmdpbkJvdHRvbTpcIjIwcHhcIixcbiAgICBjb2xvcjpcIiNmNTBcIixcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcbiAgICBmb250U2l6ZToxNixcbiAgICBmb250V2VpZ2h0OlwiYm9sZFwiXG4gIH0sXG4gIHBhcmFncmFwaFN0eWxlOntcbiAgICB0ZXh0QWxpZ246XCJsZWZ0XCIsXG4gICAgcGFkZGluZzogMjAsXG4gICAgZm9udFNpemU6MTYsXG4gICAgZm9udEZhbWlseTpcIlBvcHBpbnMsIHNhbnMgc2VyaWZcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZmXCJcbiAgfSxcbiAgY3JlYXRlQWNjb3VudEJ1dHRvbjp7XG4gICAgbWFyZ2luTGVmdDpcIjVweFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOlwiI0ZGNTk0MVwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiXG4gIH1cbn07XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM9KHN0YXRlKT0+e1xuICByZXR1cm4ge1xuICAgIHVzZXJUb2tlbjogc3RhdGUuYXV0aC51c2VyVG9rZW4sXG4gICAgZXJyb3I6IHN0YXRlLmF1dGguZXJyb3IsXG4gICAgbG9hZGluZzogc3RhdGUuYXV0aC5sb2FkaW5nXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxhY3Rpb25zKShBdXRoKVxuIl19 */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js */"));
  }

}

const styles = {
  containerStyle: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffffa",
    flexDirection: 'column'
  },
  mainAreaStyle: {
    backgroundColor: "#191923",
    // backgroundColor: "#ccc",    
    // height: "250px",
    width: "300px",
    borderRadius: "5px",
    padding: "20px",
    justifyContent: "center"
  },
  logoStyle: {
    textAlign: "center",
    color: "#474A48",
    fontFamily: 'Lexend Tera, sans-serif',
    fontWeight: "bold"
  },
  inputStyle: {
    display: "block",
    // padding: "10px",
    height: "36px",
    width: "266px",
    // paddingLeft:"10px",
    margin: "15px auto",
    borderRadius: "5px"
  },
  header: {
    textAlign: "center",
    color: "#191923",
    fontWeight: 'bolder',
    fontSize: 22,
    fontFamily: 'Poppins, sans-serif'
  },
  errorStyle: {
    marginBottom: "20px",
    color: "#f50",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
  paragraphStyle: {
    textAlign: "left",
    padding: 20,
    fontSize: 16,
    fontFamily: "Poppins, sans serif",
    backgroundColor: "#fff"
  },
  createAccountButton: {
    marginLeft: "5px",
    fontWeight: "bold",
    color: "#FF5941",
    textDecoration: "underline"
  }
};

const mapStateToProps = state => {
  return {
    userToken: state.auth.userToken,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, _store_actions_authActions__WEBPACK_IMPORTED_MODULE_5__)(Auth));

/***/ }),

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/components/button.js";


const Button = props => {
  const styles = {
    buttonStyle: {
      display: "block",
      height: "35px",
      // padding: "16px",
      margin: "15px auto",
      borderRadius: "3px",
      color: "#fffffa",
      fontWeight: "bold",
      border: "0",
      width: "266px",
      backgroundColor: !props.altButton ? "#FF5941" : "#474A48",
      // backgroundColor:"#FCA311",
      fontSize: "14px"
    }
  };
  const combinedButtonStyles = props.style ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.buttonStyle, props.style) : styles.buttonStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: props.onClickHandler,
    style: combinedButtonStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, props.children);
};



/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! exports provided: ReviewCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewCard", function() { return ReviewCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/components/card.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  card: {
    maxWidth: 500,
    marginBottom: 40,
    margin: "0 auto"
  },
  cardHeader: {
    backgroundColor: "#2C365E",
    color: "#fffffa",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: 'Fira Sans, sans-serif'
  },
  media: {
    margin: 10,
    height: 0,
    paddingTop: '56.25%' // 16:9

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: "#FF5941"
  },
  footer: {
    backgroundColor: "#2C365E"
  },
  icon: {
    color: "#fffffa"
  },
  resultsText: {
    fontFamily: 'Fira Sans, sans-serif',
    color: "#fffffa",
    fontSize: 20
  }
}));

const ReviewCard = props => {
  const {
    postal_code,
    address,
    landlord_bio,
    comment
  } = props.data;
  const {
    first_name,
    last_name
  } = landlord_bio;
  const classes = useStyles();
  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], {
    className: classes.cardHeader,
    avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      "aria-label": "review",
      className: classes.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }, "?"),
    title: `Street Address: ${address.street_number || "n/a"}`,
    subheader: `Apartment Number: ${address.apartment_number || "n/a"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardMedia"], {
    className: classes.media,
    image: "/static/imgs/toronto.jpeg",
    title: "toronto sketch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardActions"], {
    className: classes.footer,
    disableSpacing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    "aria-label": "add to favorites",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    style: {
      textTransform: "capitalize",
      color: "#cdcdcd"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Landlord Name: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "#fffffa"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, first_name, " ", last_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6___default.a, {
    value: props.data.rating ? props.data.rating : 0,
    readOnly: true,
    style: {
      color: "#FF5941",
      marginLeft: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.expand, {
      [classes.expandOpen]: expanded
    }),
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FF5941"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    in: expanded,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, comment))));
};



/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Button, ReviewCard, Layout, SearchBar, Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/components/card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewCard", function() { return _card__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/components/layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["Layout"]; });

/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchBar */ "./src/components/searchBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return _searchBar__WEBPACK_IMPORTED_MODULE_3__["SearchBar"]; });

/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner */ "./src/components/spinner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"]; });







/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/toolbar */ "./src/navigation/toolbar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/components/layout.js";




const Layout = props => {
  // receives modal handle from index.js 
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navigation_toolbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showModalHandle: props.showModalHandle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), props.children);
};

const styles = {
  containerStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    backgroundColor: "#fffffa"
  }
};


/***/ }),

/***/ "./src/components/searchBar.js":
/*!*************************************!*\
  !*** ./src/components/searchBar.js ***!
  \*************************************/
/*! exports provided: SearchBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return SearchBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui-search-bar */ "material-ui-search-bar");
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/components/searchBar.js";



const SearchBar = props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  style: styles.searchbarStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}));

const styles = {
  searchbarStyle: {
    backgroundColor: "rgba(44,54,94,0.1)",
    borderRadius: "20px",
    margin: "0 auto",
    maxWidth: 600,
    padding: 7,
    boxShadow: '1px 3px 6px 2px rgba(44,54,94,0.6)'
  }
};


/***/ }),

/***/ "./src/components/spinner.js":
/*!***********************************!*\
  !*** ./src/components/spinner.js ***!
  \***********************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/components/spinner.js";


const Spinner = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: styles.spinnerStyle,
    src: "/static/imgs/spinner.gif",
    alt: "spinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  });
};

const styles = {
  spinnerStyle: {
    width: "60px",
    height: "60px",
    margin: "0 auto",
    alignSelf: 'center',
    display: "block"
  }
};


/***/ }),

/***/ "./src/navigation/toolbar.js":
/*!***********************************!*\
  !*** ./src/navigation/toolbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/authActions */ "./store/actions/authActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/navigation/toolbar.js";











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {// flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#474A48",
    fontFamily: 'Lexend Tera, sans-serif'
  },
  links: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 900,
    color: "#fffffa"
  }
}));

const toolbar = props => {
  const classes = useStyles();
  const userAuthenticated = props.userToken ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.links,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: props.showModalHandle,
    className: classes.links,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Add"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.links,
    color: "inherit",
    onClick: () => logout(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Logout")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.links,
    color: "inherit",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/auth"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Login");

  const logout = () => {
    props.logoutUser();
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/auth");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "fixed",
    style: {
      backgroundColor: "#191923",
      marginBottom: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/"),
    variant: "h5",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "RoomR", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "#FF5941"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "8"), "r"), userAuthenticated)));
};

const mapStateProps = state => {
  return {
    userToken: state.auth.userToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(_store_actions_authActions__WEBPACK_IMPORTED_MODULE_9__["logoutUser"])
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateProps, mapDispatchToProps)(toolbar));

/***/ }),

/***/ "./store/actions/actionTypes.js":
/*!**************************************!*\
  !*** ./store/actions/actionTypes.js ***!
  \**************************************/
/*! exports provided: LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER, CLEAR_ERRORS, SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAIL, SEARCH_BY_ADDRESS_START, SEARCH_BY_ADDRESS_SUCCESS, SEARCH_BY_ADDRESS_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_START", function() { return LOGIN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_USER", function() { return SIGNUP_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_USER_SUCCESS", function() { return SIGNUP_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_USER_FAIL", function() { return SIGNUP_USER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_BY_ADDRESS_START", function() { return SEARCH_BY_ADDRESS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_BY_ADDRESS_SUCCESS", function() { return SEARCH_BY_ADDRESS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_BY_ADDRESS_FAIL", function() { return SEARCH_BY_ADDRESS_FAIL; });
const LOGIN_START = "login_start";
const LOGIN_SUCCESS = "login_success";
const LOGIN_FAIL = "login_fail";
const LOGOUT_USER = "logout_user";
const CLEAR_ERRORS = "clear_errors";
const SIGNUP_USER = "signup_user";
const SIGNUP_USER_SUCCESS = "signup_user_success";
const SIGNUP_USER_FAIL = "sign_user_fail"; //**  app action types ****//

const SEARCH_BY_ADDRESS_START = "search_by_address_start";
const SEARCH_BY_ADDRESS_SUCCESS = "search_by_address_success";
const SEARCH_BY_ADDRESS_FAIL = "search_by_address_fail";

/***/ }),

/***/ "./store/actions/authActions.js":
/*!**************************************!*\
  !*** ./store/actions/authActions.js ***!
  \**************************************/
/*! exports provided: login, signup, clearError, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearError", function() { return clearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // ********** start of login actions

const loginStart = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_START"]
  };
};

const loginSuccess = idToken => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"],
    payload: {
      userToken: idToken
    }
  };
};

const login = (email, password) => {
  return dispatch => {
    loginStart();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDY95FpDC9eJ3W5gZrZrvcAH3zVirelFzI`, {
      email,
      password,
      returnSecureToken: true
    }).then(response => {
      dispatch(loginSuccess(response.data.idToken));
      localStorage.setItem("userToken", response.data.idToken);
    }).catch(error => {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"]
      });
    });
  };
}; // *********end of login actions
// *********start of signup actions

const signup = (email, password) => {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDY95FpDC9eJ3W5gZrZrvcAH3zVirelFzI`, {
      email,
      password,
      returnSecureToken: true
    }).then(response => {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_USER_SUCCESS"],
        payload: {
          userToken: response.data.idToken
        }
      });
      localStorage.setItem("userToken", response.data.idToken);
    }).catch(error => {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_USER_FAIL"]
      });
    });
  };
}; // *******end of signup actions

const clearError = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
  };
};
const logoutUser = () => {
  localStorage.removeItem("userToken");
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]
  };
};

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/auth.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js */"./pages/auth.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/lab/Rating":
/*!******************************************!*\
  !*** external "@material-ui/lab/Rating" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Rating");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "material-ui-search-bar":
/*!*****************************************!*\
  !*** external "material-ui-search-bar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui-search-bar");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=auth.js.map