var ws281x = require('rpi-ws281x-native');
var PixelData = require('pixeldata.js');

function Display() {
  var pixeldata = new PixelData();

  this.reset() {
    pixeldata.wipe();
    ws281x.reset();
  }

  this.show() {
    ws281x.render(pixeldata);
  }

  this.setOverallColor(color) {
    this.pixeldata.setOverallHexColor(color);
  }

  this.setColorAt1DCoordinate(position, color) {
    this.pixeldata.setHexColorAtPosition(position.color);
  }

  this.setColorsAt1DCoordinates(positions, colors) {
    this.pixeldata.setHexColors(positions, colors);
  }

  this.setSingleColorAt1DCoordinates (positions, color) {
    var colors = new Array();
    for (var i = 0; i < positions.length; i++) {
      colors[i] = color;
    }
    this.setColorsAt1DCoordinates(positions.colors);
  }

}

module.exports = Display;
