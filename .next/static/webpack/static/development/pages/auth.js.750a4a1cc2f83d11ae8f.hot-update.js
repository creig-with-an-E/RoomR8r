webpackHotUpdate("static/development/pages/auth.js",{

/***/ "./store/actions/authActions.js":
/*!**************************************!*\
  !*** ./store/actions/authActions.js ***!
  \**************************************/
/*! exports provided: login, signup, clearError, logoutUser, updateSavedToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearError", function() { return clearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSavedToken", function() { return updateSavedToken; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);


 // ********** start of login actions

var loginStart = function loginStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_START"]
  };
};

var loginSuccess = function loginSuccess(idToken) {
  createCookie(idToken);
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"],
    payload: {
      userToken: idToken
    }
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
      dispatch(loginSuccess(response.data.idToken));
    })["catch"](function (error) {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"]
      });
    });
  };
}; //**handling persistant storage */ 

var createCookie = function createCookie(idToken) {
  // creates cookie that expires in an hour
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("userToken", idToken, {
    expires: 1 / 24
  });
};

var destroyCookie = function destroyCookie() {
  // deletes cookie when user logs out
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("userToken");
}; // *********end of login actions
// *********start of signup actions


var signupSuccess = function signupSuccess(idToken) {
  createCookie(idToken);
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_USER_SUCCESS"],
    payload: {
      userToken: idToken
    }
  };
};

var signup = function signup(email, password) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDY95FpDC9eJ3W5gZrZrvcAH3zVirelFzI", {
      email: email,
      password: password,
      returnSecureToken: true
    }).then(function (response) {
      dispatch(signupSuccess(response.data.idToken));
    })["catch"](function (error) {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_USER_FAIL"]
      });
    });
  };
}; // *******end of signup actions

var clearError = function clearError() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
  };
}; //****** */

var logoutUser = function logoutUser() {
  destroyCookie();
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]
  };
}; //****** */
// saving userToken

var updateSavedToken = function updateSavedToken(token) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TOKEN_WITH_COOKIE"],
    payload: token
  };
};

/***/ })

})
//# sourceMappingURL=auth.js.750a4a1cc2f83d11ae8f.hot-update.js.map