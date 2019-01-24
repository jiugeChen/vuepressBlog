<template>
<div class="homeapp">
    <div class="appbox">
       <img src="../public/my.jpg" alt="" srcset="">
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
            tip:'别假装努力',
        }
        
    }
}
</script>
<style scoped >
.homeapp{
    /* background-color: blue; */
    position: relative;
    width: 100%;
    height: 100%;

}
.txt{
    margin-top: 3rem;
}
.appbox{
    margin: 0 auto;
    background-color: pink;
    width: 20rem;
    height: 20rem;
    position: relative;
    top:2rem;
    overflow: hidden;
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
