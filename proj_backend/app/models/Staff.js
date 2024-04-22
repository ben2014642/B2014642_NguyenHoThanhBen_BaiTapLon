const { Schema, default: mongoose } = require('mongoose');

const Staff = new Schema({
    msnv: {
        type: String,
    },
    username: {
        type: String,
    },
    hotennv: {
        type: String,
    },
    password: {
        type: String,
    },
    chucvu: {
        type: String,
    },
    diachi: {
        type: String,
    },
    sodienthoai: {
        type: String,
    },
    
}, {collection: 'nhanvien'})

module.exports = mongoose.model('Staff', Staff);