const express = require("express");

const router = express.Router();

const { createUser, loginUser } = require("../controllers/user");

router.post("/user", createUser);
router.post("/user", loginUser);

module.exports = router;
