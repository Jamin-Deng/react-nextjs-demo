webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _header_header_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.css */ "./components/header/header.css");
/* harmony import */ var _header_header_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_header_header_css__WEBPACK_IMPORTED_MODULE_11__);












var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Header;
var linkStyle = {
  marginRight: 15
};

var MyHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyHeader, _React$Component);

  function MyHeader(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyHeader).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 注意需要执行一次 res.json() 方法才能获取数据
      fetch('/api/hi').then(function (res) {
        return res.json();
      }).then(function (data) {}).catch(function (e) {
        return console.log('err', e);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (// <div>
        //     <Link href="/">
        //         <a style={linkStyle}>Home</a>
        //     </Link>
        //     <Link href="/about">
        //         <a style={linkStyle}>About</a>
        //     </Link>
        // </div>
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Header, {
          className: "header"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "logo"
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
          theme: "dark",
          mode: "horizontal",
          defaultSelectedKeys: ['2'],
          style: {
            lineHeight: '64px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
          key: "1"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/home"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, "Home"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
          key: "2"
        }, "nav 2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
          key: "3"
        }, "nav 3")))
      );
    }
  }]);

  return MyHeader;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MyHeader);

/***/ })

})
//# sourceMappingURL=home.js.c706b953e6e0dcb84083.hot-update.js.map