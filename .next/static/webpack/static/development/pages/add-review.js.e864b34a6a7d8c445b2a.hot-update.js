webpackHotUpdate("static/development/pages/add-review.js",{

/***/ "./src/stepper/stepper_components/reviewForm.js":
/*!******************************************************!*\
  !*** ./src/stepper/stepper_components/reviewForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js";




var reviewForm = function reviewForm(props) {
  var street_address = props.data.stepperFormData.addressData[0].long_name + props.data.stepperFormData.addressData[1].long_name;
  var _props$data$stepperFo = props.data.stepperFormData.landlord_bio,
      name = _props$data$stepperFo.name,
      landlord_review = _props$data$stepperFo.landlord_review;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2647348142",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2647348142",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Summary"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-2647348142",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2647348142",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Street Address:", street_number), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2647348142",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Name: ", name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2647348142",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Bio:", landlord_review), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2647348142",
    __self: this
  }, "p.jsx-2647348142{color:#fffffa;}h3.jsx-2647348142{margin:0;padding:0;text-align:center;font-family:poppin,san-serf;}hr.jsx-2647348142{background-color:#FF5941;padding:1px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL3N0ZXBwZXIvc3RlcHBlcl9jb21wb25lbnRzL3Jldmlld0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBSUksQUFFWSxBQU1nQixTQUxoQixLQUhYLEtBSW9CLE1BS04sWUFIZixBQUtBLFlBQUMsZ0JBTEEiLCJmaWxlIjoiL1VzZXJzL2ZvcnR1bmVwaGlyaS9Eb2N1bWVudHMvUHJvamVjdHMvcm9vbVI4ci9zcmMvc3RlcHBlci9zdGVwcGVyX2NvbXBvbmVudHMvcmV2aWV3Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmNvbnN0IHJldmlld0Zvcm09KHByb3BzKT0+e1xuICAgIGNvbnN0IHN0cmVldF9hZGRyZXNzID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbMF0ubG9uZ19uYW1lICsgcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbMV0ubG9uZ19uYW1lXG4gICAgY29uc3Qge25hbWUsIGxhbmRsb3JkX3Jldmlld309cHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEubGFuZGxvcmRfYmlvXG5yZXR1cm4oXG4gIDxkaXY+XG4gICAgPGgzPlN1bW1hcnk8L2gzPlxuICAgIDxociAvPlxuICAgIDxwPlN0cmVldCBBZGRyZXNzOntzdHJlZXRfbnVtYmVyfTwvcD5cbiAgICA8cD5OYW1lOiB7bmFtZX08L3A+XG4gICAgPHA+QmlvOntsYW5kbG9yZF9yZXZpZXd9PC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZhXG4gICAgfTtcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOjA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogcG9wcGluLCBzYW4tc2VyZlxuICAgIH07XG4gICAgaHIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTk0MTtcbiAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgIGJvcmRlcjogbm9uZVxuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKX1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzPShzdGF0ZSk9PntcbiAgcmV0dXJue1xuICAgIGRhdGE6IHN0YXRlLmFwcFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykocmV2aWV3Rm9ybSkiXX0= */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.app
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(reviewForm));

/***/ })

})
//# sourceMappingURL=add-review.js.e864b34a6a7d8c445b2a.hot-update.js.map