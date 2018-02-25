'use strict';

const Guild = require('./subs/community/guild/guild');
const Item = require('./subs/community/item/item');
const Auction = require('./subs/community/auction/auction');

class Community {
  constructor(options) {
    this.guild = new Guild(options);
    this.item = new Item(options);
    this.auction = new Auction(options);
  }
}

module.exports = Community;