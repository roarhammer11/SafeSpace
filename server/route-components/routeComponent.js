const express = require("express");
const router = express.Router();
const accountController = require("../controller-components/accountControllerComponent");
const postController = require("../controller-components/postControllerComponent");

router.post("/signUp", accountController.create);
router.get("/accounts/:accountId", accountController.findById);
// router.get("/", (req, res) => {
//   res.json({message: "Hello from server!"});
// });
router.post("/createPost", postController.create);
// http://localhost:3001/api/posts/
router.get("/posts", postController.findAll);

module.exports = router;
