'use strict';

const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

class Util {
  constructor() {
    throw new Error(`${this.constructor.name} sınıfı örneklenemez.`);
  }
  static mergeDefault(def, given) {
    if (!given) return def;
    for (const key in def) {
      if (!has(given, key) || given[key] === undefined) {
        given[key] = def[key];
      } else if (given[key] === Object(given[key])) {
        given[key] = this.mergeDefault(def[key], given[key]);
      }
    }
    return given;
  }
}

module.exports = Util;