<template>
  <div class="home" ref="home" >
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld /> -->
    
    <zz />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import zz from '@/components/echs/zz.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    zz
  },
}
</script>