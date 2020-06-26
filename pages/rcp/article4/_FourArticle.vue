<template>
  <div class="container">
    <div>
      <h1>¿RESPIRA?</h1>
      <h2 class="subtitlo">
        : :
      </h2>
      <h3>- Si NO RESPONDE, colócale boca arriba y abre la vía aérea mediante la maniobra frente-mentón para ver SI RESPIRA NORMALMENTE:
        BOQUEADAS LENTAS O RUIOSAS NO SON UNA RESPIRACIÓN NORMAL.<br><br>
      Mira si el pecho se eleva, escucha si sale aire e intenta sentir el aire en la cara.
      No tardes más de 10 segundos en hacerlo.
      </h3>
    <img src="~assets/img/respira-rcp.jpg" class="img-fluid" alt="Responsive image">
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