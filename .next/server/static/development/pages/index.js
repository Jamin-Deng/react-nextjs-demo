module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/sider/sider.js":
/*!***********************************!*\
  !*** ./components/sider/sider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style/css */ "antd/lib/icon/style/css");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style/css */ "antd/lib/layout/style/css");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu/style/css */ "antd/lib/menu/style/css");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.SubMenu;
var Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Sider;

var MySider = function MySider() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Sider, {
    width: 200,
    style: {
      background: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
    mode: "inline",
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    style: {
      height: '100%',
      borderRight: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SubMenu, {
    key: "sub1",
    title: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "user"
    }), "subnav 1")
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "1"
  }, "option1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "2"
  }, "option2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "3"
  }, "option3"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "4"
  }, "option4")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SubMenu, {
    key: "sub2",
    title: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "laptop"
    }), "subnav 2")
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "5"
  }, "option5"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "6"
  }, "option6"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "7"
  }, "option7"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "8"
  }, "option8")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SubMenu, {
    key: "sub3",
    title: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "notification"
    }), "subnav 3")
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "9"
  }, "option9"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "10"
  }, "option10"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "11"
  }, "option11"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    key: "12"
  }, "option12"))));
};

/* harmony default export */ __webpack_exports__["default"] = (MySider);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/breadcrumb/style/css */ "antd/lib/breadcrumb/style/css");
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/breadcrumb */ "antd/lib/breadcrumb");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style/css */ "antd/lib/layout/style/css");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_sider_sider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sider/sider */ "./components/sider/sider.js");






var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Content;

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_sider_sider__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      padding: '0 24px 24px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: '16px 0'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, "Home"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, "List"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, "App")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Content, {
    style: {
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280
    }
  }, "Content")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\CompanyProject\demo\react-nextjs-demo\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/breadcrumb":
/*!**************************************!*\
  !*** external "antd/lib/breadcrumb" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "antd/lib/breadcrumb/style/css":
/*!************************************************!*\
  !*** external "antd/lib/breadcrumb/style/css" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb/style/css");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style/css":
/*!******************************************!*\
  !*** external "antd/lib/icon/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/layout/style/css":
/*!********************************************!*\
  !*** external "antd/lib/layout/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style/css");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/menu/style/css":
/*!******************************************!*\
  !*** external "antd/lib/menu/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style/css");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map