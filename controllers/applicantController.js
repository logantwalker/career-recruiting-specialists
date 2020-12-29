const db = require('../models');

module.exports = {
    create: function (req, res) {
        db.Applicant.create(req.body)
            .then(dbApp => res.json(dbApp))
            .catch(err => res.status(422).json(err));
    }
}