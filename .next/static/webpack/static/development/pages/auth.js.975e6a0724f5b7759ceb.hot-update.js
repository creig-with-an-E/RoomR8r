webpackHotUpdate("static/development/pages/auth.js",{

/***/ "./src/navigation/toolbar.js":
/*!***********************************!*\
  !*** ./src/navigation/toolbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/authActions */ "./store/actions/authActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/navigation/toolbar.js";













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {// flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      color: "#474A48",
      fontFamily: 'Lexend Tera, sans-serif'
    },
    links: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 900,
      color: "#fffffa"
    }
  };
});

var toolbar = function toolbar(props) {
  var classes = useStyles();
  var userAuthenticated = props.userToken ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: props.showModalHandle,
    className: classes.links,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Add"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.links,
    color: "inherit",
    onClick: logout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Logout")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.links,
    color: "inherit",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/auth");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Login");

  var logout = function logout() {
    // Cookie.remove("userToken")
    props.endSession();
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/auth");
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2605115013" + " " + (classes.root || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "fixed",
    style: {
      backgroundColor: "#191923",
      marginBottom: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/");
    },
    variant: "h5",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2605115013" + " " + "logoHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "RoomR", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: "#FF5941"
    },
    className: "jsx-2605115013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "8"), "r")), userAuthenticated)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2605115013",
    __self: this
  }, ".logoHeader.jsx-2605115013:hover{opacity:0.7;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL25hdmlnYXRpb24vdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCLEFBR3lCLFlBRWYsZUFBQyIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3NyYy9uYXZpZ2F0aW9uL3Rvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIlxuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge2xvZ291dFVzZXJ9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhBY3Rpb25zXCJcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAvLyBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGNvbG9yOlwiIzQ3NEE0OFwiLFxuICAgIGZvbnRGYW1pbHk6ICdMZXhlbmQgVGVyYSwgc2Fucy1zZXJpZicsXG4gIH0sXG4gIGxpbmtzOntcbiAgICBmb250RmFtaWx5OiAnUG9wcGlucywgc2Fucy1zZXJpZicsXG4gICAgZm9udFdlaWdodDo5MDAsXG4gICAgY29sb3I6IFwiI2ZmZmZmYVwiXG4gIH1cbn0pKTtcblxuY29uc3QgdG9vbGJhcj0ocHJvcHMpPT57XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgdXNlckF1dGhlbnRpY2F0ZWQgPSBwcm9wcy51c2VyVG9rZW4gPyAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9ID5Ib21lPC9CdXR0b24+PC9MaW5rPiBcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5zaG93TW9kYWxIYW5kbGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30gY29sb3I9XCJpbmhlcml0XCI+QWRkPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfSBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICk6XG4gICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfSBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXsoKT0+Um91dGVyLnB1c2goXCIvYXV0aFwiKX0+TG9naW48L0J1dHRvbj5cblxuICBjb25zdCBsb2dvdXQ9KCk9PntcbiAgICAvLyBDb29raWUucmVtb3ZlKFwidXNlclRva2VuXCIpXG4gICAgcHJvcHMuZW5kU2Vzc2lvbigpXG4gICAgUm91dGVyLnB1c2goXCIvYXV0aFwiKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzE5MTkyM1wiLCBtYXJnaW5Cb3R0b206XCIxMHB4XCJ9fT5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCI+XG4gICAgICAgICAgICB7LyogPE1lbnVJY29uIC8+ICovfVxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IG9uQ2xpY2s9eygpPT5Sb3V0ZXIucHVzaChcIi9cIil9IHZhcmlhbnQ9XCJoNVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ29IZWFkZXJcIj5Sb29tUjxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjRkY1OTQxXCJ9fSA+ODwvc3Bhbj5yPC9zcGFuPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIHt1c2VyQXV0aGVudGljYXRlZH1cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmxvZ29IZWFkZXI6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVQcm9wcz0oc3RhdGUpPT57XG4gIHJldHVybntcbiAgICB1c2VyVG9rZW46IHN0YXRlLmF1dGgudXNlclRva2VuXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzPShkaXNwYXRjaCk9PntcbiAgcmV0dXJue1xuICAgIGVuZFNlc3Npb246ICgpPT5hbGVydChcImNsaWNrZWRcIilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykodG9vbGJhcikiXX0= */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/src/navigation/toolbar.js */"));
};

var mapStateProps = function mapStateProps(state) {
  return {
    userToken: state.auth.userToken
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    endSession: function endSession() {
      return alert("clicked");
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateProps, mapDispatchToProps)(toolbar));

/***/ })

})
//# sourceMappingURL=auth.js.975e6a0724f5b7759ceb.hot-update.js.map