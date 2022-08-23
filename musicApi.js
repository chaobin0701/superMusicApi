//引入模块
const express = require('express')

//创建app对象
const app = express('express')
var bodyParser = require('body-parser')

// 使用中间件
app.use(bodyParser.json()) // 支持 json 格式
// 使用第三方插件 qs 来处理
app.use(bodyParser.urlencoded({extended : true}))


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    /// 允许跨域访问的域名：若有端口需写全（协议+域名+端口），若没有端口末尾不用加'/'
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

// 开启一个静态资源服务
app.use('/music',express.static('music'))

const songController = require(process.cwd() + '/controller/songList_c')

// 歌曲列表
app.get('/getSongList',songController.getSongList) //获取歌词列表
app.get('/getSongComment',songController.getSongComment) //获取歌词列表
app.post('/insertComment',songController.insertComment,//插入歌曲评论
) //获取歌词列表


app.listen(3000,()=>{
    console.log('http://localhost:3000')
})