<template>
<div>
    <router-view  ></router-view>
    <as></as>
    </div>
</template>

<script >
import{ref,reactive,provide, onMounted,inject}from 'vue'
import axios from 'axios'
import bus from './echs/eventBus.js'
// import as from '@views/as.vue'
// import population from './echs/population.vue'
export default ({
//      components: {
//         as
//   },
    setup() {
        bus.on('renKou' ,state=>{
            console.log("renKou",state);

        })


        bus.on('countChange' ,count=>{
            console.log("countChange",count);
        })





        // const userLocation = inject('location', 'The Universe')
        // const userGeolocation = inject('geolocation')
        // console.log(userLocation,userGeolocation);
        // console.log(this.$store.state.httpUrl);
    //     provide('location', 'North Pole')
    //     provide('geolocation', {
    //         longitude: 90,
    //         latitude: 135
    // })
    }
})
</script>
<style >

</style>
