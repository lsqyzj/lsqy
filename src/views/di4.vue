<template>
  <div>
      <!-- 数据接受方{{num}} -->
  </div>
</template>

<script>

import { getCurrentInstance, onMounted } from 'vue'
import bus from '../../eventBus.js'
export default {

    // data() {
    //     return {
    //         num:0
    //     }
    // },
    // created() {
    //     bus.on('countChange' ,count=>{
    //         this.num=count
    //     })
    // },
    setup() {
        onMounted(()=>{
            bus.on('countChange' ,count=>{
            console.log("countChange",count);
        })
        })
        

        // const { apptext } = getCurrentInstance()
        // apptext.config.globalProperties.$eventBus.on('my-event', data => {
        // console.log(data)
        // })
        
    },
    
}
</script>




