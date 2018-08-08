const api = require('../app');
const config = require('./config');
const warcraft = new api.Warcraft(config);

async function start() {
  const response = await warcraft.community.auction.get();
  console.log(response); // eslint-disable-line no-console
}

start();
