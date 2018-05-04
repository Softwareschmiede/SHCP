var mongoose = require('mongoose');

var DeviceSchema = new mongoose.Schema({
    deviceId: String,
    eep: String,
    attributes: mongoose.SchemaTypes.Mixed,
});

module.exports = mongoose.model('Device', DeviceSchema);