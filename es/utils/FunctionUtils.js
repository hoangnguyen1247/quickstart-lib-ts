import { performance } from "perf_hooks";
export function measureFunctionExecuteTime(fn) {
    var t0 = performance.now();

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    fn.apply(void 0, args);
    var t1 = performance.now();
    return t1 - t0;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9GdW5jdGlvblV0aWxzLnRzIl0sIm5hbWVzIjpbInBlcmZvcm1hbmNlIiwibWVhc3VyZUZ1bmN0aW9uRXhlY3V0ZVRpbWUiLCJmbiIsInQwIiwibm93IiwiYXJncyIsInQxIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxXQUFULFFBQTRCLFlBQTVCO0FBRUEsT0FBTyxTQUFTQywwQkFBVCxDQUFvQ0MsRUFBcEMsRUFBaUQ7QUFDcEQsTUFBTUMsRUFBRSxHQUFHSCxXQUFXLENBQUNJLEdBQVosRUFBWDs7QUFEb0Qsb0NBQU5DLElBQU07QUFBTkEsSUFBQUEsSUFBTTtBQUFBOztBQUVwREgsRUFBQUEsRUFBRSxNQUFGLFNBQU1HLElBQU47QUFDQSxNQUFNQyxFQUFFLEdBQUdOLFdBQVcsQ0FBQ0ksR0FBWixFQUFYO0FBQ0EsU0FBT0UsRUFBRSxHQUFHSCxFQUFaO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJmb3JtYW5jZSB9IGZyb20gJ3BlcmZfaG9va3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZUZ1bmN0aW9uRXhlY3V0ZVRpbWUoZm4sIC4uLmFyZ3MpIHtcbiAgICBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGZuKC4uLmFyZ3MpO1xuICAgIGNvbnN0IHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgcmV0dXJuIHQxIC0gdDA7XG59XG4iXX0=
