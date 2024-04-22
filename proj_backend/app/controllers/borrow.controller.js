const Borrow = require('../models/Borrow');
const asyncHandler = require('express-async-handler');

class BorrowController {
    findById = asyncHandler(async (req, res, next) => {
        const { user_id } = req.params;
        const borrow = await Borrow.find({ madocgia: user_id }).populate('masach', 'tensach');

        res.status(200).json(borrow);
    })

    getOneByIdBorrow = asyncHandler(async (req, res, next) => {
        const { id_borrow } = req.params;
        const borrow = await Borrow.findById(id_borrow).populate('masach', 'tensach');

        res.status(200).json(borrow);
    })
    updateStatusBorrow = asyncHandler(async (req, res, next) => {
        const {trangthai} = req.body;
        console.log(trangthai);
        const borrow = await Borrow.findByIdAndUpdate(req.body._id, req.body);

        res.status(200).json(borrow);
    })

    all = asyncHandler(async (req, res, next) => {
        console.log('123');
        const borrow = await Borrow.find()
        .populate('masach', 'tensach')
        .populate('madocgia', ['holot', 'ten']);

        res.status(200).json(borrow);
    })

    getBorrow = asyncHandler(async (req, res, next) => {
        const { masach } = req.params;
        const borrow = await Borrow.find({ madocgia: masach }).populate('masach', 'tensach');

        res.status(200).json(borrow);
    })

    create = asyncHandler(async (req, res, next) => {
        const { madocgia, masach, ngaymuon, ngaytra, status } = req.body;
        const trangthai = status ? 'Đã mượn' : 'Đang chờ'
        console.log(madocgia);
        const borrow = await Borrow.create({
            madocgia,
            masach,
            ngaymuon,
            ngaytra,
            trangthai,
        })
        res.status(200).json({
            status: "success",
            data: {
                borrow,
                message: "Create Successfully !"
            }
        })
    })
}

module.exports = new BorrowController();