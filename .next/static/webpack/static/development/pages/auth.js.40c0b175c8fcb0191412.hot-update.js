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
      }), this.state.registrationFormSelected ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        required: true,
        value: this.state.password,
        onChange: this.onChange,
        style: styles.inputStyle,
        placeholder: "confirm password",
        type: "password",
        name: "confirm_password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }) : null, button, this.props.error ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.errorStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, " ", this.props.error, " ") : null));

      if (this.state.registrationFormSelected) {}

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.containerStyle,
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
          lineNumber: 74
        },
        __self: this
      }, "RoomR", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: "#FF5941"
        },
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "8"), "r"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.header,
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Gamble with the lottery not your accomodation")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.mainAreaStyle,
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, form), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.paragraphStyle,
        className: "jsx-2582177505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Dont Have an account? ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick() {
          return alert("clicked");
        },
        className: "jsx-2582177505" + " " + "createAccountButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Create Account")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2582177505",
        __self: this
      }, ".createAccountButton.jsx-2582177505{font-weight:bold;font-size:20;color:#FF5941;-webkit-text-decoration:underline;text-decoration:underline;}.createAccountButton.jsx-2582177505:hover{opacity:0.7;cursor:default;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRnNCLEFBRzhCLEFBTUwsWUFFZixLQVBlLFVBT2QsR0FOZSxjQUVoQiw0REFBQyIsImZpbGUiOiIvVXNlcnMvZm9ydHVuZXBoaXJpL0RvY3VtZW50cy9Qcm9qZWN0cy9yb29tUjhyL3BhZ2VzL2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0J1dHRvbiwgU3Bpbm5lcn0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzXCJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbnNcIlxuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY2xhc3MgQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZDpmYWxzZSwgLy9ib29sZWFuIHRvIHRvZ2dsZSBiZXR3ZWVlbiB0aGUgbG9naW4gYW5kIHJlZ2lzdHJhdGlvbiBmb1xuICAgIGVtYWlsOlwiXCIsXG4gICAgcGFzc3dvcmQ6XCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZSwgLy91cGRhdGVkIGJ5IGNvbXBvbmVudERpZFVwZGF0ZVxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIC8vcmVzZXRpbmcgZXJyb3JzIG9uIGluaXRpYWwgcGFnZSBtb3VudFxuICAgIHRoaXMucHJvcHMuY2xlYXJFcnJvcigpXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcbiAgICBpZih0aGlzLnByb3BzLnVzZXJUb2tlbiAhPT0gcHJldlByb3BzLnVzZXJUb2tlbil7XG4gICAgICB0aGlzLnByb3BzLnVzZXJUb2tlbiA/IFJvdXRlci5wdXNoKFwiL1wiKSA6IG51bGxcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcbiAgICB9XG4gICAgaWYodGhpcy5wcm9wcy5lcnJvciAhPT0gcHJldlByb3BzLmVycm9yKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcbiAgICB9XG4gIH1cbiAgb25TdWJtaXRIYW5kbGVyPShldmVudCk9PntcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZH0gPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5wcm9wcy5sb2dpbihlbWFpbCxwYXNzd29yZClcbiAgfVxuXG4gIG9uQ2hhbmdlPShldmVudCk9PntcbiAgICBpZihldmVudC50YXJnZXQubmFtZSA9PT0gXCJwYXNzd29yZFwiICYmIHRoaXMucHJvcHMuZXJyb3Ipe1xuICAgICAgdGhpcy5wcm9wcy5jbGVhckVycm9yKClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gIXRoaXMuc3RhdGUubG9hZGluZyA/PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU3VibWl0SGFuZGxlcn0+TG9naW48L0J1dHRvbj46IDxTcGlubmVyIC8+XG4gICAgbGV0IGZvcm0gPSAoPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0SGFuZGxlcn0+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBcbiAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRTdHlsZX0gcGxhY2Vob2xkZXI9XCJlbWFpbEBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbkZvcm1TZWxlY3RlZD8gIFxuICAgICAgICAgICggPGlucHV0IHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb25maXJtIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJjb25maXJtX3Bhc3N3b3JkXCIgLz4pIDogbnVsbCB9XG4gICAgICAgICAgICB7LyogZGlzcGxheWluZyBidXR0b24gb3Igc3Bpbm5lciAqL31cbiAgICAgICAgICAgIHtidXR0b259XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZXJyb3IgPyA8cCBzdHlsZT17c3R5bGVzLmVycm9yU3R5bGV9PiB7dGhpcy5wcm9wcy5lcnJvcn0gPC9wPjogbnVsbCB9XG4gICAgICAgICAgPC9mb3JtPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxuXG4gICAgaWYodGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Gb3JtU2VsZWN0ZWQpe1xuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIiwgY29sb3I6XCIjNDc0QTQ4XCIsZm9udEZhbWlseTogJ0xleGVuZCBUZXJhLCBzYW5zLXNlcmlmJywgZm9udFdlaWdodDpcImJvbGRcIn19PlJvb21SPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiNGRjU5NDFcIn19Pjg8L3NwYW4+cjwvaDE+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmhlYWRlcn0+R2FtYmxlIHdpdGggdGhlIGxvdHRlcnkgbm90IHlvdXIgYWNjb21vZGF0aW9uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubWFpbkFyZWFTdHlsZX0+XG4gICAgICAgICAge2Zvcm19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaFN0eWxlfT5cbiAgICAgICAgICAgIERvbnQgSGF2ZSBhbiBhY2NvdW50PyA8c3BhbiBjbGFzc05hbWU9XCJjcmVhdGVBY2NvdW50QnV0dG9uXCIgb25DbGljaz17KCk9PmFsZXJ0KFwiY2xpY2tlZFwiKX0+Q3JlYXRlIEFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY3JlYXRlQWNjb3VudEJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMDtcbiAgICAgICAgICAgIGNvbG9yOiNGRjU5NDE7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY3JlYXRlQWNjb3VudEJ1dHRvbiA6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiB7XG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOlwiI2ZmZmZmYVwiLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBtYWluQXJlYVN0eWxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMxOTE5MjNcIixcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2NjY1wiLCAgICBcbiAgICAvLyBoZWlnaHQ6IFwiMjUwcHhcIixcbiAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBwYWRkaW5nOlwiMjBweFwiLFxuICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJcbiAgfSxcbiAgaW5wdXRTdHlsZToge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAvLyBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICBoZWlnaHQ6XCIzNnB4XCIsXG4gICAgd2lkdGg6IFwiMjY2cHhcIixcbiAgICAvLyBwYWRkaW5nTGVmdDpcIjEwcHhcIixcbiAgICBtYXJnaW46IFwiMTVweCBhdXRvXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiXG4gIH0sXG4gIGhlYWRlcjp7XG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXG4gICAgY29sb3I6XCIjMTkxOTIzXCIsXG4gICAgZm9udFdlaWdodDogJ2JvbGRlcicsXG4gICAgZm9udFNpemU6MjIsXG4gICAgZm9udEZhbWlseTogJ1BvcHBpbnMsIHNhbnMtc2VyaWYnLCBcbiAgfSxcbiAgZXJyb3JTdHlsZTp7XG4gICAgbWFyZ2luQm90dG9tOlwiMjBweFwiLFxuICAgIGNvbG9yOlwiI2Y1MFwiLFxuICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOjE2LFxuICAgIGZvbnRXZWlnaHQ6XCJib2xkXCJcbiAgfSxcbiAgcGFyYWdyYXBoU3R5bGU6e1xuICAgIHRleHRBbGlnbjpcImxlZnRcIixcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBmb250U2l6ZToxNixcbiAgICBmb250RmFtaWx5OlwiUG9wcGlucywgc2FucyBzZXJpZlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmZcIlxuICB9XG59O1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzPShzdGF0ZSk9PntcbiAgcmV0dXJuIHtcbiAgICB1c2VyVG9rZW46IHN0YXRlLmF1dGgudXNlclRva2VuLFxuICAgIGVycm9yOiBzdGF0ZS5hdXRoLmVycm9yLFxuICAgIGxvYWRpbmc6IHN0YXRlLmF1dGgubG9hZGluZ1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsYWN0aW9ucykoQXV0aClcbiJdfQ== */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js */"));
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
//# sourceMappingURL=auth.js.40c0b175c8fcb0191412.hot-update.js.map