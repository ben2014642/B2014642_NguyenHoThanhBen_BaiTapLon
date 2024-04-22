const { Schema, default: mongoose } = require('mongoose');

const User = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    holot: {
        type: String,
    },
    ten: {
        type: String,
    },
    ngaysinh: {
        type: String,
    },
    phai: {
        type: String,
    },
    diachi: {
        type: String,
    },
    dienthoai: {
        type: String,
    }
}, {collection: 'docgia'})

module.exports = mongoose.model('User', User);