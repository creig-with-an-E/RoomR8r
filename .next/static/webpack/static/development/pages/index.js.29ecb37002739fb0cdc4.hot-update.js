webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/modal/addReviewForm.js":
/*!************************************!*\
  !*** ./src/modal/addReviewForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./src/components/index.js");

var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/modal/addReviewForm.js";








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(44,54,94,0.8)"
    },
    paper: {
      margin: "0 auto",
      borderRadius: "3px",
      background: "rgb(44,54,94)",
      boxShadow: "#000",
      width: 320,
      padding: theme.spacing(4, 4, 3)
    },
    input: {
      padding: 15,
      display: "block",
      margin: "10px auto"
    },
    heading: {
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
      color: "#fffff0"
    }
  };
});

var addReviewForm = function addReviewForm(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      rating = _useState2[0],
      setRating = _useState2[1];

  var handleClose = function handleClose() {
    props.hideModalHandle();
  };

  var addReviewHandle = function addReviewHandle() {
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("https://accomo-rater.firebaseio.com/landlord_data.json?auth=".concat(props.userToken), {
      "postal_code": "T5H-1M9",
      "address": {
        "street_number": "10633 129ave",
        "apartment_number": "401"
      },
      "landlord_bio": {
        "first_name": "Mo",
        "last_name": ""
      },
      "comment": "Truly a great guy. landlords could learn a lot from this guy",
      "time_stamp": "1565893599"
    }).then(function (response) {// handleClose()
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: props.modalVisible,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__["default"],
    BackdropProps: {
      timeout: 500
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "in": props.modalVisible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: classes.heading,
    id: "transition-modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Add Review"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: classes.input,
    type: "text",
    required: true,
    placeholder: "Post Code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    required: true,
    className: classes.input,
    type: "text",
    placeholder: "Street address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: classes.input,
    type: "text",
    placeholder: "Apartment Number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    required: true,
    className: classes.input,
    type: "text",
    placeholder: "City",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("legend", {
    title: "Land lord info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: classes.input,
    placeholder: "Full Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      margin: "15px auto",
      justifyContent: "center",
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: rating,
    onChange: function onChange(event, newValue) {
      return setRating(newValue);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: addReviewHandle,
    className: classes.buttonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Submit"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (addReviewForm);

/***/ })

})
//# sourceMappingURL=index.js.29ecb37002739fb0cdc4.hot-update.js.map