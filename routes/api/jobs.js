const router = require("express").Router();
const jobController = require("../../controllers/jobController");

router.route("/")
    .get(jobController.findAll)
    .post(jobController.create);
    


router
    .route("/:id")
    .get(jobController.findOne)
    .put(jobController.update)
    .delete(jobController.remove);

module.exports = router;