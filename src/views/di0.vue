<template>
  <div>
      <h2>测试根</h2>
      <hr />
      <div >
          
          <bbb></bbb>
          <aaa></aaa>

      </div>
  </div>
</template>

<script>
import aaa from './di4.vue'
import bbb from './di6.vue'
export default {
    
    components: {
        aaa,
        bbb,
    }
}
</script>
