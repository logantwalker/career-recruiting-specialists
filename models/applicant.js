const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicantSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    job_applied: {
        type: String,
        required: true
    },
    education: {
        type: Object,
        required: true
    },
    experience: {
        type:Array,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Applicant', applicantSchema);