const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");
require("dotenv").config();
const auth = require("../middleware/auth.js");

router.get("/", userController.test);
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/protected", auth, (req, res) => {
  res.send("protected");
});

module.exports = router;
