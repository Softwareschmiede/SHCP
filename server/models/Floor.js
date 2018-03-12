var mongoose = require('mongoose');

var FloorSchema = new mongoose.Schema({
    name: String,
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Floor', FloorSchema);