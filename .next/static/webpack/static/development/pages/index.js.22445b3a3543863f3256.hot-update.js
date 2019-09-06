webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! exports provided: ReviewCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewCard", function() { return ReviewCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");


var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/components/card.js";






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    card: {
      maxWidth: 450,
      borderRadius: "7px",
      marginBottom: 40,
      margin: "0 auto",
      padding: 0,
      textAlign: "left",
      fontFamily: "Fira Sans, sans-serif",
      boxShadow: "0px 2px 10px 1px rgba(44, 54, 94, 0.4)"
    },
    cardContent: {
      marginBottom: 0,
      paddingBottom: 0
    },
    collapseSectionHeader: {
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#fff"
    },
    media: {
      margin: 10,
      height: 0,
      paddingTop: '56.25%' // 16:9

    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    expandedArea: {
      backgroundColor: "#474A48",
      color: "#fffffa"
    },
    expandedAreaLabel: {
      marginRight: 10,
      padding: 1,
      width: 100
    },
    expandedAreaResults: {
      textAlign: "right"
    },
    avatar: {
      backgroundColor: "#FF5941"
    },
    footer: {
      margin: 0,
      padding: 0
    },
    icon: {
      color: "#fffffa"
    },
    labelStyles: {
      fontSize: "16px",
      textTransform: "capitalize",
      color: "#2C365E",
      width: "70px"
    },
    resultsText: {
      fontWeight: "bold",
      fontFamily: 'Fira Sans, sans-serif',
      color: "#2C365E",
      fontSize: 18,
      paddingLeft: 10
    }
  };
});

var ReviewCard = function ReviewCard(props) {
  console.log(props);
  var _props$data = props.data,
      postal_code = _props$data.postal_code,
      address = _props$data.address,
      landlord_bio = _props$data.landlord_bio,
      comment = _props$data.comment;
  var first_name = landlord_bio.first_name,
      last_name = landlord_bio.last_name;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardMedia"], {
    className: classes.media,
    image: "/static/imgs/mapView.jpg",
    title: "map view image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardContent"], {
    className: classes.cardContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.labelStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Postal Code:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.resultsText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, postal_code)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.labelStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Street Address:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.resultsText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, address.street_number)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.labelStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "City:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.resultsText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, ""))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardActions"], {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: props.data.rating ? props.data.rating : 0,
    readOnly: true,
    style: {
      color: "#FF5941",
      marginLeft: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.expand, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.expandOpen, expanded)),
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      color: "#FF5941"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Collapse"], {
    "in": expanded,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardContent"], {
    className: classes.expandedArea,
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.collapseSectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "About Landlord"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.expandedAreaLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Name: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.expandedAreaResults,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, first_name)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.expandedAreaLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Feedback: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, comment)))));
};



/***/ })

})
//# sourceMappingURL=index.js.22445b3a3543863f3256.hot-update.js.map