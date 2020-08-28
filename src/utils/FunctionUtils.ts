import { performance } from "perf_hooks";

export function measureFunctionExecuteTime(fn, ...args) {
    var t0 = performance.now();
    fn(...args);
    var t1 = performance.now();
    return t1 - t0;
}
