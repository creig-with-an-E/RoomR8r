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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







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
      password_confirm: "",
      loading: false //updated by componentDidUpdate

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmitHandler", function (event) {
      // handles both form submissions passing data to either login or signup action
      event.preventDefault();

      _this.setState({
        loading: true
      });

      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;

      if (!_this.state.registrationFormSelected) {
        _this.props.login(email, password);
      } else if (_this.state.registrationFormSelected) {
        _this.props.signup(email, password);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (event) {
      if (event.target.name === "password" && _this.props.error) {
        _this.props.clearError();
      }

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, event.target.name, event.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleAuthForms", function () {
      _this.setState({
        registrationFormSelected: !_this.state.registrationFormSelected
      });
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
      // checks that loading has completed at state level
      if (this.props.userToken !== prevProps.userToken) {
        this.props.userToken ? next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/") : null;
        this.setState({
          loading: false
        });
      }

      if (this.props.error !== prevProps.error) {
        this.setState({
          loading: false,
          password: ""
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
          lineNumber: 56
        },
        __self: this
      }, !this.state.registrationFormSelected ? "Login" : "Create Account") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      });
      var registrationFormSelected = this.state.registrationFormSelected;
      var form = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.onSubmitHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
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
          lineNumber: 64
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
          lineNumber: 67
        },
        __self: this
      }), this.state.registrationFormSelected ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        required: true,
        value: this.state.password_confirm,
        onChange: this.onChange,
        style: styles.inputStyle,
        placeholder: "confirm password",
        type: "password",
        name: "password_confirm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        style: styles.rememberLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Remember me", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        style: styles.rememberCheckbox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), button, this.props.error ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.errorStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, " ", this.props.error, " ") : null));
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.containerStyle,
        className: "jsx-1511363587",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        className: "jsx-1511363587",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "RoomR8r \u2022 ", !this.state.registrationFormSelected ? "Login" : "Signup")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1511363587",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        style: styles.logoStyle,
        className: "jsx-1511363587",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "RoomR", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: "#FF5941"
        },
        className: "jsx-1511363587",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "8"), "r"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.header,
        className: "jsx-1511363587",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Gamble with the lottery not your accomodation")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.mainAreaStyle,
        className: "jsx-1511363587",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, form), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.paragraphStyle,
        className: "jsx-1511363587",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, !registrationFormSelected ? "Dont Have an account?" : "Returning user", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: styles.createAccountButton,
        onClick: this.toggleAuthForms,
        className: "jsx-1511363587" + " " + "createAccountButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, !registrationFormSelected ? "Create Account" : "login")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1511363587",
        __self: this
      }, ".createAccountButton.jsx-1511363587:hover{opacity:0.7;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5R3NCLEFBR3lCLFlBRWYsZUFBQyIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3BhZ2VzL2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0J1dHRvbiwgU3Bpbm5lcn0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzXCJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbnNcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jbGFzcyBBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkOmZhbHNlLCAvL2Jvb2xlYW4gdG8gdG9nZ2xlIGJldHdlZWVuIHRoZSBsb2dpbiBhbmQgcmVnaXN0cmF0aW9uIGZvXG4gICAgZW1haWw6XCJcIixcbiAgICBwYXNzd29yZDpcIlwiLFxuICAgIHBhc3N3b3JkX2NvbmZpcm06XCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZSwgLy91cGRhdGVkIGJ5IGNvbXBvbmVudERpZFVwZGF0ZVxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIC8vcmVzZXRpbmcgZXJyb3JzIG9uIGluaXRpYWwgcGFnZSBtb3VudFxuICAgIHRoaXMucHJvcHMuY2xlYXJFcnJvcigpXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcbiAgICAvLyBjaGVja3MgdGhhdCBsb2FkaW5nIGhhcyBjb21wbGV0ZWQgYXQgc3RhdGUgbGV2ZWxcbiAgICBpZih0aGlzLnByb3BzLnVzZXJUb2tlbiAhPT0gcHJldlByb3BzLnVzZXJUb2tlbil7XG4gICAgICB0aGlzLnByb3BzLnVzZXJUb2tlbiA/IFJvdXRlci5wdXNoKFwiL1wiKSA6IG51bGxcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcbiAgICB9XG4gICAgaWYodGhpcy5wcm9wcy5lcnJvciAhPT0gcHJldlByb3BzLmVycm9yKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlLCBwYXNzd29yZDpcIlwifSlcbiAgICB9XG4gIH1cbiAgb25TdWJtaXRIYW5kbGVyPShldmVudCk9PntcbiAgICAvLyBoYW5kbGVzIGJvdGggZm9ybSBzdWJtaXNzaW9ucyBwYXNzaW5nIGRhdGEgdG8gZWl0aGVyIGxvZ2luIG9yIHNpZ251cCBhY3Rpb25cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZH0gPSB0aGlzLnN0YXRlXG4gICAgaWYoIXRoaXMuc3RhdGUucmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkKXtcbiAgICAgIHRoaXMucHJvcHMubG9naW4oZW1haWwscGFzc3dvcmQpXG4gICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQpe1xuICAgICAgdGhpcy5wcm9wcy5zaWdudXAoZW1haWwscGFzc3dvcmQpXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2U9KGV2ZW50KT0+e1xuICAgIGlmKGV2ZW50LnRhcmdldC5uYW1lID09PSBcInBhc3N3b3JkXCIgJiYgdGhpcy5wcm9wcy5lcnJvcil7XG4gICAgICB0aGlzLnByb3BzLmNsZWFyRXJyb3IoKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTpldmVudC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgdG9nZ2xlQXV0aEZvcm1zPSgpPT57XG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkOiF0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9ICF0aGlzLnN0YXRlLmxvYWRpbmcgPyg8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TdWJtaXRIYW5kbGVyfT5cbiAgICAgIHshdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQ/IFwiTG9naW5cIiA6XCJDcmVhdGUgQWNjb3VudFwifTwvQnV0dG9uPlxuICAgICAgKTogPFNwaW5uZXIgLz5cbiAgICBjb25zdCByZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZFxuXG4gICAgbGV0IGZvcm0gPSAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0SGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfSBwbGFjZWhvbGRlcj1cImVtYWlsQGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkPyAgXG4gICAgICAgICAgICAgICAgICAoIDxpbnB1dCByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZF9jb25maXJtfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb25maXJtIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRfY29uZmlybVwiIC8+ICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgIHsvKiBkaXNwbGF5aW5nIGJ1dHRvbiBvciBzcGlubmVyICovfVxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMucmVtZW1iZXJMYWJlbH0+UmVtZW1iZXIgbWUgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBzdHlsZT17c3R5bGVzLnJlbWVtYmVyQ2hlY2tib3h9Lz5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICB7YnV0dG9ufVxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmVycm9yID8gPHAgc3R5bGU9e3N0eWxlcy5lcnJvclN0eWxlfT4ge3RoaXMucHJvcHMuZXJyb3J9IDwvcD46IG51bGwgfVxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+Um9vbVI4ciDigKIgeyF0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZCA/IFwiTG9naW5cIiA6IFwiU2lnbnVwXCJ9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3N0eWxlcy5sb2dvU3R5bGV9PlJvb21SPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiNGRjU5NDFcIn19Pjg8L3NwYW4+cjwvaDE+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmhlYWRlcn0+R2FtYmxlIHdpdGggdGhlIGxvdHRlcnkgbm90IHlvdXIgYWNjb21vZGF0aW9uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubWFpbkFyZWFTdHlsZX0+XG4gICAgICAgICAge2Zvcm19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaFN0eWxlfT5cbiAgICAgICAgICAgIHshcmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkP1wiRG9udCBIYXZlIGFuIGFjY291bnQ/XCI6XCJSZXR1cm5pbmcgdXNlclwifVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3JlYXRlQWNjb3VudEJ1dHRvblwiIHN0eWxlPXtzdHlsZXMuY3JlYXRlQWNjb3VudEJ1dHRvbn0gXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQXV0aEZvcm1zfT5cbiAgICAgICAgICAgICAgICB7IXJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZD9cIkNyZWF0ZSBBY2NvdW50XCI6XCJsb2dpblwifVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNyZWF0ZUFjY291bnRCdXR0b24gOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXJTdHlsZToge1xuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmZmZmFcIixcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbWFpbkFyZWFTdHlsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTkxOTIzXCIsXG4gICAgd2lkdGg6IFwiMzAwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgcGFkZGluZzpcIjIwcHhcIixcbiAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiXG4gIH0sXG4gIGxvZ29TdHlsZTp7dGV4dEFsaWduOlwiY2VudGVyXCIsIFxuICAgIGNvbG9yOlwiIzQ3NEE0OFwiLFxuICAgIGZvbnRGYW1pbHk6ICdMZXhlbmQgVGVyYSwgc2Fucy1zZXJpZicsIFxuICAgIGZvbnRXZWlnaHQ6XCJib2xkXCJ9LFxuICBpbnB1dFN0eWxlOiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIC8vIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgIGhlaWdodDpcIjM2cHhcIixcbiAgICB3aWR0aDogXCIyNjZweFwiLFxuICAgIC8vIHBhZGRpbmdMZWZ0OlwiMTBweFwiLFxuICAgIG1hcmdpbjogXCIxNXB4IGF1dG9cIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCJcbiAgfSxcbiAgaGVhZGVyOntcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcbiAgICBjb2xvcjpcIiMxOTE5MjNcIixcbiAgICBmb250V2VpZ2h0OiAnYm9sZGVyJyxcbiAgICBmb250U2l6ZToyMixcbiAgICBmb250RmFtaWx5OiAnUG9wcGlucywgc2Fucy1zZXJpZicsIFxuICB9LFxuICBlcnJvclN0eWxlOntcbiAgICBtYXJnaW5Cb3R0b206XCIyMHB4XCIsXG4gICAgY29sb3I6XCIjZjUwXCIsXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6MTYsXG4gICAgZm9udFdlaWdodDpcImJvbGRcIlxuICB9LFxuICBwYXJhZ3JhcGhTdHlsZTp7XG4gICAgdGV4dEFsaWduOlwibGVmdFwiLFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIGZvbnRTaXplOjE2LFxuICAgIGZvbnRGYW1pbHk6XCJQb3BwaW5zLCBzYW5zIHNlcmlmXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOlwiI2ZmZlwiXG4gIH0sXG4gIGNyZWF0ZUFjY291bnRCdXR0b246e1xuICAgIG1hcmdpbkxlZnQ6XCI1cHhcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBjb2xvcjpcIiNGRjU5NDFcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIlxuICB9LFxuICByZW1lbWJlckxhYmVsOntcbiAgICBwYWRkaW5nOiAxNSxcbiAgICBtYXJnaW46XCIzMHB4IGF1dG9cIixcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcbiAgICBjb2xvcjogXCIjZmZmZmZhXCIsXG4gIH0sXG4gIHJlbWVtYmVyQ2hlY2tib3ggOntcbiAgICBwYWRkaW5nOiAyNVxuICB9XG59O1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzPShzdGF0ZSk9PntcbiAgcmV0dXJuIHtcbiAgICB1c2VyVG9rZW46IHN0YXRlLmF1dGgudXNlclRva2VuLFxuICAgIGVycm9yOiBzdGF0ZS5hdXRoLmVycm9yLFxuICAgIGxvYWRpbmc6IHN0YXRlLmF1dGgubG9hZGluZ1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsYWN0aW9ucykoQXV0aClcbiJdfQ== */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js */"));
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
    width: "300px",
    borderRadius: "5px",
    padding: "20px",
    justifyContent: "center"
  },
  logoStyle: {
    textAlign: "center",
    color: "#474A48",
    fontFamily: 'Lexend Tera, sans-serif',
    fontWeight: "bold"
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
  },
  createAccountButton: {
    marginLeft: "5px",
    fontWeight: "bold",
    color: "#FF5941",
    textDecoration: "underline"
  },
  rememberLabel: {
    padding: 15,
    margin: "30px auto",
    textAlign: "center",
    color: "#fffffa"
  },
  rememberCheckbox: {
    padding: 25
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userToken: state.auth.userToken,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, _store_actions_authActions__WEBPACK_IMPORTED_MODULE_11__)(Auth));

/***/ })

})
//# sourceMappingURL=auth.js.901ae8f47ece4dfa2de7.hot-update.js.map