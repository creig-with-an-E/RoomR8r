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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
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
  }, "p.jsx-1157789467{width:350px;color:#fffffa;}p.jsx-1157789467 span.jsx-1157789467{color:#FF5941;margin-right:10px;text-align:right;}h3.jsx-1157789467{margin:0;padding:0;text-align:center;font-family:poppin,san-serf;}hr.jsx-1157789467{background-color:#FF5941;padding:1px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL3N0ZXBwZXIvc3RlcHBlcl9jb21wb25lbnRzL3Jldmlld0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JnQixBQUdrQixBQUtHLEFBTUwsQUFNZ0IsU0FMaEIsR0FYSyxFQUtJLEtBT0EsTUFLTixDQWhCZCxNQU1ELEtBT0EsQUFLQSxZQVpDLEFBWUEsZ0JBTEEiLCJmaWxlIjoiL1VzZXJzL2ZvcnR1bmVwaGlyaS9Eb2N1bWVudHMvUHJvamVjdHMvcm9vbVI4ci9zcmMvc3RlcHBlci9zdGVwcGVyX2NvbXBvbmVudHMvcmV2aWV3Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmNvbnN0IHJldmlld0Zvcm09KHByb3BzKT0+e1xuICAgIGNvbnN0IHN0cmVldF9hZGRyZXNzID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbMF0ubG9uZ19uYW1lICsgXCIgXCIgKyBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVsxXS5sb25nX25hbWUgfHwgXCIgXCJcbiAgICBjb25zdCBjaXR5ID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbMl0ubG9uZ19uYW1lIHx8IFwiIFwiXG4gICAgY29uc3QgY291bnRyeSA9IHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzZdLmxvbmdfbmFtZSB8fCBcIiBcIlxuICAgIGNvbnN0IHByb3ZpbmNlID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbNV0ubG9uZ19uYW1lIHx8IFwiIFwiXG4gICAgIFxuICAgIGNvbnN0IHtuYW1lLCBsYW5kbG9yZF9yZXZpZXd9PXByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmxhbmRsb3JkX2Jpb1xucmV0dXJuKFxuICA8ZGl2PlxuICAgIDxoMz5TdW1tYXJ5PC9oMz5cbiAgICA8aHIgLz5cbiAgICA8bGFiZWw+U3RyZWV0IEFkZHJlc3M6IDxzcGFuPntzdHJlZXRfYWRkcmVzc308L3NwYW4+PC9sYWJlbD5cbiAgICA8cD5DaXR5OiA8c3Bhbj57Y2l0eX08L3NwYW4+PC9wPlxuICAgIDxwPlByb3ZpbmNlOiA8c3Bhbj57cHJvdmluY2V9PC9zcGFuPjwvcD5cbiAgICA8cD5Db3VudHJ5OiA8c3Bhbj57Y291bnRyeX08L3NwYW4+PC9wPlxuICAgIDxwPk5hbWU6IDxzcGFuPntuYW1lfTwvc3Bhbj48L3A+XG4gICAgPHA+QmlvOiA8c3Bhbj57bGFuZGxvcmRfcmV2aWV3fTwvc3Bhbj48L3A+XG4gICAgPGRpdiBzdHlsZT17e2Zsb2F0Olwibm9uZVwiLCBkaXNwbGF5OiBcImJsb2NrXCJ9fT48L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBwIHtcbiAgICAgIHdpZHRoOjM1MHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmE7XG4gICAgfTtcblxuICAgIHAgc3BhbiB7XG4gICAgICBjb2xvcjogI0ZGNTk0MTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gICAgfTtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6MDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiBwb3BwaW4sIHNhbi1zZXJmXG4gICAgfTtcbiAgICBociB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1OTQxO1xuICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgYm9yZGVyOiBub25lXG4gICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pfVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM9KHN0YXRlKT0+e1xuICByZXR1cm57XG4gICAgZGF0YTogc3RhdGUuYXBwXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShyZXZpZXdGb3JtKSJdfQ== */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.app
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(reviewForm));

/***/ })

})
//# sourceMappingURL=add-review.js.1d9e031a728119bbb132.hot-update.js.map