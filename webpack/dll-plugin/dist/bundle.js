// 最外层IIFE
(() => {
  // 模块方法
  var __webpack_modules__ = {
    // 模块B
    "./node_modules/isarray/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {

      // 加载模块<dll-reference _dll_utils>
      // 代码 __webpack_require__("dll-reference _dll_utils") 直接结束后相当于_dll_utils
      module.exports = __webpack_require__("dll-reference _dll_utils")(
        // 表示加载模块id
        "./node_modules/isarray/index.js"
      );
    },

    "dll-reference _dll_utils": (module) => {
      "use strict";
      module.exports = _dll_utils;
    },
  };
  var __webpack_module_cache__ = {};

  // 加载模块
  function __webpack_require__(moduleId) {
    // 判断模块中是否存在
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }


    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    // 加载执行模块
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  var __webpack_exports__ = {};

  // 执行函数入口
  (() => {

    // 加载模块<isarray/index.js>
    let isarray = __webpack_require__("./node_modules/isarray/index.js");
    console.log("isarray([1, 2, 3])=", isarray([1, 2, 3]));
  })();
})();
