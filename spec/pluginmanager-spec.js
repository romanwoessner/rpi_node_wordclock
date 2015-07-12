var _ = require('lodash');
var PluginManager = require('../app/pluginmanager.js');
var pluginmanager = pluginmanager = new PluginManager();

describe("The Wordclock plugin manager is able to...", function() {

  it("load plugins and activate the defaultPlugin", function() {
    pluginmanager.loadPlugins();
    expect(pluginmanager.initialized).toBe(true);
    expect(pluginmanager.activePlugin.id).toBe('dummy');
  });
  it("list available plugin IDs", function() {
    var files = pluginmanager.listPlugins();
    expect(_.isArray(files)).toBe(true);
    expect(_.isEmpty(files)).not.toBe(true);
  });

  it("switch to another plugin", function() {
    pluginmanager.activate('time_default');
    expect(pluginmanager.activePlugin.id).toBe('time_default');
  });
});
