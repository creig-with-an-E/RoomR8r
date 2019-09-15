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
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Summary"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Street Address: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, street_address)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "City: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, city)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Province: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, province)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Country: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, country)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Name: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Bio: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2835632231",
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
    className: "jsx-2835632231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2835632231",
    __self: this
  }, "p.jsx-2835632231{width:350px;color:#fffffa;}p.jsx-2835632231 span.jsx-2835632231{color:#FF5941;margin-right:10px;text-align:right;}h3.jsx-2835632231{color:#fffffa;margin:0;padding:0;text-align:center;font-family:poppin,san-serf;}hr.jsx-2835632231{width:300px, height:20px;background-color:#FF5941;padding:10px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL3N0ZXBwZXIvc3RlcHBlcl9jb21wb25lbnRzL3Jldmlld0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JnQixBQUdrQixBQUtHLEFBTUEsQUFRSCxZQWxCRyxFQUtJLEFBTVQsU0FDQSxFQU9nQixDQWxCM0IsTUFNRCxDQU1xQixnQkFOcEIsQ0FhZSxDQUxoQixZQU9BLFlBQUMsSUFQQSIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3NyYy9zdGVwcGVyL3N0ZXBwZXJfY29tcG9uZW50cy9yZXZpZXdGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY29uc3QgcmV2aWV3Rm9ybT0ocHJvcHMpPT57XG4gICAgY29uc3Qgc3RyZWV0X2FkZHJlc3MgPSBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVswXS5sb25nX25hbWUgKyBcIiBcIiArIHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzFdLmxvbmdfbmFtZSB8fCBcIiBcIlxuICAgIGNvbnN0IGNpdHkgPSBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVsyXS5sb25nX25hbWUgfHwgXCIgXCJcbiAgICBjb25zdCBjb3VudHJ5ID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbNl0ubG9uZ19uYW1lIHx8IFwiIFwiXG4gICAgY29uc3QgcHJvdmluY2UgPSBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVs1XS5sb25nX25hbWUgfHwgXCIgXCJcbiAgICAgXG4gICAgY29uc3Qge25hbWUsIGxhbmRsb3JkX3Jldmlld309cHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEubGFuZGxvcmRfYmlvXG5yZXR1cm4oXG4gIDxkaXY+XG4gICAgPGgzPlN1bW1hcnk8L2gzPlxuICAgIDxociAvPlxuICAgIDxwPlN0cmVldCBBZGRyZXNzOiA8c3Bhbj57c3RyZWV0X2FkZHJlc3N9PC9zcGFuPjwvcD5cbiAgICA8cD5DaXR5OiA8c3Bhbj57Y2l0eX08L3NwYW4+PC9wPlxuICAgIDxwPlByb3ZpbmNlOiA8c3Bhbj57cHJvdmluY2V9PC9zcGFuPjwvcD5cbiAgICA8cD5Db3VudHJ5OiA8c3Bhbj57Y291bnRyeX08L3NwYW4+PC9wPlxuICAgIDxwPk5hbWU6IDxzcGFuPntuYW1lfTwvc3Bhbj48L3A+XG4gICAgPHA+QmlvOiA8c3Bhbj57bGFuZGxvcmRfcmV2aWV3fTwvc3Bhbj48L3A+XG4gICAgPGRpdiBzdHlsZT17e2Zsb2F0Olwibm9uZVwiLCBkaXNwbGF5OiBcImJsb2NrXCJ9fT48L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBwIHtcbiAgICAgIHdpZHRoOjM1MHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmE7XG4gICAgfTtcblxuICAgIHAgc3BhbiB7XG4gICAgICBjb2xvcjogI0ZGNTk0MTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gICAgfTtcblxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZhO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzowO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1mYW1pbHk6IHBvcHBpbiwgc2FuLXNlcmZcbiAgICB9O1xuICAgIGhyIHtcbiAgICAgIHdpZHRoOiAzMDBweCxcbiAgICAgIGhlaWdodDoyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTk0MTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IG5vbmVcbiAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbil9XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcz0oc3RhdGUpPT57XG4gIHJldHVybntcbiAgICBkYXRhOiBzdGF0ZS5hcHBcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHJldmlld0Zvcm0pIl19 */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.app
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(reviewForm));

/***/ })

})
//# sourceMappingURL=add-review.js.aa4471e18599f623fcaf.hot-update.js.map