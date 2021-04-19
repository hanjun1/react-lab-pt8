const express = require("express");
const router = express.Router();
const blogCtrl = require("../../controllers/api/blogs");

router.get("/", blogCtrl.index);
router.post("/", blogCtrl.create);

module.exports = router;
