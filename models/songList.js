//引入模块
const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://admin:admin888@localhost:27017/music',{ 
    useNewUrlParser: true,
}, err =>{
    if(err){
        console.log('---------------------------------')
        console.log('数据库连接失败:',err)
        console.log('---------------------------------')
        return
    }
    console.log('数据库连接成功')
});


// 设置数据模型
var  model = new mongoose.Schema({
    id:{type:Number},
    image:{type:String},
    audio:{type:String},
    song:{type:String},
    singer:{type:String},
    isLike:{type:Boolean} 
})
var  comment = new mongoose.Schema({
    username:{type:String},
    comment:{type:String},
    id:{type:Number},
    time:{type:String},
    upNumber:{type:Number},
    whetherUp:{type:Boolean},
    usertxId:{type:Number},
    userbgId:{type:Number}
})

// 实例模型 
    // - 对应数据库中名称为users 的集和
var SongList = mongoose.model('songList',model,'songList')  
    // - 对应数据库中名称为songComment 的集和
var SongComment = mongoose.model('songComment',comment,'songComment') 


// 方法
    // 获取歌曲列表
    const songListModel = () => {
        return  SongList.find({})
    }
    //获取歌曲评论列表
    const songCommentModel = (id) => {
        return  SongComment.find({id})
    }
    
    // 插入歌曲评论
    const insertCommentModel = function(username,comment,id,time,
        upNumber,whetherUp,usertxId,userbgId){
        // 根据传进来的数据创建模型 
        var content = new SongComment({
            username:username,
            comment:comment,
            id:id,
            time:time,
            upNumber:upNumber,
            whetherUp:whetherUp,
            usertxId:usertxId,
            userbgId:userbgId
        })
         // 导入数据库
         return content.save()
         .then(ret =>{
            console.log('插入成功' + ret)
            return ret
        })
        .catch(err=>{
            console.log('插入出错' + err)
            return 'false'
        })
    }







module.exports = {  
    songListModel,
    songCommentModel,
    insertCommentModel
    //导出模型 - 会在controller的songList_c中使用
}