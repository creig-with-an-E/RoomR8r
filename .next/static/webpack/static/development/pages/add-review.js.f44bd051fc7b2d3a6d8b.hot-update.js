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
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Summary"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Street Address: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, street_address)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "City: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, city)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Province: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, province)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Country: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, country)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Name: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Bio: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1058373414",
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
    className: "jsx-1058373414",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1058373414",
    __self: this
  }, "p.jsx-1058373414{width:350px;color:#fffffa;}p.jsx-1058373414 span.jsx-1058373414{color:#FF5941;margin-right:10px;text-align:right;}h3.jsx-1058373414{color:#fffffa;margin:0;padding:0;text-align:center;font-family:poppin,san-serf;}hr.jsx-1058373414{width:30px, height:5px;padding:2px;background-color:#FF5941;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL3N0ZXBwZXIvc3RlcHBlcl9jb21wb25lbnRzL3Jldmlld0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJnQixBQUdrQixBQUtHLEFBTUEsQUFRSixZQWxCSSxFQUtJLEFBTVQsU0FDQSxBQU9FLEdBbEJiLE1BTUQsQ0FNcUIsRUFPTyxjQWIzQixFQVFELFNBT0EsWUFBQyxPQVBBIiwiZmlsZSI6Ii9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL3N0ZXBwZXIvc3RlcHBlcl9jb21wb25lbnRzL3Jldmlld0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jb25zdCByZXZpZXdGb3JtPShwcm9wcyk9PntcbiAgICBjb25zdCBzdHJlZXRfYWRkcmVzcyA9IHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzBdLmxvbmdfbmFtZSArIFwiIFwiICsgcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbMV0ubG9uZ19uYW1lIHx8IFwiIFwiXG4gICAgY29uc3QgY2l0eSA9IHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzJdLmxvbmdfbmFtZSB8fCBcIiBcIlxuICAgIGNvbnN0IGNvdW50cnkgPSBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVs2XS5sb25nX25hbWUgfHwgXCIgXCJcbiAgICBjb25zdCBwcm92aW5jZSA9IHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzVdLmxvbmdfbmFtZSB8fCBcIiBcIlxuICAgICBcbiAgICBjb25zdCB7bmFtZSwgbGFuZGxvcmRfcmV2aWV3fT1wcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5sYW5kbG9yZF9iaW9cbnJldHVybihcbiAgPGRpdj5cbiAgICA8aDM+U3VtbWFyeTwvaDM+XG4gICAgPGhyIC8+XG4gICAgPHA+U3RyZWV0IEFkZHJlc3M6IDxzcGFuPntzdHJlZXRfYWRkcmVzc308L3NwYW4+PC9wPlxuICAgIDxwPkNpdHk6IDxzcGFuPntjaXR5fTwvc3Bhbj48L3A+XG4gICAgPHA+UHJvdmluY2U6IDxzcGFuPntwcm92aW5jZX08L3NwYW4+PC9wPlxuICAgIDxwPkNvdW50cnk6IDxzcGFuPntjb3VudHJ5fTwvc3Bhbj48L3A+XG4gICAgPHA+TmFtZTogPHNwYW4+e25hbWV9PC9zcGFuPjwvcD5cbiAgICA8cD5CaW86IDxzcGFuPntsYW5kbG9yZF9yZXZpZXd9PC9zcGFuPjwvcD5cbiAgICA8ZGl2IHN0eWxlPXt7ZmxvYXQ6XCJub25lXCIsIGRpc3BsYXk6IFwiYmxvY2tcIn19PjwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBwIHtcbiAgICAgIHdpZHRoOjM1MHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmE7XG4gICAgfTtcblxuICAgIHAgc3BhbiB7XG4gICAgICBjb2xvcjogI0ZGNTk0MTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gICAgfTtcblxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZhO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzowO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1mYW1pbHk6IHBvcHBpbiwgc2FuLXNlcmZcbiAgICB9O1xuICAgIGhyIHtcbiAgICAgIHdpZHRoOiAzMHB4LFxuICAgICAgaGVpZ2h0OjVweDtcbiAgICAgIHBhZGRpbmc6MnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTk0MTtcbiAgICAgIGJvcmRlcjogbm9uZVxuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKX1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzPShzdGF0ZSk9PntcbiAgcmV0dXJue1xuICAgIGRhdGE6IHN0YXRlLmFwcFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykocmV2aWV3Rm9ybSkiXX0= */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.app
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(reviewForm));

/***/ })

})
//# sourceMappingURL=add-review.js.f44bd051fc7b2d3a6d8b.hot-update.js.map