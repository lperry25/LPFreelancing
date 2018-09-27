webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js":
false,

/***/ "./node_modules/fullpage.js/vendors/scrolloverflow.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ap_cx_react_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ap.cx/react-fullpage */ "./node_modules/@ap.cx/react-fullpage/dist/index.es.js");
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
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
  */

};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/banner2.jpg",
    alt: "Banner Image",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: textBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "LP Freelancing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Software development to meet your needs"))));
});
/*
import ReactDOM from 'react-dom';
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';


const FullpageWrapper = () => (
    <ReactFullpage
        render={({ state, fullpageApi }) => {
            return (
                <div>
                    <div className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                </div>
            );
        }}
    />
);

ReactDOM.render(<FullpageWrapper />, document.getElementById('react-root'));
*/
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
//# sourceMappingURL=index.js.176d58d4e442acdbf7c5.hot-update.js.map