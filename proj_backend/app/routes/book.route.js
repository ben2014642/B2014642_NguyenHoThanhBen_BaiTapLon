
const express = require("express");
const books = require("../controllers/book.controller");
const router = express.Router();

router.route("/")
    .get(books.findAll)
router.route("/create")
    .post(books.create)
router.route("/:masach")
    .get(books.findOne)
router.route("/edit")
    .put(books.edit)
router.route("/delete/:masach")
    .delete(books.destroy)
router.route("/sort")
    .post(books.sort)

module.exports = router;