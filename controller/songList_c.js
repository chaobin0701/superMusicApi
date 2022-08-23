// 导入模型
const {
    songListModel,
    songCommentModel,
    insertCommentModel
} = require(process.cwd() + '/models/songList')




// 定义处理方法

    // 查询歌曲列表
    const getSongList = async(req,res) =>{
        // 1.接受数据  -  暂无

        // 2.过滤 -- 暂无 

        // 3.获取数据
        let data = await songListModel()

        // 4.响应数据 
        res.send({
            meta:{
                state:200,
                msg:"查询成功"
            },
            data:data
        })
    }

    // 查询歌曲评论
    const getSongComment = async(req,res) =>{
        // 1.接受数据  -  暂无
        let getData = req.query
        // 2.过滤 -- 暂无 

        // 3.获取数据
        let data = await songCommentModel(getData.id)

        // 4.响应数据 
        res.send({
            meta:{
                state:200,
                msg:"查询成功"
            },
            data:data
        })
    }

    // 插入歌曲评论
    const insertComment = async(req,res) =>{
        // 1.接受数据
        let getData = req.body
        // 2.过滤 -- 暂无 

        // 3.获取数据
        let data = await insertCommentModel(
            getData.username,
            getData.comment,
            getData.id,
            getData.time,
            getData.upNumber,
            getData.whetherUp,
            getData.usertxId,
            getData.userbgId
        )

       
        // 4.响应数据 
        res.send({
            meta:{
                state:200,
                msg:"插入成功"
            },
            data:data
        })
    }

// 导出成员
module.exports = {
    getSongList, //查询歌曲列表
    getSongComment,//查询歌曲评论
    insertComment,//插入歌曲评论
}
