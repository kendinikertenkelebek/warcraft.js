'use strict';

const Guild = require('./subs/community/guild/guild');
const Item = require('./subs/community/item/item');

class Community {
  constructor(options) {
    this.guild = new Guild(options);
    this.item = new Item(options);
  }
}

module.exports = Community;