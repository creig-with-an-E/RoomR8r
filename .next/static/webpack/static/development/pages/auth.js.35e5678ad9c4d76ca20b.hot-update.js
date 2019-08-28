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
          lineNumber: 55
        },
        __self: this
      }, !this.state.registrationFormSelected ? "Login" : "Create Account") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      });
      var registrationFormSelected = this.state.registrationFormSelected;
      var form = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.onSubmitHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
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
          lineNumber: 63
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
          lineNumber: 66
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
          lineNumber: 72
        },
        __self: this
      }) : null, button, this.props.error ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.errorStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, " ", this.props.error, " ") : null));
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.containerStyle,
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        style: styles.logoStyle,
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "RoomR", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: "#FF5941"
        },
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "8"), "r"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.header,
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Gamble with the lottery not your accomodation")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.mainAreaStyle,
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, form), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.paragraphStyle,
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, !registrationFormSelected ? "Dont Have an account?" : "Returning user", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: styles.createAccountButton,
        onClick: this.toggleAuthForms,
        className: "jsx-3721349288" + " " + "createAccountButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, !registrationFormSelected ? "Create Account" : "login")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3721349288",
        __self: this
      }, ".createAccountButton.jsx-3721349288:hover{opacity:0.7;cursor:default;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR3NCLEFBR3lCLFlBRWYsZUFBQyIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3BhZ2VzL2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0J1dHRvbiwgU3Bpbm5lcn0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzXCJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbnNcIlxuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY2xhc3MgQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZDpmYWxzZSwgLy9ib29sZWFuIHRvIHRvZ2dsZSBiZXR3ZWVlbiB0aGUgbG9naW4gYW5kIHJlZ2lzdHJhdGlvbiBmb1xuICAgIGVtYWlsOlwiXCIsXG4gICAgcGFzc3dvcmQ6XCJcIixcbiAgICBwYXNzd29yZF9jb25maXJtOlwiXCIsXG4gICAgbG9hZGluZzogZmFsc2UsIC8vdXBkYXRlZCBieSBjb21wb25lbnREaWRVcGRhdGVcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAvL3Jlc2V0aW5nIGVycm9ycyBvbiBpbml0aWFsIHBhZ2UgbW91bnRcbiAgICB0aGlzLnByb3BzLmNsZWFyRXJyb3IoKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgLy8gY2hlY2tzIHRoYXQgbG9hZGluZyBoYXMgY29tcGxldGVkIGF0IHN0YXRlIGxldmVsXG4gICAgaWYodGhpcy5wcm9wcy51c2VyVG9rZW4gIT09IHByZXZQcm9wcy51c2VyVG9rZW4pe1xuICAgICAgdGhpcy5wcm9wcy51c2VyVG9rZW4gPyBSb3V0ZXIucHVzaChcIi9cIikgOiBudWxsXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pXG4gICAgfVxuICAgIGlmKHRoaXMucHJvcHMuZXJyb3IgIT09IHByZXZQcm9wcy5lcnJvcil7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgcGFzc3dvcmQ6XCJcIn0pXG4gICAgfVxuICB9XG4gIG9uU3VibWl0SGFuZGxlcj0oZXZlbnQpPT57XG4gICAgLy8gaGFuZGxlcyBib3RoIGZvcm0gc3VibWlzc2lvbnMgcGFzc2luZyBkYXRhIHRvIGVpdGhlciBsb2dpbiBvciBzaWdudXAgYWN0aW9uXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxuICAgIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmR9ID0gdGhpcy5zdGF0ZVxuICAgIGlmKCF0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZCl7XG4gICAgICB0aGlzLnByb3BzLmxvZ2luKGVtYWlsLHBhc3N3b3JkKVxuICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUucmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkKXtcbiAgICAgIHRoaXMucHJvcHMuc2lnbnVwKGVtYWlsLHBhc3N3b3JkKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlPShldmVudCk9PntcbiAgICBpZihldmVudC50YXJnZXQubmFtZSA9PT0gXCJwYXNzd29yZFwiICYmIHRoaXMucHJvcHMuZXJyb3Ipe1xuICAgICAgdGhpcy5wcm9wcy5jbGVhckVycm9yKClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIHRvZ2dsZUF1dGhGb3Jtcz0oKT0+e1xuICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZDohdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWR9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBidXR0b24gPSAhdGhpcy5zdGF0ZS5sb2FkaW5nID8oPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU3VibWl0SGFuZGxlcn0+XG4gICAgICB7IXRoaXMuc3RhdGUucmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkPyBcIkxvZ2luXCIgOlwiQ3JlYXRlIEFjY291bnRcIn08L0J1dHRvbj5cbiAgICAgICk6IDxTcGlubmVyIC8+XG4gICAgY29uc3QgcmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkID0gdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWRcblxuICAgIGxldCBmb3JtID0gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRTdHlsZX0gcGxhY2Vob2xkZXI9XCJlbWFpbEBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZD8gIFxuICAgICAgICAgICAgICAgICAgKCA8aW5wdXQgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRfY29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29uZmlybSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1cIiAvPikgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgIHsvKiBkaXNwbGF5aW5nIGJ1dHRvbiBvciBzcGlubmVyICovfVxuICAgICAgICAgICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5lcnJvciA/IDxwIHN0eWxlPXtzdHlsZXMuZXJyb3JTdHlsZX0+IHt0aGlzLnByb3BzLmVycm9yfSA8L3A+OiBudWxsIH1cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXtzdHlsZXMubG9nb1N0eWxlfT5Sb29tUjxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjRkY1OTQxXCJ9fT44PC9zcGFuPnI8L2gxPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5oZWFkZXJ9PkdhbWJsZSB3aXRoIHRoZSBsb3R0ZXJ5IG5vdCB5b3VyIGFjY29tb2RhdGlvbjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm1haW5BcmVhU3R5bGV9PlxuICAgICAgICAgIHtmb3JtfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5wYXJhZ3JhcGhTdHlsZX0+XG4gICAgICAgICAgICB7IXJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZD9cIkRvbnQgSGF2ZSBhbiBhY2NvdW50P1wiOlwiUmV0dXJuaW5nIHVzZXJcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNyZWF0ZUFjY291bnRCdXR0b25cIiBzdHlsZT17c3R5bGVzLmNyZWF0ZUFjY291bnRCdXR0b259IFxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUF1dGhGb3Jtc30+XG4gICAgICAgICAgICAgICAgeyFyZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQ/XCJDcmVhdGUgQWNjb3VudFwiOlwibG9naW5cIn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jcmVhdGVBY2NvdW50QnV0dG9uIDpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHRcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyU3R5bGU6IHtcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZmZmZhXCIsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIG1haW5BcmVhU3R5bGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE5MTkyM1wiLFxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCIjY2NjXCIsICAgIFxuICAgIC8vIGhlaWdodDogXCIyNTBweFwiLFxuICAgIHdpZHRoOiBcIjMwMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIHBhZGRpbmc6XCIyMHB4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIlxuICB9LFxuICBsb2dvU3R5bGU6e3RleHRBbGlnbjpcImNlbnRlclwiLCBcbiAgICBjb2xvcjpcIiM0NzRBNDhcIixcbiAgICBmb250RmFtaWx5OiAnTGV4ZW5kIFRlcmEsIHNhbnMtc2VyaWYnLCBcbiAgICBmb250V2VpZ2h0OlwiYm9sZFwifSxcbiAgaW5wdXRTdHlsZToge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAvLyBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICBoZWlnaHQ6XCIzNnB4XCIsXG4gICAgd2lkdGg6IFwiMjY2cHhcIixcbiAgICAvLyBwYWRkaW5nTGVmdDpcIjEwcHhcIixcbiAgICBtYXJnaW46IFwiMTVweCBhdXRvXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiXG4gIH0sXG4gIGhlYWRlcjp7XG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXG4gICAgY29sb3I6XCIjMTkxOTIzXCIsXG4gICAgZm9udFdlaWdodDogJ2JvbGRlcicsXG4gICAgZm9udFNpemU6MjIsXG4gICAgZm9udEZhbWlseTogJ1BvcHBpbnMsIHNhbnMtc2VyaWYnLCBcbiAgfSxcbiAgZXJyb3JTdHlsZTp7XG4gICAgbWFyZ2luQm90dG9tOlwiMjBweFwiLFxuICAgIGNvbG9yOlwiI2Y1MFwiLFxuICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOjE2LFxuICAgIGZvbnRXZWlnaHQ6XCJib2xkXCJcbiAgfSxcbiAgcGFyYWdyYXBoU3R5bGU6e1xuICAgIHRleHRBbGlnbjpcImxlZnRcIixcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBmb250U2l6ZToxNixcbiAgICBmb250RmFtaWx5OlwiUG9wcGlucywgc2FucyBzZXJpZlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmZcIlxuICB9LFxuICBjcmVhdGVBY2NvdW50QnV0dG9uOntcbiAgICBtYXJnaW5MZWZ0OlwiNXB4XCIsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgY29sb3I6XCIjRkY1OTQxXCIsXG4gICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCJcbiAgfVxufTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcz0oc3RhdGUpPT57XG4gIHJldHVybiB7XG4gICAgdXNlclRva2VuOiBzdGF0ZS5hdXRoLnVzZXJUb2tlbixcbiAgICBlcnJvcjogc3RhdGUuYXV0aC5lcnJvcixcbiAgICBsb2FkaW5nOiBzdGF0ZS5hdXRoLmxvYWRpbmdcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLGFjdGlvbnMpKEF1dGgpXG4iXX0= */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js */"));
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
//# sourceMappingURL=auth.js.35e5678ad9c4d76ca20b.hot-update.js.map