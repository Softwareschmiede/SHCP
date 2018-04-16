var mongoose = require('mongoose');

var DeviceSchema = new mongoose.Schema({
    deviceId: String,
    eep: String,
});

module.exports = mongoose.model('Device', DeviceSchema);