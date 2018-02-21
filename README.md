# warcraft.js
Battle.net / Node.js (WIP)

1- Setup

```js
const Blizzard = require('warcraft.js');
const warcraft = new Blizzard.Warcraft();

## usage;

const data = await warcraft.data.mythickeystone.leaderboard('realm-name');
