
const express = require("express");
const publisher = require("../controllers/publisher.controller");
const router = express.Router();

router.route("/")
    .get(publisher.findAll)
router.route("/:id")
    .get(publisher.findOne)
router.route("/")
    .post(publisher.create)

router.route("/:id")
    .put(publisher.update)
router.route("/:id")
    .delete(publisher.destroy)
module.exports = router;