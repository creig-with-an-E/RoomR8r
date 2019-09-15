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
/* harmony import */ var _stepper_components_reviewSummary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stepper_components/reviewSummary */ "./src/stepper/stepper_components/reviewSummary.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/appActions */ "./store/actions/appActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _stepper_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stepper.css */ "./src/stepper/stepper.css");
/* harmony import */ var _stepper_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_stepper_css__WEBPACK_IMPORTED_MODULE_16__);



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
      backgroundColor: "rgba(44,54,94,0.8)",
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
    error: {
      fontSize: 17,
      color: "#f50",
      textAlign: "center",
      fontFamily: "Fira Sans, sans serif"
    },
    instructions: {
      minHeight: "300px",
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
  return ['Find by address', 'Landlord Bio', 'Confirm Review'];
};

var getStepContent = function getStepContent(step) {
  var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  switch (step) {
    case 0:
      // switching to the Google maps search bar slde
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_stepper_components_googleMapsSearchBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      });

    case 1:
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_stepper_components_landlord_form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      });

    case 2:
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_stepper_components_reviewSummary__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
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

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      addressError = _React$useState8[0],
      setAddressError = _React$useState8[1];

  var steps = getSteps();

  function isStepOptional(step) {
    return false; //no optional steps
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    var addressData = props.data.addressData;

    if (activeStep === 2) {
      props.createReviewHandle(props.userToken, props.data);
      return next_router__WEBPACK_IMPORTED_MODULE_15___default.a.replace("/");
    }

    if (activeStep === 0 && addressData === null) {
      setAddressError("Address Field Can not be Empty");
      return;
    }

    setAddressError("");
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
    className: _stepper_css__WEBPACK_IMPORTED_MODULE_16___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeStep: activeStep,
    className: classes.stepper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
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
          lineNumber: 158
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
        lineNumber: 164
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
        lineNumber: 169
      },
      __self: this
    }), label));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes["step-body"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, activeStep === steps.length ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Review complete.", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: classes.button,
    onClick: props.closeModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Close"))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, getStepContent(activeStep, address)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, addressError), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes["button-section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
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
      lineNumber: 188
    },
    __self: this
  }, "Back"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: _stepper_css__WEBPACK_IMPORTED_MODULE_16___default.a.button,
    style: activeStep === steps.length - 1 ? {
      backgroundColor: "#FF5941"
    } : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, activeStep === steps.length - 1 ? 'Finish' : 'Next')))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.app.stepperFormData,
    userToken: state.auth.userToken
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createReviewHandle: function createReviewHandle(userToken, data) {
      return dispatch(Object(_store_actions_appActions__WEBPACK_IMPORTED_MODULE_14__["createReview"])(userToken, data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(HorizontalStepper)));

/***/ })

})
//# sourceMappingURL=add-review.js.c3e3a7ec7fec9eb88378.hot-update.js.map