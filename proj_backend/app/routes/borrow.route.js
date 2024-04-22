
const express = require("express");
const borrow = require("../controllers/borrow.controller");
const router = express.Router();

router.route("/admin")
    .get(borrow.all)
router.route("/admin/:id_borrow")
    .get(borrow.getOneByIdBorrow)
router.route("/admin/")
    .put(borrow.updateStatusBorrow)
router.route("/:user_id")
    .get(borrow.findById)

router.route("/")
    .post(borrow.create)

module.exports = router;