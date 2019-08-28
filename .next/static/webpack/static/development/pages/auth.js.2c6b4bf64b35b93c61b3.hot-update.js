webpackHotUpdate("static/development/pages/auth.js",{

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components */ "./src/components/index.js");
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/actions/authActions */ "./store/actions/authActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js";







var Auth =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Auth, _Component);

  function Auth() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Auth);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Auth)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      email: "",
      password: "",
      loading: false //updated by componentDidUpdate

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmitHandler", function (event) {
      event.preventDefault();

      _this.setState({
        loading: true
      });

      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;

      _this.props.login(email, password);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (event) {
      if (event.target.name === "password" && _this.props.error) {
        _this.props.clearError();
      }

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, event.target.name, event.target.value));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Auth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //reseting errors on initial page mount
      this.props.clearError();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.userToken !== prevProps.userToken) {
        this.props.userToken ? next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/") : null;
        this.setState({
          loading: false
        });
      }

      if (this.props.error !== prevProps.error) {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var button = !this.state.loading ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.onSubmitHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Login") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.containerStyle,
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        style: {
          textAlign: "center",
          color: "#474A48",
          fontFamily: 'Lexend Tera, sans-serif',
          fontWeight: "bold"
        },
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "RoomR", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: "#FF5941"
        },
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "8"), "r"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.header,
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Gamble with the lottery not your accomodation")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.mainAreaStyle,
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.onSubmitHandler,
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        required: true,
        value: this.state.email,
        onChange: this.onChange,
        style: styles.inputStyle,
        placeholder: "email@gmail.com",
        type: "email",
        name: "email",
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        required: true,
        value: this.state.password,
        onChange: this.onChange,
        style: styles.inputStyle,
        placeholder: "password",
        type: "password",
        name: "password",
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), button, this.props.error ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.errorStyle,
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, " ", this.props.error, " ") : null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3850469404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Dont Have an account? ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick() {
          return alert("clicked");
        },
        className: "jsx-3850469404" + " " + "createAccountButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Create Account")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3850469404",
        __self: this
      }, "p.jsx-3850469404{color:\"blue\", font-weight:\"bold\";color:\"#FF5941\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRXNCLEFBSStCLGlDQUNyQixnQkFBQyIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3BhZ2VzL2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0J1dHRvbiwgU3Bpbm5lcn0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzXCJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbnNcIlxuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY2xhc3MgQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGVtYWlsOlwiXCIsXG4gICAgcGFzc3dvcmQ6XCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZSwgLy91cGRhdGVkIGJ5IGNvbXBvbmVudERpZFVwZGF0ZVxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIC8vcmVzZXRpbmcgZXJyb3JzIG9uIGluaXRpYWwgcGFnZSBtb3VudFxuICAgIHRoaXMucHJvcHMuY2xlYXJFcnJvcigpXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcbiAgICBpZih0aGlzLnByb3BzLnVzZXJUb2tlbiAhPT0gcHJldlByb3BzLnVzZXJUb2tlbil7XG4gICAgICB0aGlzLnByb3BzLnVzZXJUb2tlbiA/IFJvdXRlci5wdXNoKFwiL1wiKSA6IG51bGxcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcbiAgICB9XG4gICAgaWYodGhpcy5wcm9wcy5lcnJvciAhPT0gcHJldlByb3BzLmVycm9yKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcbiAgICB9XG4gIH1cbiAgb25TdWJtaXRIYW5kbGVyPShldmVudCk9PntcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZH0gPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5wcm9wcy5sb2dpbihlbWFpbCxwYXNzd29yZClcbiAgfVxuXG4gIG9uQ2hhbmdlPShldmVudCk9PntcbiAgICBpZihldmVudC50YXJnZXQubmFtZSA9PT0gXCJwYXNzd29yZFwiICYmIHRoaXMucHJvcHMuZXJyb3Ipe1xuICAgICAgdGhpcy5wcm9wcy5jbGVhckVycm9yKClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gIXRoaXMuc3RhdGUubG9hZGluZyA/PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU3VibWl0SGFuZGxlcn0+TG9naW48L0J1dHRvbj46IDxTcGlubmVyIC8+XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLCBjb2xvcjpcIiM0NzRBNDhcIixmb250RmFtaWx5OiAnTGV4ZW5kIFRlcmEsIHNhbnMtc2VyaWYnLCBmb250V2VpZ2h0OlwiYm9sZFwifX0+Um9vbVI8c3BhbiBzdHlsZT17e2NvbG9yOlwiI0ZGNTk0MVwifX0+ODwvc3Bhbj5yPC9oMT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5HYW1ibGUgd2l0aCB0aGUgbG90dGVyeSBub3QgeW91ciBhY2NvbW9kYXRpb248L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYWluQXJlYVN0eWxlfT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBcbiAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRTdHlsZX0gcGxhY2Vob2xkZXI9XCJlbWFpbEBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBcbiAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIGRpc3BsYXlpbmcgYnV0dG9uIG9yIHNwaW5uZXIgKi99XG4gICAgICAgICAgICB7YnV0dG9ufVxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmVycm9yID8gPHAgc3R5bGU9e3N0eWxlcy5lcnJvclN0eWxlfT4ge3RoaXMucHJvcHMuZXJyb3J9IDwvcD46IG51bGwgfVxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgRG9udCBIYXZlIGFuIGFjY291bnQ/IDxzcGFuIGNsYXNzTmFtZT1cImNyZWF0ZUFjY291bnRCdXR0b25cIiBvbkNsaWNrPXsoKT0+YWxlcnQoXCJjbGlja2VkXCIpfT5DcmVhdGUgQWNjb3VudDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHB7XG4gICAgICAgICAgICBjb2xvcjpcImJsdWVcIixcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OlwiYm9sZFwiOyBjb2xvcjpcIiNGRjU5NDFcIlxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXJTdHlsZToge1xuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmZmZmFcIixcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbWFpbkFyZWFTdHlsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTkxOTIzXCIsXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiBcIiNjY2NcIiwgICAgXG4gICAgLy8gaGVpZ2h0OiBcIjI1MHB4XCIsXG4gICAgd2lkdGg6IFwiMzAwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgcGFkZGluZzpcIjIwcHhcIixcbiAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiXG4gIH0sXG4gIGlucHV0U3R5bGU6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgLy8gcGFkZGluZzogXCIxMHB4XCIsXG4gICAgaGVpZ2h0OlwiMzZweFwiLFxuICAgIHdpZHRoOiBcIjI2NnB4XCIsXG4gICAgbWFyZ2luOiBcIjE1cHggYXV0b1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIlxuICB9LFxuICBoZWFkZXI6e1xuICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxuICAgIGNvbG9yOlwiIzE5MTkyM1wiLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxuICAgIGZvbnRTaXplOjIyLFxuICAgIGZvbnRGYW1pbHk6ICdQb3BwaW5zLCBzYW5zLXNlcmlmJywgXG4gIH0sXG4gIGVycm9yU3R5bGU6e1xuICAgIG1hcmdpbkJvdHRvbTpcIjIwcHhcIixcbiAgICBjb2xvcjpcIiNmNTBcIixcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcbiAgICBmb250U2l6ZToxNixcbiAgICBmb250V2VpZ2h0OlwiYm9sZFwiXG4gIH0sXG4gIHBhcmFncmFwaFN0eWxlOntcbiAgICB0ZXh0QWxpZ246XCJsZWZ0XCIsXG4gICAgcGFkZGluZzogMjAsXG4gICAgZm9udFNpemU6MTYsXG4gICAgZm9udEZhbWlseTpcIlBvcHBpbnMsIHNhbnMgc2VyaWZcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZmXCJcbiAgfVxufTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcz0oc3RhdGUpPT57XG4gIHJldHVybiB7XG4gICAgdXNlclRva2VuOiBzdGF0ZS5hdXRoLnVzZXJUb2tlbixcbiAgICBlcnJvcjogc3RhdGUuYXV0aC5lcnJvcixcbiAgICBsb2FkaW5nOiBzdGF0ZS5hdXRoLmxvYWRpbmdcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLGFjdGlvbnMpKEF1dGgpXG4iXX0= */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js */"));
    }
  }]);

  return Auth;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var styles = {
  containerStyle: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffffa",
    flexDirection: 'column'
  },
  mainAreaStyle: {
    backgroundColor: "#191923",
    // backgroundColor: "#ccc",    
    // height: "250px",
    width: "300px",
    borderRadius: "5px",
    padding: "20px",
    justifyContent: "center"
  },
  inputStyle: {
    display: "block",
    // padding: "10px",
    height: "36px",
    width: "266px",
    margin: "15px auto",
    borderRadius: "5px"
  },
  header: {
    textAlign: "center",
    color: "#191923",
    fontWeight: 'bolder',
    fontSize: 22,
    fontFamily: 'Poppins, sans-serif'
  },
  errorStyle: {
    marginBottom: "20px",
    color: "#f50",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
  paragraphStyle: {
    textAlign: "left",
    padding: 20,
    fontSize: 16,
    fontFamily: "Poppins, sans serif",
    backgroundColor: "#fff"
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userToken: state.auth.userToken,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, _store_actions_authActions__WEBPACK_IMPORTED_MODULE_11__)(Auth));

/***/ })

})
//# sourceMappingURL=auth.js.2c6b4bf64b35b93c61b3.hot-update.js.map