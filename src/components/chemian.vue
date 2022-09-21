<template>

    <!-- <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">about</router-link></li> -->
<!-- <main>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
       <router-link to="/" class="list-group-item">首页</router-link>
      </li>
      <li>
        <router-link to="/2" class="list-group-item">about</router-link>
      </li>
      <li>
        <router-link to="/3" class="list-group-item">指标</router-link>
      </li>
        <li>
        <router-link to="/4" class="list-group-item">4</router-link>
      </li>
     <li>
        <router-link to="/5" class="list-group-item">5</router-link>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>

  <div class="b-example-divider"></div>






</main> -->

<div id="wrapper" style="left:0; z-index:999">
      <!-- 侧边栏 -->
      <div class="sidebar">
         <div class="headSculpture">
            <img src="../images/headSculpture.jpg" alt="">
            <p>洛神缺氧</p>
         </div>
         <div class="option">
            <ul>
         
               <li @click="change1">
                  
                 <img src="../images/home.png" alt="">
                  <p>首页</p>
               </li>


               <li @click="change2"><img src="../images/works.png" alt="">
                  <p>我的作品</p>
               </li>
               <li @click="change3"><img src="../images/release.png" alt="">
                  <p>发布作品</p>
               </li>
               <li @click="change4"><img src="../images/collection.png" alt="">
                  <p>我的收藏</p>
               </li>
               <li @click="change5"><img src="../images/setup.png" alt="">
                  <p>设置</p>
               </li>
            </ul>
         </div>
      </div>
      <!-- 侧边栏按钮 -->
      <button></button>
      <!-- 内容区域 -->
      <!-- <div class="banner">
        <h2>原创侧边栏抽屉</h2>
      </div> -->
   </div>
</template>


<script>
$(function () {
   // 侧边栏弹出
   $('button').click(function () {
      var left = $('#wrapper')[0].offsetLeft;
      if (left == 0) {
         $('#wrapper').offset({
            'left': 220
         });
         $(this).css('transform', 'rotate(450deg)');
         $('.headSculpture img').addClass('img');
         $('.headSculpture p').addClass('opacity');
         setTimeout(function () {
            $('.option ul>li').addClass('li');
         }, 600)
      } else {
         $('#wrapper').offset({
            'left': 0
         });
         $(this).css('transform', 'rotate(0deg)');
         setTimeout(function () {
            $('.headSculpture img').removeClass('img');
            $('.headSculpture p').removeClass('opacity');
            $('.option ul>li').removeClass('li');
         }, 300)
      }
   })
})
  export default {
      methods: {
      change1(){
        this.$router.push("/")
      },
      change2(){
        this.$router.push("/2")
      },
      change3(){
        this.$router.push("/3")
      },
      change4(){
        this.$router.push("/4")
      },
      change5(){
        this.$router.push("/5")
      },
    },
  setup() {
    
  },
}
</script>



<style type="text/css">



      * {
    margin: 0;
    padding: 0;
}

body {
    overflow: hidden;
}

ul {
    list-style: none;
}

#wrapper {
	width: 5%;
	height: 100%;
  /* pointer-events:none; */
	position: fixed;
	/* top: 0; */
	/* bottom: 0; */

	background-repeat: no-repeat;
	background-size: cover;
	transition: all 0.5s;
    /* background-image: linear-gradient(90deg, #5b4099,#fb83b7); */
}

#wrapper .sidebar {
    width: 220px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -220px;
    bottom: 0;
    background-color: #041418;
    overflow: hidden;
}

#wrapper button {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    background-image: url(../images/button.png);
    background-repeat: no-repeat;
    background-size: 100%;
    border: 0;
    outline: none;
    position: absolute;
    top: 20px;
    left: 10px;
    transition: all 0.5s;
    cursor: pointer;
}

.headSculpture {
    width: 100%;
    margin-top: 35px;
    text-align: center;
}

.headSculpture img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin: 0 auto;
    transform: translate(0,-135px);
    transition: all 1s;
}
.headSculpture .img{
    transform: translate(0,0);
}
.headSculpture p {
    margin: 0 auto;
    margin-top: 15px;
    font-size: 15px;
    width: 160px;
    height: 30px;
    line-height: 30px;
    background-color: pink;
    border-radius: 15px;
    color: #fff;
    transform: translate(200px,0);
    transition: all 1s;
}
.headSculpture .opacity{
    transform: translate(0,0);
}

.option,
.option ul li {
    width: 100%;
}

.option ul {
    padding: 15px 0;
}

.option ul li {
    display: flex;
    align-items: center;
    width:195px;
    margin-top: 15px;
    padding-left:25px;
    cursor: pointer;
    color: #D0D1D7;
    transform: translateZ(0);
    position: relative;
    transition-property: color;
    transition-duration: 0.4s;
    transition: all 1s;
}
.option ul li:nth-child(1),.option ul li:nth-child(3),.option ul li:nth-child(5){
    transform: translate(-200px,0);
}
.option ul li:nth-child(2),.option ul li:nth-child(4){
    transform: translate(200px,0);
}
.sidebar .option ul li.li{
    transform: translate(0,0);
}
.option ul li:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: pink;
    transform-origin: 0 50%;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
}

.option ul li:hover,
.option ul li:focus,
.option ul li:active {
    color: #ffffff;
}
.option ul li:hover:before,
.option ul li:focus:before,
.option ul li:active:before {
    transform: scaleX(1);
}

.option ul li img {
    width: 25px;
    height: 25px;
}

.option ul li p {
    width: 145px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    padding-left: 15px;
    margin-left: 10px;
    letter-spacing: 1px;
}
.banner{
    width:100%;
    text-align: center;
}
.banner h2{
    margin-top:200px;
    font-family:Impact;
    font-weight: bold;
    font-size: 4rem;
    color:#fff;
    letter-spacing: 4px;
}
</style>
