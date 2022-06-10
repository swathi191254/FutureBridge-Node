require('dotenv').config();
const mongoose = require('mongoose');

const connect = () => {
    return (mongoose.connect("mongodb+srv://swathi:swathi126@cluster0.btloyyr.mongodb.net/?retryWrites=true&w=majority"))

}
module.exports = connect;

