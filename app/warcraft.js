'use strict';

const WarcraftBase = require('../app/base');
const WarcraftValidate = require('../util/validate');
const GameDataApi = require('../app/api/data');
const CommunityApi = require('../app/api/community');

class Warcraft extends WarcraftBase {
  constructor(options = {}) {
    super(Object.assign(options));
    WarcraftValidate._options(options);
    this.data = new GameDataApi(this.options);
    this.community = new CommunityApi(this.options);
  }
}

module.exports = Warcraft;
