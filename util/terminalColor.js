'use strict';

module.exports = function(text, type) { // eslint-disable-line func-names
  var style = {
    bold: [1, 22],
    underline: [4, 24],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
  };
  function wrap(args) {
    style = style[type];

    var tags = {
      open: `\u001b[${style[0]}m`,
      close: `\u001b[${style[1]}m`,
    };
    return tags.open + args + tags.close;
  }

  return wrap(text);
};