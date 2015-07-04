var tinycolor = require("tinycolor2");

/**
 * Converts RGB colors to their representing integer value
 * @param  {Integer} r Value for red 0-255
 * @param  {Integer} g Value for green 0-255
 * @param  {Integer} b Value for blue 0-255
 * @return {Integer}   Color as integer
 */
rgb2Int = function(r, g, b) {
  return ((r & 0xff) << 16) + ((g & 0xff) << 8) + (b & 0xff);
}
module.exports.rgb2Int = rgb2Int;

hex2Int = function(hexString) {
  var rgbColor = tinycolor(hexString).toRgb();
  return rgb2Int(rgbColor.r, rgbColor.g, rgbColor.b);
}
module.exports.hex2Int = hex2Int;
