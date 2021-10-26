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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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

/***/ "./Component/header/index.tsx":
/*!************************************!*\
  !*** ./Component/header/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu */ "./Component/menu/index.tsx");

var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\Component\\header\\index.tsx";



const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "position-relative",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "finaxis-banner-main finaxis-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                  lineNumber: 28,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/images/Cross.png",
                  alt: "menu",
                  className: "img-fluid toggle-bttn2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-header-body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "finaxis-header-lft",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "The serious business of fun & games on the blockchain "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["No jargon or nonsense. Just ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "good fun."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 43
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "btn finexplore-btn",
              children: "Explore Finaxis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "finaxis-header-right",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/finaxis-img1.png",
            className: "img-fluid",
            alt: "finaxis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-social-link-block",
      id: "theFixed",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/twitter-white.png",
              alt: "twitter",
              className: "img-fluid fin-ico1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/twitter-red.png",
              alt: "twitter",
              className: "img-fluid fin-ico2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/be-white.png",
              alt: "be",
              className: "img-fluid fin-ico1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/be-red.png",
              alt: "be",
              className: "img-fluid fin-ico2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/facebook-white.png",
              alt: "facebook",
              className: "img-fluid fin-ico1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/facebook-red.png",
              alt: "facebook",
              className: "img-fluid fin-ico2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/linkedin-white.png",
              alt: "linkedin",
              className: "img-fluid fin-ico1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/linkedin-red.png",
              alt: "linkedin",
              className: "img-fluid fin-ico2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/Dribbble-white.png",
              alt: "Dribbble",
              className: "img-fluid fin-ico1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/Dribbble-red.png",
              alt: "Dribbble",
              className: "img-fluid fin-ico2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-header-next",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-top-right-img",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/finaxis-img3.png",
          className: "img-fluid",
          alt: "finaxis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-header-innerbody",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "finaxis-top-img",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/FinLogo.png",
            className: "img-fluid",
            alt: "finaxis logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "finaxis-header-innerbody-block1",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Mission"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Blockchain is for you!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-4",
            children: "Blockchain is the biggest thing to happen to the internet since the iPhone. It will reshape how we use and interact with digital worlds."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "But for this technology to realize its real-world potential, it needs to, y\u2019know, be used. By people. Real people, in the real world\u2014not just industry insiders and early adopters."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/mission-bg1.png",
            className: "img-fluid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-header-innerbody-bttm",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/finaxis-img2.png",
          className: "img-fluid",
          alt: "finaxis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./Component/home/cmpnyLogo.tsx":
/*!**************************************!*\
  !*** ./Component/home/cmpnyLogo.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\Component\\home\\cmpnyLogo.tsx";


const CmpnyLogo = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "finaxis-cmpnyLogo-sect",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-cmpnyLogo-block",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/c-logo1.png",
              className: "img-fluid",
              alt: "okex"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/c-logo2.png",
              className: "img-fluid",
              alt: "binance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/c-logo3.png",
              className: "img-fluid",
              alt: "ripple"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/c-logo4.png",
              className: "img-fluid",
              alt: "chainlink"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/c-logo5.png",
              className: "img-fluid",
              alt: "gitlab"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
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

/* harmony default export */ __webpack_exports__["default"] = (CmpnyLogo);

/***/ }),

/***/ "./Component/home/our-approch.tsx":
/*!****************************************!*\
  !*** ./Component/home/our-approch.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\Component\\home\\our-approch.tsx";


const OurApproch = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "finaxis-ourapproch-sect",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "finaxis-ourapproch-lft",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "Our approach"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  children: "Built for you"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "We create products for real people. If something doesn\u2019t matter to you, it doesn't matter to us."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  children: "Product before promises"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Instead of talking about what may be possible, we let you experience it for yourself.Value without compromise"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "mb-0",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  children: "Value without compromise"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Anything of value to you is decentralized. Everything else is fast and easy."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
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
          className: "col-lg-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "finaxis-ourapproch-right",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/finaxis-img4.png",
              className: "img-fluid",
              alt: "our approach"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
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

/* harmony default export */ __webpack_exports__["default"] = (OurApproch);

/***/ }),

/***/ "./Component/home/product.tsx":
/*!************************************!*\
  !*** ./Component/home/product.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\Component\\home\\product.tsx";


const Product = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-product-sect",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-bottm-lft-img",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/finaxis-img3.png",
          className: "img-fluid",
          alt: "finaxis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-product-left",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "finaxis-product-left-inner",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: "Product"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/enochlogo.png",
                    className: "img-fluid",
                    alt: "enoch logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: ["A fully integrated suite of ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 49
                  }, undefined), "financial products for crypto"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Instead of talking about what may be possible, we let you experience it for yourself.Value without compromise"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "finaxis-product-block",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 40,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 41,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 58,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 68,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-7",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-product-right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/finaxis-img5.png",
                className: "img-fluid",
                alt: "enoch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-product-sect finaxis-purple-bg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-bottm-lft-img",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/finaxis-img3.png",
          className: "img-fluid",
          alt: "finaxis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row flex-row-reverse",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-product-left finaxis-product-No2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "finaxis-product-left-inner",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: "mb-16",
                  children: ["Product - ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "LAUNCHING SOON"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 31
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/no2.png",
                    className: "img-fluid",
                    alt: "no2 logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: ["A fully integrated suite of ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 49
                  }, undefined), "financial products for crypto"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Instead of talking about what may be possible, we let you experience it for yourself.Value without compromise"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "finaxis-product-block finaxis-productNo2-block",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-7",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-product-right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/finaxis-img6.png",
                className: "img-fluid",
                alt: "enoch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-product-sect",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-bottm-lft-img",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/finaxis-img3.png",
          className: "img-fluid",
          alt: "finaxis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-product-left",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "finaxis-product-left-inner",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: "mb-12",
                  children: "Product"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/lusarnLogo.png",
                    className: "img-fluid",
                    alt: "lusarn logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: ["A fully integrated suite of ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 49
                  }, undefined), "financial products for crypto"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Instead of talking about what may be possible, we let you experience it for yourself.Value without compromise"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "finaxis-product-block",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 220,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 229,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "finaxis-product-list-block",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-lft"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "finaxis-product-list-right",
                        children: "Instead of talking about what may be possible, we let you."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 238,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-7",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-product-right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/finaxis-img7.png",
                className: "img-fluid",
                alt: "enoch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./Component/home/technology.tsx":
/*!***************************************!*\
  !*** ./Component/home/technology.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\Component\\home\\technology.tsx";



const Technology = () => {
  const {
    0: tabActive,
    1: settabActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "finaxis-technology-sect",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tech-lft-img",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/images/left-corner.png",
        className: "img-fluid",
        alt: "finaxis"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Technology"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-tab-sect",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('finaxistablinks', {
              'tab-active': tabActive == false
            }),
            onClick: () => settabActive(false),
            children: "Protocols"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('finaxistablinks', {
              'tab-active': tabActive == true
            }),
            onClick: () => settabActive(true),
            children: "Stack"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "protocols",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('finaxistabcontent finaxistabcontent-d-block', {
          'd-block': tabActive == false,
          'd-none': tabActive == true
        }),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-tabcontent-lft",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "Integrated with leading protocols"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-tabcontent-right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img1.png",
                      className: "img-fluid",
                      alt: "1inch"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      target: "_blank",
                      children: "1inch"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img2.png",
                      className: "img-fluid",
                      alt: "Aave"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "https://aave.com/",
                      target: "_blank",
                      children: "Aave"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img3.png",
                      className: "img-fluid",
                      alt: "Balancer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "https://balancer.fi/",
                      target: "_blank",
                      children: "Balancer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img4.png",
                      className: "img-fluid",
                      alt: "Curve"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "https://curve.fi/",
                      target: "_blank",
                      children: "Curve"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img5.png",
                      className: "img-fluid",
                      alt: "Compound"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "https://compound.finance/",
                      target: "_blank",
                      children: "Compound"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img6.png",
                      className: "img-fluid",
                      alt: "1inch"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      target: "_blank",
                      children: "1inch"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img7.png",
                      className: "img-fluid",
                      alt: "Matcha"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      target: "_blank",
                      children: "Matcha"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img8.png",
                      className: "img-fluid",
                      alt: "Sushi"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      target: "_blank",
                      children: "Sushi"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img9.png",
                      className: "img-fluid",
                      alt: "Piedao"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "https://www.piedao.org/",
                      target: "_blank",
                      children: "Piedao"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img10.png",
                      className: "img-fluid",
                      alt: "Synthetix"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      target: "_blank",
                      children: "Synthetix"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 190,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "finaxis-tech-imgblock",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/images/tech-img11.png",
                      className: "img-fluid",
                      alt: "Uniswap"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      target: "_blank",
                      children: "Uniswap"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "stack",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('finaxistabcontent finaxistabconten-d-block', {
          'd-block': tabActive == true,
          'd-none': tabActive == false
        }),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-tabcontent-lft",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "Some text will come now"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-tabcontent-right"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Technology);

/***/ }),

/***/ "./Component/home/testProg.tsx":
/*!*************************************!*\
  !*** ./Component/home/testProg.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\Component\\home\\testProg.tsx";


const TestProg = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "finaxis-testProg-sect",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "finaxis-testProg-lft",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: "Beta test program"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Help us shape our newest blockchain apps and get access to exclusive content before anyone else."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "finaxis-testProg-form",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "finaxis-form-inputgroup",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Enter your mail id"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    type: "submit",
                    className: "finaxis-submit-bttn",
                    children: "Explore Finaxis"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
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
          className: "col-lg-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "finaxis-testProg-right",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/finaxis-img8.png",
              className: "img-fluid",
              alt: "test programm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
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

/* harmony default export */ __webpack_exports__["default"] = (TestProg);

/***/ }),

/***/ "./Component/home/valuedPartner.tsx":
/*!******************************************!*\
  !*** ./Component/home/valuedPartner.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\Component\\home\\valuedPartner.tsx";


const ValuedPartner = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "finaxis-valuedPartner-sect",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-valuedPartner-block",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Our Valued Partners"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Want to learn how we plan to introduce the first billion people to the blockchain?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "finaxis-testProg-form",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "finaxis-form-inputgroup",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              placeholder: "Enter your mail id"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              className: "finaxis-submit-bttn",
              children: "Explore Finaxis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
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

/* harmony default export */ __webpack_exports__["default"] = (ValuedPartner);

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Component_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component/header */ "./Component/header/index.tsx");
/* harmony import */ var _Component_home_our_approch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Component/home/our-approch */ "./Component/home/our-approch.tsx");
/* harmony import */ var _Component_home_technology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Component/home/technology */ "./Component/home/technology.tsx");
/* harmony import */ var _Component_home_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Component/home/product */ "./Component/home/product.tsx");
/* harmony import */ var _Component_home_testProg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Component/home/testProg */ "./Component/home/testProg.tsx");
/* harmony import */ var _Component_home_cmpnyLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Component/home/cmpnyLogo */ "./Component/home/cmpnyLogo.tsx");
/* harmony import */ var _Component_home_valuedPartner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Component/home/valuedPartner */ "./Component/home/valuedPartner.tsx");
/* harmony import */ var _Component_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Component/footer */ "./Component/footer/index.tsx");


var _jsxFileName = "D:\\company work\\Finaxis-website\\finaxis-website\\finaxis-website-next\\pages\\index.tsx";








function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "finaxis-blue-bg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Component_header__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Component_home_our_approch__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Component_home_technology__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Component_home_product__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Component_home_testProg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Component_home_cmpnyLogo__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Component_home_valuedPartner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Component_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50L2Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50L2hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50L2hvbWUvY21wbnlMb2dvLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnQvaG9tZS9vdXItYXBwcm9jaC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50L2hvbWUvcHJvZHVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50L2hvbWUvdGVjaG5vbG9neS50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50L2hvbWUvdGVzdFByb2cudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudC9ob21lL3ZhbHVlZFBhcnRuZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudC9tZW51L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiSGVhZGVyIiwiQ21wbnlMb2dvIiwiT3VyQXBwcm9jaCIsIlByb2R1Y3QiLCJUZWNobm9sb2d5IiwidGFiQWN0aXZlIiwic2V0dGFiQWN0aXZlIiwidXNlU3RhdGUiLCJjbGFzc25hbWVzIiwiVGVzdFByb2ciLCJWYWx1ZWRQYXJ0bmVyIiwiTWVudSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFF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QUFBLFlBVkY7QUFBQSxrQkFERjtBQWNELEM7Ozs7Ozs7Ozs7O0FDekJELHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWNvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtZm9vdGVyLWJsb2NrJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWZvb3Rlci1ibG9jay1sZnQnPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+ZG9jczwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPmhlbHA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPScjJz4gcHJpdmFjeTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPnRlcm1zPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWZvb3Rlci1ibG9jay1yaWdodCc+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmluYXhpcy1zb2NpYWwtYmxvY2snPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvbWVkaWEtaWNvbjEucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2ljb24nXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL21lZGlhLWljb24yLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PSdpY29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9tZWRpYS1pY29uMy5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD0naWNvbidcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvbWVkaWEtaWNvbjQucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2ljb24nXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL21lZGlhLWljb241LnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PSdpY29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9tZWRpYS1pY29uNi5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD0naWNvbidcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1jb29raWUtcHJpdmFjeS1ibG9jayc+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5MZWdhbCBEaXNjbGFpbWVyIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPkNvb2tpZXMgJiBQcml2YWN5IFBvbGljeTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPkNvcHlyaWdodCBQb2xpY3k8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL21lbnUnXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwb3NpdGlvbi1yZWxhdGl2ZSc+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdmaW5heGlzLWJhbm5lci1tYWluIGZpbmF4aXMtY29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1tZW51LWJsb2NrJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWxvZ28nPlxyXG4gICAgICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvRmluYXhpc0xvZ28ucG5nJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8c3Bhbj5CZXRhPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbmF2YmFyIGZpbmF4aXMtbmF2YmFyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1idG4tYmxvY2snPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J25hdmJhci10b2dnbGUgY29sbGFwc2VkJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PScjZmluTmF2YmFyJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL21lbnUtYnRuLnBuZydcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J21lbnUnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQgdG9nZ2xlLWJ0dG4xJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL0Nyb3NzLnBuZydcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J21lbnUnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQgdG9nZ2xlLWJ0dG4yJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1oZWFkZXItYm9keSc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1oZWFkZXItbGZ0Jz5cclxuICAgICAgICAgICAgPGgyPlRoZSBzZXJpb3VzIGJ1c2luZXNzIG9mIGZ1biAmIGdhbWVzIG9uIHRoZSBibG9ja2NoYWluIDwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIE5vIGphcmdvbiBvciBub25zZW5zZS4gSnVzdCA8c3Bhbj5nb29kIGZ1bi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9J2J0biBmaW5leHBsb3JlLWJ0bic+XHJcbiAgICAgICAgICAgICAgICBFeHBsb3JlIEZpbmF4aXNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1oZWFkZXItcmlnaHQnPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2ZpbmF4aXMtaW1nMS5wbmcnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXHJcbiAgICAgICAgICAgICAgYWx0PSdmaW5heGlzJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1zb2NpYWwtbGluay1ibG9jaycgaWQ9J3RoZUZpeGVkJz5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy90d2l0dGVyLXdoaXRlLnBuZydcclxuICAgICAgICAgICAgICAgIGFsdD0ndHdpdHRlcidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkIGZpbi1pY28xJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL3R3aXR0ZXItcmVkLnBuZydcclxuICAgICAgICAgICAgICAgIGFsdD0ndHdpdHRlcidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkIGZpbi1pY28yJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9iZS13aGl0ZS5wbmcnXHJcbiAgICAgICAgICAgICAgICBhbHQ9J2JlJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQgZmluLWljbzEnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvYmUtcmVkLnBuZydcclxuICAgICAgICAgICAgICAgIGFsdD0nYmUnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCBmaW4taWNvMidcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvZmFjZWJvb2std2hpdGUucG5nJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdmYWNlYm9vaydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkIGZpbi1pY28xJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2ZhY2Vib29rLXJlZC5wbmcnXHJcbiAgICAgICAgICAgICAgICBhbHQ9J2ZhY2Vib29rJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQgZmluLWljbzInXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2xpbmtlZGluLXdoaXRlLnBuZydcclxuICAgICAgICAgICAgICAgIGFsdD0nbGlua2VkaW4nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCBmaW4taWNvMSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9saW5rZWRpbi1yZWQucG5nJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdsaW5rZWRpbidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkIGZpbi1pY28yJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9EcmliYmJsZS13aGl0ZS5wbmcnXHJcbiAgICAgICAgICAgICAgICBhbHQ9J0RyaWJiYmxlJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQgZmluLWljbzEnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvRHJpYmJibGUtcmVkLnBuZydcclxuICAgICAgICAgICAgICAgIGFsdD0nRHJpYmJibGUnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCBmaW4taWNvMidcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1oZWFkZXItbmV4dCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdG9wLXJpZ2h0LWltZyc+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9maW5heGlzLWltZzMucG5nJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcclxuICAgICAgICAgICAgYWx0PSdmaW5heGlzJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1oZWFkZXItaW5uZXJib2R5Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXRvcC1pbWcnPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL0ZpbkxvZ28ucG5nJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xyXG4gICAgICAgICAgICAgIGFsdD0nZmluYXhpcyBsb2dvJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1oZWFkZXItaW5uZXJib2R5LWJsb2NrMSc+XHJcbiAgICAgICAgICAgIDxoMz5NaXNzaW9uPC9oMz5cclxuICAgICAgICAgICAgPGg0PkJsb2NrY2hhaW4gaXMgZm9yIHlvdSE8L2g0PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J21iLTQnPlxyXG4gICAgICAgICAgICAgIEJsb2NrY2hhaW4gaXMgdGhlIGJpZ2dlc3QgdGhpbmcgdG8gaGFwcGVuIHRvIHRoZSBpbnRlcm5ldCBzaW5jZVxyXG4gICAgICAgICAgICAgIHRoZSBpUGhvbmUuIEl0IHdpbGwgcmVzaGFwZSBob3cgd2UgdXNlIGFuZCBpbnRlcmFjdCB3aXRoIGRpZ2l0YWxcclxuICAgICAgICAgICAgICB3b3JsZHMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEJ1dCBmb3IgdGhpcyB0ZWNobm9sb2d5IHRvIHJlYWxpemUgaXRzIHJlYWwtd29ybGQgcG90ZW50aWFsLCBpdFxyXG4gICAgICAgICAgICAgIG5lZWRzIHRvLCB54oCZa25vdywgYmUgdXNlZC4gQnkgcGVvcGxlLiBSZWFsIHBlb3BsZSwgaW4gdGhlIHJlYWxcclxuICAgICAgICAgICAgICB3b3JsZOKAlG5vdCBqdXN0IGluZHVzdHJ5IGluc2lkZXJzIGFuZCBlYXJseSBhZG9wdGVycy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz0nL2ltYWdlcy9taXNzaW9uLWJnMS5wbmcnIGNsYXNzTmFtZT0naW1nLWZsdWlkJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtaGVhZGVyLWlubmVyYm9keS1idHRtJz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2ZpbmF4aXMtaW1nMi5wbmcnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xyXG4gICAgICAgICAgICBhbHQ9J2ZpbmF4aXMnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQ21wbnlMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWNtcG55TG9nby1zZWN0Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWNvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWNtcG55TG9nby1ibG9jayc+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltYWdlcy9jLWxvZ28xLnBuZycgY2xhc3NOYW1lPSdpbWctZmx1aWQnIGFsdD0nb2tleCcgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvYy1sb2dvMi5wbmcnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgYWx0PSdiaW5hbmNlJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9jLWxvZ28zLnBuZydcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgICBhbHQ9J3JpcHBsZSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvYy1sb2dvNC5wbmcnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgYWx0PSdjaGFpbmxpbmsnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2MtbG9nbzUucG5nJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgIGFsdD0nZ2l0bGFiJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENtcG55TG9nb1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBPdXJBcHByb2NoID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLW91cmFwcHJvY2gtc2VjdCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTYnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtb3VyYXBwcm9jaC1sZnQnPlxuICAgICAgICAgICAgICA8aDM+T3VyIGFwcHJvYWNoPC9oMz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxoND5CdWlsdCBmb3IgeW91PC9oND5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBXZSBjcmVhdGUgcHJvZHVjdHMgZm9yIHJlYWwgcGVvcGxlLiBJZiBzb21ldGhpbmcgZG9lc27igJl0XG4gICAgICAgICAgICAgICAgICAgIG1hdHRlciB0byB5b3UsIGl0IGRvZXNuJ3QgbWF0dGVyIHRvIHVzLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGg0PlByb2R1Y3QgYmVmb3JlIHByb21pc2VzPC9oND5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBJbnN0ZWFkIG9mIHRhbGtpbmcgYWJvdXQgd2hhdCBtYXkgYmUgcG9zc2libGUsIHdlIGxldCB5b3VcbiAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZSBpdCBmb3IgeW91cnNlbGYuVmFsdWUgd2l0aG91dCBjb21wcm9taXNlXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtYi0wJz5cbiAgICAgICAgICAgICAgICAgIDxoND5WYWx1ZSB3aXRob3V0IGNvbXByb21pc2U8L2g0PlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEFueXRoaW5nIG9mIHZhbHVlIHRvIHlvdSBpcyBkZWNlbnRyYWxpemVkLiBFdmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgaXMgZmFzdCBhbmQgZWFzeS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLW91cmFwcHJvY2gtcmlnaHQnPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2ZpbmF4aXMtaW1nNC5wbmcnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgYWx0PSdvdXIgYXBwcm9hY2gnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdXJBcHByb2NoXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3Qtc2VjdCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWJvdHRtLWxmdC1pbWcnPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9maW5heGlzLWltZzMucG5nJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICBhbHQ9J2ZpbmF4aXMnXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTUnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxlZnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGVmdC1pbm5lcic+XG4gICAgICAgICAgICAgICAgICA8aDI+UHJvZHVjdDwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2Vub2NobG9nby5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PSdlbm9jaCBsb2dvJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIEEgZnVsbHkgaW50ZWdyYXRlZCBzdWl0ZSBvZiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgZmluYW5jaWFsIHByb2R1Y3RzIGZvciBjcnlwdG9cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgSW5zdGVhZCBvZiB0YWxraW5nIGFib3V0IHdoYXQgbWF5IGJlIHBvc3NpYmxlLCB3ZSBsZXQgeW91XG4gICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2UgaXQgZm9yIHlvdXJzZWxmLlZhbHVlIHdpdGhvdXQgY29tcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LWJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1sZnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGVhZCBvZiB0YWxraW5nIGFib3V0IHdoYXQgbWF5IGJlIHBvc3NpYmxlLCB3ZSBsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeW91LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LWxmdCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0ZWFkIG9mIHRhbGtpbmcgYWJvdXQgd2hhdCBtYXkgYmUgcG9zc2libGUsIHdlIGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtbGZ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1yaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RlYWQgb2YgdGFsa2luZyBhYm91dCB3aGF0IG1heSBiZSBwb3NzaWJsZSwgd2UgbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlvdS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LWJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1sZnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGVhZCBvZiB0YWxraW5nIGFib3V0IHdoYXQgbWF5IGJlIHBvc3NpYmxlLCB3ZSBsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeW91LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy03Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1yaWdodCc+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2ZpbmF4aXMtaW1nNS5wbmcnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgICAgIGFsdD0nZW5vY2gnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3Qtc2VjdCBmaW5heGlzLXB1cnBsZS1iZyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWJvdHRtLWxmdC1pbWcnPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9maW5heGlzLWltZzMucG5nJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICBhbHQ9J2ZpbmF4aXMnXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBmbGV4LXJvdy1yZXZlcnNlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGVmdCBmaW5heGlzLXByb2R1Y3QtTm8yJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxlZnQtaW5uZXInPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWItMTYnPlxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0IC0gPHNwYW4+TEFVTkNISU5HIFNPT048L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9ubzIucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbm8yIGxvZ28nXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgQSBmdWxseSBpbnRlZ3JhdGVkIHN1aXRlIG9mIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICBmaW5hbmNpYWwgcHJvZHVjdHMgZm9yIGNyeXB0b1xuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBJbnN0ZWFkIG9mIHRhbGtpbmcgYWJvdXQgd2hhdCBtYXkgYmUgcG9zc2libGUsIHdlIGxldCB5b3VcbiAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZSBpdCBmb3IgeW91cnNlbGYuVmFsdWUgd2l0aG91dCBjb21wcm9taXNlXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1ibG9jayBmaW5heGlzLXByb2R1Y3RObzItYmxvY2snPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LWJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1sZnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGVhZCBvZiB0YWxraW5nIGFib3V0IHdoYXQgbWF5IGJlIHBvc3NpYmxlLCB3ZSBsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeW91LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LWxmdCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0ZWFkIG9mIHRhbGtpbmcgYWJvdXQgd2hhdCBtYXkgYmUgcG9zc2libGUsIHdlIGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtbGZ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1yaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RlYWQgb2YgdGFsa2luZyBhYm91dCB3aGF0IG1heSBiZSBwb3NzaWJsZSwgd2UgbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlvdS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LWJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1sZnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGVhZCBvZiB0YWxraW5nIGFib3V0IHdoYXQgbWF5IGJlIHBvc3NpYmxlLCB3ZSBsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeW91LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy03Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1yaWdodCc+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2ZpbmF4aXMtaW1nNi5wbmcnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgICAgIGFsdD0nZW5vY2gnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3Qtc2VjdCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWJvdHRtLWxmdC1pbWcnPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9maW5heGlzLWltZzMucG5nJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICBhbHQ9J2ZpbmF4aXMnXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTUnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxlZnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGVmdC1pbm5lcic+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYi0xMic+UHJvZHVjdDwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL2x1c2FybkxvZ28ucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbHVzYXJuIGxvZ28nXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgQSBmdWxseSBpbnRlZ3JhdGVkIHN1aXRlIG9mIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICBmaW5hbmNpYWwgcHJvZHVjdHMgZm9yIGNyeXB0b1xuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBJbnN0ZWFkIG9mIHRhbGtpbmcgYWJvdXQgd2hhdCBtYXkgYmUgcG9zc2libGUsIHdlIGxldCB5b3VcbiAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZSBpdCBmb3IgeW91cnNlbGYuVmFsdWUgd2l0aG91dCBjb21wcm9taXNlXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1ibG9jayc+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LWxmdCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0ZWFkIG9mIHRhbGtpbmcgYWJvdXQgd2hhdCBtYXkgYmUgcG9zc2libGUsIHdlIGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtbGZ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1yaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RlYWQgb2YgdGFsa2luZyBhYm91dCB3aGF0IG1heSBiZSBwb3NzaWJsZSwgd2UgbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlvdS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LWJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXByb2R1Y3QtbGlzdC1sZnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGVhZCBvZiB0YWxraW5nIGFib3V0IHdoYXQgbWF5IGJlIHBvc3NpYmxlLCB3ZSBsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeW91LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtcHJvZHVjdC1saXN0LWxmdCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LWxpc3QtcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0ZWFkIG9mIHRhbGtpbmcgYWJvdXQgd2hhdCBtYXkgYmUgcG9zc2libGUsIHdlIGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTcnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1wcm9kdWN0LXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvZmluYXhpcy1pbWc3LnBuZydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgYWx0PSdlbm9jaCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3QgVGVjaG5vbG9neSA9ICgpID0+IHtcbiAgY29uc3QgW3RhYkFjdGl2ZSwgc2V0dGFiQWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdGVjaG5vbG9neS1zZWN0Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZWNoLWxmdC1pbWcnPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPScvaW1hZ2VzL2xlZnQtY29ybmVyLnBuZydcbiAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICBhbHQ9J2ZpbmF4aXMnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWNvbnRhaW5lcic+XG4gICAgICAgIDxoMj5UZWNobm9sb2d5PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdGFiLXNlY3QnPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2ZpbmF4aXN0YWJsaW5rcycsIHtcbiAgICAgICAgICAgICAgICAndGFiLWFjdGl2ZSc6IHRhYkFjdGl2ZSA9PSBmYWxzZVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0dGFiQWN0aXZlKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJvdG9jb2xzXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnZmluYXhpc3RhYmxpbmtzJywge1xuICAgICAgICAgICAgICAgICd0YWItYWN0aXZlJzogdGFiQWN0aXZlID09IHRydWVcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldHRhYkFjdGl2ZSh0cnVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3RhY2tcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8IS0tIFRhYiBjb250ZW50IC0tPiAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPSdwcm90b2NvbHMnXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdmaW5heGlzdGFiY29udGVudCBmaW5heGlzdGFiY29udGVudC1kLWJsb2NrJywge1xuICAgICAgICAgICAgJ2QtYmxvY2snOiB0YWJBY3RpdmUgPT0gZmFsc2UsXG4gICAgICAgICAgICAnZC1ub25lJzogdGFiQWN0aXZlID09IHRydWVcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdGFiY29udGVudC1sZnQnPlxuICAgICAgICAgICAgICAgIDxoMz5JbnRlZ3JhdGVkIHdpdGggbGVhZGluZyBwcm90b2NvbHM8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdGFiY29udGVudC1yaWdodCc+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy10ZWNoLWltZ2Jsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvdGVjaC1pbWcxLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScxaW5jaCdcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgMWluY2hcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXRlY2gtaW1nYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy90ZWNoLWltZzIucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J0FhdmUnXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vYWF2ZS5jb20vJyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBBYXZlXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy10ZWNoLWltZ2Jsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvdGVjaC1pbWczLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdCYWxhbmNlcidcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9iYWxhbmNlci5maS8nIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJhbGFuY2VyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy10ZWNoLWltZ2Jsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvdGVjaC1pbWc0LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdDdXJ2ZSdcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9jdXJ2ZS5maS8nIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEN1cnZlXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy10ZWNoLWltZ2Jsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvdGVjaC1pbWc1LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdDb21wb3VuZCdcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9jb21wb3VuZC5maW5hbmNlLycgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG91bmRcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXRlY2gtaW1nYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy90ZWNoLWltZzYucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JzFpbmNoJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAxaW5jaFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdGVjaC1pbWdibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL3RlY2gtaW1nNy5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nTWF0Y2hhJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRjaGFcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXRlY2gtaW1nYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy90ZWNoLWltZzgucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J1N1c2hpJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdXNoaVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdGVjaC1pbWdibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL3RlY2gtaW1nOS5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nUGllZGFvJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5waWVkYW8ub3JnLycgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGllZGFvXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy10ZWNoLWltZ2Jsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvdGVjaC1pbWcxMC5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nU3ludGhldGl4J1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBTeW50aGV0aXhcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXRlY2gtaW1nYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy90ZWNoLWltZzExLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdVbmlzd2FwJ1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBVbmlzd2FwXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9J3N0YWNrJ1xuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnZmluYXhpc3RhYmNvbnRlbnQgZmluYXhpc3RhYmNvbnRlbi1kLWJsb2NrJywge1xuICAgICAgICAgICAgJ2QtYmxvY2snOiB0YWJBY3RpdmUgPT0gdHJ1ZSxcbiAgICAgICAgICAgICdkLW5vbmUnOiB0YWJBY3RpdmUgPT0gZmFsc2VcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdGFiY29udGVudC1sZnQnPlxuICAgICAgICAgICAgICAgIDxoMz5Tb21lIHRleHQgd2lsbCBjb21lIG5vdzwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTYnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy10YWJjb250ZW50LXJpZ2h0Jz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlY2hub2xvZ3lcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgVGVzdFByb2cgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdGVzdFByb2ctc2VjdCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTYnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdGVzdFByb2ctbGZ0Jz5cbiAgICAgICAgICAgICAgPGgyPkJldGEgdGVzdCBwcm9ncmFtPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgSGVscCB1cyBzaGFwZSBvdXIgbmV3ZXN0IGJsb2NrY2hhaW4gYXBwcyBhbmQgZ2V0IGFjY2VzcyB0b1xuICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZSBjb250ZW50IGJlZm9yZSBhbnlvbmUgZWxzZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYXhpcy10ZXN0UHJvZy1mb3JtJz5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLWZvcm0taW5wdXRncm91cCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBtYWlsIGlkJyAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdmaW5heGlzLXN1Ym1pdC1idHRuJz5cbiAgICAgICAgICAgICAgICAgICAgICBFeHBsb3JlIEZpbmF4aXNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXRlc3RQcm9nLXJpZ2h0Jz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9maW5heGlzLWltZzgucG5nJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgIGFsdD0ndGVzdCBwcm9ncmFtbSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RQcm9nXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFZhbHVlZFBhcnRuZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtdmFsdWVkUGFydG5lci1zZWN0Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXZhbHVlZFBhcnRuZXItYmxvY2snPlxuICAgICAgICA8aDI+T3VyIFZhbHVlZCBQYXJ0bmVyczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdhbnQgdG8gbGVhcm4gaG93IHdlIHBsYW4gdG8gaW50cm9kdWNlIHRoZSBmaXJzdCBiaWxsaW9uIHBlb3BsZSB0byB0aGVcbiAgICAgICAgICBibG9ja2NoYWluP1xuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5heGlzLXRlc3RQcm9nLWZvcm0nPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtZm9ybS1pbnB1dGdyb3VwJz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIG1haWwgaWQnIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2ZpbmF4aXMtc3VibWl0LWJ0dG4nPlxuICAgICAgICAgICAgICAgIEV4cGxvcmUgRmluYXhpc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWx1ZWRQYXJ0bmVyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlJyBpZD0nZmluTmF2YmFyJz5cbiAgICAgIDx1bCBjbGFzc05hbWU9J25hdiBuYXZiYXItbmF2Jz5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxuICAgICAgICAgIDxhIGhyZWY9JyMnPk1pc3Npb248L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cbiAgICAgICAgICA8YSBocmVmPScjJz5UZWNobm9sb2d5PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi10b2dnbGUnPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9J25hdi1saW5rJ1xuICAgICAgICAgICAgaHJlZj0nIydcbiAgICAgICAgICAgIGlkPSduYXZiYXJEcm9wZG93bk1lbnVMaW5rJ1xuICAgICAgICAgICAgZGF0YS10b2dnbGU9J2Ryb3Bkb3duJ1xuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD0ndHJ1ZSdcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFByb2R1Y3RzeycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWwtMzInPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL3N1Ym1lbnUtaWNvbi5wbmcnXG4gICAgICAgICAgICAgICAgYWx0PSdzdWJtZW51J1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkIG1sLTInXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3N1Ym1lbnUgZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbScgaHJlZj0nIyc+XG4gICAgICAgICAgICAgICAgRW5vY2hcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJyBocmVmPScjJz5cbiAgICAgICAgICAgICAgICBObzJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJyBocmVmPScjJz5cbiAgICAgICAgICAgICAgICBMdXNhcm5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cbiAgICAgICAgICA8YSBocmVmPScvbmV3cyc+TmV3czwvYT5cbiAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPSdjb21taW5nLWNscyc+Q29taW5nIFNvb248L3NwYW4+ICovfVxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XG4gICAgICAgICAgPGEgaHJlZj0nL2NhcmVlcic+Q2FyZWVyPC9hPlxuICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9J2NvbW1pbmctY2xzJz5Db21pbmcgU29vbjwvc3Bhbj4gKi99XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cbiAgICAgICAgICA8YSBocmVmPScvY29udGFjdCc+Q29udGFjdDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVxuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnQvaGVhZGVyJ1xuaW1wb3J0IE91ckFwcHJvY2ggZnJvbSAnLi4vQ29tcG9uZW50L2hvbWUvb3VyLWFwcHJvY2gnXG5pbXBvcnQgVGVjaG5vbG9neSBmcm9tICcuLi9Db21wb25lbnQvaG9tZS90ZWNobm9sb2d5J1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vQ29tcG9uZW50L2hvbWUvcHJvZHVjdCdcbmltcG9ydCBUZXN0UHJvZyBmcm9tICcuLi9Db21wb25lbnQvaG9tZS90ZXN0UHJvZydcbmltcG9ydCBDbXBueUxvZ28gZnJvbSAnLi4vQ29tcG9uZW50L2hvbWUvY21wbnlMb2dvJ1xuaW1wb3J0IFZhbHVlZFBhcnRuZXIgZnJvbSAnLi4vQ29tcG9uZW50L2hvbWUvdmFsdWVkUGFydG5lcidcblxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Db21wb25lbnQvZm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmF4aXMtYmx1ZS1iZyc+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE91ckFwcHJvY2ggLz5cbiAgICAgICAgPFRlY2hub2xvZ3kgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFByb2R1Y3QgLz5cbiAgICAgIDxUZXN0UHJvZyAvPlxuICAgICAgPENtcG55TG9nbyAvPlxuICAgICAgPFZhbHVlZFBhcnRuZXIgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==