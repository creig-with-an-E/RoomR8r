webpackHotUpdate("static/development/pages/add-review.js",{

/***/ "./src/stepper/googleMapsSearchBar.js":
/*!********************************************!*\
  !*** ./src/stepper/googleMapsSearchBar.js ***!
  \********************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-load-script */ "./node_modules/react-load-script/lib/index.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/googleMapsSearchBar.js";



 // import googleMapsFunctions from "../../lib/googlePlaceFunctions"

var GoogleMapsSearchBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GoogleMapsSearchBar, _Component);

  function GoogleMapsSearchBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoogleMapsSearchBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GoogleMapsSearchBar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleScriptLoad", function () {
      /***loads google script on load and 
       * declares the options for autocomplete */
      var options = {
        // types: ['(cities)'],
        componentRestrictions: {
          country: 'ca' //setting results to canada

        }
      }; // Initialize Google Autocomplete

      var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options); // Avoid paying for data that you don't need by restricting the set of
      // place fields that are returned to just the address components.

      autocomplete.setFields(['address_components']); // Fire Event when a suggested name is selected

      autocomplete.addListener('place_changed', function () {
        return _this.handlePlaceSelect(autocomplete);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handlePlaceSelect", function (autocomplete) {
      // Extract City From Address Object
      var addressObject = autocomplete.getPlace();
      var address = addressObject.address_components; // Check if address is valid

      if (address) {
        _this.setState({
          // city: address[0].long_name,
          address: address //setting address with address component

        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeHandler", function (input) {
      _this.setState({
        queryString: input
      });
    });

    _this.state = {
      queryString: "",
      address: {}
    };
    return _this;
  }
  /******start of google maps functions */


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoogleMapsSearchBar, [{
    key: "render",
    value: function render() {
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_9___default.a, {
        url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWcDVGfs8R5EmWbh9xsuYEHycoqDyDf9I&libraries=places",
        onLoad: this.handleScriptLoad,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["SearchBar"], {
        style: {
          backgroundColor: "#ddd"
        },
        id: "autocomplete",
        onChange: this.onChangeHandler,
        placeholder: "X5X-X5X",
        value: this.state.queryString,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }));
    }
  }]);

  return GoogleMapsSearchBar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    addressData: state.appReducer.addressData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setAddressData: function setAddressData(address) {
      return dispatch(setAddress(address));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(GoogleMapsSearchBar));

/***/ }),

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
//# sourceMappingURL=add-review.js.f2b96ffcac2b2130f921.hot-update.js.map