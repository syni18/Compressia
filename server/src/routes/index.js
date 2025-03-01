const express = require("express");

const router = express.Router();
const homeController = require("../controllers");

router.route("/").get(homeController.home);

router.route('/get-file').post(homeController.getFile);
router.route('/compress-file').post(homeController.compressFile);

module.exports = router;
