var mongoose = require('mongoose')

var DetailSchema = mongoose.Schema({
    detail_id:{type:String},
    title:{type:String},
    content:{type:String}
})

var DetailModel = mongoose.model('Detail',DetailSchema)


module.exports = DetailModel
