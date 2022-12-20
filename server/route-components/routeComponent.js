const express = require("express");
const router = express.Router();
const accountController = require("../controller-components/accountControllerComponent");

router.post("/signUp", accountController.create);
router.get("/accounts/:accountId", accountController.findById);
// router.get("/", (req, res) => {
//   res.json({message: "Hello from server!"});
// });
router.post("/login", accountController.login);

module.exports = router;
