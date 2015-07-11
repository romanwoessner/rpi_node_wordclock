var colorutil = require('../app/colorutil.js');

/**
 * PixelData
 * @param {Integer} size
 */
function PixelData(size) {

  this.size = size;
  this.data = new Uint32Array(this.size);

  this.wipe = function() {
    this.data = new Uint32Array(this.size);
    return this;
  }

  this.setOverallColor = function(color) {
    for (var i = 0; i < this.data.length; i++) {
      this.data[i] = color;
    }
  }

  this.setOverallHexColor = function(hexColor) {
    this.setOverallColor(colorutil.hex2Int(hexColor));
  }

  this.setColorAtPosition = function(pos, color) {
    this.data[pos] = color;
  }
  this.setHexColorAtPosition = function(pos, hexColor) {
    this.setColorAtPosition(pos, colorutil.hex2Int(hexColor));
  }

  this.setColorRange = function (range, color) {
    for (var i = 0; i < range.length; i++) {
      this.data[range[i]] = color;
    }
  }

  this.setHexColorRange = function (range, hexColor) {
    this.setColorRange(range, colorutil.hex2Int(hexColor));
  }

  this.setColors = function (positions, colors) {
    if (positions.length != colors.length) {
      console.log("Invalid parameters for setColors()");
      return;
    }
    for (var i = 0; i < positions.length; i++) {
      this.data[positions[i]] = colors[i];
    }
  }


}

module.exports = PixelData;
