import { performance } from 'perf_hooks';

export function measureFunctionExecuteTime(fn, ...args) {
    const t0 = performance.now();
    fn(...args);
    const t1 = performance.now();
    return t1 - t0;
}
