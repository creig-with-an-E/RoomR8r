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
/* harmony import */ var _src_modal_addReviewForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/modal/addReviewForm */ "./src/modal/addReviewForm.js");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/actions/appActions */ "./store/actions/appActions.js");
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../store/actions/authActions */ "./store/actions/authActions.js");








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
      startingUp: true,
      addressError: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onAddressChangeHandler", function (input) {
      //handles user input and stores in local state
      var valid = _this.isValidatePostalCode(input);

      if (!_this.state.addressError && !valid) {
        _this.setState({
          addressError: "Please enter in format X0X X0X"
        });
      } else if (valid) {
        _this.setState({
          address: input.toUpperCase()
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "isValidatePostalCode", function (input) {
      // validates the postal code to fit canadian format of X1X-X1X
      var val = input.split("");
      console.log("hitting ");

      if (val.length % 2 == 0) {
        // validates there are numbers in the odd spaces
        return !isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(val[val.length - 1]));
      } else if (isNaN(val[val.length - 1])) {
        // validates the strings are in the right place by canadian postal code format
        return true;
      } // else value is not acceptable


      return false;
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
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/auth");
      } else {
        this.props.updateSavedToken(this.props.savedToken);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var cards = this.props.searchResults.map(function (element) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_12__["ReviewCard"], {
          data: element,
          key: element.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        });
      });
      var spinner = !this.props.loading ? null : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_12__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }); // showModal is passed down to Layout

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_12__["Layout"], {
        showModalHandle: this.showModalHandle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_modal_addReviewForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
        userToken: this.props.userToken,
        modalVisible: this.state.modalVisible,
        hideModalHandle: this.hideModalHandle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginTop: "60px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        style: styles.headerStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Because not all landlords are built the same")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        style: styles.sectionStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_12__["SearchBar"], {
        placeholder: "X5X-X5X",
        value: this.state.address,
        onChange: this.onAddressChangeHandler,
        onRequestSearch: this.searchByAddressHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.searchHeading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Search for reviews by Postal Code"), spinner, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, " ", this.state.addressError, " ")), cards.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          overflowY: "scroll",
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, cards) : null);
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
    fontSize: 24,
    color: "rgb(44,54,94)",
    textAlign: "center",
    fontFamily: 'Lexend Tera, sans-serif',
    fontWeight: "bold"
  },
  sectionStyle: {
    alignSelf: "center",
    marginTop: "5px",
    padding: "20px",
    width: "380px",
    textAlign: "center"
  },
  searchHeading: {
    fontSize: 16,
    marginTop: 20,
    color: "rgb(44,54,94)",
    fontWeight: "bold",
    fontFamily: "Poppins, sans serif"
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
      return dispatch(_store_actions_authActions__WEBPACK_IMPORTED_MODULE_15__["updateSavedToken"](token));
    },
    findByAddress: function findByAddress(userToken, address) {
      return dispatch(_store_actions_appActions__WEBPACK_IMPORTED_MODULE_14__["findReviewByAddress"](userToken, address));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ })

})
//# sourceMappingURL=index.js.fdfec7460e1fa21b7f70.hot-update.js.map