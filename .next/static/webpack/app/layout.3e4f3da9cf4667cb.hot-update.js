"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/css/style.css":
/*!***************************!*\
  !*** ./app/css/style.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"05813596f118\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jc3Mvc3R5bGUuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY3NzL3N0eWxlLmNzcz9hYTI4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMDU4MTM1OTZmMTE4XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/css/style.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/ui/mobile-menu.tsx":
/*!***************************************!*\
  !*** ./components/ui/mobile-menu.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction MobileMenu() {\n    _s();\n    const [mobileNavOpen, setMobileNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const trigger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const mobileNav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // close the mobile menu on click outside\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const clickHandler = (param)=>{\n            let { target } = param;\n            if (!mobileNav.current || !trigger.current) return;\n            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;\n            setMobileNavOpen(false);\n        };\n        document.addEventListener(\"click\", clickHandler);\n        return ()=>document.removeEventListener(\"click\", clickHandler);\n    });\n    // close the mobile menu if the esc key is pressed\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const keyHandler = (param)=>{\n            let { keyCode } = param;\n            if (!mobileNavOpen || keyCode !== 27) return;\n            setMobileNavOpen(false);\n        };\n        document.addEventListener(\"keydown\", keyHandler);\n        return ()=>document.removeEventListener(\"keydown\", keyHandler);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex md:hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: trigger,\n                className: \"hamburger \".concat(mobileNavOpen && \"active\"),\n                \"aria-controls\": \"mobile-nav hidden\",\n                \"aria-expanded\": mobileNavOpen,\n                onClick: ()=>setMobileNavOpen(!mobileNavOpen),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Menu\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-6 h-6 fill-current text-gray-900\",\n                        viewBox: \"0 0 24 24\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                y: \"4\",\n                                width: \"24\",\n                                height: \"2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                y: \"11\",\n                                width: \"24\",\n                                height: \"2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                y: \"18\",\n                                width: \"24\",\n                                height: \"2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: mobileNav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {\n                    show: mobileNavOpen,\n                    as: \"nav\",\n                    id: \"mobile-nav\",\n                    className: \"absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white\",\n                    enter: \"transition ease-out duration-200 transform\",\n                    enterFrom: \"opacity-0 -translate-y-2\",\n                    enterTo: \"opacity-100 translate-y-0\",\n                    leave: \"transition ease-out duration-200\",\n                    leaveFrom: \"opacity-100\",\n                    leaveTo: \"opacity-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"px-5 py-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-center my-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/signup\",\n                                    className: \" text-gray-600 text-center w-full my-2\",\n                                    onClick: ()=>setMobileNavOpen(false),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"О нас\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-center my-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/signup\",\n                                    className: \" text-gray-600 text-center w-full my-2\",\n                                    onClick: ()=>setMobileNavOpen(false),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Наши услуги\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-center my-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/signup\",\n                                    className: \" text-gray-600 text-center w-full my-2\",\n                                    onClick: ()=>setMobileNavOpen(false),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Контакты\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mt-8 hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/signin\",\n                                    className: \"flex font-medium w-full text-purple-800 py-2 justify-center border-2 border-purple-800 rounded-3xl\",\n                                    onClick: ()=>setMobileNavOpen(false),\n                                    children: \"Войти\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/signup\",\n                                    className: \"btn-sm text-gray-50 bg-purple-800 hover:bg-gray-800 w-full my-2 rounded-3xl\",\n                                    onClick: ()=>setMobileNavOpen(false),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Зарегистрироваться\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            className: \"w-3 h-3 fill-current shrink-0 ml-2 -mr-1 text-white\",\n                                            viewBox: \"0 0 12 12\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414\",\n                                                fillRule: \"nonzero\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mirocs\\\\Desktop\\\\Sergiy_PROJECT\\\\france_andrei-master\\\\components\\\\ui\\\\mobile-menu.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(MobileMenu, \"ue22Yxs9XzW7k17GiogR0MsuZ04=\");\n_c = MobileMenu;\nvar _c;\n$RefreshReg$(_c, \"MobileMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvbW9iaWxlLW1lbnUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVvRDtBQUNMO0FBQ2xCO0FBRWQsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFVO0lBRTVELE1BQU1RLFVBQVVQLDZDQUFNQSxDQUFvQjtJQUMxQyxNQUFNUSxZQUFZUiw2Q0FBTUEsQ0FBaUI7SUFFekMseUNBQXlDO0lBQ3pDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGVBQWU7Z0JBQUMsRUFBRUMsTUFBTSxFQUFrQztZQUM5RCxJQUFJLENBQUNGLFVBQVVHLE9BQU8sSUFBSSxDQUFDSixRQUFRSSxPQUFPLEVBQUU7WUFDNUMsSUFDRSxDQUFDTixpQkFDREcsVUFBVUcsT0FBTyxDQUFDQyxRQUFRLENBQUNGLFdBQzNCSCxRQUFRSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsU0FFekI7WUFDRkosaUJBQWlCO1FBQ25CO1FBQ0FPLFNBQVNDLGdCQUFnQixDQUFDLFNBQVNMO1FBQ25DLE9BQU8sSUFBTUksU0FBU0UsbUJBQW1CLENBQUMsU0FBU047SUFDckQ7SUFFQSxrREFBa0Q7SUFDbERSLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsYUFBYTtnQkFBQyxFQUFFQyxPQUFPLEVBQXVCO1lBQ2xELElBQUksQ0FBQ1osaUJBQWlCWSxZQUFZLElBQUk7WUFDdENYLGlCQUFpQjtRQUNuQjtRQUNBTyxTQUFTQyxnQkFBZ0IsQ0FBQyxXQUFXRTtRQUNyQyxPQUFPLElBQU1ILFNBQVNFLG1CQUFtQixDQUFDLFdBQVdDO0lBQ3ZEO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDQztnQkFDQ0MsS0FBS2Q7Z0JBQ0xZLFdBQVcsYUFBdUMsT0FBMUJkLGlCQUFpQjtnQkFDekNpQixpQkFBYztnQkFDZEMsaUJBQWVsQjtnQkFDZm1CLFNBQVMsSUFBTWxCLGlCQUFpQixDQUFDRDs7a0NBRWpDLDhEQUFDb0I7d0JBQUtOLFdBQVU7a0NBQVU7Ozs7OztrQ0FDMUIsOERBQUNPO3dCQUNDUCxXQUFVO3dCQUNWUSxTQUFRO3dCQUNSQyxPQUFNOzswQ0FFTiw4REFBQ0M7Z0NBQUtDLEdBQUU7Z0NBQUlDLE9BQU07Z0NBQUtDLFFBQU87Ozs7OzswQ0FDOUIsOERBQUNIO2dDQUFLQyxHQUFFO2dDQUFLQyxPQUFNO2dDQUFLQyxRQUFPOzs7Ozs7MENBQy9CLDhEQUFDSDtnQ0FBS0MsR0FBRTtnQ0FBS0MsT0FBTTtnQ0FBS0MsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtuQyw4REFBQ2Q7Z0JBQUlHLEtBQUtiOzBCQUNSLDRFQUFDTiwwRkFBVUE7b0JBQ1QrQixNQUFNNUI7b0JBQ042QixJQUFHO29CQUNIQyxJQUFHO29CQUNIaEIsV0FBVTtvQkFDVmlCLE9BQU07b0JBQ05DLFdBQVU7b0JBQ1ZDLFNBQVE7b0JBQ1JDLE9BQU07b0JBQ05DLFdBQVU7b0JBQ1ZDLFNBQVE7OEJBRVIsNEVBQUNDO3dCQUFHdkIsV0FBVTs7MENBQ3BCLDhEQUFDd0I7Z0NBQUd4QixXQUFVOzBDQUNKLDRFQUFDaEIsa0RBQUlBO29DQUNIeUMsTUFBSztvQ0FDTHpCLFdBQVU7b0NBQ1ZLLFNBQVMsSUFBTWxCLGlCQUFpQjs4Q0FFaEMsNEVBQUNtQjtrREFBSzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbEIsOERBQUNrQjtnQ0FBR3hCLFdBQVU7MENBQ0osNEVBQUNoQixrREFBSUE7b0NBQ0h5QyxNQUFLO29DQUNMekIsV0FBVTtvQ0FDVkssU0FBUyxJQUFNbEIsaUJBQWlCOzhDQUVoQyw0RUFBQ21CO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdsQiw4REFBQ2tCO2dDQUFHeEIsV0FBVTswQ0FDSiw0RUFBQ2hCLGtEQUFJQTtvQ0FDSHlDLE1BQUs7b0NBQ0x6QixXQUFVO29DQUNWSyxTQUFTLElBQU1sQixpQkFBaUI7OENBRWhDLDRFQUFDbUI7a0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR1YsOERBQUNrQjtnQ0FBR3hCLFdBQVU7MENBQ1osNEVBQUNoQixrREFBSUE7b0NBQ0h5QyxNQUFLO29DQUNMekIsV0FBVTtvQ0FDVkssU0FBUyxJQUFNbEIsaUJBQWlCOzhDQUNqQzs7Ozs7Ozs7Ozs7MENBSUgsOERBQUNxQztnQ0FBR3hCLFdBQVU7MENBQ1osNEVBQUNoQixrREFBSUE7b0NBQ0h5QyxNQUFLO29DQUNMekIsV0FBVTtvQ0FDVkssU0FBUyxJQUFNbEIsaUJBQWlCOztzREFFaEMsOERBQUNtQjtzREFBSzs7Ozs7O3NEQUNOLDhEQUFDQzs0Q0FDQ1AsV0FBVTs0Q0FDVlEsU0FBUTs0Q0FDUkMsT0FBTTtzREFFTiw0RUFBQ2lCO2dEQUNDQyxHQUFFO2dEQUNGQyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCN0I7R0F6SXdCM0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9tb2JpbGUtbWVudS50c3g/Y2MyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZU1lbnUoKSB7XG4gIGNvbnN0IFttb2JpbGVOYXZPcGVuLCBzZXRNb2JpbGVOYXZPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCB0cmlnZ2VyID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKTtcbiAgY29uc3QgbW9iaWxlTmF2ID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAvLyBjbG9zZSB0aGUgbW9iaWxlIG1lbnUgb24gY2xpY2sgb3V0c2lkZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9ICh7IHRhcmdldCB9OiB7IHRhcmdldDogRXZlbnRUYXJnZXQgfCBudWxsIH0pOiB2b2lkID0+IHtcbiAgICAgIGlmICghbW9iaWxlTmF2LmN1cnJlbnQgfHwgIXRyaWdnZXIuY3VycmVudCkgcmV0dXJuO1xuICAgICAgaWYgKFxuICAgICAgICAhbW9iaWxlTmF2T3BlbiB8fFxuICAgICAgICBtb2JpbGVOYXYuY3VycmVudC5jb250YWlucyh0YXJnZXQgYXMgTm9kZSkgfHxcbiAgICAgICAgdHJpZ2dlci5jdXJyZW50LmNvbnRhaW5zKHRhcmdldCBhcyBOb2RlKVxuICAgICAgKVxuICAgICAgICByZXR1cm47XG4gICAgICBzZXRNb2JpbGVOYXZPcGVuKGZhbHNlKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgfSk7XG5cbiAgLy8gY2xvc2UgdGhlIG1vYmlsZSBtZW51IGlmIHRoZSBlc2Mga2V5IGlzIHByZXNzZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBrZXlIYW5kbGVyID0gKHsga2V5Q29kZSB9OiB7IGtleUNvZGU6IG51bWJlciB9KTogdm9pZCA9PiB7XG4gICAgICBpZiAoIW1vYmlsZU5hdk9wZW4gfHwga2V5Q29kZSAhPT0gMjcpIHJldHVybjtcbiAgICAgIHNldE1vYmlsZU5hdk9wZW4oZmFsc2UpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5SGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleUhhbmRsZXIpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtZDpoaWRkZW5cIj5cbiAgICAgIHsvKiBIYW1idXJnZXIgYnV0dG9uICovfVxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9e3RyaWdnZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17YGhhbWJ1cmdlciAke21vYmlsZU5hdk9wZW4gJiYgXCJhY3RpdmVcIn1gfVxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW5hdiBoaWRkZW5cIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPXttb2JpbGVOYXZPcGVufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVOYXZPcGVuKCFtb2JpbGVOYXZPcGVuKX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk1lbnU8L3NwYW4+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGZpbGwtY3VycmVudCB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxyZWN0IHk9XCI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjJcIiAvPlxuICAgICAgICAgIDxyZWN0IHk9XCIxMVwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyXCIgLz5cbiAgICAgICAgICA8cmVjdCB5PVwiMThcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHsvKk1vYmlsZSBuYXZpZ2F0aW9uICovfVxuICAgICAgPGRpdiByZWY9e21vYmlsZU5hdn0+XG4gICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgc2hvdz17bW9iaWxlTmF2T3Blbn1cbiAgICAgICAgICBhcz1cIm5hdlwiXG4gICAgICAgICAgaWQ9XCJtb2JpbGUtbmF2XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtZnVsbCBoLXNjcmVlbiBwYi0xNiB6LTIwIGxlZnQtMCB3LWZ1bGwgb3ZlcmZsb3ctc2Nyb2xsIGJnLXdoaXRlXCJcbiAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMjAwIHRyYW5zZm9ybVwiXG4gICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIC10cmFuc2xhdGUteS0yXCJcbiAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiXG4gICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB4LTUgcHktMlwiPlxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktM1wiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvc2lnbnVwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdGV4dC1ncmF5LTYwMCB0ZXh0LWNlbnRlciB3LWZ1bGwgbXktMlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTmF2T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3Bhbj7QniDQvdCw0YE8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS0zXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9zaWdudXBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LWdyYXktNjAwIHRleHQtY2VudGVyIHctZnVsbCBteS0yXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVOYXZPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPtCd0LDRiNC4INGD0YHQu9GD0LPQuDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cblx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTNcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL3NpZ251cFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS02MDAgdGV4dC1jZW50ZXIgdy1mdWxsIG15LTJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU5hdk9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JrQvtC90YLQsNC60YLRizwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC04IGhpZGRlblwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvc2lnbmluXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZvbnQtbWVkaXVtIHctZnVsbCB0ZXh0LXB1cnBsZS04MDAgcHktMiBqdXN0aWZ5LWNlbnRlciBib3JkZXItMiBib3JkZXItcHVycGxlLTgwMCByb3VuZGVkLTN4bFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTmF2T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDQktC+0LnRgtC4XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9zaWdudXBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1zbSB0ZXh0LWdyYXktNTAgYmctcHVycGxlLTgwMCBob3ZlcjpiZy1ncmF5LTgwMCB3LWZ1bGwgbXktMiByb3VuZGVkLTN4bFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTmF2T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3Bhbj7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zIGgtMyBmaWxsLWN1cnJlbnQgc2hyaW5rLTAgbWwtMiAtbXItMSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTIgMTJcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMS43MDcgNS4yOTNMNyAuNTg2IDUuNTg2IDJsMyAzSDB2Mmg4LjU4NmwtMyAzTDcgMTEuNDE0bDQuNzA3LTQuNzA3YTEgMSAwIDAwMC0xLjQxNFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwibm9uemVyb1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuXG5cblxuXG5cblxuXG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIlRyYW5zaXRpb24iLCJMaW5rIiwiTW9iaWxlTWVudSIsIm1vYmlsZU5hdk9wZW4iLCJzZXRNb2JpbGVOYXZPcGVuIiwidHJpZ2dlciIsIm1vYmlsZU5hdiIsImNsaWNrSGFuZGxlciIsInRhcmdldCIsImN1cnJlbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXlIYW5kbGVyIiwia2V5Q29kZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInJlZiIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwib25DbGljayIsInNwYW4iLCJzdmciLCJ2aWV3Qm94IiwieG1sbnMiLCJyZWN0IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic2hvdyIsImFzIiwiaWQiLCJlbnRlciIsImVudGVyRnJvbSIsImVudGVyVG8iLCJsZWF2ZSIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJ1bCIsImxpIiwiaHJlZiIsInBhdGgiLCJkIiwiZmlsbFJ1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/mobile-menu.tsx\n"));

/***/ })

});