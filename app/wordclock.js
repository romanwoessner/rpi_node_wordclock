var Display = require('display.js')
var PluginManager = require('pluginmanager.js');

var display = new Display();
var pluginmanager = new PluginManager(display);

pluginmanager.loadPlugins();
console.log('List of available plugins:');
console.log(pluginmanager.listPlugins);

console.log('activate plugin dummy');
setTimeout(function() {
 pluginmanager.activate('dummy')
}, 5000);
console.log('activate plugin dummy2');
setTimeout(function() {
 pluginmanager.activate('dummy2')
}, 5000);

console.log('first demo done!');
