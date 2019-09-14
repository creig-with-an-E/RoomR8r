webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/appReducer.js":
/*!**************************************!*\
  !*** ./store/reducers/appReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./store/actions/actionTypes.js");



var INITIAL_STATE = {
  searchResults: null,
  loading: null,
  error: null,
  stepperFormData: {
    // store for stepper form fields
    landlord_bio: {
      // actual review and landlord name
      landlord_review: "default",
      name: "This is text"
    },
    addressData: null //address lookup state used in creating new review      

  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["SEARCH_BY_ADDRESS_START"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        loading: true,
        error: null
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["SEARCH_BY_ADDRESS_SUCCESS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        loading: false,
        searchResults: action.payload.data
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["SEARCH_BY_ADDRESS_FAIL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        loading: false,
        error: "SOMETHING WENT WRONG"
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["RESET_APPLICATION_STATE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, INITIAL_STATE);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_ADDRESS_OBJECT"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        stepperFormData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.stepperFormData, {
          addressData: action.payload
        })
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_REVIEW_FORM_FIELDS"]:
      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(action.payload);

      var landlord_bio_copy = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.stepperFormData.landlord_bio);

      var value = landlord_bio_copy[keys[0]];
      landlord_bio_copy[keys[0]] = value + action.payload[keys[0]];
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        stepperFormData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.stepperFormData, {
          landlord_bio: landlord_bio_copy
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.4bbe449ae4a295ddc7f8.hot-update.js.map