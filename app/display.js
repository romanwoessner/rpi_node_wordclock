var ws281x = require('rpi-ws281x-native');
var PixelData = require('./pixeldata');

function Display() {
  this.pixeldata = new PixelData(240);
  ws281x.init(240);

  this.reset = function() {
    pixeldata.wipe();
    ws281x.reset();
  }

  this.show = function() {
    ws281x.render(this.pixeldata.data);
  }

  this.setOverallColor = function(color) {
    this.pixeldata.setOverallHexColor(color);
  }

  this.setColorAt1DCoordinate = function(position, color) {
    this.pixeldata.setHexColorAtPosition(position.color);
  }

  this.setColorsAt1DCoordinates = function(positions, colors) {
    this.pixeldata.setHexColors(positions, colors);
  }

  this.setSingleColorAt1DCoordinates = function(positions, color) {
    var colors = new Array();
    for (var i = 0; i < positions.length; i++) {
      colors[i] = color;
    }
    this.setColorsAt1DCoordinates(positions.colors);
  }

}

module.exports = Display;
