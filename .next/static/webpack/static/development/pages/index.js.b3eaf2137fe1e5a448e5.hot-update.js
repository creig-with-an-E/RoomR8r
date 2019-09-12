webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/actions/appActions.js":
/*!*************************************!*\
  !*** ./store/actions/appActions.js ***!
  \*************************************/
/*! exports provided: findReviewByAddress, resetApplicationState, setAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findReviewByAddress", function() { return findReviewByAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetApplicationState", function() { return resetApplicationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAddress", function() { return setAddress; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");





var findByAddressStart = function findByAddressStart() {
  // called when findReviewByAddress starts
  // params: 
  // return:
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SEARCH_BY_ADDRESS_START"]
  };
};

var findByAddressSuccess = function findByAddressSuccess(response) {
  // iterating over response placing id as part of object
  var arrayData = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(response.data).map(function (key) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, response.data[key], {
      id: key
    });
  });

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SEARCH_BY_ADDRESS_SUCCESS"],
    payload: {
      data: arrayData
    }
  };
};

var findByAddressFail = function findByAddressFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SEARCH_BY_ADDRESS_FAIL"],
    payload: {
      data: error
    }
  };
};

var findReviewByAddress = function findReviewByAddress(userToken, address) {
  // fetches reviews from firebase
  // return: array of objects
  // params: userToken passed from authState and address 
  return function (dispatch) {
    dispatch(findByAddressStart());
    /*** searchParametersPassed: if search parameter is blank it returns all results
     *   in the event parameter is passed, it returns relevant postal code results
    */

    var searchParametersPassed = address ? "&orderBy=\"postal_code\"&startAt=\"".concat(address, "\"&endAt=\"").concat(address, "\"") : "";
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://accomo-rater.firebaseio.com/landlord_data.json?auth=".concat(userToken).concat(searchParametersPassed)).then(function (response) {
      dispatch(findByAddressSuccess(response));
    })["catch"](function (error) {
      dispatch(findByAddressFail(error));
    });
  };
};
/** resetting state */

var resetApplicationState = function resetApplicationState() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["RESET_APPLICATION_STATE"]
  };
};
/**functions for google maps auto complete */

var setAddress = function setAddress(address) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_ADDRESS_OBJECT"],
    payload: address
  };
};

/***/ })

})
//# sourceMappingURL=index.js.b3eaf2137fe1e5a448e5.hot-update.js.map