webpackHotUpdate("static/development/pages/add-review.js",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/authActions */ "./store/actions/authActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/navigation/toolbar.js";












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {// flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#191923",
      // backgroundColor:"rgba(0,0,0,1)", 
      marginBottom: "10px"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      color: "#646865",

      /** used in place of #474A48 as there is better contrast*/
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
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/add-review",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.links,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Add")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.links,
    color: "inherit",
    onClick: function onClick() {
      return logout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Logout")) : function () {
    logout(); //will run lout function which redirects to login screen

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.links,
      color: "inherit",
      onClick: logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Login");
  };

  var logout = function logout() {
    props.endSession();
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/auth");
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2605115013" + " " + (classes.root || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "fixed",
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/");
    },
    variant: "h5",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2605115013" + " " + "logoHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "RoomR", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: "#FF5941"
    },
    className: "jsx-2605115013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "8"), "r")), userAuthenticated)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2605115013",
    __self: this
  }, ".logoHeader.jsx-2605115013:hover{opacity:0.7;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvc3JjL25hdmlnYXRpb24vdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWtCLEFBR3lCLFlBRWYsZUFBQyIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3NyYy9uYXZpZ2F0aW9uL3Rvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7bG9nb3V0VXNlcn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbnNcIlxuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIC8vIGZsZXhHcm93OiAxLFxuICB9LFxuICBhcHBCYXI6e1xuICAgIGJhY2tncm91bmRDb2xvcjpcIiMxOTE5MjNcIixcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsMCwwLDEpXCIsIFxuICAgIG1hcmdpbkJvdHRvbTpcIjEwcHhcIlxuICB9LFxuICBtZW51QnV0dG9uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgY29sb3I6XCIjNjQ2ODY1XCIsICAvKiogdXNlZCBpbiBwbGFjZSBvZiAjNDc0QTQ4IGFzIHRoZXJlIGlzIGJldHRlciBjb250cmFzdCovXG4gICAgZm9udEZhbWlseTogJ0xleGVuZCBUZXJhLCBzYW5zLXNlcmlmJyxcbiAgfSxcbiAgbGlua3M6e1xuICAgIGZvbnRGYW1pbHk6ICdQb3BwaW5zLCBzYW5zLXNlcmlmJyxcbiAgICBmb250V2VpZ2h0OjkwMCxcbiAgICBjb2xvcjogXCIjZmZmZmZhXCJcbiAgfVxufSkpO1xuXG5jb25zdCB0b29sYmFyPShwcm9wcyk9PntcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB1c2VyQXV0aGVudGljYXRlZCA9IHByb3BzLnVzZXJUb2tlbiA/IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30gPkhvbWU8L0J1dHRvbj48L0xpbms+IFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkZC1yZXZpZXdcIj48QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30gY29sb3I9XCJpbmhlcml0XCI+QWRkPC9CdXR0b24+PC9MaW5rPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17KCk9PmxvZ291dCgpfT5Mb2dvdXQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApOiAoKT0+eyBsb2dvdXQoKSAvL3dpbGwgcnVuIGxvdXQgZnVuY3Rpb24gd2hpY2ggcmVkaXJlY3RzIHRvIGxvZ2luIHNjcmVlblxuICAgICAgICAgICAgICAgIHJldHVybiA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17bG9nb3V0fT5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cblxuICBjb25zdCBsb2dvdXQ9KCk9PntcbiAgICBwcm9wcy5lbmRTZXNzaW9uKClcbiAgICBSb3V0ZXIucHVzaChcIi9hdXRoXCIpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxuICAgICAgICAgICAgey8qIDxNZW51SWNvbiAvPiAqL31cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBvbkNsaWNrPXsoKT0+Um91dGVyLnB1c2goXCIvXCIpfSB2YXJpYW50PVwiaDVcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvSGVhZGVyXCI+Um9vbVI8c3BhbiBzdHlsZT17e2NvbG9yOlwiI0ZGNTk0MVwifX0gPjg8L3NwYW4+cjwvc3Bhbj5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICB7dXNlckF1dGhlbnRpY2F0ZWR9XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5sb2dvSGVhZGVyOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlUHJvcHM9KHN0YXRlKT0+e1xuICByZXR1cm57XG4gICAgdXNlclRva2VuOiBzdGF0ZS5hdXRoLnVzZXJUb2tlblxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcz0oZGlzcGF0Y2gpPT57XG4gIHJldHVybntcbiAgICBlbmRTZXNzaW9uOiAoKT0+ZGlzcGF0Y2gobG9nb3V0VXNlcigpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVQcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh0b29sYmFyKSJdfQ== */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/src/navigation/toolbar.js */"));
};

var mapStateProps = function mapStateProps(state) {
  return {
    userToken: state.auth.userToken
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    endSession: function endSession() {
      return dispatch(Object(_store_actions_authActions__WEBPACK_IMPORTED_MODULE_10__["logoutUser"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateProps, mapDispatchToProps)(toolbar));

/***/ })

})
//# sourceMappingURL=add-review.js.7010c8f72d83d0adf9bd.hot-update.js.map