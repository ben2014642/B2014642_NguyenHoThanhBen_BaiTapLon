const { Schema, default: mongoose } = require('mongoose');

const Borrow = new Schema({
    madocgia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    masach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    ngaymuon: {
        type: Date,
    },
    ngaytra: {
        type: Date,
    },
    trangthai: {
        type: String,
    }
}, {collection: 'theodoimuonsach'})

module.exports = mongoose.model('Borrow', Borrow);