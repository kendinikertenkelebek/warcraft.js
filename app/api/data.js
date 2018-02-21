'use strict';

const Realm = require('./subs/data/realm/realm');
const mythicKeystone = require('./subs/data/keystone/keystone');

class Data {
  constructor(options) {
    this.realm = new Realm(options);
    this.mythickeystone = new mythicKeystone(options);
  }
}

module.exports = Data;