"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "test", {
    enumerable: true,
    get: function get() {
        return _testUtils.test;
    }
});
exports.testDirect = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _testUtils = require("./utils/test-utils");

var testDirect = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var str;
        return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        str = "world";
                        console.log("Hello ".concat(str));
                        return _context.abrupt("return", 1);

                    case 3:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee);
    }));

    return function testDirect() {
        return _ref.apply(this, arguments);
    };
}();

exports.testDirect = testDirect;
