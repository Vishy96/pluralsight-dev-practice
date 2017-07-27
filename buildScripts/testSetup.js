//This file isn't transpiled, so must be written in ES5

//Require babel to transpile before our test run
require('babel-register')();

// Disable features of Webpack that Mocha doesn't understand
require.extensions['.css'] = function(){};
