"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var calc = function calc(c) {
  var r = c % 15;
  var n = (c - r) / 15;

  return [n, r];
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
};

var base = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"];

var generateNextArray = function generateNextArray(i) {
  return base.map(function (v) {
    return isNumeric(v) ? parseInt(v) + i * 15 + '' : v;
  });
};

var fizzBuzz = function fizzBuzz(c) {
  var result = [];

  var _calc = calc(c),
      _calc2 = _slicedToArray(_calc, 2),
      n = _calc2[0],
      r = _calc2[1];

  for (var i = 0; i < n; i++) {
    result = result.concat(generateNextArray(i));
  }
  result = result.concat(generateNextArray(n).slice(0, r));

  return result;
};