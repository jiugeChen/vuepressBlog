#  node

## 原生node.js
 #### node.js用JavaScript写后台
   1. 性能高
   2. 跟前台配合方便。
   3. 适合前端人员入门

   `Node.js 适合小型项目、工具--中间层`

   #### 用node简单搭建一个服务
  ```JavaScript
  //引入http模块
const http = require('http');
// 引入文件模块
const fs =require('fs');
//创建一个服务端
let server =http.createServer(function (req,res) {
    // console.log("有人请求我");
    // req-request: 请求-输入   请求信息-哪个地址、时间、ip、方法...
    // res-response 响应-输出  
    // console.log(`客户端请求的地址是${req.url}请求的方法是${req.method}`); 
   
 fs.readFile(`public${req.url}`,(err,data)=>{
     if(err){
         fs.readFile('err/1.html',(err,data)=>{
             if(err){
                res.writeHeader(404);//给机器看 设置状态header
                res.write('404Page');// 给人看  body
             }else{
                res.writeHeader(404);//给机器看 设置状态
               res.write(data);
             }
     res.end();
         })
     }else{
         res.write(data);
         res.end();
     }
 })
   
}); 
//   监听- listen -等待客户端链接
//   端口- 数字 - 区别不同的服务
    //  1. 别人没用过的
    //  2. Linux--1024+的端口 
server.listen(999);
  ```
#### 

## node.js框架