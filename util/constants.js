const configs = require('../../config.json');

exports.DefaultOptions = {
  region: 'eu',
  realm: 'silvermoon',
  locale: 'en_GB',
  apiKey: configs.apiKey,
  access_token: configs.access_token
};

exports.Urls = {
  guild: '{hostname}/wow/guild/{realm}/{guild}?fields={field}&locale={locale}&apikey={apiKey}',
  item: '{hostname}/wow/item/{itemId}?locale={locale}&apikey={apiKey}',
  realm: '{hostname}/data/wow/realm/{slug}?namespace=dynamic-{region}&locale={locale}&access_token={access_token}',
  connectedRealm: '{hostname}/data/wow/connected-realm/{realmId}/mythic-leaderboard/?namespace=dynamic-{region}&locale={locale}&access_token={access_token}', // eslint-disable-line max-len
  dungeon: '{dungeonLink}&locale={locale}&access_token={access_token}'
};

exports.Jpgs = {
  charThumbnail: 'https://render-{continent}.worldofwarcraft.com/character/{api-url}.jpg',
  npcThumbnail: 'http://media.blizzard.com/wow/renders/npcs/zoom/creature{creatureId}.jpg',
  icons: 'http://media.blizzard.com/wow/icons/{size}/{icon_name}.jpg' // Size: 18-36-56
}