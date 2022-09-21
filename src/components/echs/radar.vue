<template>
  <div></div>
</template>

<script>
import {project,}from "vue"
export default {
    // inject:['parent'];
    setup(){
        var option={
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
                radar:{},
                title:{text:"",},
                legend:{},
                serire:[
                    {   type:'pie',
                        
                        data:[{value:"",name:""},
                            {value:"",name:""},
                            {value:"",name:""},
                            {value:"",name:""},
                        ]
                    },
                    ],
        }

    }

}
</script>

<style>

</style>