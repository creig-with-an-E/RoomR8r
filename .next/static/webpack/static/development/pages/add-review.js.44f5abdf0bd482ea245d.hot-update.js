webpackHotUpdate("static/development/pages/add-review.js",{

/***/ "./src/stepper/index.js":
/*!******************************!*\
  !*** ./src/stepper/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _stepper_components_landlord_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stepper_components/landlord_form */ "./src/stepper/stepper_components/landlord_form.js");
/* harmony import */ var _stepper_components_googleMapsSearchBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stepper_components/googleMapsSearchBar */ "./src/stepper/stepper_components/googleMapsSearchBar.js");
/* harmony import */ var _stepper_components_reviewForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stepper_components/reviewForm */ "./src/stepper/stepper_components/reviewForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/index.js";












var styles = function styles(theme) {
  return {
    root: {
      width: "450px",
      display: "flex",
      flexDirection: 'column'
    },
    stepper: {
      display: "flex",
      backgroundColor: "rgba(44,54,94,0.6)",
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      height: "100%"
    },
    button: {
      marginRight: 15
    },
    step: {},
    "button-section": {
      marginTop: 30,
      alignSelf: 'flex-end',
      textAlign: "center",
      height: 70
    },
    instructions: {
      height: "200px",
      paddingTop: "20px"
    },
    "step-body": {
      width: "100%",
      // height:300,
      display: "flex",
      alignItems: 'center',
      justifyContent: "center",
      background: "rgb(44,54,94)",
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7
    },
    stepIcon: {
      color: "#FF5941",
      "& $disabled": {
        backgroundColor: "red"
      }
    },
    completed: {}
  };
};

var getSteps = function getSteps() {
  return ['Location settings', 'Land lord Bio', 'Confirm Review'];
};

var getStepContent = function getStepContent(step) {
  var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  switch (step) {
    case 0:
      // switching to the Google maps search bar slde
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_stepper_components_googleMapsSearchBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      });

    case 1:
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_stepper_components_landlord_form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      });

    case 2:
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_stepper_components_reviewForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      });

    default:
      return 'Unknown step';
  }
};

var HorizontalStepper = function HorizontalStepper(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a()),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      skipped = _React$useState4[0],
      setSkipped = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      address = _React$useState6[0],
      setAddress = _React$useState6[1];

  var steps = getSteps();

  function isStepOptional(step) {
    return false; //no optional steps
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    if (activeStep === 3) {
      return next_router__WEBPACK_IMPORTED_MODULE_13___default.a.replace("/");
    }

    var newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a(newSkipped.values());
      newSkipped["delete"](activeStep);
    }

    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
    setSkipped(function (prevSkipped) {
      var newSkipped = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function handleReset() {
    setActiveStep(0);
  }

  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeStep: activeStep,
    className: classes.stepper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, steps.map(function (label, index) {
    var stepProps = {};
    var labelProps = {};

    if (isStepOptional(index)) {
      labelProps.optional = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Optional");
    }

    if (isStepSkipped(index)) {
      stepProps.completed = false;
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: label
    }, stepProps, {
      classes: {
        root: classes.step,
        completed: classes.completed,
        active: classes.active
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, labelProps, {
      StepIconProps: {
        classes: {
          root: classes.stepIcon
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }), label));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes["step-body"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, activeStep === steps.length ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Review complete.", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: classes.button,
    onClick: props.closeModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Close"))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, getStepContent(activeStep, address)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes["button-section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      backgroundColor: "#ccc"
    },
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Back"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    style: activeStep === steps.length - 1 ? {
      backgroundColor: "#FF5941"
    } : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, activeStep === steps.length - 1 ? 'Finish' : 'Next')))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(HorizontalStepper));

/***/ }),

/***/ "./src/stepper/stepper_components/reviewForm.js":
/*!******************************************************!*\
  !*** ./src/stepper/stepper_components/reviewForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/fortunephiri/Documents/Projects/roomR8r/src/stepper/stepper_components/reviewForm.js";

/* harmony default export */ __webpack_exports__["default"] = (reviewForm = function reviewForm() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Data"));
});

/***/ })

})
//# sourceMappingURL=add-review.js.44f5abdf0bd482ea245d.hot-update.js.map