# Vue

## 背景图片路径拼接


template代码
```html
<a class="new_onLine_one" v-for="(brand,index) in imgList " :key="index">
     <div class="fl rank_img" v-bind:style="{ 'background-image': 'url(' + brand.src+ ')' }">
     </div>
</a>
```
js代码
```javascript

export default {
    name: "Carousel",
    data() {
     return{
         imgList : [
            {id: 1, src:'https://placehold.it/190x180'},
            {id: 2, src:'https://placehold.it/180x190'},
          ]
     }
    },
};
```