Frontier
========

**Frontier** is a front-tier frontend libstack. No pun intended.

It's the sum-up of the following cutting-edge frontend art:

* [Babel](https://github.com/babel/babel)
* [React](https://github.com/facebook/react)
* [Webpack](https://github.com/webpack/webpack)
* [ESLint](https://github.com/eslint/eslint)
* [JavaScript Semi-Standard Style](https://github.com/Flet/semistandard)

Recommended Environment
-----------------------

The setup instructions below assume you're using the following tools for development:

* OS X
* [Homebrew](http://brew.sh/)
* [Atom](https://atom.io/)

They're not requirements, and you can still use the libstack in your most comfortable environment with some slight modifications to the setup process.

Setup
-----

### Install Node Environment

```bash
# Replace [LATEST_VERSION] with the latest version number
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/[LATEST_VERSION]/install.sh | bash
$ nvm install iojs
$ nvm alias default iojs
```

### Install/Update System Packages

```bash
$ brew install git git-flow-avh
```

### Install Atom Packages

```bash
$ apm install editorconfig linter linter-js-standard
```

### Init the Project

```bash
$ npm run init
```
