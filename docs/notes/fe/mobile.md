# 移动端

## 移动端网站或APP点击后出现闪动或灰色背景

 - 隐藏文本框阴影:（去除文本框默认样式）
 ```css
 input, textarea{-webkit-appearance: @none;}
 ```
 - 取消手机点击屏幕时，会出现的灰块
 ```css
 html,body{-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
 ```
 - 移动端网站或APP点击后出现闪动或灰色背景
 ```css
 .class{-webkit-tap-highlight-color:transparent;}
 ```
 ## 手机端网页的脑袋meta标签里面都应该配置些啥
 `
   <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes"> `
  ::: tip 
网页中常常看见有上面这样的标记，他们是做什么的？，记录下来，方便以后查询，以免忘记
  :::

 - **清除浏览器中的缓存**，它和其它几句合起来用，就可以使你再次进入曾经访问过的页面时，ie浏览器必须从服务端下载最新的内容，达到刷新的效果。

 `<meta http-equiv="Pragma" content="no-cache">`

`<meta http-equiv="Cache-control" content="no-cache">` 

`<meta http-equiv="Cache" content="no-cache">`
 - **禁止缓存**

 `<meta http-equiv="Expires" content="-1">`

 - **宽度自动适应手机屏幕的宽度**

 `
 <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5,maximum-scale=2.0, user-scalable=yes" />  `

`  width=device-width `：表示宽度是设备屏幕的宽度

`initial-scale=1.0`：表示初始的缩放比例

`minimum-scale=0.5`：表示最小的缩放比例

`maximum-scale=2.0`：表示最大的缩放比例

`user-scalable=yes`：表示用户是否可以调整缩放比例

- **设定iphone端页面全屏。** `<meta name="apple-mobile-web-app-capable" content="yes" />  `  



- **取消数字被识别为电话号码。**`<meta name="format-detection" content="telephone=no" />` 

- **iphone 中 safari 顶端的状态条的样式**
`<meta content="black" name="apple-mobile-web-app-status-bar-style"> `
 





   

   
