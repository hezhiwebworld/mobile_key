// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({64:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var arr = [];
var arr1 = ["1", "2", "3"];
var arr2 = ["4", "5", "6"];
var arr3 = ["7", "8", "9"];
var arr4 = [" ", "0", "X"];
exports["default"] = arr.concat(arr1, arr2, arr3, arr4);
},{}],62:[function(require,module,exports) {
"use strict";
// import HandClick from "./HandClick";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var Number_1 = __importDefault(require("./Number"));
//  初始化键盘
var InitKeyboard = /** @class */function () {
    function InitKeyboard(before, after) {
        this.afterHtml = after;
        this.beforeHtml = before;
    }
    InitKeyboard.prototype.init = function () {
        var keyBoard = this.beforeHtml + "\n        <div class=\"ui_key\">\n            <div class=\"ui_key_wrap\">\n        ";
        Number_1["default"].forEach(function (element) {
            keyBoard += " <span>" + element + "</span>";
        });
        keyBoard += " </div></div>" + this.afterHtml;
        return keyBoard;
    };
    return InitKeyboard;
}();
exports["default"] = InitKeyboard;
},{"./Number":64}],78:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var HandClick = /** @class */function () {
    function HandClick() {}
    HandClick.prototype.handler = function (event) {
        console.log(event.target);
    };
    HandClick.prototype.regitertClick = function (Dom) {
        console.log(!Dom.length);
        if (!Dom.length) {
            Dom.onClick = new HandClick().handler;
        } else {
            for (var index = 0; index < Dom.length; index++) {
                Dom[index].onclick = function (event) {
                    new HandClick().handler(event);
                };
            }
        }
    };
    return HandClick;
}();
exports["default"] = HandClick;
},{}],105:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var InputText = /** @class */function () {
    function InputText() {}
    InputText.prototype.init = function () {
        var html = "";
        html += "\n                    <div class=\"pwd-box\">\n                        <input type=\"tel\" maxlength=\"6\" class=\"pwd-input\" id=\"pwd-input\">\n                        <div class=\"fake-box\"><input type=\"number\" readonly=\"\">\n                            <input type=\"number\" readonly=\"\">\n                            <input type=\"number\" readonly=\"\">\n                            <input type=\"number\" readonly=\"\">\n                            <input type=\"number\" readonly=\"\">\n                            <input type=\"number\" readonly=\"\"></div>\n                    </div>\n                ";
        return html;
    };
    return InputText;
}();
exports["default"] = InputText;
},{}],12:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var InitKeyboard_1 = __importDefault(require("./InitKeyboard"));
var handclick_1 = __importDefault(require("./handclick"));
var Input_1 = __importDefault(require("./Input"));
// 将键盘挂在页面
var init = new InitKeyboard_1["default"](new Input_1["default"]().init(), "");
document.body.innerHTML = init.init();
var aspan = document.getElementsByTagName("span");
var Handclick = new handclick_1["default"]();
Handclick.regitertClick(aspan);
console.log(aspan);
},{"./InitKeyboard":62,"./handclick":78,"./Input":105}],107:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49727' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[107,12])
//# sourceMappingURL=/main.3b0e7715.map