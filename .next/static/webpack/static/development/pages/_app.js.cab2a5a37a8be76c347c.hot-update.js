webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/authReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./store/actions/actionTypes.js");


var INITIAL_STATE = {
  userToken: null,
  error: null
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(action.type);

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLEAR_ERRORS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: ""
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN_START"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: null
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAIL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: "PLEASE VERIFY CREDENTIALS"
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: null,
        userToken: action.payload.userToken
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_USER"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        userToken: null
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_USER_SUCCESS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: null,
        userToken: action.payload.userToken
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_USER_FAIL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: "SOMETHING WENT WRONG"
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE_TOKEN_WITH_COOKIE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        userToken: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.cab2a5a37a8be76c347c.hot-update.js.map