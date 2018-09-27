webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ap_cx_react_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ap.cx/react-fullpage */ "./node_modules/@ap.cx/react-fullpage/dist/index.es.js");
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fullpage_js_vendors_scrolloverflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fullpage.js/vendors/scrolloverflow */ "./node_modules/fullpage.js/vendors/scrolloverflow.js");
/* harmony import */ var fullpage_js_vendors_scrolloverflow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_vendors_scrolloverflow__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/lauraperry/Documents/codeProjects/LPFreelancing/pages/index.js";



/*import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});
*/


var textBlock = {
  position: 'absolute',
  top: '30%',
  fontSize: '-webkit-xxx-large',
  textAlign: 'center',
  width: '100%',
  color: 'white',
  paddingLeft: '20px',
  paddingRight: '20px',
  fontFamily: 'sans-serif'
  /*
  export default class App extends Component {
      render () {
          return (
              <Fullpage>
                  <FullpageSection style={{
                      backgroundColor: 'lime',
                      height: '80vh',
                      padding: '1em',
                  }}>1</FullpageSection>
                  <FullpageSection style={{
                      backgroundColor: 'coral',
                      padding: '1em',
                  }}>2</FullpageSection>
                  <FullpageSection style={{
                      backgroundColor: 'firebrick',
                      padding: '1em',
                  }}>3</FullpageSection>
              </Fullpage>
          )
      }
  }
  
  export default () => (
      <Layout>
          <div>
              <img src="/static/banner2.jpg" alt="Banner Image" width="100%"/>
              <div style={textBlock}>
                  <h1>LP Freelancing</h1>
                  <p>Software development to meet your needs</p>
              </div>
          </div>
      </Layout>
  )
  */

};

 // Optional. When using scrollOverflow:true



var FullpageWrapper = function FullpageWrapper() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_6___default.a, {
    render: function render(_ref) {
      var state = _ref.state,
          fullpageApi = _ref.fullpageApi;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Section 1 (welcome to fullpage.js)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return fullpageApi.moveSectionDown();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Click me to move down")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Section 2")));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  });
};

react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FullpageWrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}), document.getElementById('react-root'));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.a2be78d0193cc3c55e54.hot-update.js.map