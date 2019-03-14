# HTML与CSS注意事项

 ##  html多个文件上传
```html
<input type="file" name="img" multiple="multiple" />
```
 ## html accept 属性
 在文件上传中使用 accept 属性，本例中的输入字段可以接受 GIF 和 JPEG 两种图像：
```html
<input type="file" name="img" accept="image/gif, image/jpeg" />
```


## css样式初始化
```css
```html
div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td{margin:0;padding:0;}body{background:#fff;color:#555;font-size:14px;
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; } 
body { background:#fff; color:#555; font-size:14px; font-family: Verdana, Arial, Helvetica, sans-serif; } 
td,th,caption { font-size:14px; } 
h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; } 
address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;} 
a { color:#555; text-decoration:none; } 
a:hover { text-decoration:underline; } 
img { border:none; } 
ol,ul,li { list-style:none; } 
input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; } 
table { border-collapse:collapse; } 
html {overflow-y: scroll;}  
/* css common */ 
.clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;} 
.clearfix { *zoom:1; }
```
## css元素垂直居中
```css
.verticalcenter{
 position: relative;
 top: 50%;
 -webkit-transform: translateY(-50%);
 -o-transform: translateY(-50%);
 transform: translateY(-50%);
}
```
## banner自适应屏幕代码

css代码:
```css
div {    
    width:100%;
    position:relative;
    overflow:hidden;
    height:200px;
}
img {
    width:3000px;/*图片宽度*/           
    position:absolute;
    left:50%;
    margin-left:-1500px;/*图片宽度的一半*/       
}
```
html代码
```html
<div>
<img src="banner.ipg">
</div>
```

## html5新特性

1. geolocation - 定位
  - pc ip地址
    - 精度比较低
    - IP库来定位
  - 手机 - GPS
    - 单次 `getCurrentPosition(成功,失败,参数)`
    
       参数:
      - enableHighAccuracy 高精度模式 徐燕更多时间、费电
      - timeout          获取当前位置信息所允许的最长时间。如果这个时间段未完成，就会调用错误处理函数
      - maximumAge      这个值表示浏览器重新计算位置的时间间隔，以ms为单位，此值默认为0 缓存时间  
    - 成功 
      - latitude 
      - longitude  
2. canvas绘图

 ```html
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            background-color: black;
            text-align: center;
        }
        #c1 {
            background-color: white;
        }
    </style>
</head>

<body>
    <canvas id="c1" width="800" height="600">
        你的浏览器不支持canvas<a href="#">点击下载最新的浏览器</a>
    </canvas>
    <script>
        let c = document.querySelector('#c1');
        let gc = c.getContext('2d'); //图形上下文---绘图接口
        //路径操作
        // gc.moveTo(100,200);
        // gc.lineTo(300, 200);
        // gc.lineTo(200, 100);
        // gc.lineTo(100, 200);
        // gc.fillStyle='blue  '; //填充颜色
        // gc.fill(); //填充
        // gc.strokeStyle='red';
        // gc.stroke();
        // gc.moveTo(500,100);
        // gc.lineTo(550, 200);
        // gc.strokeStyle='red'
        // gc.stroke();
        // gc.beginPath(); //结束路径 清除之前所有的路径
        // gc.lineWidth=10; //线宽
        // gc.moveTo(150,100);
        // gc.lineTo(200, 200);
        // gc.lineTo(50, 200);
        // gc.closePath();   //闭合
        // gc.strokeStyle='blue '
        // gc.stroke();
        let lastX, lastY;
        c.onmousedown = function(ev) {
            lastX = ev.offsetX;
            lastY = ev.offsetY;
            c.onmousemove = function(ev){
            gc.moveTo(lastX, lastY);
            gc.lineTo(ev.offsetX, ev.offsetY);
            gc.lineWidth=5;
            lastX = ev.offsetX;
            lastY = ev.offsetY;
            gc.stroke();

            }
            c.onmouseup =function() {
                c.onmousemove = null;
                c.onmouseup = null;
            }
        }
    </script>
</body>
</html>
    ```