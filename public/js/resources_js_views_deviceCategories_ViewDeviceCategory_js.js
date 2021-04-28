(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_deviceCategories_ViewDeviceCategory_js"],{

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

/***/ "./resources/js/components/DeleteDeviceCategoryModal/DeleteDeviceCategoryModal.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/DeleteDeviceCategoryModal/DeleteDeviceCategoryModal.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./resources/js/utils/utils.js");
/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal/Modal */ "./resources/js/components/Modal/Modal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var DeleteDeviceCategoryModal = function DeleteDeviceCategoryModal(_ref) {
  var show = _ref.show,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm,
      deviceCategory = _ref.deviceCategory;

  var modalMessageSingle = function modalMessageSingle() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: ["Are you sure you want to permanently delete this device category?", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "Device Category ID: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
        children: deviceCategory.unique_id
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "Device Category Name: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
        children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.truncateToStringEllipsis)(deviceCategory.name)
      })]
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: show,
    modalTitle: "Delete Device Category",
    modalMessage: modalMessageSingle(),
    onClose: onClose,
    onConfirm: onConfirm
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteDeviceCategoryModal);

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

/***/ "./resources/js/components/Modal/Modal.js":
/*!************************************************!*\
  !*** ./resources/js/components/Modal/Modal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Modal = function Modal(_ref) {
  var show = _ref.show,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm,
      modalTitle = _ref.modalTitle,
      modalMessage = _ref.modalMessage,
      hidePrimaryButton = _ref.hidePrimaryButton,
      hideSecondaryButton = _ref.hideSecondaryButton,
      primaryButtonText = _ref.primaryButtonText,
      secondaryButtonText = _ref.secondaryButtonText;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CModal, {
    show: show,
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CModalHeader, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CModalTitle, {
        children: modalTitle
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CModalBody, {
      children: modalMessage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CModalFooter, {
      children: [!hideSecondaryButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
          color: "secondary",
          onClick: onClose,
          children: secondaryButtonText || 'No'
        }), ' ']
      }), !hidePrimaryButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
        color: "primary",
        onClick: onConfirm,
        children: primaryButtonText || 'Yes'
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./resources/js/redux/deviceCategory/deviceCategory.actions.js":
/*!*********************************************************************!*\
  !*** ./resources/js/redux/deviceCategory/deviceCategory.actions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchDeviceCategoriesStart": () => (/* binding */ fetchDeviceCategoriesStart),
/* harmony export */   "fetchDeviceCategoriesSuccess": () => (/* binding */ fetchDeviceCategoriesSuccess),
/* harmony export */   "fetchDeviceCategoriesFailure": () => (/* binding */ fetchDeviceCategoriesFailure),
/* harmony export */   "fetchDeviceCategoriesStartAsync": () => (/* binding */ fetchDeviceCategoriesStartAsync),
/* harmony export */   "setFetchDeviceCategoriesLazyParams": () => (/* binding */ setFetchDeviceCategoriesLazyParams),
/* harmony export */   "createDeviceCategoryStart": () => (/* binding */ createDeviceCategoryStart),
/* harmony export */   "createDeviceCategorySuccess": () => (/* binding */ createDeviceCategorySuccess),
/* harmony export */   "createDeviceCategoryFailure": () => (/* binding */ createDeviceCategoryFailure),
/* harmony export */   "createDeviceCategoryStartAsync": () => (/* binding */ createDeviceCategoryStartAsync),
/* harmony export */   "fetchDeviceCategoryStart": () => (/* binding */ fetchDeviceCategoryStart),
/* harmony export */   "fetchDeviceCategorySuccess": () => (/* binding */ fetchDeviceCategorySuccess),
/* harmony export */   "fetchDeviceCategoryFailure": () => (/* binding */ fetchDeviceCategoryFailure),
/* harmony export */   "fetchDeviceCategoryStartAsync": () => (/* binding */ fetchDeviceCategoryStartAsync),
/* harmony export */   "updateDeviceCategoryStart": () => (/* binding */ updateDeviceCategoryStart),
/* harmony export */   "updateDeviceCategorySuccess": () => (/* binding */ updateDeviceCategorySuccess),
/* harmony export */   "updateDeviceCategoryFailure": () => (/* binding */ updateDeviceCategoryFailure),
/* harmony export */   "updateDeviceCategoryStartAsync": () => (/* binding */ updateDeviceCategoryStartAsync),
/* harmony export */   "deleteDeviceCategoriesStart": () => (/* binding */ deleteDeviceCategoriesStart),
/* harmony export */   "deleteDeviceCategoriesSuccess": () => (/* binding */ deleteDeviceCategoriesSuccess),
/* harmony export */   "deleteDeviceCategoriesFailure": () => (/* binding */ deleteDeviceCategoriesFailure),
/* harmony export */   "deleteDeviceCategoriesStartAsync": () => (/* binding */ deleteDeviceCategoriesStartAsync),
/* harmony export */   "fetchDeviceCategoryOptionsStart": () => (/* binding */ fetchDeviceCategoryOptionsStart),
/* harmony export */   "fetchDeviceCategoryOptionsSuccess": () => (/* binding */ fetchDeviceCategoryOptionsSuccess),
/* harmony export */   "fetchDeviceCategoryOptionsFailure": () => (/* binding */ fetchDeviceCategoryOptionsFailure),
/* harmony export */   "fetchDeviceCategoryOptionsStartAsync": () => (/* binding */ fetchDeviceCategoryOptionsStartAsync)
/* harmony export */ });
/* harmony import */ var _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deviceCategory.types */ "./resources/js/redux/deviceCategory/deviceCategory.types.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/config */ "./resources/js/data/config.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./resources/js/utils/utils.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_3__);



 // Index

var fetchDeviceCategoriesStart = function fetchDeviceCategoriesStart() {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_DEVICE_CATEGORIES_START
  };
};
var fetchDeviceCategoriesSuccess = function fetchDeviceCategoriesSuccess(deviceCategories) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_DEVICE_CATEGORIES_SUCCESS,
    payload: deviceCategories
  };
};
var fetchDeviceCategoriesFailure = function fetchDeviceCategoriesFailure(errorMessage) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_DEVICE_CATEGORIES_FAILURE,
    payload: errorMessage
  };
};
var fetchDeviceCategoriesStartAsync = function fetchDeviceCategoriesStartAsync(lazyParams) {
  return function (dispatch) {
    dispatch(fetchDeviceCategoriesStart());
    axios.get("".concat(_data_config__WEBPACK_IMPORTED_MODULE_1__.API_ENDPOINT, "/device/categories"), {
      params: lazyParams
    }).then(function (result) {
      dispatch(fetchDeviceCategoriesSuccess(result.data.result.deviceCategories));
    })["catch"](function (error) {
      dispatch(fetchDeviceCategoriesFailure(error.message));
    });
  };
};
var setFetchDeviceCategoriesLazyParams = function setFetchDeviceCategoriesLazyParams(lazyParams) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.SET_FETCH_DEVICE_CATEGORIES_LAZY_PARAMS,
    payload: lazyParams
  };
}; // Create

var createDeviceCategoryStart = function createDeviceCategoryStart() {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.CREATE_DEVICE_CATEGORY_START
  };
};
var createDeviceCategorySuccess = function createDeviceCategorySuccess() {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.CREATE_DEVICE_CATEGORY_SUCCESS
  };
};
var createDeviceCategoryFailure = function createDeviceCategoryFailure(errorMessage) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.CREATE_DEVICE_CATEGORY_FAILURE,
    payload: errorMessage
  };
};
var createDeviceCategoryStartAsync = function createDeviceCategoryStartAsync(data, history) {
  return function (dispatch) {
    dispatch(createDeviceCategoryStart());
    var toastId = _utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastHelper.loading('Creating device category');
    axios.post("".concat(_data_config__WEBPACK_IMPORTED_MODULE_1__.API_ENDPOINT, "/device/categories"), data).then(function (result) {
      dispatch(createDeviceCategorySuccess());
      _utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastHelper.success('Device category created successfully!', toastId);
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.redirectToAfterToastSuccess)(history, '/device/categories');
    })["catch"](function (error) {
      dispatch(createDeviceCategoryFailure(error.message));
      _utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastHelper.error("Failed to create device category: ".concat(error.message), toastId);
    });
  };
}; // Read

var fetchDeviceCategoryStart = function fetchDeviceCategoryStart() {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_DEVICE_CATEGORY_START
  };
};
var fetchDeviceCategorySuccess = function fetchDeviceCategorySuccess(deviceCategory) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_DEVICE_CATEGORY_SUCCESS,
    payload: deviceCategory
  };
};
var fetchDeviceCategoryFailure = function fetchDeviceCategoryFailure(errorMessage) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_DEVICE_CATEGORY_FAILURE,
    payload: errorMessage
  };
};
var fetchDeviceCategoryStartAsync = function fetchDeviceCategoryStartAsync(id) {
  return function (dispatch) {
    dispatch(fetchDeviceCategoryStart());
    axios.get("".concat(_data_config__WEBPACK_IMPORTED_MODULE_1__.API_ENDPOINT, "/device/categories/").concat(id)).then(function (result) {
      dispatch(fetchDeviceCategorySuccess(result.data.result.deviceCategory));
    })["catch"](function (error) {
      dispatch(fetchDeviceCategoryFailure(error.message));
    });
  };
}; // Update

var updateDeviceCategoryStart = function updateDeviceCategoryStart() {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.UPDATE_DEVICE_CATEGORY_START
  };
};
var updateDeviceCategorySuccess = function updateDeviceCategorySuccess(deviceCategory) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.UPDATE_DEVICE_CATEGORY_SUCCESS,
    payload: deviceCategory
  };
};
var updateDeviceCategoryFailure = function updateDeviceCategoryFailure(errorMessage) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.UPDATE_DEVICE_CATEGORY_FAILURE,
    payload: errorMessage
  };
};
var updateDeviceCategoryStartAsync = function updateDeviceCategoryStartAsync(id, data, history) {
  return function (dispatch) {
    dispatch(updateDeviceCategoryStart());
    var toastId = _utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastHelper.loading('Updating device category');
    axios.patch("".concat(_data_config__WEBPACK_IMPORTED_MODULE_1__.API_ENDPOINT, "/device/categories/").concat(id), data).then(function (result) {
      dispatch(updateDeviceCategorySuccess(result.data.result.deviceCategory));
      _utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastHelper.success('Device category updated successfully!', toastId);

      if (history) {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.redirectToAfterToastSuccess)(history, '/device/categories');
      }
    })["catch"](function (error) {
      dispatch(updateDeviceCategoryFailure(error.message));
      _utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastHelper.error("Device category update failed: ".concat(error.message), toastId);
    });
  };
}; // Delete Mass

var deleteDeviceCategoriesStart = function deleteDeviceCategoriesStart() {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.DELETE_DEVICE_CATEGORIES_START
  };
};
var deleteDeviceCategoriesSuccess = function deleteDeviceCategoriesSuccess() {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.DELETE_DEVICE_CATEGORIES_SUCCESS
  };
};
var deleteDeviceCategoriesFailure = function deleteDeviceCategoriesFailure(errorMessage) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.DELETE_DEVICE_CATEGORIES_FAILURE,
    payload: errorMessage
  };
};
var deleteDeviceCategoriesStartAsync = function deleteDeviceCategoriesStartAsync(ids, history) {
  return function (dispatch, getState) {
    dispatch(deleteDeviceCategoriesStart());
    var toastId = _utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastHelper.loading("Deleting device ".concat(pluralize__WEBPACK_IMPORTED_MODULE_3___default()('category', ids.length)));
    axios["delete"]("".concat(_data_config__WEBPACK_IMPORTED_MODULE_1__.API_ENDPOINT, "/device/categories"), {
      data: {
        ids: ids
      }
    }).then(function (result) {
      dispatch(deleteDeviceCategoriesSuccess());
      _utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastHelper.success("Device ".concat(pluralize__WEBPACK_IMPORTED_MODULE_3___default()('category', ids.length), " deleted successfully!"), toastId);
      console.log(history);

      if (history) {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.redirectToAfterToastSuccess)(history, '/device/categories');
      } else {
        dispatch(fetchDeviceCategoriesStartAsync(getState().deviceCategory.fetchDeviceCategoriesLazyParams));
      }
    })["catch"](function (error) {
      dispatch(deleteDeviceCategoriesFailure(error.message));
      _utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastHelper.error("Device ".concat(pluralize__WEBPACK_IMPORTED_MODULE_3___default()('category', ids.length), " delete failed: ").concat(error.message), toastId);
    });
  };
}; // Fetch dropdown options

var fetchDeviceCategoryOptionsStart = function fetchDeviceCategoryOptionsStart() {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_DEVICE_CATEGORY_OPTIONS_START
  };
};
var fetchDeviceCategoryOptionsSuccess = function fetchDeviceCategoryOptionsSuccess(deviceCategoryOptions) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_DEVICE_CATEGORY_OPTIONS_SUCCESS,
    payload: deviceCategoryOptions
  };
};
var fetchDeviceCategoryOptionsFailure = function fetchDeviceCategoryOptionsFailure(errorMessage) {
  return {
    type: _deviceCategory_types__WEBPACK_IMPORTED_MODULE_0__.default.FETCH_DEVICE_CATEGORY_OPTIONS_FAILURE,
    payload: errorMessage
  };
};
var fetchDeviceCategoryOptionsStartAsync = function fetchDeviceCategoryOptionsStartAsync(name) {
  return function (dispatch) {
    dispatch(fetchDeviceCategoryOptionsStart());
    var params = {};
    if (name) params.name = name;
    axios.get("".concat(_data_config__WEBPACK_IMPORTED_MODULE_1__.API_ENDPOINT, "/device/categories/options"), {
      params: params
    }).then(function (result) {
      dispatch(fetchDeviceCategoryOptionsSuccess(result.data.result.deviceCategories));
    })["catch"](function (error) {
      dispatch(fetchDeviceCategoryOptionsFailure(error.message));
    });
  };
};

/***/ }),

/***/ "./resources/js/views/deviceCategories/ViewDeviceCategory.js":
/*!*******************************************************************!*\
  !*** ./resources/js/views/deviceCategories/ViewDeviceCategory.js ***!
  \*******************************************************************/
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
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Error/Error */ "./resources/js/components/Error/Error.js");
/* harmony import */ var _components_CardSkeleton_CardSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CardSkeleton/CardSkeleton */ "./resources/js/components/CardSkeleton/CardSkeleton.js");
/* harmony import */ var _redux_deviceCategory_deviceCategory_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/deviceCategory/deviceCategory.actions */ "./resources/js/redux/deviceCategory/deviceCategory.actions.js");
/* harmony import */ var _components_DeleteDeviceCategoryModal_DeleteDeviceCategoryModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/DeleteDeviceCategoryModal/DeleteDeviceCategoryModal */ "./resources/js/components/DeleteDeviceCategoryModal/DeleteDeviceCategoryModal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var ViewDeviceCategory = function ViewDeviceCategory(props) {
  var deviceCategoryId = props.match.params.id;
  var history = props.history,
      match = props.match,
      deviceCategory = props.deviceCategory,
      isFetchingDeviceCategory = props.isFetchingDeviceCategory,
      fetchDeviceCategoryErrorMessage = props.fetchDeviceCategoryErrorMessage,
      fetchDeviceCategoryStartAsync = props.fetchDeviceCategoryStartAsync,
      deleteDeviceCategoriesStartAsync = props.deleteDeviceCategoriesStartAsync;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDeleteDeviceCategoryModal = _useState2[0],
      setShowDeleteDeviceCategoryModal = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchDeviceCategoryStartAsync(deviceCategoryId);
  }, []);

  var deleteDeviceCategory = function deleteDeviceCategory() {
    deleteDeviceCategoriesStartAsync([deviceCategory.id], history);
    setShowDeleteDeviceCategoryModal(!showDeleteDeviceCategoryModal);
  };

  if (isFetchingDeviceCategory) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CardSkeleton_CardSkeleton__WEBPACK_IMPORTED_MODULE_6__.default, {});
  } else if (fetchDeviceCategoryErrorMessage) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Error_Error__WEBPACK_IMPORTED_MODULE_5__.default, {
      errorMessage: fetchDeviceCategoryErrorMessage
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
        xs: "12",
        md: "12",
        className: "mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCard, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCardHeader, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
                className: "mb-3",
                lg: "12",
                xl: "9",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  className: "d-flex",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "m-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_4__.default, {
                      name: "cilLibraryAdd",
                      size: "4xl"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                    className: "flex-grow-1 overflow-hidden my-auto",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
                      children: deviceCategory.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("small", {
                      children: ["ID: ", deviceCategory.unique_id]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {})]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
                className: "my-auto",
                lg: "12",
                xl: "3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "d-flex justify-content-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CButtonGroup, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CButton, {
                      color: "primary",
                      onClick: function onClick() {
                        return history.push("".concat(match.url, "/edit"));
                      },
                      children: " Edit"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CButton, {
                      color: "danger",
                      onClick: function onClick() {
                        return setShowDeleteDeviceCategoryModal(!showDeleteDeviceCategoryModal);
                      },
                      children: " Delete"
                    })]
                  })
                })
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_DeleteDeviceCategoryModal_DeleteDeviceCategoryModal__WEBPACK_IMPORTED_MODULE_8__.default, {
      deviceCategory: deviceCategory,
      show: showDeleteDeviceCategoryModal,
      onClose: function onClose() {
        return setShowDeleteDeviceCategoryModal(!showDeleteDeviceCategoryModal);
      },
      onConfirm: deleteDeviceCategory
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {})]
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    deviceCategory: state.deviceCategory.deviceCategory,
    isFetchingDeviceCategory: state.deviceCategory.isFetchingDeviceCategory,
    fetchDeviceCategoryErrorMessage: state.deviceCategory.fetchDeviceCategoryErrorMessage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchDeviceCategoryStartAsync: function fetchDeviceCategoryStartAsync(id) {
      return dispatch((0,_redux_deviceCategory_deviceCategory_actions__WEBPACK_IMPORTED_MODULE_7__.fetchDeviceCategoryStartAsync)(id));
    },
    deleteDeviceCategoriesStartAsync: function deleteDeviceCategoriesStartAsync(ids, history) {
      return dispatch((0,_redux_deviceCategory_deviceCategory_actions__WEBPACK_IMPORTED_MODULE_7__.deleteDeviceCategoriesStartAsync)(ids, history));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(ViewDeviceCategory));

/***/ }),

/***/ "./node_modules/pluralize/pluralize.js":
/*!*********************************************!*\
  !*** ./node_modules/pluralize/pluralize.js ***!
  \*********************************************/
/***/ (function(module) {

/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (true) {
    // Node.
    module.exports = pluralize();
  } else {}
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Tokens are an exact match.
    if (word === token) return token;

    // Lower cased words. E.g. "hello".
    if (word === word.toLowerCase()) return token.toLowerCase();

    // Upper cased words. E.g. "WHISKY".
    if (word === word.toUpperCase()) return token.toUpperCase();

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */
  function replace (word, rule) {
    return word.replace(rule[0], function (match, index) {
      var result = interpolate(rule[1], arguments);

      if (match === '') {
        return restoreCase(word[index - 1], result);
      }

      return restoreCase(match, result);
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */
  function sanitizeWord (token, word, rules) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = rules.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = rules[len];

      if (rule[0].test(word)) return replace(word, rule);
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Check if a word is part of the map.
   */
  function checkWord (replaceMap, keepMap, rules, bool) {
    return function (word) {
      var token = word.toLowerCase();

      if (keepMap.hasOwnProperty(token)) return true;
      if (replaceMap.hasOwnProperty(token)) return false;

      return sanitizeWord(token, token, rules) === token;
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word      The word to pluralize
   * @param  {number}  count     How many of the word exist
   * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
   * @return {string}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Check if a word is plural.
   *
   * @type {Function}
   */
  pluralize.isPlural = checkWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Check if a word is singular.
   *
   * @type {Function}
   */
  pluralize.isSingular = checkWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['passerby', 'passersby']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/[^\u0000-\u007F]$/i, '$0'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
    [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
    [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
    [/(test)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'adulthood',
    'advice',
    'agenda',
    'aid',
    'aircraft',
    'alcohol',
    'ammo',
    'analytics',
    'anime',
    'athletics',
    'audio',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'cod',
    'commerce',
    'cooperation',
    'corps',
    'debris',
    'diabetes',
    'digestion',
    'elk',
    'energy',
    'equipment',
    'excretion',
    'expertise',
    'firmware',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'hardware',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'mud',
    'manga',
    'news',
    'only',
    'personnel',
    'pike',
    'plankton',
    'pliers',
    'police',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'software',
    'species',
    'staff',
    'swine',
    'tennis',
    'traffic',
    'transportation',
    'trout',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    /pok[eé]mon$/i,
    // Regexes.
    /[^aeiou]ese$/i, // "chinese", "japanese"
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /measles$/i,
    /o[iu]s$/i, // "carnivorous"
    /pox$/i, // "chickpox", "smallpox"
    /sheep$/i
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});


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