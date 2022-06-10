const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    date:{type:Number,required:true},

},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('movie',movieSchema)