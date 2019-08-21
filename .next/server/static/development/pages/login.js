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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

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

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/spinner */ "./src/components/spinner.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/pages/login.js";







class Login extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      email: "",
      password: "",
      loading: false //updated by componentDidUpdate

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmitHandler", event => {
      event.preventDefault();
      this.setState({
        loading: true
      });
      const {
        email,
        password
      } = this.state;
      this.props.login(email, password);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", event => {
      if (event.target.name === "password" && this.props.error) {
        this.props.clearError();
      }

      this.setState({
        [event.target.name]: event.target.value
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userToken !== prevProps.userToken) {
      this.setState({
        loading: false
      });
      this.props.userToken ? next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/") : null;
    }

    if (this.props.error !== prevProps.error) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const button = !this.state.loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "submit",
      style: styles.buttonStyle,
      value: "LOGIN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.containerStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      style: {
        textAlign: "center",
        color: "#474A48",
        fontFamily: 'Lexend Tera, sans-serif',
        fontWeight: "bold"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "RoomR", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        color: "#FF5941"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "8"), "r"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: styles.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Gamble with the lottery not your accomodation")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.mainAreaStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.onSubmitHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      required: true,
      value: this.state.email,
      onChange: this.onChange,
      style: styles.inputStyle,
      placeholder: "email@gmail.com",
      type: "email",
      name: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      required: true,
      value: this.state.password,
      onChange: this.onChange,
      style: styles.inputStyle,
      placeholder: "password",
      type: "password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), button, // 
    this.props.error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: styles.errorStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, this.props.error) : "")));
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
    height: "200px",
    width: "400px",
    borderRadius: "2px",
    paddingTop: "20px",
    justifyContent: "center"
  },
  inputStyle: {
    display: "block",
    padding: "10px",
    width: "75%",
    margin: "15px auto",
    borderRadius: "5px"
  },
  buttonStyle: {
    display: "block",
    padding: "16px",
    margin: "15px auto",
    borderRadius: "3px",
    color: "#fffffa",
    fontWeight: "bold",
    border: "0",
    width: "100px",
    backgroundColor: "#FF5941",
    // backgroundColor:"#FCA311",
    fontSize: "14px"
  },
  header: {
    textAlign: "center",
    color: "#191923",
    fontWeight: 'bolder',
    fontSize: 22,
    fontFamily: 'Poppins, sans-serif'
  },
  errorStyle: {
    color: "#f50",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
};

const mapStateToProps = state => {
  return {
    userToken: state.auth.userToken,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, _store_actions__WEBPACK_IMPORTED_MODULE_5__)(Login));

/***/ }),

/***/ "./src/components/spinner.js":
/*!***********************************!*\
  !*** ./src/components/spinner.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/components/spinner.js";


const spinner = () => {
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
    width: "100px",
    height: "100px",
    margin: "0 auto",
    alignSelf: 'center',
    display: "block"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (spinner);

/***/ }),

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: login, clearError, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearError", function() { return clearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionsTypes */ "./store/actionsTypes.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



const loginStart = () => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_START"]
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
      dispatch({
        type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"],
        payload: {
          userToken: response.data.idToken
        }
      });
      localStorage.setItem("userToken", response.data.idToken);
    }).catch(error => {
      dispatch({
        type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"]
      });
    });
  };
};
const clearError = () => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
  };
};
const logoutUser = () => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]
  };
};

/***/ }),

/***/ "./store/actionsTypes.js":
/*!*******************************!*\
  !*** ./store/actionsTypes.js ***!
  \*******************************/
/*! exports provided: LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER, CLEAR_ERRORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_START", function() { return LOGIN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
const LOGIN_START = "login_start";
const LOGIN_SUCCESS = "login_success";
const LOGIN_FAIL = "login_fail";
const LOGOUT_USER = "logout_user";
const CLEAR_ERRORS = "clear_errors";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fortunephiri/Documents/Projects/roomR8r/pages/login.js */"./pages/login.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ })

/******/ });
//# sourceMappingURL=login.js.map