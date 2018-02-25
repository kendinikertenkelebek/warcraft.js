<h1 align="center">
  <br>
  <a href="https://discordapp.com"><img src="http://i.hizliresim.com/qGA4dq.png" alt="Warcraft.JS" width="200"></a>
  <br />
</h1>
<h4 align="center">Prepare Yourself!</h4>
<p align="center">
  <a href="http://nodejs.org"><img src="https://img.shields.io/badge/Node.js-9.6.1-blue.svg" alt="Node JS"></a>
  <a href="http://npmjs.com"><img src="https://img.shields.io/badge/npm-not.yet-blue.svg" alt="npm"></a>
  <a><img src="https://david-dm.org/kendinikertenkelebek/warcraft.js.svg"></a>
  <a><img src="https://img.shields.io/badge/status-BETA-orenge.svg" alt="Version"</a>
  <a><img src="https://img.shields.io/badge/platform-osx%20%7C%20linux%20%7C%20win-red.svg" alt="platforms"</a>
</p>

### Installation

Warcraft.JS requires [Node.JS](https://nodejs.org/) v9.6.1 >= to run.

Install the dependencies and start using.

#### npm;
```sh
$ npm i warcraft.js -S
```

#### yarn;

```sh
$ yarn add warcraft.js
```

### Set Up
```js
const app = require('warcraft.js');
const warcraft = new app.Warcraft();
```

### Options

You must create a config.json file in your main folder.

```js
{
  "region": "YOUR_REGION",
  "realm": "YOUR_REALM",
  "locale": "en_GB", /* Default */
  "apiKey": "SUPER_SECRET_API_KEY",
  "access_token": "SUPER_SECRET_ACCESS_TOKEN"
}

/*
blank fields are filled automatically with the following settings;

{
  "region": "eu",
  "realm": "silvermoon",
  "locale": "en_GB",
  "apiKey": "",
  "access_token": ""
}

*/
```

### How to use?

```js
// Async version

const response = await warcraft.data.mythickeystone.leaderboard('dungeon-name', 'realm', 'region', 'period');
const response = await warcraft.data.mythickeystone.leaderboard('dungeon-name');

// Normal version

warcraft.community.guild.members('guild-name', 'region').then(response => {
    console.log(response);
});

 /* or */
 
warcraft.community.guild.multi('guild-name', 'members', 'news').then(response => {
    console.log(response);
}); // if you have a config file.
```

## How to get a API Key?

Please see the documentation at the [Blizzard Developer Portal](https://dev.battle.net) to obtain your own Blizzard API key.