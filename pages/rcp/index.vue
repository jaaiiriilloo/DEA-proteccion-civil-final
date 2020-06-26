<template> 
<div class="app">

<Rcp/>
</div>

</template>

<script>
import Rcp from '~/components/rcp.vue'


export default {
  head: {
    title: "RCP + INFORMACIÓN"
  },
  meta: [
    {hid: "description", name: "description", content: "Esta es la sección donde se obtienen las pautas a seguir en una RCP con información sencilla"}
  ],
  components: {
    Rcp
  },
  render() {
    return {

    }
}
}
</script>
	
<style >


</style>