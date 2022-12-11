const express = require("express");
const router = express.Router();
const accountController = require("../controller-components/accountControllerComponent");

router.post("/", accountController.create);

module.exports = router;
