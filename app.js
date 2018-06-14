'use strict';

if (process.version.slice(1).split('.')[0] < 10 && process.version.slice(1).split('.')[1] < 4) {
  throw new Error('Please install Node.JS 10.4.0 or higher version.');
}

module.exports = {
  // Main
  Base: require('./app/base'),
  Warcraft: require('./app/warcraft'),
  // Structures
  Data: require('./app/api/data'),
  Community: require('./app/api/community'),
  // Utility
  Constants: require('./util/constants'),
  version: require('./package.json').version,

};