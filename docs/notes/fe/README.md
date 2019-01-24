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


