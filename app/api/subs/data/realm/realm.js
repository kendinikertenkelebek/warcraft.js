'use strict';

const request = require('request-promise');
const endpoints = require('../../../../../util/endpoints');
const { Urls } = require('../../../../../util/constants');

class Realm {
  constructor(options) {
    this.options = options;
  }

  async getRealmIndex() {
    if (arguments.length > 0) {
      throw new TypeError('INVALID_FIELD', 'FIELD_SIZE', 'error');
    }
    const apiURL = this._makeURL(this.options, false);
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

  async getRealm(slug) {
    if (arguments.length < 1) {
      throw new TypeError('INVALID_FIELD', 'FIELD_SIZE', 'error');
    }
    const apiURL = this._makeURL(this.options, slug, true);
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

  _makeURL(options, slug, hasSlug) {
    if (hasSlug) {
      const endpoint = endpoints.getEndpoint(options.region, options.locale);
      const link = Urls.realm
        .replace(/\{hostname\}/, endpoint.hostname)
        .replace(/\{slug\}/, slug)
        .replace(/\{region\}/, options.region)
        .replace(/\{locale\}/, endpoint.locale)
        .replace(/\{access_token\}/, options.access_token);
      const reqURL = { method: 'GET', uri: link, json: true };
      return reqURL;
    }

    const endpoint = endpoints.getEndpoint(options.region, options.locale);
    const link = Urls.realm
      .replace(/\{hostname\}/, endpoint.hostname)
      .replace(/\{slug\}/, '')
      .replace(/\{region\}/, options.region)
      .replace(/\{locale\}/, endpoint.locale)
      .replace(/\{access_token\}/, options.access_token);
    const reqURL = { method: 'GET', uri: link, json: true };
    return reqURL;
  }
}

module.exports = Realm;