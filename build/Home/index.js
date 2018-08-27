(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(8)
var $app_style$ = __webpack_require__(9)
var $app_script$ = __webpack_require__(10)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return '欢迎打开' + (this.title)}
      },
      "classList": [
        "title"
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "fetch数据"
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "fetchCustomerReport"
      }
    },
    {
      "type": "list",
      "attr": {},
      "classList": [
        "list"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": {
            "exp": function () {return this.lists},
            "key": "index",
            "value": "item"
          },
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "product"
              },
              "classList": [
                "list-item"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.customer_name}
                  },
                  "classList": [
                    "title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.product_name}
                  },
                  "classList": [
                    "content"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.adnetwork}
                  },
                  "classList": [
                    "time"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.conment}
                  },
                  "classList": [
                    "time"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.date}
                  },
                  "classList": [
                    "time"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "progress",
      "attr": {
        "type": "circular"
      },
      "shown": function () {return this.loading},
      "style": {
        "position": "fixed",
        "top": "400px",
        "left": "350px"
      }
    }
  ]
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  ".layout": {
    "flexDirection": "column"
  },
  ".list": {
    "flexDirection": "column"
  },
  ".list-item": {
    "borderTopWidth": "1px",
    "borderTopColor": "#eeeeee",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#dddddd",
    "height": "200px",
    "flexDirection": "column",
    "justifyContent": "center",
    "marginBottom": "10px",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px"
  },
  ".title": {
    "fontSize": "40px",
    "textAlign": "center"
  },
  ".content": {
    "fontSize": "20px",
    "color": "#aaaaaa",
    "marginBottom": "40px"
  },
  ".time": {
    "fontSize": "20px",
    "color": "#dddddd"
  },
  ".fixed-btn": {
    "color": "#ffffff",
    "fontSize": "50px",
    "position": "fixed",
    "width": "100px",
    "height": "100px",
    "right": "40px",
    "bottom": "40px",
    "borderRadius": "50px",
    "backgroundColor": "#519650"
  },
  ".demo-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".btn": {
    "width": "550px",
    "height": "86px",
    "marginTop": "75px",
    "borderRadius": "43px",
    "backgroundColor": "#09ba07",
    "fontSize": "30px",
    "color": "#ffffff"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = __webpack_require__(11);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  data: {
    title: 'quickapp-tempate',
    lists: [],
    loading: false
  },
  fetchCustomerReport: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.loading = true;
              _context.prev = 1;
              _context.next = 4;
              return (0, _index.fetchHomeData)();

            case 4:
              data = _context.sent;

              this.lists = data.data.list;
              this.loading = false;
              this.$app.$def.prompt.showToast({
                message: '加载完成'
              });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](1);

              console.log(_context.t0);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 10]]);
    }));

    function fetchCustomerReport() {
      return _ref.apply(this, arguments);
    }

    return fetchCustomerReport;
  }(),
  onInit: function onInit() {
    console.log('onInit');
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(12);

Object.keys(_home).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _home[key];
    }
  });
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchHomeData = undefined;

var _index = __webpack_require__(13);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchHomeData = exports.fetchHomeData = function fetchHomeData(params) {
    return _index2.default.GET('/5a535c5390626970a9649c4c/crm/v1/consume-reports', params);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = $app_require$('@app-module/system.fetch');

var _system2 = _interopRequireDefault(_system);

var _index = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = {};
var $http = {};

var quickFetch = function quickFetch(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';

  return new Promise(function (resolve, reject) {
    _system2.default.fetch({
      url: _index.API_ROOT + url,
      data: data,
      header: headers,
      method: method,
      success: function success(data) {
        resolve(data && JSON.parse(data.data) || data);
      },
      fail: function fail(data, code) {
        reject(data);
      }
    });
  });
};
$http.POST = function (url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return quickFetch(url, data, 'post');
};

$http.GET = function (url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return quickFetch(url, data, 'get');
};
$http.PUT = function (url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return quickFetch(url, data, 'put');
};

$http.getAuth = function () {
  return new Promise(function (resolve, reject) {
    storage.get({
      key: 'auth',
      success: function success(data) {
        headers.Cookie = data;
        resolve(true);
      },
      fail: function fail(data, code) {
        resolve(false);
      }
    });
  });
};

$http.withAuth = function (url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  var canSkip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  return getAuth().then(function (auth) {
    if (auth || canSkip) {
      return quickFetch(url, data, method);
    } else {
      return new Promise(function (resolve, reject) {
        reject('请先登录！');
      });
    }
  });
};

exports.default = $http;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// export const  API_ROOT = 'http://api.ops.yesdat.com'
var API_ROOT = exports.API_ROOT = 'https://easy-mock.com/mock';

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map