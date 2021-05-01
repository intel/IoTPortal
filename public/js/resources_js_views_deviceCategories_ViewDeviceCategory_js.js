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

/***/ "./resources/js/utils/utils.js":
/*!*************************************!*\
  !*** ./resources/js/utils/utils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertDeviceObjectToDeviceArrayObject": () => (/* binding */ convertDeviceObjectToDeviceArrayObject),
/* harmony export */   "removeObjectEmptyString": () => (/* binding */ removeObjectEmptyString),
/* harmony export */   "removeLastCharacterIfExists": () => (/* binding */ removeLastCharacterIfExists),
/* harmony export */   "isNotEmptyString": () => (/* binding */ isNotEmptyString),
/* harmony export */   "isValidJSONObject": () => (/* binding */ isValidJSONObject),
/* harmony export */   "isValidJsonString": () => (/* binding */ isValidJsonString),
/* harmony export */   "getSanitizedValues": () => (/* binding */ getSanitizedValues),
/* harmony export */   "formatDateTimeISOStringToCommonString": () => (/* binding */ formatDateTimeISOStringToCommonString),
/* harmony export */   "formatDateTimeRangeToCommonString": () => (/* binding */ formatDateTimeRangeToCommonString),
/* harmony export */   "filterDateTimeRange": () => (/* binding */ filterDateTimeRange),
/* harmony export */   "toastHelper": () => (/* binding */ toastHelper),
/* harmony export */   "truncateToStringEllipsis": () => (/* binding */ truncateToStringEllipsis),
/* harmony export */   "redirectToAfterToastSuccess": () => (/* binding */ redirectToAfterToastSuccess),
/* harmony export */   "isDeviceNameUnique": () => (/* binding */ isDeviceNameUnique),
/* harmony export */   "isDeviceGroupNameUnique": () => (/* binding */ isDeviceGroupNameUnique),
/* harmony export */   "isDeviceCategoryNameUnique": () => (/* binding */ isDeviceCategoryNameUnique)
/* harmony export */ });
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/config */ "./resources/js/data/config.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var convertDeviceObjectToDeviceArrayObject = function convertDeviceObjectToDeviceArrayObject(object) {
  return Object.entries(object).map(function (_ref, index) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return {
      id: index,
      property: key,
      value: value
    };
  });
};
var removeObjectEmptyString = function removeObjectEmptyString(object) {
  Object.keys(object).forEach(function (key) {
    return object[key] === '' ? delete object[key] : {};
  });
};
var removeLastCharacterIfExists = function removeLastCharacterIfExists(str, needle) {
  if (needle && needle !== '') {
    if (str.slice(-1) === needle) {
      return str.slice(0, -1);
    }
  }

  return str;
};
var isNotEmptyString = function isNotEmptyString(str) {
  return Boolean(str);
};
var isValidJSONObject = function isValidJSONObject(obj) {
  return _typeof(obj) === 'object' && obj !== null;
};
var isValidJsonString = function isValidJsonString(str) {
  if (str === null) return false;

  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};
var getSanitizedValues = function getSanitizedValues(object) {
  var clonedObject = _.cloneDeep(object);

  Object.keys(clonedObject).forEach(function (key) {
    if (clonedObject[key] === '' || key === 'sota_option' || Array.isArray(clonedObject[key]) && key === 'configurations' && !clonedObject[key][0].path) {
      delete clonedObject[key];
    } else if (!Array.isArray(clonedObject[key]) && _typeof(clonedObject[key]) === 'object' && clonedObject[key] !== null && clonedObject[key].label) {
      clonedObject[key] = clonedObject[key].value;
    } else if (Array.isArray(clonedObject[key]) && key === 'configurations') {
      var configurationsString = '';
      clonedObject[key].forEach(function (value) {
        if (value.value) {
          configurationsString += "".concat(value.path.value, ":").concat(value.value, ";");
        } else {
          configurationsString += "".concat(value.path.value, ";");
        }
      });
      clonedObject[key] = removeLastCharacterIfExists(configurationsString, ';');
    }
  });
  return clonedObject;
};
var formatDateTimeISOStringToCommonString = function formatDateTimeISOStringToCommonString(dateTimeISOString) {
  var dt = new Date(dateTimeISOString);
  return "".concat(dt.getFullYear().toString().padStart(4, '0'), "-").concat((dt.getMonth() + 1).toString().padStart(2, '0'), "-").concat(dt.getDate().toString().padStart(2, '0'), " ").concat(dt.getHours().toString().padStart(2, '0'), ":").concat(dt.getMinutes().toString().padStart(2, '0'), ":").concat(dt.getSeconds().toString().padStart(2, '0'));
};
var formatDateTimeRangeToCommonString = function formatDateTimeRangeToCommonString(dateTimeRangeArr) {
  return "".concat(dateTimeRangeArr[0].getFullYear().toString().padStart(4, '0'), "-").concat((dateTimeRangeArr[0].getMonth() + 1).toString().padStart(2, '0'), "-").concat(dateTimeRangeArr[0].getDate().toString().padStart(2, '0'), " ").concat(dateTimeRangeArr[0].getHours().toString().padStart(2, '0'), ":").concat(dateTimeRangeArr[0].getMinutes().toString().padStart(2, '0'), ":").concat(dateTimeRangeArr[0].getSeconds().toString().padStart(2, '0'), " - ").concat(dateTimeRangeArr[1].getFullYear().toString().padStart(4, '0'), "-").concat((dateTimeRangeArr[1].getMonth() + 1).toString().padStart(2, '0'), "-").concat(dateTimeRangeArr[1].getDate().toString().padStart(2, '0'), " ").concat(dateTimeRangeArr[1].getHours().toString().padStart(2, '0'), ":").concat(dateTimeRangeArr[1].getMinutes().toString().padStart(2, '0'), ":").concat(dateTimeRangeArr[1].getSeconds().toString().padStart(2, '0'));
};
var filterDateTimeRange = function filterDateTimeRange(value, filter) {
  if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
    return true;
  }

  if (value === undefined || value === null) {
    return false;
  }

  return value === formatDateTimeRangeToCommonString(filter);
};
var toastHelper = {
  loading: function loading(message) {
    return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.default.loading(message, {
      style: {
        minWidth: '500px'
      }
    });
  },
  success: function success(message, toastId) {
    return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.default.success( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
      children: message
    }), {
      id: toastId,
      style: {
        minWidth: '500px'
      }
    });
  },
  error: function error(message, toastId) {
    return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.default.error(function (t) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: message
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, {
          onClick: function onClick() {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.default.dismiss(t.id);
          },
          color: "primary",
          size: "sm",
          className: "m-2",
          children: "Dismiss"
        })]
      });
    }, {
      id: toastId,
      style: {
        minWidth: '500px'
      }
    });
  }
};
var truncateToStringEllipsis = function truncateToStringEllipsis(str) {
  if (typeof str === 'string' || str instanceof String) {
    return _.truncate(str, {
      'length': 40
    });
  }

  return null;
};
var redirectToAfterToastSuccess = function redirectToAfterToastSuccess(history, location) {
  setTimeout(function () {
    history.push(location);
  }, 2000);
};
var isDeviceNameUnique = function isDeviceNameUnique(name) {
  return new Promise(function (resolve, reject) {
    axios.post("".concat(_data_config__WEBPACK_IMPORTED_MODULE_2__.API_ENDPOINT, "/devices/validateField"), {
      name: name
    }).then(function (result) {
      if (result.data.success) resolve(true);else resolve(false);
    })["catch"](function (error) {
      resolve(false);
    });
  });
};
var isDeviceGroupNameUnique = function isDeviceGroupNameUnique(name) {
  return new Promise(function (resolve, reject) {
    axios.post("".concat(_data_config__WEBPACK_IMPORTED_MODULE_2__.API_ENDPOINT, "/device/groups/validateField"), {
      name: name
    }).then(function (result) {
      if (result.data.success) resolve(true);else resolve(false);
    })["catch"](function (error) {
      resolve(false);
    });
  });
};
var isDeviceCategoryNameUnique = function isDeviceCategoryNameUnique(name) {
  return new Promise(function (resolve, reject) {
    axios.post("".concat(_data_config__WEBPACK_IMPORTED_MODULE_2__.API_ENDPOINT, "/device/categories/validateField"), {
      name: name
    }).then(function (result) {
      if (result.data.success) resolve(true);else resolve(false);
    })["catch"](function (error) {
      resolve(false);
    });
  });
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


/***/ })

}]);