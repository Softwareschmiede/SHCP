var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
    name: String,
    floor: { type: mongoose.Schema.Types.ObjectId, ref: 'Floor' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Room', RoomSchema);