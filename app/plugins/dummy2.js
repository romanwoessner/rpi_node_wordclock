var PixelData = require('../pixeldata.js');

module.exports = {
  id: "dummy2",
  name: "Second Dummy Plugin",
  run: function(display) {

    setInterval(function() {
      display.setOverallColor('#00ff00');
      display.show();
      setTimeout(function() {
        display.setOverallColor('#00ff00');
        disyplay.show();
      }, 100)
    }, 100)
  }
}
