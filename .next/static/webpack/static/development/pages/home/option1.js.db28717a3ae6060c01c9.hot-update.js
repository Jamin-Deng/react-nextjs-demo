webpackHotUpdate("static\\development\\pages\\home\\option1.js",{

/***/ "./components/chart/chart.js":
/*!***********************************!*\
  !*** ./components/chart/chart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bizcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bizcharts */ "./node_modules/bizcharts/umd/BizCharts.js");
/* harmony import */ var bizcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bizcharts__WEBPACK_IMPORTED_MODULE_1__);

 // 数据源

var data = [{
  genre: 'Sports',
  sold: 275,
  income: 2300
}, {
  genre: 'Strategy',
  sold: 115,
  income: 667
}, {
  genre: 'Action',
  sold: 120,
  income: 982
}, {
  genre: 'Shooter',
  sold: 350,
  income: 5271
}, {
  genre: 'Other',
  sold: 150,
  income: 3710
}]; // 定义度量

var cols = {
  sold: {
    alias: '销售量'
  },
  genre: {
    alias: '游戏种类'
  }
};

var MyChart = function MyChart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"], {
    width: 600,
    height: 400,
    data: data,
    scale: cols
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_1__["Axis"], {
    name: "genre",
    title: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_1__["Axis"], {
    name: "sold",
    title: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], {
    position: "top",
    dy: -20
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_1__["Geom"], {
    type: "interval",
    position: "genre*sold",
    color: "genre"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MyChart);

/***/ })

})
//# sourceMappingURL=option1.js.db28717a3ae6060c01c9.hot-update.js.map