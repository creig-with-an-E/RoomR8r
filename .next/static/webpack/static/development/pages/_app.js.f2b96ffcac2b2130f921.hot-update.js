webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/actions/actionTypes.js":
/*!**************************************!*\
  !*** ./store/actions/actionTypes.js ***!
  \**************************************/
/*! exports provided: LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER, CLEAR_ERRORS, SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAIL, SEARCH_BY_ADDRESS_START, SEARCH_BY_ADDRESS_SUCCESS, SEARCH_BY_ADDRESS_FAIL, RESET_APPLICATION_STATE, SET_ADDRESS_OBJECT, UPDATE_TOKEN_WITH_COOKIE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_APPLICATION_STATE", function() { return RESET_APPLICATION_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ADDRESS_OBJECT", function() { return SET_ADDRESS_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TOKEN_WITH_COOKIE", function() { return UPDATE_TOKEN_WITH_COOKIE; });
var LOGIN_START = "login_start";
var LOGIN_SUCCESS = "login_success";
var LOGIN_FAIL = "login_fail";
var LOGOUT_USER = "logout_user";
var CLEAR_ERRORS = "clear_errors";
var SIGNUP_USER = "signup_user";
var SIGNUP_USER_SUCCESS = "signup_user_success";
var SIGNUP_USER_FAIL = "sign_user_fail"; //**  app action types ****//

var SEARCH_BY_ADDRESS_START = "search_by_address_start";
var SEARCH_BY_ADDRESS_SUCCESS = "search_by_address_success";
var SEARCH_BY_ADDRESS_FAIL = "search_by_address_fail";
var RESET_APPLICATION_STATE = "reset_application_state";
var SET_ADDRESS_OBJECT = "set_address_object";
var UPDATE_TOKEN_WITH_COOKIE = "update_user_token_with_cookie_value";

/***/ }),

/***/ "./store/reducers/appReducer.js":
/*!**************************************!*\
  !*** ./store/reducers/appReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./store/actions/actionTypes.js");


var INITIAL_STATE = {
  searchResults: null,
  loading: null,
  error: null,
  addressData: {} //address lookup state used in creating new review

};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SEARCH_BY_ADDRESS_START"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true,
        error: null
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SEARCH_BY_ADDRESS_SUCCESS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        searchResults: action.payload.data
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SEARCH_BY_ADDRESS_FAIL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: "SOMETHING WENT WRONG"
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["RESET_APPLICATION_STATE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, INITIAL_STATE);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.f2b96ffcac2b2130f921.hot-update.js.map