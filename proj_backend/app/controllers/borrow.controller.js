const Borrow = require('../models/Borrow');
const ApiError = require("../api-error");

class BorrowController {
    findById = async (req, res, next) => {
        try {
            
            const { user_id } = req.params;
            const borrow = await Borrow.find({ madocgia: user_id }).populate('masach', 'tensach');
    
            res.status(200).json(borrow);
        } catch (error) {
            next(new ApiError(401, 'Sai tên tài khoản hoặc mật khẩu'))
        }
    }

    getOneByIdBorrow = async (req, res, next) => {
        try {
            
            const { id_borrow } = req.params;
            const borrow = await Borrow.findById(id_borrow).populate('masach', 'tensach');
    
            res.status(200).json(borrow);
        } catch (error) {
            next(new ApiError(401, 'Sai tên tài khoản hoặc mật khẩu'))
        }
    }
    updateStatusBorrow = async (req, res, next) => {
        try {
            
            const {trangthai} = req.body;
            console.log(trangthai);
            const borrow = await Borrow.findByIdAndUpdate(req.body._id, req.body);
    
            res.status(200).json(borrow);
        } catch (error) {
            next(new ApiError(401, 'Sai tên tài khoản hoặc mật khẩu'))
        }
    }

    all = async (req, res, next) => {
        try {
            
            const borrow = await Borrow.find()
            .populate('masach', 'tensach')
            .populate('madocgia', ['holot', 'ten']);
    
            res.status(200).json(borrow);
        } catch (error) {
            next(new ApiError(401, 'Sai tên tài khoản hoặc mật khẩu'))
        }
    }

    getBorrow = async (req, res, next) => {
        try {
            
            const { masach } = req.params;
            const borrow = await Borrow.find({ madocgia: masach }).populate('masach', 'tensach');
    
            res.status(200).json(borrow);
        } catch (error) {
            next(new ApiError(401, 'Sai tên tài khoản hoặc mật khẩu'))
        }
    }

    create = async (req, res, next) => {
        try {
            
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
        } catch (error) {
            next(new ApiError(401, 'Đã xảy ra lỗi !'))
        }
    }
}

module.exports = new BorrowController();