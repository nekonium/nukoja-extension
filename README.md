# NukoMask Browser Extension
Forked from MetaMask. Compatible with nekonium nodes. Still under development.


The function of NukoMask is almost the same as MetaMask, but the following points are different.

1. NukoMask connects to Nekonium network.
2. The currency unit is NUKO.
3. Mascot characters are different.He is Nukoja.
4. Some Japanese expression is optimized for Nekonium.
5. The name space of the web3 instance is different. NukoMask inserts web3 for DApps under the window.nekonium object.

**There is no guarantee on the quality of software, so use it at your own risk. If you lose ETH or NUKO or Others, We can not compensate at all.**

## how to access injected web3
```bash
  const Web3 = require("@nekonium/web3");
  var web3=undefined;
  if(typeof window.nekonium !== 'undefined'){
      web3=new Web3(window.nekonium.web3.currentProvider);
  }
```
or
```bash
  const Web3 = require("web3");
  var web3=undefined;
  if(typeof window.nekonium !== 'undefined'){
      web3=new Web3(window.nekonium.web3.currentProvider);
  }
```
In case of using standard Web3, Nekonium's currency unit can not be used.

## Support
Visit our Discord channel #NukoMask https://discord.gg/C8mJg44

## Thanks

- Thanks to MetaMask team, for creaing excellent product.
- Thanks to @mike-theminer, first MetaMask port is successed. 
- Thanks to @���ׂ� on Discord, making Nukoja. 
- Thanks to @ROZ on Discord, hosting server.



# MetaMask Browser Extension
[![Build Status](https://circleci.com/gh/MetaMask/metamask-extension.svg?style=shield&circle-token=a1ddcf3cd38e29267f254c9c59d556d513e3a1fd)](https://circleci.com/gh/MetaMask/metamask-extension) [![Coverage Status](https://coveralls.io/repos/github/MetaMask/metamask-extension/badge.svg?branch=master)](https://coveralls.io/github/MetaMask/metamask-extension?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/MetaMask/metamask-extension.svg)](https://greenkeeper.io/) [![Stories in Ready](https://badge.waffle.io/MetaMask/metamask-extension.png?label=in%20progress&title=waffle.io)](https://waffle.io/MetaMask/metamask-extension)

## Support
If you're a user seeking support, [here is our support site](https://metamask.helpscoutdocs.com/).

## Introduction

[Mission Statement](./MISSION.md)

[Internal documentation](./docs/jsdocs)

## Developing Compatible Dapps

If you're a web dapp developer, we've got two types of guides for you:

### New Dapp Developers

- We recommend this [Learning Solidity](https://karl.tech/learning-solidity-part-1-deploy-a-contract/) tutorial series by Karl Floersch.
- We wrote a (slightly outdated now) gentle introduction on [Developing Dapps with Truffle and MetaMask](https://medium.com/metamask/developing-ethereum-dapps-with-truffle-and-metamask-aa8ad7e363ba).

### Current Dapp Developers

- If you have a Dapp, and you want to ensure compatibility, [here is our guide on building MetaMask-compatible Dapps](https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md)

## Building locally

 - Install [Node.js](https://nodejs.org/en/) version 6.3.1 or later.
 - Install local dependencies with `npm install`.
 - Install gulp globally with `npm install -g gulp-cli`.
 - Build the project to the `./dist/` folder with `gulp build`.
 - Optionally, to rebuild on file changes, run `gulp dev`.
 - To package .zip files for distribution, run `gulp zip`, or run the full build & zip with `gulp dist`.

 Uncompressed builds can be found in `/dist`, compressed builds can be found in `/builds` once they're built.

### Running Tests

Requires `mocha` installed. Run `npm install -g mocha`.

Then just run `npm test`.

You can also test with a continuously watching process, via `npm run watch`.

You can run the linter by itself with `gulp lint`.

## Architecture

[![Architecture Diagram](./docs/architecture.png)][1]

## Development

```bash
npm install
npm start
```

## Build for Publishing

```bash
npm run dist
```

#### Writing Browser Tests

To write tests that will be run in the browser using QUnit, add your test files to `test/integration/lib`.

## Other Docs

- [How to add custom build to Chrome](./docs/add-to-chrome.md)
- [How to add custom build to Firefox](./docs/add-to-firefox.md)
- [How to develop a live-reloading UI](./docs/ui-dev-mode.md)
- [How to add a new translation to MetaMask](./docs/translating-guide.md)
- [Publishing Guide](./docs/publishing.md)
- [The MetaMask Team](./docs/team.md)
- [How to develop an in-browser mocked UI](./docs/ui-mock-mode.md)
- [How to live reload on local dependency changes](./docs/developing-on-deps.md)
- [How to add new networks to the Provider Menu](./docs/adding-new-networks.md)
- [How to manage notices that appear when the app starts up](./docs/notices.md)
- [How to port MetaMask to a new platform](./docs/porting_to_new_environment.md)
- [How to generate a visualization of this repository's development](./docs/development-visualization.md)

[1]: http://www.nomnoml.com/#view/%5B%3Cactor%3Euser%5D%0A%0A%5Bnukomask-ui%7C%0A%20%20%20%5Btools%7C%0A%20%20%20%20%20react%0A%20%20%20%20%20redux%0A%20%20%20%20%20thunk%0A%20%20%20%20%20ethUtils%0A%20%20%20%20%20jazzicon%0A%20%20%20%5D%0A%20%20%20%5Bcomponents%7C%0A%20%20%20%20%20app%0A%20%20%20%20%20account-detail%0A%20%20%20%20%20accounts%0A%20%20%20%20%20locked-screen%0A%20%20%20%20%20restore-vault%0A%20%20%20%20%20identicon%0A%20%20%20%20%20config%0A%20%20%20%20%20info%0A%20%20%20%5D%0A%20%20%20%5Breducers%7C%0A%20%20%20%20%20app%0A%20%20%20%20%20nukomask%0A%20%20%20%20%20identities%0A%20%20%20%5D%0A%20%20%20%5Bactions%7C%0A%20%20%20%20%20%5BaccountManager%5D%0A%20%20%20%5D%0A%20%20%20%5Bcomponents%5D%3A-%3E%5Bactions%5D%0A%20%20%20%5Bactions%5D%3A-%3E%5Breducers%5D%0A%20%20%20%5Breducers%5D%3A-%3E%5Bcomponents%5D%0A%5D%0A%0A%5Bweb%20dapp%7C%0A%20%20%5Bui%20code%5D%0A%20%20%5Bweb3%5D%0A%20%20%5Bnukomask-inpage%5D%0A%20%20%0A%20%20%5B%3Cactor%3Eui%20developer%5D%0A%20%20%5Bui%20developer%5D-%3E%5Bui%20code%5D%0A%20%20%5Bui%20code%5D%3C-%3E%5Bweb3%5D%0A%20%20%5Bweb3%5D%3C-%3E%5Bnukomask-inpage%5D%0A%5D%0A%0A%5Bnukomask-background%7C%0A%20%20%5Bprovider-engine%5D%0A%20%20%5Bhooked%20wallet%20subprovider%5D%0A%20%20%5Bid%20store%5D%0A%20%20%0A%20%20%5Bprovider-engine%5D%3C-%3E%5Bhooked%20wallet%20subprovider%5D%0A%20%20%5Bhooked%20wallet%20subprovider%5D%3C-%3E%5Bid%20store%5D%0A%20%20%5Bconfig%20manager%7C%0A%20%20%20%20%5Brpc%20configuration%5D%0A%20%20%20%20%5Bencrypted%20keys%5D%0A%20%20%20%20%5Bwallet%20nicknames%5D%0A%20%20%5D%0A%20%20%0A%20%20%5Bprovider-engine%5D%3C-%5Bconfig%20manager%5D%0A%20%20%5Bid%20store%5D%3C-%3E%5Bconfig%20manager%5D%0A%5D%0A%0A%5Buser%5D%3C-%3E%5Bnukomask-ui%5D%0A%0A%5Buser%5D%3C%3A--%3A%3E%5Bweb%20dapp%5D%0A%0A%5Bnukomask-contentscript%7C%0A%20%20%5Bplugin%20restart%20detector%5D%0A%20%20%5Brpc%20passthrough%5D%0A%5D%0A%0A%5Brpc%20%7C%0A%20%20%5Bnekonium%20blockchain%20%7C%0A%20%20%20%20%5Bcontracts%5D%0A%20%20%20%20%5Baccounts%5D%0A%20%20%5D%0A%5D%0A%0A%5Bweb%20dapp%5D%3C%3A--%3A%3E%5Bnukomask-contentscript%5D%0A%5Bnukomask-contentscript%5D%3C-%3E%5Bnukomask-background%5D%0A%5Bnukomask-background%5D%3C-%3E%5Bnukomask-ui%5D%0A%5Bnukomask-background%5D%3C-%3E%5Brpc%5D%0A
