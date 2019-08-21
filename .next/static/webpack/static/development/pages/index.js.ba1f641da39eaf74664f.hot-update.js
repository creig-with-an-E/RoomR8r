webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/spinner */ "./src/components/spinner.js");
/* harmony import */ var _src_components_reviewCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/reviewCard */ "./src/components/reviewCard.js");
/* harmony import */ var _src_components_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/toolbar */ "./src/components/toolbar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! material-ui-search-bar */ "./node_modules/material-ui-search-bar/lib/index.js");
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_16__);









var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/pages/index.js";









var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      address: "",
      loading: null,
      data: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onAddressChangeHandler", function (input) {
      _this.setState({
        address: input
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "searchHandler", function (event) {
      _this.setState({
        loading: true
      });

      axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("https://accomo-rater.firebaseio.com/landlord_data.json?auth=".concat(_this.props.userToken)).then(function (response) {
        var arrayData = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(response.data).map(function (key) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, response.data[key], {
            id: key
          });
        });

        console.log(arrayData);

        _this.setState({
          loading: false,
          data: arrayData
        });
      })["catch"](function (error) {
        _this.setState({
          loading: false
        });
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      !this.props.userToken ? next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push("/login") : null;
    }
  }, {
    key: "render",
    value: function render() {
      var cards = this.state.data.map(function (element) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_reviewCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
          data: element,
          key: element.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        });
      });
      var spinner = !this.state.loading ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_spinner__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: styles.containerStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_toolbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          marginTop: "60px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        style: styles.headerStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Because not all landlords are built the same")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          marginTop: "5px",
          padding: "20px",
          width: "60%",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_16___default.a, {
        placeholder: "Enter address",
        value: this.state.address,
        onChange: this.onAddressChangeHandler,
        onRequestSearch: this.searchHandler,
        style: styles.searchbarStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), spinner), cards.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          overflowY: "scroll",
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, cards) : null);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var styles = {
  containerStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    backgroundColor: "#fffffa"
  },
  headerStyle: {
    color: "#2C365E",
    textAlign: "center",
    fontFamily: 'Fira Sans, sans-serif',
    fontWeight: "bold"
  },
  searchbarStyle: {
    margin: "0 auto",
    maxWidth: 600,
    padding: 7,
    boxShadow: '1px 3px 6px 2px rgba(44,54,94,0.6)'
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userToken: state.auth.userToken
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps)(App));

/***/ })

})
//# sourceMappingURL=index.js.ba1f641da39eaf74664f.hot-update.js.map