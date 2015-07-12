var PixelData = require('../pixeldata.js');

module.exports = {
  id: "dummy",
  name: "Dummy Plugin",
  run: function(display) {
    setInterval(function() {
      display.setOverallColor('#edf8e9');
      display.show();
      setTimeout(function() {
        display.setOverallColor('#bae4b3')
        display.show();
      }, 1000);
      setTimeout(function() {
        display.setOverallColor('#74c476')
        display.show();
      }, 1000);
      setTimeout(function() {
        display.setOverallColor('#31a354')
        disyplay.show();
      }, 1000);
      setTimeout(function() {
        display.setOverallColor('#006d2c')
        display.show();
      }, 1000);
    }, 1000);
  }
}
