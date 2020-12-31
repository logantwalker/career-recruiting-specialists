const db = require('../models');

module.exports = {
    create: function (req, res) {
        db.Job.create(req.body)
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(422).json(err));
    },

    findAll: function (req, res) {
        db.Job.find(req.query)
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(422).json(err));
    }
}