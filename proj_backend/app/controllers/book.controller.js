const Borrow = require('../models/Borrow');
const Book = require('../models/Book');
const ApiError = require("../api-error");


class BookController {
    findAll = async (req, res, next) => {
        try {
            const books = await Book.find().populate('manxb', 'tennxb');

            res.status(200).json(books);
        } catch (error) {
            next(new ApiError(400, 'Không thể lấy được dữ liệu !'))
        }
    }
    findOne = async (req, res, next) => {
        try {
            const { masach } = req.params;
            const book = await Book.findOne({ _id: masach }).populate('manxb', 'tennxb');
            res.status(200).json(book);

        } catch (error) {
            next(new ApiError(401, 'Không tìm thấy thông tin sách !'))
        }
    }
    sort = async (req, res, next) => {
        try {

            const { type } = req.body;
            const books = await Book.find().sort({ tensach: type });
            res.status(200).json(books);
        } catch (error) {
            next(new ApiError(400, 'Sort thất bại !'))
        }
    }
    edit = async (req, res, next) => {
        try {

            const books = await Book.findByIdAndUpdate(req.body._id, req.body);
            res.status(200).json(books);
        } catch (error) {
            next(new ApiError(400, 'Xảy ra lỗi !'))
        }
    }
    create = async (req, res, next) => {
        try {

            const book = await Book.create(req.body);
            res.status(200).json(book);
        } catch (error) {
            next(new ApiError(401, 'Tạo thất bại !'))
        }
    }

    destroy = async (req, res) => {
        try {
            const id = req.params.masach;
            const book = await Book.deleteOne({
                _id: id
            })
            res.status(200).json(book)

        } catch (error) {
            next(new ApiError(401, 'Xóa thất bại !'))
        }
    }

}

module.exports = new BookController();