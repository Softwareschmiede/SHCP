var EPC = require('epc');
var Device = require('./models/Device');

const controller = new EPC();

controller.on('new-device', (device) => {
    Device.create(device, (err, post) => {
        if (err) console.log(err);

        console.log('New device saved');
    });
});

controller.on('known-device', (device) => {
    console.log('Known device: ' + device);
});

module.exports = controller;