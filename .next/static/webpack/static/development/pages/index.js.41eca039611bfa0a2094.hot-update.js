webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/googlePlaceFunctions.js":
/*!*************************************!*\
  !*** ./lib/googlePlaceFunctions.js ***!
  \*************************************/
/*! exports provided: handleScriptLoad, handlePlaceSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleScriptLoad", function() { return handleScriptLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePlaceSelect", function() { return handlePlaceSelect; });
var handleScriptLoad = function handleScriptLoad() {
  alert("called");
  /***loads google script on load */
  // Declare Options For Autocomplete

  var options = {// types: ['(cities)'],
  }; // Initialize Google Autocomplete

  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options); // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.

  autocomplete.setFields(['address_components']); // Fire Event when a suggested name is selected

  autocomplete.addListener('place_changed', function () {
    return alert("chansk");
  });
};
var handlePlaceSelect = function handlePlaceSelect() {
  // Extract City From Address Object
  var addressObject = autocomplete.getPlace();
  var address = addressObject.address_components; // Check if address is valid

  if (address) {
    console.log(address); // this.setState(
    // {
    //   city: address[0].long_name,
    // }
    // );
  }
};

/***/ })

})
//# sourceMappingURL=index.js.41eca039611bfa0a2094.hot-update.js.map