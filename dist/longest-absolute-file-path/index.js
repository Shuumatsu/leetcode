'use strict';

var maxDepth = 0;
var calcDepth = function calcDepth(str) {
  var matched = str.match(/\t{1}/g);
  var depth = matched ? matched.length : 0;
  if (depth > maxDepth) maxDepth = depth;

  return depth;
};

var lengthLongestPath = function lengthLongestPath(input) {
  var splited = input.split('\n');

  var directoryOrFileLength = [];
  var fileLength = [0];
  splited.forEach(function (name) {
    var pathDepth = calcDepth(name);
    var nameLength = name.length - pathDepth;

    var pathLength = directoryOrFileLength[pathDepth - 1] ? directoryOrFileLength[pathDepth - 1] + nameLength : nameLength;
    directoryOrFileLength[pathDepth] = pathLength;

    if (/\./.test(name)) fileLength.push(pathLength + pathDepth);
  });

  return Math.max.apply(null, fileLength);
};