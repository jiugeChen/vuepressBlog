<template>
<div class="homeapp">
    <div class="newSite">
       本博客停止维护..访问我的
       <a href="https://jiugework.gitee.io">新的博客</a>
        
    </div>
    <div class="appbox">
       <img src="../public/photo.jpg" alt="" srcset="">
    </div>
    <div class="txt">
        <h1>
     {{message}}   
    </h1>
    <p>{{ tip }}</p>
    </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            message:'九歌',
            tip:'日积月累',
        }
        
    }
}
</script>
<style scoped >
.homeapp{
    /* background-color: blue; */
    position:absolute;
    left: 0;
    top: 60px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background:url('../public/adv_bg.jpg') no-repeat;
    

}
.newSite{
    position: absolute;
    width: 100%;
    height: 60px;
    background-color: rgb(185, 43, 43);
    z-index: 99;
    text-align: center;
    line-height: 60px;
    color: white;
}
.txt{
    margin-top: 3rem;
}
.appbox{
    margin: 0 auto;
    background-color: transparent;
    width: 18rem;
    height: 18rem;
    position: relative;
    top:2rem;
    margin-top: 5rem;
    overflow: hidden;
    border-radius: 2px;
}
.appbox img{
    width: 100%;
} 
.homeapp p{
    font-size: 1.4rem;
}
.homeapp h1,.homeapp p{
    text-align: center;
}
</style>
