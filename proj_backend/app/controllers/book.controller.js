const Borrow = require('../models/Borrow');
const Book = require('../models/Book');
const asyncHandler = require('express-async-handler');
const ApiError = require("../api-error");


class BookController {
    findAll = asyncHandler(async (req, res, next) => {
        const books = await Book.find();

        res.status(200).json(books);
    })
    findOne = asyncHandler(async (req, res, next) => {
        const { masach } = req.params;
        const book = await Book.findOne({ _id: masach });
        console.log('123');
        res.status(200).json(book);
    })
    sort = asyncHandler(async (req, res, next) => {
        const { type } = req.body;
        console.log(type);
        const books = await Book.find().sort({ tensach: type });
        res.status(200).json(books);
    })
    edit = asyncHandler(async (req, res, next) => {
        const books = await Book.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json(books);
    })
    create = asyncHandler(async (req, res, next) => {
        const book = await Book.create(req.body);
        res.status(200).json(book);
    })

    destroy = asyncHandler(async (req, res) => {
        const id = req.params.masach;
        const book = await Book.deleteOne({
            _id: id
        })
        res.status(200).json(book)
    })

}

module.exports = new BookController();