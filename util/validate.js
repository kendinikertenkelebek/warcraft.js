'use strict';

const WarcraftProcess = require('../util/process');

class Validate {
  static whatIsTypeof(data) {
    return WarcraftProcess.success(typeof data);
  }

  static _options(configs) {
    if (typeof configs.apiKey !== 'string' || configs.apiKey.length < 10) {
      throw new TypeError('INVALID_MODULE_SETTINGS', 'apiKey', 'Must be String');
    }
    if (typeof configs.access_token !== 'string' || configs.apiKey.length < 10) {
      throw new TypeError('INVALID_MODULE_SETTINGS', 'access_token', 'Must be String');
    }
  }
}

module.exports = Validate;
