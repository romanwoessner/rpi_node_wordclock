var _ = require('lodash');
var fs = require('fs');

function PluginManager(display) {

  this.display = display

  this.PLUGIN_PATH = './app/plugins';
  this.initialized = false;

  this.plugins = {};
  this.defaultPlugin = 'dummy';
  this.activePlugin;


  this.loadPlugins = function() {
    var that = this;
    var files = fs.readdirSync(this.PLUGIN_PATH);

    _.forEach(files, function(n) {
      plugin = require('./plugins/' + n);
      if (!_.isEmpty(plugin.name) && !_.isEmpty(plugin.id)) {
        that.plugins[plugin.id] = plugin;
      };
    });

    this.activate(this.defaultPlugin);

    this.initialized = true;
  }

  this.listPlugins = function() {
    var pluginList = new Array();
    _.forEach(this.plugins, function(n, key) {
      pluginList.push(key);
    });
    return pluginList;
  };

  this.activate = function(id) {
    this.activePlugin = _.get(this.plugins, id);
    this.activePlugin.run(this.display);
  }

}

module.exports = PluginManager;
