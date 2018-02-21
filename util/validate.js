'use strict';

const WarcraftProcess = require('../util/process');

class Validate {
  static whatIsTypeof(data) {
    return WarcraftProcess.success(typeof data);
  }

  static _options(configs) {
    if (typeof configs.apiKey !== 'string' || configs.apiKey.length < 10) {
      throw new TypeError('GEÇERSİZ_MODUL_AYARI', 'apiKey', 'String olmalı');
    }
    if (typeof configs.access_token !== 'string' || configs.apiKey.length < 10) {
      throw new TypeError('GEÇERSİZ_MODUL_AYARI', 'access_token', 'String olmalı');
    }
  }
}

module.exports = Validate;
