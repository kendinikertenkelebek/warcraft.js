'use strict';

const request = require('request-promise');
const endpoints = require('../../../../../util/endpoints');
const { Urls } = require('../../../../../util/constants');

class Auction {
  constructor(options) {
    this.options = options;
  }

  async get(realmName) {
    const apiURL = this._makeURL(this.options, realmName || null);
    if (apiURL && typeof apiURL !== 'undefined') {
      try {
        const response = await request(apiURL);
        return response;
      } catch (err) {
        return false;
      }
    }
    return undefined;
  }

  _makeURL(options, realmName) {
    const endpoint = endpoints.getEndpoint(options.region, options.locale);
    const link = Urls.auction
      .replace(/\{hostname\}/, endpoint.hostname)
      .replace(/\{realm\}/, realmName || options.realm)
      .replace(/\{locale\}/, endpoint.locale)
      .replace(/\{apiKey\}/, options.apiKey);
    const reqURL = { method: 'GET', uri: link, json: true };
    return reqURL;
  }
}

module.exports = Auction;
