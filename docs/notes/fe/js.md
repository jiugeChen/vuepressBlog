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