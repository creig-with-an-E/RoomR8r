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
    className: "jsx-736813285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-736813285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Summary"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-736813285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-736813285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-736813285" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Street Address:"), street_address), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-736813285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-736813285" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, ">City:"), city), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-736813285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-736813285" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, ">Province:"), province), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-736813285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-736813285" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, ">Country:"), country), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-736813285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-736813285" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, ">Name: "), name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-736813285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-736813285" + " " + "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, ">Bio:"), landlord_review), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "736813285",
    __self: this
  }, "p.jsx-736813285{color:#FF5941;}.label.jsx-736813285{color:#fff;width:200px;margin-left:10px;}h3.jsx-736813285{margin:0;padding:0;text-align:center;font-family:poppin,san-serf;}hr.jsx-736813285{background-color:#FF5941;padding:1px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL3N0ZXBwZXIvc3RlcHBlcl9jb21wb25lbnRzL3Jldmlld0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUdxQixBQUlILEFBTUYsQUFNZ0IsU0FMaEIsRUFORyxHQUpkLEtBV29CLElBTHJCLEVBVWUsWUFIZixBQUtBLEdBWkMsU0FZQSxnQkFMQSIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3NyYy9zdGVwcGVyL3N0ZXBwZXJfY29tcG9uZW50cy9yZXZpZXdGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY29uc3QgcmV2aWV3Rm9ybT0ocHJvcHMpPT57XG4gICAgY29uc3Qgc3RyZWV0X2FkZHJlc3MgPSBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVswXS5sb25nX25hbWUgKyBwcm9wcy5kYXRhLnN0ZXBwZXJGb3JtRGF0YS5hZGRyZXNzRGF0YVsxXS5sb25nX25hbWVcbiAgICBjb25zdCBjaXR5ID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbMl0ubG9uZ19uYW1lXG4gICAgY29uc3QgY291bnRyeSA9IHByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmFkZHJlc3NEYXRhWzZdLmxvbmdfbmFtZVxuICAgIGNvbnN0IHByb3ZpbmNlID0gcHJvcHMuZGF0YS5zdGVwcGVyRm9ybURhdGEuYWRkcmVzc0RhdGFbNV0ubG9uZ19uYW1lXG4gICAgIFxuICAgIGNvbnN0IHtuYW1lLCBsYW5kbG9yZF9yZXZpZXd9PXByb3BzLmRhdGEuc3RlcHBlckZvcm1EYXRhLmxhbmRsb3JkX2Jpb1xucmV0dXJuKFxuICA8ZGl2PlxuICAgIDxoMz5TdW1tYXJ5PC9oMz5cbiAgICA8aHIgLz5cbiAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlN0cmVldCBBZGRyZXNzOjwvc3Bhbj57c3RyZWV0X2FkZHJlc3N9PC9wPlxuICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+PkNpdHk6PC9zcGFuPntjaXR5fTwvcD5cbiAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPj5Qcm92aW5jZTo8L3NwYW4+e3Byb3ZpbmNlfTwvcD5cbiAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPj5Db3VudHJ5Ojwvc3Bhbj57Y291bnRyeX08L3A+XG4gICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj4+TmFtZTogPC9zcGFuPntuYW1lfTwvcD5cbiAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPj5CaW86PC9zcGFuPntsYW5kbG9yZF9yZXZpZXd9PC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjRkY1OTQxO1xuICAgIH07XG5cbiAgICAubGFiZWwge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB3aWR0aDogMjAwcHg7IFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHhcbiAgICB9O1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzowO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1mYW1pbHk6IHBvcHBpbiwgc2FuLXNlcmZcbiAgICB9O1xuICAgIGhyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjU5NDE7XG4gICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICBib3JkZXI6IG5vbmVcbiAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbil9XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcz0oc3RhdGUpPT57XG4gIHJldHVybntcbiAgICBkYXRhOiBzdGF0ZS5hcHBcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHJldmlld0Zvcm0pIl19 */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.app
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(reviewForm));

/***/ })

})
//# sourceMappingURL=add-review.js.ef23d22139aafaf4e988.hot-update.js.map