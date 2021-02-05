const path = require("path");
const router = require("express").Router();
const jobRoutes = require("./jobs");
const applicantRoutes = require("./applicants");
const uuidRoutes = require("./uuid");

router.use("/jobs", jobRoutes);


router.use("/applicants", applicantRoutes);

router.use("/uuid", uuidRoutes)


router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;