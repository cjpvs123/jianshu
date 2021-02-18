var express = require('express')

var UserModel = require('./model/userModel')
var ContentModel = require('./model/contentModel')
var DetailModel = require('./model/detailModel')

var md5 =require('blueimp-md5')

const router = express.Router()


// 全部用户
router.get('/all',function (req,res) {
    UserModel.find()
        .then(user=>{
            res.send({status:0,data:user})
        })
})

//查询用户
router.post('/login',function (req,res) {
    const {username,password} = req.body
    UserModel.findOne({username:username,password:md5(password)})
        .then(user=>{
            if(user){
                res.send({status:0,data:user})
            }
            else {
                res.send({status:1,msg:'用户名或者密码不正确，请重新输入!'})
            }
        })
        .catch(err=>{
            console.log('登录异常',err)
            res.send({status:1,msg:'登录异常,请稍后再尝试！'})
        })
})

//增加用户
router.post('/register',function (req,res) {
    const {username, password} = req.body
    UserModel.findOne({username: username})
        .then(user => {
            if (user) {
                res.send({status: 1, msg: '此用户已存在'})
            }
            else {
                UserModel.create({username: username, password: md5(password)})
                    .then(user => {
                        res.send({status: 0, data: user})
                    })
            }
        })
        .catch(err=>{
            console.log('注册异常',err)
            res.send({status:1,msg:'注册用户异常，请重新尝试！'})
        })
})

//删除用户
router.post('/delete',function (req,res) {
    const {userId} =req.body
    UserModel.remove({_id:userId})
        .then(user=>{
            res.send({status:0,msg:'删除成功！'})
        })
        .catch((err)=>{
            ser.send({status:1,msg:'删除失败！'})
        })
})

//修改用户
router.post('/update',function (req,res) {
    const {username,password} =req.body
    UserModel.findOne({username})
        .then(user=>{
            if(!user){
                console.log('用户不存在！')
                res.send({status:1,msg:'该用户不存在'})
            }
            else {
                UserModel.update({username:username,password:md5(password)})
                    .then(user=>{
                        res.send({status:0,data:user})
                    })
            }
        })
        .catch(err=>{
            console.log('修改用户失败！',err)
            res.send({status:1,msg:'修改用户失败，请重新尝试！'})
        })
})

router.get('/content/find',function (req,res) {
    ContentModel.find()
        .then(data=>{
            res.send({status:0,data:{list:data}})
        })
        .catch(err=>{
            console.log('查找异常，请稍后重试！',err)
            res.send({status:1,msg:'查询异常！'})
        })
})


router.post('/content/add',function (req,res) {
    const {title,desc,src} = req.body
    ContentModel.create({title, desc, src})
        .then(data=>{
            res.send({status:0,data:data})
        })
        .catch(err=>{
            console.log('创建内容失败！请重新尝试')
            res.send({status:1,msg:'创建内容失败！请重新尝试'})
        })
})


router.post('/detail/add' ,function (req,res) {
    const {detail_id,title,content} = req.body
    DetailModel.create({detail_id,title,content})
        .then(data=>{
            res.send({status:0,data:data})
        })
        .catch(err=>{
            console.log('添加详情失败！请稍后重试',err)
            res.send({status:1,msg:'添加详情失败！请稍后重试'})
        })
})
router.get('/detail/findAll',function (req,res) {
    DetailModel.find()
        .then(data=>{
            res.send({status:0,data:data})
        })
        .catch(err=>{
            console.log('查询失败！请稍后重试',err)
            res.send({status:1,msg:'查询失败！请稍后重试'})
        })
})

router.get('/detail/find',function (req,res) {
    const {detail_id} = req.query
    DetailModel.findOne({detail_id})
        .then(data=>{
            res.send({status:0,data:data})
        })
        .catch(err=>{
            console.log('查询失败！请稍后重试')
            res.send({status:1,msg:'查询失败！请稍后重试'})
        })
})

router.post('/content/search',function (req,res) {
    const {searchContent} =req.body
    ContentModel.find({title:new RegExp(`^.*${searchContent}.*$`)})
        .then(data=>{
            res.send({
                status:0,
                data:{list:data}
            })
        })
        .catch(err=>{
            console.log('查询失败！',err)
            res.send({
                status:1,
                msg:'查询失败!'
            })
        })
})


require('./upload-img')(router)

module.exports = router
