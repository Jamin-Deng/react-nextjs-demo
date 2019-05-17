webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/sider/sider.js":
/*!***********************************!*\
  !*** ./components/sider/sider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./node_modules/antd/lib/icon/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/icon/style/index.css");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sider_sider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sider/sider */ "./components/sider/sider.js");



var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sider_sider__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, {
    style: {
      padding: '0 24px 24px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Breadcrumb, {
    style: {
      margin: '16px 0'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Breadcrumb.Item, null, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Breadcrumb.Item, null, "List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Breadcrumb.Item, null, "App")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    style: {
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280
    }
  }, "Content")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.0ab54d26d6d293a79f48.hot-update.js.map