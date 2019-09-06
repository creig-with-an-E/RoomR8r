webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_parseCookies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/parseCookies */ "./lib/parseCookies.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-load-script */ "./node_modules/react-load-script/lib/index.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components */ "./src/components/index.js");
/* harmony import */ var _src_modal_addReviewForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/modal/addReviewForm */ "./src/modal/addReviewForm.js");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../store/actions/appActions */ "./store/actions/appActions.js");
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/actions/authActions */ "./store/actions/authActions.js");








var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/pages/index.js";










var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      address: "",
      modalVisible: false,
      searchInitiated: false,
      //used as flag to check if user has attempted searching if so show no result 
      addressError: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handlePlaceSelect", function () {
      // Extract City From Address Object
      var addressObject = _this.autocomplete.getPlace();

      var address = addressObject.address_components; // Check if address is valid

      if (address) {
        // Set State
        _this.setState({
          city: address[0].long_name,
          address: addressObject.formatted_address
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onAddressChangeHandler", function (input) {
      //handles user input and stores in local state
      var valid = _this.isValidatePostalCode(input);

      if (valid) {
        var addDash = input.length === 3 ? "".concat(input.slice(0, 3), "-").concat(input.slice(3)) : input;

        _this.setState({
          addressError: false,
          address: addDash.toUpperCase()
        });

        return;
      }

      _this.setState({
        addressError: !valid
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "isValidatePostalCode", function (input) {
      // validates the postal code to fit canadian format of X1X-X1X
      var val = input.split(""); //storing the values in array

      var valid = true;
      var counter = 0;
      val.forEach(function (element, index) {
        /******
          counter used to keep track of spaces where value should be digit
          even array index is alphabetic character and odd is numeric
          counter is not incremented after 3 so as to add dash which is not counted
        ******/
        if (counter % 2 !== 0) {
          if (element === "-") {
            return;
          } else {
            counter++;
            valid = valid && !isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(element));
          }
        } else {
          counter++; // validates the strings are in the right place by canadian postal code format

          valid = valid && /^[A-Za-z\-]/.test(element);
        }
      });
      return valid;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "searchByAddressHandler", function (event) {
      _this.props.findByAddress(_this.props.userToken, _this.state.address);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "showModalHandle", function () {
      _this.setState({
        modalVisible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "hideModalHandle", function () {
      _this.setState({
        modalVisible: false
      });
    });

    _this.handleScriptLoad = _this.handleScriptLoad.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handlePlaceSelect = _this.handlePlaceSelect.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.savedToken) {
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace("/auth");
      } else {
        this.props.updateSavedToken(this.props.savedToken);
      }
    }
  }, {
    key: "handleScriptLoad",
    value: function handleScriptLoad() {
      /***loads google script on load */
      // Declare Options For Autocomplete
      var options = {// types: ['(cities)'],
      }; // Initialize Google Autocomplete

      this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options); // Avoid paying for data that you don't need by restricting the set of
      // place fields that are returned to just the address components.

      this.autocomplete.setFields(['address_components']); // Fire Event when a suggested name is selected

      this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }
  }, {
    key: "render",
    value: function render() {
      var cards = null;
      /**
       *  emptyResultsText: this is used to display feedback when empty list returned.
       *  display of this warning is handled by state.showEmptyResultsWarning flag
       * */

      var emptyResultsText = "";

      if (this.props.searchResults !== null && this.props.searchResults.length > 0) {
        cards = this.props.searchResults ? this.props.searchResults.map(function (element) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_13__["ReviewCard"], {
            data: element,
            key: element.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          });
        }) : null;
      } else if (this.props.searchResults) {
        /*** this handle the empty array case where no results where found**/
        if (this.props.searchResults.length === 0) {
          emptyResultsText = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            style: styles.noResultsStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          }, "Currently no reviews exist for this postal code");
        }
      }

      var spinner = !this.props.loading ? null : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      });
      /***  showModal handle is passed down to Layout ***/

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_13__["Layout"], {
        showModalHandle: this.showModalHandle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_12___default.a, {
        url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWcDVGfs8R5EmWbh9xsuYEHycoqDyDf9I&libraries=places",
        onLoad: this.handleScriptLoad,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_modal_addReviewForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
        userToken: this.props.userToken,
        modalVisible: this.state.modalVisible,
        hideModalHandle: this.hideModalHandle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        style: styles.sectionStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        style: styles.headerStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Because not all landlords are built the same"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_13__["SearchBar"], {
        id: "autocomplete",
        invalid: this.state.addressError ? true : false,
        placeholder: "X5X-X5X",
        value: this.state.address // onChange={this.onAddressChangeHandler}
        ,
        onRequestSearch: this.searchByAddressHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.errorStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, " ", this.state.addressError ? "Acceptable format is X9X-9X9" : "", " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.searchHeading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Search for reviews by Postal Code"), spinner, emptyResultsText, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, cards)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(App, "getInitialProps", function (_ref) {
  var req = _ref.req;
  var cookie = Object(_lib_parseCookies__WEBPACK_IMPORTED_MODULE_11__["parseCookies"])(req);
  return {
    savedToken: cookie.userToken
  };
});

var styles = {
  headerStyle: {
    marginTop: "80px",
    fontSize: 22,
    color: "rgb(44,54,94)",
    textAlign: "center",
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "bold"
  },
  sectionStyle: {
    overflowY: "scroll",
    alignSelf: "center",
    marginTop: "5px",
    padding: "20px",
    textAlign: "center",
    width: "100%"
  },
  searchHeading: {
    fontSize: 16,
    marginTop: 20,
    color: "rgb(44,54,94)",
    fontWeight: "bold",
    fontFamily: "Poppins, sans serif"
  },
  errorStyle: {
    color: "rgb(255,89,65)",
    fontWeight: "bold",
    fontFamily: "Poppins, sans serif"
  },
  noResultsStyle: {
    color: "rgb(255,89,65)",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Fira Sans, sans serif"
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userToken: state.auth.userToken,
    searchResults: state.app.searchResults,
    loading: state.app.loading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateSavedToken: function updateSavedToken(token) {
      return dispatch(_store_actions_authActions__WEBPACK_IMPORTED_MODULE_16__["updateSavedToken"](token));
    },
    findByAddress: function findByAddress(userToken, address) {
      return dispatch(_store_actions_appActions__WEBPACK_IMPORTED_MODULE_15__["findReviewByAddress"](userToken, address));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ })

})
//# sourceMappingURL=index.js.7d34350da227b8e646ff.hot-update.js.map