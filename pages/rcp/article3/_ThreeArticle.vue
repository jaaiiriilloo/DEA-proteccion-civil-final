<template>
  <div class="container">
    <div>
      <h1>¿RESPONDE?</h1>
      <h2 class="subtitlo">
        : :
      </h2>
      <h3>- Comprueba que la escena es segura.<br>
      Sacude a la víctima por los hombros y pregúntale en alto, <strong>¿te encuentras bien?</strong><br><br>
      Si RESPONDE, déjalo como lo has encontrado, intenta saber si le ha pasado algo y solicita ayuda si precisa.<br><br>
      Mientras llega la ayuda, vigila que no cambie la situación
      </h3>
    <img src="~assets/img/responde-rcp.jpg" class="img-fluid" alt="Responsive image">
    </div>   
</div>
  
</template>

<script>


export default {
data(){
      return {
          
      }
  },
  components: {
    
  },
}
</script>


<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>