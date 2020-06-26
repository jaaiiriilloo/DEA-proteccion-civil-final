<template>
  <div class="container">
    <div>
      <h1>COMIENZA EL MASAJE CARDIACO</h1>
      <h2 class="subtitlo">
        : :
      </h2>
      <h3>Coloca el talón de la otra mano sobre la primera, entrelanzando los dedos.<br>
      -Mantén los brazos rectos sin doblar los codos, lo más vertical posible.<br>
      -Comprime el pecho unos 5cm.<br>
      Haz compresiones continuas entre 100 y 120 veces por minuto</h3>
    <img src="~assets/img/masaje-cardiaco.jpg" class="img-fluid" alt="Responsive image">
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