var mongoose = require('mongoose')
var md5 =require('blueimp-md5')

const userSchema = mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:String}
})


const UserModel = mongoose.model('User',userSchema)

UserModel.findOne({username:'admin'})
    .then(user=>{
        if(!user){
            UserModel.create({username:'admin',password:md5('admin')})
                .then(data=>{
                    console.log('初始化用户成功！账户 :admin,密码 :admin')
                })
        }
    })

module.exports = UserModel
