<template>
  <div class="app">
    
    <title>Desfibrilador Protección Civil</title>

 <div class="container-fluid">
   <div class="hijo1">
    <div class="hijo">
      <img src="~assets/img/placa.png" class="img-fluid" alt="Responsive image">
    </div>
    </div>
  </div>
  <footer class="end-footer">
  <div class="container">
    <div class="row">
       <nuxt-link class="btn btn-light  col-md-3  col-xs-12" id="uno" to="/Dea"><i class="fas fa-2x fa-heartbeat" style="color: #a01d23;"></i>DEA + Cercano</nuxt-link>
      <nuxt-link  class="btn btn-light  col-md-3  col-xs-12" id="dos" to ="/Rcp"><i class="far fa-2x fa-question-circle" style="color:#2b598f;"></i> Rcp + información</nuxt-link>
       <nuxt-link class="btn btn-light  col-md-3  col-xs-12" id="tres" to="/Llamada112"><i class="fas fa-2x fa-mobile-alt" style="color:#2b598f;"></i>Llamada <span style="color:#a01d23"> 112</span></nuxt-link>
      <nuxt-link class="btn btn-light  col-md-3  col-xs-12" id="cuatro" to="/LlamadaSos"><i class="fas fa-2x fa-fire-extinguisher" style="color: #a01d23;"></i>Fuerzas Seguridad</nuxt-link>

</div>
</div>
</footer>
</div>
</template>
 

<script>
import inicio from '~/components/inicio.vue'

export default {
  head: {
    title: "Home Desfibriladores Proteccion Civil"
  },
  meta: [
    {hid: "description", name: "description", content: "Esta es la Home principal de la aplicación sobre geolocalización de desfibriladores con 4 botones simples e intuitivos que puedes requerir en la emergencia"}
  ],
  components: {
    inicio,
    
  },
  head() {
    return{
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      ],
      link: [
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Suez+One&display=swap"}
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body,
html {
  height: 100%;
  color: #6a6a6a;
font-family: 'Suez One', serif;
  background: #ebf5fc;
  box-shadow: -2px -2px 5px white, 3px 3px 5px rgba(0, 0, 0, 0.1);
  margin: 0;
}
/* VARIABLE COLOR */
:root {
  --btn-h-f: #e8532b;
  --btn-h: #f3c62e;
}
.container-fluid {
  /*IMPORTANT*/
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  margin: 0;
  margin-bottom: 70px;
  padding-right: 0px;
    padding-left: 0px;
}
.container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
    height: 500px;
}
.container {
  display: contents;
}
.hijo1{
   display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  top: 0;
  left: 0;
  margin: 0;
/* The image used */
  background: url('~assets/img/fondo-pc.png') no-repeat;
  background-size: cover;
}
.hijo .img-fluid:hover{
 cursor: pointer;
 filter: brightness(150%);
}

img {
  width: 20em;
}

.hijo i:hover{
  cursor: pointer;

}



/* BUTTONS */
.btn btn-light {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.row {
  width: 100%;
  margin: 0;
  display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: 0px;
}

#uno,
#dos,
#tres,
#cuatro {
  display: flex;
  background: hsl(205, 74%, 95%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebf5fc;
  box-shadow: inset -2px 2px 5px rgba(255, 255, 255, 1),
    3px 3px 5px rgba(2, 0, 3, 0.1);
  cursor: pointer;
  transition: all 0.15s ease;
  font-size: 18px;
  font-family: 'Suez One', serif;
  letter-spacing: 5px;
  color: black;
  text-shadow: 1px 1px 1px #ccc, 1px 2px 1px #ccc, 1px 3px 1px #ccc, 1px 4px 1px #ccc, 1px 5px 1px #ccc, 1px 6px 1px #ccc;
}
#tres span{
  font-size: 25px;
}
/*---- HOVER BUTTON ---- */
#uno:hover {
  transform: scale(1.05);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1), -4px -4px 10px rgba(255, 255, 255, 1);
}

#dos:hover {
  transform: scale(1.05);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1), -4px -4px 10px rgba(255, 255, 255, 1)
}

#tres:hover {
  transform: scale(1.05);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1), -4px -4px 10px rgba(255, 255, 255, 1)
}

#cuatro:hover {
  transform: scale(1.05);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1), -4px -4px 10px rgba(255, 255, 255, 1)
}

/*---- FOCUS BUTTON ---- */
#uno:focus {
  outline: none;
  transform: scale(0.95);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1), -4px -4px 10px rgba(255, 255, 255, 1), 4px 4px 10px 0 rgba(0, 0, 0, .1) inset, -4px -4px 10px rgba(255, 255, 255, 1) inset
}

#dos:focus {
  outline: none;
  transform: scale(0.95);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1), -4px -4px 10px rgba(255, 255, 255, 1), 4px 4px 10px 0 rgba(0, 0, 0, .1) inset, -4px -4px 10px rgba(255, 255, 255, 1) inset
}

#tres:focus {
  outline: none;
  transform: scale(0.95);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1), -4px -4px 10px rgba(255, 255, 255, 1), 4px 4px 10px 0 rgba(0, 0, 0, .1) inset, -4px -4px 10px rgba(255, 255, 255, 1) inset
}

#cuatro:focus {
  outline: none;
  transform: scale(0.95);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1), -4px -4px 10px rgba(255, 255, 255, 1), 4px 4px 10px 0 rgba(0, 0, 0, .1) inset, -4px -4px 10px rgba(255, 255, 255, 1) inset
}

.btn:hover:focus {
  color: #e8532b;
}

.btn:hover { 
  color: #e8532b;
}
/* flashlight btn */
#uno{
  animation: all 350ms;
  animation-iteration-count: infinite;
  animation-name: warn-1
}
@keyframes warn-1 {
	0%,
	16% {
		background: linear-gradient(230deg,
    rgba(255, 255, 255, 0.24) 0%,
    rgba(43, 89, 143) 25%,
    rgba(255, 255, 255, 0.18) 49%,
    rgba(0, 0, 0, 0) 78%,
    rgba(43, 89, 143) 100%
  );
		box-shadow: 0px 0px 3px #222;
	}
	17%,
	97% {
		background: #fff7d4;
		box-shadow: 0px 0px 8px 4px #29235c;
	}
	99%,
	100% {
		background: linear-gradient(230deg,
    rgba(43, 89, 143) 0%,
    rgba(43, 89, 143) 25%,
    rgba(41, 35, 92) 49%,
    rgba(0, 0, 0, 0) 78%,
    rgba(43, 89, 143) 100%
    );
    box-shadow: #ebf5fc;
  }
}
#dos{
  animation: all 450ms;
  animation-name: warn-2;
  animation-iteration-count: infinite;
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

#tres{
  animation: all 550ms;
  animation-iteration-count: infinite;
  animation-name: warn-3;
}
@keyframes warn-3 {
	0%,
	56% {
		background: linear-gradient(230deg,
    rgba(255, 255, 255, 0.24) 0%,
    rgba(243, 197, 42) 25%,
    rgba(255, 255, 255, 0.18) 49%,
    rgba(0, 0, 0, 0) 78%,
    rgb(243, 197, 42) 100%
  );
		box-shadow: 0px 0px 3px #222;
	}
	57%,
	97% {
		background: #fff7d4;
		box-shadow: 0px 0px 8px 4px #f3c52a;
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

#cuatro{
  animation: all 650ms;
  animation-iteration-count: infinite;
  animation-name: warn-4;
}
@keyframes warn-4 {
	0%,
	56% {
		background: linear-gradient(230deg,
    rgba(255, 255, 255, 0.24) 0%,
    rgba(43, 89, 143) 25%,
    rgba(255, 255, 255, 0.18) 49%,
    rgba(0, 0, 0, 0) 78%,
    rgb(43, 89, 143) 100%
  );
    box-shadow: 0px 0px 3px #2b598f;

	}
	56%,
	75% {
		background: #fff7d4;
    box-shadow: 0px 0px 8px 4px #2b598f;

	}
	75%,
	100% {
		background: linear-gradient(155deg,
    rgba(255, 255, 255, 0.24) 0%,
    rgba(255, 255, 255, 0.14) 25%,
    rgba(255, 255, 255, 0.18) 49%,
    rgba(0, 0, 0, 0) 78%,
    rgba(43, 89, 143) 100%
  );
    box-shadow: 0px 0px 3px #222;
	}
}

.end-footer {
  display: inline;
  background: #ebf5fc;


}

</style>
