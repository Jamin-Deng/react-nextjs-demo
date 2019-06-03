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
/* harmony import */ var echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! echarts/lib/component/title */ "./node_modules/echarts/lib/component/title.js");
/* harmony import */ var echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_9__);





 // 引入 ECharts 主模块

 // 引入柱状图

 // 引入提示框和标题组件




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
/*!*****************************************************!*\
  !*** ./node_modules/echarts/lib/component/title.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var echarts = __webpack_require__(/*! ../echarts */ "./node_modules/echarts/lib/echarts.js");

var graphic = __webpack_require__(/*! ../util/graphic */ "./node_modules/echarts/lib/util/graphic.js");

var _layout = __webpack_require__(/*! ../util/layout */ "./node_modules/echarts/lib/util/layout.js");

var getLayoutRect = _layout.getLayoutRect;

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// Model
echarts.extendComponentModel({
  type: 'title',
  layoutMode: {
    type: 'box',
    ignoreSize: true
  },
  defaultOption: {
    // 一级层叠
    zlevel: 0,
    // 二级层叠
    z: 6,
    show: true,
    text: '',
    // 超链接跳转
    // link: null,
    // 仅支持self | blank
    target: 'blank',
    subtext: '',
    // 超链接跳转
    // sublink: null,
    // 仅支持self | blank
    subtarget: 'blank',
    // 'center' ¦ 'left' ¦ 'right'
    // ¦ {number}（x坐标，单位px）
    left: 0,
    // 'top' ¦ 'bottom' ¦ 'center'
    // ¦ {number}（y坐标，单位px）
    top: 0,
    // 水平对齐
    // 'auto' | 'left' | 'right' | 'center'
    // 默认根据 left 的位置判断是左对齐还是右对齐
    // textAlign: null
    //
    // 垂直对齐
    // 'auto' | 'top' | 'bottom' | 'middle'
    // 默认根据 top 位置判断是上对齐还是下对齐
    // textBaseline: null
    backgroundColor: 'rgba(0,0,0,0)',
    // 标题边框颜色
    borderColor: '#ccc',
    // 标题边框线宽，单位px，默认为0（无边框）
    borderWidth: 0,
    // 标题内边距，单位px，默认各方向内边距为5，
    // 接受数组分别设定上右下左边距，同css
    padding: 5,
    // 主副标题纵向间隔，单位px，默认为10，
    itemGap: 10,
    textStyle: {
      fontSize: 18,
      fontWeight: 'bolder',
      color: '#333'
    },
    subtextStyle: {
      color: '#aaa'
    }
  }
}); // View

echarts.extendComponentView({
  type: 'title',
  render: function (titleModel, ecModel, api) {
    this.group.removeAll();

    if (!titleModel.get('show')) {
      return;
    }

    var group = this.group;
    var textStyleModel = titleModel.getModel('textStyle');
    var subtextStyleModel = titleModel.getModel('subtextStyle');
    var textAlign = titleModel.get('textAlign');
    var textBaseline = titleModel.get('textBaseline');
    var textEl = new graphic.Text({
      style: graphic.setTextStyle({}, textStyleModel, {
        text: titleModel.get('text'),
        textFill: textStyleModel.getTextColor()
      }, {
        disableBox: true
      }),
      z2: 10
    });
    var textRect = textEl.getBoundingRect();
    var subText = titleModel.get('subtext');
    var subTextEl = new graphic.Text({
      style: graphic.setTextStyle({}, subtextStyleModel, {
        text: subText,
        textFill: subtextStyleModel.getTextColor(),
        y: textRect.height + titleModel.get('itemGap'),
        textVerticalAlign: 'top'
      }, {
        disableBox: true
      }),
      z2: 10
    });
    var link = titleModel.get('link');
    var sublink = titleModel.get('sublink');
    var triggerEvent = titleModel.get('triggerEvent', true);
    textEl.silent = !link && !triggerEvent;
    subTextEl.silent = !sublink && !triggerEvent;

    if (link) {
      textEl.on('click', function () {
        window.open(link, '_' + titleModel.get('target'));
      });
    }

    if (sublink) {
      subTextEl.on('click', function () {
        window.open(sublink, '_' + titleModel.get('subtarget'));
      });
    }

    textEl.eventData = subTextEl.eventData = triggerEvent ? {
      componentType: 'title',
      componentIndex: titleModel.componentIndex
    } : null;
    group.add(textEl);
    subText && group.add(subTextEl); // If no subText, but add subTextEl, there will be an empty line.

    var groupRect = group.getBoundingRect();
    var layoutOption = titleModel.getBoxLayoutParams();
    layoutOption.width = groupRect.width;
    layoutOption.height = groupRect.height;
    var layoutRect = getLayoutRect(layoutOption, {
      width: api.getWidth(),
      height: api.getHeight()
    }, titleModel.get('padding')); // Adjust text align based on position

    if (!textAlign) {
      // Align left if title is on the left. center and right is same
      textAlign = titleModel.get('left') || titleModel.get('right');

      if (textAlign === 'middle') {
        textAlign = 'center';
      } // Adjust layout by text align


      if (textAlign === 'right') {
        layoutRect.x += layoutRect.width;
      } else if (textAlign === 'center') {
        layoutRect.x += layoutRect.width / 2;
      }
    }

    if (!textBaseline) {
      textBaseline = titleModel.get('top') || titleModel.get('bottom');

      if (textBaseline === 'center') {
        textBaseline = 'middle';
      }

      if (textBaseline === 'bottom') {
        layoutRect.y += layoutRect.height;
      } else if (textBaseline === 'middle') {
        layoutRect.y += layoutRect.height / 2;
      }

      textBaseline = textBaseline || 'top';
    }

    group.attr('position', [layoutRect.x, layoutRect.y]);
    var alignStyle = {
      textAlign: textAlign,
      textVerticalAlign: textBaseline
    };
    textEl.setStyle(alignStyle);
    subTextEl.setStyle(alignStyle); // Render background
    // Get groupRect again because textAlign has been changed

    groupRect = group.getBoundingRect();
    var padding = layoutRect.margin;
    var style = titleModel.getItemStyle(['color', 'opacity']);
    style.fill = titleModel.get('backgroundColor');
    var rect = new graphic.Rect({
      shape: {
        x: groupRect.x - padding[3],
        y: groupRect.y - padding[0],
        width: groupRect.width + padding[1] + padding[3],
        height: groupRect.height + padding[0] + padding[2],
        r: titleModel.get('borderRadius')
      },
      style: style,
      silent: true
    });
    graphic.subPixelOptimizeRect(rect);
    group.add(rect);
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.68b50083835541f59514.hot-update.js.map