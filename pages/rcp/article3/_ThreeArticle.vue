<template>
  <div class="container">
    <div>
      <h1>¿RESPONDE?</h1>
      <h2 class="subtitlo">
        <input type="button" onclick="history.back()" name="volver atrás" value="volver atrás">
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
h1{
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  color: #fff;
  font-size: 45px;
}
h2{
  display: inline-block;
  color: #f3c52a;
  width: 20%;
  outline: none;
  transform: scale(0.95);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1), -4px -4px 10px rgba(255, 255, 255, 1), 4px 4px 10px 0 rgba(0, 0, 0, .1) inset, -4px -4px 10px rgba(255, 255, 255, 1) inset;
  animation: all 350ms;
  animation-iteration-count: infinite;
  animation-name: warn-2;
  
}
@keyframes warn-2 {
	0%,
	36% {
		background: linear-gradient(230deg,
    rgba(235, 140, 17, 0.24) 0%,
    rgba(239, 170, 26) 25%,
    rgba(252, 145, 5, 0.18) 49%,
    rgba(252, 137, 6, 0) 78%,
    rgba(232, 83, 43) 100%
  );
    box-shadow: 0px 0px 3px #222;

	}
	37%,
	97% {
		background: #fff7d4;
		box-shadow: 0px 0px 8px 4px #e8532b;
	}
	99%,
	100% {
		background: linear-gradient(155deg,
    rgba(255, 255, 255, 0.24) 0%,
    rgba(255, 255, 255, 0.14) 25%,
    rgba(255, 255, 255, 0.18) 49%,
    rgba(0, 0, 0, 0) 78%,
    rgba(0, 0, 0, 0.8) 100%
  );
		box-shadow: 0px 0px 3px #222;
	}
}

h2 input{
  color: #29235c;
  animation: all 350ms;
  animation-iteration-count: infinite;
  animation-name: warn-2;
}
@keyframes warn-2 {
	0%,
	36% {
		background: linear-gradient(230deg,
    rgba(235, 140, 17, 0.24) 0%,
    rgba(239, 170, 26) 25%,
    rgba(252, 145, 5, 0.18) 49%,
    rgba(252, 137, 6, 0) 78%,
    rgba(232, 83, 43) 100%
  );
    box-shadow: 0px 0px 3px #222;

	}
	37%,
	97% {
		background: #fff7d4;
		box-shadow: 0px 0px 8px 4px #e8532b;
	}
	99%,
	100% {
		background: linear-gradient(155deg,
    rgba(255, 255, 255, 0.24) 0%,
    rgba(255, 255, 255, 0.14) 25%,
    rgba(255, 255, 255, 0.18) 49%,
    rgba(0, 0, 0, 0) 78%,
    rgba(0, 0, 0, 0.8) 100%
  );
		box-shadow: 0px 0px 3px rgb(250, 7, 7);
	}
}
h3{
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #fff;
}
</style>