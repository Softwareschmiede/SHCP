var EPC = require('epc');
var Device = require('./models/Device');

const controller = new EPC({ port: '/dev/ttyAMA0' });

controller.on('new-device', (device) => {
    console.log('New Device');

    Device.create(device, (err, post) => {
        if (err) console.log(err);

        console.log('New device saved');
    });
});

controller.on('known-device', (device) => {
    console.log('Known device: ' + device);
});

controller.on('esp-error', (err) => {
    console.log(err);
});

module.exports = controller;