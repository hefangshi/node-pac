'use strict';

var NpmStrategy = require('./lib/npm/strategy');

var strategy = new NpmStrategy({
    mode: 'production',
    verbose: true
});

module.exports.strategy = strategy;
