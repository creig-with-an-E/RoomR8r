webpackHotUpdate("static/development/pages/auth.js",{

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



var loginStart = function loginStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_START"]
  };
};

var login = function login(email, password) {
  return function (dispatch) {
    loginStart();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDY95FpDC9eJ3W5gZrZrvcAH3zVirelFzI", {
      email: email,
      password: password,
      returnSecureToken: true
    }).then(function (response) {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"],
        payload: {
          userToken: response.data.idToken
        }
      });
      localStorage.setItem("userToken", response.data.idToken);
    })["catch"](function (error) {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"]
      });
    });
  };
};
var signup = function signup(email, password) {
  return function (dispatch) {
    loginStart();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDY95FpDC9eJ3W5gZrZrvcAH3zVirelFzI", {
      email: email,
      password: password,
      returnSecureToken: true
    }).then(function (response) {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"],
        payload: {
          userToken: response.data.idToken
        }
      });
      localStorage.setItem("userToken", response.data.idToken);
    })["catch"](function (error) {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"]
      });
    });
  };
};
var clearError = function clearError() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
  };
};
var logoutUser = function logoutUser() {
  localStorage.removeItem("userToken");
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]
  };
};

/***/ })

})
//# sourceMappingURL=auth.js.6bace309c368db4ac4c1.hot-update.js.map