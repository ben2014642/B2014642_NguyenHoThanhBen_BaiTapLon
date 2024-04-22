const { Schema, default: mongoose } = require('mongoose');

const Book = new Schema({
    tensach: {
        type: String
    },
    dongia: {
        type: Number
    },
    soquyen: {
        type: Number
    },
    namxuatban: {
        type: String
    },
    manxb: {
        type: String,
        default: '123'
    },
    tacgia: {
        type: String
    },
    image: {
        type: String
    },
}, { collection: 'sach' })

module.exports = mongoose.model('Book', Book);