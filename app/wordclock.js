var Display = require('./display');
var PluginManager = require('./pluginmanager');

var display = new Display();
var pluginmanager = new PluginManager(display);

pluginmanager.loadPlugins();
console.log('List of available plugins:');
console.log(pluginmanager.listPlugins());

setTimeout(function() {
  console.log('activate plugin dummy');
  pluginmanager.activate('dummy')
}, 5000);
setTimeout(function() {
  console.log('activate plugin dummy2');
  pluginmanager.activate('dummy2')
}, 5000);
console.log('first demo done!');
