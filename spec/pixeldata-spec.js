var _ = require('lodash');
var PixelData = require('../app/pixeldata.js');
var colorutil = require('../app/colorutil.js');
var pixeldata = new PixelData(15);

describe("PixelData manipulation is...", function() {
  beforeEach(function() {
    pixeldata.wipe();
  })
  it("setting a color at a specific position", function() {
    pixeldata.setColorAtPosition(0, colorutil.hex2Int('#00ff00'));
    expect(pixeldata.data[0]).toBe(65280);
    expect(pixeldata.data[1]).toBe(0);
  });
  it("setting a color at an invalid position", function() {
    pixeldata.setColorAtPosition(17, colorutil.hex2Int('#00ff00'));
    expect(pixeldata.data[17]).toBe(undefined);
  });
  it("setting a hex color at a specific position", function() {
    pixeldata.setHexColorAtPosition(2, '#00ff00');
    expect(pixeldata.data[2]).toBe(65280);
    expect(pixeldata.data[3]).toBe(0);
  });

  it("setting an overall color", function() {
    pixeldata.setOverallColor(colorutil.hex2Int('#00ff00'));
    expect(_.uniq(pixeldata.data).length).toBe(1);
    expect(_.uniq(pixeldata.data)[0]).toBe(65280);
  });

  it("setting a color range", function() {
    pixeldata.setColorRange([2, 3, 4, 6, 7], colorutil.hex2Int('#00ff00'));
    expect(pixeldata.data[0]).toBe(0);
    expect(pixeldata.data[1]).toBe(0);
    expect(pixeldata.data[2]).toBe(65280);
    expect(pixeldata.data[3]).toBe(65280);
    expect(pixeldata.data[4]).toBe(65280);
    expect(pixeldata.data[5]).toBe(0);
    expect(pixeldata.data[6]).toBe(65280);
    expect(pixeldata.data[7]).toBe(65280);
    expect(pixeldata.data[8]).toBe(0);
    expect(pixeldata.data[9]).toBe(0);
  });

  it("setting different colors to specific positions", function() {
    pixeldata.setColors([0, 2, 4, 6, 8, 10], [
      colorutil.hex2Int('#00ff00'),
      colorutil.hex2Int('#0000ff'),
      colorutil.hex2Int('#00ff00'),
      colorutil.hex2Int('#0000ff'),
      colorutil.hex2Int('#00ff00'),
      colorutil.hex2Int('#0000ff'),
    ]);
    expect(pixeldata.data[0]).toBe(65280);
    expect(pixeldata.data[1]).toBe(0);
    expect(pixeldata.data[2]).toBe(255);
    expect(pixeldata.data[3]).toBe(0);
    expect(pixeldata.data[4]).toBe(65280);
    expect(pixeldata.data[5]).toBe(0);
    expect(pixeldata.data[6]).toBe(255);
    expect(pixeldata.data[7]).toBe(0);
    expect(pixeldata.data[8]).toBe(65280);
    expect(pixeldata.data[9]).toBe(0);
    expect(pixeldata.data[10]).toBe(255);
    expect(pixeldata.data[11]).toBe(0);
  });

  it("setting different colors to specific positions", function() {
    expect(pixeldata.setColors([0, 2], [
      colorutil.hex2Int('#00ff00'),
    ])).toEqual(undefined);

  });

  it("wiping it all", function() {
    expect(_.uniq(pixeldata.data).length).toBe(1);
    expect(_.uniq(pixeldata.data)[0]).toBe(0);
  });
})
