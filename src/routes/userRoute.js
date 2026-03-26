const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
router.get("/user/hello", userController.helloUser);
router.post("/user/login", userController.loginUser);
router.post("/user/register", userController.registerUser);
module.exports = router;
