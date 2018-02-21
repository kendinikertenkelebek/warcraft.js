'use strict';

const termColor = require('../util/terminalColor');

class WarcraftProcess {
  static success(data) {
    return console.log(termColor(data, 'green')); // eslint-disable-line no-console
  }
  static fail(data) {
    return console.log(termColor(data, 'red')); // eslint-disable-line no-console
  }
}

module.exports = WarcraftProcess;