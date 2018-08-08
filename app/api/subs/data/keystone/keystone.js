'use strict';

const request = require('request-promise');
const endpoints = require('../../../../../util/endpoints');
const dungeons = require('../../../../../util/dungeons');
const { Urls } = require('../../../../../util/constants');

class mythicKeystone {
  constructor(options) {
    this.options = options;
  }

  async leaderboardIndex(realmName) {
    if (arguments.length !== 1) {
      throw new TypeError('INVALID_FIELD', 'FIELD_SIZE', 'Field can not be empty!');
    }
    const apiURL = await this._makeURL(realmName, this.options, false);
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

  async leaderboard(slug, dgName, period) {
    if (arguments.length < 2 || arguments.length > 3) {
      throw new TypeError('INVALID_FIELD', 'FIELD_SIZE', 'Fault field!');
    }
    const data = dungeons.getDungeon(dgName);
    data.period = period || '634';
    const apiURL = await this._makeURL(slug, this.options, data);
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

  async _makeURL(realmName, options, data) {
    const connectedId = await this._getConnectedId(realmName, options);
    if (data) {
      const endpoint = endpoints.getEndpoint(options.region, options.locale);
      const firstlink = Urls.connectedRealm
        .replace(/\{hostname\}/, endpoint.hostname)
        .replace(/\{realmId\}/, connectedId)
        .replace(/\{region\}/, options.region)
        .replace(/\{locale\}/, endpoint.locale)
        .replace(/\{access_token\}/, options.access_token);
      const link = firstlink.split('?').join(`${data.id}/period/${data.period}?`);
      const reqURL = { method: 'GET', uri: link, json: true };
      return reqURL;
    }

    const endpoint = endpoints.getEndpoint(options.region, options.locale);
    const link = Urls.connectedRealm
      .replace(/\{hostname\}/, endpoint.hostname)
      .replace(/\{realmId\}/, connectedId)
      .replace(/\{region\}/, options.region)
      .replace(/\{locale\}/, endpoint.locale)
      .replace(/\{access_token\}/, options.access_token);
    const reqURL = { method: 'GET', uri: link, json: true };
    return reqURL;
  }

  async _getConnectedId(realmName, options) {
    // eslint-disable-line consistent-return
    const endpoint = endpoints.getEndpoint(options.region, options.locale);
    const link = Urls.realm
      .replace(/\{hostname\}/, endpoint.hostname)
      .replace(/\{slug\}/, realmName)
      .replace(/\{region\}/, options.region)
      .replace(/\{locale\}/, endpoint.locale)
      .replace(/\{access_token\}/, options.access_token);
    const reqURL = { method: 'GET', uri: link, json: true };

    if (reqURL && typeof reqURL !== 'undefined') {
      try {
        const response = await request(reqURL);
        return response.connected_realm.href.split('connected-realm/')[1].split('?')[0];
      } catch (err) {
        return false;
      }
    }
    return undefined;
  }
}

module.exports = mythicKeystone;
