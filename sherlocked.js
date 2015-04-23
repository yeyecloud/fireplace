var sherlocked = require('sherlocked');

var PORT = require('./config').PORT;

var environments = [
    {
        browserName: 'firefox',
        platform: 'OS X 10.9'
    },
    {
        browserName: 'chrome',
        platform: 'OS X 10.9'
    }
];


var captures = [
    {
        name: 'Home Page on Mobile',
        capture: function(client) {
            return client.setViewportSize({width: 320, height: 960})
                .url('http://localhost:' + PORT)
                .waitForExist('.feed-home', 180000);
        }
    },
    {
        name: 'Home Page on Desktop',
        capture: function(client) {
            return client.setViewportSize({width: 1050, height: 2048})
                .url('http://localhost:' + PORT)
                .waitForExist('.feed-home', 180000);
        }
    },
    {
        name: 'Popular Page on Mobile',
        capture: function(client) {
            return client.setViewportSize({width: 320, height: 960})
                .url('http://localhost:' + PORT + '/popular')
                .waitForExist('.app-list', 180000);
        }
    },
    {
        name: 'Popular Page on Desktop',
        capture: function(client) {
            return client.setViewportSize({width: 1050, height: 2048})
                .url('http://localhost:' + PORT + '/popular')
                .waitForExist('.app-list', 180000);
        }
    },
    {
        name: 'App Detail on Mobile',
        capture: function(client) {
            // App detail page on mobile.
            return client.setViewportSize({width: 320, height: 960})
                .url('http://localhost:' + PORT + '/app/swanky-chocolate-9')
                .waitForExist('.mkt-tile', 180000);
        }
    },
    {
        name: 'App Detail on Desktop',
        capture: function(client) {
            // App detail page on desktop.
            return client.setViewportSize({width: 1050, height: 2048})
                .url('http://localhost:' + PORT + '/app/swanky-chocolate-9')
                .waitForExist('.mkt-tile', 180000);
        }
    }
];


sherlocked.run({
    environments: environments,
    captures: captures
});
