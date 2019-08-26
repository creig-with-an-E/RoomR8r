webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/toolbar */ "./src/navigation/toolbar.js");
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/components/layout.js";



var Layout = function Layout(props) {
  // receives modal handle from index.js 
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navigation_toolbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showModalHandle: props.showModalHandle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), props.children);
};

var styles = {
  containerStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    // backgroundColor: "#fffffa"
    backgroundImage: "url('static/imgs/houses.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
};


/***/ })

})
//# sourceMappingURL=login.js.11d6fb4bcfeae1658928.hot-update.js.map