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
  var city = props.data.stepperFormData.addressData[2].long_name;
  var country = props.data.stepperFormData.addressData[6].long_name;
  var province = props.data.stepperFormData.addressData[5].long_name;
  var _props$data$stepperFo = props.data.stepperFormData.landlord_bio,
      name = _props$data$stepperFo.name,
      landlord_review = _props$data$stepperFo.landlord_review;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Summary"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Street Address:"), street_address), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "City:"), city), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Province:"), province), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Country:"), country), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Name: "), name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4273504163",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Bio:"), landlord_review), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4273504163",
    __self: this
  }, "p.jsx-4273504163{width:350px;color:#FF5941;}p.jsx-4273504163 span.jsx-4273504163{padding:2px;color:#fff;margin-right:10px;text-align:right;}h3.jsx-4273504163{margin:0;padding:0;text-align:center;font-family:poppin,san-serf;}hr.jsx-4273504163{background-color:#FF5941;padding:1px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL3N0ZXBwZXIvc3RlcHBlcl9jb21wb25lbnRzL3Jldmlld0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUdrQixBQUtBLEFBT0YsQUFNZ0IsU0FMaEIsR0FaSyxBQUtILE9BUU8sSUFQQSxFQVlOLENBakJkLFdBY0QsQUFLQSxJQVpBLFFBWUMsU0FaQSxPQU9BIiwiZmlsZSI6Ii9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL3N0ZXBwZXIvc3RlcHBlcl9jb21wb25lbnRzL3Jldmlld0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jb25zdCByZXZpZXdGb3JtPShwcm9wcyk9PntcbiAgICBjb25zdCBzdHJlZXRfYWRkcmVzcyA9IHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzBdLmxvbmdfbmFtZSArIHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzFdLmxvbmdfbmFtZVxuICAgIGNvbnN0IGNpdHkgPSBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVsyXS5sb25nX25hbWVcbiAgICBjb25zdCBjb3VudHJ5ID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbNl0ubG9uZ19uYW1lXG4gICAgY29uc3QgcHJvdmluY2UgPSBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVs1XS5sb25nX25hbWVcbiAgICAgXG4gICAgY29uc3Qge25hbWUsIGxhbmRsb3JkX3Jldmlld309cHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEubGFuZGxvcmRfYmlvXG5yZXR1cm4oXG4gIDxkaXY+XG4gICAgPGgzPlN1bW1hcnk8L2gzPlxuICAgIDxociAvPlxuICAgIDxwPjxzcGFuPlN0cmVldCBBZGRyZXNzOjwvc3Bhbj57c3RyZWV0X2FkZHJlc3N9PC9wPlxuICAgIDxwPjxzcGFuPkNpdHk6PC9zcGFuPntjaXR5fTwvcD5cbiAgICA8cD48c3Bhbj5Qcm92aW5jZTo8L3NwYW4+e3Byb3ZpbmNlfTwvcD5cbiAgICA8cD48c3Bhbj5Db3VudHJ5Ojwvc3Bhbj57Y291bnRyeX08L3A+XG4gICAgPHA+PHNwYW4+TmFtZTogPC9zcGFuPntuYW1lfTwvcD5cbiAgICA8cD48c3Bhbj5CaW86PC9zcGFuPntsYW5kbG9yZF9yZXZpZXd9PC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBwIHtcbiAgICAgIHdpZHRoOjM1MHB4O1xuICAgICAgY29sb3I6ICNGRjU5NDE7XG4gICAgfTtcblxuICAgIHAgc3BhbiB7XG4gICAgICBwYWRkaW5nOjJweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHRcbiAgICB9O1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzowO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1mYW1pbHk6IHBvcHBpbiwgc2FuLXNlcmZcbiAgICB9O1xuICAgIGhyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjU5NDE7XG4gICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICBib3JkZXI6IG5vbmVcbiAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbil9XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcz0oc3RhdGUpPT57XG4gIHJldHVybntcbiAgICBkYXRhOiBzdGF0ZS5hcHBcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHJldmlld0Zvcm0pIl19 */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.app
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(reviewForm));

/***/ })

})
//# sourceMappingURL=add-review.js.96feede61a51f425f6ab.hot-update.js.map