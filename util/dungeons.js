const dungeons = {
  dht: {
    id: ['198']
  },
  brh: {
    id: ['199']
  },
  eoa: {
    id: ['197']
  },
  hov: {
    id: ['200']
  },
  nl: {
    id: ['206']
  },
  votw: {
    id: ['207']
  },
  mos: {
    id: ['208']
  },
  arc: {
    id: ['209']
  },
  cos: {
    id: ['210']
  },
  lowr: {
    id: ['227']
  },
  uppr: {
    id: ['234']
  },
  coen: {
    id: ['233']
  },
  seat: {
    id: ['239']
  }
};

exports.getDungeon = function getDungeon(name) {
  const dungeon = dungeons[name] || null;

  return Object.assign({}, { id: dungeon.id[0] });
};