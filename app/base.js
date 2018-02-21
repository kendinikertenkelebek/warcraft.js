'use strict';

const EventEmitter = require('events');
const Util = require('../util/mainUtil');
const { DefaultOptions } = require('../util/constants');

class WarcraftBase extends EventEmitter {
  constructor(options = {}) {
    super();
    this.options = Util.mergeDefault(DefaultOptions, options);
  }
}

module.exports = WarcraftBase;