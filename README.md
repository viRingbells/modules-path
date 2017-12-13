# modules-path

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]


Provides an easy way to add directories to the modules path so that all modules under can be required just as those in node_modules.

## install

```
$ npm install --save modules-path
```

## usage

```
require('modules-path').add();
require('some/local/module'); // equals require('./some/local/module');

require('modules-path').add('..');
require('some/local/module'); // equals require('../some/local/module');
```

Based on [app-module-path](https://www.npmjs.com/package/app-module-path) and [caller](https://www.npmjs.com/package/caller)


[npm-image]: https://img.shields.io/npm/v/modules-path.svg?style=flat-square
[npm-url]: https://npmjs.org/package/modules-path
[travis-image]: https://img.shields.io/travis/viRingbells/modules-path/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/laviRingbellsrkjs/modules-path
[coveralls-image]: https://img.shields.io/codecov/c/github/viRingbells/modules-path.svg?style=flat-square
[coveralls-url]: https://codecov.io/github/viRingbells/modules-path?branch=master
