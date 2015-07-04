var colorutil = require('../app/colorutil.js');

describe("ColorUtils are able to ...", function() {
  it("convert hex green to RgbInt", function() {
    expect(colorutil.hex2Int("#00ff00")).toBe(65280);
  });
  it("convert arbitrary hex to RgbInt", function() {
    expect(colorutil.hex2Int("#7B9C4F")).toBe(8100943);
  });
  it("converts hex black to RgbInt", function () {
    expect(colorutil.hex2Int("#000000")).toBe(0);
  })
  it("converts short hex black to RgbInt", function () {
    expect(colorutil.hex2Int("#000")).toBe(0);
  })
  it("converts empty hex to black RgbInt", function () {
    expect(colorutil.hex2Int("")).toBe(0);
  })
  it("converts weird hex black to RgbInt", function () {
    expect(colorutil.hex2Int("#asdf234r")).toBe(0);
  })
  it("converts invalid hex black to RgbInt", function () {
    expect(colorutil.hex2Int("#ffggff")).toBe(0);
  })
});
