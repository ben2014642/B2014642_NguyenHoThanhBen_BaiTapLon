const { Schema, default: mongoose } = require('mongoose');

const Publisher = new Schema({
    manxb: {
        type: String,
        unique: true,
        index: true, 
    },
    tennxb: {
        type: String
    },
    diachi: {
        type: String
    }
}, { collection: 'nhaxuatban' })

module.exports = mongoose.model('Publisher', Publisher);