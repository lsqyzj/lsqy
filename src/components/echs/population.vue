<template>
    <div >

        <button type="button" @click="bianhuan('bar')"  class="btn btn-outline-primary">{{}}
            <span class="badge rounded-pill bg-info">柱状图</span>
        </button>
        <button type="button" @click="bianhuan('line')"  class="btn btn-outline-secondary">折现图</button>
        <button type="button" @click="pie('pie')" class="btn btn-outline-success">饼图</button>
        <button type="button" @click="radar('radar')" class="btn btn-outline-info">雷达图</button>
        <button type="button" @click="bianhuan0('')" class="btn btn-outline-warning">警告</button>
        <button type="button" @click="bianhuan5" class="btn btn-outline-danger">危险</button>
        <button type="button" @click="bianhuan6" class="btn btn-outline-dark">黑色</button>
        <button type="button" @click="bianhuan7" class="btn btn-outline-light text-dark">浅色</button>
    <div class="pop d-flex " id="id" ref="pop" style="width: 100%;height: 500%">
    </div>
    </div>
</template>



<script setup>
import axios from 'axios'
// import *as echarts from 'echarts'
import bus from './eventBus.js'
import{reactive, ref,onMounted ,getCurrentInstance,watch, onUpdated,onBeforeUpdate,onBeforeUnmount,provide,inject}from'vue';
import mine_echarts from '../../js/mine_echarts.js';
// import qing from '../../js/qing.js'
// console.log(state);
//   provide('location', 'North Pole')
//         provide('geolocation', {
//             longitude: 90,
//             latitude: 135
//     })
// const userLocation = inject('location', 'The Universe')
// const userGeolocation = inject('geolocation')

    // console.log(this.$store.state.httpUrl);

// export default {
//  method: {
//      getEcharts(){
//         echarts.init(document.getElementById("id")).resize();
//      }
//     },


// }
// export default {
    // data(){
    //     return {
    //         type:"bar"
    //     }
    // },
    //  methods: {
    //   bianhuan1(){
    //         this.type="line"
    //         console.log(this.type);
    //   },
    // },
    // setup() {
        
        const state=reactive({
                pop:ref(),
                name:[],
                day:[],
                data:[],
                da1:[],
                da2:[],
                da3:[],
                da4:[],
                da5:[],
                pie:[[],[],[],[],[]],
                chartData1:null,
                char:null,
        })
        // const datatype = getCurrentInstance();
        // // console.log(datatype.data);
        // var type=null;

//  const initEcharts =() =>{
// 	// 新建一个promise对象
// 	let newPromise = new Promise((resolve) => {
// 		resolve()
// 	})
// 	//然后异步执行echarts的初始化函数
// 	newPromise.then(() => {
// 	//	此dom为echarts图标展示dom

// 	})
// }
        const init=()=>{
            const option = {
                   tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                    }
                },
                legend:{  right: '5%',type:"plain",orient :'vertical',},
                title:{text:"中国人口统计",left: 'center'},
                xAxis:{type:'category',data:state.day},
                yAxis:{tpye:"value"},
                series:[{
                    name:state.name[0],
                    type:'bar',
                    data:state.da1,
                },
                {
                    name:state.name[1],
                    type:'bar',
                    data:state.da2,
                },
                {
                    name:state.name[2],
                    type:'bar',
                    data:state.da3,
                },
                {
                    name:state.name[3],
                    type:'bar',
                    data:state.da4,
                },
                {
                    name:state.name[4],
                    type:'bar',
                    data:state.da5,
                },
                
                
                ]

            }
            mine_echarts.get_id_echarts("id",option)

        }

        const qing=()=>{
            axios({
                url:"/api",
                method:"get"
            }).then(res=>{
                var da=[];
                
                // console.log(res);
                var aaa=res.data.returndata.datanodes.slice()
                // console.log(aaa);
                var ddd=res.data.returndata.wdnodes.slice()
                aaa.map((a)=>{
                    da.push(a.data.data)
                })
                
                // console.log(ddd[0].nodes.slice());
                // console.log(ddd[1].nodes.slice());
                ddd[1].nodes.slice().map((a)=>{
                    state.day.push(a.cname)
                })
                ddd[0].nodes.slice().map((a)=>{
                    state.name.push(a.cname)
                })
                state.da1=da.slice(0,10);//总人口
                state.da2=da.slice(10,20);//男性人口
                state.da3=da.slice(20,30);//女性人口
                state.da4=da.slice(30,40);//城镇人口
                state.da5=da.slice(40,50);//乡村人口

                // console.log(state.day,state.name);
                // console.log(state.da1,state.da2,state.da3,state.da4,state.da5);
               for( let i = 0;i<=state.da1.length;i++){
                    state.pie[0].push({value:state.da1[i],name:state.day[i]})
                    state.pie[1].push({value:state.da2[i],name:state.day[i]})
                    state.pie[2].push({value:state.da3[i],name:state.day[i]})
                    state.pie[3].push({value:state.da4[i],name:state.day[i]})
                    state.pie[4].push({value:state.da5[i],name:state.day[i]})
                }
                init()
                // initEcharts ()
            }).catch(err=>{
                console.log(err);
            })
        }
        window.onresize =()=>{
            setTimeout(() => {
                echarts_refrsh()
            },500)
        }
        onMounted(()=>{
            qing()
        //       bus.on('renKou' ,state=>{
        //           init()
        //     console.log("renKou",state.name);

        // })

        })
        onUpdated(()=> {
            window.onresize = null
        })
        onBeforeUnmount(()=>{
            window.onresize = null
        })
        onBeforeUpdate(()=>{
            window.onresize = null
        })
        
        
        const bianhuan=(type)=>{
            // let option = get_id_option()
            let option = mine_echarts.get_id_option("id")
            // console.log(option);
            option={
                   tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                    }
                },
                legend:{  right: '5%',type:"plain",orient :'vertical',},
                title:{text:"中国人口统计",left: 'center'},
                xAxis:{type:'category',data:state.day},
                yAxis:{tpye:"value"},
                series:[{
                    name:state.name[0],
                    type:'bar',
                    data:state.da1,
                },
                {
                    name:state.name[1],
                    type:'bar',
                    data:state.da2,
                },
                {
                    name:state.name[2],
                    type:'bar',
                    data:state.da3,
                },
                {
                    name:state.name[3],
                    type:'bar',
                    data:state.da4,
                },
                {
                    name:state.name[4],
                    type:'bar',
                    data:state.da5,
                },
                
                ]

            }
             let num = option.series.length
            for( let i = 0;i<num;i++){
                option.series[i].type=type
            }
            mine_echarts.get_id_echarts("id",option)
        }
        const pie=(type)=>{
                let option = mine_echarts.get_id_option("id")
                console.log(option);
                // option.series=[{
                //         name:"男性人口逐年比例",type:type,
                //         radius:[20,100],
                //         center:["25%","50%"], 
                //         roseType: 'area',
                //         itemStyle: {
                //             borderRadius: 5
                //         },
                //         // label: {
                //         //     show: false
                //         // },
                //         emphasis: {
                //             label: {
                //             show: true
                //             }
                //         },
                //         data:state.pie
                // }, {
                //     name: '女性人口逐年比例',
                //     type: 'pie',
                //     radius: [20, 140],
                //     center: ['75%', '50%'],
                //     roseType: 'area',
                //     itemStyle: {
                //         borderRadius: 5
                //     },
                //     data: [
                //         { value: 30, name: 'rose 1' },
                //         { value: 28, name: 'rose 2' },
                //         { value: 26, name: 'rose 3' },
                //         { value: 24, name: 'rose 4' },
                //         { value: 22, name: 'rose 5' },
                //         { value: 20, name: 'rose 6' },
                //         { value: 18, name: 'rose 7' },
                //         { value: 16, name: 'rose 8' }
                //     ]
                //     }]
                option = {
                    title: {
                        text: '中国人口饼图可视化',
                        // subtext: 'Fake Data',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        // data: [
                        // 'rose1',
                        // 'rose2',
                        // 'rose3',
                        // 'rose4',
                        // 'rose5',
                        // 'rose6',
                        // 'rose7',
                        // 'rose8'
                        // ]
                    },
                    toolbox: {
                        show: true,
                        feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                        }
                    },
                    series: [
                        {
                        name: '总人口逐年比例',
                        type: 'pie',
                        radius: [20, 100],
                        center: ['10%', '50%'],
                        roseType: 'radius',
                        itemStyle: {
                            borderRadius: 5
                        },
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                            show: true
                            }
                        },
                        data:state.pie[0]
                        },
                        {
                        name: '男性人口逐年比例',
                        type: 'pie',
                        radius: [20, 100],
                        center: ['30%', '50%'],
                        roseType: 'radius',
                        itemStyle: {
                            borderRadius: 5
                        },
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                            show: true
                            }
                        },
                        data:state.pie[1]
                        },
                        {
                        name: '女性人口逐年比例',
                        type: 'pie',
                        radius: [20, 100],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 5
                        },
                        data:state.pie[2]
                        },
                        {
                        name: '城镇人口逐年比例',
                        type: 'pie',
                        radius: [20, 100],
                        center: ['70%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 5
                        },
                        label: {
                            show: false
                        },
                        data:state.pie[3]
                        },
                        {
                        name: '乡村人口逐年比例',
                        type: 'pie',
                        label: {
                            show: false
                        },
                        radius: [20, 100],
                        center: ['90%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 5
                        },
                        data:state.pie[4]
                        }
                    ]
                    };
                mine_echarts.get_id_echarts("id",option)
                        }
                    



        const echarts_refrsh=()=>{
            let option = mine_echarts.get_id_option("id")
            mine_echarts.echarts_refrsh("id",option)
        }
        bus.emit('countChange', state)

      
//         return state,bianhuan
//     }
// }
</script>

<style>

</style>