const express = require("express");
const router = express.Router();

const jobController = require("../controller/Controller");

router.post("", jobController.createJob);
router.get("", jobController.getJob);
router.patch("", jobController.editJob);
router.patch("", jobController.deleteJob);

module.exports = router;
