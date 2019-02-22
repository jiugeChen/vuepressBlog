# JavaScript

## js三大系列
 ### offset系列:
::: tip 
(父级元素`margin`+父级元素`padding`+父级元素`border`+自己的`margin`)
:::
- `offsetLeft`:元素距离左边位置的值
- `offsetTop`:元素距离上面位置的值
- `offsetWidth`:获取元素的宽度(有边框)
- `offsetHeight`:获取元素的高度(有边框)
 ### scroll系列:卷曲
- `scrollLeft`:元素向左卷曲出去的距离
- `scrollTop`:元素向上卷曲出去的距离
- `scrollWidth`:元素中内容的实际的宽度,如果没有内容,或者内容很少,元素的宽度
- `scrollHeight`:元素中内容的实际的高度,如果没有内容,或者内容很少,元素的高度
 ### sclient系列:
- `clientWidth`:可视区域的宽度,没有边框
- `clientHeight`:可视区域的高度,没有边框
- `clientLeft`:左边框的宽度
- `clientTop`:上边框的宽度
- `clientX`:可视区域的横坐标
- `clientY`:可视区域的纵坐标
## 数组
### 数组遍历
1. 普通for循环，经常用的数组遍历
```javascript
var arr = [1, 3, 45, 7, 'dd'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// 打印结果 1 3 45 7 dd
```
2. 优化版for循环:使用变量，将长度缓存起来，避免重复获取长度，数组很大时优化效果明显

```javascript
var arr = [1, 3, 45, 7, 'dd'];
for(var j= 0, len = arr.length; j<len; j++){
            console.log(arr[j]);
        }
// 打印结果 1 3 45 7 dd
```
 3. forEach，ES5推出的,数组自带的循环，主要功能是遍历数组。
 :::tip
 forEach这种方法也有一个小缺陷：你不能使用break语句中断循环，也不能使用return语句返回到外层函数。
 :::
 ```javascript
var arr = [1, 3, 45, 7, 'dd'];
arr.forEach(function(value,i){
    console.log(i+'--'+value);
})
// 打印结果
// 0--1
// 1--3 
// 2--45 
// 3--7 
// 4--dd
 ```
 4. map遍历，map即是 “映射”的意思 用法与 forEach 相似
 ```javascript
 var arr = [1, 3, 45, 7, 'dd'];
arr.map(function(value,i){
    console.log(i+'--'+value);
})
// 打印结果
// 0--1
// 1--3 
// 2--45 
// 3--7 
// 4--dd
```
map遍历支持使用return语句，支持return返回值
```javascript
var arr = [1, 3, 45, 7, 'dd'];
var b= arr.map(function(value,i){
    console.log(i+'--'+value);
    return value;
})
console.log(b);
// b返回 (5) [1, 3, 45, 7, "dd"]
```
5. for-of遍历 是ES6新增功能
```javascript
var arr = [1, 3, 45, 7, 'dd'];
for( let i of arr){
    console.log(i);
}
// 打印结果: 1 3 45 7 dd
```
- for-of这个方法避开了for-in循环的所有缺陷
- 与forEach()不同的是，它可以正确响应break、continue和return语句
- for-of循环不仅支持数组，还支持大多数类数组对象
- for-of循环也支持字符串遍历

### 对象遍历
 1. for-in是为遍历对象而设计的，不适用于遍历数组。
```javascript
var arr = [1, 3, 45, 7, 'dd'];
for (var index in arr){
    console.log(index,arr[index]);
}
// 打印结果:
// 0 1
// 1 3 
// 2 45 
// 3 7 
// 4 dd
```

## 函数

- 函数
  - js中的一等公民。
  - 函数是一种数据类型，即可以当做参数进行传递，也可以当做方法的返回值。
  - 灵活

 一般情况下，把函数作为参数的目的就是为了获取函数内部的异步操作结果。

- 同步函数
```javascript
function add(x,y){
   return x * y
}
add(10,20);
// 一行一行执行 函数执行结束函数的调用也就结束了
```
## 异步函数

- 不成立的情况

1
```javascript
function add(x, y) {
  console.log(1);
  setTimeout(function() {
    console.log(2);
    var ren = x + y;
    return ren
  },
  1000);
   console.log(3);
  //到这里执行就结束了 不会等待前面的定时器，所以直接就返回了默认值 undefined 拿不到ren
  // 执行结果 1 3 undefined 等待1秒得到 2
}
b = add(10, 20); 
console.log(b);// undefined
```
2
```javascript
function add(x, y) {
  var ren;
  console.log(1);
  setTimeout(function() {
    console.log(2);
    var ren = x + y;
  },
  1000);
   console.log(3);
   return ren
  //到这里执行就结束了 不会等待前面的定时器，所以直接就返回了默认值 undefined 拿不到ren
  // 执行结果 1 3 undefined 等待1秒得到 2
}
b = add(10, 20); 
console.log(b);// undefined
```
:::warning
注意：凡是要得到一个函数内部异步操作的结果，必须通过回调函数
:::

- 异步Api 例如
  - setTimeout
  - readFile
  - writeFile
  - ajax
  - ...

```javascript
console.log(1);

// 异步api 执行他 不会等待 哪怕定时器时间为0
setTimeout(function () {
   console.log(2);
   console.log("hello js");
}, 1000);
console.log(3);
// 执行结果 1 3 2 hello js
```
成立的情况:
```javascript
function add(x, y,callback) {
  // callback就是回调函数
  // var x= 10
  // var y= 30
  // var callback= function(ren){console.log(ren); }
  console.log(1);
  setTimeout(function() {
  var  ren = x + y;
 callback(ren)
  },1000);
  console.log(2);
}
add(10,30,function (ren) {
    console.log(ren);//我现在拿到这个结果可以做任何操作
});
```