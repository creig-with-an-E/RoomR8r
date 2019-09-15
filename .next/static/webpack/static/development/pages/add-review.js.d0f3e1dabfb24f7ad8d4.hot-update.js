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
  var street_address = props.data.stepperFormData.addressData[0].long_name + " " + props.data.stepperFormData.addressData[1].long_name || " ";
  var city = props.data.stepperFormData.addressData[2].long_name || " ";
  var country = props.data.stepperFormData.addressData[6].long_name || " ";
  var province = props.data.stepperFormData.addressData[5].long_name || " ";
  var _props$data$stepperFo = props.data.stepperFormData.landlord_bio,
      name = _props$data$stepperFo.name,
      landlord_review = _props$data$stepperFo.landlord_review;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Summary"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Street Address: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, street_address)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "City: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, city)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Province: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, province)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Country: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, country)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Name: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Bio: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, landlord_review)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "float": "none",
      display: "block"
    },
    className: "jsx-1157789467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1157789467",
    __self: this
  }, "p.jsx-1157789467{width:350px;color:#fffffa;}p.jsx-1157789467 span.jsx-1157789467{color:#FF5941;margin-right:10px;text-align:right;}h3.jsx-1157789467{margin:0;padding:0;text-align:center;font-family:poppin,san-serf;}hr.jsx-1157789467{background-color:#FF5941;padding:1px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL3N0ZXBwZXIvc3RlcHBlcl9jb21wb25lbnRzL3Jldmlld0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JnQixBQUdrQixBQUtHLEFBTUwsQUFNZ0IsU0FMaEIsR0FYSyxFQUtJLEtBT0EsTUFLTixDQWhCZCxNQU1ELEtBT0EsQUFLQSxZQVpDLEFBWUEsZ0JBTEEiLCJmaWxlIjoiL1VzZXJzL2ZvcnR1bmVwaGlyaS9Eb2N1bWVudHMvUHJvamVjdHMvcm9vbVI4ci9zcmMvc3RlcHBlci9zdGVwcGVyX2NvbXBvbmVudHMvcmV2aWV3Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmNvbnN0IHJldmlld0Zvcm09KHByb3BzKT0+e1xuICAgIGNvbnN0IHN0cmVldF9hZGRyZXNzID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbMF0ubG9uZ19uYW1lICsgXCIgXCIgKyBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVsxXS5sb25nX25hbWUgfHwgXCIgXCJcbiAgICBjb25zdCBjaXR5ID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbMl0ubG9uZ19uYW1lIHx8IFwiIFwiXG4gICAgY29uc3QgY291bnRyeSA9IHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzZdLmxvbmdfbmFtZSB8fCBcIiBcIlxuICAgIGNvbnN0IHByb3ZpbmNlID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbNV0ubG9uZ19uYW1lIHx8IFwiIFwiXG4gICAgIFxuICAgIGNvbnN0IHtuYW1lLCBsYW5kbG9yZF9yZXZpZXd9PXByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmxhbmRsb3JkX2Jpb1xucmV0dXJuKFxuICA8ZGl2PlxuICAgIDxoMz5TdW1tYXJ5PC9oMz5cbiAgICA8aHIgLz5cbiAgICA8cD5TdHJlZXQgQWRkcmVzczogPHNwYW4+e3N0cmVldF9hZGRyZXNzfTwvc3Bhbj48L3A+XG4gICAgPHA+Q2l0eTogPHNwYW4+e2NpdHl9PC9zcGFuPjwvcD5cbiAgICA8cD5Qcm92aW5jZTogPHNwYW4+e3Byb3ZpbmNlfTwvc3Bhbj48L3A+XG4gICAgPHA+Q291bnRyeTogPHNwYW4+e2NvdW50cnl9PC9zcGFuPjwvcD5cbiAgICA8cD5OYW1lOiA8c3Bhbj57bmFtZX08L3NwYW4+PC9wPlxuICAgIDxwPkJpbzogPHNwYW4+e2xhbmRsb3JkX3Jldmlld308L3NwYW4+PC9wPlxuICAgIDxkaXYgc3R5bGU9e3tmbG9hdDpcIm5vbmVcIiwgZGlzcGxheTogXCJibG9ja1wifX0+PC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgcCB7XG4gICAgICB3aWR0aDozNTBweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZhO1xuICAgIH07XG5cbiAgICBwIHNwYW4ge1xuICAgICAgY29sb3I6ICNGRjU5NDE7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodFxuICAgIH07XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOjA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogcG9wcGluLCBzYW4tc2VyZlxuICAgIH07XG4gICAgaHIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTk0MTtcbiAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgIGJvcmRlcjogbm9uZVxuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKX1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzPShzdGF0ZSk9PntcbiAgcmV0dXJue1xuICAgIGRhdGE6IHN0YXRlLmFwcFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykocmV2aWV3Rm9ybSkiXX0= */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.app
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(reviewForm));

/***/ })

})
//# sourceMappingURL=add-review.js.d0f3e1dabfb24f7ad8d4.hot-update.js.map