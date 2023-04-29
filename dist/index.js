/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: var(--primary);\n}\n\n.top_bar {\n  justify-content: space-between;\n  padding-inline: 20%;\n  padding-block: 0.65rem;\n}\n\n.top_bar ul {\n  display: flex;\n  gap: 1rem;\n}\n.top_bar ul a {\n  color: white;\n  font-weight: 500;\n}\nheader {\n  background: white;\n  padding: 0.5em;\n}\n.above_main {\n  max-width: var(--max-width);\n  margin-inline: auto;\n  justify-content: space-between;\n}\nmain {\n  margin-block-start: 2rem;\n  background-color: #d9d9d9;\n  width: var(--max-width);\n  margin-inline: auto;\n  padding: 1.5rem;\n  display: grid;\n  grid-template-rows: repeat(4, auto);\n}\n.above_main {\n  margin-block-end: 0.8rem;\n  width: var(--max-width);\n}\n\n.stats {\n  background-color: var(--light);\n  border-radius: 5px;\n  padding: 0.5em 1em;\n}\n.stats p:not(:last-child) {\n  margin-block-end: 0.25em;\n}\n.hint_button {\n  background: linear-gradient(90deg, #b0b4ff 2.71%, #dfb7ff 100%);\n  border-radius: 25px;\n  font-size: 1.5rem;\n  padding: 0.35em 1.25em;\n}\n.hint_button:hover {\n  background: linear-gradient(90deg, #bec1fc 2.71%, #e3c5fb 100%);\n  border: 1px solid var(--primary-dark);\n}\n.main_top {\n  justify-content: space-between;\n  margin-inline: auto;\n  width: 90%;\n}\n.stopwatch {\n  font-size: 1.5rem;\n  background-color: var(--secondary);\n  border-radius: 50%;\n  padding: 1em;\n}\n.date {\n  flex-direction: column;\n}\n.date_value {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 2.25rem;\n  user-select: none;\n  -moz-user-select: none;\n}\n.date_format {\n  font-size: 1rem;\n}\n.options {\n  grid-row-start: -2;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  place-content: center;\n  gap: 1.5rem 5rem;\n}\n.day:nth-child(7) {\n  grid-column-start: 2;\n}\n.day {\n  padding: 0.65em 1.15em;\n  border-radius: 5px;\n  background: #f7e9ff;\n  font-family: \"Inter\";\n  font-weight: 500;\n  font-size: 1.25rem;\n  text-align: center;\n}\nbutton.incorrect {\n  background-color: var(--incorrect);\n  color: white;\n}\n.main_bottom {\n  justify-self: center;\n  display: flex;\n  width: 90%;\n  justify-content: space-between;\n  padding-inline: 2rem;\n}\n.solution,\n.continue {\n  font-size: 1.25rem;\n}\n.continue {\n  background: var(--primary-dark);\n  color: white;\n  padding: 0.5em 1em;\n  border-radius: 5px;\n  gap: 0.65rem;\n}\n.continue:hover {\n  translate: 0.3em;\n}\n.solution_button {\n  padding: 0.25em 1em;\n  border: 2px solid var(--primary-dark);\n  border-radius: 5px;\n}\n.solution_button:hover {\n  background: white;\n}\n.solutionDisplay {\n  display: inline-block;\n  margin-inline-start: 1rem;\n}\n.continue > img {\n  width: 1em;\n}\n.main_hint {\n  margin-block: 2rem;\n}\n.hint_values {\n  color: var(--primary);\n  font-weight: 500;\n}\n@media screen and (max-width: 500px) {\n  .options {\n    grid-template-columns: repeat(2, auto);\n    gap: 1.5rem;\n    width: min-content;\n    margin-inline: auto;\n  }\n  .day:nth-child(7) {\n    grid-column-start: 1;\n  }\n  .main_bottom {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media screen and (max-width: 600px) {\n  .continue,\n  .solution {\n    font-size: 1rem;\n    margin-top: 1rem;\n    width: min-content;\n    white-space: nowrap;\n  }\n  .main_top {\n    width: 100%;\n  }\n\n  .date_value {\n    font-size: 1.6rem;\n  }\n  .stopwatch {\n    font-size: 1.25rem;\n    padding: 0.75em;\n  }\n  .settings_button > img {\n    width: 48px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/index.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;AAClC;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,mCAAmC;AACrC;AACA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,+DAA+D;EAC/D,mBAAmB;EACnB,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,+DAA+D;EAC/D,qCAAqC;AACvC;AACA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,UAAU;AACZ;AACA;EACE,iBAAiB;EACjB,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,kCAAkC;EAClC,YAAY;AACd;AACA;EACE,oBAAoB;EACpB,aAAa;EACb,UAAU;EACV,8BAA8B;EAC9B,oBAAoB;AACtB;AACA;;EAEE,kBAAkB;AACpB;AACA;EACE,+BAA+B;EAC/B,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;EACE,UAAU;AACZ;AACA;EACE,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE;IACE,sCAAsC;IACtC,WAAW;IACX,kBAAkB;IAClB,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;AACF;AACA;EACE;;IAEE,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;EACrB;EACA;IACE,WAAW;EACb;;EAEA;IACE,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,eAAe;EACjB;EACA;IACE,WAAW;EACb;AACF","sourcesContent":["body {\n  background-color: var(--primary);\n}\n\n.top_bar {\n  justify-content: space-between;\n  padding-inline: 20%;\n  padding-block: 0.65rem;\n}\n\n.top_bar ul {\n  display: flex;\n  gap: 1rem;\n}\n.top_bar ul a {\n  color: white;\n  font-weight: 500;\n}\nheader {\n  background: white;\n  padding: 0.5em;\n}\n.above_main {\n  max-width: var(--max-width);\n  margin-inline: auto;\n  justify-content: space-between;\n}\nmain {\n  margin-block-start: 2rem;\n  background-color: #d9d9d9;\n  width: var(--max-width);\n  margin-inline: auto;\n  padding: 1.5rem;\n  display: grid;\n  grid-template-rows: repeat(4, auto);\n}\n.above_main {\n  margin-block-end: 0.8rem;\n  width: var(--max-width);\n}\n\n.stats {\n  background-color: var(--light);\n  border-radius: 5px;\n  padding: 0.5em 1em;\n}\n.stats p:not(:last-child) {\n  margin-block-end: 0.25em;\n}\n.hint_button {\n  background: linear-gradient(90deg, #b0b4ff 2.71%, #dfb7ff 100%);\n  border-radius: 25px;\n  font-size: 1.5rem;\n  padding: 0.35em 1.25em;\n}\n.hint_button:hover {\n  background: linear-gradient(90deg, #bec1fc 2.71%, #e3c5fb 100%);\n  border: 1px solid var(--primary-dark);\n}\n.main_top {\n  justify-content: space-between;\n  margin-inline: auto;\n  width: 90%;\n}\n.stopwatch {\n  font-size: 1.5rem;\n  background-color: var(--secondary);\n  border-radius: 50%;\n  padding: 1em;\n}\n.date {\n  flex-direction: column;\n}\n.date_value {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 2.25rem;\n  user-select: none;\n  -moz-user-select: none;\n}\n.date_format {\n  font-size: 1rem;\n}\n.options {\n  grid-row-start: -2;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  place-content: center;\n  gap: 1.5rem 5rem;\n}\n.day:nth-child(7) {\n  grid-column-start: 2;\n}\n.day {\n  padding: 0.65em 1.15em;\n  border-radius: 5px;\n  background: #f7e9ff;\n  font-family: \"Inter\";\n  font-weight: 500;\n  font-size: 1.25rem;\n  text-align: center;\n}\nbutton.incorrect {\n  background-color: var(--incorrect);\n  color: white;\n}\n.main_bottom {\n  justify-self: center;\n  display: flex;\n  width: 90%;\n  justify-content: space-between;\n  padding-inline: 2rem;\n}\n.solution,\n.continue {\n  font-size: 1.25rem;\n}\n.continue {\n  background: var(--primary-dark);\n  color: white;\n  padding: 0.5em 1em;\n  border-radius: 5px;\n  gap: 0.65rem;\n}\n.continue:hover {\n  translate: 0.3em;\n}\n.solution_button {\n  padding: 0.25em 1em;\n  border: 2px solid var(--primary-dark);\n  border-radius: 5px;\n}\n.solution_button:hover {\n  background: white;\n}\n.solutionDisplay {\n  display: inline-block;\n  margin-inline-start: 1rem;\n}\n.continue > img {\n  width: 1em;\n}\n.main_hint {\n  margin-block: 2rem;\n}\n.hint_values {\n  color: var(--primary);\n  font-weight: 500;\n}\n@media screen and (max-width: 500px) {\n  .options {\n    grid-template-columns: repeat(2, auto);\n    gap: 1.5rem;\n    width: min-content;\n    margin-inline: auto;\n  }\n  .day:nth-child(7) {\n    grid-column-start: 1;\n  }\n  .main_bottom {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media screen and (max-width: 600px) {\n  .continue,\n  .solution {\n    font-size: 1rem;\n    margin-top: 1rem;\n    width: min-content;\n    white-space: nowrap;\n  }\n  .main_top {\n    width: 100%;\n  }\n\n  .date_value {\n    font-size: 1.6rem;\n  }\n  .stopwatch {\n    font-size: 1.25rem;\n    padding: 0.75em;\n  }\n  .settings_button > img {\n    width: 48px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Poppins:wght@600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: #009e82;\n  --primary-dark: #00261f;\n  --secondary: #f0932a;\n  --accent-one: #b0b4ff;\n  --accent-two: #dfb7ff;\n  --incorrect: #ff1c1c;\n  --light: #f7e9ff;\n  --dark: #333333;\n  --max-width: min(960px, 90%);\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  font-family: \"Inter\";\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.25rem;\n}\n::selection {\n  background-color: var(--secondary);\n  color: black;\n}\n::-moz-selection {\n  background-color: var(--secondary);\n  color: black;\n}\nh1,\nh2,\nh3 {\n  font-family: \"Poppins\";\n}\nh1 {\n  text-align: center;\n  line-height: 1.2;\n  font-size: clamp(1.375rem, 1.711vw + 0.947rem, 3rem);\n}\n\nbutton {\n  font: inherit;\n  all: unset;\n  cursor: pointer;\n  transition: translate 0.3s ease-out;\n}\nbutton:hover {\n  translate: 0.1em 0.1em;\n}\nbutton:focus-visible,\na:focus-visible {\n  outline: 2px dashed var(--primary-dark);\n}\na {\n  text-decoration: none;\n  color: black;\n  opacity: 0.85;\n}\na:hover {\n  text-decoration: 3px solid underline;\n  opacity: 1;\n}\nul {\n  list-style: none;\n}\nheader {\n  margin-block-end: 1.1rem;\n}\nfooter {\n  background-color: var(--primary-dark);\n  color: white;\n  padding-block: 1em;\n  margin-block-start: 1.1rem;\n}\nimg {\n  user-select: none;\n}\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.container {\n  flex: 1 0 auto;\n}\n.hidden {\n  visibility: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,oBAAoB;EACpB,gBAAgB;EAChB,eAAe;EACf,4BAA4B;AAC9B;AACA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;AACA;EACE,YAAY;AACd;AACA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,kCAAkC;EAClC,YAAY;AACd;AACA;EACE,kCAAkC;EAClC,YAAY;AACd;AACA;;;EAGE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,oDAAoD;AACtD;;AAEA;EACE,aAAa;EACb,UAAU;EACV,eAAe;EACf,mCAAmC;AACrC;AACA;EACE,sBAAsB;AACxB;AACA;;EAEE,uCAAuC;AACzC;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;AACf;AACA;EACE,oCAAoC;EACpC,UAAU;AACZ;AACA;EACE,gBAAgB;AAClB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qCAAqC;EACrC,YAAY;EACZ,kBAAkB;EAClB,0BAA0B;AAC5B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Poppins:wght@600&display=swap\");\n:root {\n  --primary: #009e82;\n  --primary-dark: #00261f;\n  --secondary: #f0932a;\n  --accent-one: #b0b4ff;\n  --accent-two: #dfb7ff;\n  --incorrect: #ff1c1c;\n  --light: #f7e9ff;\n  --dark: #333333;\n  --max-width: min(960px, 90%);\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  font-family: \"Inter\";\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.25rem;\n}\n::selection {\n  background-color: var(--secondary);\n  color: black;\n}\n::-moz-selection {\n  background-color: var(--secondary);\n  color: black;\n}\nh1,\nh2,\nh3 {\n  font-family: \"Poppins\";\n}\nh1 {\n  text-align: center;\n  line-height: 1.2;\n  font-size: clamp(1.375rem, 1.711vw + 0.947rem, 3rem);\n}\n\nbutton {\n  font: inherit;\n  all: unset;\n  cursor: pointer;\n  transition: translate 0.3s ease-out;\n}\nbutton:hover {\n  translate: 0.1em 0.1em;\n}\nbutton:focus-visible,\na:focus-visible {\n  outline: 2px dashed var(--primary-dark);\n}\na {\n  text-decoration: none;\n  color: black;\n  opacity: 0.85;\n}\na:hover {\n  text-decoration: 3px solid underline;\n  opacity: 1;\n}\nul {\n  list-style: none;\n}\nheader {\n  margin-block-end: 1.1rem;\n}\nfooter {\n  background-color: var(--primary-dark);\n  color: white;\n  padding-block: 1em;\n  margin-block-start: 1.1rem;\n}\nimg {\n  user-select: none;\n}\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.container {\n  flex: 1 0 auto;\n}\n.hidden {\n  visibility: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/index.css":
/*!******************************!*\
  !*** ./src/assets/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/continue.svg":
/*!*********************************!*\
  !*** ./src/assets/continue.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "continue.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/settings.svg":
/*!*********************************!*\
  !*** ./src/assets/settings.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "settings.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "dist";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/index.css */ "./src/assets/index.css");
/* harmony import */ var _assets_settings_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/settings.svg */ "./src/assets/settings.svg");
/* harmony import */ var _assets_continue_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/continue.svg */ "./src/assets/continue.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");






let score = 0;
let streak = 0;
let totalTime = 0;
let avgTime = 0;
let tries = 0;
let avgTries = 0;
const dateValue = document.querySelector(".date_value");
const dayButtons = document.querySelectorAll(".day");
const continueBtn = document.querySelector(".continue");
const avgTimeDisplay = document.querySelector(".average_value");
const scoreDisplay = document.querySelector(".score_value");
const streakDisplay = document.querySelector(".streak_value");
const averageDisplay = document.querySelector(".average_value");
const solutionButton = document.querySelector(".solution_button");
const hintButton = document.querySelector(".hint_button");
const hintDisplay = document.querySelector(".main_hint");
const solutionDisplay = document.querySelector(".solution_display");
const hintOneDisplay = document.querySelector(".hint_one_value");
const hintTwoDisplay = document.querySelector(".hint_two_value");
const hintThreeDisplay = document.querySelector(".hint_three_value");
const hintCenturyDisplay = document.querySelector(".hint_century");
const hintYearDisplay = document.querySelector(".hint_year");
const stopwatchDisplay = document.querySelector(".stopwatch_value");
const doomsdaysMap = new Map([
  ["January", 3],
  ["February", 28],
  ["March", 14],
  ["April", 4],
  ["May", 9],
  ["June", 6],
  ["July", 11],
  ["August", 8],
  ["September", 5],
  ["October", 10],
  ["November", 7],
  ["December", 12],
]);
const isLeap = (year) => {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};
const GetValues = () => {
  let randomDate = getRandomDate(1800, 2100);
  let weekday = getWeekday(randomDate);
  function getRandomDate(startYear, endYear) {
    let year =
      Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    let month = Math.floor(Math.random() * 12) + 1;
    month = month < 10 ? `0${month}` : month;
    let daysInMonth = new Date(year, month, 0).getDate();
    let day = Math.floor(Math.random() * daysInMonth) + 1;
    day = day < 10 ? `0${day}` : day;
    return day + "-" + month + "-" + year;
  }

  function getWeekday(date) {
    let [day, month, year] = date.split("-");
    let dateObj = new Date(year, month - 1, day);
    let weekdayIndex = dateObj.getDay();
    return weekdayIndex;
  }
  dateValue.innerText = randomDate;
  return { randomDate, weekday };
};
let Values = GetValues();

continueBtn.addEventListener("click", next);

dayButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleChoice(e.target.dataset.value);
  });
});
hintButton.addEventListener("click", giveHint);
solutionButton.addEventListener("click", () => {
  solutionDisplay.innerHTML = Values.weekday;
  solutionDisplay.classList.toggle("hidden");
});
function handleChoice(answer) {
  tries += 1;
  e = document.querySelector(`[data-value="${answer}"]`);
  if (
    answer == Values.weekday &&
    solutionDisplay.classList.contains("hidden")
  ) {
    score += 1;
    streak += 1;
  } else {
    e.classList.add("incorrect");
    streak = 0;
  }
  if (tries > 1) {
    streak = 0;
  }
  scoreDisplay.innerText = score;
  streakDisplay.innerText = streak;

  if (answer == Values.weekday) {
    next();
    tries = 0;
  }
}
function next() {
  stopTimer();
  hintDisplay.classList.add("hidden");
  Values = GetValues();
  solutionDisplay.classList.add("hidden");
  dayButtons.forEach((btn) => {
    btn.classList.remove("incorrect");
  });
  startTimer();
}
function giveHint() {
  let date = Values.randomDate;
  let [day, month, year] = date.split("-");
  let century = Math.floor(year / 100);
  hintCenturyDisplay.innerText = century * 100;
  hintYearDisplay.innerText = year;
  if (isLeap(year)) {
    doomsdaysMap.set("January", 4).set("February", 29);
  }
  let date2 = new Date();
  date2.setMonth(month - 1);
  let monthName = date2.toLocaleString("default", { month: "long" });
  console.log("monthName", monthName);
  let closestDoomsday = doomsdaysMap.get(monthName);
  console.log(closestDoomsday);
  let yearLastTwo = year - century * 100;
  let centuryAnchor;
  switch (century) {
    case 18: {
      centuryAnchor = 5;
      break;
    }
    case 19: {
      centuryAnchor = 3;
      break;
    }
    case 20: {
      centuryAnchor = 2;
      break;
    }
    default:
      console.log(0);
      break;
  }
  hintOneDisplay.innerText = `T = ${century} => ${centuryAnchor}`;

  let addOne = yearLastTwo % 2 == 0 ? "" : "+ 11";
  yearLastTwo = yearLastTwo % 2 == 0 ? yearLastTwo : yearLastTwo + 11;
  let yearHalf = yearLastTwo / 2;
  let addTwo = yearHalf % 2 == 0 ? "" : "+ 11";
  let yearHalfAfter = yearHalf % 2 == 0 ? yearHalf : yearHalf + 11;
  hintTwoDisplay.innerText = `${year} ${addOne} / 2 => ${yearHalf} ${addTwo} => ${yearHalfAfter} % 7 => ${
    yearHalfAfter % 7
  } => 7 - ${yearHalfAfter % 7} => ${
    7 - (yearHalfAfter % 7)
  } + ${centuryAnchor} => T = ${centuryAnchor + (7 - (yearHalfAfter % 7))}`;
  let final =
    parseInt(day, 10) -
    closestDoomsday +
    (centuryAnchor + (7 - (yearHalfAfter % 7)));
  final = final < 0 ? 7 - final : final;
  hintThreeDisplay.innerText = `${closestDoomsday} => ${day} - ${closestDoomsday} = ${
    day - closestDoomsday
  } + T = ${final} % 7 => ${final % 7}`;
  hintDisplay.classList.toggle("hidden");
}
document.addEventListener("keydown", (event) => {
  if (event.key in ["0", "1", "2", "3", "4", "5", "6"]) handleChoice(event.key);
});

let startTime;
let elapsedTime = 0;
let timer;

function startTimer() {
  startTime = new Date().getTime();
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
  let endTime = new Date().getTime();
  elapsedTime = parseInt((endTime - startTime) / 1000, 10);
  totalTime += elapsedTime;
  stopwatchDisplay.innerHTML = "00s";
  avgTime = score == 0 ? elapsedTime : Math.floor(totalTime / score);
  averageDisplay.innerText = `${avgTime}s`;
}

function updateTimer() {
  let currentTime = new Date().getTime();
  elapsedTime = parseInt((currentTime - startTime) / 1000, 10);
  stopwatchDisplay.innerHTML = elapsedTime + "s";
}
startTimer();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtDLGlCQUFpQixLQUFLLEtBQUssSUFBSSxpQkFBaUI7QUFDbEY7QUFDQSxJQUFJLFFBQVEsT0FBTyxTQUFTLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZWtkYXkvLi9zcmMvYXNzZXRzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWVrZGF5Ly4vc3JjL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2Vla2RheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2Vla2RheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlZWtkYXkvLi9zcmMvYXNzZXRzL2luZGV4LmNzcz85NDkzIiwid2VicGFjazovL3dlZWtkYXkvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL3dlZWtkYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2Vla2RheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2Vla2RheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWVrZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlZWtkYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWVrZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2Vla2RheS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWVrZGF5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlZWtkYXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlZWtkYXkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWVrZGF5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2Vla2RheS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWVrZGF5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWVrZGF5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnRvcF9iYXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwJTtcXG4gIHBhZGRpbmctYmxvY2s6IDAuNjVyZW07XFxufVxcblxcbi50b3BfYmFyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcbi50b3BfYmFyIHVsIGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcbi5hYm92ZV9tYWluIHtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbm1haW4ge1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcXG4gIHdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBhdXRvKTtcXG59XFxuLmFib3ZlX21haW4ge1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC44cmVtO1xcbiAgd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XFxufVxcblxcbi5zdGF0cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxufVxcbi5zdGF0cyBwOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC4yNWVtO1xcbn1cXG4uaGludF9idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYjBiNGZmIDIuNzElLCAjZGZiN2ZmIDEwMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMC4zNWVtIDEuMjVlbTtcXG59XFxuLmhpbnRfYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2JlYzFmYyAyLjcxJSwgI2UzYzVmYiAxMDAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcbi5tYWluX3RvcCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLnN0b3B3YXRjaCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbi5kYXRlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5kYXRlX3ZhbHVlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5kYXRlX2Zvcm1hdCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5vcHRpb25zIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAtMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtIDVyZW07XFxufVxcbi5kYXk6bnRoLWNoaWxkKDcpIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbn1cXG4uZGF5IHtcXG4gIHBhZGRpbmc6IDAuNjVlbSAxLjE1ZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjdlOWZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5idXR0b24uaW5jb3JyZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluY29ycmVjdCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5tYWluX2JvdHRvbSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1pbmxpbmU6IDJyZW07XFxufVxcbi5zb2x1dGlvbixcXG4uY29udGludWUge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uY29udGludWUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdhcDogMC42NXJlbTtcXG59XFxuLmNvbnRpbnVlOmhvdmVyIHtcXG4gIHRyYW5zbGF0ZTogMC4zZW07XFxufVxcbi5zb2x1dGlvbl9idXR0b24ge1xcbiAgcGFkZGluZzogMC4yNWVtIDFlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZGFyayk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5zb2x1dGlvbl9idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbi5zb2x1dGlvbkRpc3BsYXkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMXJlbTtcXG59XFxuLmNvbnRpbnVlID4gaW1nIHtcXG4gIHdpZHRoOiAxZW07XFxufVxcbi5tYWluX2hpbnQge1xcbiAgbWFyZ2luLWJsb2NrOiAycmVtO1xcbn1cXG4uaGludF92YWx1ZXMge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5vcHRpb25zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICB9XFxuICAuZGF5Om50aC1jaGlsZCg3KSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgfVxcbiAgLm1haW5fYm90dG9tIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jb250aW51ZSxcXG4gIC5zb2x1dGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfVxcbiAgLm1haW5fdG9wIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZGF0ZV92YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcbiAgLnN0b3B3YXRjaCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMC43NWVtO1xcbiAgfVxcbiAgLnNldHRpbmdzX2J1dHRvbiA+IGltZyB7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSwrREFBK0Q7RUFDL0QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLCtEQUErRDtFQUMvRCxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7SUFDRSxzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTs7SUFFRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi50b3BfYmFyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctaW5saW5lOiAyMCU7XFxuICBwYWRkaW5nLWJsb2NrOiAwLjY1cmVtO1xcbn1cXG5cXG4udG9wX2JhciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4udG9wX2JhciB1bCBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG4uYWJvdmVfbWFpbiB7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5tYWluIHtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XFxuICB3aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XFxufVxcbi5hYm92ZV9tYWluIHtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuOHJlbTtcXG4gIHdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbn1cXG5cXG4uc3RhdHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbn1cXG4uc3RhdHMgcDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuMjVlbTtcXG59XFxuLmhpbnRfYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2IwYjRmZiAyLjcxJSwgI2RmYjdmZiAxMDAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAuMzVlbSAxLjI1ZW07XFxufVxcbi5oaW50X2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNiZWMxZmMgMi43MSUsICNlM2M1ZmIgMTAwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG4ubWFpbl90b3Age1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi5zdG9wd2F0Y2gge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4uZGF0ZSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZGF0ZV92YWx1ZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uZGF0ZV9mb3JtYXQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4ub3B0aW9ucyB7XFxuICBncmlkLXJvdy1zdGFydDogLTI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbSA1cmVtO1xcbn1cXG4uZGF5Om50aC1jaGlsZCg3KSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG59XFxuLmRheSB7XFxuICBwYWRkaW5nOiAwLjY1ZW0gMS4xNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogI2Y3ZTlmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuYnV0dG9uLmluY29ycmVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmNvcnJlY3QpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubWFpbl9ib3R0b20ge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctaW5saW5lOiAycmVtO1xcbn1cXG4uc29sdXRpb24sXFxuLmNvbnRpbnVlIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmNvbnRpbnVlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBnYXA6IDAuNjVyZW07XFxufVxcbi5jb250aW51ZTpob3ZlciB7XFxuICB0cmFuc2xhdGU6IDAuM2VtO1xcbn1cXG4uc29sdXRpb25fYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuMjVlbSAxZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc29sdXRpb25fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG4uc29sdXRpb25EaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFyZW07XFxufVxcbi5jb250aW51ZSA+IGltZyB7XFxuICB3aWR0aDogMWVtO1xcbn1cXG4ubWFpbl9oaW50IHtcXG4gIG1hcmdpbi1ibG9jazogMnJlbTtcXG59XFxuLmhpbnRfdmFsdWVzIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAub3B0aW9ucyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgfVxcbiAgLmRheTpudGgtY2hpbGQoNykge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIH1cXG4gIC5tYWluX2JvdHRvbSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY29udGludWUsXFxuICAuc29sdXRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH1cXG4gIC5tYWluX3RvcCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmRhdGVfdmFsdWUge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gIH1cXG4gIC5zdG9wd2F0Y2gge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNzVlbTtcXG4gIH1cXG4gIC5zZXR0aW5nc19idXR0b24gPiBpbWcge1xcbiAgICB3aWR0aDogNDhweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnk6ICMwMDllODI7XFxuICAtLXByaW1hcnktZGFyazogIzAwMjYxZjtcXG4gIC0tc2Vjb25kYXJ5OiAjZjA5MzJhO1xcbiAgLS1hY2NlbnQtb25lOiAjYjBiNGZmO1xcbiAgLS1hY2NlbnQtdHdvOiAjZGZiN2ZmO1xcbiAgLS1pbmNvcnJlY3Q6ICNmZjFjMWM7XFxuICAtLWxpZ2h0OiAjZjdlOWZmO1xcbiAgLS1kYXJrOiAjMzMzMzMzO1xcbiAgLS1tYXgtd2lkdGg6IG1pbig5NjBweCwgOTAlKTtcXG59XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbjo6LW1vei1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXG59XFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4zNzVyZW0sIDEuNzExdncgKyAwLjk0N3JlbSwgM3JlbSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgYWxsOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zbGF0ZSAwLjNzIGVhc2Utb3V0O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNsYXRlOiAwLjFlbSAwLjFlbTtcXG59XFxuYnV0dG9uOmZvY3VzLXZpc2libGUsXFxuYTpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogM3B4IHNvbGlkIHVuZGVybGluZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmhlYWRlciB7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAxLjFyZW07XFxufVxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1ibG9jazogMWVtO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxLjFyZW07XFxufVxcbmltZyB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDtBQUNBOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG46cm9vdCB7XFxuICAtLXByaW1hcnk6ICMwMDllODI7XFxuICAtLXByaW1hcnktZGFyazogIzAwMjYxZjtcXG4gIC0tc2Vjb25kYXJ5OiAjZjA5MzJhO1xcbiAgLS1hY2NlbnQtb25lOiAjYjBiNGZmO1xcbiAgLS1hY2NlbnQtdHdvOiAjZGZiN2ZmO1xcbiAgLS1pbmNvcnJlY3Q6ICNmZjFjMWM7XFxuICAtLWxpZ2h0OiAjZjdlOWZmO1xcbiAgLS1kYXJrOiAjMzMzMzMzO1xcbiAgLS1tYXgtd2lkdGg6IG1pbig5NjBweCwgOTAlKTtcXG59XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbjo6LW1vei1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXG59XFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4zNzVyZW0sIDEuNzExdncgKyAwLjk0N3JlbSwgM3JlbSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgYWxsOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zbGF0ZSAwLjNzIGVhc2Utb3V0O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNsYXRlOiAwLjFlbSAwLjFlbTtcXG59XFxuYnV0dG9uOmZvY3VzLXZpc2libGUsXFxuYTpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogM3B4IHNvbGlkIHVuZGVybGluZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmhlYWRlciB7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAxLjFyZW07XFxufVxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1ibG9jazogMWVtO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxLjFyZW07XFxufVxcbmltZyB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3RcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9zZXR0aW5ncy5zdmdcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2NvbnRpbnVlLnN2Z1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvbG9nby5zdmdcIjtcblxubGV0IHNjb3JlID0gMDtcbmxldCBzdHJlYWsgPSAwO1xubGV0IHRvdGFsVGltZSA9IDA7XG5sZXQgYXZnVGltZSA9IDA7XG5sZXQgdHJpZXMgPSAwO1xubGV0IGF2Z1RyaWVzID0gMDtcbmNvbnN0IGRhdGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZV92YWx1ZVwiKTtcbmNvbnN0IGRheUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRheVwiKTtcbmNvbnN0IGNvbnRpbnVlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250aW51ZVwiKTtcbmNvbnN0IGF2Z1RpbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdmVyYWdlX3ZhbHVlXCIpO1xuY29uc3Qgc2NvcmVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZV92YWx1ZVwiKTtcbmNvbnN0IHN0cmVha0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0cmVha192YWx1ZVwiKTtcbmNvbnN0IGF2ZXJhZ2VEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdmVyYWdlX3ZhbHVlXCIpO1xuY29uc3Qgc29sdXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvbHV0aW9uX2J1dHRvblwiKTtcbmNvbnN0IGhpbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpbnRfYnV0dG9uXCIpO1xuY29uc3QgaGludERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5faGludFwiKTtcbmNvbnN0IHNvbHV0aW9uRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29sdXRpb25fZGlzcGxheVwiKTtcbmNvbnN0IGhpbnRPbmVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaW50X29uZV92YWx1ZVwiKTtcbmNvbnN0IGhpbnRUd29EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaW50X3R3b192YWx1ZVwiKTtcbmNvbnN0IGhpbnRUaHJlZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpbnRfdGhyZWVfdmFsdWVcIik7XG5jb25zdCBoaW50Q2VudHVyeURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpbnRfY2VudHVyeVwiKTtcbmNvbnN0IGhpbnRZZWFyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGludF95ZWFyXCIpO1xuY29uc3Qgc3RvcHdhdGNoRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RvcHdhdGNoX3ZhbHVlXCIpO1xuY29uc3QgZG9vbXNkYXlzTWFwID0gbmV3IE1hcChbXG4gIFtcIkphbnVhcnlcIiwgM10sXG4gIFtcIkZlYnJ1YXJ5XCIsIDI4XSxcbiAgW1wiTWFyY2hcIiwgMTRdLFxuICBbXCJBcHJpbFwiLCA0XSxcbiAgW1wiTWF5XCIsIDldLFxuICBbXCJKdW5lXCIsIDZdLFxuICBbXCJKdWx5XCIsIDExXSxcbiAgW1wiQXVndXN0XCIsIDhdLFxuICBbXCJTZXB0ZW1iZXJcIiwgNV0sXG4gIFtcIk9jdG9iZXJcIiwgMTBdLFxuICBbXCJOb3ZlbWJlclwiLCA3XSxcbiAgW1wiRGVjZW1iZXJcIiwgMTJdLFxuXSk7XG5jb25zdCBpc0xlYXAgPSAoeWVhcikgPT4ge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCk7XG59O1xuY29uc3QgR2V0VmFsdWVzID0gKCkgPT4ge1xuICBsZXQgcmFuZG9tRGF0ZSA9IGdldFJhbmRvbURhdGUoMTgwMCwgMjEwMCk7XG4gIGxldCB3ZWVrZGF5ID0gZ2V0V2Vla2RheShyYW5kb21EYXRlKTtcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tRGF0ZShzdGFydFllYXIsIGVuZFllYXIpIHtcbiAgICBsZXQgeWVhciA9XG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWWVhciAtIHN0YXJ0WWVhciArIDEpKSArIHN0YXJ0WWVhcjtcbiAgICBsZXQgbW9udGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMikgKyAxO1xuICAgIG1vbnRoID0gbW9udGggPCAxMCA/IGAwJHttb250aH1gIDogbW9udGg7XG4gICAgbGV0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICBsZXQgZGF5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF5c0luTW9udGgpICsgMTtcbiAgICBkYXkgPSBkYXkgPCAxMCA/IGAwJHtkYXl9YCA6IGRheTtcbiAgICByZXR1cm4gZGF5ICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgeWVhcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdlZWtkYXkoZGF0ZSkge1xuICAgIGxldCBbZGF5LCBtb250aCwgeWVhcl0gPSBkYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBsZXQgZGF0ZU9iaiA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbiAgICBsZXQgd2Vla2RheUluZGV4ID0gZGF0ZU9iai5nZXREYXkoKTtcbiAgICByZXR1cm4gd2Vla2RheUluZGV4O1xuICB9XG4gIGRhdGVWYWx1ZS5pbm5lclRleHQgPSByYW5kb21EYXRlO1xuICByZXR1cm4geyByYW5kb21EYXRlLCB3ZWVrZGF5IH07XG59O1xubGV0IFZhbHVlcyA9IEdldFZhbHVlcygpO1xuXG5jb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dCk7XG5cbmRheUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBoYW5kbGVDaG9pY2UoZS50YXJnZXQuZGF0YXNldC52YWx1ZSk7XG4gIH0pO1xufSk7XG5oaW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnaXZlSGludCk7XG5zb2x1dGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzb2x1dGlvbkRpc3BsYXkuaW5uZXJIVE1MID0gVmFsdWVzLndlZWtkYXk7XG4gIHNvbHV0aW9uRGlzcGxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5mdW5jdGlvbiBoYW5kbGVDaG9pY2UoYW5zd2VyKSB7XG4gIHRyaWVzICs9IDE7XG4gIGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS12YWx1ZT1cIiR7YW5zd2VyfVwiXWApO1xuICBpZiAoXG4gICAgYW5zd2VyID09IFZhbHVlcy53ZWVrZGF5ICYmXG4gICAgc29sdXRpb25EaXNwbGF5LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKVxuICApIHtcbiAgICBzY29yZSArPSAxO1xuICAgIHN0cmVhayArPSAxO1xuICB9IGVsc2Uge1xuICAgIGUuY2xhc3NMaXN0LmFkZChcImluY29ycmVjdFwiKTtcbiAgICBzdHJlYWsgPSAwO1xuICB9XG4gIGlmICh0cmllcyA+IDEpIHtcbiAgICBzdHJlYWsgPSAwO1xuICB9XG4gIHNjb3JlRGlzcGxheS5pbm5lclRleHQgPSBzY29yZTtcbiAgc3RyZWFrRGlzcGxheS5pbm5lclRleHQgPSBzdHJlYWs7XG5cbiAgaWYgKGFuc3dlciA9PSBWYWx1ZXMud2Vla2RheSkge1xuICAgIG5leHQoKTtcbiAgICB0cmllcyA9IDA7XG4gIH1cbn1cbmZ1bmN0aW9uIG5leHQoKSB7XG4gIHN0b3BUaW1lcigpO1xuICBoaW50RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBWYWx1ZXMgPSBHZXRWYWx1ZXMoKTtcbiAgc29sdXRpb25EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGRheUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmNvcnJlY3RcIik7XG4gIH0pO1xuICBzdGFydFRpbWVyKCk7XG59XG5mdW5jdGlvbiBnaXZlSGludCgpIHtcbiAgbGV0IGRhdGUgPSBWYWx1ZXMucmFuZG9tRGF0ZTtcbiAgbGV0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICBsZXQgY2VudHVyeSA9IE1hdGguZmxvb3IoeWVhciAvIDEwMCk7XG4gIGhpbnRDZW50dXJ5RGlzcGxheS5pbm5lclRleHQgPSBjZW50dXJ5ICogMTAwO1xuICBoaW50WWVhckRpc3BsYXkuaW5uZXJUZXh0ID0geWVhcjtcbiAgaWYgKGlzTGVhcCh5ZWFyKSkge1xuICAgIGRvb21zZGF5c01hcC5zZXQoXCJKYW51YXJ5XCIsIDQpLnNldChcIkZlYnJ1YXJ5XCIsIDI5KTtcbiAgfVxuICBsZXQgZGF0ZTIgPSBuZXcgRGF0ZSgpO1xuICBkYXRlMi5zZXRNb250aChtb250aCAtIDEpO1xuICBsZXQgbW9udGhOYW1lID0gZGF0ZTIudG9Mb2NhbGVTdHJpbmcoXCJkZWZhdWx0XCIsIHsgbW9udGg6IFwibG9uZ1wiIH0pO1xuICBjb25zb2xlLmxvZyhcIm1vbnRoTmFtZVwiLCBtb250aE5hbWUpO1xuICBsZXQgY2xvc2VzdERvb21zZGF5ID0gZG9vbXNkYXlzTWFwLmdldChtb250aE5hbWUpO1xuICBjb25zb2xlLmxvZyhjbG9zZXN0RG9vbXNkYXkpO1xuICBsZXQgeWVhckxhc3RUd28gPSB5ZWFyIC0gY2VudHVyeSAqIDEwMDtcbiAgbGV0IGNlbnR1cnlBbmNob3I7XG4gIHN3aXRjaCAoY2VudHVyeSkge1xuICAgIGNhc2UgMTg6IHtcbiAgICAgIGNlbnR1cnlBbmNob3IgPSA1O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgMTk6IHtcbiAgICAgIGNlbnR1cnlBbmNob3IgPSAzO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgMjA6IHtcbiAgICAgIGNlbnR1cnlBbmNob3IgPSAyO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZygwKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGhpbnRPbmVEaXNwbGF5LmlubmVyVGV4dCA9IGBUID0gJHtjZW50dXJ5fSA9PiAke2NlbnR1cnlBbmNob3J9YDtcblxuICBsZXQgYWRkT25lID0geWVhckxhc3RUd28gJSAyID09IDAgPyBcIlwiIDogXCIrIDExXCI7XG4gIHllYXJMYXN0VHdvID0geWVhckxhc3RUd28gJSAyID09IDAgPyB5ZWFyTGFzdFR3byA6IHllYXJMYXN0VHdvICsgMTE7XG4gIGxldCB5ZWFySGFsZiA9IHllYXJMYXN0VHdvIC8gMjtcbiAgbGV0IGFkZFR3byA9IHllYXJIYWxmICUgMiA9PSAwID8gXCJcIiA6IFwiKyAxMVwiO1xuICBsZXQgeWVhckhhbGZBZnRlciA9IHllYXJIYWxmICUgMiA9PSAwID8geWVhckhhbGYgOiB5ZWFySGFsZiArIDExO1xuICBoaW50VHdvRGlzcGxheS5pbm5lclRleHQgPSBgJHt5ZWFyfSAke2FkZE9uZX0gLyAyID0+ICR7eWVhckhhbGZ9ICR7YWRkVHdvfSA9PiAke3llYXJIYWxmQWZ0ZXJ9ICUgNyA9PiAke1xuICAgIHllYXJIYWxmQWZ0ZXIgJSA3XG4gIH0gPT4gNyAtICR7eWVhckhhbGZBZnRlciAlIDd9ID0+ICR7XG4gICAgNyAtICh5ZWFySGFsZkFmdGVyICUgNylcbiAgfSArICR7Y2VudHVyeUFuY2hvcn0gPT4gVCA9ICR7Y2VudHVyeUFuY2hvciArICg3IC0gKHllYXJIYWxmQWZ0ZXIgJSA3KSl9YDtcbiAgbGV0IGZpbmFsID1cbiAgICBwYXJzZUludChkYXksIDEwKSAtXG4gICAgY2xvc2VzdERvb21zZGF5ICtcbiAgICAoY2VudHVyeUFuY2hvciArICg3IC0gKHllYXJIYWxmQWZ0ZXIgJSA3KSkpO1xuICBmaW5hbCA9IGZpbmFsIDwgMCA/IDcgLSBmaW5hbCA6IGZpbmFsO1xuICBoaW50VGhyZWVEaXNwbGF5LmlubmVyVGV4dCA9IGAke2Nsb3Nlc3REb29tc2RheX0gPT4gJHtkYXl9IC0gJHtjbG9zZXN0RG9vbXNkYXl9ID0gJHtcbiAgICBkYXkgLSBjbG9zZXN0RG9vbXNkYXlcbiAgfSArIFQgPSAke2ZpbmFsfSAlIDcgPT4gJHtmaW5hbCAlIDd9YDtcbiAgaGludERpc3BsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5IGluIFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIl0pIGhhbmRsZUNob2ljZShldmVudC5rZXkpO1xufSk7XG5cbmxldCBzdGFydFRpbWU7XG5sZXQgZWxhcHNlZFRpbWUgPSAwO1xubGV0IHRpbWVyO1xuXG5mdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgdGltZXIgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG59XG5cbmZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIGxldCBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGVsYXBzZWRUaW1lID0gcGFyc2VJbnQoKGVuZFRpbWUgLSBzdGFydFRpbWUpIC8gMTAwMCwgMTApO1xuICB0b3RhbFRpbWUgKz0gZWxhcHNlZFRpbWU7XG4gIHN0b3B3YXRjaERpc3BsYXkuaW5uZXJIVE1MID0gXCIwMHNcIjtcbiAgYXZnVGltZSA9IHNjb3JlID09IDAgPyBlbGFwc2VkVGltZSA6IE1hdGguZmxvb3IodG90YWxUaW1lIC8gc2NvcmUpO1xuICBhdmVyYWdlRGlzcGxheS5pbm5lclRleHQgPSBgJHthdmdUaW1lfXNgO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcbiAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGVsYXBzZWRUaW1lID0gcGFyc2VJbnQoKGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lKSAvIDEwMDAsIDEwKTtcbiAgc3RvcHdhdGNoRGlzcGxheS5pbm5lckhUTUwgPSBlbGFwc2VkVGltZSArIFwic1wiO1xufVxuc3RhcnRUaW1lcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9