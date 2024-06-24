const express = require("express");
const userController = require("../controllers.js/userController");

const router = express.Router();

router.get("/user", userController.getUsers);
router.get("/user/:userId", userController.getUser);
router.post("/user", userController.createUser);
router.put("/user/:userId", userController.updateUser);
router.patch("/user/:userId", userController.updateUser);
router.delete("/user/:userId", userController.deleteUser);

module.exports = router;
