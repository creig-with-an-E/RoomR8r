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
        className: "jsx-1024624965",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1024624965",
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
        className: "jsx-1024624965",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "RoomR", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: "#FF5941"
        },
        className: "jsx-1024624965",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "8"), "r"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.header,
        className: "jsx-1024624965",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Gamble with the lottery not your accomodation")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.mainAreaStyle,
        className: "jsx-1024624965",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.onSubmitHandler,
        className: "jsx-1024624965",
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
        className: "jsx-1024624965",
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
        className: "jsx-1024624965",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), button, this.props.error ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.errorStyle,
        className: "jsx-1024624965",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, " ", this.props.error, " ") : null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: styles.paragraphStyle,
        className: "jsx-1024624965",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Dont Have an account? ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick() {
          return alert("clicked");
        },
        className: "jsx-1024624965" + " " + "createAccountButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Create Account")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1024624965",
        __self: this
      }, ".createAccountButton.jsx-1024624965{font-weight:bold;font-size:20;color:#FF5941;-webkit-text-decoration:underline;text-decoration:underline;}.createAccountButton.jsx-1024624965:hover{opacity:0.8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvYXV0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRXNCLEFBRzhCLEFBT3BCLFlBQUMsS0FOYyxhQUNDLGNBRWhCLDREQUFDIiwiZmlsZSI6Ii9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7QnV0dG9uLCBTcGlubmVyfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHNcIlxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy9hdXRoQWN0aW9uc1wiXG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jbGFzcyBBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZW1haWw6XCJcIixcbiAgICBwYXNzd29yZDpcIlwiLFxuICAgIGxvYWRpbmc6IGZhbHNlLCAvL3VwZGF0ZWQgYnkgY29tcG9uZW50RGlkVXBkYXRlXG4gIH07XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgLy9yZXNldGluZyBlcnJvcnMgb24gaW5pdGlhbCBwYWdlIG1vdW50XG4gICAgdGhpcy5wcm9wcy5jbGVhckVycm9yKClcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpe1xuICAgIGlmKHRoaXMucHJvcHMudXNlclRva2VuICE9PSBwcmV2UHJvcHMudXNlclRva2VuKXtcbiAgICAgIHRoaXMucHJvcHMudXNlclRva2VuID8gUm91dGVyLnB1c2goXCIvXCIpIDogbnVsbFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KVxuICAgIH1cbiAgICBpZih0aGlzLnByb3BzLmVycm9yICE9PSBwcmV2UHJvcHMuZXJyb3Ipe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KVxuICAgIH1cbiAgfVxuICBvblN1Ym1pdEhhbmRsZXI9KGV2ZW50KT0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcbiAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkfSA9IHRoaXMuc3RhdGVcbiAgICB0aGlzLnByb3BzLmxvZ2luKGVtYWlsLHBhc3N3b3JkKVxuICB9XG5cbiAgb25DaGFuZ2U9KGV2ZW50KT0+e1xuICAgIGlmKGV2ZW50LnRhcmdldC5uYW1lID09PSBcInBhc3N3b3JkXCIgJiYgdGhpcy5wcm9wcy5lcnJvcil7XG4gICAgICB0aGlzLnByb3BzLmNsZWFyRXJyb3IoKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTpldmVudC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBidXR0b24gPSAhdGhpcy5zdGF0ZS5sb2FkaW5nID88QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TdWJtaXRIYW5kbGVyfT5Mb2dpbjwvQnV0dG9uPjogPFNwaW5uZXIgLz5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsIGNvbG9yOlwiIzQ3NEE0OFwiLGZvbnRGYW1pbHk6ICdMZXhlbmQgVGVyYSwgc2Fucy1zZXJpZicsIGZvbnRXZWlnaHQ6XCJib2xkXCJ9fT5Sb29tUjxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjRkY1OTQxXCJ9fT44PC9zcGFuPnI8L2gxPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5oZWFkZXJ9PkdhbWJsZSB3aXRoIHRoZSBsb3R0ZXJ5IG5vdCB5b3VyIGFjY29tb2RhdGlvbjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm1haW5BcmVhU3R5bGV9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0SGFuZGxlcn0+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IFxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfSBwbGFjZWhvbGRlcj1cImVtYWlsQGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IFxuICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogZGlzcGxheWluZyBidXR0b24gb3Igc3Bpbm5lciAqL31cbiAgICAgICAgICAgIHtidXR0b259XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZXJyb3IgPyA8cCBzdHlsZT17c3R5bGVzLmVycm9yU3R5bGV9PiB7dGhpcy5wcm9wcy5lcnJvcn0gPC9wPjogbnVsbCB9XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5wYXJhZ3JhcGhTdHlsZX0+XG4gICAgICAgICAgICBEb250IEhhdmUgYW4gYWNjb3VudD8gPHNwYW4gY2xhc3NOYW1lPVwiY3JlYXRlQWNjb3VudEJ1dHRvblwiIG9uQ2xpY2s9eygpPT5hbGVydChcImNsaWNrZWRcIil9PkNyZWF0ZSBBY2NvdW50PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNyZWF0ZUFjY291bnRCdXR0b24ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6MjA7XG4gICAgICAgICAgICBjb2xvcjojRkY1OTQxO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNyZWF0ZUFjY291bnRCdXR0b24gOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOFxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXJTdHlsZToge1xuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmZmZmFcIixcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbWFpbkFyZWFTdHlsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTkxOTIzXCIsXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiBcIiNjY2NcIiwgICAgXG4gICAgLy8gaGVpZ2h0OiBcIjI1MHB4XCIsXG4gICAgd2lkdGg6IFwiMzAwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgcGFkZGluZzpcIjIwcHhcIixcbiAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiXG4gIH0sXG4gIGlucHV0U3R5bGU6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgLy8gcGFkZGluZzogXCIxMHB4XCIsXG4gICAgaGVpZ2h0OlwiMzZweFwiLFxuICAgIHdpZHRoOiBcIjI2NnB4XCIsXG4gICAgbWFyZ2luOiBcIjE1cHggYXV0b1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIlxuICB9LFxuICBoZWFkZXI6e1xuICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxuICAgIGNvbG9yOlwiIzE5MTkyM1wiLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxuICAgIGZvbnRTaXplOjIyLFxuICAgIGZvbnRGYW1pbHk6ICdQb3BwaW5zLCBzYW5zLXNlcmlmJywgXG4gIH0sXG4gIGVycm9yU3R5bGU6e1xuICAgIG1hcmdpbkJvdHRvbTpcIjIwcHhcIixcbiAgICBjb2xvcjpcIiNmNTBcIixcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcbiAgICBmb250U2l6ZToxNixcbiAgICBmb250V2VpZ2h0OlwiYm9sZFwiXG4gIH0sXG4gIHBhcmFncmFwaFN0eWxlOntcbiAgICB0ZXh0QWxpZ246XCJsZWZ0XCIsXG4gICAgcGFkZGluZzogMjAsXG4gICAgZm9udFNpemU6MTYsXG4gICAgZm9udEZhbWlseTpcIlBvcHBpbnMsIHNhbnMgc2VyaWZcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZmXCJcbiAgfVxufTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcz0oc3RhdGUpPT57XG4gIHJldHVybiB7XG4gICAgdXNlclRva2VuOiBzdGF0ZS5hdXRoLnVzZXJUb2tlbixcbiAgICBlcnJvcjogc3RhdGUuYXV0aC5lcnJvcixcbiAgICBsb2FkaW5nOiBzdGF0ZS5hdXRoLmxvYWRpbmdcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLGFjdGlvbnMpKEF1dGgpXG4iXX0= */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/pages/auth.js */"));
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
//# sourceMappingURL=auth.js.c56f20357ee080456544.hot-update.js.map