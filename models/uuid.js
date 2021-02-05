const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const uuidSchema = new Schema({
    value: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UUID', uuidSchema);