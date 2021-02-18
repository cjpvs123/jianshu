var mongoose = require('mongoose')

var ContentSchema = mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    src:{type:String}
})

var ContentModel = mongoose.model('Content',ContentSchema)



module.exports = ContentModel
