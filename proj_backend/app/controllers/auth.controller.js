const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const ApiError = require("../api-error");
const Staff = require('../models/Staff');


class AuthController {
    login = asyncHandler(async (req, res, next) => {
        const {username, password} = req.body;
        const existUser = await User.find({username, password});
        // console.log(e);
        res.status(200).json(existUser);
    })
    adminLogin = asyncHandler(async (req, res, next) => {
        const {username, password} = req.body;
        const existAdmin = await Staff.find({username, password});
        // console.log(e);
        res.status(200).json(existAdmin);
    })
    register = asyncHandler(async (req, res, next) => {
        const user = await User.create(req.body);
        res.status(200).json(user);
    })

    loginStaff = asyncHandler(async (req, res, next) => {
        const {msnv, password} = req.body;
        const existStaff = await Staff.find({msnv, password});
        // console.log(e);
        res.status(200).json(existStaff);
    })
}

module.exports = new AuthController();