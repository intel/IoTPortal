(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/views/charts/ChartLineSimple.js":
/*!******************************************************!*\
  !*** ./resources/js/views/charts/ChartLineSimple.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/coreui-utils.common.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      borderColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_2__["getColor"])(borderColor),
      backgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_2__["getColor"])(backgroundColor),
      pointBackgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_2__["getColor"])(pointHoverColor),
      pointHoverBackgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_2__["getColor"])(pointHoverColor),
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
    return Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_2__["deepObjectsMerge"])(defaultDatasets, attributes.datasets || {});
  }();

  var computedOptions = function () {
    return Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_2__["deepObjectsMerge"])(defaultOptions, attributes.options || {});
  }(); // render


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_3__["CChartLine"], _extends({}, attributes, {
    datasets: computedDatasets,
    options: computedOptions,
    labels: label
  }));
};

ChartLineSimple.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  //
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  pointHoverBackgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dataPoints: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  pointed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
ChartLineSimple.defaultProps = {
  borderColor: 'rgba(255,255,255,.55)',
  backgroundColor: 'transparent',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales'
};
/* harmony default export */ __webpack_exports__["default"] = (ChartLineSimple);

/***/ }),

/***/ "./resources/js/views/widgets/WidgetsBrand.js":
/*!****************************************************!*\
  !*** ./resources/js/views/widgets/WidgetsBrand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../charts/ChartLineSimple */ "./resources/js/views/charts/ChartLineSimple.js");






var WidgetsBrand = function WidgetsBrand(_ref) {
  var withCharts = _ref.withCharts;
  // render
  return withCharts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CWidgetBrand"], {
    color: "facebook",
    rightHeader: "89k",
    rightFooter: "friends",
    leftHeader: "459",
    leftFooter: "feeds"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cib-facebook",
    height: "52",
    className: "my-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "position-absolute w-100 h-100",
    backgroundColor: "rgba(255,255,255,.1)",
    dataPoints: [65, 59, 84, 84, 51, 55, 40],
    label: "Friends",
    labels: "months"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CWidgetBrand"], {
    color: "twitter",
    rightHeader: "973k",
    rightFooter: "followers",
    leftHeader: "1.792",
    leftFooter: "tweets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cib-twitter",
    height: "52",
    className: "my-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "position-absolute w-100 h-100",
    backgroundColor: "rgba(255,255,255,.1)",
    dataPoints: [1, 13, 9, 17, 34, 41, 38],
    label: "Followers",
    labels: "months"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CWidgetBrand"], {
    color: "linkedin",
    rightHeader: "500+",
    rightFooter: "contracts",
    leftHeader: "292",
    leftFooter: "feeds"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cib-linkedin",
    height: "52",
    className: "my-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "position-absolute w-100 h-100",
    backgroundColor: "rgba(255,255,255,.1)",
    dataPoints: [78, 81, 80, 45, 34, 12, 40],
    label: "Contracts",
    labels: "months"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CWidgetBrand"], {
    rightHeader: "12",
    rightFooter: "events",
    leftHeader: "4",
    leftFooter: "meetings",
    color: "gradient-warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cil-calendar",
    height: "52",
    className: "my-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "position-absolute w-100 h-100",
    backgroundColor: "rgba(255,255,255,.1)",
    dataPoints: [35, 23, 56, 22, 97, 23, 64],
    label: "Followers",
    labels: "months"
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CWidgetBrand"], {
    color: "facebook",
    rightHeader: "89k",
    rightFooter: "friends",
    leftHeader: "459",
    leftFooter: "feeds"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cib-facebook",
    height: "56",
    className: "my-4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CWidgetBrand"], {
    color: "twitter",
    rightHeader: "973k",
    rightFooter: "followers",
    leftHeader: "1.792",
    leftFooter: "tweets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cib-twitter",
    height: "56",
    className: "my-4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CWidgetBrand"], {
    color: "linkedin",
    rightHeader: "500+",
    rightFooter: "contracts",
    leftHeader: "292",
    leftFooter: "feeds"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cib-linkedin",
    height: "56",
    className: "my-4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
    sm: "6",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CWidgetBrand"], {
    rightHeader: "12",
    rightFooter: "events",
    leftHeader: "4",
    leftFooter: "meetings",
    color: "gradient-warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cil-calendar",
    height: "56",
    className: "my-4"
  }))));
};

WidgetsBrand.propTypes = {
  withCharts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (WidgetsBrand);

/***/ })

}]);