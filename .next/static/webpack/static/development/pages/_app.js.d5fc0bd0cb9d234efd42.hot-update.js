webpackHotUpdate("static/development/pages/_app.js",{

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
  stepperFormData: {
    // store for stepper form fields
    landlord_bio: {
      // actual review and landlord name
      landlord_review: "",
      name: ""
    },
    addressData: null //address lookup state used in creating new review      

  }
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

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_ADDRESS_OBJECT"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        stepperFormData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.stepperFormData, {
          addressData: action.payload
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.d5fc0bd0cb9d234efd42.hot-update.js.map