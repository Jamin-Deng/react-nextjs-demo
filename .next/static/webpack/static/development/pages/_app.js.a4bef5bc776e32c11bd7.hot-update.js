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

/***/ "./node_modules/echarts/lib/component/axisPointer.js":
/*!***********************************************************!*\
  !*** ./node_modules/echarts/lib/component/axisPointer.js ***!
  \***********************************************************/
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

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var axisPointerModelHelper = __webpack_require__(/*! ./axisPointer/modelHelper */ "./node_modules/echarts/lib/component/axisPointer/modelHelper.js");

var axisTrigger = __webpack_require__(/*! ./axisPointer/axisTrigger */ "./node_modules/echarts/lib/component/axisPointer/axisTrigger.js");

__webpack_require__(/*! ./axisPointer/AxisPointerModel */ "./node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js");

__webpack_require__(/*! ./axisPointer/AxisPointerView */ "./node_modules/echarts/lib/component/axisPointer/AxisPointerView.js");

__webpack_require__(/*! ./axisPointer/CartesianAxisPointer */ "./node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js");

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
// CartesianAxisPointer is not supposed to be required here. But consider
// echarts.simple.js and online build tooltip, which only require gridSimple,
// CartesianAxisPointer should be able to required somewhere.
echarts.registerPreprocessor(function (option) {
  // Always has a global axisPointerModel for default setting.
  if (option) {
    (!option.axisPointer || option.axisPointer.length === 0) && (option.axisPointer = {});
    var link = option.axisPointer.link; // Normalize to array to avoid object mergin. But if link
    // is not set, remain null/undefined, otherwise it will
    // override existent link setting.

    if (link && !zrUtil.isArray(link)) {
      option.axisPointer.link = [link];
    }
  }
}); // This process should proformed after coordinate systems created
// and series data processed. So put it on statistic processing stage.

echarts.registerProcessor(echarts.PRIORITY.PROCESSOR.STATISTIC, function (ecModel, api) {
  // Build axisPointerModel, mergin tooltip.axisPointer model for each axis.
  // allAxesInfo should be updated when setOption performed.
  ecModel.getComponent('axisPointer').coordSysAxesInfo = axisPointerModelHelper.collect(ecModel, api);
}); // Broadcast to all views.

echarts.registerAction({
  type: 'updateAxisPointer',
  event: 'updateAxisPointer',
  update: ':updateAxisPointer'
}, axisTrigger);

/***/ }),

/***/ "./node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js":
/*!****************************************************************************!*\
  !*** ./node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js ***!
  \****************************************************************************/
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

var echarts = __webpack_require__(/*! ../../echarts */ "./node_modules/echarts/lib/echarts.js");

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
var AxisPointerModel = echarts.extendComponentModel({
  type: 'axisPointer',
  coordSysAxesInfo: null,
  defaultOption: {
    // 'auto' means that show when triggered by tooltip or handle.
    show: 'auto',
    // 'click' | 'mousemove' | 'none'
    triggerOn: null,
    // set default in AxisPonterView.js
    zlevel: 0,
    z: 50,
    type: 'line',
    // 'line' 'shadow' 'cross' 'none'.
    // axispointer triggered by tootip determine snap automatically,
    // see `modelHelper`.
    snap: false,
    triggerTooltip: true,
    value: null,
    status: null,
    // Init value depends on whether handle is used.
    // [group0, group1, ...]
    // Each group can be: {
    //      mapper: function () {},
    //      singleTooltip: 'multiple',  // 'multiple' or 'single'
    //      xAxisId: ...,
    //      yAxisName: ...,
    //      angleAxisIndex: ...
    // }
    // mapper: can be ignored.
    //      input: {axisInfo, value}
    //      output: {axisInfo, value}
    link: [],
    // Do not set 'auto' here, otherwise global animation: false
    // will not effect at this axispointer.
    animation: null,
    animationDurationUpdate: 200,
    lineStyle: {
      color: '#aaa',
      width: 1,
      type: 'solid'
    },
    shadowStyle: {
      color: 'rgba(150,150,150,0.3)'
    },
    label: {
      show: true,
      formatter: null,
      // string | Function
      precision: 'auto',
      // Or a number like 0, 1, 2 ...
      margin: 3,
      color: '#fff',
      padding: [5, 7, 5, 7],
      backgroundColor: 'auto',
      // default: axis line color
      borderColor: null,
      borderWidth: 0,
      shadowBlur: 3,
      shadowColor: '#aaa' // Considering applicability, common style should
      // better not have shadowOffset.
      // shadowOffsetX: 0,
      // shadowOffsetY: 2

    },
    handle: {
      show: false,

      /* eslint-disable */
      icon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
      // jshint ignore:line

      /* eslint-enable */
      size: 45,
      // handle margin is from symbol center to axis, which is stable when circular move.
      margin: 50,
      // color: '#1b8bbd'
      // color: '#2f4554'
      color: '#333',
      shadowBlur: 3,
      shadowColor: '#aaa',
      shadowOffsetX: 0,
      shadowOffsetY: 2,
      // For mobile performance
      throttle: 40
    }
  }
});
var _default = AxisPointerModel;
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/component/axisPointer/AxisPointerView.js":
/*!***************************************************************************!*\
  !*** ./node_modules/echarts/lib/component/axisPointer/AxisPointerView.js ***!
  \***************************************************************************/
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

var echarts = __webpack_require__(/*! ../../echarts */ "./node_modules/echarts/lib/echarts.js");

var globalListener = __webpack_require__(/*! ./globalListener */ "./node_modules/echarts/lib/component/axisPointer/globalListener.js");

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
var AxisPointerView = echarts.extendComponentView({
  type: 'axisPointer',
  render: function (globalAxisPointerModel, ecModel, api) {
    var globalTooltipModel = ecModel.getComponent('tooltip');
    var triggerOn = globalAxisPointerModel.get('triggerOn') || globalTooltipModel && globalTooltipModel.get('triggerOn') || 'mousemove|click'; // Register global listener in AxisPointerView to enable
    // AxisPointerView to be independent to Tooltip.

    globalListener.register('axisPointer', api, function (currTrigger, e, dispatchAction) {
      // If 'none', it is not controlled by mouse totally.
      if (triggerOn !== 'none' && (currTrigger === 'leave' || triggerOn.indexOf(currTrigger) >= 0)) {
        dispatchAction({
          type: 'updateAxisPointer',
          currTrigger: currTrigger,
          x: e && e.offsetX,
          y: e && e.offsetY
        });
      }
    });
  },

  /**
   * @override
   */
  remove: function (ecModel, api) {
    globalListener.unregister(api.getZr(), 'axisPointer');
    AxisPointerView.superApply(this._model, 'remove', arguments);
  },

  /**
   * @override
   */
  dispose: function (ecModel, api) {
    globalListener.unregister('axisPointer', api);
    AxisPointerView.superApply(this._model, 'dispose', arguments);
  }
});
var _default = AxisPointerView;
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js ***!
  \***************************************************************************/
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

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var clazzUtil = __webpack_require__(/*! ../../util/clazz */ "./node_modules/echarts/lib/util/clazz.js");

var graphic = __webpack_require__(/*! ../../util/graphic */ "./node_modules/echarts/lib/util/graphic.js");

var axisPointerModelHelper = __webpack_require__(/*! ./modelHelper */ "./node_modules/echarts/lib/component/axisPointer/modelHelper.js");

var eventTool = __webpack_require__(/*! zrender/lib/core/event */ "./node_modules/zrender/lib/core/event.js");

var throttleUtil = __webpack_require__(/*! ../../util/throttle */ "./node_modules/echarts/lib/util/throttle.js");

var _model = __webpack_require__(/*! ../../util/model */ "./node_modules/echarts/lib/util/model.js");

var makeInner = _model.makeInner;

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
var inner = makeInner();
var clone = zrUtil.clone;
var bind = zrUtil.bind;
/**
 * Base axis pointer class in 2D.
 * Implemenents {module:echarts/component/axis/IAxisPointer}.
 */

function BaseAxisPointer() {}

BaseAxisPointer.prototype = {
  /**
   * @private
   */
  _group: null,

  /**
   * @private
   */
  _lastGraphicKey: null,

  /**
   * @private
   */
  _handle: null,

  /**
   * @private
   */
  _dragging: false,

  /**
   * @private
   */
  _lastValue: null,

  /**
   * @private
   */
  _lastStatus: null,

  /**
   * @private
   */
  _payloadInfo: null,

  /**
   * In px, arbitrary value. Do not set too small,
   * no animation is ok for most cases.
   * @protected
   */
  animationThreshold: 15,

  /**
   * @implement
   */
  render: function (axisModel, axisPointerModel, api, forceRender) {
    var value = axisPointerModel.get('value');
    var status = axisPointerModel.get('status'); // Bind them to `this`, not in closure, otherwise they will not
    // be replaced when user calling setOption in not merge mode.

    this._axisModel = axisModel;
    this._axisPointerModel = axisPointerModel;
    this._api = api; // Optimize: `render` will be called repeatly during mouse move.
    // So it is power consuming if performing `render` each time,
    // especially on mobile device.

    if (!forceRender && this._lastValue === value && this._lastStatus === status) {
      return;
    }

    this._lastValue = value;
    this._lastStatus = status;
    var group = this._group;
    var handle = this._handle;

    if (!status || status === 'hide') {
      // Do not clear here, for animation better.
      group && group.hide();
      handle && handle.hide();
      return;
    }

    group && group.show();
    handle && handle.show(); // Otherwise status is 'show'

    var elOption = {};
    this.makeElOption(elOption, value, axisModel, axisPointerModel, api); // Enable change axis pointer type.

    var graphicKey = elOption.graphicKey;

    if (graphicKey !== this._lastGraphicKey) {
      this.clear(api);
    }

    this._lastGraphicKey = graphicKey;
    var moveAnimation = this._moveAnimation = this.determineAnimation(axisModel, axisPointerModel);

    if (!group) {
      group = this._group = new graphic.Group();
      this.createPointerEl(group, elOption, axisModel, axisPointerModel);
      this.createLabelEl(group, elOption, axisModel, axisPointerModel);
      api.getZr().add(group);
    } else {
      var doUpdateProps = zrUtil.curry(updateProps, axisPointerModel, moveAnimation);
      this.updatePointerEl(group, elOption, doUpdateProps, axisPointerModel);
      this.updateLabelEl(group, elOption, doUpdateProps, axisPointerModel);
    }

    updateMandatoryProps(group, axisPointerModel, true);

    this._renderHandle(value);
  },

  /**
   * @implement
   */
  remove: function (api) {
    this.clear(api);
  },

  /**
   * @implement
   */
  dispose: function (api) {
    this.clear(api);
  },

  /**
   * @protected
   */
  determineAnimation: function (axisModel, axisPointerModel) {
    var animation = axisPointerModel.get('animation');
    var axis = axisModel.axis;
    var isCategoryAxis = axis.type === 'category';
    var useSnap = axisPointerModel.get('snap'); // Value axis without snap always do not snap.

    if (!useSnap && !isCategoryAxis) {
      return false;
    }

    if (animation === 'auto' || animation == null) {
      var animationThreshold = this.animationThreshold;

      if (isCategoryAxis && axis.getBandWidth() > animationThreshold) {
        return true;
      } // It is important to auto animation when snap used. Consider if there is
      // a dataZoom, animation will be disabled when too many points exist, while
      // it will be enabled for better visual effect when little points exist.


      if (useSnap) {
        var seriesDataCount = axisPointerModelHelper.getAxisInfo(axisModel).seriesDataCount;
        var axisExtent = axis.getExtent(); // Approximate band width

        return Math.abs(axisExtent[0] - axisExtent[1]) / seriesDataCount > animationThreshold;
      }

      return false;
    }

    return animation === true;
  },

  /**
   * add {pointer, label, graphicKey} to elOption
   * @protected
   */
  makeElOption: function (elOption, value, axisModel, axisPointerModel, api) {// Shoule be implemenented by sub-class.
  },

  /**
   * @protected
   */
  createPointerEl: function (group, elOption, axisModel, axisPointerModel) {
    var pointerOption = elOption.pointer;

    if (pointerOption) {
      var pointerEl = inner(group).pointerEl = new graphic[pointerOption.type](clone(elOption.pointer));
      group.add(pointerEl);
    }
  },

  /**
   * @protected
   */
  createLabelEl: function (group, elOption, axisModel, axisPointerModel) {
    if (elOption.label) {
      var labelEl = inner(group).labelEl = new graphic.Rect(clone(elOption.label));
      group.add(labelEl);
      updateLabelShowHide(labelEl, axisPointerModel);
    }
  },

  /**
   * @protected
   */
  updatePointerEl: function (group, elOption, updateProps) {
    var pointerEl = inner(group).pointerEl;

    if (pointerEl) {
      pointerEl.setStyle(elOption.pointer.style);
      updateProps(pointerEl, {
        shape: elOption.pointer.shape
      });
    }
  },

  /**
   * @protected
   */
  updateLabelEl: function (group, elOption, updateProps, axisPointerModel) {
    var labelEl = inner(group).labelEl;

    if (labelEl) {
      labelEl.setStyle(elOption.label.style);
      updateProps(labelEl, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        shape: elOption.label.shape,
        position: elOption.label.position
      });
      updateLabelShowHide(labelEl, axisPointerModel);
    }
  },

  /**
   * @private
   */
  _renderHandle: function (value) {
    if (this._dragging || !this.updateHandleTransform) {
      return;
    }

    var axisPointerModel = this._axisPointerModel;

    var zr = this._api.getZr();

    var handle = this._handle;
    var handleModel = axisPointerModel.getModel('handle');
    var status = axisPointerModel.get('status');

    if (!handleModel.get('show') || !status || status === 'hide') {
      handle && zr.remove(handle);
      this._handle = null;
      return;
    }

    var isInit;

    if (!this._handle) {
      isInit = true;
      handle = this._handle = graphic.createIcon(handleModel.get('icon'), {
        cursor: 'move',
        draggable: true,
        onmousemove: function (e) {
          // Fot mobile devicem, prevent screen slider on the button.
          eventTool.stop(e.event);
        },
        onmousedown: bind(this._onHandleDragMove, this, 0, 0),
        drift: bind(this._onHandleDragMove, this),
        ondragend: bind(this._onHandleDragEnd, this)
      });
      zr.add(handle);
    }

    updateMandatoryProps(handle, axisPointerModel, false); // update style

    var includeStyles = ['color', 'borderColor', 'borderWidth', 'opacity', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY'];
    handle.setStyle(handleModel.getItemStyle(null, includeStyles)); // update position

    var handleSize = handleModel.get('size');

    if (!zrUtil.isArray(handleSize)) {
      handleSize = [handleSize, handleSize];
    }

    handle.attr('scale', [handleSize[0] / 2, handleSize[1] / 2]);
    throttleUtil.createOrUpdate(this, '_doDispatchAxisPointer', handleModel.get('throttle') || 0, 'fixRate');

    this._moveHandleToValue(value, isInit);
  },

  /**
   * @private
   */
  _moveHandleToValue: function (value, isInit) {
    updateProps(this._axisPointerModel, !isInit && this._moveAnimation, this._handle, getHandleTransProps(this.getHandleTransform(value, this._axisModel, this._axisPointerModel)));
  },

  /**
   * @private
   */
  _onHandleDragMove: function (dx, dy) {
    var handle = this._handle;

    if (!handle) {
      return;
    }

    this._dragging = true; // Persistent for throttle.

    var trans = this.updateHandleTransform(getHandleTransProps(handle), [dx, dy], this._axisModel, this._axisPointerModel);
    this._payloadInfo = trans;
    handle.stopAnimation();
    handle.attr(getHandleTransProps(trans));
    inner(handle).lastProp = null;

    this._doDispatchAxisPointer();
  },

  /**
   * Throttled method.
   * @private
   */
  _doDispatchAxisPointer: function () {
    var handle = this._handle;

    if (!handle) {
      return;
    }

    var payloadInfo = this._payloadInfo;
    var axisModel = this._axisModel;

    this._api.dispatchAction({
      type: 'updateAxisPointer',
      x: payloadInfo.cursorPoint[0],
      y: payloadInfo.cursorPoint[1],
      tooltipOption: payloadInfo.tooltipOption,
      axesInfo: [{
        axisDim: axisModel.axis.dim,
        axisIndex: axisModel.componentIndex
      }]
    });
  },

  /**
   * @private
   */
  _onHandleDragEnd: function (moveAnimation) {
    this._dragging = false;
    var handle = this._handle;

    if (!handle) {
      return;
    }

    var value = this._axisPointerModel.get('value'); // Consider snap or categroy axis, handle may be not consistent with
    // axisPointer. So move handle to align the exact value position when
    // drag ended.


    this._moveHandleToValue(value); // For the effect: tooltip will be shown when finger holding on handle
    // button, and will be hidden after finger left handle button.


    this._api.dispatchAction({
      type: 'hideTip'
    });
  },

  /**
   * Should be implemenented by sub-class if support `handle`.
   * @protected
   * @param {number} value
   * @param {module:echarts/model/Model} axisModel
   * @param {module:echarts/model/Model} axisPointerModel
   * @return {Object} {position: [x, y], rotation: 0}
   */
  getHandleTransform: null,

  /**
   * * Should be implemenented by sub-class if support `handle`.
   * @protected
   * @param {Object} transform {position, rotation}
   * @param {Array.<number>} delta [dx, dy]
   * @param {module:echarts/model/Model} axisModel
   * @param {module:echarts/model/Model} axisPointerModel
   * @return {Object} {position: [x, y], rotation: 0, cursorPoint: [x, y]}
   */
  updateHandleTransform: null,

  /**
   * @private
   */
  clear: function (api) {
    this._lastValue = null;
    this._lastStatus = null;
    var zr = api.getZr();
    var group = this._group;
    var handle = this._handle;

    if (zr && group) {
      this._lastGraphicKey = null;
      group && zr.remove(group);
      handle && zr.remove(handle);
      this._group = null;
      this._handle = null;
      this._payloadInfo = null;
    }
  },

  /**
   * @protected
   */
  doClear: function () {// Implemented by sub-class if necessary.
  },

  /**
   * @protected
   * @param {Array.<number>} xy
   * @param {Array.<number>} wh
   * @param {number} [xDimIndex=0] or 1
   */
  buildLabel: function (xy, wh, xDimIndex) {
    xDimIndex = xDimIndex || 0;
    return {
      x: xy[xDimIndex],
      y: xy[1 - xDimIndex],
      width: wh[xDimIndex],
      height: wh[1 - xDimIndex]
    };
  }
};
BaseAxisPointer.prototype.constructor = BaseAxisPointer;

function updateProps(animationModel, moveAnimation, el, props) {
  // Animation optimize.
  if (!propsEqual(inner(el).lastProp, props)) {
    inner(el).lastProp = props;
    moveAnimation ? graphic.updateProps(el, props, animationModel) : (el.stopAnimation(), el.attr(props));
  }
}

function propsEqual(lastProps, newProps) {
  if (zrUtil.isObject(lastProps) && zrUtil.isObject(newProps)) {
    var equals = true;
    zrUtil.each(newProps, function (item, key) {
      equals = equals && propsEqual(lastProps[key], item);
    });
    return !!equals;
  } else {
    return lastProps === newProps;
  }
}

function updateLabelShowHide(labelEl, axisPointerModel) {
  labelEl[axisPointerModel.get('label.show') ? 'show' : 'hide']();
}

function getHandleTransProps(trans) {
  return {
    position: trans.position.slice(),
    rotation: trans.rotation || 0
  };
}

function updateMandatoryProps(group, axisPointerModel, silent) {
  var z = axisPointerModel.get('z');
  var zlevel = axisPointerModel.get('zlevel');
  group && group.traverse(function (el) {
    if (el.type !== 'group') {
      z != null && (el.z = z);
      zlevel != null && (el.zlevel = zlevel);
      el.silent = silent;
    }
  });
}

clazzUtil.enableClassExtend(BaseAxisPointer);
var _default = BaseAxisPointer;
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js ***!
  \********************************************************************************/
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

var graphic = __webpack_require__(/*! ../../util/graphic */ "./node_modules/echarts/lib/util/graphic.js");

var BaseAxisPointer = __webpack_require__(/*! ./BaseAxisPointer */ "./node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js");

var viewHelper = __webpack_require__(/*! ./viewHelper */ "./node_modules/echarts/lib/component/axisPointer/viewHelper.js");

var cartesianAxisHelper = __webpack_require__(/*! ../../coord/cartesian/cartesianAxisHelper */ "./node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js");

var AxisView = __webpack_require__(/*! ../axis/AxisView */ "./node_modules/echarts/lib/component/axis/AxisView.js");

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
var CartesianAxisPointer = BaseAxisPointer.extend({
  /**
   * @override
   */
  makeElOption: function (elOption, value, axisModel, axisPointerModel, api) {
    var axis = axisModel.axis;
    var grid = axis.grid;
    var axisPointerType = axisPointerModel.get('type');
    var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
    var pixelValue = axis.toGlobalCoord(axis.dataToCoord(value, true));

    if (axisPointerType && axisPointerType !== 'none') {
      var elStyle = viewHelper.buildElStyle(axisPointerModel);
      var pointerOption = pointerShapeBuilder[axisPointerType](axis, pixelValue, otherExtent, elStyle);
      pointerOption.style = elStyle;
      elOption.graphicKey = pointerOption.type;
      elOption.pointer = pointerOption;
    }

    var layoutInfo = cartesianAxisHelper.layout(grid.model, axisModel);
    viewHelper.buildCartesianSingleLabelElOption(value, elOption, layoutInfo, axisModel, axisPointerModel, api);
  },

  /**
   * @override
   */
  getHandleTransform: function (value, axisModel, axisPointerModel) {
    var layoutInfo = cartesianAxisHelper.layout(axisModel.axis.grid.model, axisModel, {
      labelInside: false
    });
    layoutInfo.labelMargin = axisPointerModel.get('handle.margin');
    return {
      position: viewHelper.getTransformedPosition(axisModel.axis, value, layoutInfo),
      rotation: layoutInfo.rotation + (layoutInfo.labelDirection < 0 ? Math.PI : 0)
    };
  },

  /**
   * @override
   */
  updateHandleTransform: function (transform, delta, axisModel, axisPointerModel) {
    var axis = axisModel.axis;
    var grid = axis.grid;
    var axisExtent = axis.getGlobalExtent(true);
    var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
    var dimIndex = axis.dim === 'x' ? 0 : 1;
    var currPosition = transform.position;
    currPosition[dimIndex] += delta[dimIndex];
    currPosition[dimIndex] = Math.min(axisExtent[1], currPosition[dimIndex]);
    currPosition[dimIndex] = Math.max(axisExtent[0], currPosition[dimIndex]);
    var cursorOtherValue = (otherExtent[1] + otherExtent[0]) / 2;
    var cursorPoint = [cursorOtherValue, cursorOtherValue];
    cursorPoint[dimIndex] = currPosition[dimIndex]; // Make tooltip do not overlap axisPointer and in the middle of the grid.

    var tooltipOptions = [{
      verticalAlign: 'middle'
    }, {
      align: 'center'
    }];
    return {
      position: currPosition,
      rotation: transform.rotation,
      cursorPoint: cursorPoint,
      tooltipOption: tooltipOptions[dimIndex]
    };
  }
});

function getCartesian(grid, axis) {
  var opt = {};
  opt[axis.dim + 'AxisIndex'] = axis.index;
  return grid.getCartesian(opt);
}

var pointerShapeBuilder = {
  line: function (axis, pixelValue, otherExtent, elStyle) {
    var targetShape = viewHelper.makeLineShape([pixelValue, otherExtent[0]], [pixelValue, otherExtent[1]], getAxisDimIndex(axis));
    graphic.subPixelOptimizeLine({
      shape: targetShape,
      style: elStyle
    });
    return {
      type: 'Line',
      shape: targetShape
    };
  },
  shadow: function (axis, pixelValue, otherExtent, elStyle) {
    var bandWidth = Math.max(1, axis.getBandWidth());
    var span = otherExtent[1] - otherExtent[0];
    return {
      type: 'Rect',
      shape: viewHelper.makeRectShape([pixelValue - bandWidth / 2, otherExtent[0]], [bandWidth, span], getAxisDimIndex(axis))
    };
  }
};

function getAxisDimIndex(axis) {
  return axis.dim === 'x' ? 0 : 1;
}

AxisView.registerAxisPointerClass('CartesianAxisPointer', CartesianAxisPointer);
var _default = CartesianAxisPointer;
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/component/axisPointer/axisTrigger.js":
/*!***********************************************************************!*\
  !*** ./node_modules/echarts/lib/component/axisPointer/axisTrigger.js ***!
  \***********************************************************************/
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

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var _model = __webpack_require__(/*! ../../util/model */ "./node_modules/echarts/lib/util/model.js");

var makeInner = _model.makeInner;

var modelHelper = __webpack_require__(/*! ./modelHelper */ "./node_modules/echarts/lib/component/axisPointer/modelHelper.js");

var findPointFromSeries = __webpack_require__(/*! ./findPointFromSeries */ "./node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js");

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
var each = zrUtil.each;
var curry = zrUtil.curry;
var inner = makeInner();
/**
 * Basic logic: check all axis, if they do not demand show/highlight,
 * then hide/downplay them.
 *
 * @param {Object} coordSysAxesInfo
 * @param {Object} payload
 * @param {string} [payload.currTrigger] 'click' | 'mousemove' | 'leave'
 * @param {Array.<number>} [payload.x] x and y, which are mandatory, specify a point to
 *              trigger axisPointer and tooltip.
 * @param {Array.<number>} [payload.y] x and y, which are mandatory, specify a point to
 *              trigger axisPointer and tooltip.
 * @param {Object} [payload.seriesIndex] finder, optional, restrict target axes.
 * @param {Object} [payload.dataIndex] finder, restrict target axes.
 * @param {Object} [payload.axesInfo] finder, restrict target axes.
 *        [{
 *          axisDim: 'x'|'y'|'angle'|...,
 *          axisIndex: ...,
 *          value: ...
 *        }, ...]
 * @param {Function} [payload.dispatchAction]
 * @param {Object} [payload.tooltipOption]
 * @param {Object|Array.<number>|Function} [payload.position] Tooltip position,
 *        which can be specified in dispatchAction
 * @param {module:echarts/model/Global} ecModel
 * @param {module:echarts/ExtensionAPI} api
 * @return {Object} content of event obj for echarts.connect.
 */

function _default(payload, ecModel, api) {
  var currTrigger = payload.currTrigger;
  var point = [payload.x, payload.y];
  var finder = payload;
  var dispatchAction = payload.dispatchAction || zrUtil.bind(api.dispatchAction, api);
  var coordSysAxesInfo = ecModel.getComponent('axisPointer').coordSysAxesInfo; // Pending
  // See #6121. But we are not able to reproduce it yet.

  if (!coordSysAxesInfo) {
    return;
  }

  if (illegalPoint(point)) {
    // Used in the default behavior of `connection`: use the sample seriesIndex
    // and dataIndex. And also used in the tooltipView trigger.
    point = findPointFromSeries({
      seriesIndex: finder.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: finder.dataIndex
    }, ecModel).point;
  }

  var isIllegalPoint = illegalPoint(point); // Axis and value can be specified when calling dispatchAction({type: 'updateAxisPointer'}).
  // Notice: In this case, it is difficult to get the `point` (which is necessary to show
  // tooltip, so if point is not given, we just use the point found by sample seriesIndex
  // and dataIndex.

  var inputAxesInfo = finder.axesInfo;
  var axesInfo = coordSysAxesInfo.axesInfo;
  var shouldHide = currTrigger === 'leave' || illegalPoint(point);
  var outputFinder = {};
  var showValueMap = {};
  var dataByCoordSys = {
    list: [],
    map: {}
  };
  var updaters = {
    showPointer: curry(showPointer, showValueMap),
    showTooltip: curry(showTooltip, dataByCoordSys)
  }; // Process for triggered axes.

  each(coordSysAxesInfo.coordSysMap, function (coordSys, coordSysKey) {
    // If a point given, it must be contained by the coordinate system.
    var coordSysContainsPoint = isIllegalPoint || coordSys.containPoint(point);
    each(coordSysAxesInfo.coordSysAxesInfo[coordSysKey], function (axisInfo, key) {
      var axis = axisInfo.axis;
      var inputAxisInfo = findInputAxisInfo(inputAxesInfo, axisInfo); // If no inputAxesInfo, no axis is restricted.

      if (!shouldHide && coordSysContainsPoint && (!inputAxesInfo || inputAxisInfo)) {
        var val = inputAxisInfo && inputAxisInfo.value;

        if (val == null && !isIllegalPoint) {
          val = axis.pointToData(point);
        }

        val != null && processOnAxis(axisInfo, val, updaters, false, outputFinder);
      }
    });
  }); // Process for linked axes.

  var linkTriggers = {};
  each(axesInfo, function (tarAxisInfo, tarKey) {
    var linkGroup = tarAxisInfo.linkGroup; // If axis has been triggered in the previous stage, it should not be triggered by link.

    if (linkGroup && !showValueMap[tarKey]) {
      each(linkGroup.axesInfo, function (srcAxisInfo, srcKey) {
        var srcValItem = showValueMap[srcKey]; // If srcValItem exist, source axis is triggered, so link to target axis.

        if (srcAxisInfo !== tarAxisInfo && srcValItem) {
          var val = srcValItem.value;
          linkGroup.mapper && (val = tarAxisInfo.axis.scale.parse(linkGroup.mapper(val, makeMapperParam(srcAxisInfo), makeMapperParam(tarAxisInfo))));
          linkTriggers[tarAxisInfo.key] = val;
        }
      });
    }
  });
  each(linkTriggers, function (val, tarKey) {
    processOnAxis(axesInfo[tarKey], val, updaters, true, outputFinder);
  });
  updateModelActually(showValueMap, axesInfo, outputFinder);
  dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction);
  dispatchHighDownActually(axesInfo, dispatchAction, api);
  return outputFinder;
}

function processOnAxis(axisInfo, newValue, updaters, dontSnap, outputFinder) {
  var axis = axisInfo.axis;

  if (axis.scale.isBlank() || !axis.containData(newValue)) {
    return;
  }

  if (!axisInfo.involveSeries) {
    updaters.showPointer(axisInfo, newValue);
    return;
  } // Heavy calculation. So put it after axis.containData checking.


  var payloadInfo = buildPayloadsBySeries(newValue, axisInfo);
  var payloadBatch = payloadInfo.payloadBatch;
  var snapToValue = payloadInfo.snapToValue; // Fill content of event obj for echarts.connect.
  // By defualt use the first involved series data as a sample to connect.

  if (payloadBatch[0] && outputFinder.seriesIndex == null) {
    zrUtil.extend(outputFinder, payloadBatch[0]);
  } // If no linkSource input, this process is for collecting link
  // target, where snap should not be accepted.


  if (!dontSnap && axisInfo.snap) {
    if (axis.containData(snapToValue) && snapToValue != null) {
      newValue = snapToValue;
    }
  }

  updaters.showPointer(axisInfo, newValue, payloadBatch, outputFinder); // Tooltip should always be snapToValue, otherwise there will be
  // incorrect "axis value ~ series value" mapping displayed in tooltip.

  updaters.showTooltip(axisInfo, payloadInfo, snapToValue);
}

function buildPayloadsBySeries(value, axisInfo) {
  var axis = axisInfo.axis;
  var dim = axis.dim;
  var snapToValue = value;
  var payloadBatch = [];
  var minDist = Number.MAX_VALUE;
  var minDiff = -1;
  each(axisInfo.seriesModels, function (series, idx) {
    var dataDim = series.getData().mapDimension(dim, true);
    var seriesNestestValue;
    var dataIndices;

    if (series.getAxisTooltipData) {
      var result = series.getAxisTooltipData(dataDim, value, axis);
      dataIndices = result.dataIndices;
      seriesNestestValue = result.nestestValue;
    } else {
      dataIndices = series.getData().indicesOfNearest(dataDim[0], value, // Add a threshold to avoid find the wrong dataIndex
      // when data length is not same.
      // false,
      axis.type === 'category' ? 0.5 : null);

      if (!dataIndices.length) {
        return;
      }

      seriesNestestValue = series.getData().get(dataDim[0], dataIndices[0]);
    }

    if (seriesNestestValue == null || !isFinite(seriesNestestValue)) {
      return;
    }

    var diff = value - seriesNestestValue;
    var dist = Math.abs(diff); // Consider category case

    if (dist <= minDist) {
      if (dist < minDist || diff >= 0 && minDiff < 0) {
        minDist = dist;
        minDiff = diff;
        snapToValue = seriesNestestValue;
        payloadBatch.length = 0;
      }

      each(dataIndices, function (dataIndex) {
        payloadBatch.push({
          seriesIndex: series.seriesIndex,
          dataIndexInside: dataIndex,
          dataIndex: series.getData().getRawIndex(dataIndex)
        });
      });
    }
  });
  return {
    payloadBatch: payloadBatch,
    snapToValue: snapToValue
  };
}

function showPointer(showValueMap, axisInfo, value, payloadBatch) {
  showValueMap[axisInfo.key] = {
    value: value,
    payloadBatch: payloadBatch
  };
}

function showTooltip(dataByCoordSys, axisInfo, payloadInfo, value) {
  var payloadBatch = payloadInfo.payloadBatch;
  var axis = axisInfo.axis;
  var axisModel = axis.model;
  var axisPointerModel = axisInfo.axisPointerModel; // If no data, do not create anything in dataByCoordSys,
  // whose length will be used to judge whether dispatch action.

  if (!axisInfo.triggerTooltip || !payloadBatch.length) {
    return;
  }

  var coordSysModel = axisInfo.coordSys.model;
  var coordSysKey = modelHelper.makeKey(coordSysModel);
  var coordSysItem = dataByCoordSys.map[coordSysKey];

  if (!coordSysItem) {
    coordSysItem = dataByCoordSys.map[coordSysKey] = {
      coordSysId: coordSysModel.id,
      coordSysIndex: coordSysModel.componentIndex,
      coordSysType: coordSysModel.type,
      coordSysMainType: coordSysModel.mainType,
      dataByAxis: []
    };
    dataByCoordSys.list.push(coordSysItem);
  }

  coordSysItem.dataByAxis.push({
    axisDim: axis.dim,
    axisIndex: axisModel.componentIndex,
    axisType: axisModel.type,
    axisId: axisModel.id,
    value: value,
    // Caustion: viewHelper.getValueLabel is actually on "view stage", which
    // depends that all models have been updated. So it should not be performed
    // here. Considering axisPointerModel used here is volatile, which is hard
    // to be retrieve in TooltipView, we prepare parameters here.
    valueLabelOpt: {
      precision: axisPointerModel.get('label.precision'),
      formatter: axisPointerModel.get('label.formatter')
    },
    seriesDataIndices: payloadBatch.slice()
  });
}

function updateModelActually(showValueMap, axesInfo, outputFinder) {
  var outputAxesInfo = outputFinder.axesInfo = []; // Basic logic: If no 'show' required, 'hide' this axisPointer.

  each(axesInfo, function (axisInfo, key) {
    var option = axisInfo.axisPointerModel.option;
    var valItem = showValueMap[key];

    if (valItem) {
      !axisInfo.useHandle && (option.status = 'show');
      option.value = valItem.value; // For label formatter param and highlight.

      option.seriesDataIndices = (valItem.payloadBatch || []).slice();
    } // When always show (e.g., handle used), remain
    // original value and status.
    else {
        // If hide, value still need to be set, consider
        // click legend to toggle axis blank.
        !axisInfo.useHandle && (option.status = 'hide');
      } // If status is 'hide', should be no info in payload.


    option.status === 'show' && outputAxesInfo.push({
      axisDim: axisInfo.axis.dim,
      axisIndex: axisInfo.axis.model.componentIndex,
      value: option.value
    });
  });
}

function dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction) {
  // Basic logic: If no showTip required, hideTip will be dispatched.
  if (illegalPoint(point) || !dataByCoordSys.list.length) {
    dispatchAction({
      type: 'hideTip'
    });
    return;
  } // In most case only one axis (or event one series is used). It is
  // convinient to fetch payload.seriesIndex and payload.dataIndex
  // dirtectly. So put the first seriesIndex and dataIndex of the first
  // axis on the payload.


  var sampleItem = ((dataByCoordSys.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  dispatchAction({
    type: 'showTip',
    escapeConnect: true,
    x: point[0],
    y: point[1],
    tooltipOption: payload.tooltipOption,
    position: payload.position,
    dataIndexInside: sampleItem.dataIndexInside,
    dataIndex: sampleItem.dataIndex,
    seriesIndex: sampleItem.seriesIndex,
    dataByCoordSys: dataByCoordSys.list
  });
}

function dispatchHighDownActually(axesInfo, dispatchAction, api) {
  // FIXME
  // highlight status modification shoule be a stage of main process?
  // (Consider confilct (e.g., legend and axisPointer) and setOption)
  var zr = api.getZr();
  var highDownKey = 'axisPointerLastHighlights';
  var lastHighlights = inner(zr)[highDownKey] || {};
  var newHighlights = inner(zr)[highDownKey] = {}; // Update highlight/downplay status according to axisPointer model.
  // Build hash map and remove duplicate incidentally.

  each(axesInfo, function (axisInfo, key) {
    var option = axisInfo.axisPointerModel.option;
    option.status === 'show' && each(option.seriesDataIndices, function (batchItem) {
      var key = batchItem.seriesIndex + ' | ' + batchItem.dataIndex;
      newHighlights[key] = batchItem;
    });
  }); // Diff.

  var toHighlight = [];
  var toDownplay = [];
  zrUtil.each(lastHighlights, function (batchItem, key) {
    !newHighlights[key] && toDownplay.push(batchItem);
  });
  zrUtil.each(newHighlights, function (batchItem, key) {
    !lastHighlights[key] && toHighlight.push(batchItem);
  });
  toDownplay.length && api.dispatchAction({
    type: 'downplay',
    escapeConnect: true,
    batch: toDownplay
  });
  toHighlight.length && api.dispatchAction({
    type: 'highlight',
    escapeConnect: true,
    batch: toHighlight
  });
}

function findInputAxisInfo(inputAxesInfo, axisInfo) {
  for (var i = 0; i < (inputAxesInfo || []).length; i++) {
    var inputAxisInfo = inputAxesInfo[i];

    if (axisInfo.axis.dim === inputAxisInfo.axisDim && axisInfo.axis.model.componentIndex === inputAxisInfo.axisIndex) {
      return inputAxisInfo;
    }
  }
}

function makeMapperParam(axisInfo) {
  var axisModel = axisInfo.axis.model;
  var item = {};
  var dim = item.axisDim = axisInfo.axis.dim;
  item.axisIndex = item[dim + 'AxisIndex'] = axisModel.componentIndex;
  item.axisName = item[dim + 'AxisName'] = axisModel.name;
  item.axisId = item[dim + 'AxisId'] = axisModel.id;
  return item;
}

function illegalPoint(point) {
  return !point || point[0] == null || isNaN(point[0]) || point[1] == null || isNaN(point[1]);
}

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js ***!
  \*******************************************************************************/
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

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var modelUtil = __webpack_require__(/*! ../../util/model */ "./node_modules/echarts/lib/util/model.js");

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

/**
 * @param {Object} finder contains {seriesIndex, dataIndex, dataIndexInside}
 * @param {module:echarts/model/Global} ecModel
 * @return {Object} {point: [x, y], el: ...} point Will not be null.
 */
function _default(finder, ecModel) {
  var point = [];
  var seriesIndex = finder.seriesIndex;
  var seriesModel;

  if (seriesIndex == null || !(seriesModel = ecModel.getSeriesByIndex(seriesIndex))) {
    return {
      point: []
    };
  }

  var data = seriesModel.getData();
  var dataIndex = modelUtil.queryDataIndex(data, finder);

  if (dataIndex == null || dataIndex < 0 || zrUtil.isArray(dataIndex)) {
    return {
      point: []
    };
  }

  var el = data.getItemGraphicEl(dataIndex);
  var coordSys = seriesModel.coordinateSystem;

  if (seriesModel.getTooltipPosition) {
    point = seriesModel.getTooltipPosition(dataIndex) || [];
  } else if (coordSys && coordSys.dataToPoint) {
    point = coordSys.dataToPoint(data.getValues(zrUtil.map(coordSys.dimensions, function (dim) {
      return data.mapDimension(dim);
    }), dataIndex, true)) || [];
  } else if (el) {
    // Use graphic bounding rect
    var rect = el.getBoundingRect().clone();
    rect.applyTransform(el.transform);
    point = [rect.x + rect.width / 2, rect.y + rect.height / 2];
  }

  return {
    point: point,
    el: el
  };
}

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/component/axisPointer/globalListener.js":
/*!**************************************************************************!*\
  !*** ./node_modules/echarts/lib/component/axisPointer/globalListener.js ***!
  \**************************************************************************/
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

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var env = __webpack_require__(/*! zrender/lib/core/env */ "./node_modules/zrender/lib/core/env.js");

var _model = __webpack_require__(/*! ../../util/model */ "./node_modules/echarts/lib/util/model.js");

var makeInner = _model.makeInner;

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
var inner = makeInner();
var each = zrUtil.each;
/**
 * @param {string} key
 * @param {module:echarts/ExtensionAPI} api
 * @param {Function} handler
 *      param: {string} currTrigger
 *      param: {Array.<number>} point
 */

function register(key, api, handler) {
  if (env.node) {
    return;
  }

  var zr = api.getZr();
  inner(zr).records || (inner(zr).records = {});
  initGlobalListeners(zr, api);
  var record = inner(zr).records[key] || (inner(zr).records[key] = {});
  record.handler = handler;
}

function initGlobalListeners(zr, api) {
  if (inner(zr).initialized) {
    return;
  }

  inner(zr).initialized = true;
  useHandler('click', zrUtil.curry(doEnter, 'click'));
  useHandler('mousemove', zrUtil.curry(doEnter, 'mousemove')); // useHandler('mouseout', onLeave);

  useHandler('globalout', onLeave);

  function useHandler(eventType, cb) {
    zr.on(eventType, function (e) {
      var dis = makeDispatchAction(api);
      each(inner(zr).records, function (record) {
        record && cb(record, e, dis.dispatchAction);
      });
      dispatchTooltipFinally(dis.pendings, api);
    });
  }
}

function dispatchTooltipFinally(pendings, api) {
  var showLen = pendings.showTip.length;
  var hideLen = pendings.hideTip.length;
  var actuallyPayload;

  if (showLen) {
    actuallyPayload = pendings.showTip[showLen - 1];
  } else if (hideLen) {
    actuallyPayload = pendings.hideTip[hideLen - 1];
  }

  if (actuallyPayload) {
    actuallyPayload.dispatchAction = null;
    api.dispatchAction(actuallyPayload);
  }
}

function onLeave(record, e, dispatchAction) {
  record.handler('leave', null, dispatchAction);
}

function doEnter(currTrigger, record, e, dispatchAction) {
  record.handler(currTrigger, e, dispatchAction);
}

function makeDispatchAction(api) {
  var pendings = {
    showTip: [],
    hideTip: []
  }; // FIXME
  // better approach?
  // 'showTip' and 'hideTip' can be triggered by axisPointer and tooltip,
  // which may be conflict, (axisPointer call showTip but tooltip call hideTip);
  // So we have to add "final stage" to merge those dispatched actions.

  var dispatchAction = function (payload) {
    var pendingList = pendings[payload.type];

    if (pendingList) {
      pendingList.push(payload);
    } else {
      payload.dispatchAction = dispatchAction;
      api.dispatchAction(payload);
    }
  };

  return {
    dispatchAction: dispatchAction,
    pendings: pendings
  };
}
/**
 * @param {string} key
 * @param {module:echarts/ExtensionAPI} api
 */


function unregister(key, api) {
  if (env.node) {
    return;
  }

  var zr = api.getZr();
  var record = (inner(zr).records || {})[key];

  if (record) {
    inner(zr).records[key] = null;
  }
}

exports.register = register;
exports.unregister = unregister;

/***/ }),

/***/ "./node_modules/echarts/lib/component/axisPointer/viewHelper.js":
/*!**********************************************************************!*\
  !*** ./node_modules/echarts/lib/component/axisPointer/viewHelper.js ***!
  \**********************************************************************/
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

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var graphic = __webpack_require__(/*! ../../util/graphic */ "./node_modules/echarts/lib/util/graphic.js");

var textContain = __webpack_require__(/*! zrender/lib/contain/text */ "./node_modules/zrender/lib/contain/text.js");

var formatUtil = __webpack_require__(/*! ../../util/format */ "./node_modules/echarts/lib/util/format.js");

var matrix = __webpack_require__(/*! zrender/lib/core/matrix */ "./node_modules/zrender/lib/core/matrix.js");

var axisHelper = __webpack_require__(/*! ../../coord/axisHelper */ "./node_modules/echarts/lib/coord/axisHelper.js");

var AxisBuilder = __webpack_require__(/*! ../axis/AxisBuilder */ "./node_modules/echarts/lib/component/axis/AxisBuilder.js");

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

/**
 * @param {module:echarts/model/Model} axisPointerModel
 */
function buildElStyle(axisPointerModel) {
  var axisPointerType = axisPointerModel.get('type');
  var styleModel = axisPointerModel.getModel(axisPointerType + 'Style');
  var style;

  if (axisPointerType === 'line') {
    style = styleModel.getLineStyle();
    style.fill = null;
  } else if (axisPointerType === 'shadow') {
    style = styleModel.getAreaStyle();
    style.stroke = null;
  }

  return style;
}
/**
 * @param {Function} labelPos {align, verticalAlign, position}
 */


function buildLabelElOption(elOption, axisModel, axisPointerModel, api, labelPos) {
  var value = axisPointerModel.get('value');
  var text = getValueLabel(value, axisModel.axis, axisModel.ecModel, axisPointerModel.get('seriesDataIndices'), {
    precision: axisPointerModel.get('label.precision'),
    formatter: axisPointerModel.get('label.formatter')
  });
  var labelModel = axisPointerModel.getModel('label');
  var paddings = formatUtil.normalizeCssArray(labelModel.get('padding') || 0);
  var font = labelModel.getFont();
  var textRect = textContain.getBoundingRect(text, font);
  var position = labelPos.position;
  var width = textRect.width + paddings[1] + paddings[3];
  var height = textRect.height + paddings[0] + paddings[2]; // Adjust by align.

  var align = labelPos.align;
  align === 'right' && (position[0] -= width);
  align === 'center' && (position[0] -= width / 2);
  var verticalAlign = labelPos.verticalAlign;
  verticalAlign === 'bottom' && (position[1] -= height);
  verticalAlign === 'middle' && (position[1] -= height / 2); // Not overflow ec container

  confineInContainer(position, width, height, api);
  var bgColor = labelModel.get('backgroundColor');

  if (!bgColor || bgColor === 'auto') {
    bgColor = axisModel.get('axisLine.lineStyle.color');
  }

  elOption.label = {
    shape: {
      x: 0,
      y: 0,
      width: width,
      height: height,
      r: labelModel.get('borderRadius')
    },
    position: position.slice(),
    // TODO: rich
    style: {
      text: text,
      textFont: font,
      textFill: labelModel.getTextColor(),
      textPosition: 'inside',
      fill: bgColor,
      stroke: labelModel.get('borderColor') || 'transparent',
      lineWidth: labelModel.get('borderWidth') || 0,
      shadowBlur: labelModel.get('shadowBlur'),
      shadowColor: labelModel.get('shadowColor'),
      shadowOffsetX: labelModel.get('shadowOffsetX'),
      shadowOffsetY: labelModel.get('shadowOffsetY')
    },
    // Lable should be over axisPointer.
    z2: 10
  };
} // Do not overflow ec container


function confineInContainer(position, width, height, api) {
  var viewWidth = api.getWidth();
  var viewHeight = api.getHeight();
  position[0] = Math.min(position[0] + width, viewWidth) - width;
  position[1] = Math.min(position[1] + height, viewHeight) - height;
  position[0] = Math.max(position[0], 0);
  position[1] = Math.max(position[1], 0);
}
/**
 * @param {number} value
 * @param {module:echarts/coord/Axis} axis
 * @param {module:echarts/model/Global} ecModel
 * @param {Object} opt
 * @param {Array.<Object>} seriesDataIndices
 * @param {number|string} opt.precision 'auto' or a number
 * @param {string|Function} opt.formatter label formatter
 */


function getValueLabel(value, axis, ecModel, seriesDataIndices, opt) {
  value = axis.scale.parse(value);
  var text = axis.scale.getLabel( // If `precision` is set, width can be fixed (like '12.00500'), which
  // helps to debounce when when moving label.
  value, {
    precision: opt.precision
  });
  var formatter = opt.formatter;

  if (formatter) {
    var params = {
      value: axisHelper.getAxisRawValue(axis, value),
      seriesData: []
    };
    zrUtil.each(seriesDataIndices, function (idxItem) {
      var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
      var dataIndex = idxItem.dataIndexInside;
      var dataParams = series && series.getDataParams(dataIndex);
      dataParams && params.seriesData.push(dataParams);
    });

    if (zrUtil.isString(formatter)) {
      text = formatter.replace('{value}', text);
    } else if (zrUtil.isFunction(formatter)) {
      text = formatter(params);
    }
  }

  return text;
}
/**
 * @param {module:echarts/coord/Axis} axis
 * @param {number} value
 * @param {Object} layoutInfo {
 *  rotation, position, labelOffset, labelDirection, labelMargin
 * }
 */


function getTransformedPosition(axis, value, layoutInfo) {
  var transform = matrix.create();
  matrix.rotate(transform, transform, layoutInfo.rotation);
  matrix.translate(transform, transform, layoutInfo.position);
  return graphic.applyTransform([axis.dataToCoord(value), (layoutInfo.labelOffset || 0) + (layoutInfo.labelDirection || 1) * (layoutInfo.labelMargin || 0)], transform);
}

function buildCartesianSingleLabelElOption(value, elOption, layoutInfo, axisModel, axisPointerModel, api) {
  var textLayout = AxisBuilder.innerTextLayout(layoutInfo.rotation, 0, layoutInfo.labelDirection);
  layoutInfo.labelMargin = axisPointerModel.get('label.margin');
  buildLabelElOption(elOption, axisModel, axisPointerModel, api, {
    position: getTransformedPosition(axisModel.axis, value, layoutInfo),
    align: textLayout.textAlign,
    verticalAlign: textLayout.textVerticalAlign
  });
}
/**
 * @param {Array.<number>} p1
 * @param {Array.<number>} p2
 * @param {number} [xDimIndex=0] or 1
 */


function makeLineShape(p1, p2, xDimIndex) {
  xDimIndex = xDimIndex || 0;
  return {
    x1: p1[xDimIndex],
    y1: p1[1 - xDimIndex],
    x2: p2[xDimIndex],
    y2: p2[1 - xDimIndex]
  };
}
/**
 * @param {Array.<number>} xy
 * @param {Array.<number>} wh
 * @param {number} [xDimIndex=0] or 1
 */


function makeRectShape(xy, wh, xDimIndex) {
  xDimIndex = xDimIndex || 0;
  return {
    x: xy[xDimIndex],
    y: xy[1 - xDimIndex],
    width: wh[xDimIndex],
    height: wh[1 - xDimIndex]
  };
}

function makeSectorShape(cx, cy, r0, r, startAngle, endAngle) {
  return {
    cx: cx,
    cy: cy,
    r0: r0,
    r: r,
    startAngle: startAngle,
    endAngle: endAngle,
    clockwise: true
  };
}

exports.buildElStyle = buildElStyle;
exports.buildLabelElOption = buildLabelElOption;
exports.getValueLabel = getValueLabel;
exports.getTransformedPosition = getTransformedPosition;
exports.buildCartesianSingleLabelElOption = buildCartesianSingleLabelElOption;
exports.makeLineShape = makeLineShape;
exports.makeRectShape = makeRectShape;
exports.makeSectorShape = makeSectorShape;

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

/***/ }),

/***/ "./node_modules/echarts/lib/component/tooltip.js":
/*!*******************************************************!*\
  !*** ./node_modules/echarts/lib/component/tooltip.js ***!
  \*******************************************************/
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

__webpack_require__(/*! ./axisPointer */ "./node_modules/echarts/lib/component/axisPointer.js");

__webpack_require__(/*! ./tooltip/TooltipModel */ "./node_modules/echarts/lib/component/tooltip/TooltipModel.js");

__webpack_require__(/*! ./tooltip/TooltipView */ "./node_modules/echarts/lib/component/tooltip/TooltipView.js");

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
// FIXME Better way to pack data in graphic element

/**
 * @action
 * @property {string} type
 * @property {number} seriesIndex
 * @property {number} dataIndex
 * @property {number} [x]
 * @property {number} [y]
 */
echarts.registerAction({
  type: 'showTip',
  event: 'showTip',
  update: 'tooltip:manuallyShowTip'
}, // noop
function () {});
echarts.registerAction({
  type: 'hideTip',
  event: 'hideTip',
  update: 'tooltip:manuallyHideTip'
}, // noop
function () {});

/***/ }),

/***/ "./node_modules/echarts/lib/component/tooltip/TooltipContent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/echarts/lib/component/tooltip/TooltipContent.js ***!
  \**********************************************************************/
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

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var zrColor = __webpack_require__(/*! zrender/lib/tool/color */ "./node_modules/zrender/lib/tool/color.js");

var eventUtil = __webpack_require__(/*! zrender/lib/core/event */ "./node_modules/zrender/lib/core/event.js");

var env = __webpack_require__(/*! zrender/lib/core/env */ "./node_modules/zrender/lib/core/env.js");

var formatUtil = __webpack_require__(/*! ../../util/format */ "./node_modules/echarts/lib/util/format.js");

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
var each = zrUtil.each;
var toCamelCase = formatUtil.toCamelCase;
var vendors = ['', '-webkit-', '-moz-', '-o-'];
var gCssText = 'position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;';
/**
 * @param {number} duration
 * @return {string}
 * @inner
 */

function assembleTransition(duration) {
  var transitionCurve = 'cubic-bezier(0.23, 1, 0.32, 1)';
  var transitionText = 'left ' + duration + 's ' + transitionCurve + ',' + 'top ' + duration + 's ' + transitionCurve;
  return zrUtil.map(vendors, function (vendorPrefix) {
    return vendorPrefix + 'transition:' + transitionText;
  }).join(';');
}
/**
 * @param {Object} textStyle
 * @return {string}
 * @inner
 */


function assembleFont(textStyleModel) {
  var cssText = [];
  var fontSize = textStyleModel.get('fontSize');
  var color = textStyleModel.getTextColor();
  color && cssText.push('color:' + color);
  cssText.push('font:' + textStyleModel.getFont());
  fontSize && cssText.push('line-height:' + Math.round(fontSize * 3 / 2) + 'px');
  each(['decoration', 'align'], function (name) {
    var val = textStyleModel.get(name);
    val && cssText.push('text-' + name + ':' + val);
  });
  return cssText.join(';');
}
/**
 * @param {Object} tooltipModel
 * @return {string}
 * @inner
 */


function assembleCssText(tooltipModel) {
  var cssText = [];
  var transitionDuration = tooltipModel.get('transitionDuration');
  var backgroundColor = tooltipModel.get('backgroundColor');
  var textStyleModel = tooltipModel.getModel('textStyle');
  var padding = tooltipModel.get('padding'); // Animation transition. Do not animate when transitionDuration is 0.

  transitionDuration && cssText.push(assembleTransition(transitionDuration));

  if (backgroundColor) {
    if (env.canvasSupported) {
      cssText.push('background-Color:' + backgroundColor);
    } else {
      // for ie
      cssText.push('background-Color:#' + zrColor.toHex(backgroundColor));
      cssText.push('filter:alpha(opacity=70)');
    }
  } // Border style


  each(['width', 'color', 'radius'], function (name) {
    var borderName = 'border-' + name;
    var camelCase = toCamelCase(borderName);
    var val = tooltipModel.get(camelCase);
    val != null && cssText.push(borderName + ':' + val + (name === 'color' ? '' : 'px'));
  }); // Text style

  cssText.push(assembleFont(textStyleModel)); // Padding

  if (padding != null) {
    cssText.push('padding:' + formatUtil.normalizeCssArray(padding).join('px ') + 'px');
  }

  return cssText.join(';') + ';';
}
/**
 * @alias module:echarts/component/tooltip/TooltipContent
 * @constructor
 */


function TooltipContent(container, api) {
  if (env.wxa) {
    return null;
  }

  var el = document.createElement('div');
  var zr = this._zr = api.getZr();
  this.el = el;
  this._x = api.getWidth() / 2;
  this._y = api.getHeight() / 2;
  container.appendChild(el);
  this._container = container;
  this._show = false;
  /**
   * @private
   */

  this._hideTimeout;
  var self = this;

  el.onmouseenter = function () {
    // clear the timeout in hideLater and keep showing tooltip
    if (self._enterable) {
      clearTimeout(self._hideTimeout);
      self._show = true;
    }

    self._inContent = true;
  };

  el.onmousemove = function (e) {
    e = e || window.event;

    if (!self._enterable) {
      // Try trigger zrender event to avoid mouse
      // in and out shape too frequently
      var handler = zr.handler;
      eventUtil.normalizeEvent(container, e, true);
      handler.dispatch('mousemove', e);
    }
  };

  el.onmouseleave = function () {
    if (self._enterable) {
      if (self._show) {
        self.hideLater(self._hideDelay);
      }
    }

    self._inContent = false;
  };
}

TooltipContent.prototype = {
  constructor: TooltipContent,

  /**
   * @private
   * @type {boolean}
   */
  _enterable: true,

  /**
   * Update when tooltip is rendered
   */
  update: function () {
    // FIXME
    // Move this logic to ec main?
    var container = this._container;
    var stl = container.currentStyle || document.defaultView.getComputedStyle(container);
    var domStyle = container.style;

    if (domStyle.position !== 'absolute' && stl.position !== 'absolute') {
      domStyle.position = 'relative';
    } // Hide the tooltip
    // PENDING
    // this.hide();

  },
  show: function (tooltipModel) {
    clearTimeout(this._hideTimeout);
    var el = this.el;
    el.style.cssText = gCssText + assembleCssText(tooltipModel) // http://stackoverflow.com/questions/21125587/css3-transition-not-working-in-chrome-anymore
    + ';left:' + this._x + 'px;top:' + this._y + 'px;' + (tooltipModel.get('extraCssText') || '');
    el.style.display = el.innerHTML ? 'block' : 'none'; // If mouse occsionally move over the tooltip, a mouseout event will be
    // triggered by canvas, and cuase some unexpectable result like dragging
    // stop, "unfocusAdjacency". Here `pointer-events: none` is used to solve
    // it. Although it is not suppored by IE8~IE10, fortunately it is a rare
    // scenario.

    el.style.pointerEvents = this._enterable ? 'auto' : 'none';
    this._show = true;
  },
  setContent: function (content) {
    this.el.innerHTML = content == null ? '' : content;
  },
  setEnterable: function (enterable) {
    this._enterable = enterable;
  },
  getSize: function () {
    var el = this.el;
    return [el.clientWidth, el.clientHeight];
  },
  moveTo: function (x, y) {
    // xy should be based on canvas root. But tooltipContent is
    // the sibling of canvas root. So padding of ec container
    // should be considered here.
    var zr = this._zr;
    var viewportRootOffset;

    if (zr && zr.painter && (viewportRootOffset = zr.painter.getViewportRootOffset())) {
      x += viewportRootOffset.offsetLeft;
      y += viewportRootOffset.offsetTop;
    }

    var style = this.el.style;
    style.left = x + 'px';
    style.top = y + 'px';
    this._x = x;
    this._y = y;
  },
  hide: function () {
    this.el.style.display = 'none';
    this._show = false;
  },
  hideLater: function (time) {
    if (this._show && !(this._inContent && this._enterable)) {
      if (time) {
        this._hideDelay = time; // Set show false to avoid invoke hideLater mutiple times

        this._show = false;
        this._hideTimeout = setTimeout(zrUtil.bind(this.hide, this), time);
      } else {
        this.hide();
      }
    }
  },
  isShow: function () {
    return this._show;
  },
  getOuterSize: function () {
    var width = this.el.clientWidth;
    var height = this.el.clientHeight; // Consider browser compatibility.
    // IE8 does not support getComputedStyle.

    if (document.defaultView && document.defaultView.getComputedStyle) {
      var stl = document.defaultView.getComputedStyle(this.el);

      if (stl) {
        width += parseInt(stl.paddingLeft, 10) + parseInt(stl.paddingRight, 10) + parseInt(stl.borderLeftWidth, 10) + parseInt(stl.borderRightWidth, 10);
        height += parseInt(stl.paddingTop, 10) + parseInt(stl.paddingBottom, 10) + parseInt(stl.borderTopWidth, 10) + parseInt(stl.borderBottomWidth, 10);
      }
    }

    return {
      width: width,
      height: height
    };
  }
};
var _default = TooltipContent;
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/component/tooltip/TooltipModel.js":
/*!********************************************************************!*\
  !*** ./node_modules/echarts/lib/component/tooltip/TooltipModel.js ***!
  \********************************************************************/
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

var echarts = __webpack_require__(/*! ../../echarts */ "./node_modules/echarts/lib/echarts.js");

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
var _default = echarts.extendComponentModel({
  type: 'tooltip',
  dependencies: ['axisPointer'],
  defaultOption: {
    zlevel: 0,
    z: 60,
    show: true,
    // tooltip主体内容
    showContent: true,
    // 'trigger' only works on coordinate system.
    // 'item' | 'axis' | 'none'
    trigger: 'item',
    // 'click' | 'mousemove' | 'none'
    triggerOn: 'mousemove|click',
    alwaysShowContent: false,
    displayMode: 'single',
    // 'single' | 'multipleByCoordSys'
    renderMode: 'auto',
    // 'auto' | 'html' | 'richText'
    // 'auto': use html by default, and use non-html if `document` is not defined
    // 'html': use html for tooltip
    // 'richText': use canvas, svg, and etc. for tooltip
    // 位置 {Array} | {Function}
    // position: null
    // Consider triggered from axisPointer handle, verticalAlign should be 'middle'
    // align: null,
    // verticalAlign: null,
    // 是否约束 content 在 viewRect 中。默认 false 是为了兼容以前版本。
    confine: false,
    // 内容格式器：{string}（Template） ¦ {Function}
    // formatter: null
    showDelay: 0,
    // 隐藏延迟，单位ms
    hideDelay: 100,
    // 动画变换时间，单位s
    transitionDuration: 0.4,
    enterable: false,
    // 提示背景颜色，默认为透明度为0.7的黑色
    backgroundColor: 'rgba(50,50,50,0.7)',
    // 提示边框颜色
    borderColor: '#333',
    // 提示边框圆角，单位px，默认为4
    borderRadius: 4,
    // 提示边框线宽，单位px，默认为0（无边框）
    borderWidth: 0,
    // 提示内边距，单位px，默认各方向内边距为5，
    // 接受数组分别设定上右下左边距，同css
    padding: 5,
    // Extra css text
    extraCssText: '',
    // 坐标轴指示器，坐标轴触发有效
    axisPointer: {
      // 默认为直线
      // 可选为：'line' | 'shadow' | 'cross'
      type: 'line',
      // type 为 line 的时候有效，指定 tooltip line 所在的轴，可选
      // 可选 'x' | 'y' | 'angle' | 'radius' | 'auto'
      // 默认 'auto'，会选择类型为 category 的轴，对于双数值轴，笛卡尔坐标系会默认选择 x 轴
      // 极坐标系会默认选择 angle 轴
      axis: 'auto',
      animation: 'auto',
      animationDurationUpdate: 200,
      animationEasingUpdate: 'exponentialOut',
      crossStyle: {
        color: '#999',
        width: 1,
        type: 'dashed',
        // TODO formatter
        textStyle: {} // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.

      }
    },
    textStyle: {
      color: '#fff',
      fontSize: 14
    }
  }
});

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/component/tooltip/TooltipRichContent.js":
/*!**************************************************************************!*\
  !*** ./node_modules/echarts/lib/component/tooltip/TooltipRichContent.js ***!
  \**************************************************************************/
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

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var Text = __webpack_require__(/*! zrender/lib/graphic/Text */ "./node_modules/zrender/lib/graphic/Text.js");

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
// import Group from 'zrender/src/container/Group';

/**
 * @alias module:echarts/component/tooltip/TooltipRichContent
 * @constructor
 */
function TooltipRichContent(api) {
  this._zr = api.getZr();
  this._show = false;
  /**
   * @private
   */

  this._hideTimeout;
}

TooltipRichContent.prototype = {
  constructor: TooltipRichContent,

  /**
   * @private
   * @type {boolean}
   */
  _enterable: true,

  /**
   * Update when tooltip is rendered
   */
  update: function () {// noop
  },
  show: function (tooltipModel) {
    if (this._hideTimeout) {
      clearTimeout(this._hideTimeout);
    }

    this.el.attr('show', true);
    this._show = true;
  },

  /**
   * Set tooltip content
   *
   * @param {string} content rich text string of content
   * @param {Object} markerRich rich text style
   * @param {Object} tooltipModel tooltip model
   */
  setContent: function (content, markerRich, tooltipModel) {
    if (this.el) {
      this._zr.remove(this.el);
    }

    var markers = {};
    var text = content;
    var prefix = '{marker';
    var suffix = '|}';
    var startId = text.indexOf(prefix);

    while (startId >= 0) {
      var endId = text.indexOf(suffix);
      var name = text.substr(startId + prefix.length, endId - startId - prefix.length);

      if (name.indexOf('sub') > -1) {
        markers['marker' + name] = {
          textWidth: 4,
          textHeight: 4,
          textBorderRadius: 2,
          textBackgroundColor: markerRich[name],
          // TODO: textOffset is not implemented for rich text
          textOffset: [3, 0]
        };
      } else {
        markers['marker' + name] = {
          textWidth: 10,
          textHeight: 10,
          textBorderRadius: 5,
          textBackgroundColor: markerRich[name]
        };
      }

      text = text.substr(endId + 1);
      startId = text.indexOf('{marker');
    }

    this.el = new Text({
      style: {
        rich: markers,
        text: content,
        textLineHeight: 20,
        textBackgroundColor: tooltipModel.get('backgroundColor'),
        textBorderRadius: tooltipModel.get('borderRadius'),
        textFill: tooltipModel.get('textStyle.color'),
        textPadding: tooltipModel.get('padding')
      },
      z: tooltipModel.get('z')
    });

    this._zr.add(this.el);

    var self = this;
    this.el.on('mouseover', function () {
      // clear the timeout in hideLater and keep showing tooltip
      if (self._enterable) {
        clearTimeout(self._hideTimeout);
        self._show = true;
      }

      self._inContent = true;
    });
    this.el.on('mouseout', function () {
      if (self._enterable) {
        if (self._show) {
          self.hideLater(self._hideDelay);
        }
      }

      self._inContent = false;
    });
  },
  setEnterable: function (enterable) {
    this._enterable = enterable;
  },
  getSize: function () {
    var bounding = this.el.getBoundingRect();
    return [bounding.width, bounding.height];
  },
  moveTo: function (x, y) {
    if (this.el) {
      this.el.attr('position', [x, y]);
    }
  },
  hide: function () {
    this.el.hide();
    this._show = false;
  },
  hideLater: function (time) {
    if (this._show && !(this._inContent && this._enterable)) {
      if (time) {
        this._hideDelay = time; // Set show false to avoid invoke hideLater mutiple times

        this._show = false;
        this._hideTimeout = setTimeout(zrUtil.bind(this.hide, this), time);
      } else {
        this.hide();
      }
    }
  },
  isShow: function () {
    return this._show;
  },
  getOuterSize: function () {
    return this.getSize();
  }
};
var _default = TooltipRichContent;
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/component/tooltip/TooltipView.js":
/*!*******************************************************************!*\
  !*** ./node_modules/echarts/lib/component/tooltip/TooltipView.js ***!
  \*******************************************************************/
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

var echarts = __webpack_require__(/*! ../../echarts */ "./node_modules/echarts/lib/echarts.js");

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var env = __webpack_require__(/*! zrender/lib/core/env */ "./node_modules/zrender/lib/core/env.js");

var TooltipContent = __webpack_require__(/*! ./TooltipContent */ "./node_modules/echarts/lib/component/tooltip/TooltipContent.js");

var TooltipRichContent = __webpack_require__(/*! ./TooltipRichContent */ "./node_modules/echarts/lib/component/tooltip/TooltipRichContent.js");

var formatUtil = __webpack_require__(/*! ../../util/format */ "./node_modules/echarts/lib/util/format.js");

var numberUtil = __webpack_require__(/*! ../../util/number */ "./node_modules/echarts/lib/util/number.js");

var graphic = __webpack_require__(/*! ../../util/graphic */ "./node_modules/echarts/lib/util/graphic.js");

var findPointFromSeries = __webpack_require__(/*! ../axisPointer/findPointFromSeries */ "./node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js");

var layoutUtil = __webpack_require__(/*! ../../util/layout */ "./node_modules/echarts/lib/util/layout.js");

var Model = __webpack_require__(/*! ../../model/Model */ "./node_modules/echarts/lib/model/Model.js");

var globalListener = __webpack_require__(/*! ../axisPointer/globalListener */ "./node_modules/echarts/lib/component/axisPointer/globalListener.js");

var axisHelper = __webpack_require__(/*! ../../coord/axisHelper */ "./node_modules/echarts/lib/coord/axisHelper.js");

var axisPointerViewHelper = __webpack_require__(/*! ../axisPointer/viewHelper */ "./node_modules/echarts/lib/component/axisPointer/viewHelper.js");

var _model = __webpack_require__(/*! ../../util/model */ "./node_modules/echarts/lib/util/model.js");

var getTooltipRenderMode = _model.getTooltipRenderMode;

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
var bind = zrUtil.bind;
var each = zrUtil.each;
var parsePercent = numberUtil.parsePercent;
var proxyRect = new graphic.Rect({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
});

var _default = echarts.extendComponentView({
  type: 'tooltip',
  init: function (ecModel, api) {
    if (env.node) {
      return;
    }

    var tooltipModel = ecModel.getComponent('tooltip');
    var renderMode = tooltipModel.get('renderMode');
    this._renderMode = getTooltipRenderMode(renderMode);
    var tooltipContent;

    if (this._renderMode === 'html') {
      tooltipContent = new TooltipContent(api.getDom(), api);
      this._newLine = '<br/>';
    } else {
      tooltipContent = new TooltipRichContent(api);
      this._newLine = '\n';
    }

    this._tooltipContent = tooltipContent;
  },
  render: function (tooltipModel, ecModel, api) {
    if (env.node) {
      return;
    } // Reset


    this.group.removeAll();
    /**
     * @private
     * @type {module:echarts/component/tooltip/TooltipModel}
     */

    this._tooltipModel = tooltipModel;
    /**
     * @private
     * @type {module:echarts/model/Global}
     */

    this._ecModel = ecModel;
    /**
     * @private
     * @type {module:echarts/ExtensionAPI}
     */

    this._api = api;
    /**
     * Should be cleaned when render.
     * @private
     * @type {Array.<Array.<Object>>}
     */

    this._lastDataByCoordSys = null;
    /**
     * @private
     * @type {boolean}
     */

    this._alwaysShowContent = tooltipModel.get('alwaysShowContent');
    var tooltipContent = this._tooltipContent;
    tooltipContent.update();
    tooltipContent.setEnterable(tooltipModel.get('enterable'));

    this._initGlobalListener();

    this._keepShow();
  },
  _initGlobalListener: function () {
    var tooltipModel = this._tooltipModel;
    var triggerOn = tooltipModel.get('triggerOn');
    globalListener.register('itemTooltip', this._api, bind(function (currTrigger, e, dispatchAction) {
      // If 'none', it is not controlled by mouse totally.
      if (triggerOn !== 'none') {
        if (triggerOn.indexOf(currTrigger) >= 0) {
          this._tryShow(e, dispatchAction);
        } else if (currTrigger === 'leave') {
          this._hide(dispatchAction);
        }
      }
    }, this));
  },
  _keepShow: function () {
    var tooltipModel = this._tooltipModel;
    var ecModel = this._ecModel;
    var api = this._api; // Try to keep the tooltip show when refreshing

    if (this._lastX != null && this._lastY != null // When user is willing to control tooltip totally using API,
    // self.manuallyShowTip({x, y}) might cause tooltip hide,
    // which is not expected.
    && tooltipModel.get('triggerOn') !== 'none') {
      var self = this;
      clearTimeout(this._refreshUpdateTimeout);
      this._refreshUpdateTimeout = setTimeout(function () {
        // Show tip next tick after other charts are rendered
        // In case highlight action has wrong result
        // FIXME
        self.manuallyShowTip(tooltipModel, ecModel, api, {
          x: self._lastX,
          y: self._lastY
        });
      });
    }
  },

  /**
   * Show tip manually by
   * dispatchAction({
   *     type: 'showTip',
   *     x: 10,
   *     y: 10
   * });
   * Or
   * dispatchAction({
   *      type: 'showTip',
   *      seriesIndex: 0,
   *      dataIndex or dataIndexInside or name
   * });
   *
   *  TODO Batch
   */
  manuallyShowTip: function (tooltipModel, ecModel, api, payload) {
    if (payload.from === this.uid || env.node) {
      return;
    }

    var dispatchAction = makeDispatchAction(payload, api); // Reset ticket

    this._ticket = ''; // When triggered from axisPointer.

    var dataByCoordSys = payload.dataByCoordSys;

    if (payload.tooltip && payload.x != null && payload.y != null) {
      var el = proxyRect;
      el.position = [payload.x, payload.y];
      el.update();
      el.tooltip = payload.tooltip; // Manually show tooltip while view is not using zrender elements.

      this._tryShow({
        offsetX: payload.x,
        offsetY: payload.y,
        target: el
      }, dispatchAction);
    } else if (dataByCoordSys) {
      this._tryShow({
        offsetX: payload.x,
        offsetY: payload.y,
        position: payload.position,
        event: {},
        dataByCoordSys: payload.dataByCoordSys,
        tooltipOption: payload.tooltipOption
      }, dispatchAction);
    } else if (payload.seriesIndex != null) {
      if (this._manuallyAxisShowTip(tooltipModel, ecModel, api, payload)) {
        return;
      }

      var pointInfo = findPointFromSeries(payload, ecModel);
      var cx = pointInfo.point[0];
      var cy = pointInfo.point[1];

      if (cx != null && cy != null) {
        this._tryShow({
          offsetX: cx,
          offsetY: cy,
          position: payload.position,
          target: pointInfo.el,
          event: {}
        }, dispatchAction);
      }
    } else if (payload.x != null && payload.y != null) {
      // FIXME
      // should wrap dispatchAction like `axisPointer/globalListener` ?
      api.dispatchAction({
        type: 'updateAxisPointer',
        x: payload.x,
        y: payload.y
      });

      this._tryShow({
        offsetX: payload.x,
        offsetY: payload.y,
        position: payload.position,
        target: api.getZr().findHover(payload.x, payload.y).target,
        event: {}
      }, dispatchAction);
    }
  },
  manuallyHideTip: function (tooltipModel, ecModel, api, payload) {
    var tooltipContent = this._tooltipContent;

    if (!this._alwaysShowContent && this._tooltipModel) {
      tooltipContent.hideLater(this._tooltipModel.get('hideDelay'));
    }

    this._lastX = this._lastY = null;

    if (payload.from !== this.uid) {
      this._hide(makeDispatchAction(payload, api));
    }
  },
  // Be compatible with previous design, that is, when tooltip.type is 'axis' and
  // dispatchAction 'showTip' with seriesIndex and dataIndex will trigger axis pointer
  // and tooltip.
  _manuallyAxisShowTip: function (tooltipModel, ecModel, api, payload) {
    var seriesIndex = payload.seriesIndex;
    var dataIndex = payload.dataIndex;
    var coordSysAxesInfo = ecModel.getComponent('axisPointer').coordSysAxesInfo;

    if (seriesIndex == null || dataIndex == null || coordSysAxesInfo == null) {
      return;
    }

    var seriesModel = ecModel.getSeriesByIndex(seriesIndex);

    if (!seriesModel) {
      return;
    }

    var data = seriesModel.getData();
    var tooltipModel = buildTooltipModel([data.getItemModel(dataIndex), seriesModel, (seriesModel.coordinateSystem || {}).model, tooltipModel]);

    if (tooltipModel.get('trigger') !== 'axis') {
      return;
    }

    api.dispatchAction({
      type: 'updateAxisPointer',
      seriesIndex: seriesIndex,
      dataIndex: dataIndex,
      position: payload.position
    });
    return true;
  },
  _tryShow: function (e, dispatchAction) {
    var el = e.target;
    var tooltipModel = this._tooltipModel;

    if (!tooltipModel) {
      return;
    } // Save mouse x, mouse y. So we can try to keep showing the tip if chart is refreshed


    this._lastX = e.offsetX;
    this._lastY = e.offsetY;
    var dataByCoordSys = e.dataByCoordSys;

    if (dataByCoordSys && dataByCoordSys.length) {
      this._showAxisTooltip(dataByCoordSys, e);
    } // Always show item tooltip if mouse is on the element with dataIndex
    else if (el && el.dataIndex != null) {
        this._lastDataByCoordSys = null;

        this._showSeriesItemTooltip(e, el, dispatchAction);
      } // Tooltip provided directly. Like legend.
      else if (el && el.tooltip) {
          this._lastDataByCoordSys = null;

          this._showComponentItemTooltip(e, el, dispatchAction);
        } else {
          this._lastDataByCoordSys = null;

          this._hide(dispatchAction);
        }
  },
  _showOrMove: function (tooltipModel, cb) {
    // showDelay is used in this case: tooltip.enterable is set
    // as true. User intent to move mouse into tooltip and click
    // something. `showDelay` makes it easyer to enter the content
    // but tooltip do not move immediately.
    var delay = tooltipModel.get('showDelay');
    cb = zrUtil.bind(cb, this);
    clearTimeout(this._showTimout);
    delay > 0 ? this._showTimout = setTimeout(cb, delay) : cb();
  },
  _showAxisTooltip: function (dataByCoordSys, e) {
    var ecModel = this._ecModel;
    var globalTooltipModel = this._tooltipModel;
    var point = [e.offsetX, e.offsetY];
    var singleDefaultHTML = [];
    var singleParamsList = [];
    var singleTooltipModel = buildTooltipModel([e.tooltipOption, globalTooltipModel]);
    var renderMode = this._renderMode;
    var newLine = this._newLine;
    var markers = {};
    each(dataByCoordSys, function (itemCoordSys) {
      // var coordParamList = [];
      // var coordDefaultHTML = [];
      // var coordTooltipModel = buildTooltipModel([
      //     e.tooltipOption,
      //     itemCoordSys.tooltipOption,
      //     ecModel.getComponent(itemCoordSys.coordSysMainType, itemCoordSys.coordSysIndex),
      //     globalTooltipModel
      // ]);
      // var displayMode = coordTooltipModel.get('displayMode');
      // var paramsList = displayMode === 'single' ? singleParamsList : [];
      each(itemCoordSys.dataByAxis, function (item) {
        var axisModel = ecModel.getComponent(item.axisDim + 'Axis', item.axisIndex);
        var axisValue = item.value;
        var seriesDefaultHTML = [];

        if (!axisModel || axisValue == null) {
          return;
        }

        var valueLabel = axisPointerViewHelper.getValueLabel(axisValue, axisModel.axis, ecModel, item.seriesDataIndices, item.valueLabelOpt);
        zrUtil.each(item.seriesDataIndices, function (idxItem) {
          var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
          var dataIndex = idxItem.dataIndexInside;
          var dataParams = series && series.getDataParams(dataIndex);
          dataParams.axisDim = item.axisDim;
          dataParams.axisIndex = item.axisIndex;
          dataParams.axisType = item.axisType;
          dataParams.axisId = item.axisId;
          dataParams.axisValue = axisHelper.getAxisRawValue(axisModel.axis, axisValue);
          dataParams.axisValueLabel = valueLabel;

          if (dataParams) {
            singleParamsList.push(dataParams);
            var seriesTooltip = series.formatTooltip(dataIndex, true, null, renderMode);
            var html;

            if (zrUtil.isObject(seriesTooltip)) {
              html = seriesTooltip.html;
              var newMarkers = seriesTooltip.markers;
              zrUtil.merge(markers, newMarkers);
            } else {
              html = seriesTooltip;
            }

            seriesDefaultHTML.push(html);
          }
        }); // Default tooltip content
        // FIXME
        // (1) shold be the first data which has name?
        // (2) themeRiver, firstDataIndex is array, and first line is unnecessary.

        var firstLine = valueLabel;

        if (renderMode !== 'html') {
          singleDefaultHTML.push(seriesDefaultHTML.join(newLine));
        } else {
          singleDefaultHTML.push((firstLine ? formatUtil.encodeHTML(firstLine) + newLine : '') + seriesDefaultHTML.join(newLine));
        }
      });
    }, this); // In most case, the second axis is shown upper than the first one.

    singleDefaultHTML.reverse();
    singleDefaultHTML = singleDefaultHTML.join(this._newLine + this._newLine);
    var positionExpr = e.position;

    this._showOrMove(singleTooltipModel, function () {
      if (this._updateContentNotChangedOnAxis(dataByCoordSys)) {
        this._updatePosition(singleTooltipModel, positionExpr, point[0], point[1], this._tooltipContent, singleParamsList);
      } else {
        this._showTooltipContent(singleTooltipModel, singleDefaultHTML, singleParamsList, Math.random(), point[0], point[1], positionExpr, undefined, markers);
      }
    }); // Do not trigger events here, because this branch only be entered
    // from dispatchAction.

  },
  _showSeriesItemTooltip: function (e, el, dispatchAction) {
    var ecModel = this._ecModel; // Use dataModel in element if possible
    // Used when mouseover on a element like markPoint or edge
    // In which case, the data is not main data in series.

    var seriesIndex = el.seriesIndex;
    var seriesModel = ecModel.getSeriesByIndex(seriesIndex); // For example, graph link.

    var dataModel = el.dataModel || seriesModel;
    var dataIndex = el.dataIndex;
    var dataType = el.dataType;
    var data = dataModel.getData();
    var tooltipModel = buildTooltipModel([data.getItemModel(dataIndex), dataModel, seriesModel && (seriesModel.coordinateSystem || {}).model, this._tooltipModel]);
    var tooltipTrigger = tooltipModel.get('trigger');

    if (tooltipTrigger != null && tooltipTrigger !== 'item') {
      return;
    }

    var params = dataModel.getDataParams(dataIndex, dataType);
    var seriesTooltip = dataModel.formatTooltip(dataIndex, false, dataType, this._renderMode);
    var defaultHtml;
    var markers;

    if (zrUtil.isObject(seriesTooltip)) {
      defaultHtml = seriesTooltip.html;
      markers = seriesTooltip.markers;
    } else {
      defaultHtml = seriesTooltip;
      markers = null;
    }

    var asyncTicket = 'item_' + dataModel.name + '_' + dataIndex;

    this._showOrMove(tooltipModel, function () {
      this._showTooltipContent(tooltipModel, defaultHtml, params, asyncTicket, e.offsetX, e.offsetY, e.position, e.target, markers);
    }); // FIXME
    // duplicated showtip if manuallyShowTip is called from dispatchAction.


    dispatchAction({
      type: 'showTip',
      dataIndexInside: dataIndex,
      dataIndex: data.getRawIndex(dataIndex),
      seriesIndex: seriesIndex,
      from: this.uid
    });
  },
  _showComponentItemTooltip: function (e, el, dispatchAction) {
    var tooltipOpt = el.tooltip;

    if (typeof tooltipOpt === 'string') {
      var content = tooltipOpt;
      tooltipOpt = {
        content: content,
        // Fixed formatter
        formatter: content
      };
    }

    var subTooltipModel = new Model(tooltipOpt, this._tooltipModel, this._ecModel);
    var defaultHtml = subTooltipModel.get('content');
    var asyncTicket = Math.random(); // Do not check whether `trigger` is 'none' here, because `trigger`
    // only works on cooridinate system. In fact, we have not found case
    // that requires setting `trigger` nothing on component yet.

    this._showOrMove(subTooltipModel, function () {
      this._showTooltipContent(subTooltipModel, defaultHtml, subTooltipModel.get('formatterParams') || {}, asyncTicket, e.offsetX, e.offsetY, e.position, el);
    }); // If not dispatch showTip, tip may be hide triggered by axis.


    dispatchAction({
      type: 'showTip',
      from: this.uid
    });
  },
  _showTooltipContent: function (tooltipModel, defaultHtml, params, asyncTicket, x, y, positionExpr, el, markers) {
    // Reset ticket
    this._ticket = '';

    if (!tooltipModel.get('showContent') || !tooltipModel.get('show')) {
      return;
    }

    var tooltipContent = this._tooltipContent;
    var formatter = tooltipModel.get('formatter');
    positionExpr = positionExpr || tooltipModel.get('position');
    var html = defaultHtml;

    if (formatter && typeof formatter === 'string') {
      html = formatUtil.formatTpl(formatter, params, true);
    } else if (typeof formatter === 'function') {
      var callback = bind(function (cbTicket, html) {
        if (cbTicket === this._ticket) {
          tooltipContent.setContent(html, markers, tooltipModel);

          this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
        }
      }, this);
      this._ticket = asyncTicket;
      html = formatter(params, asyncTicket, callback);
    }

    tooltipContent.setContent(html, markers, tooltipModel);
    tooltipContent.show(tooltipModel);

    this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
  },

  /**
   * @param  {string|Function|Array.<number>|Object} positionExpr
   * @param  {number} x Mouse x
   * @param  {number} y Mouse y
   * @param  {boolean} confine Whether confine tooltip content in view rect.
   * @param  {Object|<Array.<Object>} params
   * @param  {module:zrender/Element} el target element
   * @param  {module:echarts/ExtensionAPI} api
   * @return {Array.<number>}
   */
  _updatePosition: function (tooltipModel, positionExpr, x, y, content, params, el) {
    var viewWidth = this._api.getWidth();

    var viewHeight = this._api.getHeight();

    positionExpr = positionExpr || tooltipModel.get('position');
    var contentSize = content.getSize();
    var align = tooltipModel.get('align');
    var vAlign = tooltipModel.get('verticalAlign');
    var rect = el && el.getBoundingRect().clone();
    el && rect.applyTransform(el.transform);

    if (typeof positionExpr === 'function') {
      // Callback of position can be an array or a string specify the position
      positionExpr = positionExpr([x, y], params, content.el, rect, {
        viewSize: [viewWidth, viewHeight],
        contentSize: contentSize.slice()
      });
    }

    if (zrUtil.isArray(positionExpr)) {
      x = parsePercent(positionExpr[0], viewWidth);
      y = parsePercent(positionExpr[1], viewHeight);
    } else if (zrUtil.isObject(positionExpr)) {
      positionExpr.width = contentSize[0];
      positionExpr.height = contentSize[1];
      var layoutRect = layoutUtil.getLayoutRect(positionExpr, {
        width: viewWidth,
        height: viewHeight
      });
      x = layoutRect.x;
      y = layoutRect.y;
      align = null; // When positionExpr is left/top/right/bottom,
      // align and verticalAlign will not work.

      vAlign = null;
    } // Specify tooltip position by string 'top' 'bottom' 'left' 'right' around graphic element
    else if (typeof positionExpr === 'string' && el) {
        var pos = calcTooltipPosition(positionExpr, rect, contentSize);
        x = pos[0];
        y = pos[1];
      } else {
        var pos = refixTooltipPosition(x, y, content, viewWidth, viewHeight, align ? null : 20, vAlign ? null : 20);
        x = pos[0];
        y = pos[1];
      }

    align && (x -= isCenterAlign(align) ? contentSize[0] / 2 : align === 'right' ? contentSize[0] : 0);
    vAlign && (y -= isCenterAlign(vAlign) ? contentSize[1] / 2 : vAlign === 'bottom' ? contentSize[1] : 0);

    if (tooltipModel.get('confine')) {
      var pos = confineTooltipPosition(x, y, content, viewWidth, viewHeight);
      x = pos[0];
      y = pos[1];
    }

    content.moveTo(x, y);
  },
  // FIXME
  // Should we remove this but leave this to user?
  _updateContentNotChangedOnAxis: function (dataByCoordSys) {
    var lastCoordSys = this._lastDataByCoordSys;
    var contentNotChanged = !!lastCoordSys && lastCoordSys.length === dataByCoordSys.length;
    contentNotChanged && each(lastCoordSys, function (lastItemCoordSys, indexCoordSys) {
      var lastDataByAxis = lastItemCoordSys.dataByAxis || {};
      var thisItemCoordSys = dataByCoordSys[indexCoordSys] || {};
      var thisDataByAxis = thisItemCoordSys.dataByAxis || [];
      contentNotChanged &= lastDataByAxis.length === thisDataByAxis.length;
      contentNotChanged && each(lastDataByAxis, function (lastItem, indexAxis) {
        var thisItem = thisDataByAxis[indexAxis] || {};
        var lastIndices = lastItem.seriesDataIndices || [];
        var newIndices = thisItem.seriesDataIndices || [];
        contentNotChanged &= lastItem.value === thisItem.value && lastItem.axisType === thisItem.axisType && lastItem.axisId === thisItem.axisId && lastIndices.length === newIndices.length;
        contentNotChanged && each(lastIndices, function (lastIdxItem, j) {
          var newIdxItem = newIndices[j];
          contentNotChanged &= lastIdxItem.seriesIndex === newIdxItem.seriesIndex && lastIdxItem.dataIndex === newIdxItem.dataIndex;
        });
      });
    });
    this._lastDataByCoordSys = dataByCoordSys;
    return !!contentNotChanged;
  },
  _hide: function (dispatchAction) {
    // Do not directly hideLater here, because this behavior may be prevented
    // in dispatchAction when showTip is dispatched.
    // FIXME
    // duplicated hideTip if manuallyHideTip is called from dispatchAction.
    this._lastDataByCoordSys = null;
    dispatchAction({
      type: 'hideTip',
      from: this.uid
    });
  },
  dispose: function (ecModel, api) {
    if (env.node) {
      return;
    }

    this._tooltipContent.hide();

    globalListener.unregister('itemTooltip', api);
  }
});
/**
 * @param {Array.<Object|module:echarts/model/Model>} modelCascade
 * From top to bottom. (the last one should be globalTooltipModel);
 */


function buildTooltipModel(modelCascade) {
  var resultModel = modelCascade.pop();

  while (modelCascade.length) {
    var tooltipOpt = modelCascade.pop();

    if (tooltipOpt) {
      if (Model.isInstance(tooltipOpt)) {
        tooltipOpt = tooltipOpt.get('tooltip', true);
      } // In each data item tooltip can be simply write:
      // {
      //  value: 10,
      //  tooltip: 'Something you need to know'
      // }


      if (typeof tooltipOpt === 'string') {
        tooltipOpt = {
          formatter: tooltipOpt
        };
      }

      resultModel = new Model(tooltipOpt, resultModel, resultModel.ecModel);
    }
  }

  return resultModel;
}

function makeDispatchAction(payload, api) {
  return payload.dispatchAction || zrUtil.bind(api.dispatchAction, api);
}

function refixTooltipPosition(x, y, content, viewWidth, viewHeight, gapH, gapV) {
  var size = content.getOuterSize();
  var width = size.width;
  var height = size.height;

  if (gapH != null) {
    if (x + width + gapH > viewWidth) {
      x -= width + gapH;
    } else {
      x += gapH;
    }
  }

  if (gapV != null) {
    if (y + height + gapV > viewHeight) {
      y -= height + gapV;
    } else {
      y += gapV;
    }
  }

  return [x, y];
}

function confineTooltipPosition(x, y, content, viewWidth, viewHeight) {
  var size = content.getOuterSize();
  var width = size.width;
  var height = size.height;
  x = Math.min(x + width, viewWidth) - width;
  y = Math.min(y + height, viewHeight) - height;
  x = Math.max(x, 0);
  y = Math.max(y, 0);
  return [x, y];
}

function calcTooltipPosition(position, rect, contentSize) {
  var domWidth = contentSize[0];
  var domHeight = contentSize[1];
  var gap = 5;
  var x = 0;
  var y = 0;
  var rectWidth = rect.width;
  var rectHeight = rect.height;

  switch (position) {
    case 'inside':
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y + rectHeight / 2 - domHeight / 2;
      break;

    case 'top':
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y - domHeight - gap;
      break;

    case 'bottom':
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y + rectHeight + gap;
      break;

    case 'left':
      x = rect.x - domWidth - gap;
      y = rect.y + rectHeight / 2 - domHeight / 2;
      break;

    case 'right':
      x = rect.x + rectWidth + gap;
      y = rect.y + rectHeight / 2 - domHeight / 2;
  }

  return [x, y];
}

function isCenterAlign(align) {
  return align === 'center' || align === 'middle';
}

module.exports = _default;

/***/ })

})
//# sourceMappingURL=_app.js.a4bef5bc776e32c11bd7.hot-update.js.map