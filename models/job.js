const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    shift: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Job', jobSchema);