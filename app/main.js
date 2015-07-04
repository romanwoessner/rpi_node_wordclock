var util = require('util');
var ws281x = require('rpi-ws281x-native');

var NUM_LEDS = 20;
pixelData = new Uint32Array(NUM_LEDS);

process.on('SIGINT', function() {
  ws281x.reset();
  process.nextTick(function() {
    process.exit(0);
  });
});

ws281x.init(NUM_LEDS);

setInterval(function function_name(argument) {
  for (var i = 0; i < NUM_LEDS; i++) {
    pixelData[i] = 0x00ff00;
  }
  ws281x.render(pixelData);
}, 1000);

console.log('Press <ctrl>+C to exit.');
