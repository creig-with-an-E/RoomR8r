webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/googlePlaceFunctions.js":
/*!*************************************!*\
  !*** ./lib/googlePlaceFunctions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");



var googlePlaceFunctions = function googlePlaceFunctions() {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, googlePlaceFunctions);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
    address: {}
  });
};

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(googlePlaceFunctions, "handleScriptLoad", function () {
  /***loads google script on load */
  // Declare Options For Autocomplete
  var options = {
    // types: ['(cities)'],
    componentRestrictions: {
      country: 'ca'
    }
  }; // Initialize Google Autocomplete

  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options); // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.

  autocomplete.setFields(['address_components']); // Fire Event when a suggested name is selected

  autocomplete.addListener('place_changed', function () {
    return googlePlaceFunctions.handlePlaceSelect(autocomplete);
  });
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(googlePlaceFunctions, "handlePlaceSelect", function (autocomplete) {
  // Extract City From Address Object
  var addressObject = autocomplete.getPlace();
  var address = addressObject.address_components; // Check if address is valid

  if (address) {
    googlePlaceFunctions.setState({
      // city: address[0].long_name,
      address: address
    });
  }
});

/* harmony default export */ __webpack_exports__["default"] = (googlePlaceFunctions);

/***/ })

})
//# sourceMappingURL=index.js.f9ed5087acbde6b2098e.hot-update.js.map