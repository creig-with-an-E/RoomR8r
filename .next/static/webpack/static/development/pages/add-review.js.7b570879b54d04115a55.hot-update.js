webpackHotUpdate("static/development/pages/add-review.js",{

/***/ "./src/stepper/stepper_components/landlord_form.js":
/*!*********************************************************!*\
  !*** ./src/stepper/stepper_components/landlord_form.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/actions/appActions */ "./store/actions/appActions.js");







var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/landlord_form.js";




var LandlordForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LandlordForm, _Component);

  function LandlordForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LandlordForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LandlordForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      landlord_review: "",
      name: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "landLordformSubmitHandle", function (event) {
      event.preventDefault(); //preventing page refresh

      _this.props.updateFields(_this.state);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeText", function (event) {
      /* handles input change for the form*/
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LandlordForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$landlord_ = this.props.landlord_bio,
          landlord_review = _this$props$landlord_.landlord_review,
          name = _this$props$landlord_.name;
      /** auto populating fields if user had started input*/

      this.setState({
        landlord_review: landlord_review,
        name: name
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.landLordformSubmitHandle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        placeholder: "John Doe",
        type: "text",
        style: styles.inputStyle,
        name: "name",
        onChange: this.onChangeText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        placeholder: "bio",
        onChange: this.onChangeText,
        name: "landlord_review",
        cols: "10",
        rows: "6",
        style: styles.inputStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }));
    }
  }]);

  return LandlordForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var styles = {
  inputStyle: {
    padding: 15,
    width: "300px",
    borderRadius: 7,
    fontSize: 14,
    marginTop: "10px",
    marginBottom: "10px",
    display: "block"
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    landlord_bio: state.stepperFormData.landlord_bio
  };
};

var mapDispatchTopProps = function mapDispatchTopProps(dispatch) {
  return {
    updateFields: function updateFields(data) {
      return dispatch(Object(_store_actions_appActions__WEBPACK_IMPORTED_MODULE_9__["setFormFields"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchTopProps)(LandlordForm));

/***/ }),

/***/ "./store/actions/appActions.js":
/*!*************************************!*\
  !*** ./store/actions/appActions.js ***!
  \*************************************/
/*! exports provided: findReviewByAddress, resetApplicationState, setAddress, setFormFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findReviewByAddress", function() { return findReviewByAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetApplicationState", function() { return resetApplicationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAddress", function() { return setAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFormFields", function() { return setFormFields; });
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
/*******end of google maps functions********/

/**start of review form functions**********/

var setFormFields = function setFormFields(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_REVIEW_FORM_FIELDS"],
    payload: data
  };
};
/*************end of review form data***************************/

/***/ })

})
//# sourceMappingURL=add-review.js.7b570879b54d04115a55.hot-update.js.map