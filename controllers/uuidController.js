const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.UUID.find(req.query)
            .then(dbUUID => res.json(dbUUID))
            .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
        db.UUID.create(req.body)
            .then(dbUUID => res.json(dbUUID))
            .catch(err => res.status(422).json(err));
    }
}