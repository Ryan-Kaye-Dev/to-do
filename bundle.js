/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/options.svg */ \"./src/icons/options.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/edit.svg */ \"./src/icons/edit.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/delete.svg */ \"./src/icons/delete.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Alata&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n:root {\r\n  font-family: \"Alata\", sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  margin-bottom: 1rem;\r\n  border-bottom: solid 2px #000;\r\n}\r\n\r\n.new-project-button,\r\n.new-todo-button {\r\n  display: block;\r\n  margin: 1rem auto;\r\n  padding: 0.25rem 1rem;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(135deg, #70f570 10%, #49c628 100%);\r\n  font-size: 1rem;\r\n  font-weight: 800;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.project,\r\n.todo {\r\n\r\n  padding: 5px;\r\n  margin-left: 5vw;\r\n  margin-right: 5vw;\r\n  margin-bottom: 2vh;\r\n  border: solid 2px #000;\r\n  border-radius: 5px;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.project:hover, .todo:hover {\r\n  background-color: rgba(13, 226, 13, 0.479);\r\n  cursor: pointer;\r\n}\r\n\r\n.project.selected {\r\n  background-color: rgba(41, 43, 41, 0.404);\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-description,\r\n.todo-description {\r\n  padding: 5px;\r\n  font-size: 0.85rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.project-form {\r\n  display: grid;\r\n  gap: 0.2rem;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n}\r\n\r\n.todo-form {\r\n  justify-content: center;\r\n  display: grid;\r\n  gap: 0.2rem;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n}\r\n\r\n.todo-form .form-title, \r\n.todo-form .form-description\r\n {\r\n  grid-column: 1 / span 4;\r\n}\r\n.todo-form .form-priority,\r\n.todo-form .form-due-date  {\r\n  grid-column: 1 / span 1;\r\n}\r\n\r\n.todo-form .form-submit-button {\r\n  grid-column: 1 / 2;\r\n  grid-row: 6 / span 1;\r\n}\r\n.todo-form .form-cancel-button {\r\n  grid-column: 1 / 2;\r\n  grid-row: 7 / span 1;\r\n}\r\n\r\n.form-header {\r\n  grid-column: 1 / span 2;\r\n}\r\n\r\n.form-title,\r\n.form-description {\r\n  grid-column: 1 / span 2;\r\n}\r\n\r\nform button {\r\n  border-radius: 2px;\r\n  border: solid 2px #000;\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  padding: 5px;\r\n  background-color: rgba(19, 173, 19, 0.904);\r\n  min-width: 10vw;\r\n  cursor: pointer;\r\n}\r\n\r\nform .form-cancel-button {\r\n  background-color: rgba(173, 19, 19, 0.904);\r\n}\r\n\r\n.todo {\r\n    display: grid;\r\n    grid-template-columns: minmax(5px, 1fr) minmax(10px, 1fr) minmax(50px, 1fr) minmax(50px, 0.1fr) minmax(1px, 0.1fr);\r\n    grid-template-rows: 1fr 1fr;\r\n  }\r\n  \r\n\r\n.todo-date {\r\n  grid-column: 3;\r\n  font-size: 0.75rem;\r\n  font-weight: 400;\r\n  border: solid 1px black;\r\n  border-radius: 2px;\r\n  align-self: center;\r\n  justify-self: flex-end;\r\n  padding: 2px;\r\n}\r\n\r\n.todo-description {\r\n  grid-column: 1 / span 2;\r\n  grid-row: 2;\r\n  font-size: 0.75rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.todo-priority {\r\n  grid-column: 3;\r\n  grid-row: 2;\r\n  font-size: 0.75rem;\r\n  font-weight: 400;\r\n  border: solid 1px black;\r\n  border-radius: 2px;\r\n  align-self: center;\r\n  justify-self: flex-end;\r\n  padding: 2px;\r\n}\r\n\r\n.edit-todo-button {\r\n  all: unset;\r\n  margin: 2px;\r\n  padding-left: 4px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-repeat: no-repeat;\r\n  justify-self: end;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-option {\r\n    \r\n    all: unset;\r\n    min-width: 20px;\r\n    min-height: 20px;\r\n    margin: 2px;\r\n    padding: 2px;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    background-size: 20px 20px;\r\n    background-repeat: no-repeat;\r\n    justify-self: end;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .delete-option {\r\n    all: unset;\r\n    min-width: 20px;\r\n    min-height: 20px;\r\n    background-size: 20px 20px;\r\n    margin: 2px;\r\n    padding: 2px;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n    background-repeat: no-repeat;\r\n    justify-self: end;\r\n    cursor: pointer;\r\n  }\r\n\r\n.drop-down-options {\r\n  grid-column: -1 / span 1;\r\n  grid-row: 1 / span 1;\r\n  min-width: 5vw;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n// Project.js\r\n\r\nclass Project {\r\n  constructor(title, description) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.todos = []; // Initialize todos as an empty array\r\n  }\r\n\r\n  addTodo(todo) {\r\n    this.todos.push(todo);\r\n    todo.project = this; // Associate the todo with this Project\r\n  }\r\n\r\n  showTodos() {\r\n    this.todos.forEach((todo) => {\r\n      console.log(todo.title);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/Project.js?");

/***/ }),

/***/ "./src/ToDo.js":
/*!*********************!*\
  !*** ./src/ToDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\n// ToDo.js\r\n\r\nclass ToDo {\r\n  constructor(title, description, dueDate, priority, project) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.project = project; // Store the project associated with the todo\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/ToDo.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewProjectButton: () => (/* binding */ createNewProjectButton),\n/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList),\n/* harmony export */   updateTodoList: () => (/* binding */ updateTodoList)\n/* harmony export */ });\n/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList.js */ \"./src/projectList.js\");\n/* harmony import */ var _todoForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoForm.js */ \"./src/todoForm.js\");\n/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDo.js */ \"./src/ToDo.js\");\n// dom.js\r\n\r\n\r\n\r\n\r\nfunction createNewProjectButton() {\r\n  const newProjectDiv = document.querySelector(\"#new-project\");\r\n  const newProjectButton = document.createElement(\"button\");\r\n  newProjectButton.classList.add(\"new-project-button\");\r\n  newProjectButton.textContent = \"+ New Project\";\r\n  newProjectDiv.appendChild(newProjectButton);\r\n  return newProjectButton;\r\n}\r\n\r\nfunction updateTodoList() {\r\n  const todoListDiv = document.querySelector(\"#todo-list\");\r\n  todoListDiv.innerHTML = \"\";\r\n\r\n  const todoHeader = document.createElement(\"h2\");\r\n  todoHeader.textContent = \"Todos\";\r\n  todoListDiv.appendChild(todoHeader);\r\n\r\n}\r\n\r\nfunction updateProjectList() {\r\n  const projectListDiv = document.querySelector(\"#project-list\");\r\n  projectListDiv.innerHTML = \"\";\r\n\r\n  const projectHeader = document.createElement(\"h2\");\r\n  projectHeader.textContent = \"Projects\";\r\n  projectListDiv.appendChild(projectHeader);\r\n\r\n  _projectList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project) => {\r\n    // Create a div for each project\r\n    const projectDiv = document.createElement(\"div\");\r\n    projectDiv.classList.add(\"project\");\r\n    projectDiv.textContent = project.title;\r\n    projectListDiv.appendChild(projectDiv);\r\n    projectDiv.addEventListener(\"click\", () => {\r\n      // Clear the todo list\r\n      const todoListDiv = document.querySelector(\"#todo-list\");\r\n      todoListDiv.innerHTML = \"\";\r\n\r\n      // Create a header for the todo list\r\n      const todoHeader = document.createElement(\"h2\");\r\n      todoHeader.textContent = \"Todos\";\r\n      todoListDiv.appendChild(todoHeader);\r\n\r\n      // Create a new todo button\r\n      const newTodoButton = document.createElement(\"button\");\r\n      newTodoButton.classList.add(\"new-todo-button\");\r\n      newTodoButton.textContent = \"+ New Todo\";\r\n      todoListDiv.appendChild(newTodoButton);\r\n      newTodoButton.addEventListener(\"click\", () => {\r\n        const { formSubmitButton, formCancelButton } = (0,_todoForm_js__WEBPACK_IMPORTED_MODULE_1__.createTodoForm)();\r\n          formSubmitButton.addEventListener(\"click\", function (event) {\r\n            event.preventDefault();\r\n            const formTitle = document.querySelector(\".form-title\");\r\n            const formDescription = document.querySelector(\".form-description\");\r\n            const formDueDate = document.querySelector(\".form-due-date\");\r\n            const formPriority = document.querySelector(\".form-priority\");\r\n            const newTodo = new _ToDo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n              formTitle.value,\r\n              formDescription.value,\r\n              formDueDate.value,\r\n              formPriority.value\r\n            );\r\n            project.todos.push(newTodo);\r\n            updateTodoList();\r\n          }, { once: true });\r\n      });\r\n\r\n      // Create a div for each todo\r\n      project.todos.forEach((todo) => {\r\n        const todoDiv = document.createElement(\"div\");\r\n        todoDiv.classList.add(\"todo\");\r\n        const todoTitle = document.createElement(\"h3\");\r\n        todoTitle.textContent = todo.title;\r\n        // Todo Description\r\n        const todoDescription = document.createElement(\"p\");\r\n        todoDescription.classList.add(\"todo-description\");\r\n        todoDescription.textContent = todo.description;\r\n        //Todo Date\r\n        const todoDate = document.createElement(\"p\");\r\n        todoDate.classList.add(\"todo-date\");\r\n        todoDate.textContent = `Due: ` + todo.dueDate;\r\n        // Todo Priority\r\n        const todoPriority = document.createElement(\"p\");\r\n        todoPriority.classList.add(\"todo-priority\");\r\n        todoPriority.textContent = todo.priority;\r\n        // Edit Todo Button\r\n        const editTodoButton = document.createElement(\"button\");\r\n        editTodoButton.classList.add(\"edit-todo-button\");\r\n\r\n        // Create the drop-down options container\r\n        const dropDownOptions = document.createElement(\"div\");\r\n        dropDownOptions.classList.add(\"drop-down-options\");\r\n        dropDownOptions.style.display = \"none\"; // initially hidden\r\n\r\n        // Create the \"Edit\" Option\r\n        const editOption = document.createElement(\"button\");\r\n        editOption.classList.add(\"edit-option\");\r\n        editOption.addEventListener(\"click\", () => {\r\n          // Perform the Edit Action\r\n          hideDropDownOptions(); // Hide the drop-down after the action\r\n        });\r\n\r\n        // Create the \"Delete\" Option\r\n        const deleteOption = document.createElement(\"button\");\r\n        deleteOption.classList.add(\"delete-option\");\r\n        deleteOption.addEventListener(\"click\", () => {\r\n          // Perform the Delete Action\r\n          hideDropDownOptions(); // Hide the drop-down after the action\r\n        });\r\n\r\n        // Append the options to the drop-down container\r\n        dropDownOptions.appendChild(editOption);\r\n        dropDownOptions.appendChild(deleteOption);\r\n        // Append the drop-down container to the todo div\r\n        todoDiv.appendChild(dropDownOptions);\r\n\r\n        //Add event listener to the editTodoButton\r\n        editTodoButton.addEventListener(\"click\", () => {\r\n          // Show the drop-down options\r\n          if (dropDownOptions.style.display === \"none\") {\r\n            dropDownOptions.style.display = \"\";\r\n          } else {\r\n            dropDownOptions.style.display = \"none\";\r\n          }\r\n        });\r\n\r\n        // Function to hide the drop-down options\r\n        function hideDropDownOptions() {\r\n          const dropdownOptions =\r\n            document.querySelectorAll(\".drop-down-options\");\r\n          dropdownOptions.forEach((options) => {\r\n            options.style.display = \"none\";\r\n          });\r\n        }\r\n\r\n        todoListDiv.appendChild(todoDiv);\r\n        todoDiv.appendChild(todoTitle);\r\n        todoDiv.appendChild(todoDescription);\r\n        todoDiv.appendChild(todoDate);\r\n        todoDiv.appendChild(todoPriority);\r\n        todoDiv.appendChild(editTodoButton);\r\n      });\r\n    });\r\n\r\n    // Create a description for each project\r\n    const projectDescription = document.createElement(\"p\");\r\n    projectDescription.classList.add(\"project-description\");\r\n    projectDescription.textContent = project.description;\r\n    projectDiv.appendChild(projectDescription);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _projectForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectForm.js */ \"./src/projectForm.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectList.js */ \"./src/projectList.js\");\n// index.js\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  const newProjectButton = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createNewProjectButton)();\r\n  newProjectButton.addEventListener(\"click\", function () {\r\n    const { formSubmitButton, formCancelButton } = (0,_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.createProjectForm)();\r\n\r\n    formSubmitButton.addEventListener(\"click\", function (event) {\r\n      event.preventDefault();\r\n      const formTitle = document.querySelector(\".form-title\");\r\n      const formDescription = document.querySelector(\".form-description\");\r\n      const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](formTitle.value, formDescription.value);\r\n      _projectList_js__WEBPACK_IMPORTED_MODULE_4__.projectList.push(newProject);\r\n      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)();\r\n    });\r\n  });\r\n\r\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)();\r\n});\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectForm: () => (/* binding */ createProjectForm)\n/* harmony export */ });\n// projectForm.js\r\n\r\nfunction createProjectForm() {\r\n\r\nconst content = document.querySelector('#content');\r\nconst projectListDiv = document.querySelector('#project-list');\r\n\r\nconst formContainer = document.createElement('div');\r\nformContainer.classList.add('form-container');\r\nformContainer.classList.add('project');\r\nprojectListDiv.appendChild(formContainer);\r\n\r\nconst form = document.createElement('form');\r\nform.classList.add('project-form');\r\nformContainer.appendChild(form);\r\n\r\nconst formHeader = document.createElement('h3');\r\nformHeader.classList.add('form-header');\r\nformHeader.textContent = 'New Project';\r\nform.appendChild(formHeader);\r\n\r\nconst formTitle = document.createElement('input');\r\nformTitle.classList.add('form-title');\r\nformTitle.setAttribute('type', 'text');\r\nformTitle.setAttribute('placeholder', 'Title');\r\nform.appendChild(formTitle);\r\n\r\nconst formDescription = document.createElement('input');\r\nformDescription.classList.add('form-description');\r\nformDescription.setAttribute('type', 'text');\r\nformDescription.setAttribute('placeholder', 'Description');\r\nform.appendChild(formDescription);\r\n\r\nconst formSubmitButton = document.createElement('button');\r\nformSubmitButton.classList.add('form-submit-button');\r\nformSubmitButton.textContent = 'ADD';\r\nform.appendChild(formSubmitButton);\r\n\r\nconst formCancelButton = document.createElement('button');\r\nformCancelButton.classList.add('form-cancel-button');\r\nformCancelButton.textContent = 'CANCEL';\r\nform.appendChild(formCancelButton);\r\n\r\n    return {\r\n        formSubmitButton,\r\n        formCancelButton,\r\n    };\r\n}\n\n//# sourceURL=webpack://todo/./src/projectForm.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ \"./src/todoList.js\");\n// projectList.js\r\n\r\n\r\nconst projectList = [_todoList_js__WEBPACK_IMPORTED_MODULE_0__.defaultProject];\r\n\n\n//# sourceURL=webpack://todo/./src/projectList.js?");

/***/ }),

/***/ "./src/todoForm.js":
/*!*************************!*\
  !*** ./src/todoForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoForm: () => (/* binding */ createTodoForm)\n/* harmony export */ });\n// TodoForm.js\r\n\r\nfunction createTodoForm() {\r\n\r\n    const content = document.querySelector('#content');\r\n    const todoListDiv = document.querySelector('#todo-list');\r\n    \r\n    const formContainer = document.createElement('div');\r\n    formContainer.classList.add('todo-form-container');\r\n\r\n    // Insert formContainer before the first .todo div\r\n    const firstTodoDiv = document.querySelector('.todo');\r\n    todoListDiv.insertBefore(formContainer, firstTodoDiv);\r\n    \r\n    const form = document.createElement('form');\r\n    form.classList.add('todo-form');\r\n    form.classList.add('todo');\r\n    formContainer.appendChild(form);\r\n    \r\n    const formHeader = document.createElement('h3');\r\n    formHeader.classList.add('form-header');\r\n    formHeader.textContent = 'New Todo';\r\n    form.appendChild(formHeader);\r\n    \r\n    const formTitle = document.createElement('input');\r\n    formTitle.classList.add('form-title');\r\n    formTitle.setAttribute('type', 'text');\r\n    formTitle.setAttribute('placeholder', 'Title');\r\n    form.appendChild(formTitle);\r\n    \r\n    const formDescription = document.createElement('input');\r\n    formDescription.classList.add('form-description');\r\n    formDescription.setAttribute('type', 'text');\r\n    formDescription.setAttribute('placeholder', 'Description');\r\n    form.appendChild(formDescription);\r\n\r\n    const formDueDate = document.createElement('input');\r\n    formDueDate.classList.add('form-due-date');\r\n    formDueDate.setAttribute('type', 'date');\r\n    formDueDate.setAttribute('placeholder', 'Due Date');\r\n    form.appendChild(formDueDate);\r\n\r\n    const formPriority = document.createElement('select');\r\n    formPriority.classList.add('form-priority');\r\n    // create drop down menu for priority\r\n    const priorityOptions = ['High', 'Medium', 'Low'];\r\n    priorityOptions.forEach((option) => {\r\n        const priorityOption = document.createElement('option');\r\n        priorityOption.setAttribute('value', option);\r\n        priorityOption.textContent = option;\r\n        formPriority.appendChild(priorityOption);\r\n    });\r\n    \r\n    form.appendChild(formPriority);\r\n    \r\n    const formSubmitButton = document.createElement('button');\r\n    formSubmitButton.classList.add('form-submit-button');\r\n    formSubmitButton.textContent = 'ADD';\r\n    form.appendChild(formSubmitButton);\r\n    \r\n    const formCancelButton = document.createElement('button');\r\n    formCancelButton.classList.add('form-cancel-button');\r\n    formCancelButton.textContent = 'CANCEL';\r\n    form.appendChild(formCancelButton);\r\n    \r\n        return {\r\n            formSubmitButton,\r\n            formCancelButton,\r\n        };\r\n    }\n\n//# sourceURL=webpack://todo/./src/todoForm.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultProject: () => (/* binding */ defaultProject),\n/* harmony export */   defaultTodo: () => (/* binding */ defaultTodo)\n/* harmony export */ });\n/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo.js */ \"./src/ToDo.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n// todoList.js\r\n\r\n // Import Project class separately\r\n\r\nconst defaultProject = new _Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n  \"Default Project\",\r\n  \"This is the default project.\"\r\n);\r\n\r\nconst defaultTodo = new _ToDo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \"Title\",\r\n  \"Description\",\r\n  \"01-01-1900\",\r\n  \"High\"\r\n);\r\n\r\ndefaultProject.addTodo(defaultTodo); // Associate the todo with the default project\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo/./src/todoList.js?");

/***/ }),

/***/ "./src/icons/delete.svg":
/*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4cde6cf6920bc0095507.svg\";\n\n//# sourceURL=webpack://todo/./src/icons/delete.svg?");

/***/ }),

/***/ "./src/icons/edit.svg":
/*!****************************!*\
  !*** ./src/icons/edit.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b6005a3e5eaaeb68bae.svg\";\n\n//# sourceURL=webpack://todo/./src/icons/edit.svg?");

/***/ }),

/***/ "./src/icons/options.svg":
/*!*******************************!*\
  !*** ./src/icons/options.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b9d327dccb65150ac7f.svg\";\n\n//# sourceURL=webpack://todo/./src/icons/options.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;