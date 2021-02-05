const router = require("express").Router();
const  uuidController = require("../../controllers/uuidController");

router.route("/")
    .get(uuidController.findAll)
    .post(uuidController.create)

module.exports = router;