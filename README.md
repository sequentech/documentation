# Documentation

[![Build Status][build-badge]][build-link]
[![Chat][discord-badge]][discord-link]
[![License][license-badge]][license-link]

This is Sequent Tech documentation site. It's built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator. 

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

It's configured to automatically deploy on [https://sequent.github.io/documentation](https://sequent.github.io/documentation) through Github Actions and Github Pages on push in master branch.

[discord-badge]: https://img.shields.io/discord/1006401206782001273?style=plastic
[discord-link]: https://discord.gg/WfvSTmcdY8

[license-badge]: https://img.shields.io/github/license/sequentech/documentation?label=license
[license-link]: https://github.com/sequentech/documentation/blob/master/LICENSE

[build-badge]: https://github.com/sequentech/documentation/workflows/documentation/badge.svg?branch=master&event=push
[build-link]: https://github.com/sequentech/documentation/actions?query=workflow%3Adocumentation