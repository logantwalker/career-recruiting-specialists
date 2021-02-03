const db = require('../models');

module.exports = {
    create: function (req, res) {
        db.Applicant.create(req.body)
            .then(dbApp => res.json(dbApp))
            .catch(err => res.status(422).json(err));
    },

    findAll: function (req, res) {
        db.Applicant.find(req.query)
            .then(dbApp => res.json(dbApp))
            .catch(err => res.status(422).json(err));
    },

    findOne: function (req, res) {
        db.Applicant.findById(req.params.id)
            .then(dbApp => res.json(dbApp))
            .catch(err => res.status(422).json(err))
    },
}