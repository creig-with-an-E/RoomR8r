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
  var street_address = props.data.stepperFormData.addressData[0].long_name + props.data.stepperFormData.addressData[1].long_name || " ";
  var city = props.data.stepperFormData.addressData[2].long_name || " ";
  var country = props.data.stepperFormData.addressData[6].long_name || " ";
  var province = props.data.stepperFormData.addressData[5].long_name || " ";
  var _props$data$stepperFo = props.data.stepperFormData.landlord_bio,
      name = _props$data$stepperFo.name,
      landlord_review = _props$data$stepperFo.landlord_review;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Summary"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Street Address: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, street_address)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "City: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, city)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Province: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, province)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Country: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, country)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Name: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Bio: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1358037389",
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
    className: "jsx-1358037389",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1358037389",
    __self: this
  }, "p.jsx-1358037389{width:350px;color:#fffffa;}p.jsx-1358037389 span.jsx-1358037389{padding:2px;color:#FF5941;margin-right:10px;float:right;}h3.jsx-1358037389{margin:0;padding:0;text-align:center;font-family:poppin,san-serf;}hr.jsx-1358037389{background-color:#FF5941;padding:1px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL3N0ZXBwZXIvc3RlcHBlcl9jb21wb25lbnRzL3Jldmlld0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JnQixBQUdrQixBQUtBLEFBT0YsQUFNZ0IsU0FMaEIsR0FaSyxBQUtBLE9BUUksTUFLTixDQWpCZCxBQUtvQixXQVNyQixBQUtBLE9BWkEsS0FZQyxPQVpBLFNBT0EiLCJmaWxlIjoiL1VzZXJzL2ZvcnR1bmVwaGlyaS9Eb2N1bWVudHMvUHJvamVjdHMvcm9vbVI4ci9zcmMvc3RlcHBlci9zdGVwcGVyX2NvbXBvbmVudHMvcmV2aWV3Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmNvbnN0IHJldmlld0Zvcm09KHByb3BzKT0+e1xuICAgIGNvbnN0IHN0cmVldF9hZGRyZXNzID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbMF0ubG9uZ19uYW1lICsgcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbMV0ubG9uZ19uYW1lIHx8IFwiIFwiXG4gICAgY29uc3QgY2l0eSA9IHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzJdLmxvbmdfbmFtZSB8fCBcIiBcIlxuICAgIGNvbnN0IGNvdW50cnkgPSBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVs2XS5sb25nX25hbWUgfHwgXCIgXCJcbiAgICBjb25zdCBwcm92aW5jZSA9IHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzVdLmxvbmdfbmFtZSB8fCBcIiBcIlxuICAgICBcbiAgICBjb25zdCB7bmFtZSwgbGFuZGxvcmRfcmV2aWV3fT1wcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5sYW5kbG9yZF9iaW9cbnJldHVybihcbiAgPGRpdj5cbiAgICA8aDM+U3VtbWFyeTwvaDM+XG4gICAgPGhyIC8+XG4gICAgPHA+U3RyZWV0IEFkZHJlc3M6IDxzcGFuPntzdHJlZXRfYWRkcmVzc308L3NwYW4+PC9wPlxuICAgIDxwPkNpdHk6IDxzcGFuPntjaXR5fTwvc3Bhbj48L3A+XG4gICAgPHA+UHJvdmluY2U6IDxzcGFuPntwcm92aW5jZX08L3NwYW4+PC9wPlxuICAgIDxwPkNvdW50cnk6IDxzcGFuPntjb3VudHJ5fTwvc3Bhbj48L3A+XG4gICAgPHA+TmFtZTogPHNwYW4+e25hbWV9PC9zcGFuPjwvcD5cbiAgICA8cD5CaW86IDxzcGFuPntsYW5kbG9yZF9yZXZpZXd9PC9zcGFuPjwvcD5cbiAgICA8ZGl2IHN0eWxlPXt7ZmxvYXQ6XCJub25lXCIsIGRpc3BsYXk6IFwiYmxvY2tcIn19PjwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgIHAge1xuICAgICAgd2lkdGg6MzUwcHg7XG4gICAgICBjb2xvcjogI2ZmZmZmYTtcbiAgICB9O1xuXG4gICAgcCBzcGFuIHtcbiAgICAgIHBhZGRpbmc6MnB4O1xuICAgICAgY29sb3I6ICNGRjU5NDE7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBmbG9hdDogcmlnaHRcbiAgICB9O1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzowO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1mYW1pbHk6IHBvcHBpbiwgc2FuLXNlcmZcbiAgICB9O1xuICAgIGhyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjU5NDE7XG4gICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICBib3JkZXI6IG5vbmVcbiAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbil9XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcz0oc3RhdGUpPT57XG4gIHJldHVybntcbiAgICBkYXRhOiBzdGF0ZS5hcHBcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHJldmlld0Zvcm0pIl19 */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.app
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(reviewForm));

/***/ })

})
//# sourceMappingURL=add-review.js.b5a6892d3cd24b5ace20.hot-update.js.map