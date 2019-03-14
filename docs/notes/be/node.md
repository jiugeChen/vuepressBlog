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
#### node操作数据库
   1. mysql模块
    - mysql.createConnection
    - mysql.createPool

   2. SQL语言
    - 增
    - 删
    - 改
    - 查

### 数据获取
#### Get 数据
```javascript

const url = require('url')
let obj = url.parse('https://www.baidu.com/s?word=%E6%94%B6%E7%BC%A9&tn=25017023_10_pg&lm=-1&ssl_s=1&ssl_c=ssl1_16975155e6c',true)

 console.log(obj.query);
//  结果
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com',
//   port: null,
//   hostname: 'www.baidu.com',
//   hash: null,
//   search:
//    '?word=%E6%94%B6%E7%BC%A9&tn=25017023_10_pg&lm=-1&ssl_s=1&ssl_c=ssl1_16975155e6c',
//   query:
//    { word: '收缩',
//      tn: '25017023_10_pg',
//      lm: '-1',
//      ssl_s: '1',
//      ssl_c: 'ssl1_16975155e6c' },
//   pathname: '/s',
//   path:
//    '/s?word=%E6%94%B6%E7%BC%A9&tn=25017023_10_pg&lm=-1&ssl_s=1&ssl_c=ssl1_16975155e6c',
//   href:
//    'https://www.baidu.com/s?word=%E6%94%B6%E7%BC%A9&tn=25017023_10_pg&lm=-1&ssl_s=1&ssl_c=ssl1_16975155e6c' }
```
#### Post 数据
```javascript```
```javascript
const queryString = require('querystring')
let str = "word=%E6%94%B6%E7%BC%A9&tn=25017023_10_pg&lm=-1&ssl_s=1&ssl_c=ssl1_16975155e6c"
let obj = queryString.parse(str)
console.log(obj);
// 结果
// { word: '收缩',
//   tn: '25017023_10_pg',
//   lm: '-1',
//   ssl_s: '1',
//   ssl_c: 'ssl1_16975155e6c' }
```
### setHeader    
- 设置response头——随便折腾
- writeHeader   设置并发送头
### 流-stream
  :::tip
  流——任何连续的数据都叫流：文件流、网络流、音频流...
好处：减少内存占用、增强系统性能(利用率高),
分3种：读取、写入、读写
  :::
1. 读取流 req、fs.createReadStream
2. 写入流 res、fs.createWriteStream
3. 读写流-压缩 zlib.createGzip
  1.压缩文件
  2.压缩网络数据——Content-Encoding
## Express

