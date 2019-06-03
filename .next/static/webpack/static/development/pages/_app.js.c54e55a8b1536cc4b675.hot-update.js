webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/chart/echart.js":
/*!************************************!*\
  !*** ./components/chart/echart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts/lib/echarts */ "./node_modules/echarts/lib/echarts.js");
/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! echarts/lib/chart/bar */ "./node_modules/echarts/lib/chart/bar.js");
/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! echarts/lib/component/tooltip */ "./node_modules/echarts/lib/component/tooltip.js");
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_8__);





 // 引入 ECharts 主模块

 // 引入柱状图

 // 引入提示框和标题组件

 // import 'echarts/lib/component/title';

var Echart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Echart, _Component);

  function Echart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Echart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Echart).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Echart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById('main')); // 绘制图表

      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "main",
        style: {
          width: 400,
          height: 400
        }
      });
    }
  }]);

  return Echart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Echart);

/***/ }),

/***/ "./node_modules/echarts/lib/component/title.js":
false

})
//# sourceMappingURL=_app.js.c54e55a8b1536cc4b675.hot-update.js.map