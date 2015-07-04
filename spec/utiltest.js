var utils = require('../app/util.js');

describe("The sum of...", function() {
  it("one and two is three.", function() {
    expect(utils.sum(1,2)).toBe(3);
    // expect(1+2).toBe(3);
  })
})
