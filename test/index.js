'use strict';

const modules = require('modules-path');

modules.add();


describe('add current path', () => {
    it('should require(foo) directly', async () => {
        const foo = require('foo');
        foo.should.be.exactly("FOO");
    });
});
