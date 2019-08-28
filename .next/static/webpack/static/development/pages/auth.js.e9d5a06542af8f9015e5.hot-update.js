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
      registrationFormSelected: false,
      //boolean to toggle betweeen the login and registration fo
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
          lineNumber: 44
        },
        __self: this
      }, "Login") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      });
      var form = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.onSubmitHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), button, this.props.error ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.errorStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, " ", this.props.error, " ") : null));
      if (this.state.registrationFormSelected) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.containerStyle,
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        style: {
          textAlign: "center",
          color: "#474A48",
          fontFamily: 'Lexend Tera, sans-serif',
          fontWeight: "bold"
        },
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "RoomR", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: "#FF5941"
        },
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "8"), "r"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.header,
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Gamble with the lottery not your accomodation")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.mainAreaStyle,
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, form), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.paragraphStyle,
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Dont Have an account? ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick() {
          return alert("clicked");
        },
        className: "jsx-2582177505" + " " + "createAccountButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Create Account")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2582177505",
        __self: this
      }, ".createAccountButton.jsx-2582177505{font-weight:bold;font-size:20;color:#FF5941;-webkit-text-decoration:underline;text-decoration:underline;}.createAccountButton.jsx-2582177505:hover{opacity:0.7;cursor:default;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRXNCLEFBRzhCLEFBTUwsWUFFZixLQVBlLFVBT2QsR0FOZSxjQUVoQiw0REFBQyIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3BhZ2VzL2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0J1dHRvbiwgU3Bpbm5lcn0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzXCJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbnNcIlxuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY2xhc3MgQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZDpmYWxzZSwgLy9ib29sZWFuIHRvIHRvZ2dsZSBiZXR3ZWVlbiB0aGUgbG9naW4gYW5kIHJlZ2lzdHJhdGlvbiBmb1xuICAgIGVtYWlsOlwiXCIsXG4gICAgcGFzc3dvcmQ6XCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZSwgLy91cGRhdGVkIGJ5IGNvbXBvbmVudERpZFVwZGF0ZVxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIC8vcmVzZXRpbmcgZXJyb3JzIG9uIGluaXRpYWwgcGFnZSBtb3VudFxuICAgIHRoaXMucHJvcHMuY2xlYXJFcnJvcigpXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcbiAgICBpZih0aGlzLnByb3BzLnVzZXJUb2tlbiAhPT0gcHJldlByb3BzLnVzZXJUb2tlbil7XG4gICAgICB0aGlzLnByb3BzLnVzZXJUb2tlbiA/IFJvdXRlci5wdXNoKFwiL1wiKSA6IG51bGxcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcbiAgICB9XG4gICAgaWYodGhpcy5wcm9wcy5lcnJvciAhPT0gcHJldlByb3BzLmVycm9yKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcbiAgICB9XG4gIH1cbiAgb25TdWJtaXRIYW5kbGVyPShldmVudCk9PntcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZH0gPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5wcm9wcy5sb2dpbihlbWFpbCxwYXNzd29yZClcbiAgfVxuXG4gIG9uQ2hhbmdlPShldmVudCk9PntcbiAgICBpZihldmVudC50YXJnZXQubmFtZSA9PT0gXCJwYXNzd29yZFwiICYmIHRoaXMucHJvcHMuZXJyb3Ipe1xuICAgICAgdGhpcy5wcm9wcy5jbGVhckVycm9yKClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gIXRoaXMuc3RhdGUubG9hZGluZyA/PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU3VibWl0SGFuZGxlcn0+TG9naW48L0J1dHRvbj46IDxTcGlubmVyIC8+XG4gICAgbGV0IGZvcm0gPSAoPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0SGFuZGxlcn0+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IFxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfSBwbGFjZWhvbGRlcj1cImVtYWlsQGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogZGlzcGxheWluZyBidXR0b24gb3Igc3Bpbm5lciAqL31cbiAgICAgICAgICAgIHtidXR0b259XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZXJyb3IgPyA8cCBzdHlsZT17c3R5bGVzLmVycm9yU3R5bGV9PiB7dGhpcy5wcm9wcy5lcnJvcn0gPC9wPjogbnVsbCB9XG4gICAgICAgICAgPC9mb3JtPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxuXG4gICAgaWYodGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLCBjb2xvcjpcIiM0NzRBNDhcIixmb250RmFtaWx5OiAnTGV4ZW5kIFRlcmEsIHNhbnMtc2VyaWYnLCBmb250V2VpZ2h0OlwiYm9sZFwifX0+Um9vbVI8c3BhbiBzdHlsZT17e2NvbG9yOlwiI0ZGNTk0MVwifX0+ODwvc3Bhbj5yPC9oMT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5HYW1ibGUgd2l0aCB0aGUgbG90dGVyeSBub3QgeW91ciBhY2NvbW9kYXRpb248L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYWluQXJlYVN0eWxlfT5cbiAgICAgICAgICB7Zm9ybX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBoU3R5bGV9PlxuICAgICAgICAgICAgRG9udCBIYXZlIGFuIGFjY291bnQ/IDxzcGFuIGNsYXNzTmFtZT1cImNyZWF0ZUFjY291bnRCdXR0b25cIiBvbkNsaWNrPXsoKT0+YWxlcnQoXCJjbGlja2VkXCIpfT5DcmVhdGUgQWNjb3VudDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jcmVhdGVBY2NvdW50QnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOjIwO1xuICAgICAgICAgICAgY29sb3I6I0ZGNTk0MTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXG4gICAgICAgICAgfVxuICAgICAgICAgIC5jcmVhdGVBY2NvdW50QnV0dG9uIDpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHRcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyU3R5bGU6IHtcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZmZmZhXCIsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIG1haW5BcmVhU3R5bGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE5MTkyM1wiLFxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCIjY2NjXCIsICAgIFxuICAgIC8vIGhlaWdodDogXCIyNTBweFwiLFxuICAgIHdpZHRoOiBcIjMwMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIHBhZGRpbmc6XCIyMHB4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIlxuICB9LFxuICBpbnB1dFN0eWxlOiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIC8vIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgIGhlaWdodDpcIjM2cHhcIixcbiAgICB3aWR0aDogXCIyNjZweFwiLFxuICAgIC8vIHBhZGRpbmdMZWZ0OlwiMTBweFwiLFxuICAgIG1hcmdpbjogXCIxNXB4IGF1dG9cIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCJcbiAgfSxcbiAgaGVhZGVyOntcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcbiAgICBjb2xvcjpcIiMxOTE5MjNcIixcbiAgICBmb250V2VpZ2h0OiAnYm9sZGVyJyxcbiAgICBmb250U2l6ZToyMixcbiAgICBmb250RmFtaWx5OiAnUG9wcGlucywgc2Fucy1zZXJpZicsIFxuICB9LFxuICBlcnJvclN0eWxlOntcbiAgICBtYXJnaW5Cb3R0b206XCIyMHB4XCIsXG4gICAgY29sb3I6XCIjZjUwXCIsXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6MTYsXG4gICAgZm9udFdlaWdodDpcImJvbGRcIlxuICB9LFxuICBwYXJhZ3JhcGhTdHlsZTp7XG4gICAgdGV4dEFsaWduOlwibGVmdFwiLFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIGZvbnRTaXplOjE2LFxuICAgIGZvbnRGYW1pbHk6XCJQb3BwaW5zLCBzYW5zIHNlcmlmXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOlwiI2ZmZlwiXG4gIH1cbn07XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM9KHN0YXRlKT0+e1xuICByZXR1cm4ge1xuICAgIHVzZXJUb2tlbjogc3RhdGUuYXV0aC51c2VyVG9rZW4sXG4gICAgZXJyb3I6IHN0YXRlLmF1dGguZXJyb3IsXG4gICAgbG9hZGluZzogc3RhdGUuYXV0aC5sb2FkaW5nXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxhY3Rpb25zKShBdXRoKVxuIl19 */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js */"));
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
    // paddingLeft:"10px",
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
//# sourceMappingURL=auth.js.e9d5a06542af8f9015e5.hot-update.js.map