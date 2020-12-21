"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.measureFunctionExecuteTime = measureFunctionExecuteTime;

var _perf_hooks = require("perf_hooks");

function measureFunctionExecuteTime(fn) {
    var t0 = _perf_hooks.performance.now();

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    fn.apply(void 0, args);

    var t1 = _perf_hooks.performance.now();

    return t1 - t0;
}
