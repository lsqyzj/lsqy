<template>
<div>
  <!-- <div>数据发送方{{count}}</div> -->
  <!-- <button type="button" class="btn btn-primary" @click="add">+1</button> -->
  </div>
</template>
<script>
import { getCurrentInstance,reactive} from 'vue'

import bus from '../../eventBus.js'
export default {
    // data() {
    //     return {
    //         count:0
    //     }
    // },
    // methods: {
    //     add() {
    //         this.count++
    //         bus.emit('countChange', this.count)
    //     }
    // },
    setup(){
        const state=reactive({
            data:"sad"
        })
        bus.emit('countChange', state)
        
        
        //  const { appContext } = getCurrentInstance()
        // appContext.config.globalProperties.$eventBus.emit('my-event', { id: 1, name: 'name' })
       return state
    }
}
</script>

<style>

</style>