webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/reducers */ "./store/reducers/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);









var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/pages/_app.js";










var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_14__["createStore"])(_store_reducers__WEBPACK_IMPORTED_MODULE_16__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_14__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_15__["default"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__["default"])(initStore, {
  debug: false
})(
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(_, _App);

  function _() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(_).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("html", {
        prefix: "og:http://ogp.me/ns#",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "title",
        property: "og:title",
        content: "RoomR8r",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        property: "og:type",
        content: "website",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "description",
        property: "og:description",
        content: "Community of renters and landlord's alike. Using the app you are able to view and add your own review of the landlord and the house culture at a particular address. This app is built with one goal and one goal alone to improve the renting and leasing markets for all stakeholders at hand.",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        property: "og:url",
        content: "http://roomr8r.ca/",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "author",
        property: "og:author",
        content: "Fortune Creig",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        property: "og:image",
        content: "http://roomr8r.ca/static/imgs/ogp_image.png",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        property: "og:image:width",
        content: "400",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        property: "og:image:height",
        content: "300",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", {
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "RoomR8r | home"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "http://roomr8r.ca/static/imgs/favicon.ico",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lexend+Tera|Poppins|Fira+Sans&display=swap",
        rel: "stylesheet",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        href: "/static/style.css",
        rel: "styleSheet",
        className: "jsx-2317346183",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pageProps, {
        className: "jsx-2317346183" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2317346183",
        __self: this
      }, "body.jsx-2317346183{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RFksQUFHdUIsU0FFWCxVQUFDIiwiZmlsZSI6Ii9Vc2Vycy9mb3J0dW5lcGhpcmkvRG9jdW1lbnRzL1Byb2plY3RzL3Jvb21SOHIvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByZWR1eFRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gXCIuLi9zdG9yZS9yZWR1Y2Vyc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUocmVkdXhUaHVuaykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgeyBkZWJ1ZzogZmFsc2UgfSkoXG4gIGNsYXNzIF8gZXh0ZW5kcyBBcHB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczoge1xuICAgICAgICAgIC4uLihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgICA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgICAgICAgICAgOiB7fSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aHRtbCBwcmVmaXg9XCJvZzpodHRwOi8vb2dwLm1lL25zI1wiPlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJSb29tUjhyXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBjb250ZW50PVwiQ29tbXVuaXR5IG9mIHJlbnRlcnMgYW5kIGxhbmRsb3JkJ3MgYWxpa2UuIFVzaW5nIHRoZSBhcHAgeW91IGFyZSBhYmxlIHRvIHZpZXcgYW5kIGFkZCB5b3VyIG93biByZXZpZXcgb2YgdGhlIGxhbmRsb3JkIGFuZCB0aGUgaG91c2UgY3VsdHVyZSBhdCBhIHBhcnRpY3VsYXIgYWRkcmVzcy5cbiAgICAgICAgICAgICAgIFRoaXMgYXBwIGlzIGJ1aWx0IHdpdGggb25lIGdvYWwgYW5kIG9uZSBnb2FsIGFsb25lIHRvIGltcHJvdmUgdGhlIHJlbnRpbmcgYW5kIGxlYXNpbmcgbWFya2V0cyBmb3IgYWxsIHN0YWtlaG9sZGVycyBhdCBoYW5kLlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgICAgICBjb250ZW50PVwiaHR0cDovL3Jvb21yOHIuY2EvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgcHJvcGVydHk9XCJvZzphdXRob3JcIiBjb250ZW50PVwiRm9ydHVuZSBDcmVpZ1wiIC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHA6Ly9yb29tcjhyLmNhL3N0YXRpYy9pbWdzL29ncF9pbWFnZS5wbmdcIiAvPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI0MDBcIiAvPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiMzAwXCIgLz5cbiAgICAgICAgICAgIDx0aXRsZT5Sb29tUjhyIHwgaG9tZTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cImh0dHA6Ly9yb29tcjhyLmNhL3N0YXRpYy9pbWdzL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGV4ZW5kK1RlcmF8UG9wcGluc3xGaXJhK1NhbnMmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL3N0eWxlLmNzc1wiIHJlbD1cInN0eWxlU2hlZXRcIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICAgICAgYFxuICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6MFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cblxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvaHRtbD5cbiAgICAgICk7XG4gICAgfVxuICB9XG4pO1xuIl19 */\n/*@ sourceURL=/Users/fortunephiri/Documents/Projects/roomR8r/pages/_app.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                _context.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"];
                _context.t1 = {};

                if (!Component.getInitialProps) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return Component.getInitialProps(ctx);

              case 6:
                _context.t2 = _context.sent;
                _context.next = 10;
                break;

              case 9:
                _context.t2 = {};

              case 10:
                _context.t3 = _context.t2;
                _context.t4 = (0, _context.t0)(_context.t1, _context.t3);
                return _context.abrupt("return", {
                  pageProps: _context.t4
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _;
}(next_app__WEBPACK_IMPORTED_MODULE_12___default.a)));

/***/ })

})
//# sourceMappingURL=_app.js.9b883cc9f828fb9af05c.hot-update.js.map