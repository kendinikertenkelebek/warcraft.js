'use strict';

const request = require('request-promise');
const endpoints = require('../../../../../util/endpoints');
const { Urls } = require('../../../../../util/constants');

class Guild {
  constructor(options) {
    this.options = options;
  }

  async profile(guildName) {
    const apiURL = this._makeURL(guildName, this.options);
    if (apiURL && typeof apiURL !== 'undefined') {
      try {
        const response = await request(apiURL);
        return response;
      } catch (err) {
        const fail = { fail: true };
        return fail;
      }
    }
    return null;
  }

  async members(guildName) {
    const apiURL = this._makeURL(guildName, this.options, 'members');
    if (apiURL && typeof apiURL !== 'undefined') {
      try {
        const response = await request(apiURL);
        return response;
      } catch (err) {
        const fail = { fail: true };
        return fail;
      }
    }
    return null;
  }

  async achievements(guildName) {
    const apiURL = this._makeURL(guildName, this.options, 'achievements');
    if (apiURL && typeof apiURL !== 'undefined') {
      try {
        const response = await request(apiURL);
        return response;
      } catch (err) {
        const fail = { fail: true };
        return fail;
      }
    }
    return null;
  }

  async challenge(guildName) {
    const apiURL = this._makeURL(guildName, this.options, 'challenge');
    if (apiURL && typeof apiURL !== 'undefined') {
      try {
        const response = await request(apiURL);
        return response;
      } catch (err) {
        const fail = { fail: true };
        return fail;
      }
    }
    return null;
  }

  async news(guildName) {
    const apiURL = this._makeURL(guildName, this.options, 'news');
    if (apiURL && typeof apiURL !== 'undefined') {
      try {
        const response = await request(apiURL);
        return response;
      } catch (err) {
        const fail = { fail: true };
        return fail;
      }
    }
    return null;
  }

  async multi(guildName, fieldOne, fieldTwo, fieldThree, fieldFour) {
    if (arguments.length < 3) {
      throw new TypeError('EMPTY_FIELDS', 'Field_Number', 'Must be 2 or more!');
    } else if (arguments.length > 5) {
      throw new TypeError('OVER_FIELD_SIZE', 'Field_Number', 'Can not be more than 4!');
    }
    var validFields = ['members', 'achievements', 'challenge', 'news'];
    var fields = '';
    if (fieldFour &&
      typeof validFields.find(item => item === fieldFour.toLowerCase()) === 'string' &&
      typeof validFields.find(item => item === fieldThree.toLowerCase()) === 'string' &&
      typeof validFields.find(item => item === fieldTwo.toLowerCase()) === 'string' &&
      typeof validFields.find(item => item === fieldOne.toLowerCase()) === 'string'
    ) {
      fields = fieldOne + ',' + fieldTwo + ',' + fieldThree + ',' + fieldFour; // eslint-disable-line prefer-template
    } else if (fieldThree &&
      typeof validFields.find(item => item === fieldThree.toLowerCase()) === 'string' &&
      typeof validFields.find(item => item === fieldTwo.toLowerCase()) === 'string' &&
      typeof validFields.find(item => item === fieldOne.toLowerCase()) === 'string'
    ) {
      fields = fieldOne + ',' + fieldTwo + ',' + fieldThree; // eslint-disable-line prefer-template
    } else if (
      typeof validFields.find(item => item === fieldTwo.toLowerCase()) === 'string' &&
      typeof validFields.find(item => item === fieldOne.toLowerCase()) === 'string'
    ) {
      fields = fieldOne + ',' + fieldTwo; // eslint-disable-line prefer-template
    } else {
      throw new TypeError('INVALID_FIELD', 'TYPO', 'Check field/s!');
    }
    const apiURL = this._makeURL(guildName, this.options, fields);
    if (apiURL && typeof apiURL !== 'undefined') {
      try {
        const response = await request(apiURL);
        return response;
      } catch (err) {
        const fail = { fail: true };
        return fail;
      }
    }
    return null;
  }

  _makeURL(guildName, options, field) {
    if (field) {
      const endpoint = endpoints.getEndpoint(options.region, options.locale);
      const link = Urls.guild
        .replace(/\{hostname\}/, endpoint.hostname)
        .replace(/\{realm\}/, options.realm)
        .replace(/\{guild\}/, guildName)
        .replace(/\{field\}/, field)
        .replace(/\{locale\}/, endpoint.locale)
        .replace(/\{apiKey\}/, options.apiKey);
      const reqURL = { method: 'GET', uri: link, json: true };
      return reqURL;
    }
    const endpoint = endpoints.getEndpoint(options.region, options.locale);
    const link = Urls.guild
      .replace(/\{hostname\}/, endpoint.hostname)
      .replace(/\{realm\}/, options.realm)
      .replace(/\{guild\}/, guildName)
      .replace(/\{field\}/, '')
      .replace(/\{locale\}/, endpoint.locale)
      .replace(/\{apiKey\}/, options.apiKey);
    const reqURL = { method: 'GET', uri: link, json: true };
    return reqURL;
  }
}

module.exports = Guild;
