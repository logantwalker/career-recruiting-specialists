const router = require("express").Router();
const applicantController = require("../../controllers/applicantController");

router.route("/")
    .get(applicantController.findAll)
    .post(applicantController.create);


router
    .route("/:id")
    .get(applicantController.findOne)
    .delete(applicantController.remove);

module.exports = router;