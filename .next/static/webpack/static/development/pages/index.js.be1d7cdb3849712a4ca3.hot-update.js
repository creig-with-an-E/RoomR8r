webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/modal/addReviewForm.js":
/*!************************************!*\
  !*** ./src/modal/addReviewForm.js ***!
  \************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components */ "./src/components/index.js");







var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/modal/addReviewForm.js";









var addReviewForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(addReviewForm, _Component);

  function addReviewForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, addReviewForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(addReviewForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      rating: 0,
      postal_code: "",
      street_number: "",
      apartment_number: "",
      first_name: "",
      last_name: "",
      comment: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClose", function () {
      _this.props.hideModalHandle();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addReviewHandle", function (event) {
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post("https://accomo-rater.firebaseio.com/landlord_data.json?auth=".concat(_this.props.userToken), {
        "postal_code": _this.state.postal_code,
        "address": {
          "street_number": _this.state.street_number,
          "apartment_number": _this.state.apartment_number
        },
        "landlord_bio": {
          "first_name": _this.state.first_name,
          "last_name": _this.state.last_name
        },
        "comment": _this.state.comment
      }).then(function (response) {
        handleClose();
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(addReviewForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        "aria-labelledby": "transition-modal-title",
        "aria-describedby": "transition-modal-description",
        style: styles.modal,
        open: this.props.modalVisible,
        onClose: this.handleClose,
        closeAfterTransition: true,
        BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__["default"],
        BackdropProps: {
          timeout: 500
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__["default"], {
        "in": this.props.modalVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: styles.paper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        style: styles.heading,
        id: "transition-modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Add Review"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.addReviewHandle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: styles.input,
        type: "text",
        required: true,
        placeholder: "Post Code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: styles.input,
        type: "text",
        required: true,
        placeholder: "Street address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: styles.input,
        type: "text",
        placeholder: "Apartment Number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: styles.input,
        type: "text",
        required: true,
        placeholder: "City",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("legend", {
        title: "Land lord info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: styles.input,
        placeholder: "Full Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          margin: "15px auto",
          justifyContent: "center",
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_12__["default"], {
        value: this.state.rating,
        onChange: function onChange(event, newValue) {
          return _this2.setState({
            rating: event
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        onClick: this.addReviewHandle,
        style: styles.buttonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Submit"))))));
    }
  }]);

  return addReviewForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
var styles = {
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
    padding: "4px, 4px, 3px"
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
/* harmony default export */ __webpack_exports__["default"] = (addReviewForm);

/***/ })

})
//# sourceMappingURL=index.js.be1d7cdb3849712a4ca3.hot-update.js.map