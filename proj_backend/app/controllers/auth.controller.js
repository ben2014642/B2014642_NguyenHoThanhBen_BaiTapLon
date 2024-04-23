const User = require('../models/User');
const ApiError = require("../api-error");
const Staff = require('../models/Staff');


class AuthController {
    login = async (req, res, next) => {
        const { username, password } = req.body;
        try {
            const existUser = await User.find({ username, password });
            res.status(200).json(existUser);

        } catch (error) {
            next(new ApiError(401, 'Sai tên tài khoản hoặc mật khẩu'))
        }
        // console.log(e);
    }
    // adminLogin = async (req, res, next) => {
    //     const { username, password } = req.body;
    //     const existAdmin = await Staff.find({ username, password });
    //     // console.log(e);
    //     res.status(200).json(existAdmin);
    // }
    register = async (req, res, next) => {
        try {
            const user = await User.create(req.body);
            res.status(200).json(user);
        } catch (error) {
            next(new ApiError(401, 'Đăng ký không thành công !'))
        }
    }

    loginStaff = async (req, res, next) => {
        const { msnv, password } = req.body;
        console.log(msnv);
        const existStaff = await Staff.find({ 'msnv': msnv, 'password': password });
        // console.log(e);
        if (existStaff.length > 0) {
            res.status(200).json(existStaff);

        } else {
            next(new ApiError(401, 'Sai tên tài khoản hoặc mật khẩu !'));
        }
    }
}

module.exports = new AuthController();