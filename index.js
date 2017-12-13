'use strict';

const assert  = require('assert');
const caller  = require('caller');
const debug   = require('debug')('modules-path');
const path    = require('path');
const modules = require('app-module-path');


const modulesPath = {
    /**
     * Add a path to the require paths.
     **/
    add(directoryPath = '') {
        assert('string' === typeof directoryPath,
            `Directory path must be a string, ${typeof directoryPath} given`);
        directoryPath = path.resolve(path.dirname(caller()), directoryPath);
        debug(`add [${directoryPath}]`);
        modules.addPath(directoryPath);
    }
};

module.exports = modulesPath;
