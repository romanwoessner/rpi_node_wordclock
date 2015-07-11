var _ = require('lodash');
var PixelData = require('../app/pixeldata.js');
var colorutil = require('../app/colorutil.js');

pixelData = new PixelData(15);

describe("PixelData manipulation is...", function() {
  it("setting a color at a specific position", function() {
    pixelData.wipe();
    pixelData.setColorAtPosition(0, colorutil.hex2Int('#00ff00'));
    expect(pixelData.data[0]).toBe(65280);
    expect(pixelData.data[1]).toBe(0);
  });
  it("setting a color at an invalid position", function() {
    pixelData.wipe();
    pixelData.setColorAtPosition(17, colorutil.hex2Int('#00ff00'));
    expect(pixelData.data[17]).toBe(undefined);
  });
  it("setting a hex color at a specific position", function() {
    pixelData.wipe();
    pixelData.setHexColorAtPosition(2, '#00ff00');
    expect(pixelData.data[2]).toBe(65280);
    expect(pixelData.data[3]).toBe(0);
  });

  it("setting an overall color", function() {
    pixelData.wipe();
    pixelData.setOverallColor(colorutil.hex2Int('#00ff00'));
    expect(_.uniq(pixelData.data).length).toBe(1);
    expect(_.uniq(pixelData.data)[0]).toBe(65280);
  });

  it("setting a color range", function() {
    pixelData.wipe();
    pixelData.setColorRange([2, 3, 4, 6, 7], colorutil.hex2Int('#00ff00'));
    expect(pixelData.data[0]).toBe(0);
    expect(pixelData.data[1]).toBe(0);
    expect(pixelData.data[2]).toBe(65280);
    expect(pixelData.data[3]).toBe(65280);
    expect(pixelData.data[4]).toBe(65280);
    expect(pixelData.data[5]).toBe(0);
    expect(pixelData.data[6]).toBe(65280);
    expect(pixelData.data[7]).toBe(65280);
    expect(pixelData.data[8]).toBe(0);
    expect(pixelData.data[9]).toBe(0);
  });

  it("setting different colors to specific positions", function() {
    pixelData.wipe();
    pixelData.setColors([0, 2, 4, 6, 8, 10], [
      colorutil.hex2Int('#00ff00'),
      colorutil.hex2Int('#0000ff'),
      colorutil.hex2Int('#00ff00'),
      colorutil.hex2Int('#0000ff'),
      colorutil.hex2Int('#00ff00'),
      colorutil.hex2Int('#0000ff'),
    ]);
    expect(pixelData.data[0]).toBe(65280);
    expect(pixelData.data[1]).toBe(0);
    expect(pixelData.data[2]).toBe(255);
    expect(pixelData.data[3]).toBe(0);
    expect(pixelData.data[4]).toBe(65280);
    expect(pixelData.data[5]).toBe(0);
    expect(pixelData.data[6]).toBe(255);
    expect(pixelData.data[7]).toBe(0);
    expect(pixelData.data[8]).toBe(65280);
    expect(pixelData.data[9]).toBe(0);
    expect(pixelData.data[10]).toBe(255);
    expect(pixelData.data[11]).toBe(0);
  });

  it("setting different colors to specific positions", function() {
    pixelData.wipe();
    expect(pixelData.setColors([0, 2], [
      colorutil.hex2Int('#00ff00'),
    ])).toEqual(undefined);

  });

  it("wiping it all", function() {
    pixelData.wipe();
    expect(_.uniq(pixelData.data).length).toBe(1);
    expect(_.uniq(pixelData.data)[0]).toBe(0);
  });
})
