"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("regenerator-runtime/runtime");

var _lib = _interopRequireWildcard(require("./lib"));

var readMyFile = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(filename) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _lib["default"].read(filename);

          case 3:
            data = _context.sent;
            console.log(data);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("Error while reading file: ".concat(_context.t0));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function readMyFile(_x) {
    return _ref.apply(this, arguments);
  };
}();

readMyFile("".concat(process.env.dir, "/package.json"));
console.log([23, 242, 121, 2424].includes(23));