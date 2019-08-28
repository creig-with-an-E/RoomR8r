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

        return;
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
          lineNumber: 57
        },
        __self: this
      }, !this.state.registrationFormSelected ? "Login" : "Create Account") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      });
      var registrationFormSelected = this.state.registrationFormSelected;
      var form = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.onSubmitHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
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
          lineNumber: 65
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
          lineNumber: 68
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
          lineNumber: 74
        },
        __self: this
      }) : null, button, this.props.error ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.errorStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, " ", this.props.error, " ") : null));
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.containerStyle,
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        style: styles.logoStyle,
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "RoomR", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: "#FF5941"
        },
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "8"), "r"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.header,
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Gamble with the lottery not your accomodation")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.mainAreaStyle,
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, form), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.paragraphStyle,
        className: "jsx-3721349288",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, !registrationFormSelected ? "Dont Have an account?" : "Returning user", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: styles.createAccountButton,
        onClick: this.toggleAuthForms,
        className: "jsx-3721349288" + " " + "createAccountButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, !registrationFormSelected ? "Create Account" : "login")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3721349288",
        __self: this
      }, ".createAccountButton.jsx-3721349288:hover{opacity:0.7;cursor:default;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR3NCLEFBR3lCLFlBRWYsZUFBQyIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3BhZ2VzL2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0J1dHRvbiwgU3Bpbm5lcn0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzXCJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbnNcIlxuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY2xhc3MgQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZDpmYWxzZSwgLy9ib29sZWFuIHRvIHRvZ2dsZSBiZXR3ZWVlbiB0aGUgbG9naW4gYW5kIHJlZ2lzdHJhdGlvbiBmb1xuICAgIGVtYWlsOlwiXCIsXG4gICAgcGFzc3dvcmQ6XCJcIixcbiAgICBwYXNzd29yZF9jb25maXJtOlwiXCIsXG4gICAgbG9hZGluZzogZmFsc2UsIC8vdXBkYXRlZCBieSBjb21wb25lbnREaWRVcGRhdGVcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAvL3Jlc2V0aW5nIGVycm9ycyBvbiBpbml0aWFsIHBhZ2UgbW91bnRcbiAgICB0aGlzLnByb3BzLmNsZWFyRXJyb3IoKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgLy8gY2hlY2tzIHRoYXQgbG9hZGluZyBoYXMgY29tcGxldGVkIGF0IHN0YXRlIGxldmVsXG4gICAgaWYodGhpcy5wcm9wcy51c2VyVG9rZW4gIT09IHByZXZQcm9wcy51c2VyVG9rZW4pe1xuICAgICAgdGhpcy5wcm9wcy51c2VyVG9rZW4gPyBSb3V0ZXIucHVzaChcIi9cIikgOiBudWxsXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pXG4gICAgfVxuICAgIGlmKHRoaXMucHJvcHMuZXJyb3IgIT09IHByZXZQcm9wcy5lcnJvcil7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgcGFzc3dvcmQ6XCJcIn0pXG4gICAgfVxuICB9XG4gIG9uU3VibWl0SGFuZGxlcj0oZXZlbnQpPT57XG4gICAgLy8gaGFuZGxlcyBib3RoIGZvcm0gc3VibWlzc2lvbnMgcGFzc2luZyBkYXRhIHRvIGVpdGhlciBsb2dpbiBvciBzaWdudXAgYWN0aW9uXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxuICAgIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmR9ID0gdGhpcy5zdGF0ZVxuICAgIGlmKCF0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZCl7XG4gICAgICB0aGlzLnByb3BzLmxvZ2luKGVtYWlsLHBhc3N3b3JkKVxuICAgICAgcmV0dXJuXG4gICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQpe1xuICAgICAgdGhpcy5wcm9wcy5zaWdudXAoZW1haWwscGFzc3dvcmQpXG4gICAgfVxuXG4gIH1cblxuICBvbkNoYW5nZT0oZXZlbnQpPT57XG4gICAgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT09IFwicGFzc3dvcmRcIiAmJiB0aGlzLnByb3BzLmVycm9yKXtcbiAgICAgIHRoaXMucHJvcHMuY2xlYXJFcnJvcigpXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOmV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICB0b2dnbGVBdXRoRm9ybXM9KCk9PntcbiAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQ6IXRoaXMuc3RhdGUucmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gIXRoaXMuc3RhdGUubG9hZGluZyA/KDxCdXR0b24gb25DbGljaz17dGhpcy5vblN1Ym1pdEhhbmRsZXJ9PlxuICAgICAgeyF0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZD8gXCJMb2dpblwiIDpcIkNyZWF0ZSBBY2NvdW50XCJ9PC9CdXR0b24+XG4gICAgICApOiA8U3Bpbm5lciAvPlxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZCA9IHRoaXMuc3RhdGUucmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkXG5cbiAgICBsZXQgZm9ybSA9IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0U3R5bGV9IHBsYWNlaG9sZGVyPVwiZW1haWxAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0U3R5bGV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQ/ICBcbiAgICAgICAgICAgICAgICAgICggPGlucHV0IHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkX2NvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZF9jb25maXJtXCIgLz4pIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICB7LyogZGlzcGxheWluZyBidXR0b24gb3Igc3Bpbm5lciAqL31cbiAgICAgICAgICAgICAgICAgIHtidXR0b259XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZXJyb3IgPyA8cCBzdHlsZT17c3R5bGVzLmVycm9yU3R5bGV9PiB7dGhpcy5wcm9wcy5lcnJvcn0gPC9wPjogbnVsbCB9XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17c3R5bGVzLmxvZ29TdHlsZX0+Um9vbVI8c3BhbiBzdHlsZT17e2NvbG9yOlwiI0ZGNTk0MVwifX0+ODwvc3Bhbj5yPC9oMT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5HYW1ibGUgd2l0aCB0aGUgbG90dGVyeSBub3QgeW91ciBhY2NvbW9kYXRpb248L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYWluQXJlYVN0eWxlfT5cbiAgICAgICAgICB7Zm9ybX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBoU3R5bGV9PlxuICAgICAgICAgICAgeyFyZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQ/XCJEb250IEhhdmUgYW4gYWNjb3VudD9cIjpcIlJldHVybmluZyB1c2VyXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcmVhdGVBY2NvdW50QnV0dG9uXCIgc3R5bGU9e3N0eWxlcy5jcmVhdGVBY2NvdW50QnV0dG9ufSBcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVBdXRoRm9ybXN9PlxuICAgICAgICAgICAgICAgIHshcmVnaXN0cmF0aW9uRm9ybVNlbGVjdGVkP1wiQ3JlYXRlIEFjY291bnRcIjpcImxvZ2luXCJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY3JlYXRlQWNjb3VudEJ1dHRvbiA6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiB7XG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOlwiI2ZmZmZmYVwiLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBtYWluQXJlYVN0eWxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMxOTE5MjNcIixcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2NjY1wiLCAgICBcbiAgICAvLyBoZWlnaHQ6IFwiMjUwcHhcIixcbiAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBwYWRkaW5nOlwiMjBweFwiLFxuICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJcbiAgfSxcbiAgbG9nb1N0eWxlOnt0ZXh0QWxpZ246XCJjZW50ZXJcIiwgXG4gICAgY29sb3I6XCIjNDc0QTQ4XCIsXG4gICAgZm9udEZhbWlseTogJ0xleGVuZCBUZXJhLCBzYW5zLXNlcmlmJywgXG4gICAgZm9udFdlaWdodDpcImJvbGRcIn0sXG4gIGlucHV0U3R5bGU6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgLy8gcGFkZGluZzogXCIxMHB4XCIsXG4gICAgaGVpZ2h0OlwiMzZweFwiLFxuICAgIHdpZHRoOiBcIjI2NnB4XCIsXG4gICAgLy8gcGFkZGluZ0xlZnQ6XCIxMHB4XCIsXG4gICAgbWFyZ2luOiBcIjE1cHggYXV0b1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIlxuICB9LFxuICBoZWFkZXI6e1xuICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxuICAgIGNvbG9yOlwiIzE5MTkyM1wiLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxuICAgIGZvbnRTaXplOjIyLFxuICAgIGZvbnRGYW1pbHk6ICdQb3BwaW5zLCBzYW5zLXNlcmlmJywgXG4gIH0sXG4gIGVycm9yU3R5bGU6e1xuICAgIG1hcmdpbkJvdHRvbTpcIjIwcHhcIixcbiAgICBjb2xvcjpcIiNmNTBcIixcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcbiAgICBmb250U2l6ZToxNixcbiAgICBmb250V2VpZ2h0OlwiYm9sZFwiXG4gIH0sXG4gIHBhcmFncmFwaFN0eWxlOntcbiAgICB0ZXh0QWxpZ246XCJsZWZ0XCIsXG4gICAgcGFkZGluZzogMjAsXG4gICAgZm9udFNpemU6MTYsXG4gICAgZm9udEZhbWlseTpcIlBvcHBpbnMsIHNhbnMgc2VyaWZcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZmXCJcbiAgfSxcbiAgY3JlYXRlQWNjb3VudEJ1dHRvbjp7XG4gICAgbWFyZ2luTGVmdDpcIjVweFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGNvbG9yOlwiI0ZGNTk0MVwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiXG4gIH1cbn07XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM9KHN0YXRlKT0+e1xuICByZXR1cm4ge1xuICAgIHVzZXJUb2tlbjogc3RhdGUuYXV0aC51c2VyVG9rZW4sXG4gICAgZXJyb3I6IHN0YXRlLmF1dGguZXJyb3IsXG4gICAgbG9hZGluZzogc3RhdGUuYXV0aC5sb2FkaW5nXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxhY3Rpb25zKShBdXRoKVxuIl19 */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js */"));
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
//# sourceMappingURL=auth.js.b8f6ac2e34fd82b9d794.hot-update.js.map