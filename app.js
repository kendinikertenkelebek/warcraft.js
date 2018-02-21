'use strict';

if (process.version.slice(1).split('.')[0] < 9 && process.version.slice(1).split('.')[1] < 5) {
  throw new Error('Node 9.5.0 ya da daha yüksek bir sürüm gerekiyor. Lütfen güncelleyin.');
}

module.exports = {
  // Ana dizin
  Base: require('./app/base'),
  Warcraft: require('./app/warcraft'),
  // Yapılar
  Data: require('./app/api/data'),
  Community: require('./app/api/community'),
  // Kullanışlılık
  Constants: require('./util/constants'),
  version: require('./package.json').version,

};