(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_apiTokens_ListApiTokens_js"],{

/***/ "./resources/js/components/ApiToken/ApiToken.js":
/*!******************************************************!*\
  !*** ./resources/js/components/ApiToken/ApiToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var ApiToken = function ApiToken(_ref) {
  var name = _ref.name,
      label = _ref.label,
      value = _ref.value;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CFormGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CLabel, {
      htmlFor: name,
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInputGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInput, {
        type: "text",
        name: name,
        value: value,
        readOnly: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInputGroupAppend, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__.CopyToClipboard, {
          text: value,
          onCopy: function onCopy() {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success('Copied');
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CButton, {
            type: "button",
            color: "primary",
            children: "Copy"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiToken);

/***/ }),

/***/ "./resources/js/components/CardSkeleton/CardSkeleton.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/CardSkeleton/CardSkeleton.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var primereact_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/skeleton */ "./node_modules/primereact/skeleton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var CardSkeleton = function CardSkeleton() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
          className: "my-auto",
          xs: "12",
          md: "12",
          lg: "1",
          xl: "1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(primereact_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
              size: "5rem"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
          className: "my-auto",
          xs: "12",
          md: "12",
          lg: "11",
          xl: "11",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(primereact_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
            className: "mb-2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(primereact_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
            width: "10rem"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(primereact_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
        className: "mb-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(primereact_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
        width: "10rem",
        className: "mb-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(primereact_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
        width: "5rem",
        className: "mb-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(primereact_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
        height: "2rem",
        className: "mb-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(primereact_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
        width: "10rem",
        height: "4rem",
        className: "mb-2"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardSkeleton);

/***/ }),

/***/ "./resources/js/components/Error/Error.js":
/*!************************************************!*\
  !*** ./resources/js/components/Error/Error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Error = function Error(_ref) {
  var errorMessage = _ref.errorMessage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
    className: "justify-content-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      md: "6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "clearfix text-center mt-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          size: "5xl",
          name: "cil-warning"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
          className: "pt-3",
          children: "Oops! Something went wrong."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "text-muted",
          children: errorMessage || 'The resource you are looking for was not found.'
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }),

/***/ "./resources/js/redux/apiToken/apiToken.actions.js":
/*!*********************************************************!*\
  !*** ./resources/js/redux/apiToken/apiToken.actions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchApiTokensStart": () => (/* binding */ fetchApiTokensStart),
/* harmony export */   "fetchApiTokensSuccess": () => (/* binding */ fetchApiTokensSuccess),
/* harmony export */   "fetchApiTokensFailure": () => (/* binding */ fetchApiTokensFailure),
/* harmony export */   "fetchApiTokensStartAsync": () => (/* binding */ fetchApiTokensStartAsync)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _apiToken_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiToken.types */ "./resources/js/redux/apiToken/apiToken.types.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/config */ "./resources/js/data/config.js");


 // Read

var fetchApiTokensStart = function fetchApiTokensStart() {
  return {
    type: _apiToken_types__WEBPACK_IMPORTED_MODULE_1__.default.FETCH_API_TOKENS_START
  };
};
var fetchApiTokensSuccess = function fetchApiTokensSuccess(tokens) {
  return {
    type: _apiToken_types__WEBPACK_IMPORTED_MODULE_1__.default.FETCH_API_TOKENS_SUCCESS,
    payload: tokens
  };
};
var fetchApiTokensFailure = function fetchApiTokensFailure(errorMessage) {
  return {
    type: _apiToken_types__WEBPACK_IMPORTED_MODULE_1__.default.FETCH_API_TOKENS_FAILURE,
    payload: errorMessage
  };
};
var fetchApiTokensStartAsync = function fetchApiTokensStartAsync() {
  return function (dispatch) {
    dispatch(fetchApiTokensStart());
    axios.get("".concat(_data_config__WEBPACK_IMPORTED_MODULE_2__.API_ENDPOINT, "/tokens")).then(function (result) {
      dispatch(fetchApiTokensSuccess(result.data.result));
    })["catch"](function (error) {
      dispatch(fetchApiTokensFailure(error.message));
    });
  };
};

/***/ }),

/***/ "./resources/js/views/apiTokens/ListApiTokens.js":
/*!*******************************************************!*\
  !*** ./resources/js/views/apiTokens/ListApiTokens.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _redux_apiToken_apiToken_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/apiToken/apiToken.actions */ "./resources/js/redux/apiToken/apiToken.actions.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Error/Error */ "./resources/js/components/Error/Error.js");
/* harmony import */ var _components_ApiToken_ApiToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ApiToken/ApiToken */ "./resources/js/components/ApiToken/ApiToken.js");
/* harmony import */ var _components_CardSkeleton_CardSkeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CardSkeleton/CardSkeleton */ "./resources/js/components/CardSkeleton/CardSkeleton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var ListApiTokens = function ListApiTokens(props) {
  var uniqueId = props.uniqueId,
      deviceConnectionKey = props.deviceConnectionKey,
      isFetchingApiTokens = props.isFetchingApiTokens,
      fetchApiTokensErrorMessage = props.fetchApiTokensErrorMessage,
      fetchApiTokensStartAsync = props.fetchApiTokensStartAsync;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchApiTokensStartAsync();
  }, []);

  if (isFetchingApiTokens) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_CardSkeleton_CardSkeleton__WEBPACK_IMPORTED_MODULE_7__.default, {});
  } else if (fetchApiTokensErrorMessage) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Error_Error__WEBPACK_IMPORTED_MODULE_5__.default, {
      errorMessage: fetchApiTokensErrorMessage
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
        xs: "12",
        md: "12",
        className: "mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCard, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCardHeader, {
            children: "API Tokens"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCardBody, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CAlert, {
              color: "danger",
              children: "You should never disclose your API tokens to anyone!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ApiToken_ApiToken__WEBPACK_IMPORTED_MODULE_6__.default, {
              name: "unique_id",
              label: "Unique ID",
              value: uniqueId
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ApiToken_ApiToken__WEBPACK_IMPORTED_MODULE_6__.default, {
              name: "device_connection_key",
              label: "Device Connection Key",
              value: deviceConnectionKey
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {})]
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    uniqueId: state.apiToken.uniqueId,
    deviceConnectionKey: state.apiToken.deviceConnectionKey,
    isFetchingApiTokens: state.apiToken.isFetchingApiTokens,
    fetchApiTokensErrorMessage: state.apiToken.fetchApiTokensErrorMessage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchApiTokensStartAsync: function fetchApiTokensStartAsync() {
      return dispatch((0,_redux_apiToken_apiToken_actions__WEBPACK_IMPORTED_MODULE_4__.fetchApiTokensStartAsync)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(ListApiTokens));

/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/goober/dist/goober.modern.js":
/*!***************************************************!*\
  !*** ./node_modules/goober/dist/goober.modern.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ p),
/* harmony export */   "extractCss": () => (/* binding */ r),
/* harmony export */   "glob": () => (/* binding */ g),
/* harmony export */   "keyframes": () => (/* binding */ b),
/* harmony export */   "setup": () => (/* binding */ h),
/* harmony export */   "styled": () => (/* binding */ m)
/* harmony export */ });
let e={data:""},t=t=>{if("undefined"!=typeof window){let e=t?t.querySelector("#_goober"):window._goober;return e||(e=(t||document.head).appendChild(document.createElement("style")),e.innerHTML=" ",e.id="_goober"),e.firstChild}return t||e},r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([A-Z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,a=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,n=(e,t)=>{let r,l="",a="",o="";for(let c in e){let s=e[c];"object"==typeof s?(r=t?t.replace(/([^,])+/g,e=>c.replace(/([^,])+/g,t=>/&/g.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):c,a+="@"==c[0]?"f"==c[1]?n(s,c):c+"{"+n(s,"k"==c[1]?"":t)+"}":n(s,r)):"@"==c[0]&&"i"==c[1]?l=c+" "+s+";":o+=n.p?n.p(c.replace(/[A-Z]/g,"-$&").toLowerCase(),s):c.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+s+";"}return o[0]?(r=t?t+"{"+o+"}":o,l+r+a):l+a},o={},c=e=>{let t="";for(let r in e)t+=r+("object"==typeof e[r]?c(e[r]):e[r]);return t},s=(e,t,r,s,i)=>{let p="object"==typeof e?c(e):e,u=o[p]||(o[p]="go"+p.split("").reduce((e,t)=>101*e+t.charCodeAt(0)>>>0,11));if(!o[u]){let t="object"==typeof e?e:(e=>{let t,r=[{}];for(;t=l.exec(e.replace(a,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]})(e);o[u]=n(i?{["@keyframes "+u]:t}:t,r?"":"."+u)}return((e,t,r)=>{-1==t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(o[u],t,s),u},i=(e,t,r)=>e.reduce((e,l,a)=>{let o=t[a];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":n(e,""):e}return e+l+(null==o?"":o)},"");function p(e){let r=this||{},l=e.call?e(r.p):e;return s(l.unshift?l.raw?i(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>t?Object.assign(e,t.call?t(r.p):t):e,{}):l,t(r.target),r.g,r.o,r.k)}let u,d,f,g=p.bind({g:1}),b=p.bind({k:1});function h(e,t,r,l){n.p=t,u=e,d=r,f=l}function m(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:d&&d()},c),r.o=/ *go\d+/g.test(s),c.className=p.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=c.as||e;return f&&i[0]&&f(c),u(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/Component.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/Component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CopyToClipboard = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _copyToClipboard = _interopRequireDefault(__webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _text = _this$props2.text,
          _onCopy = _this$props2.onCopy,
          _options = _this$props2.options,
          children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, ["text", "onCopy", "options", "children"]);

      var elem = _react["default"].Children.only(children);

      return _react["default"].cloneElement(elem, _objectSpread({}, props, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

exports.CopyToClipboard = CopyToClipboard;

_defineProperty(CopyToClipboard, "defaultProps", {
  onCopy: undefined,
  options: undefined
});

/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ./Component */ "./node_modules/react-copy-to-clipboard/lib/Component.js"),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-hot-toast/dist/react-hot-toast.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ActionType": () => (/* binding */ ActionType),
/* harmony export */   "CheckmarkIcon": () => (/* binding */ CheckmarkIcon),
/* harmony export */   "ErrorIcon": () => (/* binding */ ErrorIcon),
/* harmony export */   "LoaderIcon": () => (/* binding */ LoaderIcon),
/* harmony export */   "ToastBar": () => (/* binding */ ToastBar),
/* harmony export */   "Toaster": () => (/* binding */ Toaster),
/* harmony export */   "dispatch": () => (/* binding */ dispatch),
/* harmony export */   "toast": () => (/* binding */ toast),
/* harmony export */   "useToaster": () => (/* binding */ useToaster),
/* harmony export */   "useToasterStore": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.modern.js");



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var isFunction = function isFunction(valOrFunction) {
  return typeof valOrFunction === 'function';
};

var resolveValueOrFunction = function resolveValueOrFunction(valOrFunction, arg) {
  return isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
};

var genId = /*#__PURE__*/function () {
  var count = 0;
  return function () {
    return (++count).toString();
  };
}();

var TOAST_LIMIT = 20;
var ActionType;

(function (ActionType) {
  ActionType[ActionType["ADD_TOAST"] = 0] = "ADD_TOAST";
  ActionType[ActionType["UPDATE_TOAST"] = 1] = "UPDATE_TOAST";
  ActionType[ActionType["UPSERT_TOAST"] = 2] = "UPSERT_TOAST";
  ActionType[ActionType["DISMISS_TOAST"] = 3] = "DISMISS_TOAST";
  ActionType[ActionType["REMOVE_TOAST"] = 4] = "REMOVE_TOAST";
  ActionType[ActionType["START_PAUSE"] = 5] = "START_PAUSE";
  ActionType[ActionType["END_PAUSE"] = 6] = "END_PAUSE";
})(ActionType || (ActionType = {}));

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return _extends({}, state, {
        toasts: [action.toast].concat(state.toasts).slice(0, TOAST_LIMIT)
      });

    case ActionType.UPDATE_TOAST:
      return _extends({}, state, {
        toasts: state.toasts.map(function (t) {
          return t.id === action.toast.id ? _extends({}, t, action.toast) : t;
        })
      });

    case ActionType.UPSERT_TOAST:
      var toast = action.toast;
      return state.toasts.find(function (t) {
        return t.id === toast.id;
      }) ? reducer(state, {
        type: ActionType.UPDATE_TOAST,
        toast: toast
      }) : reducer(state, {
        type: ActionType.ADD_TOAST,
        toast: toast
      });

    case ActionType.DISMISS_TOAST:
      return _extends({}, state, {
        toasts: state.toasts.map(function (t) {
          return t.id === action.toastId || action.toastId === undefined ? _extends({}, t, {
            visible: false
          }) : t;
        })
      });

    case ActionType.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return _extends({}, state, {
          toasts: []
        });
      }

      return _extends({}, state, {
        toasts: state.toasts.filter(function (t) {
          return t.id !== action.toastId;
        })
      });

    case ActionType.START_PAUSE:
      return _extends({}, state, {
        pausedAt: action.time
      });

    case ActionType.END_PAUSE:
      var diff = action.time - (state.pausedAt || 0);
      return _extends({}, state, {
        pausedAt: undefined,
        toasts: state.toasts.map(function (t) {
          return _extends({}, t, {
            pauseDuration: t.pauseDuration + diff
          });
        })
      });
  }
};
var listeners = [];
var memoryState = {
  toasts: [],
  pausedAt: undefined
};
var dispatch = function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach(function (listener) {
    listener(memoryState);
  });
};
var defaultTimeouts = {
  blank: 4000,
  error: 4000,
  success: 2000,
  loading: 30000
};
var useStore = function useStore(toastOptions) {
  if (toastOptions === void 0) {
    toastOptions = {};
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(memoryState),
      state = _useState[0],
      setState = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    listeners.push(setState);
    return function () {
      var index = listeners.indexOf(setState);

      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  var mergedToasts = state.toasts.map(function (t) {
    var _toastOptions$t$type, _toastOptions, _toastOptions$t$type2;

    return _extends({}, toastOptions, toastOptions[t.type], t, {
      duration: t.duration || ((_toastOptions$t$type = toastOptions[t.type]) == null ? void 0 : _toastOptions$t$type.duration) || ((_toastOptions = toastOptions) == null ? void 0 : _toastOptions.duration) || defaultTimeouts[t.type],
      style: _extends({}, toastOptions.style, (_toastOptions$t$type2 = toastOptions[t.type]) == null ? void 0 : _toastOptions$t$type2.style, t.style)
    });
  });
  return _extends({}, state, {
    toasts: mergedToasts
  });
};

var createToast = function createToast(message, type, opts) {
  if (type === void 0) {
    type = 'blank';
  }

  return _extends({
    id: (opts == null ? void 0 : opts.id) || genId(),
    createdAt: Date.now(),
    visible: true,
    type: type,
    role: 'status',
    ariaLive: 'polite',
    message: message,
    pauseDuration: 0
  }, opts);
};

var createHandler = function createHandler(type) {
  return function (message, options) {
    var toast = createToast(message, type, options);
    dispatch({
      type: ActionType.UPSERT_TOAST,
      toast: toast
    });
    return toast.id;
  };
};

var toast = function toast(message, opts) {
  return createHandler('blank')(message, opts);
};

toast.error = /*#__PURE__*/createHandler('error');
toast.success = /*#__PURE__*/createHandler('success');
toast.loading = /*#__PURE__*/createHandler('loading');

toast.dismiss = function (toastId) {
  dispatch({
    type: ActionType.DISMISS_TOAST,
    toastId: toastId
  });
  setTimeout(function () {
    dispatch({
      type: ActionType.REMOVE_TOAST,
      toastId: toastId
    });
  }, 1000);
};

toast.remove = function (toastId) {
  return dispatch({
    type: ActionType.REMOVE_TOAST,
    toastId: toastId
  });
};

toast.promise = function (promise, msgs, opts) {
  var id = toast.loading(msgs.loading, _extends({}, opts, opts == null ? void 0 : opts.loading));
  promise.then(function (p) {
    toast.success(resolveValueOrFunction(msgs.success, p), _extends({
      id: id
    }, opts, opts == null ? void 0 : opts.success));
    return p;
  })["catch"](function (e) {
    toast.error(resolveValueOrFunction(msgs.error, e), _extends({
      id: id
    }, opts, opts == null ? void 0 : opts.error));
  });
  return promise;
};

var useToaster = function useToaster(toastOptions) {
  var _useStore = useStore(toastOptions),
      toasts = _useStore.toasts,
      pausedAt = _useStore.pausedAt;

  var visibleToasts = toasts.filter(function (t) {
    return t.visible;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (pausedAt) {
      return;
    }

    var now = Date.now();
    var timeouts = toasts.map(function (t) {
      var durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);

      if (durationLeft < 0) {
        if (t.visible) {
          toast.dismiss(t.id);
        }

        return;
      }

      return setTimeout(function () {
        return toast.dismiss(t.id);
      }, durationLeft);
    });
    return function () {
      timeouts.forEach(function (timeout) {
        return timeout && clearTimeout(timeout);
      });
    };
  }, [toasts, pausedAt]);
  var handlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      startPause: function startPause() {
        dispatch({
          type: ActionType.START_PAUSE,
          time: Date.now()
        });
      },
      endPause: function endPause() {
        if (pausedAt) {
          dispatch({
            type: ActionType.END_PAUSE,
            time: Date.now()
          });
        }
      },
      updateHeight: function updateHeight(toastId, height) {
        return dispatch({
          type: ActionType.UPDATE_TOAST,
          toast: {
            id: toastId,
            height: height
          }
        });
      },
      calculateOffset: function calculateOffset(toastId, opts) {
        var _ref = opts || {},
            _ref$reverseOrder = _ref.reverseOrder,
            reverseOrder = _ref$reverseOrder === void 0 ? false : _ref$reverseOrder,
            _ref$margin = _ref.margin,
            margin = _ref$margin === void 0 ? 8 : _ref$margin;

        var index = visibleToasts.findIndex(function (toast) {
          return toast.id === toastId;
        });
        var offset = index !== -1 ? visibleToasts.slice.apply(visibleToasts, reverseOrder ? [index + 1] : [0, index]).reduce(function (acc, t) {
          return acc + (t.height || 0) + margin;
        }, 0) : 0;
        return offset;
      }
    };
  }, [visibleToasts, pausedAt]);
  return {
    toasts: toasts,
    visibleToasts: visibleToasts,
    handlers: handlers
  };
};

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ", ";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  from {\n    transform: scale(0) rotate(90deg);\n\t opacity: 0;\n  }\n\n  to {\n    transform: scale(1) rotate(90deg);\n\t opacity: 1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  from {\n    transform: scale(0);\n\t opacity: 0;\n  }\n\n  to {\n    transform: scale(1);\n\t opacity: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  from {\n    transform: scale(0) rotate(45deg);\n\t opacity: 0;\n  }\n\n  to {\n    transform: scale(1) rotate(45deg);\n\t opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var circleAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject());
var firstLineAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject2());
var secondLineAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject3());
var ErrorIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject4(), function (p) {
  return p.primary || '#ff4b4b';
}, circleAnimation, firstLineAnimation, function (p) {
  return p.secondary || '#fff';
}, secondLineAnimation);

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ", ";\n  border-right-color: ", ";\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var rotate = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject$1());
var LoaderIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$1(), function (p) {
  return p.secondary || '#e0e0e0';
}, function (p) {
  return p.primary || '#616161';
}, rotate);

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: ", " 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ", ";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n  0% {\n\t\theight: 0;\n\t\twidth: 0;\n\t\topacity: 0;\n  }\n\n  40% {\n\t\theight: 0;\n\t\twidth: 6px;\n\t\topacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n\t\theight: 10px;\n  }\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  from {\n    transform: scale(0) rotate(45deg);\n\t opacity: 0;\n  }\n\n  to {\n    transform: scale(1) rotate(45deg);\n\t opacity: 1;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var circleAnimation$1 = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject$2());
var checkmarkAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject2$2());
var CheckmarkIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject3$1(), function (p) {
  return p.primary || '#61d345';
}, circleAnimation$1, checkmarkAnimation, function (p) {
  return p.secondary || '#fff';
});

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StatusWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject$3());
var IndicatorWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$3());
var Indicator = function Indicator(_ref) {
  var type = _ref.type,
      theme = _ref.theme;

  if (type === 'blank') {
    return null;
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IndicatorWrapper, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoaderIcon, Object.assign({}, theme)), type !== 'loading' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StatusWrapper, null, type === 'error' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorIcon, Object.assign({}, theme)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckmarkIcon, Object.assign({}, theme))));
};

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: ", " 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\n\nto {\n  transform: scale(1);\n  opacity: 1;\n}\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var enter = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject$4());
var AnimatedIconWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$4(), enter);

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["", ""]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["", ""]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1;\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  margin: 16px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

var enterAnimation = function enterAnimation(factor) {
  return "\n0% {transform: translate3d(0," + factor * -80 + "px,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n";
};

var exitAnimation = function exitAnimation(factor) {
  return "\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0," + factor * -130 + "px,-1px) scale(.5); opacity:0;}\n";
};

var ToastBarBase = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div', react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)( /*#__PURE__*/_templateObject$5());
var Message = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$5());

var getPositionStyle = function getPositionStyle(position, offset) {
  var top = position.includes('top');
  var verticalStyle = top ? {
    top: 0
  } : {
    bottom: 0
  };
  var horizontalStyle = position.includes('left') ? {
    left: 0
  } : position.includes('right') ? {
    right: 0
  } : {
    left: 0,
    pointerEvents: 'none',
    right: 0,
    justifyContent: 'center'
  };
  return _extends({
    position: 'fixed',
    transition: 'all 230ms cubic-bezier(.21,1.02,.73,1)',
    transform: "translateY(" + offset * (top ? 1 : -1) + "px)"
  }, verticalStyle, horizontalStyle);
};

var getAnimationStyle = function getAnimationStyle(position, visible) {
  var top = position.includes('top');
  var factor = top ? 1 : -1;
  return visible ? {
    animation: (0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject3$2(), enterAnimation(factor)) + " 0.35s cubic-bezier(.21,1.02,.73,1) forwards"
  } : {
    animation: (0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject4$1(), exitAnimation(factor)) + " 0.8s forwards cubic-bezier(.06,.71,.55,1)",
    pointerEvents: 'none'
  };
};

var ToastBar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref) {
  var toast = _ref.toast,
      position = _ref.position,
      props = _objectWithoutPropertiesLoose(_ref, ["toast", "position"]);

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (el) {
    if (el) {
      setTimeout(function () {
        var boundingRect = el.getBoundingClientRect();
        props.onHeight(boundingRect.height);
      });
    }
  }, []);
  var positionStyle = getPositionStyle(position, props.offset);
  var animationStyle = toast != null && toast.height ? getAnimationStyle(position, toast.visible) : {
    opacity: 0
  };

  var renderIcon = function renderIcon() {
    var icon = toast.icon,
        type = toast.type,
        iconTheme = toast.iconTheme;

    if (icon !== undefined) {
      if (typeof icon === 'string') {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AnimatedIconWrapper, null, icon);
      } else {
        return icon;
      }
    }

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Indicator, {
      theme: iconTheme,
      type: type
    });
  };

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _extends({
      display: 'flex',
      zIndex: toast.visible ? 9999 : undefined
    }, positionStyle)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastBarBase, {
    ref: ref,
    className: toast.className,
    style: _extends({}, animationStyle, toast.style)
  }, renderIcon(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Message, {
    role: toast.role,
    "aria-live": toast.ariaLive
  }, resolveValueOrFunction(toast.message, toast))));
});

(0,goober__WEBPACK_IMPORTED_MODULE_1__.setup)(react__WEBPACK_IMPORTED_MODULE_0__.createElement);
var Toaster = function Toaster(_ref) {
  var reverseOrder = _ref.reverseOrder,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top-center' : _ref$position,
      containerStyle = _ref.containerStyle,
      toastOptions = _ref.toastOptions;

  var _useToaster = useToaster(toastOptions),
      toasts = _useToaster.toasts,
      handlers = _useToaster.handlers;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _extends({
      position: 'fixed',
      zIndex: 9999
    }, containerStyle),
    onMouseEnter: handlers.startPause,
    onMouseLeave: handlers.endPause
  }, toasts.map(function (t) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastBar, {
      key: t.id,
      onHeight: function onHeight(height) {
        return handlers.updateHeight(t.id, height);
      },
      toast: t,
      offset: handlers.calculateOffset(t.id, {
        reverseOrder: reverseOrder
      }),
      position: position
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toast);

//# sourceMappingURL=react-hot-toast.esm.js.map


/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ })

}]);