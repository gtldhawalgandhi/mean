"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = readFile;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _fs = _interopRequireDefault(require("fs"));

var fileManager = function () {
  function fileManager() {
    (0, _classCallCheck2["default"])(this, fileManager);
  }

  (0, _createClass2["default"])(fileManager, null, [{
    key: "read",
    value: function read(filename) {
      return new Promise(function (resolve, reject) {
        var readStream = _fs["default"].createReadStream(filename, {
          encoding: 'utf-8'
        });

        readStream.on('data', function (data) {
          resolve(data);
        });
        readStream.on('error', function (err) {
          reject(err);
        });
      });
    }
  }]);
  return fileManager;
}();

function readFile(filename) {
  return new Promise(function (resolve, reject) {
    var readStream = _fs["default"].createReadStream(filename, {
      encoding: 'utf-8'
    });

    readStream.on('data', function (data) {
      resolve(data);
    });
    readStream.on('error', function (err) {
      reject(err);
    });
  });
}

var _default = fileManager;
exports["default"] = _default;