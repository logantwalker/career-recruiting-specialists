const path = require("path");
const router = require("express").Router();
const jobRoutes = require("./jobs");
const applicantRoutes = require("./applicants");

router.use("/jobs", jobRoutes);


router.use("/applicants", applicantRoutes);


router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;