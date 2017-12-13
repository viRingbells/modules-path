# modules-path
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
