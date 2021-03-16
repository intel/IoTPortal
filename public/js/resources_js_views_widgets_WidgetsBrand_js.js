(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_widgets_WidgetsBrand_js"],{

/***/ "./resources/js/views/charts/ChartLineSimple.js":
/*!******************************************************!*\
  !*** ./resources/js/views/charts/ChartLineSimple.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/coreui-utils.common.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var ChartLineSimple = function ChartLineSimple(props) {
  var borderColor = props.borderColor,
      backgroundColor = props.backgroundColor,
      pointHoverBackgroundColor = props.pointHoverBackgroundColor,
      dataPoints = props.dataPoints,
      label = props.label,
      pointed = props.pointed,
      attributes = _objectWithoutProperties(props, ["borderColor", "backgroundColor", "pointHoverBackgroundColor", "dataPoints", "label", "pointed"]);

  var pointHoverColor = function () {
    if (pointHoverBackgroundColor) {
      return pointHoverBackgroundColor;
    } else if (backgroundColor !== 'transparent') {
      return backgroundColor;
    }

    return borderColor;
  }();

  var defaultDatasets = function () {
    return [{
      data: dataPoints,
      borderColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.getColor)(borderColor),
      backgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.getColor)(backgroundColor),
      pointBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.getColor)(pointHoverColor),
      pointHoverBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.getColor)(pointHoverColor),
      label: label
    }];
  }();

  var pointedOptions = function () {
    return {
      scales: {
        xAxes: [{
          offset: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, dataPoints) - 5,
            max: Math.max.apply(Math, dataPoints) + 5
          }
        }]
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    };
  }();

  var straightOptions = function () {
    return {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    };
  }();

  var defaultOptions = function () {
    var options = pointed ? pointedOptions : straightOptions;
    return Object.assign({}, options, {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    });
  }();

  var computedDatasets = function () {
    return (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.deepObjectsMerge)(defaultDatasets, attributes.datasets || {});
  }();

  var computedOptions = function () {
    return (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.deepObjectsMerge)(defaultOptions, attributes.options || {});
  }(); // render


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartLine, _objectSpread(_objectSpread({}, attributes), {}, {
    datasets: computedDatasets,
    options: computedOptions,
    labels: label
  }));
};

ChartLineSimple.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  //
  borderColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  pointHoverBackgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  dataPoints: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  pointed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ChartLineSimple.defaultProps = {
  borderColor: 'rgba(255,255,255,.55)',
  backgroundColor: 'transparent',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartLineSimple);

/***/ }),

/***/ "./resources/js/views/widgets/WidgetsBrand.js":
/*!****************************************************!*\
  !*** ./resources/js/views/widgets/WidgetsBrand.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../charts/ChartLineSimple */ "./resources/js/views/charts/ChartLineSimple.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var WidgetsBrand = function WidgetsBrand(_ref) {
  var withCharts = _ref.withCharts;
  // render
  return withCharts ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "facebook",
        rightHeader: "89k",
        rightFooter: "friends",
        leftHeader: "459",
        leftFooter: "feeds",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-facebook",
          height: "52",
          className: "my-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "position-absolute w-100 h-100",
          backgroundColor: "rgba(255,255,255,.1)",
          dataPoints: [65, 59, 84, 84, 51, 55, 40],
          label: "Friends",
          labels: "months"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "twitter",
        rightHeader: "973k",
        rightFooter: "followers",
        leftHeader: "1.792",
        leftFooter: "tweets",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-twitter",
          height: "52",
          className: "my-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "position-absolute w-100 h-100",
          backgroundColor: "rgba(255,255,255,.1)",
          dataPoints: [1, 13, 9, 17, 34, 41, 38],
          label: "Followers",
          labels: "months"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "linkedin",
        rightHeader: "500+",
        rightFooter: "contracts",
        leftHeader: "292",
        leftFooter: "feeds",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-linkedin",
          height: "52",
          className: "my-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "position-absolute w-100 h-100",
          backgroundColor: "rgba(255,255,255,.1)",
          dataPoints: [78, 81, 80, 45, 34, 12, 40],
          label: "Contracts",
          labels: "months"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        rightHeader: "12",
        rightFooter: "events",
        leftHeader: "4",
        leftFooter: "meetings",
        color: "gradient-warning",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cil-calendar",
          height: "52",
          className: "my-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "position-absolute w-100 h-100",
          backgroundColor: "rgba(255,255,255,.1)",
          dataPoints: [35, 23, 56, 22, 97, 23, 64],
          label: "Followers",
          labels: "months"
        })]
      })
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "facebook",
        rightHeader: "89k",
        rightFooter: "friends",
        leftHeader: "459",
        leftFooter: "feeds",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-facebook",
          height: "56",
          className: "my-4"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "twitter",
        rightHeader: "973k",
        rightFooter: "followers",
        leftHeader: "1.792",
        leftFooter: "tweets",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-twitter",
          height: "56",
          className: "my-4"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "linkedin",
        rightHeader: "500+",
        rightFooter: "contracts",
        leftHeader: "292",
        leftFooter: "feeds",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-linkedin",
          height: "56",
          className: "my-4"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        rightHeader: "12",
        rightFooter: "events",
        leftHeader: "4",
        leftFooter: "meetings",
        color: "gradient-warning",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cil-calendar",
          height: "56",
          className: "my-4"
        })
      })
    })]
  });
};

WidgetsBrand.propTypes = {
  withCharts: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetsBrand);

/***/ })

}]);