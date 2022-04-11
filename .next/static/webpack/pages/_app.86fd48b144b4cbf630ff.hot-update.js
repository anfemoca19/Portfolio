webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header/index.jsx":
/*!*************************************!*\
  !*** ./components/Header/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ \"./components/Header/Logo/index.jsx\");\n/* harmony import */ var _UI_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Switch */ \"./components/UI/Switch/index.jsx\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/yolimagoez/Documents/Andres/portfolio/components/Header/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // Components\n\n\n // CSS\n\n\n\nvar Header = function Header(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"isDark\"),\n      isDark = _useState[0],\n      setIsDark = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var isDark = localStorage.getItem(\"isDark\");\n    setIsDark(isDark);\n\n    if (isDark === \"dark\") {\n      document.body.classList.add(\"dark\");\n      localStorage.setItem(\"isDark\", \"dark\");\n    }\n  }, []);\n\n  var switchHandler = function switchHandler() {\n    setIsDark(localStorage.getItem(\"isDark\"));\n\n    if (isDark === \"dark\") {\n      document.body.classList.remove(\"dark\");\n      localStorage.removeItem(\"isDark\");\n    } else {\n      document.body.classList.add(\"dark\");\n      localStorage.setItem(\"isDark\", \"dark\");\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_UI_Switch__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      isDark: isDark,\n      clicked: switchHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), props.children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"vFHSU2wU2ftDS2JMkzeb+jkxn+U=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanN4PzNjZjYiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzRGFyayIsInNldElzRGFyayIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRJdGVtIiwic3dpdGNoSGFuZGxlciIsInJlbW92ZSIsInJlbW92ZUl0ZW0iLCJzdHlsZXMiLCJjb250ZW50IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0NBR0E7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsUUFBRCxDQURaO0FBQUEsTUFDakJDLE1BRGlCO0FBQUEsTUFDVEMsU0FEUzs7QUFHeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1GLE1BQU0sR0FBR0csWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBQWY7QUFDQUgsYUFBUyxDQUFDRCxNQUFELENBQVQ7O0FBQ0EsUUFBSUEsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDckJLLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixNQUE1QjtBQUNBTCxrQkFBWSxDQUFDTSxPQUFiLENBQXFCLFFBQXJCLEVBQStCLE1BQS9CO0FBQ0Q7QUFDRixHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQlQsYUFBUyxDQUFDRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBRCxDQUFUOztBQUNBLFFBQUlKLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ3JCSyxjQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkksTUFBeEIsQ0FBK0IsTUFBL0I7QUFDQVIsa0JBQVksQ0FBQ1MsVUFBYixDQUF3QixRQUF4QjtBQUNELEtBSEQsTUFHTztBQUNMUCxjQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsTUFBNUI7QUFDQUwsa0JBQVksQ0FBQ00sT0FBYixDQUFxQixRQUFyQixFQUErQixNQUEvQjtBQUNEO0FBQ0YsR0FURDs7QUFXQSxzQkFDRTtBQUFRLGFBQVMsRUFBRUksMERBQU0sQ0FBQ0MsT0FBMUI7QUFBQSw0QkFDRSxxRUFBQyxrREFBRDtBQUFRLFlBQU0sRUFBRWQsTUFBaEI7QUFBd0IsYUFBTyxFQUFFVTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFHR1osS0FBSyxDQUFDaUIsUUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBOUJEOztHQUFNbEIsTTs7S0FBQUEsTTtBQWdDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCIuLi9VSS9Td2l0Y2hcIjtcblxuLy8gQ1NTXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzRGFyaywgc2V0SXNEYXJrXSA9IHVzZVN0YXRlKFwiaXNEYXJrXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaXNEYXJrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0RhcmtcIik7XG4gICAgc2V0SXNEYXJrKGlzRGFyayk7XG4gICAgaWYgKGlzRGFyayA9PT0gXCJkYXJrXCIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzRGFya1wiLCBcImRhcmtcIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3dpdGNoSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRJc0RhcmsobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0RhcmtcIikpO1xuICAgIGlmIChpc0RhcmsgPT09IFwiZGFya1wiKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJpc0RhcmtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzRGFya1wiLCBcImRhcmtcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgIDxTd2l0Y2ggaXNEYXJrPXtpc0Rhcmt9IGNsaWNrZWQ9e3N3aXRjaEhhbmRsZXJ9IC8+XG4gICAgICB7LyogPExvZ28gaXNEYXJrPXtpc0Rhcmt9IC8+ICovfVxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.jsx\n");

/***/ })

})