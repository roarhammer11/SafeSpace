const express = require("express");
const router = express.Router();
const accountController = require("../controller-components/accountControllerComponent");

router.post("/signUp", accountController.create);

router.get("/", (req, res) => {
  res.json({message: "Hello from server!"});
});

module.exports = router;
