<template> 
<div class="app">

	<title>RCP + INFORMACIÓN</title>




	<div class="wrapper d-flex align-items-stretch">
		<nav id="sidebar">
			<div class="custom-menu">
				<button type="button" id="sidebarCollapse" class="btn btn-primary">
					<i class="fa fa-bars"></i>
					<span class="sr-only">Menu Desplegable</span>
				</button>
			</div>
			<div class="p-4 pt-5">
				<h1><a href="index.html" class="logo">P. Civil</a></h1>
				<ul class="list-unstyled components mb-5">
					<li class="active">
						<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">BOTONES INICIO</a>
						<ul class="collapse list-unstyled" id="homeSubmenu">
							<li>
								<a href="#"><i class="fas fa-2x fa-heartbeat" style="color: #a01d23;"></i>-LOCALIZAR DESFIBRILADOR</a>
							</li>
							<li>
								<a href="#"><i class="fas fa-2x fa-mobile-alt" style="color: #2b598f;"></i>-LLAMADA 112</a>
							</li>
							<li>
								<a href="#"><i class="fas fa-2x fa-fire-extinguisher" style="color: #a01d23;"></i>-CUERPOS DE SEGURIDAD</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">VOLVER A LA PRINCIPAL</a>
					</li>
					<li>
						<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">INFORMACIÓN P.CIVIL</a>
						<ul class="collapse list-unstyled" id="pageSubmenu">
							<li>
								<a href="#">¿QUÉ HACEMOS?</a>
							</li>
							<li>
								<a href="#">¿QUIÉNES SOMOS?</a>
							</li>
							<li>
								<a href="#">FUNCIONES</a>
							</li>
						</ul>
					</li>
					<li>
						<nuxt-link to="/rcp/coffebtn/_payCoffe.vue">Págame un café ☕</nuxt-link>
					</li>
					<li>
						<a href="#">Aviso Legal</a>
					</li>
				</ul>
				<div class="image-fluid">
					<div class="hijo1">
						<div class="hijo">
						</div>
					</div>

					<div class="mb-5">
						<div class="container-fluid">
							<img src="~assets/img/placa.png" class="img-fluid" alt="Responsive image">
						</div>
					</div>
				</div>

				<div class="footer">
					<p>
					&copy; Company 2019  All rights reserved | This Web is made <i class="icon-heart" aria-hidden="true"></i> by <a
							href="http://www.proteccioncivil.es/" target="_blank">Proteccion-civil- &copy; Jairo Herrera Quintero</a>
					</p>
				</div>

			</div>
		</nav>

		<!-- Page Content  -->
		<div id="content" class="p-4 p-md-5 pt-5">

			<section id="articles">
				<img src="~assets/img/fonto-rcp.jpg">
				<h2>FORMACIÓN RCP</h2>
				<div class="clearfix"></div>
				<article>
					<div class="data">
						<nuxt-link  to="/rcp/video/video1/_OneVideo"><span>Pincha Aqui ▶</span>
						<span>Video Ejemplo 🎥</span></nuxt-link>
					</div>
					<h4>
						¿QUÉ ES UNA PCEH?
					</h4>
					<p>
            <nuxt-link to="/rcp/article1/_ArticleOne">
						La Parada Cardiaca Extrahospitalaria (PCHE) es la interrupción brusca
						e inesperada de la respiración y circulación espontáneas.
						Es una de las principales causas de muerte en Europa.
						El tratamiento recomendado para PCEH es […]</nuxt-link>
					</p>
				</article>

				<article>
					<div class="data">
						<nuxt-link  to="/rcp/video/video2/_TwoVideo"><span>Pincha Aqui ▶</span>
						<span>Video Ejemplo 🎥</span></nuxt-link>
					</div>
					<h4>
						DEBEMOS INTERVENIR
					</h4>
					<p>
            <nuxt-link to="/rcp/article2/_TwoArticle">
						Debemos intervenir si pasan unos pocos minutos sin hacer algo, la recuperación es más difícil.
						Como testigo tienes que:
						Reconocer esta situacion.[…]</nuxt-link>
					</p>
				</article>

				<article>
					<div class="data">
						<nuxt-link  to="/rcp/video/video3/_ThreeVideo"><span>Pincha Aqui ▶</span>
						<span>Video Ejemplo 🎥</span></nuxt-link>
					</div>
					<h4>
						¿RESPONDE?
					</h4>
					<p>
            <nuxt-link to="/rcp/article3/_ThreeArticle">
						Comprueba que la escena es segura. Sacude a la víctima por los hombros
						y pregúntale en alto, ¿te encuentras bien? 
					SI RESPONDE, déjalo como lo has encontrado, intenta saber si ha pasado algo
          </nuxt-link>
					</p>
				</article>

				<article>
					<div class="data">
						<nuxt-link  to="/rcp/video/video4/_FourVideo"><span>Pincha Aqui ▶</span>
						<span>Video Ejemplo 🎥</span></nuxt-link>
					</div>
					<h4>
						¿RESPIRA?
					</h4>
					<p>
            <nuxt-link to="/rcp/article4/_FourArticle">
						SI NO RESPONDE, colócale boca arriba y abre la vía aérea mediante la maniobra
						y abre la vía aérea mediante la maniobra frnete-mentón para ver si Respira Normalmente
						 […]</nuxt-link>
					</p>
				</article>

				<article>
					<div class="data">
						<nuxt-link  to="/rcp/video/video5/_FiveVideo"><span>Pincha Aqui ▶</span>
						<span>Video Ejemplo 🎥</span></nuxt-link>
					</div>
					<h4>
						SOLICITA AYUDA
					</h4>
					<p>
            <nuxt-link to="/rcp/article5/_FiveArticle">
						Si respira con normalidad, coloca a la víctima en posicion lateral de seguridad (PLS),
						para mantener la vía aérea abierta. SI NO RESPIRA CON NORMALIDAD, di a alguien que llame al 112
						[…]</nuxt-link>
					</p>
				</article>
				<article>
					<div class="data">
						<nuxt-link  to="/rcp/video/video6/_SixVideo"><span>Pincha Aqui ▶</span>
						<span>Video Ejemplo 🎥</span></nuxt-link>
					</div>
					<h4>
						PREPÁRATE PARA LAS COMPRESIONES
					</h4>
					<p>
            <nuxt-link to="/rcp/article6/_SixArticle">
						 NO RESPIRA NORMALMENTE, inicia inmediatamente el masaje cardíaco.
						-Ponte de rodillas en un lado de la víctima.	-Coloca el talón de una mano
						[…]</nuxt-link>
					</p>
				</article>
				<article>
					<div class="data">
						<nuxt-link  to="/rcp/video/video7/_SevenVideo"><span>Pincha Aqui ▶ </span>
						<span>Video Ejemplo 🎥</span></nuxt-link>
					</div>
					<h4>
						COMIENZA EL MASAJE CARDÍACO
					</h4>
					<p>
            <nuxt-link to="/rcp/article7/_ArticleSeven">
						COMIENZA EL MASAJE CARDÍACO.  Coloca el talón de la otra mano sobre la primera.
						entralazando los dedos. Mantén los brazos rectos sin doblar los codos, lo más vertical posible.
						[…]</nuxt-link>
					</p> 
				</article>
				<article>
					<div class="data">
					<nuxt-link  to="/rcp/video/video8/_EightVideo">	<span>Pincha Aqui ▶</span>
						<span>Video Ejemplo 🎥</span></nuxt-link>
					</div>
					<h4>
						COLOCA EL DEA
					</h4>
					<p>
            <nuxt-link to="/rcp/article8/_EightArticle">
						COLOCA EL DEA. En cuanto dispongas de un DEA, úsalo. Mientras una persona
						Continúa con el masaje cardíaco, otra coloca los parches sobre el pecho desnudo
						[…]</nuxt-link>
					</p>
				</article>
				<article>
					<div class="data">
						<nuxt-link  to="/rcp/video/video9/_NineVideo"><span>Pincha Aqui ▶</span>
						<span>Video Ejemplo 🎥</span></nuxt-link>
					</div>
					<h4>
						NO DETENGAS LA RCP
					</h4>
					<p>
            <nuxt-link to="/rcp/article9/_NineArticle">
					NO DETENGAS LA RCP. Continúa la RCP sin parar hasta que: <br>
					-Un profesional sanitario te indique que pares, ó la víctima se recupere
          </nuxt-link>
					</p>
				</article>
				<article id="blog">
					<a href="">Ir a todos los vídeos</a>
				</article>

			</section>

		</div>
	</div>
	<!-- PIE DE PAGINA -->
  <div class="clearfix"></div>

  <footer id="footer-end">
    <div class="wrap">

      <div id="menu_footer">
				<h5>AUTOR</h5>
				<p>&copy; Jairo Herrera Quintero</p>

				</div>
				</div>
				</footer>



</div>

</template>

<script>



export default {
  head: {
    title: "RCP + INFORMACIÓN"
  },
  meta: [
    {hid: "description", name: "description", content: "Esta es la sección donde se obtienen las pautas a seguir en una RCP con información sencilla"}
  ],
  components: {
    
  },
  render() {
    return {

    }
}
}
</script>
	
<style >

 
 * 
 * 
 *
 :root {
  --blueDark: #29235c;
  --blue: #007bff;
  --indigo: #e8532b;
  --purple: #e8532b;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --naranjita: #f3c52a;
  --blueSuper: #2b598f;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }

*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

html {
  font-family:'Roboto Mono', monospace;;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block; }

body {
  margin: 0;
  font-family: 'Roboto Mono', monospace;  
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff; }

[tabindex="-1"]:focus {
  outline: 0 !important; }

hr {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
  overflow: visible; }

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem; }






small {
  font-size: 80%; }

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline; }

sub {
  bottom: -.25em; }

sup {
  top: -.5em; }

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent; }
  a:hover {
    color: #0056b3;
    text-decoration: underline; }

a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none; }
  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none; }
  a:not([href]):not([tabindex]):focus {
    outline: 0; }

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em; }

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto; }

figure {
  margin: 0 0 1rem; }

img {
  vertical-align: middle;
  border-style: none; }

svg {
  overflow: hidden;
  vertical-align: middle; }

table {
  border-collapse: collapse; }

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom; }

th {
  text-align: inherit; }

label {
  display: inline-block;
  margin-bottom: 0.5rem; }

button {
  border-radius: 0; }

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color; }

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit; }

button,
input {
  overflow: visible; }

button,
select {
  text-transform: none; }

select {
  word-wrap: normal; }

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; }

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer; }

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none; }

input[type="radio"],
input[type="checkbox"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0; }

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox; }

textarea {
  overflow: auto;
  resize: vertical; }

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0; }

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal; }

progress {
  vertical-align: baseline; }

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto; }

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none; }

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button; }

output {
  display: inline-block; }

summary {
  display: list-item;
  cursor: pointer; }

template {
  display: none; }

[hidden] {
  display: none !important; }

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2; }

h1, .h1 {
  font-size: 2.5rem; }

h2, .h2 {
  font-size: 2rem; }

h3, .h3 {
  font-size: 1.75rem; }

h4, .h4 {
  font-size: 1.5rem; }

h5, .h5 {
  font-size: 1.25rem; }

h6, .h6 {
  font-size: 1rem; }

.lead {
  font-size: 1.25rem;
  font-weight: 300; }

.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; }

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }

.navbar-btn {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none !important;
  border: none; }

.wrapper {
  width: 100%; }

#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #e8532b;
  color: #fff;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  position: sticky; }
  #sidebar .h6 {
    color: #fff; }
  #sidebar.active {
    margin-left: -250px; }
    #sidebar.active .custom-menu {
      margin-right: -50px; }
  #sidebar h1 {
    margin-bottom: 20px;
    font-weight: 700; }
    #sidebar h1 .logo {
      color: #fff; }
  #sidebar ul.components {
    padding: 0; }
  #sidebar ul li {
    font-size: 16px; }
    #sidebar ul li > ul {
      margin-left: 10px; }
      #sidebar ul li > ul li {
        font-size: 14px; }
    #sidebar ul li a {
      padding: 10px 0;
      display: block;
      color: rgba(255, 255, 255, 0.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
      #sidebar ul li a:hover {
        color: #fff; }
    #sidebar ul li.active > a {
      background: transparent;
      color: #fff; }
  @media (max-width: 991.98px) {
    #sidebar {
      margin-left: -250px; }
      #sidebar.active {
        margin-left: 0; }
      #sidebar .custom-menu {
        margin-right: -50px !important;
        top: 10px !important; } }
  #sidebar .custom-menu {
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 0;
    margin-right: -20px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s; }
    @media (prefers-reduced-motion: reduce) {
      #sidebar .custom-menu {
        -webkit-transition: none;
        -o-transition: none;
        transition: none; } }
    #sidebar .custom-menu .btn {
      width: 40px;
      height: 40px;
      border-radius: 50%; }
      #sidebar .custom-menu .btn.btn-primary {
        background: #e8532b;
        border-color: #f1e6b4; }
        #sidebar .custom-menu .btn.btn-primary:hover, #sidebar .custom-menu .btn.btn-primary:focus {
          background: #2b598f !important;
          border-color: #2b598f !important; }

a[data-toggle="collapse"] {
  position: relative; }

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%); }

@media (max-width: 991.98px) {
  #sidebarCollapse span {
    display: none; } }

#content {
  width: 100%;
  padding: 0;
  min-height: 100vh;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s; }

.btn.btn-primary {
  background: #866ec7;
  border-color: #866ec7; }
  .btn.btn-primary:hover, .btn.btn-primary:focus {
    background: #866ec7 !important;
    border-color: #866ec7 !important; }

.footer p {
  color: linear-gradient(to top, #30cfd0 0%, #330867 100%); }
#content #articles img{
  width: 100%;
  border: 3px solid #f3c52a;
}

/* ARTICLES --- */
#articles h2{
  display: block;
  width: 100%;
  height: 75px;
  line-height: 75px;
  text-align: center;
  font-family: "BebasNeue";
  font-size: 35px;
  font-weight: normal;
  letter-spacing: 2px;
  background: url('~assets/img/pxgray.png'), white;
  box-shadow: 0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f;
  margin: 0px auto;
  margin-top: 20px;
  margin-bottom: 15px;
}
#articles article{
  width: 97%;
  height: auto;
  border: 1px solid #ccc;
  margin: 40px auto;
  padding-left: 10px;
  font-family: 'Roboto Mono', monospace;
    background: linear-gradient(to right, #f83600 0%, #f9d423 100%);
  color: #fff;
  box-shadow: 1px 1px 2px #ddd;
}
#articles article:hover{
  background: #fff;
  color: #e8532b;
}

#articles article h4{
  display: block;
  font-size: 23px;
  margin: 3px;
  text-align: center;
  color: #fff;
}
#articles article h4:hover{
  color: #e8532b;
}

#articles article h4 a{
  color: #fff;

}
#articles article h4 a:hover{
  color: #e8532b;
}

#articles .data{
  float: right;
  background: #e8532b;
  color: #fff;
  height: 30px;
  line-height: -10px;
  padding: 4px;
  font-size: 13px;
  border-radius: 0px 0px 0px 5px;
}
#articles .data:hover{
  cursor: pointer;
  color: #f3c52a;
  background: #29235c;
}
#articles .data span{
  margin: 5px;
  color: black;
}
#articles .data span:hover{
  font-size: 16px;
  color: #fff;
}
#articles .data span a{
  color: #fff;
}
#articles .data span a:hover{
  color: #fff;
}
#articles article p:hover{
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 23px;
  color: #e8532b;
  background: #fff;
}
#articles article a{
  color: #fff;
}
#articles article a:hover{
  color: #29235c;
}
#blog{
  height: 100px;
  margin-top: 60px;
  line-height: 100px;
  text-align: center;
  font-family: "BebasNeue";
  transition: all 1s;
}
#blog a{
  display: block;
  font-family: "BebasNeue";
  font-size: 40px;
  letter-spacing: 3px;
  color: #00538c;
  text-decoration: none;
  transition: all 1s;
}
#blog:hover{
  background: #333;
  border: 10px solid #37bcf9;
  border-radius: 240px;
  box-shadow: 0px 0px 10px gray;
  animation: blink 10s infinite linear;
}
#blog:hover a{
  color: #fff;
  text-shadow: 1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black;
}
@keyframes blink {
  0%{
    border: 10px solid var(--orange);
  }
  25%{
    border: 10px solid var(--blueSuper);
  }
  50%{
    border: 10px solid orangered;
  }
  75%{
    border: 10px solid var(--blue);
  }
  100%{
    border: 10px solid var(--orange);
  }
}
.clearfix{
  clear: both;
}

#footer-end{
  display:block;
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply;;
  color: white;
  overflow: hidden;
}


#footer-end h5{
  display: block;
  background: url('~assets/img/pxgray.png');
  letter-spacing: 2px;
  text-align: center;
  font-family: "BebasNeue";
  font-size: 10px;
  line-height: 18px;
  color: white;
  border-radius: 5px;
}
#footer-end p{
  text-align: center;
}



</style>