// 暴露的全局变量  打包内容将以全局的方式挂载到这里
var _dll_utils;

// 最外层的IIFE
(() => {
  var __webpack_modules__ = {
    "./node_modules/isarray/index.js": (module) => {
      eval(
        "var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack://_dll_utils/./node_modules/isarray/index.js?"
      );
    },

    "?2e89": (module, __unused_webpack_exports, __webpack_require__) => {
      eval(
        "module.exports = __webpack_require__;\n\n//# sourceURL=webpack://_dll_utils/dll_utils?"
      );
    },

    "./node_modules/is-promise/index.mjs": (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isPromise)\n/* harmony export */ });\nfunction isPromise(obj) {\n  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';\n}\n\n\n//# sourceURL=webpack://_dll_utils/./node_modules/is-promise/index.mjs?"
      );
    },
  };
  var __webpack_module_cache__ = {};

  // 加载模块方法
  function __webpack_require__(moduleId) {
    // 获取以及判断缓存
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    // 开始加载模块
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }
  // ---- 忽略 对分析没有帮助 ------
  (() => {
    // 定义函数<d>
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();
  // ---- 忽略 对分析没有帮助 ------
  (() => {
    // 定义函数<o>
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  // ---- 忽略 对分析没有帮助 ------
  (() => {
    // 加载import __esModule
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();
  var __webpack_exports__ = __webpack_require__("?2e89");
  _dll_utils = __webpack_exports__;
})();
