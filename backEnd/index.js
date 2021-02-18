var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var router = require('./router')

var app = express()

app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router)

mongoose.connect('mongodb://localhost/jianshu2',{useNewUrlParser:true,useUnifiedTopology: true })
    .then(()=>{
        console.log('连接数据库成功！！！')
        app.listen(5000,function () {
            console.log('项目运行成功！请访问 http://127.0.0.1:5000')
        })
    })





