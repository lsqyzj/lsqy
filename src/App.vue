<template>
  <div   >
    <!--页眉  -->
  <div class="app" ref="app">
    <slot><yemei /></slot>
  </div>

  <!-- 侧面栏 -->
  <div id="cemian">
    <chemian />
  </div>

  <!-- 内容 -->
  <div style="overflow:scroll;  height:650px">
  <div class="  neirong .container-md " >
  <div class=" container p-5 my-5 border" >
    <!-- <router-view></router-view> -->
     <neirong />
     <!-- <as /> -->
  </div>
</div>
<div class="container p-5 my-5 bg-dark text-white">
  <h1>我的第一个 Bootstrap 页面</h1>
  <!-- <zhuanpan /> -->
  <p>这个容器具有深色背景色和白色文本，以及一些额外的边距。</p>
</div>
</div>


  <!-- 页眉 -->
  <div id="yewei">
    <!-- <dibu /> -->
  </div>


</div>
</template>
<script>

import yemei from '@/components/yemei.vue'
import dibu from '@/components/dibu.vue'
import chemian from '@/components/chemian.vue'
import neirong from '@/components/neirong.vue'
// import Home from '@/views/Home'
import zhuanpan from '@/components/zhuanpan/zhuanpan.vue'
export default {
  name: 'app',
  components: {
    yemei,
    dibu,
    chemian,
    neirong,
    zhuanpan
    
  },
}
</script>



<style>
#yewei{
  text-align:center;
  /* background-color: #a30b3e; */
  height: auto;
  width: auto;
  
}
#neirong{
  text-align:center;
  /* bottom: 10px; */
  /* margin: 58px; */
  left: auto;
  background-color: rgb(233, 219, 231);
  height: 1500px;
  /* width: 1600px; */
  
  
}
#cemian{
  /* background-color: rgb(14, 128, 228); */
  float:left;
  text-align:center;
  width: 150px;
  height: auto;
}
body{
  /* background-color: #3415cb; */
  margin: 0;
}
</style>
