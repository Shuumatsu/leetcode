"use strict";

var circularArrayLoop = function circularArrayLoop(nums) {
  var length = nums.length;
  var normalizeIndex = function normalizeIndex(i) {
    if (i < 0) return length + i;

    return i % length;
  };

  var n = 0;
  nums.forEach(function (v, i) {
    var nextIndex = normalizeIndex(i + v);
    if (nums[nextIndex] === i || v + nums[nextIndex] === 0) n++;
  });

  return n !== length;
};