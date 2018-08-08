<h1 align="center">
  <br>
  <a href="https://discordapp.com"><img src="https://image.ibb.co/mXW9GK/qGA4dq.png" alt="Warcraft.JS" width="200"></a>
  <br />
</h1>
<p align="center">
    <a href="https://discord.gg/"><img src="https://discordapp.com/api/guilds/469879914313547776/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/warcraft.js"><img src="https://img.shields.io/npm/v/warcraft.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/warcraft.js"><img src="https://img.shields.io/npm/dt/warcraft.js.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.codacy.com/project/kendinikertenkelebek/warcraft.js/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kendinikertenkelebek/warcraft.js&amp;utm_campaign=Badge_Grade_Dashboard"><img src="https://api.codacy.com/project/badge/Grade/58c302f9bf2e4bc0be8915a4579423fa"/></a>
    <a href="https://github.com/kendinikertenkelebek/warcraft.js/issues"><img src="https://img.shields.io/github/issues/kendinikertenkelebek/warcraft.js.svg" alt="warcraft.js issues"></a>
    <a href="https://david-dm.org/kendinikertenkelebek/warcraft.js"><img src="https://david-dm.org/kendinikertenkelebek/warcraft.js/status.svg?maxAge=3600" alt="Dependencies" /></a>
  </p>
<p align="center">
  <a href="https://nodei.co/npm/warcraft.js/"><img src="https://nodei.co/npm/warcraft.js.png?downloads=true&downloadRank=true&stars=true" alt="npm installnfo" /></a>
</p>

# About

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

warcraft.js was developing for CyberEngine. And now, she is **open source**! warcraft.js connecting [Blizzard API][blizzardapi] and getting some in game data for you.

### Installation

_warcraft.js_ requires [Node.js](https://nodejs.org/dist/latest) latest version to run.

```sh
$ npm i warcraft.js -S
```

or

```sh
$ yarn add warcraft.js
```

### Usage

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

### Technology

_warcraft.js_ uses a number of open source projects to work properly:

- [Node.JS] - _warcraft.js_ uses this powerful programming language.
- [VScode] - We're highly recommending this awesome code editor.

And of course _warcraft.js_ itself is open source with a [public repository][repository] on _GitHub_.

### Plugins

_warcraft.js_ is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin          | README                                     |
| --------------- | ------------------------------------------ |
| @types/node     | [plugins/definitelytyped/README.md][pldt]  |
| Eslint          | [plugins/eslint/README.md][plge]           |
| Request         | [plugins/request/README.md][plgr]          |
| Request-Promise | [plugins/request-promise/README.md][plgrp] |

### Semantic Versioning

We're using [SemVer][semver] for this project.

### Development

Want to contribute? Great!

_warcraft.js_ uses eslint for stable developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

```sh
$ git clone <url>
$ cd <cloned_folder_name>
$ npm i
$ npm test
```

### Our Contributors

- Yankı Küçük - [Twitter][yk]

And you can see also all contributors [here][contributors].

[blizzardapi]: https://dev.battle.net/io-docs
[node.js]: http://nodejs.org
[vscode]: https://code.visualstudio.com/insiders/
[repository]: https://github.com/kendinikertenkelebek/warcraft.js
[pldt]: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md
[plge]: https://github.com/eslint/eslint/blob/master/README.md
[plgr]: https://github.com/request/request/blob/master/README.md
[plgrp]: https://github.com/request/request-promise/blob/master/README.md
[semver]: https://semver.org
[yk]: https://twitter.com/seviyorumstop
[contributors]: https://github.com/kendinikertenkelebek/Cyberflake/graphs/contributors

## License

Aphace 2.0
