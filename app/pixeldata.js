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

  this.setColorAtPosition = function(pos, color) {
    this.data[pos] = color;
  }
  this.setHexColorAtPosition = function(pos, hexColor) {
    this.setColorAtPosition(pos, colorutil.hex2Int(hexColor));
  }
}

module.exports = PixelData;
