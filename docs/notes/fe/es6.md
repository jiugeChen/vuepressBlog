# ES6

## babel-ES6编译、转换 
1. 在线编译
2. 提前编译
   +  bable==browser.js

- 安装babel-cli
   安装 ```npm i -g babel-cli```
   [详情教程](https://www.babeljs.cn/docs/setup/#installation)
## 变量

#### 变量let与常量const
- ES5 var 问题
  - 可以重复声明
  - 无法限制修改
  - 没有块级作用域
- ES6 变量 let
  - 不能重复声明
  - 可以重新定义
  - 有块级作用域
- ES6 常量 const
  - 不能重复声明
  - 不可以重新定义
  - 有块级作用域
 

## 函数

#### 箭头函数
 - 函数
```javascript
 function 名字(){
    //  code
 }
```
 - 箭头函数
   - 如果只有一个参数，()可以省略
   - 如果只有一个return {}可以省略 
 ```javascript
()=>{ };

window.onload= ()=> alert('vb');

let show=function(){
    console.log("666");
};
let show=()=>{
    console.log("666");
};
let add = function(a,b){
    alert(a+b);
}
let add = (a,b)=>{
    alert(a+b);
}
add(1,6)
```
 #### 函数-参数 
  - 参数扩展/展开
   1. 收集参数
      - 收集剩余的参数
      - ...args必须是最后一个
  ```javascript
 function arg(a,b,...args) {
    console.log(a);
    console.log(b);
    console.log(...args);
}
arg(1,2,5,7,9,2,10); 
// 1
// 2
// 5 7 9 2 10
```

  2. 展开参数 
  ```javascript
  let array = [1,55,5]
function zhan(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
zhan(...array) 
//1
//55
//5
//////////////////////////////////

let arr1=[1,2,5];
let arr2=[10,22,52];
let arr3 = [...arr1,...arr2];
console.log(arr3);
// (6) [1, 2, 5, 10, 22, 52]
//////////////////////////////////
  function a(...args){
  fadd(...args)
  }
  function fadd(a,b) {
      console.log(a+b);
  }
  a(1,6)//7


  ```
    
  - 默认参数

```javascript
 function m(a,b=1,c=10) {
   console.log(a,b,c); 
  }
  m(1)  //1 1 10
  m(1,2)//1 2 10
  m(1,2,5)// 1 2 5
```
 #### 结构赋值
1. 左右两边结构必须一样;
2. 右边必须是个东西;
3. 声明和赋值不能分开(必须在一句话里说完);
```javascript
 let [aq,bq,cq]=[1,2,3];
  console.log(aq);//1
  console.log(bq);//2
  console.log(cq);//3
//////////////////////////////////
  let {w,z,y} = {w:12,z:66,y:15};
  console.log(w,z,y);// 12 66 15
```
## 数组
 1. map      映射    一个对一个
 ```javascript
 [12,58,60,60,99,8]
 ["不及格","不及格","及格","及格","及格","不及格"];

// 1.使arr中数字乘以2，输出结果
let arr = [12, 5, 8];
let result = arr.map(item => item * 2)
console.log(result);//(3) [24, 10, 16]
// ////////////////////
// 2.分数大于等于60的输出及格,小于60的输出不及格
let mark = [15, 88, 76, 60, 55];
let markResult = mark.map(item=> item >= 60 ? "及格" : "不及格"
)
console.log(markResult);//["不及格", "及格", "及格", "及格", "不及格"]
 ```
 2. reduce   汇总  一堆出来一个
```javascript
//  1.算个总数
  [10,20,30]  => 60;
//  2.算个平均数
  [10,20,30]  => 20;  

 let arr = [12, 541, 5461, 115, 656];
 let arrRes = arr.reduce((tmp, item, index) => tmp + item)
console.log(arrRes);//6785
//2.算个平均数
let avgRes = arr.reduce((tmp, item, index) => {
    if (index != arr.length - 1) {
        return tmp + item
    } else {
        return (tmp + item) / arr.length;
    }
})
console.log(avgRes);//1357

```
 3. filter   过滤器  保留一部分
 ```javascript
 // 1.算出能被3整除的数
let arr = [12, 541, 5461, 115, 656, 99, 30];
let result = arr.filter(item => item%3==0)
console.log(result); //(3) [12, 99, 30]
// 2.价格大于10000的数据
let arrz=[
    {title:'男鞋',price:650},
    {title:'女鞋',price:15000},
    {title:'男装',price:100},
    {title:'女装',price:10000}
]
let pres = arrz.filter(item=>item.price>=10000);
console.log(pres);// {title:'女鞋',price:15000}, {title:'女装',price:10000}
 ```
 4. fofEach  循环(迭代)
  ```javascript
  let arr = [12, 541, 5461, 115, 656, 99, 30];
       arr.forEach(item=> console.log(item))
  ```
## 字符串
   #### 字符串
   1. 多了两个新方法

  startsWidth 判断以什么开头

   ```javascript
        let str='https://www.4399.com';
    //   alert(str.startsWith('a'))  //判断是否以'a'开头，返回bool值
      if(str.startsWith('http://')){
          alert('地址')
      }else if(str.startsWith('https://')){
        alert('加密地址')
      }else{
        alert('什么地址')
      }
   ```

endsWidth  判断以什么结尾 

```javascript
 let str11 = 'xxx.txt';
      if(str11.endsWith('txt')){
          alert('文本文件')
      }else{
          alert('其他文件')
      }
```
   2. 字符串模板 
```javascript
let strr=`12`;
console.log(`新的字符串模板${strr}`);
```

## 面向对象

#### 面向对象
  1. es5 
  ```javascript
   function User(name,pass) {
       this.name=name;
       this.pass=pass;
     }
     user.prototype.eat=function(){
          alert(`${this.name}爱吃饭`)
    }
    var ul = new User('jiuge','55');
    ul.eat();
 ```
 2. es6 的面向对象
    1. class关键字,构造器和类分开了
    2. class里面直接加方法
 ```javascript
     class User{
        constructor(name,pass){
            this.name=name;
            this.pass=pass;
        }
        eat(){ alert(`${this.name}爱吃饭`);}
    }
       var ul = new User('jiuge','55');
    ul.eat();
 ```
#### 继承
  null
#### 应用 
## json 
  1. JSON对象
     - JSON.stringify //变成字符串
     - JSON.parse //转成json格式
  

## Promise
 #### Promise- 承诺
  - 异步: 操作直接没啥关系,同时进行多个操作，代码复杂。

  - 同步: 同时只能做一件事 代码简单。

  - 本质：等待异步操作结束

  #### Promise 用法
  #####  Promise.all  一个都不能错
  #####  Promise.race 只要有一个对
  1. 一个
  ```html
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="js/jquery-3.0.0.min.js"></script>
</head>

<body>
    <script>
        let p = new Promise(function (resolve, reject) {
            //异步代码
            //resolve 成功
            //reject 失败
            $.ajax({
                url: "data/tt.txt",
                dataType: "json",
                success: function (data) {
                    resolve(data)
                },
                error(err) {
                    reject(err)
                }

            });
        })
        p.then(function (data) {
            alert('成功' + data)
            // 调用成功
        }, function (err) {
            console.log(err);
            alert('失败')
            //失败了
        })
    </script>
</body>
</html>
  ```
 2. 多个
 ```html
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="js/jquery-3.0.0.min.js"></script>
</head>

<body>
    <script>
        function createPromise(url) {
            return new Promise(function (resolve, reject) {
                //异步代码
                //resolve 成功
                //reject 失败
                $.ajax({
                    url,
                    dataType: "json",
                    success: function (data) {
                        resolve(data)
                    },
                    error(err) {
                        reject(err)
                    }
                });
            })
        }
        Promise.all([
            createPromise('data/tt.txt'),
            createPromise('data/jj.txt')
        ]).then(function (arr) {
            // 全部成功
            alert('成功');
            let [arr1, arr2] = arr;
            console.log(arr);
            console.log(arr1);
            console.log(arr2);
        },
            function (err) {
                //失败一个或多个
                alert('失败');
                console.log(err);
            })
    </script>
    <script>
        Promise.all([
            $.ajax({ url: 'data/tt.txt', dataType: "json" }),
            $.ajax({ url: 'data/jj.txt', dataType: "json" })
        ])
    </script>
</body>

</html>
 ```
 3. jq中的promise
 ```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="js/jquery-3.0.0.min.js"></script>
</head>

<body>
    
    <script>
    Promise.all([
        $.ajax({url:'data/tt.txt',dataType: "json"}),
        $.ajax({url:'data/jj.txt',dataType: "json"})
    ]).then(function (arr) {
        let [arr1,arr2] = arr;
        alert('成功');
        console.log(arr);
        console.log(arr1);
           console.log(arr2);
    },function () {
        alert('失败')
    })
    </script>
</body>

</html>
```

## generator
### generator-生成器
 - 普通函数- 一路到底
 - generator函数- 中间可以停 走走停停
```javascript
      function *show() {
          alert('a');
          yield;
          alert('b')
      }
      show();
      let gentObj = show();
      gentObj.next(); //a
      gentObj.next();//b
     console.log(gentObj)
```
 - generator-yield是什么
    - 可以传参、可以返回
    - .....
    本质：无感觉处理异步操作

## 模块化
   - 模块-组件-元件
   - 模块：
      
```javascript
//  - 定义: model.js
     define(function (require,exports,module) {
    exports.a = 12;
     exports.b=5;
});  

//   - 调用:  xx.html
seajs.use(['xxxx.js','xxx.js',...],function(model1,model2,...){

})
```
      
   1. 民间的--sea.js 、require.js
   - CMD、AMD规范
   - 区别：

   html->js   use

   js->  js   require
      
    
   2. node.js模块化

        1. 没有define
        2. exports、require、module
        3. 引用自定义模块 1) 放到node_modules里,   2)前面加上./

     -  引入: let mod = require('./aaa.js')
     -  输出: exports.xx = xxx; module.exports={x,x,x,y}
   3. ES6模块化
       - import
       - export

     - 引入:impo mod from = './xx.js'
     - 输出:expor{x,x,x}
