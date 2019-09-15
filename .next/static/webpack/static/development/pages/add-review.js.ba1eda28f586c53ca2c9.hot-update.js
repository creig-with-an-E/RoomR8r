webpackHotUpdate("static/development/pages/add-review.js",{

/***/ "./src/stepper/stepper_components/reviewForm.js":
/*!******************************************************!*\
  !*** ./src/stepper/stepper_components/reviewForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js";



var reviewForm = function reviewForm(props) {
  var _props$data$stepperFo = props.data.stepperFormData.landlord_bio,
      name = _props$data$stepperFo.name,
      landlord_review = _props$data$stepperFo.landlord_review;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, landlord_review));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.app
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(reviewForm));

/***/ })

})
//# sourceMappingURL=add-review.js.ba1eda28f586c53ca2c9.hot-update.js.map