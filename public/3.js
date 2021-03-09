(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/AotaCard/AotaCard.js":
/*!******************************************************!*\
  !*** ./resources/js/components/AotaCard/AotaCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _data_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/options */ "./resources/js/data/options.js");
/* harmony import */ var _redux_aota_aota_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/aota/aota.actions */ "./resources/js/redux/aota/aota.actions.js");
/* harmony import */ var _IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../IotTextInput/IotTextInput */ "./resources/js/components/IotTextInput/IotTextInput.js");
/* harmony import */ var _IotSelect_IotSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../IotSelect/IotSelect */ "./resources/js/components/IotSelect/IotSelect.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var AotaCard = function AotaCard(_ref) {
  var deviceId = _ref.deviceId,
      isSubmittingAota = _ref.isSubmittingAota,
      submitAotaStartAsync = _ref.submitAotaStartAsync;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_data_options__WEBPACK_IMPORTED_MODULE_7__["APP_OPTIONS"]),
      _useState2 = _slicedToArray(_useState, 2),
      appOptions = _useState2[0],
      setAppOptions = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_data_options__WEBPACK_IMPORTED_MODULE_7__["COMMAND_OPTIONS"].docker),
      _useState4 = _slicedToArray(_useState3, 2),
      commandOptions = _useState4[0],
      setCommandOptions = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_data_options__WEBPACK_IMPORTED_MODULE_7__["REBOOT_OPTIONS"]),
      _useState6 = _slicedToArray(_useState5, 2),
      rebootOptions = _useState6[0],
      setRebootOptions = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_data_options__WEBPACK_IMPORTED_MODULE_7__["INITIAL_AOTA_FIELDS_HIDDEN_STATE"]),
      _useState8 = _slicedToArray(_useState7, 2),
      isFieldHidden = _useState8[0],
      setFieldHidden = _useState8[1];

  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var handleSubmit = function handleSubmit() {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  var handleReset = function handleReset() {
    if (formRef.current) {
      formRef.current.resetForm();
      setFieldHidden(_data_options__WEBPACK_IMPORTED_MODULE_7__["INITIAL_AOTA_FIELDS_HIDDEN_STATE"]);
    }
  };

  var updateSelectOptions = function updateSelectOptions(name, selectedOption) {
    if (name === 'app') {
      setCommandOptions(_data_options__WEBPACK_IMPORTED_MODULE_7__["COMMAND_OPTIONS"][selectedOption]);
      setFieldHidden(_objectSpread(_objectSpread({}, _data_options__WEBPACK_IMPORTED_MODULE_7__["INITIAL_AOTA_FIELDS_HIDDEN_STATE"]), {}, {
        command: false
      }));

      if (_data_options__WEBPACK_IMPORTED_MODULE_7__["COMMAND_OPTIONS"][selectedOption].find(function (element) {
        return element.value === formRef.current.values.command;
      }) !== undefined) {
        setFieldHidden(_data_options__WEBPACK_IMPORTED_MODULE_7__["AOTA_FIELDS_HIDDEN_STATES"][selectedOption][formRef.current.values.command]);
      }
    } else if (name === 'command') {
      setFieldHidden(_data_options__WEBPACK_IMPORTED_MODULE_7__["AOTA_FIELDS_HIDDEN_STATES"][formRef.current.values.app][selectedOption]);
    }
  };

  var validationObject = {
    app: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().oneOf(appOptions.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    }), "Invalid application type").required("Required"),
    command: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().oneOf(commandOptions.map(function (_ref3) {
      var value = _ref3.value;
      return value;
    }), "Invalid command selection").required("Required")
  };
  if (!isFieldHidden.tag) validationObject.tag = yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required");
  if (!isFieldHidden.reboot) validationObject.reboot = yup__WEBPACK_IMPORTED_MODULE_3__["boolean"]().oneOf(rebootOptions.map(function (_ref4) {
    var value = _ref4.value;
    return value;
  }), "Please select Yes or No only").required("Required");
  if (!isFieldHidden.fetch_link) validationObject.fetch_link = yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required");
  if (!isFieldHidden.signature) validationObject.signature = yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required");
  if (!isFieldHidden.version) validationObject.version = yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required");
  if (!isFieldHidden.server_username) validationObject.server_username = yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required");
  if (!isFieldHidden.server_password) validationObject.server_password = yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required");
  if (!isFieldHidden.docker_registry) validationObject.docker_registry = yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required");
  if (!isFieldHidden.docker_username) validationObject.docker_username = yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required");
  if (!isFieldHidden.docker_password) validationObject.docker_password = yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required");
  if (!isFieldHidden.docker_compose_file) validationObject.docker_compose_file = yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required");
  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"](validationObject);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CCardHeader"], null, "Application OTA Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    innerRef: formRef,
    initialValues: {
      app: '',
      command: '',
      tag: '',
      reboot: '',
      fetch_link: '',
      signature: '',
      version: '',
      server_username: '',
      server_password: '',
      docker_registry: '',
      docker_username: '',
      docker_password: '',
      docker_compose_file: ''
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, _ref5) {
      var setSubmitting = _ref5.setSubmitting;
      submitAotaStartAsync(deviceId, values); // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      //   setSubmitting(false);
      // }, 4000);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotSelect_IotSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "app",
    label: "Application",
    name: "app",
    placeholder: "Choose your application",
    options: appOptions,
    updateSelectOptions: updateSelectOptions,
    isSearchable: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotSelect_IotSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "command",
    label: "Command",
    name: "command",
    placeholder: "Enter your command",
    options: commandOptions,
    updateSelectOptions: updateSelectOptions,
    isSearchable: true,
    isHidden: isFieldHidden.command
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "tag",
    label: "Container Tag",
    name: "tag",
    placeholder: "Enter container tag",
    isHidden: isFieldHidden.tag
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotSelect_IotSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "reboot",
    label: "Device Reboot",
    name: "reboot",
    placeholder: "Choose device reboot",
    options: rebootOptions,
    isSearchable: true,
    isHidden: isFieldHidden.reboot
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "fetch_link",
    label: "Fetch Link",
    name: "fetch_link",
    placeholder: "Enter fetch link",
    isHidden: isFieldHidden.fetch_link
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "signature",
    label: "Signature",
    name: "signature",
    placeholder: "Enter signature",
    isHidden: isFieldHidden.signature
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "version",
    label: "Version",
    name: "version",
    placeholder: "Enter version",
    isHidden: isFieldHidden.version
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "server_username",
    label: "Server Username",
    name: "server_username",
    placeholder: "Enter server username",
    isHidden: isFieldHidden.server_username
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "server_password",
    label: "Server Password",
    name: "server_password",
    placeholder: "Enter server password",
    isHidden: isFieldHidden.server_password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "docker_registry",
    label: "Docker Registry",
    name: "docker_registry",
    placeholder: "Enter Docker registry",
    isHidden: isFieldHidden.docker_registry
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "docker_username",
    label: "Docker Username",
    name: "docker_username",
    placeholder: "Enter Docker username",
    isHidden: isFieldHidden.docker_username
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "docker_password",
    label: "Docker Password",
    name: "docker_password",
    placeholder: "Enter Docker password",
    isHidden: isFieldHidden.docker_password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IotTextInput_IotTextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "docker_compose_file",
    label: "Docker Compose File",
    name: "docker_compose_file",
    placeholder: "Enter Docker Compose file",
    isHidden: isFieldHidden.docker_compose_file
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CCardFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CButton"], {
    type: "submit",
    size: "sm",
    color: "primary",
    onClick: handleSubmit,
    disabled: isSubmittingAota
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "cil-scrubber"
  }), " ", isSubmittingAota ? 'Submitting' : 'Submit'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_5__["CButton"], {
    type: "reset",
    size: "sm",
    color: "danger",
    className: "ml-3",
    onClick: handleReset,
    disabled: isSubmittingAota
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "cil-ban"
  }), " Reset")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["Toaster"], null));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSubmittingAota: state.aota.isSubmittingAota
  };
};

var mapDispatchToPros = function mapDispatchToPros(dispatch) {
  return {
    submitAotaStartAsync: function submitAotaStartAsync(id, data) {
      return dispatch(Object(_redux_aota_aota_actions__WEBPACK_IMPORTED_MODULE_8__["submitAotaStartAsync"])(id, data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToPros)(AotaCard));

/***/ }),

/***/ "./resources/js/components/CotaCard/CotaCard.js":
/*!******************************************************!*\
  !*** ./resources/js/components/CotaCard/CotaCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var CotaCard = function CotaCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Configuration OTA Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "command"
  }, "Command (get, load, set, append, remove)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "command",
    placeholder: "get, load, set, append, remove"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "fetch"
  }, "Fetch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "fetch",
    placeholder: "Fetch"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "path"
  }, "Path"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "path",
    placeholder: "Path"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "signature"
  }, "Signature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "signature",
    placeholder: "Signature"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CotaCard);

/***/ }),

/***/ "./resources/js/components/DevicePropertyCard/DevicePropertyCard.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/DevicePropertyCard/DevicePropertyCard.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");



var DevicePropertyCard = function DevicePropertyCard(_ref) {
  var device = _ref.device;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Device Property"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Property"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Value"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "BIOS Release Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, device.bios_release_date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "BIOS Vendor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, device.bios_vendor)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "BIOS Version"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, device.bios_version)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "CPU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, device.cpu)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "Disk Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, device.disk_information)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "OS Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, device.os_information)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "System Manufacturer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, device.system_manufacturer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "System Product Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, device.system_product_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "Total Memory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, device.total_memory))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DevicePropertyCard);

/***/ }),

/***/ "./resources/js/components/FotaCard/FotaCard.js":
/*!******************************************************!*\
  !*** ./resources/js/components/FotaCard/FotaCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var FotaCard = function FotaCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Firmware OTA Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "bios_version"
  }, "BIOS Version"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "bios_version",
    placeholder: "Enter BIOS version"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "fetch"
  }, "Fetch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "fetch",
    placeholder: "Fetch"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "manufacturer"
  }, "Manufacturer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "manufacturer",
    placeholder: "Manufacturer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "path"
  }, "Path"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "path",
    placeholder: "Path"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "product"
  }, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "product",
    placeholder: "Product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "release_date"
  }, "Release Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "release_date",
    placeholder: "Release Date"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "signature"
  }, "Signature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "signature",
    placeholder: "Signature"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "tool_options"
  }, "Tool Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "tool_options",
    placeholder: "Tool Options"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "server_username"
  }, "Server Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "server_username",
    placeholder: "Server Username"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "server_password"
  }, "Server Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "server_password",
    placeholder: "Server Password"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FotaCard);

/***/ }),

/***/ "./resources/js/components/IotSelect/IotSelect.js":
/*!********************************************************!*\
  !*** ./resources/js/components/IotSelect/IotSelect.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var IotSelect = function IotSelect(_ref) {
  var isHidden = _ref.isHidden,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["isHidden", "label"]);

  var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])(),
      setFieldValue = _useFormikContext.setFieldValue,
      setFieldTouched = _useFormikContext.setFieldTouched;

  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  var defaultStyle = {
    control: function control(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        '&:hover': {
          boxShadow: '0 0 0 0.2rem rgb(50 31 219 / 25%)'
        }
      });
    }
  };
  var errorStyle = {
    control: function control(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        border: '1px solid red',
        '&:hover': {
          border: '1px solid red',
          boxShadow: '0 0 0 0.2rem rgb(255 0 0 / 25%)'
        }
      });
    }
  };

  var handleOptionChange = function handleOptionChange(selection) {
    setFieldValue(props.name, selection.value);
    if (props.updateSelectOptions) props.updateSelectOptions(props.name, selection.value);
  };

  var updateBlur = function updateBlur() {
    setFieldTouched(props.name, true);
  };

  return isHidden ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CLabel"], {
    htmlFor: props.id || props.name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    theme: function theme(_theme) {
      return _objectSpread(_objectSpread({}, _theme), {}, {
        colors: _objectSpread(_objectSpread({}, _theme.colors), {}, {
          primary50: '#958bef80',
          primary25: '#958bef26',
          primary: '#958bef'
        })
      });
    },
    styles: defaultStyle
  }, meta.touched && meta.error && {
    className: 'is-invalid',
    styles: errorStyle
  }, {
    id: props.id || props.name,
    name: field.name,
    options: props.options,
    onBlur: updateBlur,
    onChange: handleOptionChange
  }, props)), meta.touched && meta.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInvalidFeedback"], null, meta.error) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (IotSelect);

/***/ }),

/***/ "./resources/js/components/IotTextInput/IotTextInput.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/IotTextInput/IotTextInput.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var IotTextInput = function IotTextInput(_ref) {
  var isHidden = _ref.isHidden,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["isHidden", "label"]);

  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return isHidden ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLabel"], {
    htmlFor: props.id || props.name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInput"], _extends({}, meta.touched && meta.error && {
    invalid: true
  }, {
    id: props.id || props.name
  }, field, props)), meta.touched && meta.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInvalidFeedback"], null, meta.error) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (IotTextInput);

/***/ }),

/***/ "./resources/js/components/Modal/Modal.js":
/*!************************************************!*\
  !*** ./resources/js/components/Modal/Modal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");



var Modal = function Modal(_ref) {
  var show = _ref.show,
      onConfirm = _ref.onConfirm,
      onClose = _ref.onClose,
      modalTitle = _ref.modalTitle,
      modalMessage = _ref.modalMessage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CModal"], {
    show: show,
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CModalHeader"], {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CModalTitle"], null, modalTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CModalBody"], null, modalMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CButton"], {
    color: "primary",
    onClick: onConfirm
  }, "Shut down"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CButton"], {
    color: "secondary",
    onClick: onClose
  }, "Cancel")));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./resources/js/components/SotaCard/SotaCard.js":
/*!******************************************************!*\
  !*** ./resources/js/components/SotaCard/SotaCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var SotaCard = function SotaCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], null, "Software OTA Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "command"
  }, "Command (update only)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "command",
    placeholder: "Enter BIOS version"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "fetch"
  }, "Fetch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "fetch",
    placeholder: "Fetch"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "log"
  }, "Log to File (N, Y)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "log",
    placeholder: "Log to File (N, Y)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "username"
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "username",
    placeholder: "Username"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: "password",
    placeholder: "Password"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SotaCard);

/***/ }),

/***/ "./resources/js/components/Spinner/Spinner.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Spinner/Spinner.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Spinner = function Spinner() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-fold sk-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-fold-cube"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-fold-cube"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-fold-cube"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-fold-cube"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./resources/js/data/config.js":
/*!*************************************!*\
  !*** ./resources/js/data/config.js ***!
  \*************************************/
/*! exports provided: API_ENDPOINT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINT", function() { return API_ENDPOINT; });
var API_ENDPOINT = "http://localhost:3000";

/***/ }),

/***/ "./resources/js/data/options.js":
/*!**************************************!*\
  !*** ./resources/js/data/options.js ***!
  \**************************************/
/*! exports provided: APP_OPTIONS, COMMAND_OPTIONS, REBOOT_OPTIONS, INITIAL_AOTA_FIELDS_HIDDEN_STATE, AOTA_FIELDS_HIDDEN_STATES, colourOptions, flavourOptions, stateOptions, optionLength, dogOptions, groupedOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_OPTIONS", function() { return APP_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_OPTIONS", function() { return COMMAND_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REBOOT_OPTIONS", function() { return REBOOT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_AOTA_FIELDS_HIDDEN_STATE", function() { return INITIAL_AOTA_FIELDS_HIDDEN_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AOTA_FIELDS_HIDDEN_STATES", function() { return AOTA_FIELDS_HIDDEN_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colourOptions", function() { return colourOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flavourOptions", function() { return flavourOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateOptions", function() { return stateOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionLength", function() { return optionLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dogOptions", function() { return dogOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupedOptions", function() { return groupedOptions; });
var APP_OPTIONS = [{
  value: 'docker',
  label: 'docker'
}, {
  value: 'compose',
  label: 'compose'
}, {
  value: 'application',
  label: 'application'
}];
var COMMAND_OPTIONS = {
  docker: [{
    value: 'import',
    label: 'import'
  }, {
    value: 'load',
    label: 'load'
  }, {
    value: 'pull',
    label: 'pull'
  }, {
    value: 'remove',
    label: 'remove'
  }, {
    value: 'stats',
    label: 'stats'
  }],
  compose: [{
    value: 'up',
    label: 'up'
  }, {
    value: 'down',
    label: 'down'
  }, {
    value: 'pull',
    label: 'pull'
  }, {
    value: 'list',
    label: 'list'
  }, {
    value: 'remove',
    label: 'remove'
  }],
  application: [{
    value: 'update',
    label: 'update'
  }]
};
var REBOOT_OPTIONS = [{
  value: true,
  label: 'Yes'
}, {
  value: false,
  label: 'No'
}];
var INITIAL_AOTA_FIELDS_HIDDEN_STATE = {
  command: true,
  tag: true,
  reboot: true,
  fetch_link: true,
  signature: true,
  version: true,
  server_username: true,
  server_password: true,
  docker_registry: true,
  docker_username: true,
  docker_password: true,
  docker_compose_file: true
};
var AOTA_FIELDS_HIDDEN_STATES = {
  docker: {
    "import": {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: false,
      signature: true,
      version: false,
      server_username: false,
      server_password: false,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    },
    load: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: false,
      signature: true,
      version: false,
      server_username: false,
      server_password: false,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    },
    pull: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: false,
      docker_username: false,
      docker_password: false,
      docker_compose_file: true
    },
    remove: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: false,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    },
    stats: {
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    }
  },
  compose: {
    up: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: false,
      signature: true,
      version: true,
      server_username: false,
      server_password: false,
      docker_registry: false,
      docker_username: false,
      docker_password: false,
      docker_compose_file: false
    },
    down: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    },
    pull: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: false,
      signature: true,
      version: true,
      server_username: false,
      server_password: false,
      docker_registry: false,
      docker_username: false,
      docker_password: false,
      docker_compose_file: false
    },
    list: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    },
    remove: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    }
  },
  application: {
    update: {
      command: false,
      tag: true,
      reboot: false,
      fetch_link: false,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    }
  }
};
var colourOptions = [{
  value: 'ocean',
  label: 'Ocean',
  color: '#00B8D9',
  isFixed: true
}, {
  value: 'blue',
  label: 'Blue',
  color: '#0052CC',
  isDisabled: true
}, {
  value: 'purple',
  label: 'Purple',
  color: '#5243AA'
}, {
  value: 'red',
  label: 'Red',
  color: '#FF5630',
  isFixed: true
}, {
  value: 'orange',
  label: 'Orange',
  color: '#FF8B00'
}, {
  value: 'yellow',
  label: 'Yellow',
  color: '#FFC400'
}, {
  value: 'green',
  label: 'Green',
  color: '#36B37E'
}, {
  value: 'forest',
  label: 'Forest',
  color: '#00875A'
}, {
  value: 'slate',
  label: 'Slate',
  color: '#253858'
}, {
  value: 'silver',
  label: 'Silver',
  color: '#666666'
}];
var flavourOptions = [{
  value: 'vanilla',
  label: 'Vanilla',
  rating: 'safe'
}, {
  value: 'chocolate',
  label: 'Chocolate',
  rating: 'good'
}, {
  value: 'strawberry',
  label: 'Strawberry',
  rating: 'wild'
}, {
  value: 'salted-caramel',
  label: 'Salted Caramel',
  rating: 'crazy'
}];
var stateOptions = [{
  value: 'AL',
  label: 'Alabama'
}, {
  value: 'AK',
  label: 'Alaska'
}, {
  value: 'AS',
  label: 'American Samoa'
}, {
  value: 'AZ',
  label: 'Arizona'
}, {
  value: 'AR',
  label: 'Arkansas'
}, {
  value: 'CA',
  label: 'California'
}, {
  value: 'CO',
  label: 'Colorado'
}, {
  value: 'CT',
  label: 'Connecticut'
}, {
  value: 'DE',
  label: 'Delaware'
}, {
  value: 'DC',
  label: 'District Of Columbia'
}, {
  value: 'FM',
  label: 'Federated States Of Micronesia'
}, {
  value: 'FL',
  label: 'Florida'
}, {
  value: 'GA',
  label: 'Georgia'
}, {
  value: 'GU',
  label: 'Guam'
}, {
  value: 'HI',
  label: 'Hawaii'
}, {
  value: 'ID',
  label: 'Idaho'
}, {
  value: 'IL',
  label: 'Illinois'
}, {
  value: 'IN',
  label: 'Indiana'
}, {
  value: 'IA',
  label: 'Iowa'
}, {
  value: 'KS',
  label: 'Kansas'
}, {
  value: 'KY',
  label: 'Kentucky'
}, {
  value: 'LA',
  label: 'Louisiana'
}, {
  value: 'ME',
  label: 'Maine'
}, {
  value: 'MH',
  label: 'Marshall Islands'
}, {
  value: 'MD',
  label: 'Maryland'
}, {
  value: 'MA',
  label: 'Massachusetts'
}, {
  value: 'MI',
  label: 'Michigan'
}, {
  value: 'MN',
  label: 'Minnesota'
}, {
  value: 'MS',
  label: 'Mississippi'
}, {
  value: 'MO',
  label: 'Missouri'
}, {
  value: 'MT',
  label: 'Montana'
}, {
  value: 'NE',
  label: 'Nebraska'
}, {
  value: 'NV',
  label: 'Nevada'
}, {
  value: 'NH',
  label: 'New Hampshire'
}, {
  value: 'NJ',
  label: 'New Jersey'
}, {
  value: 'NM',
  label: 'New Mexico'
}, {
  value: 'NY',
  label: 'New York'
}, {
  value: 'NC',
  label: 'North Carolina'
}, {
  value: 'ND',
  label: 'North Dakota'
}, {
  value: 'MP',
  label: 'Northern Mariana Islands'
}, {
  value: 'OH',
  label: 'Ohio'
}, {
  value: 'OK',
  label: 'Oklahoma'
}, {
  value: 'OR',
  label: 'Oregon'
}, {
  value: 'PW',
  label: 'Palau'
}, {
  value: 'PA',
  label: 'Pennsylvania'
}, {
  value: 'PR',
  label: 'Puerto Rico'
}, {
  value: 'RI',
  label: 'Rhode Island'
}, {
  value: 'SC',
  label: 'South Carolina'
}, {
  value: 'SD',
  label: 'South Dakota'
}, {
  value: 'TN',
  label: 'Tennessee'
}, {
  value: 'TX',
  label: 'Texas'
}, {
  value: 'UT',
  label: 'Utah'
}, {
  value: 'VT',
  label: 'Vermont'
}, {
  value: 'VI',
  label: 'Virgin Islands'
}, {
  value: 'VA',
  label: 'Virginia'
}, {
  value: 'WA',
  label: 'Washington'
}, {
  value: 'WV',
  label: 'West Virginia'
}, {
  value: 'WI',
  label: 'Wisconsin'
}, {
  value: 'WY',
  label: 'Wyoming'
}];
var optionLength = [{
  value: 1,
  label: 'general'
}, {
  value: 2,
  label: 'Evil is the moment when I lack the strength to be true to the Good that compels me.'
}, {
  value: 3,
  label: "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you."
}];
var dogOptions = [{
  id: 1,
  label: 'Chihuahua'
}, {
  id: 2,
  label: 'Bulldog'
}, {
  id: 3,
  label: 'Dachshund'
}, {
  id: 4,
  label: 'Akita'
}]; // let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(colourOptions);
// }

var groupedOptions = [{
  label: 'Colours',
  options: colourOptions
}, {
  label: 'Flavours',
  options: flavourOptions
}];

/***/ }),

/***/ "./resources/js/redux/aota/aota.actions.js":
/*!*************************************************!*\
  !*** ./resources/js/redux/aota/aota.actions.js ***!
  \*************************************************/
/*! exports provided: submitAotaStart, submitAotaSuccess, submitAotaFailure, submitAotaStartAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitAotaStart", function() { return submitAotaStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitAotaSuccess", function() { return submitAotaSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitAotaFailure", function() { return submitAotaFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitAotaStartAsync", function() { return submitAotaStartAsync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _aota_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aota.types */ "./resources/js/redux/aota/aota.types.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/config */ "./resources/js/data/config.js");





var submitAotaStart = function submitAotaStart() {
  return {
    type: _aota_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_AOTA_START
  };
};
var submitAotaSuccess = function submitAotaSuccess() {
  return {
    type: _aota_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_AOTA_SUCCESS
  };
};
var submitAotaFailure = function submitAotaFailure(errorMessage) {
  return {
    type: _aota_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_AOTA_FAILURE,
    payload: errorMessage
  };
};
var submitAotaStartAsync = function submitAotaStartAsync(id, data) {
  return function (dispatch) {
    dispatch(submitAotaStart());
    var toastId = react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].loading('Submitting AOTA command. Waiting for device acknowledgement...', {
      style: {
        minWidth: '500px'
      }
    });
    axios.post("".concat(_data_config__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"], "/api/devices/").concat(id, "/aota"), data).then(function (result) {
      dispatch(submitAotaSuccess(result.data));
      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Submitted AOTA command successfully!"), {
        id: toastId,
        style: {
          minWidth: '500px'
        }
      });
    })["catch"](function (error) {
      dispatch(submitAotaFailure(error.message));
      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error(function (t) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "AOTA failed: ", error.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CButton"], {
          onClick: function onClick() {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].dismiss(t.id);
          },
          color: "primary",
          size: "sm",
          className: "m-2"
        }, "Dismiss"));
      }, {
        id: toastId,
        style: {
          minWidth: '500px'
        }
      });
    });
  };
};

/***/ }),

/***/ "./resources/js/redux/decommission/decommission.actions.js":
/*!*****************************************************************!*\
  !*** ./resources/js/redux/decommission/decommission.actions.js ***!
  \*****************************************************************/
/*! exports provided: submitDecommissionStart, submitDecommissionSuccess, submitDecommissionFailure, submitDecommissionStartAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitDecommissionStart", function() { return submitDecommissionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitDecommissionSuccess", function() { return submitDecommissionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitDecommissionFailure", function() { return submitDecommissionFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitDecommissionStartAsync", function() { return submitDecommissionStartAsync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _decommission_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decommission.types */ "./resources/js/redux/decommission/decommission.types.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/config */ "./resources/js/data/config.js");





var submitDecommissionStart = function submitDecommissionStart() {
  return {
    type: _decommission_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_DECOMMISSION_START
  };
};
var submitDecommissionSuccess = function submitDecommissionSuccess() {
  return {
    type: _decommission_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_DECOMMISSION_SUCCESS
  };
};
var submitDecommissionFailure = function submitDecommissionFailure(errorMessage) {
  return {
    type: _decommission_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_DECOMMISSION_FAILURE,
    payload: errorMessage
  };
};
var submitDecommissionStartAsync = function submitDecommissionStartAsync(id, data) {
  return function (dispatch) {
    dispatch(submitDecommissionStart());
    var toastId = react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].loading('Decommissioning device...', {
      style: {
        minWidth: '500px'
      }
    });
    axios.post("".concat(_data_config__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"], "/api/devices/").concat(id, "/decommission"), data).then(function (result) {
      dispatch(submitDecommissionSuccess(result.data));
      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Decommissioned device successfully!"), {
        id: toastId,
        style: {
          minWidth: '500px'
        }
      });
    })["catch"](function (error) {
      dispatch(submitDecommissionFailure(error.message));
      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error(function (t) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Decommission device failed: ", error.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CButton"], {
          onClick: function onClick() {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].dismiss(t.id);
          },
          color: "primary",
          size: "sm",
          className: "m-2"
        }, "Dismiss"));
      }, {
        id: toastId,
        style: {
          minWidth: '600px'
        }
      });
    });
  };
};

/***/ }),

/***/ "./resources/js/redux/device/device.actions.js":
/*!*****************************************************!*\
  !*** ./resources/js/redux/device/device.actions.js ***!
  \*****************************************************/
/*! exports provided: fetchDeviceStart, fetchDeviceSuccess, fetchDeviceFailure, fetchDeviceStartAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceStart", function() { return fetchDeviceStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceSuccess", function() { return fetchDeviceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceFailure", function() { return fetchDeviceFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceStartAsync", function() { return fetchDeviceStartAsync; });
/* harmony import */ var _device_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device.types */ "./resources/js/redux/device/device.types.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/config */ "./resources/js/data/config.js");


var fetchDeviceStart = function fetchDeviceStart() {
  return {
    type: _device_types__WEBPACK_IMPORTED_MODULE_0__["default"].FETCH_DEVICE_START
  };
};
var fetchDeviceSuccess = function fetchDeviceSuccess(device) {
  return {
    type: _device_types__WEBPACK_IMPORTED_MODULE_0__["default"].FETCH_DEVICE_SUCCESS,
    payload: device
  };
};
var fetchDeviceFailure = function fetchDeviceFailure(errorMessage) {
  return {
    type: _device_types__WEBPACK_IMPORTED_MODULE_0__["default"].FETCH_DEVICE_FAILURE,
    payload: errorMessage
  };
};
var fetchDeviceStartAsync = function fetchDeviceStartAsync(id) {
  return function (dispatch) {
    dispatch(fetchDeviceStart());
    axios.get("".concat(_data_config__WEBPACK_IMPORTED_MODULE_1__["API_ENDPOINT"], "/api/devices/").concat(id)).then(function (result) {
      dispatch(fetchDeviceSuccess(result.data.result.device));
    })["catch"](function (error) {
      dispatch(fetchDeviceFailure(error.message));
    });
  };
};

/***/ }),

/***/ "./resources/js/redux/reboot/reboot.actions.js":
/*!*****************************************************!*\
  !*** ./resources/js/redux/reboot/reboot.actions.js ***!
  \*****************************************************/
/*! exports provided: submitRebootStart, submitRebootSuccess, submitRebootFailure, submitRebootStartAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitRebootStart", function() { return submitRebootStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitRebootSuccess", function() { return submitRebootSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitRebootFailure", function() { return submitRebootFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitRebootStartAsync", function() { return submitRebootStartAsync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _reboot_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reboot.types */ "./resources/js/redux/reboot/reboot.types.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/config */ "./resources/js/data/config.js");





var submitRebootStart = function submitRebootStart() {
  return {
    type: _reboot_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_REBOOT_START
  };
};
var submitRebootSuccess = function submitRebootSuccess() {
  return {
    type: _reboot_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_REBOOT_SUCCESS
  };
};
var submitRebootFailure = function submitRebootFailure(errorMessage) {
  return {
    type: _reboot_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_REBOOT_FAILURE,
    payload: errorMessage
  };
};
var submitRebootStartAsync = function submitRebootStartAsync(id, data) {
  return function (dispatch) {
    dispatch(submitRebootStart());
    var toastId = react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].loading('Rebooting device...', {
      style: {
        minWidth: '500px'
      }
    });
    axios.post("".concat(_data_config__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"], "/api/devices/").concat(id, "/reboot"), data).then(function (result) {
      dispatch(submitRebootSuccess(result.data));
      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Rebooted device successfully!"), {
        id: toastId,
        style: {
          minWidth: '500px'
        }
      });
    })["catch"](function (error) {
      dispatch(submitRebootFailure(error.message));
      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error(function (t) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Reboot device failed: ", error.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CButton"], {
          onClick: function onClick() {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].dismiss(t.id);
          },
          color: "primary",
          size: "sm",
          className: "m-2"
        }, "Dismiss"));
      }, {
        id: toastId,
        style: {
          minWidth: '600px'
        }
      });
    });
  };
};

/***/ }),

/***/ "./resources/js/redux/shutdown/shutdown.actions.js":
/*!*********************************************************!*\
  !*** ./resources/js/redux/shutdown/shutdown.actions.js ***!
  \*********************************************************/
/*! exports provided: submitShutdownStart, submitShutdownSuccess, submitShutdownFailure, submitShutdownStartAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitShutdownStart", function() { return submitShutdownStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitShutdownSuccess", function() { return submitShutdownSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitShutdownFailure", function() { return submitShutdownFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitShutdownStartAsync", function() { return submitShutdownStartAsync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _shutdown_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shutdown.types */ "./resources/js/redux/shutdown/shutdown.types.js");
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/config */ "./resources/js/data/config.js");





var submitShutdownStart = function submitShutdownStart() {
  return {
    type: _shutdown_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_SHUTDOWN_START
  };
};
var submitShutdownSuccess = function submitShutdownSuccess() {
  return {
    type: _shutdown_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_SHUTDOWN_SUCCESS
  };
};
var submitShutdownFailure = function submitShutdownFailure(errorMessage) {
  return {
    type: _shutdown_types__WEBPACK_IMPORTED_MODULE_3__["default"].SUBMIT_SHUTDOWN_FAILURE,
    payload: errorMessage
  };
};
var submitShutdownStartAsync = function submitShutdownStartAsync(id, data) {
  return function (dispatch) {
    dispatch(submitShutdownStart());
    var toastId = react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].loading('Shutting down device...', {
      style: {
        minWidth: '500px'
      }
    });
    axios.post("".concat(_data_config__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"], "/api/devices/").concat(id, "/shutdown"), data).then(function (result) {
      dispatch(submitShutdownSuccess(result.data));
      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Shut down device successfully!"), {
        id: toastId,
        style: {
          minWidth: '500px'
        }
      });
    })["catch"](function (error) {
      dispatch(submitShutdownFailure(error.message));
      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error(function (t) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Shut down device failed: ", error.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CButton"], {
          onClick: function onClick() {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].dismiss(t.id);
          },
          color: "primary",
          size: "sm",
          className: "m-2"
        }, "Dismiss"));
      }, {
        id: toastId,
        style: {
          minWidth: '600px'
        }
      });
    });
  };
};

/***/ }),

/***/ "./resources/js/views/devices/Device.js":
/*!**********************************************!*\
  !*** ./resources/js/views/devices/Device.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _redux_device_device_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/device/device.actions */ "./resources/js/redux/device/device.actions.js");
/* harmony import */ var _redux_shutdown_shutdown_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/shutdown/shutdown.actions */ "./resources/js/redux/shutdown/shutdown.actions.js");
/* harmony import */ var _redux_reboot_reboot_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/reboot/reboot.actions */ "./resources/js/redux/reboot/reboot.actions.js");
/* harmony import */ var _redux_decommission_decommission_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/decommission/decommission.actions */ "./resources/js/redux/decommission/decommission.actions.js");
/* harmony import */ var _components_AotaCard_AotaCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/AotaCard/AotaCard */ "./resources/js/components/AotaCard/AotaCard.js");
/* harmony import */ var _components_FotaCard_FotaCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/FotaCard/FotaCard */ "./resources/js/components/FotaCard/FotaCard.js");
/* harmony import */ var _components_SotaCard_SotaCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/SotaCard/SotaCard */ "./resources/js/components/SotaCard/SotaCard.js");
/* harmony import */ var _components_CotaCard_CotaCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/CotaCard/CotaCard */ "./resources/js/components/CotaCard/CotaCard.js");
/* harmony import */ var _components_DevicePropertyCard_DevicePropertyCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/DevicePropertyCard/DevicePropertyCard */ "./resources/js/components/DevicePropertyCard/DevicePropertyCard.js");
/* harmony import */ var _components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Spinner/Spinner */ "./resources/js/components/Spinner/Spinner.js");
/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Modal/Modal */ "./resources/js/components/Modal/Modal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var Device = function Device(props) {
  var deviceId = props.match.params.id;
  var device = props.device,
      isFetchingDevice = props.isFetchingDevice,
      isSubmittingShutdown = props.isSubmittingShutdown,
      isSubmittingReboot = props.isSubmittingReboot,
      isSubmittingDecommission = props.isSubmittingDecommission,
      fetchDeviceStartAsync = props.fetchDeviceStartAsync,
      submitShutdownStartAsync = props.submitShutdownStartAsync,
      submitRebootStartAsync = props.submitRebootStartAsync,
      submitDecommissionStartAsync = props.submitDecommissionStartAsync;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showShutdownModal = _useState2[0],
      setShowShutdownModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showRebootModal = _useState4[0],
      setShowRebootModal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showDecommissionModal = _useState6[0],
      setShowDecommissionModal = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchDeviceStartAsync(deviceId);
  }, []);

  var confirmShutdown = function confirmShutdown() {
    setShowShutdownModal(!showShutdownModal);
    submitShutdownStartAsync(deviceId);
  };

  var confirmReboot = function confirmReboot() {
    setShowRebootModal(!showRebootModal);
    submitRebootStartAsync(deviceId);
  };

  var confirmDecommission = function confirmDecommission() {
    setShowDecommissionModal(!showDecommissionModal);
    submitDecommissionStartAsync(deviceId);
  };

  return isFetchingDevice ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_14__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], {
    xs: "12",
    md: "12",
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], {
    className: "my-auto",
    xs: "12",
    md: "12",
    lg: "1",
    xl: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "cilDevices",
    size: "4xl"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], {
    className: "my-auto",
    xs: "12",
    md: "12",
    lg: "6",
    xl: "7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, device.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "ID: ", device.unique_id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], {
    className: "my-auto",
    xs: "12",
    md: "12",
    lg: "5",
    xl: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CButtonGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CButton"], {
    color: "danger",
    onClick: function onClick() {
      return setShowShutdownModal(true);
    },
    disabled: isSubmittingShutdown
  }, isSubmittingShutdown ? 'Shutting down' : 'Shut down'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CButton"], {
    color: "info",
    onClick: function onClick() {
      return setShowRebootModal(true);
    },
    disabled: isSubmittingReboot
  }, isSubmittingReboot ? 'Rebooting' : 'Reboot'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CButton"], {
    color: "primary",
    onClick: function onClick() {
      return setShowDecommissionModal(true);
    },
    disabled: isSubmittingDecommission
  }, isSubmittingDecommission ? 'Decommissioning' : 'Decommission'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    show: showShutdownModal,
    modalTitle: "Confirm Shut Down Device",
    modalMessage: "Do you confirm to shut down this device?",
    onClose: function onClose() {
      return setShowShutdownModal(!showShutdownModal);
    },
    onConfirm: confirmShutdown
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    show: showRebootModal,
    modalTitle: "Confirm Reboot Device",
    modalMessage: "Do you confirm to reboot this device?",
    onClose: function onClose() {
      return setShowRebootModal(!showRebootModal);
    },
    onConfirm: confirmReboot
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    show: showDecommissionModal,
    modalTitle: "Confirm Decommission Device",
    modalMessage: "Do you confirm to decommission this device?",
    onClose: function onClose() {
      return setShowDecommissionModal(!showDecommissionModal);
    },
    onConfirm: confirmDecommission
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CTabs"], {
    activeTab: "overview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNav"], {
    variant: "tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNavLink"], {
    "data-tab": "overview"
  }, "Overview")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNavLink"], {
    "data-tab": "aota"
  }, "Application OTA Update")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNavLink"], {
    "data-tab": "fota"
  }, "Firmware OTA Update")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNavLink"], {
    "data-tab": "sota"
  }, "Software OTA Update")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CNavLink"], {
    "data-tab": "cota"
  }, "Configuration OTA Update"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CTabContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CTabPane"], {
    className: "m-3",
    "data-tab": "overview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DevicePropertyCard_DevicePropertyCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
    device: device
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CTabPane"], {
    className: "m-3",
    "data-tab": "aota"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AotaCard_AotaCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
    deviceId: deviceId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CTabPane"], {
    className: "m-3",
    "data-tab": "fota"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FotaCard_FotaCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    deviceId: deviceId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CTabPane"], {
    className: "m-3",
    "data-tab": "sota"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SotaCard_SotaCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    deviceId: deviceId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CTabPane"], {
    className: "m-3",
    "data-tab": "cota"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CotaCard_CotaCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    deviceId: deviceId
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["Toaster"], null));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    device: state.device.device,
    isFetchingDevice: state.device.isFetchingDevice,
    isSubmittingShutdown: state.shutdown.isSubmittingShutdown,
    isSubmittingReboot: state.reboot.isSubmittingReboot,
    isSubmittingDecommission: state.decommission.isSubmittingDecommission
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchDeviceStartAsync: function fetchDeviceStartAsync(id) {
      return dispatch(Object(_redux_device_device_actions__WEBPACK_IMPORTED_MODULE_5__["fetchDeviceStartAsync"])(id));
    },
    submitShutdownStartAsync: function submitShutdownStartAsync(id) {
      return dispatch(Object(_redux_shutdown_shutdown_actions__WEBPACK_IMPORTED_MODULE_6__["submitShutdownStartAsync"])(id));
    },
    submitRebootStartAsync: function submitRebootStartAsync(id) {
      return dispatch(Object(_redux_reboot_reboot_actions__WEBPACK_IMPORTED_MODULE_7__["submitRebootStartAsync"])(id));
    },
    submitDecommissionStartAsync: function submitDecommissionStartAsync(id) {
      return dispatch(Object(_redux_decommission_decommission_actions__WEBPACK_IMPORTED_MODULE_8__["submitDecommissionStartAsync"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Device));

/***/ })

}]);