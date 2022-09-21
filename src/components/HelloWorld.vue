<template>


<!-- dom 的设置，给定长宽 -->
<div class="chart" id="chart" ref="chart" ></div>

  
</template>

<script>
import * as echarts from "echarts";
import{ref,reactive,onMounted}from "vue";
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // },

setup() {
  console.log("到此");
const state = reactive({
title: "统计测试",
chart: ref(),
top_name: [],
top_data: [],  
});
const init = () => {
if (state.chart) {
var myChart = echarts.init(state.chart);
const option = {
legend:{right:'5%',},
title: { text:"2021" },
tooltip:{trigger:"item"},
yAxis: { type: "category",  data:["看视频个数","看视频时间","动漫","电影",],name:"类型",max:4},
xAxis: { type: "value",max:2000,name:"个(单位)",axisLaber:{interval:0,rotate:30}},
series: [
{
data:[24136,1216.3,122,47],
type:'bar',
label:{show:true},},
{type:"pie",

radius:[20,100],
// roseType:'area',
 center:['75%','35%'],
data:[{value:364,name:'这一年看354天'},{value:1,name:'10月6日这一天没有看'}]}
],
};
option && myChart.setOption(option, true);
}
};

onMounted(() => {
  init();

});
return state
},
};
</script>


<style >
.chart{
  left:  400px;
  height: 500px; width: 700px;
  background-color: aqua;
}

</style>
