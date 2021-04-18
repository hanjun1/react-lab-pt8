const express = require("express");
const router = express.Router();
const postCtrl = require("../../controllers/api/posts");

router.post("/", postCtrl.create);

module.exports = router;
