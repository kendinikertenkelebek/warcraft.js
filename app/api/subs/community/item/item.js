'use strict';

const request = require('request-promise');
const endpoints = require('../../../../../util/endpoints');
const { Urls } = require('../../../../../util/constants');

class Item {
  constructor(options) {
    this.options = options;
  }

  async get(itemId) {
    const apiURL = this._makeURL(itemId, this.options, false);
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

  async set(setId) {
    const apiURL = this._makeURL(setId, this.options, true);
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

  _makeURL(itemId, options, isSet) {
    if (isSet) {
      const endpoint = endpoints.getEndpoint(options.region, options.locale);
      const firstlink = Urls.item
        .replace(/\{hostname\}/, endpoint.hostname)
        .replace(/\{itemId\}/, itemId)
        .replace(/\{locale\}/, endpoint.locale)
        .replace(/\{apiKey\}/, options.apiKey);
      const link = firstlink.split('item/').join('item/set/');
      const reqURL = { method: 'GET', uri: link, json: true };
      return reqURL;
    }

    const endpoint = endpoints.getEndpoint(options.region, options.locale);
    const link = Urls.item
      .replace(/\{hostname\}/, endpoint.hostname)
      .replace(/\{itemId\}/, itemId)
      .replace(/\{locale\}/, endpoint.locale)
      .replace(/\{apiKey\}/, options.apiKey);
    const reqURL = { method: 'GET', uri: link, json: true };
    return reqURL;
  }
}

module.exports = Item;
