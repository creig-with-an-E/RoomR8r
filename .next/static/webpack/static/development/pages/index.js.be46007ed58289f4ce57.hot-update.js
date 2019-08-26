webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components */ "./src/components/index.js");
/* harmony import */ var _src_modal_addReviewForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/modal/addReviewForm */ "./src/modal/addReviewForm.js");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/actions/appActions */ "./store/actions/appActions.js");







var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/pages/index.js";







var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      address: "",
      modalVisible: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onAddressChangeHandler", function (input) {
      //handles user input and stores in local state
      _this.setState({
        address: input.toUpperCase()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "searchByAddressHandler", function (event) {
      _this.props.findByAddress(_this.props.userToken, _this.state.address);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showModalHandle", function () {
      _this.setState({
        modalVisible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "hideModalHandle", function () {
      _this.setState({
        modalVisible: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      !this.props.userToken ? next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/login") : null;
    }
  }, {
    key: "render",
    value: function render() {
      var cards = this.props.searchResults.map(function (element) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__["ReviewCard"], {
          data: element,
          key: element.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        });
      });
      var spinner = !this.props.loading ? null : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__["Layout"], {
        showModalHandle: this.showModalHandle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_modal_addReviewForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        modalVisible: this.state.modalVisible,
        hideModalHandle: this.hideModalHandle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginTop: "60px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        style: styles.headerStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Because not all landlords are built the same")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          alignSelf: "center",
          marginTop: "5px",
          padding: "20px",
          width: "380px",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__["SearchBar"], {
        placeholder: "search by post code",
        value: this.state.address,
        onChange: this.onAddressChangeHandler,
        onRequestSearch: this.searchByAddressHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), spinner), cards.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          overflowY: "scroll",
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, cards) : null);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var styles = {
  headerStyle: {
    color: "#2C365E",
    textAlign: "center",
    fontFamily: 'Fira Sans, sans-serif',
    fontWeight: "bold"
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
    findByAddress: function findByAddress(userToken, address) {
      return dispatch(_store_actions_appActions__WEBPACK_IMPORTED_MODULE_12__["findReviewByAddress"](userToken, address));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/forms/addReviewForm.js":
false,

/***/ "./src/modal/addReviewForm.js":
/*!************************************!*\
  !*** ./src/modal/addReviewForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./src/components/index.js");

var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/modal/addReviewForm.js";








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(44,54,94,0.8)"
    },
    paper: {
      margin: "0 auto",
      borderRadius: "3px",
      background: "rgb(44,54,94)",
      boxShadow: "#000",
      width: 320,
      padding: theme.spacing(4, 4, 3)
    },
    input: {
      padding: 15,
      display: "block",
      margin: "10px auto"
    },
    heading: {
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
      color: "#fffff0"
    }
  };
});

var addReviewForm = function addReviewForm(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      rating = _useState2[0],
      setRating = _useState2[1];

  var handleClose = function handleClose() {
    props.hideModalHandle();
  };

  var addReviewHandle = function addReviewHandle() {};

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: props.modalVisible,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__["default"],
    BackdropProps: {
      timeout: 500
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "in": props.modalVisible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: classes.heading,
    id: "transition-modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Add Review"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: classes.input,
    type: "text",
    required: true,
    placeholder: "Post Code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    required: true,
    className: classes.input,
    type: "text",
    placeholder: "Street address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: classes.input,
    type: "text",
    placeholder: "Apartment Number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    required: true,
    className: classes.input,
    type: "text",
    placeholder: "City",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("legend", {
    title: "Land lord info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: classes.input,
    placeholder: "Full Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      margin: "15px auto",
      justifyContent: "center",
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: rating,
    onChange: function onChange(event, newValue) {
      return setRating(newValue);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: handleClose,
    className: classes.buttonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Submit"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (addReviewForm);

/***/ }),

/***/ "./src/modal/modal.js":
false

})
//# sourceMappingURL=index.js.be46007ed58289f4ce57.hot-update.js.map