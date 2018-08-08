'use strict';

if (process.version.slice(1).split('.')[0] < 10 && process.version.slice(1).split('.')[1] < 8) {
  throw new Error('Please install Node.JS 10.8.0 or higher version.');
}

module.exports = {
  // main
  Base: require('./app/base'),
  Warcraft: require('./app/warcraft'),
  // structures
  Data: require('./app/api/data'),
  Community: require('./app/api/community'),
  // utility
  Constants: require('./util/constants'),
  version: require('./package.json').version
};
