/**
 * Created by HUI on 2017/2/26.
 */
const multer = require('multer');
const md5 = require('md5');
const config = require('./config');
const storage = multer.diskStorage({
    //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
    //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
    destination: config.upload.path,
    //TODO:文件区分目录存放
    //给上传文件重命名
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        let fileName = new Date().getTime();
        cb(null, fileName + "." + fileFormat[fileFormat.length - 1]);
    }
});

//添加配置文件到muler对象。
var upload = multer({
    storage: storage,
    //其他设置请参考multer的limits
    //limits:{}
});
//导出对象
module.exports = upload;
