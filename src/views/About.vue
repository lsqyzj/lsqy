<template>
    <div class="zz" id="zz" ref="zz" style="width: 100%;height: 400%;"></div>
</template>
<script>
import * as echarts from 'echarts';
import{reactive, ref,onMounted }from'vue';
import mine_echarts from '../js/mine_echarts.js'
export default {
    setup() {
        const state=reactive({
            zz:ref()
        })
        const init=()=>{
        var char=document.getElementById('zz')
        console.log(char);
        console.log(state.zz);
        var myChart = echarts.init(state.zz);
        var option;
        option = {
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

            radius:[30,100],
            // roseType:'area',
            center:['75%','35%'],
            data:[{value:364,name:'这一年看354天'},{value:1,name:'10月6日这一天没有看'}]}
            ],
            };
       
        option && myChart.setOption(option);
        }
        onMounted(() => {
            init();
        });
    window.onresize=()=>{
        mine_echarts.echarts_refrsh("zz",mine_echarts.get_id_option("zz"));
    }
    return state
    },
}

</script>

