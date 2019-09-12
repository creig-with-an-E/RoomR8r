webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/appActions */ "./store/actions/appActions.js");







var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/googleMapsSearchBar.js";






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
        _this.props.setAddressData(address);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeHandler", function (input) {
      /** handles the input change in search bar*/
      _this.setState({
        queryString: input
      });
    });

    _this.state = {
      queryString: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoogleMapsSearchBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.addressData) {
        var addressData = this.props.addressData;
        this.setState({
          queryString: "".concat(addressData[0].long_name, " ").concat(addressData[1].long_name)
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.addressData !== prevProps.addressData) {
        var addressData = this.props.addressData;
        this.setState({
          address: addressData,
          queryString: "".concat(addressData[0].long_name, " ").concat(addressData[1].long_name)
        });
      }
    }
    /******start of google maps functions */

  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_9___default.a, {
        url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWcDVGfs8R5EmWbh9xsuYEHycoqDyDf9I&libraries=places",
        onLoad: this.handleScriptLoad,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["SearchBar"], {
        style: styles.searchBar,
        id: "autocomplete",
        onChange: this.onChangeHandler,
        placeholder: "X5X-X5X",
        value: this.state.queryString,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }));
    }
  }]);

  return GoogleMapsSearchBar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    addressData: state.app.addressData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setAddressData: function setAddressData(address) {
      return dispatch(Object(_store_actions_appActions__WEBPACK_IMPORTED_MODULE_11__["setAddress"])(address));
    }
  };
};

var styles = {
  searchBar: {
    backgroundColor: "#fffffa",
    width: "300px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(GoogleMapsSearchBar));

/***/ })

})
//# sourceMappingURL=index.js.ee8bddd8b46c62dcaca7.hot-update.js.map