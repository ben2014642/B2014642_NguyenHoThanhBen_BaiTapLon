const mongoose = require('mongoose');
const config = require("./");


async function connectDB() {
    try {
        await mongoose.connect(config.db.uri);
        console.log('Connect DB Successfully !');
    } catch (error) {
        console.log('Failed: ', error);
    }
}

module.exports = connectDB;