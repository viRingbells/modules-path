'use strict';

require('modules-path').add();
require('modules-path').addAppRoot();

describe('add current path', () => {
    it('should require(foo) directly', async () => {
        const foo = require('foo');
        foo.should.be.exactly("FOO");
    });
});

describe('add app root path', () => {
    it('should require(foo) directly', async () => {
        const foo = require('test/foo');
        foo.should.be.exactly("FOO");
    });
});
