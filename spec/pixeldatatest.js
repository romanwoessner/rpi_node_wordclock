var _ = require('lodash');
var PixelData = require('../app/pixeldata.js');
var colorutil = require('../app/colorutil.js');

pixelData = new PixelData(15);

describe("PixelData manipulation is...", function() {
  it("setting a color at a specific position", function() {
    pixelData.setColorAtPosition(0, colorutil.hex2Int('#00ff00'));
    expect(pixelData.data[0]).toBe(65280);
    expect(pixelData.data[1]).toBe(0);
  });
  it("setting a color at an invalid position", function() {
    pixelData.setColorAtPosition(17, colorutil.hex2Int('#00ff00'));
    expect(pixelData.data[17]).toBe(undefined);
  });
  it("setting a hex color at a specific position", function() {
    pixelData.setHexColorAtPosition(2, '#00ff00');
    expect(pixelData.data[2]).toBe(65280);
    expect(pixelData.data[3]).toBe(0);
  });

  it("wiping it all", function() {
    pixelData.wipe();
    expect(_.uniq(pixelData.data).length).toBe(1);
  });
})
