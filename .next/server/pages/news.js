module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/news.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Component/footer/index.tsx":
/*!************************************!*\
  !*** ./Component/footer/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\Component\\footer\\index.tsx";


const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-footer-block",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "finaxis-footer-block-lft",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: "docs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: "help"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: " privacy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: "terms"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "finaxis-footer-block-right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "finaxis-social-block",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/media-icon1.png",
                    className: "img-fluid",
                    alt: "icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/media-icon2.png",
                    className: "img-fluid",
                    alt: "icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/media-icon3.png",
                    className: "img-fluid",
                    alt: "icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/media-icon4.png",
                    className: "img-fluid",
                    alt: "icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/media-icon5.png",
                    className: "img-fluid",
                    alt: "icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/media-icon6.png",
                    className: "img-fluid",
                    alt: "icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "finaxis-cookie-privacy-block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: "Legal Disclaimer "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: "Cookies & Privacy Policy"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: "Copyright Policy"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./Component/menu/index.tsx":
/*!**********************************!*\
  !*** ./Component/menu/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\Component\\menu\\index.tsx";


const Menu = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "collapse navbar-collapse",
    id: "finNavbar",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "nav navbar-nav",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "nav-item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "Mission"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "nav-item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "Technology"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "dropdown-toggle",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "nav-link",
          href: "#",
          id: "navbarDropdownMenuLink",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          children: ["Products", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "ml-32",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/submenu-icon.png",
              alt: "submenu",
              className: "img-fluid ml-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "submenu dropdown-menu",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "dropdown-item",
              href: "#",
              children: "Enoch"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "dropdown-item",
              href: "#",
              children: "No2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "dropdown-item",
              href: "#",
              children: "Lusarn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "nav-item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/news",
          children: "News"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "nav-item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/career",
          children: "Career"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "nav-item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/contact",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./Component/other-header/index.tsx":
/*!******************************************!*\
  !*** ./Component/other-header/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu */ "./Component/menu/index.tsx");

var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\Component\\other-header\\index.tsx";



const Otherheader = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "position-relative",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "finaxis-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-menu-block",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "finaxis-logo",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/FinaxisLogo.png",
              alt: "logo",
              className: "img-fluid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Beta"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "finaxis-home-logo",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/Home.png",
              className: "img-fluid",
              alt: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          className: "navbar finaxis-navbar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "navbar-btn-block",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "navbar-header",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                className: "navbar-toggle collapsed",
                "data-toggle": "collapse",
                "data-target": "#finNavbar",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/images/menu-btn.png",
                  alt: "menu",
                  className: "img-fluid toggle-bttn1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/images/Cross.png",
                  alt: "menu",
                  className: "img-fluid toggle-bttn2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Otherheader);

/***/ }),

/***/ "./pages/news.tsx":
/*!************************!*\
  !*** ./pages/news.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Component_other_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Component/other-header */ "./Component/other-header/index.tsx");
/* harmony import */ var _Component_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Component/footer */ "./Component/footer/index.tsx");


var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\pages\\news.tsx";




const News = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-blue-bg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Component_other_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-news-sect",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "finaxis-container cust-z-index",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-xl-7 col-lg-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "news-head-lft",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/images/news-img1.png",
                  className: "img-fluid",
                  alt: "news"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-xl-5 col-lg-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "news-head-right",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: "July 12, 2021"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "news-head-txt1",
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "news-head-txt2",
                  children: ["FinAxis team members are humble and curious entrepreneurs, builders, and tinkerers who share a passion to demystify blockchain technology and tap its potential to create change in the world. Our people are our greatest strength: our diverse crew flourishes in a distributed hierarchy where personal autonomy", ' ']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "news-head-linkBtn",
                    children: "news-head"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "news-posts-block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "news-block-panel",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-block-panel-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/news-img2.png",
                      className: "img-fluid",
                      alt: "news"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-content-block",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "July 12, 2021"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt1",
                      children: ["Lorem ipsum dolor sit amet, consectetur adipiscing", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt2",
                      children: "FinAxis team members are humble and curious entrepreneurs, builders, and tinkerers who share a passion"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "news-head-linkBtn",
                        children: "Read More"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "news-block-panel",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-block-panel-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/news-img3.png",
                      className: "img-fluid",
                      alt: "news"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-content-block",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "July 12, 2021"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt1",
                      children: ["Lorem ipsum dolor sit amet, consectetur adipiscing", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt2",
                      children: "FinAxis team members are humble and curious entrepreneurs, builders, and tinkerers who share a passion"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "news-head-linkBtn",
                        children: "Read More"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "news-block-panel",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-block-panel-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/news-img4.png",
                      className: "img-fluid",
                      alt: "news"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-content-block",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "July 12, 2021"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt1",
                      children: ["Lorem ipsum dolor sit amet, consectetur adipiscing", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt2",
                      children: "FinAxis team members are humble and curious entrepreneurs, builders, and tinkerers who share a passion"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "news-head-linkBtn",
                        children: "Read More"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 124,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "news-block-panel",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-block-panel-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/news-img5.png",
                      className: "img-fluid",
                      alt: "news"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-content-block",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "July 12, 2021"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt1",
                      children: ["Lorem ipsum dolor sit amet, consectetur adipiscing", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt2",
                      children: "FinAxis team members are humble and curious entrepreneurs, builders, and tinkerers who share a passion"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "news-head-linkBtn",
                        children: "Read More"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "news-block-panel",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-block-panel-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/news-img6.png",
                      className: "img-fluid",
                      alt: "news"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-content-block",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "July 12, 2021"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt1",
                      children: ["Lorem ipsum dolor sit amet, consectetur adipiscing", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt2",
                      children: "FinAxis team members are humble and curious entrepreneurs, builders, and tinkerers who share a passion"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "news-head-linkBtn",
                        children: "Read More"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 178,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "news-block-panel",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-block-panel-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/news-img7.png",
                      className: "img-fluid",
                      alt: "news"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-content-block",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "July 12, 2021"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt1",
                      children: ["Lorem ipsum dolor sit amet, consectetur adipiscing", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt2",
                      children: "FinAxis team members are humble and curious entrepreneurs, builders, and tinkerers who share a passion"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "news-head-linkBtn",
                        children: "Read More"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "news-block-panel",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-block-panel-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/news-img8.png",
                      className: "img-fluid",
                      alt: "news"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-content-block",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "July 12, 2021"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt1",
                      children: ["Lorem ipsum dolor sit amet, consectetur adipiscing", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt2",
                      children: "FinAxis team members are humble and curious entrepreneurs, builders, and tinkerers who share a passion"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "news-head-linkBtn",
                        children: "Read More"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 232,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "news-block-panel",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-block-panel-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/news-img9.png",
                      className: "img-fluid",
                      alt: "news"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-content-block",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "July 12, 2021"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt1",
                      children: ["Lorem ipsum dolor sit amet, consectetur adipiscing", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt2",
                      children: "FinAxis team members are humble and curious entrepreneurs, builders, and tinkerers who share a passion"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 253,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "news-head-linkBtn",
                        children: "Read More"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 258,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "news-block-panel",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-block-panel-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/news-img10.png",
                      className: "img-fluid",
                      alt: "news"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 269,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news-content-block",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "July 12, 2021"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 276,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt1",
                      children: ["Lorem ipsum dolor sit amet, consectetur adipiscing", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "news-content-txt2",
                      children: "FinAxis team members are humble and curious entrepreneurs, builders, and tinkerers who share a passion"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "news-head-linkBtn",
                        children: "Read More"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 286,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 285,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "finaxis-career-btm-bg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/bg-blur-img.png",
            className: "img-fluid",
            alt: "contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Component_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50L2Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50L21lbnUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudC9vdGhlci1oZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL25ld3MudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiTWVudSIsIk90aGVyaGVhZGVyIiwiTmV3cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUEs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF6TkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBNFJFO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBLGlDQUNFO0FBQ0UsZUFBRyxFQUFDLHlCQUROO0FBRUUscUJBQVMsRUFBQyxXQUZaO0FBR0UsZUFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBNVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUF5U0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6U0Y7QUFBQSxrQkFERjtBQTZTRCxDQTlTRDs7QUFnVGVBLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDclRBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL25ld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL25ld3MudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1jb250YWluZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWZvb3Rlci1ibG9jayc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1mb290ZXItYmxvY2stbGZ0Jz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPmRvY3M8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5oZWxwPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+IHByaXZhY3k8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPScjJz50ZXJtczwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1mb290ZXItYmxvY2stcmlnaHQnPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZpbmF4aXMtc29jaWFsLWJsb2NrJz5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL21lZGlhLWljb24xLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PSdpY29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9tZWRpYS1pY29uMi5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD0naWNvbidcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvbWVkaWEtaWNvbjMucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2ljb24nXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL21lZGlhLWljb240LnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PSdpY29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9tZWRpYS1pY29uNS5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD0naWNvbidcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvbWVkaWEtaWNvbjYucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2ljb24nXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtY29va2llLXByaXZhY3ktYmxvY2snPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+TGVnYWwgRGlzY2xhaW1lciA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5Db29raWVzICYgUHJpdmFjeSBQb2xpY3k8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5Db3B5cmlnaHQgUG9saWN5PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBNZW51ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UnIGlkPSdmaW5OYXZiYXInPlxuICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IG5hdmJhci1uYXYnPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XG4gICAgICAgICAgPGEgaHJlZj0nIyc+TWlzc2lvbjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxuICAgICAgICAgIDxhIGhyZWY9JyMnPlRlY2hub2xvZ3k8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duLXRvZ2dsZSc+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbmF2LWxpbmsnXG4gICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgaWQ9J25hdmJhckRyb3Bkb3duTWVudUxpbmsnXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT0nZHJvcGRvd24nXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPSd0cnVlJ1xuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0nZmFsc2UnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJvZHVjdHN7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtbC0zMic+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvc3VibWVudS1pY29uLnBuZydcbiAgICAgICAgICAgICAgICBhbHQ9J3N1Ym1lbnUnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQgbWwtMidcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nc3VibWVudSBkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJyBocmVmPScjJz5cbiAgICAgICAgICAgICAgICBFbm9jaFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIGhyZWY9JyMnPlxuICAgICAgICAgICAgICAgIE5vMlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIGhyZWY9JyMnPlxuICAgICAgICAgICAgICAgIEx1c2FyblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxuICAgICAgICAgIDxhIGhyZWY9Jy9uZXdzJz5OZXdzPC9hPlxuICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9J2NvbW1pbmctY2xzJz5Db21pbmcgU29vbjwvc3Bhbj4gKi99XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cbiAgICAgICAgICA8YSBocmVmPScvY2FyZWVyJz5DYXJlZXI8L2E+XG4gICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT0nY29tbWluZy1jbHMnPkNvbWluZyBTb29uPC9zcGFuPiAqL31cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxuICAgICAgICAgIDxhIGhyZWY9Jy9jb250YWN0Jz5Db250YWN0PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51IGZyb20gJy4uL21lbnUnXG5cbmNvbnN0IE90aGVyaGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwb3NpdGlvbi1yZWxhdGl2ZSc+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZmluYXhpcy1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1tZW51LWJsb2NrJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1sb2dvJz5cbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL0ZpbmF4aXNMb2dvLnBuZydcbiAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3Bhbj5CZXRhPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWhvbWUtbG9nbyc+XG4gICAgICAgICAgICA8YSBocmVmPScvJz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWFnZXMvSG9tZS5wbmcnIGNsYXNzTmFtZT0naW1nLWZsdWlkJyBhbHQ9J2hvbWUnIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdmJhciBmaW5heGlzLW5hdmJhcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWJ0bi1ibG9jayc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItaGVhZGVyJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J25hdmJhci10b2dnbGUgY29sbGFwc2VkJ1xuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9JyNmaW5OYXZiYXInXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvbWVudS1idG4ucG5nJ1xuICAgICAgICAgICAgICAgICAgICBhbHQ9J21lbnUnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkIHRvZ2dsZS1idHRuMSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9Dcm9zcy5wbmcnXG4gICAgICAgICAgICAgICAgICAgIGFsdD0nbWVudSdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQgdG9nZ2xlLWJ0dG4yJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdGhlcmhlYWRlclxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBPdGhlcmhlYWRlciBmcm9tICcuLi9Db21wb25lbnQvb3RoZXItaGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Db21wb25lbnQvZm9vdGVyJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3QgTmV3cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtYmx1ZS1iZyc+XG4gICAgICAgIDxPdGhlcmhlYWRlciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLW5ld3Mtc2VjdCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtY29udGFpbmVyIGN1c3Qtei1pbmRleCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC03IGNvbC1sZy02Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1oZWFkLWxmdCc+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9uZXdzLWltZzEucG5nJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgICAgICAgYWx0PSduZXdzJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtNSBjb2wtbGctNic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3MtaGVhZC1yaWdodCc+XG4gICAgICAgICAgICAgICAgICA8aDI+SnVseSAxMiwgMjAyMTwvaDI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J25ld3MtaGVhZC10eHQxJz5cbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkXG4gICAgICAgICAgICAgICAgICAgIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYVxuICAgICAgICAgICAgICAgICAgICBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J25ld3MtaGVhZC10eHQyJz5cbiAgICAgICAgICAgICAgICAgICAgRmluQXhpcyB0ZWFtIG1lbWJlcnMgYXJlIGh1bWJsZSBhbmQgY3VyaW91cyBlbnRyZXByZW5ldXJzLFxuICAgICAgICAgICAgICAgICAgICBidWlsZGVycywgYW5kIHRpbmtlcmVycyB3aG8gc2hhcmUgYSBwYXNzaW9uIHRvIGRlbXlzdGlmeVxuICAgICAgICAgICAgICAgICAgICBibG9ja2NoYWluIHRlY2hub2xvZ3kgYW5kIHRhcCBpdHMgcG90ZW50aWFsIHRvIGNyZWF0ZSBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaW4gdGhlIHdvcmxkLiBPdXIgcGVvcGxlIGFyZSBvdXIgZ3JlYXRlc3Qgc3RyZW5ndGg6IG91clxuICAgICAgICAgICAgICAgICAgICBkaXZlcnNlIGNyZXcgZmxvdXJpc2hlcyBpbiBhIGRpc3RyaWJ1dGVkIGhpZXJhcmNoeSB3aGVyZVxuICAgICAgICAgICAgICAgICAgICBwZXJzb25hbCBhdXRvbm9teXsnICd9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPSduZXdzLWhlYWQtbGlua0J0bic+XG4gICAgICAgICAgICAgICAgICAgICAgbmV3cy1oZWFkXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLXBvc3RzLWJsb2NrJz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLWJsb2NrLXBhbmVsJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3MtYmxvY2stcGFuZWwtaW1nJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvbmV3cy1pbWcyLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSduZXdzJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1jb250ZW50LWJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+SnVseSAxMiwgMjAyMTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtdHh0MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ3snICd9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbmV3cy1jb250ZW50LXR4dDInPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmluQXhpcyB0ZWFtIG1lbWJlcnMgYXJlIGh1bWJsZSBhbmQgY3VyaW91c1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cmVwcmVuZXVycywgYnVpbGRlcnMsIGFuZCB0aW5rZXJlcnMgd2hvIHNoYXJlIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9J25ld3MtaGVhZC1saW5rQnRuJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3MtYmxvY2stcGFuZWwnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1ibG9jay1wYW5lbC1pbWcnPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9uZXdzLWltZzMucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J25ld3MnXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5KdWx5IDEyLCAyMDIxPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J25ld3MtY29udGVudC10eHQxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5neycgJ31cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtdHh0Mic+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5BeGlzIHRlYW0gbWVtYmVycyBhcmUgaHVtYmxlIGFuZCBjdXJpb3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyZXByZW5ldXJzLCBidWlsZGVycywgYW5kIHRpbmtlcmVycyB3aG8gc2hhcmUgYVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2lvblxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nbmV3cy1oZWFkLWxpbmtCdG4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1ibG9jay1wYW5lbCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLWJsb2NrLXBhbmVsLWltZyc+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL25ld3MtaW1nNC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbmV3cydcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3MtY29udGVudC1ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPkp1bHkgMTIsIDIwMjE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbmV3cy1jb250ZW50LXR4dDEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2Npbmd7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J25ld3MtY29udGVudC10eHQyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbkF4aXMgdGVhbSBtZW1iZXJzIGFyZSBodW1ibGUgYW5kIGN1cmlvdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJlcHJlbmV1cnMsIGJ1aWxkZXJzLCBhbmQgdGlua2VyZXJzIHdobyBzaGFyZSBhXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPSduZXdzLWhlYWQtbGlua0J0bic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLWJsb2NrLXBhbmVsJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3MtYmxvY2stcGFuZWwtaW1nJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvbmV3cy1pbWc1LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSduZXdzJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1jb250ZW50LWJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+SnVseSAxMiwgMjAyMTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtdHh0MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ3snICd9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbmV3cy1jb250ZW50LXR4dDInPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmluQXhpcyB0ZWFtIG1lbWJlcnMgYXJlIGh1bWJsZSBhbmQgY3VyaW91c1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cmVwcmVuZXVycywgYnVpbGRlcnMsIGFuZCB0aW5rZXJlcnMgd2hvIHNoYXJlIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9J25ld3MtaGVhZC1saW5rQnRuJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3MtYmxvY2stcGFuZWwnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1ibG9jay1wYW5lbC1pbWcnPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9uZXdzLWltZzYucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J25ld3MnXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5KdWx5IDEyLCAyMDIxPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J25ld3MtY29udGVudC10eHQxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5neycgJ31cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtdHh0Mic+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5BeGlzIHRlYW0gbWVtYmVycyBhcmUgaHVtYmxlIGFuZCBjdXJpb3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyZXByZW5ldXJzLCBidWlsZGVycywgYW5kIHRpbmtlcmVycyB3aG8gc2hhcmUgYVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2lvblxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nbmV3cy1oZWFkLWxpbmtCdG4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1ibG9jay1wYW5lbCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLWJsb2NrLXBhbmVsLWltZyc+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL25ld3MtaW1nNy5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbmV3cydcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3MtY29udGVudC1ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPkp1bHkgMTIsIDIwMjE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbmV3cy1jb250ZW50LXR4dDEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2Npbmd7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J25ld3MtY29udGVudC10eHQyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbkF4aXMgdGVhbSBtZW1iZXJzIGFyZSBodW1ibGUgYW5kIGN1cmlvdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJlcHJlbmV1cnMsIGJ1aWxkZXJzLCBhbmQgdGlua2VyZXJzIHdobyBzaGFyZSBhXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPSduZXdzLWhlYWQtbGlua0J0bic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLWJsb2NrLXBhbmVsJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3MtYmxvY2stcGFuZWwtaW1nJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvbmV3cy1pbWc4LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSduZXdzJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1jb250ZW50LWJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+SnVseSAxMiwgMjAyMTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtdHh0MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ3snICd9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbmV3cy1jb250ZW50LXR4dDInPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmluQXhpcyB0ZWFtIG1lbWJlcnMgYXJlIGh1bWJsZSBhbmQgY3VyaW91c1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cmVwcmVuZXVycywgYnVpbGRlcnMsIGFuZCB0aW5rZXJlcnMgd2hvIHNoYXJlIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9J25ld3MtaGVhZC1saW5rQnRuJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3MtYmxvY2stcGFuZWwnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1ibG9jay1wYW5lbC1pbWcnPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9uZXdzLWltZzkucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J25ld3MnXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5KdWx5IDEyLCAyMDIxPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J25ld3MtY29udGVudC10eHQxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5neycgJ31cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtdHh0Mic+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5BeGlzIHRlYW0gbWVtYmVycyBhcmUgaHVtYmxlIGFuZCBjdXJpb3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyZXByZW5ldXJzLCBidWlsZGVycywgYW5kIHRpbmtlcmVycyB3aG8gc2hhcmUgYVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2lvblxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nbmV3cy1oZWFkLWxpbmtCdG4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1ibG9jay1wYW5lbCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLWJsb2NrLXBhbmVsLWltZyc+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL25ld3MtaW1nMTAucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J25ld3MnXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5KdWx5IDEyLCAyMDIxPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J25ld3MtY29udGVudC10eHQxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5neycgJ31cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSduZXdzLWNvbnRlbnQtdHh0Mic+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5BeGlzIHRlYW0gbWVtYmVycyBhcmUgaHVtYmxlIGFuZCBjdXJpb3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyZXByZW5ldXJzLCBidWlsZGVycywgYW5kIHRpbmtlcmVycyB3aG8gc2hhcmUgYVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2lvblxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nbmV3cy1oZWFkLWxpbmtCdG4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWNhcmVlci1idG0tYmcnPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvYmctYmx1ci1pbWcucG5nJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgYWx0PSdjb250YWN0J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==