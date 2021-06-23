(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_layout_Layout_js"],{

/***/ "./resources/js/components/ContentErrorBoundary/ContentErrorBoundary.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ContentErrorBoundary/ContentErrorBoundary.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ContentError_ContentError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContentError/ContentError */ "./resources/js/components/ContentError/ContentError.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var ContentErrorBoundary = function ContentErrorBoundary(props) {
  var children = props.children,
      others = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundary, _objectSpread(_objectSpread({
    FallbackComponent: _ContentError_ContentError__WEBPACK_IMPORTED_MODULE_1__.default
  }, others), {}, {
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentErrorBoundary);

/***/ }),

/***/ "./resources/js/components/ContentError/ContentError.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/ContentError/ContentError.js ***!
  \**************************************************************/
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






var ContentError = function ContentError(_ref) {
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
          children: "Sorry, this page isn't available. The link you followed may be broken or the page may have been removed."
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentError);

/***/ }),

/***/ "./resources/js/containers/Content.js":
/*!********************************************!*\
  !*** ./resources/js/containers/Content.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./resources/js/routes.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // routes config





var loading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
  className: "pt-3 text-center",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "sk-spinner sk-spinner-pulse"
  })
});

var Content = function Content() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main", {
    className: "c-main",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CContainer, {
      fluid: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: loading,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
            path: "/:url*(/+)",
            exact: true,
            strict: true,
            render: function render(_ref) {
              var location = _ref.location;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, {
                to: location.pathname.replace(/\/+$/, "")
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
            path: "/:url(.*//+.*)",
            exact: true,
            strict: true,
            render: function render(_ref2) {
              var match = _ref2.match;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, {
                to: "/".concat(match.params.url.replace(/\/\/+/, "/"))
              });
            }
          }), _routes__WEBPACK_IMPORTED_MODULE_2__.default.map(function (route, idx) {
            return route.component && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
              path: route.path,
              exact: route.exact,
              name: route.name,
              render: function render(props) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFade, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(route.component, _objectSpread({}, props))
                });
              }
            }, idx);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, {
            from: "/",
            to: "/dashboard"
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Content));

/***/ }),

/***/ "./resources/js/containers/Footer.js":
/*!*******************************************!*\
  !*** ./resources/js/containers/Footer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Footer = function Footer() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFooter, {
    fixed: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "https://www.intel.com",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Intel IoT Portal"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "ml-1",
        children: "\xA9 2021 Intel."
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Footer));

/***/ }),

/***/ "./resources/js/containers/Header.js":
/*!*******************************************!*\
  !*** ./resources/js/containers/Header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./resources/js/routes.js");
/* harmony import */ var _redux_sidebar_sidebar_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/sidebar/sidebar.types */ "./resources/js/redux/sidebar/sidebar.types.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./resources/js/containers/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



 // routes config







var Header = function Header() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var sidebarShow = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.sidebar.sidebarShow;
  });

  var toggleSidebar = function toggleSidebar() {
    var val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive';
    dispatch({
      type: _redux_sidebar_sidebar_types__WEBPACK_IMPORTED_MODULE_5__.sidebarActionTypes.SET_SIDEBAR_SHOW,
      payload: val
    });
  };

  var toggleSidebarMobile = function toggleSidebarMobile() {
    var val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive';
    dispatch({
      type: _redux_sidebar_sidebar_types__WEBPACK_IMPORTED_MODULE_5__.sidebarActionTypes.SET_SIDEBAR_SHOW,
      payload: val
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CHeader, {
    withSubheader: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CToggler, {
      inHeader: true,
      className: "ml-md-3 d-lg-none",
      onClick: toggleSidebarMobile
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CToggler, {
      inHeader: true,
      className: "ml-3 d-md-down-none",
      onClick: toggleSidebar
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CHeaderBrand, {
      className: "mx-auto d-lg-none",
      to: "/",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
        name: "logo",
        height: "48",
        alt: "Logo"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CHeaderNav, {
      className: "d-md-down-none mr-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CHeaderNavItem, {
        className: "px-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CHeaderNavLink, {
          to: "/dashboard",
          children: "Dashboard"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CHeaderNav, {
      className: "px-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.HeaderDropdown, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSubheader, {
      className: "px-3 justify-content-between",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CBreadcrumbRouter, {
        className: "border-0 c-subheader-nav m-0 px-0 px-md-3",
        routes: _routes__WEBPACK_IMPORTED_MODULE_4__.default
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./resources/js/containers/HeaderDropdown.js":
/*!***************************************************!*\
  !*** ./resources/js/containers/HeaderDropdown.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var primereact_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/skeleton */ "./node_modules/primereact/skeleton.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/config */ "./resources/js/data/config.js");
/* harmony import */ var _redux_profile_profile_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/profile/profile.actions */ "./resources/js/redux/profile/profile.actions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var HeaderDropdown = function HeaderDropdown(_ref) {
  var profile = _ref.profile,
      isFetchingProfile = _ref.isFetchingProfile,
      fetchProfileStartAsync = _ref.fetchProfileStartAsync;
  var csrfToken = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchProfileStartAsync();
  }, []);

  var submitLogout = function submitLogout(event) {
    event.preventDefault();
    document.getElementById('logout-form').submit();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CDropdown, {
      inNav: true,
      className: "c-header-nav-items mx-2",
      direction: "down",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CDropdownToggle, {
        className: "c-header-nav-link",
        caret: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "c-avatar",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CImg, {
            src: '/avatars/default2.png',
            className: "c-avatar-img"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CDropdownMenu, {
        className: "pt-0",
        placement: "bottom-end",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CDropdownItem, {
          header: true,
          tag: "div",
          color: "light",
          className: "text-center",
          children: isFetchingProfile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(primereact_skeleton__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong", {
            children: profile.name
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CDropdownItem, {
          header: true,
          tag: "div",
          color: "light",
          className: "text-center",
          children: isFetchingProfile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(primereact_skeleton__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong", {
            children: profile.email
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CDropdownItem, {
          href: "".concat(_data_config__WEBPACK_IMPORTED_MODULE_5__.APP_URL, "/logout"),
          onClick: submitLogout,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
            name: "cil-account-logout",
            className: "mfe-2"
          }), "Logout"]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("form", {
      id: "logout-form",
      action: "".concat(_data_config__WEBPACK_IMPORTED_MODULE_5__.APP_URL, "/logout"),
      method: "POST",
      className: "d-none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
        type: "hidden",
        name: "_token",
        value: csrfToken
      })
    })]
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profile.profile,
    isFetchingProfile: state.profile.isFetchingProfile
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchProfileStartAsync: function fetchProfileStartAsync() {
      return dispatch((0,_redux_profile_profile_actions__WEBPACK_IMPORTED_MODULE_6__.fetchProfileStartAsync)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(HeaderDropdown));

/***/ }),

/***/ "./resources/js/containers/HeaderDropdownMssg.js":
/*!*******************************************************!*\
  !*** ./resources/js/containers/HeaderDropdownMssg.js ***!
  \*******************************************************/
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






var HeaderDropdownMssg = function HeaderDropdownMssg() {
  var itemsCount = 4;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    inNav: true,
    className: "c-header-nav-item mx-2",
    direction: "down",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
      className: "c-header-nav-link",
      caret: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
        name: "cil-envelope-open"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
        shape: "pill",
        color: "info",
        children: itemsCount
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
      className: "pt-0",
      placement: "bottom-end",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        header: true,
        tag: "div",
        color: "light",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("strong", {
          children: ["You have ", itemsCount, " messages"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "message",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pt-3 mr-3 float-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "c-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CImg, {
                src: 'avatars/7.jpg',
                className: "c-avatar-img",
                alt: "admin@bootstrapmaster.com"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "c-avatar-status bg-success"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted",
              children: "John Doe"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted float-right mt-1",
              children: "Just now"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-truncate font-weight-bold",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "fa fa-exclamation text-danger"
            }), " Important message"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "small text-muted text-truncate",
            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "message",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pt-3 mr-3 float-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "c-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CImg, {
                src: 'avatars/6.jpg',
                className: "c-avatar-img",
                alt: "admin@bootstrapmaster.com"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "c-avatar-status bg-warning"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted",
              children: "Jane Dovve"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted float-right mt-1",
              children: "5 minutes ago"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-truncate font-weight-bold",
            children: "Lorem ipsum dolor sit amet"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "small text-muted text-truncate",
            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "message",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pt-3 mr-3 float-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "c-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CImg, {
                src: 'avatars/5.jpg',
                className: "c-avatar-img",
                alt: "admin@bootstrapmaster.com"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "c-avatar-status bg-danger"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted",
              children: "Janet Doe"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted float-right mt-1",
              children: "1:52 PM"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-truncate font-weight-bold",
            children: "Lorem ipsum dolor sit amet"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "small text-muted text-truncate",
            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "message",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pt-3 mr-3 float-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "c-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CImg, {
                src: 'avatars/4.jpg',
                className: "c-avatar-img",
                alt: "admin@bootstrapmaster.com"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "c-avatar-status bg-info"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted",
              children: "Joe Doe"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted float-right mt-1",
              children: "4:03 AM"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-truncate font-weight-bold",
            children: "Lorem ipsum dolor sit amet"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "small text-muted text-truncate",
            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        href: "#",
        className: "text-center border-top",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: "View all messages"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderDropdownMssg);

/***/ }),

/***/ "./resources/js/containers/HeaderDropdownNotif.js":
/*!********************************************************!*\
  !*** ./resources/js/containers/HeaderDropdownNotif.js ***!
  \********************************************************/
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






var HeaderDropdownNotif = function HeaderDropdownNotif() {
  var itemsCount = 5;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    inNav: true,
    className: "c-header-nav-item mx-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
      className: "c-header-nav-link",
      caret: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
        name: "cil-bell"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
        shape: "pill",
        color: "danger",
        children: itemsCount
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
      placement: "bottom-end",
      className: "pt-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        header: true,
        tag: "div",
        className: "text-center",
        color: "light",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("strong", {
          children: ["You have ", itemsCount, " notifications"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          name: "cil-user-follow",
          className: "mr-2 text-success"
        }), " New user registered"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          name: "cil-user-unfollow",
          className: "mr-2 text-danger"
        }), " User deleted"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          name: "cil-chart-pie",
          className: "mr-2 text-info"
        }), " Sales report is ready"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          name: "cil-basket",
          className: "mr-2 text-primary"
        }), " New client"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          name: "cil-speedometer",
          className: "mr-2 text-warning"
        }), " Server overloaded"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        header: true,
        tag: "div",
        color: "light",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: "Server"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-uppercase mb-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
              children: "CPU Usage"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "info",
          value: 25
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
          className: "text-muted",
          children: "348 Processes. 1/4 Cores."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-uppercase mb-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
              children: "Memory Usage"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "warning",
          value: 70
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
          className: "text-muted",
          children: "11444GB/16384MB"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-uppercase mb-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
              children: "SSD 1 Usage"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "danger",
          value: 90
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
          className: "text-muted",
          children: "243GB/256GB"
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderDropdownNotif);

/***/ }),

/***/ "./resources/js/containers/HeaderDropdownTasks.js":
/*!********************************************************!*\
  !*** ./resources/js/containers/HeaderDropdownTasks.js ***!
  \********************************************************/
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






var HeaderDropdownTasks = function HeaderDropdownTasks() {
  var itemsCount = 5;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    inNav: true,
    className: "c-header-nav-item mx-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
      className: "c-header-nav-link",
      caret: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
        name: "cil-list"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
        shape: "pill",
        color: "warning",
        children: itemsCount
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
      placement: "bottom-end",
      className: "pt-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        header: true,
        tag: "div",
        className: "text-center",
        color: "light",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("strong", {
          children: ["You have ", itemsCount, " pending tasks"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "small mb-1",
          children: ["Upgrade NPM & Bower ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "float-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "0%"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "info",
          value: 0
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "small mb-1",
          children: ["ReactJS Version ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "float-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "25%"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "danger",
          value: 25
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "small mb-1",
          children: ["VueJS Version ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "float-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "50%"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "warning",
          value: 50
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "small mb-1",
          children: ["Add new layouts ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "float-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "75%"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "info",
          value: 75
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "small mb-1",
          children: ["Angular 2 Cli Version ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "float-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "100%"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "success",
          value: 100
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "text-center border-top",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: "View all tasks"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderDropdownTasks);

/***/ }),

/***/ "./resources/js/containers/Sidebar.js":
/*!********************************************!*\
  !*** ./resources/js/containers/Sidebar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_nav */ "./resources/js/containers/_nav.js");
/* harmony import */ var _redux_sidebar_sidebar_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/sidebar/sidebar.types */ "./resources/js/redux/sidebar/sidebar.types.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



 // sidebar nav config






var Sidebar = function Sidebar() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var show = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.sidebar.sidebarShow;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebar, {
    show: show,
    onShowChange: function onShowChange(val) {
      return dispatch({
        type: _redux_sidebar_sidebar_types__WEBPACK_IMPORTED_MODULE_5__.sidebarActionTypes.SET_SIDEBAR_SHOW,
        payload: val
      });
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarBrand, {
      className: "d-md-down-none",
      to: "/",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "c-sidebar-brand-full",
        name: "logo-negative",
        height: 35
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "c-sidebar-brand-minimized",
        name: "sygnet",
        height: 35
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarNav, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCreateElement, {
        items: _nav__WEBPACK_IMPORTED_MODULE_4__.default,
        components: {
          CSidebarNavDivider: _coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarNavDivider,
          CSidebarNavDropdown: _coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarNavDropdown,
          CSidebarNavItem: _coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarNavItem,
          CSidebarNavTitle: _coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarNavTitle
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarMinimizer, {
      className: "c-d-md-down-none"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Sidebar));

/***/ }),

/***/ "./resources/js/containers/_nav.js":
/*!*****************************************!*\
  !*** ./resources/js/containers/_nav.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var _nav = [{
  _tag: 'CSidebarNavItem',
  name: 'Dashboard',
  to: '/dashboard',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__.default, {
    name: "cil-speedometer",
    customClasses: "c-sidebar-nav-icon"
  })
}, {
  _tag: 'CSidebarNavTitle',
  _children: ['Management']
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Devices',
  to: '/devices',
  icon: 'cil-devices',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: 'Devices',
    to: '/devices'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Create new device',
    to: '/devices/create'
  }]
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Device Groups',
  to: '/device/groups',
  icon: 'cil-basket',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: 'Device Groups',
    to: '/device/groups'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Create new device group',
    to: '/device/groups/create'
  }]
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Device Categories',
  to: '/device/categories',
  icon: 'cil-library-add',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: 'Device Categories',
    to: '/device/categories'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Create new device category',
    to: '/device/categories/create'
  }]
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Device Jobs',
  to: '/device/jobs',
  icon: 'cil-calendar-check',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: 'Device Jobs',
    to: '/device/jobs'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Create new device job',
    to: '/device/jobs/create'
  }]
}, {
  _tag: 'CSidebarNavTitle',
  _children: ['Commands']
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Saved Commands',
  to: '/commands/saved',
  icon: 'cil-command',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: 'Saved Commands',
    to: '/commands/saved'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Create new saved command',
    to: '/commands/saved/create'
  }]
}, {
  _tag: 'CSidebarNavTitle',
  _children: ['Administrations']
}, {
  _tag: 'CSidebarNavItem',
  name: 'API Tokens',
  to: '/tokens',
  icon: 'cil-applications-settings'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_nav);

/***/ }),

/***/ "./resources/js/containers/index.js":
/*!******************************************!*\
  !*** ./resources/js/containers/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* reexport safe */ _Content__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "HeaderDropdown": () => (/* reexport safe */ _HeaderDropdown__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "HeaderDropdownMssg": () => (/* reexport safe */ _HeaderDropdownMssg__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "HeaderDropdownNotif": () => (/* reexport safe */ _HeaderDropdownNotif__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "HeaderDropdownTasks": () => (/* reexport safe */ _HeaderDropdownTasks__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "Sidebar": () => (/* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_7__.default)
/* harmony export */ });
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./resources/js/containers/Content.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./resources/js/containers/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./resources/js/containers/Header.js");
/* harmony import */ var _HeaderDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderDropdown */ "./resources/js/containers/HeaderDropdown.js");
/* harmony import */ var _HeaderDropdownMssg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderDropdownMssg */ "./resources/js/containers/HeaderDropdownMssg.js");
/* harmony import */ var _HeaderDropdownNotif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderDropdownNotif */ "./resources/js/containers/HeaderDropdownNotif.js");
/* harmony import */ var _HeaderDropdownTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderDropdownTasks */ "./resources/js/containers/HeaderDropdownTasks.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sidebar */ "./resources/js/containers/Sidebar.js");






 // import Layout from './Layout'




/***/ }),

/***/ "./resources/js/data/config.js":
/*!*************************************!*\
  !*** ./resources/js/data/config.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_URL": () => (/* binding */ APP_URL),
/* harmony export */   "API_ENDPOINT": () => (/* binding */ API_ENDPOINT),
/* harmony export */   "ASYNC_VALIDATION_TIMEOUT_IN_MS": () => (/* binding */ ASYNC_VALIDATION_TIMEOUT_IN_MS),
/* harmony export */   "DATA_POLLING_INTERVAL_IN_MS": () => (/* binding */ DATA_POLLING_INTERVAL_IN_MS)
/* harmony export */ });
var APP_URL = "http://127.0.0.1:8000";
var API_ENDPOINT = "http://127.0.0.1:8000/api";
var ASYNC_VALIDATION_TIMEOUT_IN_MS = "800";
var DATA_POLLING_INTERVAL_IN_MS = "5000";

/***/ }),

/***/ "./resources/js/redux/profile/profile.actions.js":
/*!*******************************************************!*\
  !*** ./resources/js/redux/profile/profile.actions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchProfileStart": () => (/* binding */ fetchProfileStart),
/* harmony export */   "fetchProfileSuccess": () => (/* binding */ fetchProfileSuccess),
/* harmony export */   "fetchProfileFailure": () => (/* binding */ fetchProfileFailure),
/* harmony export */   "fetchProfileStartAsync": () => (/* binding */ fetchProfileStartAsync)
/* harmony export */ });
/* harmony import */ var _profile_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.types */ "./resources/js/redux/profile/profile.types.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/config */ "./resources/js/data/config.js");

 // Read

var fetchProfileStart = function fetchProfileStart() {
  return {
    type: _profile_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_PROFILE_START
  };
};
var fetchProfileSuccess = function fetchProfileSuccess(profile) {
  return {
    type: _profile_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_PROFILE_SUCCESS,
    payload: profile
  };
};
var fetchProfileFailure = function fetchProfileFailure(errorMessage) {
  return {
    type: _profile_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_PROFILE_FAILURE,
    payload: errorMessage
  };
};
var fetchProfileStartAsync = function fetchProfileStartAsync() {
  return function (dispatch) {
    dispatch(fetchProfileStart());
    axios.get("".concat(_data_config__WEBPACK_IMPORTED_MODULE_1__.API_ENDPOINT, "/profile")).then(function (result) {
      dispatch(fetchProfileSuccess(result.data.result.profile));
    })["catch"](function (error) {
      dispatch(fetchProfileFailure(error.message));
    });
  };
};

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_dashboard_Dashboard_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/Dashboard */ "./resources/js/views/dashboard/Dashboard.js"));
});
var ListDevices = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_devices_ListDevices_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/devices/ListDevices */ "./resources/js/views/devices/ListDevices.js"));
});
var CreateDevice = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_devices_CreateDevice_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/devices/CreateDevice */ "./resources/js/views/devices/CreateDevice.js"));
});
var ViewDevice = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_devices_ViewDevice_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/devices/ViewDevice */ "./resources/js/views/devices/ViewDevice.js"));
});
var EditDevice = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_devices_EditDevice_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/devices/EditDevice */ "./resources/js/views/devices/EditDevice.js"));
});
var ListDeviceGroups = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceGroups_ListDeviceGroups_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceGroups/ListDeviceGroups */ "./resources/js/views/deviceGroups/ListDeviceGroups.js"));
});
var CreateDeviceGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceGroups_CreateDeviceGroup_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceGroups/CreateDeviceGroup */ "./resources/js/views/deviceGroups/CreateDeviceGroup.js"));
});
var ViewDeviceGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceGroups_ViewDeviceGroup_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceGroups/ViewDeviceGroup */ "./resources/js/views/deviceGroups/ViewDeviceGroup.js"));
});
var EditDeviceGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceGroups_EditDeviceGroup_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceGroups/EditDeviceGroup */ "./resources/js/views/deviceGroups/EditDeviceGroup.js"));
});
var ListDeviceCategories = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceCategories_ListDeviceCategories_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceCategories/ListDeviceCategories */ "./resources/js/views/deviceCategories/ListDeviceCategories.js"));
});
var CreateDeviceCategory = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceCategories_CreateDeviceCategory_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceCategories/CreateDeviceCategory */ "./resources/js/views/deviceCategories/CreateDeviceCategory.js"));
});
var ViewDeviceCategory = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceCategories_ViewDeviceCategory_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceCategories/ViewDeviceCategory */ "./resources/js/views/deviceCategories/ViewDeviceCategory.js"));
});
var EditDeviceCategory = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceCategories_EditDeviceCategory_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceCategories/EditDeviceCategory */ "./resources/js/views/deviceCategories/EditDeviceCategory.js"));
});
var ListDeviceJobs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceJobs_ListDeviceJobs_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceJobs/ListDeviceJobs */ "./resources/js/views/deviceJobs/ListDeviceJobs.js"));
});
var CreateDeviceJob = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceJobs_CreateDeviceJob_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceJobs/CreateDeviceJob */ "./resources/js/views/deviceJobs/CreateDeviceJob.js"));
});
var ViewDeviceJob = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_deviceJobs_ViewDeviceJob_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/deviceJobs/ViewDeviceJob */ "./resources/js/views/deviceJobs/ViewDeviceJob.js"));
});
var ListSavedCommands = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_savedCommands_ListSavedCommands_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/savedCommands/ListSavedCommands */ "./resources/js/views/savedCommands/ListSavedCommands.js"));
});
var CreateSavedCommand = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_savedCommands_CreateSavedCommand_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/savedCommands/CreateSavedCommand */ "./resources/js/views/savedCommands/CreateSavedCommand.js"));
});
var ViewSavedCommand = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_savedCommands_ViewSavedCommand_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/savedCommands/ViewSavedCommand */ "./resources/js/views/savedCommands/ViewSavedCommand.js"));
});
var ListApiTokens = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_apiTokens_ListApiTokens_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/apiTokens/ListApiTokens */ "./resources/js/views/apiTokens/ListApiTokens.js"));
});
var routes = [{
  path: '/dashboard',
  exact: true,
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/devices',
  exact: true,
  name: 'Devices',
  component: ListDevices
}, {
  path: '/devices/create',
  exact: true,
  name: 'Create Device',
  component: CreateDevice
}, {
  path: '/devices/:id/edit',
  exact: true,
  name: 'Edit Device',
  component: EditDevice
}, {
  path: '/devices/:id/:tab?',
  exact: true,
  name: 'Device Details',
  component: ViewDevice
}, {
  path: '/device/groups',
  exact: true,
  name: 'Device Groups',
  component: ListDeviceGroups
}, {
  path: '/device/groups/create',
  exact: true,
  name: 'Create Device Group',
  component: CreateDeviceGroup
}, {
  path: '/device/groups/:id',
  exact: true,
  name: 'Device Group Details',
  component: ViewDeviceGroup
}, {
  path: '/device/groups/:id/edit',
  exact: true,
  name: 'Edit Device Group',
  component: EditDeviceGroup
}, {
  path: '/device/categories',
  exact: true,
  name: 'Device Categories',
  component: ListDeviceCategories
}, {
  path: '/device/categories/create',
  exact: true,
  name: 'Create Device Category',
  component: CreateDeviceCategory
}, {
  path: '/device/categories/:id',
  exact: true,
  name: 'Device Category Details',
  component: ViewDeviceCategory
}, {
  path: '/device/categories/:id/edit',
  exact: true,
  name: 'Edit Device Category',
  component: EditDeviceCategory
}, {
  path: '/device/jobs',
  exact: true,
  name: 'Device Jobs',
  component: ListDeviceJobs
}, {
  path: '/device/jobs/create',
  exact: true,
  name: 'Create Device Job',
  component: CreateDeviceJob
}, {
  path: '/device/jobs/:id',
  exact: true,
  name: 'Device Job Details',
  component: ViewDeviceJob
}, {
  path: '/commands/saved',
  exact: true,
  name: 'Saved Commands',
  component: ListSavedCommands
}, {
  path: '/commands/saved/create',
  exact: true,
  name: 'Create Saved Commands',
  component: CreateSavedCommand
}, {
  path: '/commands/saved/:id',
  exact: true,
  name: 'Saved Command Details',
  component: ViewSavedCommand
}, {
  path: '/tokens',
  exact: true,
  name: 'API Tokens',
  component: ListApiTokens
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./resources/js/views/pages/layout/Layout.js":
/*!***************************************************!*\
  !*** ./resources/js/views/pages/layout/Layout.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _containers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../containers/index */ "./resources/js/containers/index.js");
/* harmony import */ var _components_ContentErrorBoundary_ContentErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ContentErrorBoundary/ContentErrorBoundary */ "./resources/js/components/ContentErrorBoundary/ContentErrorBoundary.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Layout = function Layout() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "c-app c-default-layout",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_containers_index__WEBPACK_IMPORTED_MODULE_1__.Sidebar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "c-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_containers_index__WEBPACK_IMPORTED_MODULE_1__.Header, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "c-body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_ContentErrorBoundary_ContentErrorBoundary__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_containers_index__WEBPACK_IMPORTED_MODULE_1__.Content, {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_containers_index__WEBPACK_IMPORTED_MODULE_1__.Footer, {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./node_modules/primereact/components/skeleton/Skeleton.js":
/*!*****************************************************************!*\
  !*** ./node_modules/primereact/components/skeleton/Skeleton.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Skeleton = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _ClassNames = __webpack_require__(/*! ../utils/ClassNames */ "./node_modules/primereact/components/utils/ClassNames.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Skeleton = /*#__PURE__*/function (_Component) {
  _inherits(Skeleton, _Component);

  var _super = _createSuper(Skeleton);

  function Skeleton() {
    _classCallCheck(this, Skeleton);

    return _super.apply(this, arguments);
  }

  _createClass(Skeleton, [{
    key: "skeletonStyle",
    value: function skeletonStyle() {
      if (this.props.size) return {
        width: this.props.size,
        height: this.props.size,
        borderRadius: this.props.borderRadius
      };else return {
        width: this.props.width,
        height: this.props.height,
        borderRadius: this.props.borderRadius
      };
    }
  }, {
    key: "render",
    value: function render() {
      var skeletonClassName = (0, _ClassNames.classNames)('p-skeleton p-component', {
        'p-skeleton-circle': this.props.shape === 'circle',
        'p-skeleton-animation-none': this.props.animation === 'none'
      }, this.props.className);
      var style = this.skeletonStyle();
      return /*#__PURE__*/_react.default.createElement("div", {
        style: style,
        className: skeletonClassName
      });
    }
  }]);

  return Skeleton;
}(_react.Component);

exports.Skeleton = Skeleton;

_defineProperty(Skeleton, "defaultProps", {
  shape: 'rectangle',
  size: null,
  width: '100%',
  height: '1rem',
  borderRadius: null,
  animation: 'wave',
  style: null,
  className: null
});

_defineProperty(Skeleton, "propTypes", {
  shape: _propTypes.default.string,
  size: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  borderRadius: _propTypes.default.string,
  animation: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
});

/***/ }),

/***/ "./node_modules/primereact/components/utils/ClassNames.js":
/*!****************************************************************!*\
  !*** ./node_modules/primereact/components/utils/ClassNames.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.classNames = classNames;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function classNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args) {
    var classes = [];

    for (var i = 0; i < args.length; i++) {
      var className = args[i];
      if (!className) continue;

      var type = _typeof(className);

      if (type === 'string' || type === 'number') {
        classes.push(className);
      } else if (type === 'object') {
        var _classes = Array.isArray(className) ? className : Object.entries(className).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return !!value ? key : null;
        });

        classes = _classes.length ? classes.concat(_classes.filter(function (c) {
          return !!c;
        })) : classes;
      }
    }

    return classes.join(' ');
  }

  return null;
}

/***/ }),

/***/ "./node_modules/primereact/skeleton.js":
/*!*********************************************!*\
  !*** ./node_modules/primereact/skeleton.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./components/skeleton/Skeleton */ "./node_modules/primereact/components/skeleton/Skeleton.js");

/***/ })

}]);