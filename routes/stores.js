const express = require("express");
const {getStores} = require("../Controllers/stores");

const router = express.Router();

router.route("/").get(getStores);

module.exports = router;