Libstack: Frontend
==================

Prerequisites
-------------

**Libstack: Frontend** assumes you're using the following development tools:

* An OS X environment
* [Homebrew](http://brew.sh/)
* [Atom](https://atom.io/)

Setup
-----

### Install Node Environment

```bash
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
