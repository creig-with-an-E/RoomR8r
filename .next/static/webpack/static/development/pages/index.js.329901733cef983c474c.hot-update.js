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
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components */ "./src/components/index.js");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/actions/appActions */ "./store/actions/appActions.js");
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/actions/authActions */ "./store/actions/authActions.js");








var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/pages/index.js";








var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      address: "",
      modalVisible: false,
      searchInitiated: false,
      //used as flag to check if user has attempted searching if so show no result 
      addressError: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onAddressChangeHandler", function (input) {
      //handles user input and stores in local state
      var valid = _this.isValidatePostalCode(input);

      if (valid) {
        var addDash = input.length === 3 ? "".concat(input.slice(0, 3), " ").concat(input.slice(3)) : input;

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
          if (element === " ") {
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
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_12__["ReviewCard"], {
            data: element,
            key: element.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
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
              lineNumber: 96
            },
            __self: this
          }, "Currently no reviews exist for this postal code");
        }
      }

      var spinner = !this.props.loading ? null : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_12__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      });
      /***  showModal handle is passed down to Layout ***/

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_12__["Layout"], {
        showModalHandle: this.showModalHandle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        style: styles.sectionStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        style: styles.headerStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Because not all landlords are built the same"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        style: styles.secondaryHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fa fa-home",
        style: styles.highlightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), " war", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: styles.highlightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "M"), "ing or ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        "class": "fa fa-home fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), " war", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: styles.highlightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "N"), "ing ?"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_12__["SearchBar"], {
        style: {
          backgroundColor: "#FF5941",
          color: "#fffffa"
        },
        invalid: this.state.addressError ? true : false,
        placeholder: "X5X X5X",
        value: this.state.address,
        onChange: this.onAddressChangeHandler,
        onRequestSearch: this.searchByAddressHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.errorStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, " ", this.state.addressError ? "Acceptable format is X9X-9X9" : "", " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.searchHeading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Search for reviews by Postal Code"), spinner, emptyResultsText, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
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
    fontSize: 26,
    color: "rgb(44,54,94)",
    textAlign: "center",
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "bold"
  },
  secondaryHeader: {
    fontSize: 20,
    color: "rgb(44,54,94)",
    fontFamily: 'Poppins, sans-serif'
  },
  highlightText: {
    fontSize: 24,
    color: "#FF5941",
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
      return dispatch(_store_actions_authActions__WEBPACK_IMPORTED_MODULE_14__["updateSavedToken"](token));
    },
    findByAddress: function findByAddress(userToken, address) {
      return dispatch(_store_actions_appActions__WEBPACK_IMPORTED_MODULE_13__["findReviewByAddress"](userToken, address));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ })

})
//# sourceMappingURL=index.js.329901733cef983c474c.hot-update.js.map