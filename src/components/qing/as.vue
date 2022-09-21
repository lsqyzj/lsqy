<template>
  <div></div>
</template>

<script>
import axios from 'axios'
import bus from './eventBus.js'
import{reactive, ref,onMounted}from'vue';
export default {
    setup() {
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
                chartData1:null,
                char:null,
        })

        const qing=()=>{
            axios({
                url:"/api",
                method:"get"
            }).then(res=>{
                var da=[];
                var aaa=res.data.returndata.datanodes.slice()
                var ddd=res.data.returndata.wdnodes.slice()
                aaa.map((a)=>{
                    da.push(a.data.data)
                })
                ddd[1].nodes.slice().map((a)=>{
                    state.day.push(a.cname)
                })
                ddd[0].nodes.slice().map((a)=>{
                    state.name.push(a.cname)
                })
                state.da1=da.slice(0,10);
                state.da2=da.slice(10,20);
                state.da3=da.slice(20,30);
                state.da4=da.slice(30,40);
                state.da5=da.slice(40,60);


                bus.emit('renKou', state)
            console.log(state);
            }).catch(err=>{
                console.log(err);
            })
        }

        onMounted(() => {
            console.log("asdas");
            qing()
        
        })
        return state
    }
}
</script>