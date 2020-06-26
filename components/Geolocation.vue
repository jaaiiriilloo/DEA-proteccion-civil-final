<template>
<div id="app" v-cloak>

  <p>
    Let us locate you for better results...
    <button @click="locateMe">Get location</button>
  </p>
  
  <div v-if="errorStr">
    Sorry, but the following error
    occurred: {{errorStr}}
  </div>
  
  <div v-if="gettingLocation">
    <i>Getting your location...</i>
  </div>
  
  <div v-if="location">
    Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}
  </div>
  
</div>


</template>

<script>
Vue.config.productionTip = false;
Vue.config.devtools = false;

const app = new Vue({
  el:'#app',
  data:{
    location:null,
    gettingLocation: false,
    errorStr:null
  },
 /* methods: {
    async getLocation() {
      
      return new Promise((resolve, reject) => {

        if(!("geolocation" in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }

        navigator.geolocation.getCurrentPosition(pos => {
          resolve(pos);
        }, err => {
          reject(err);
        });

      });
    },
    async locateMe() {

      this.gettingLocation = true;
      try {
        this.gettingLocation = false;
        this.location = await this.getLocation();
      } catch(e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
      
    }
  }
})

</script>

<style>
[v-cloak] {display: none}
</style> */