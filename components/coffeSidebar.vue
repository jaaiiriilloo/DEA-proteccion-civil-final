<template>
    <div>

<div>
<h1>Me gusta pagar por los servicios que uso y, 
  mediante pequeñas contribuciones, hacerlos míos. 
  Este podría ser el caso de tu relación con Protección Civil. Si te gusta el proyecto,
   invítame a un café para seguir trabajando en mas proyectos. Muchas Gracias!! :)

¡Gracias por tu apoyo!</h1>
<p id="choosen-paymenttype">Tarjetas De Credito</p>
<ul class="payment-types">
  <li class="paymenttype pp unselected-left">
    <div class="box">
    <header>
      <div class="card" id="pp-card">
        <div class="flipper">
          <div class="front">
            <div class="shine"></div>
            <div class="shadow"></div>
            <div class="card-bg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/pp-front-bg.png" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <form>
      <div class="form-content">
        <p><strong>Acerca de</strong></p>
 <p>Esta es una pequeña demo de prueba de interfaz </p> 
      <ul>
        <li>Una forma rápida y fácil de completar los campos de formulario requeridos</li>
        <li>Pantalla de teclado compatible con dispositivos móviles</li>
        <li>Desactivar la corrección automática y la corrección ortográfica de los nombres </li>
        <li>Evite los campos desplegables para una mejor experiencia de usuario</li>
      </ul>     
      </div>
    </form>
    </div>
  </li>
  <li class="paymenttype selected cc">
    <div class="box">
    <header>
      <div class="card" id="cc-card">
        <div class="flipper">
          <div class="front">
            <div class="shine"></div>
            <div class="shadow"></div>
            <div class="card-bg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/cc-front-bg.png" />
            </div>
            <div class="card-content">
              <div class="credit-card-type"></div>
              <div class="card-number">
                <span>1234 1234 1234 1234</span>
                <span>1234 1234 1234 1234</span>
              </div>
              <div class="card-holder">
                <em>Titular de la Tarjeta</em>
                <span>Tu Nombre</span>
                <span>Tu Nombre</span>
              </div>
              <div class="validuntil">
                <em>Expira</em>
                <div class="e-month">
                    <span>
                      MES
                    </span>
                    <span>
                      AÑO
                    </span>
                </div>
                <div class="e-divider">
                     <span>
                      /
                    </span>
                    <span>
                      /
                    </span>
                </div>
                <div class="e-year">
                    <span>
                      AÑO
                    </span>
                    <span>
                      AÑO
                    </span>
                </div>
                
              </div>
            </div>
          </div>

          <div class="back">
            <div class="shine"></div>
            <div class="shadow"></div>
            <div class="card-bg">
             <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/cc-back-bg-new.png" />
            </div>
            <div class="ccv">
              <em>CCV Numero</em>
              <strong></strong>
            </div>
            <div class="card-content">
              <div class="card-number">
                <span>4111 1111 1111 1111</span>
                <span>4111 1111 1111 1111</span>
              </div>
              <div class="card-holder">
                <span>Tu Nombre</span>
                <span>Tu Nombre</span>
              </div>
              <div class="validuntil">
                <span>
                  <strong class="e-month">Mes</strong> /                 <strong class="e-year">Año</strong>
                </span>
                <span>
                  <strong class="e-month">Mes</strong> /
                  <strong class="e-year">Año</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <form>
      <div class="form-content">
        <div class="field">
          <input type="tel" id="cardnumber" maxlength="20" />
          <span class="focus-bar"></span>
          <label for="cardnumber">Número Tarjeta</label>
        </div>
        <div class="field">
          <input type="text" autocorrect="off" spellcheck="false" id="cardholder" maxlength="25" />
          <span class="focus-bar"></span>
          <label for="cardholder">Titular de la Tarjeta (Nombre en la Tarjeta)</label>
        </div>
        <div class="field-group">
          <div class="col-50">
            <label for="expires-month">Expira (Valido hasta)</label>   
            <div class="field expire-date">
              <div>
                <input type="tel" id="expires-month" placeholder="MM" allowed-pattern="[0-9]" maxlength="2">
                <span class="focus-bar"></span>
              </div>
              <div class="divider">/</div>
              <div>
                <input type="tel" id="expires-year" placeholder="YY" allowed-pattern="[0-9]" maxlength="2">
                <span class="focus-bar"></span>
              </div>
            </div>
          </div>
          <div class="col-50">
            <div class="field ccv">
              <input type="tel" id="ccv" autocomplete="off" maxlength="3" />
              <span class="focus-bar"></span>
              <label for="ccv">CCV</label>
            </div>
          </div>
        </div>
        <button><span></span></button>
      </div>
    </form>
    </div>
  </li>
  <li class="paymenttype ec unselected-right">
    <div class="box">
    <header>
      <div class="card" id="ec-card">
        <div class="flipper">
          <div class="front">
            <div class="shine"></div>
            <div class="shadow"></div>
            <div class="card-bg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/ec-front-bg.png" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <form>
      <div class="form-content">
        <p><strong>Esto es una Demo</strong></p>
       <p>No es un código completo ni optimizado. En CSS está jugando con text-shadow, transformaciones, transiciones y algunas animaciones. Algunos JavaScript codificados rápidamente para manejar las interacciones requeridas. De todos modos, podría ser una inspiración o un punto de partida.</p>
        
      </div>
    </form>
     </div>
  </li>
</ul>


    </div>



      </div>


</template>

<script>
export default {

}
</script>

<style>


html, body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: 'Open sans', sans-serif;
  padding-bottom: 50px;
}
body:after {
  content: '';
  position: fixed;
  left: 0;
  top: 0;
  z-index: -2;
  opacity: .2;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
body:before {
  content: '';
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  opacity: .2;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
}
body.cc-bg {
  background: linear-gradient(45deg, #cb60b3 0%, #71117d 50%, #39296b 100%);
}
body.cc-bg:after {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/bg-cc-form.jpg);
}
body.ec-bg {
  background: linear-gradient(45deg, #a3caeb 0%, #528ec4 50%, #01578a 100%);
}
body.ec-bg:after {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/world.png);
  opacity: .1;
  background-size: auto;
  background-position: center center;
}
body.pp-bg {
  background: linear-gradient(45deg, #fff 0%, #cfcfcf 80%, #aaa 100%);
}
body.pp-bg:after {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/bg-pp.png);
  background-repeat: repeat;
  background-size: auto;
  opacity: .7;
}
body.pp-bg h1, body.pp-bg #choosen-paymenttype {
  color: #000;
}

h1 {
  font-weight: 100;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1;
  text-align: center;
  font-size: 16px;
  margin: 20px 0 5px 0;
}

#choosen-paymenttype {
  text-align: center;
  color: #fff;
  margin: 0;
  font-size: 12px;
}

ul.payment-types {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul.payment-types li.paymenttype {
  margin-bottom: 30px;
}

.unselected-left:hover .shadow,
.unselected-right:hover .shadow {
  box-shadow: 0 25px 40px rgba(14, 21, 47, 0.4), 0 8px 20px rgba(14, 21, 47, 0.4);
}

.selected form {
  max-height: 800px !important;
  opacity: 1;
}

@media only screen and (min-width: 1080px) {
  ul.payment-types {
    width: 1040px;
    min-height: 600px;
    margin: 0 auto;
    position: relative;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }

  li.paymenttype {
    position: absolute;
    width: 300px;
    transition: transform .5s ease-in;
  }
  li.paymenttype.selected {
    width: 440px;
  }

  .unselected-left .box,
  .unselected-right .box {
    transform: scale(0.75);
  }
  .unselected-left .card,
  .unselected-right .card {
    cursor: pointer;
  }

  .cc.selected {
    transform: translate3d(300px, 0, 0);
  }

  .cc.unselected-left {
    transform: translate3d(0, 0, 0);
  }

  .cc.unselected-right {
    transform: translate3d(740px, 0, 0);
  }

  .pp.selected {
    transform: translate3d(300px, 0, 0);
  }

  .pp.unselected-left {
    transform: translate3d(0, 0, 0);
  }

  .pp.unselected-right {
    transform: translate3d(740px, 0, 0);
  }

  .ec.selected {
    transform: translateX(300px);
  }

  .ec.unselected-right {
    transform: translate3d(740px, 0, 0);
  }

  .ec.unselected-left {
    transform: translate3d(0, 0, 0);
  }
}
header {
  position: relative;
  height: 200px;
}

.card {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
  width: 300px;
  height: 188px;
  border-radius: 16px;
  perspective: 1000px;
  transition: transform .5s ease-in;
  z-index: 5;
}
.card .shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%);
  z-index: 5;
}
.card .card-bg {
  z-index: 2;
}
.card .shadow {
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: 100%;
  transition: all 0.2s ease-out;
  box-shadow: 0 8px 30px rgba(14, 21, 47, 0.6);
  z-index: 1;
  border-radius: 16px;
}
.card .flipper {
  transition: 0.75s;
  transform-style: preserve-3d;
  position: relative;
  width: 300px;
  height: 188px;
}
.card.flipped .flipper {
  transform: rotateY(180deg);
}
.card .front,
.card .back,
.card .card-bg,
.card .card-content {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  position: absolute;
}
.card .card-content {
  text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.3), 1px 1px 0px rgba(0, 0, 0, 0.5);
  color: #b0b0b0;
  font-family: 'Droid Serif', serif;
  z-index: 4;
}
.card .card-content span {
  left: 0;
  top: 0;
  display: block;
  position: absolute;
  width: 100%;
  overflow: hidden;
  color: #7a1a86;
  padding-left: 2px;
  white-space: nowrap;
}
.card .card-content span + span {
  color: #a545b1;
  height: 7px;
  overflow: hidden;
}
.card .card-content strong {
  font-weight: normal;
}
.card .card-content em {
  text-transform: uppercase;
  position: absolute;
  font-style: normal;
  font-size: 9px !important;
  text-shadow: none;
  font-family: Open sans, sans-serif;
  color: rgba(255, 255, 255, 0.6);
}
.card .card-content .glow {
  animation: glow .5s;
}
.card .front,
.card .back {
  backface-visibility: hidden;
  box-shadow: 0 4px 8px rgba(10, 10, 10, 0.25);
  border-radius: 16px;
}
.card .front {
  z-index: 2;
  transform: rotateY(0deg);
}
.card .back {
  z-index: 1;
  transform: rotateY(180deg);
}
.card .back .card-content {
  opacity: .7;
  text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.5), 1px 1px 0px rgba(255, 255, 255, 0.3);
  transform: rotateY(180deg);
}
.card .back .card-content span + span {
  color: transparent;
}
.card .ccv {
  position: absolute;
  right: 15px;
  height: 20px;
  width: 30px;
  top: 52px;
  font-size: 14px;
}
.card .ccv strong {
  font-weight: normal;
  font-style: italic;
}
.card .ccv em {
  position: absolute;
  white-space: nowrap;
  font-size: 8px;
  left: -60px;
}
.card .credit-card-type {
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  width: 50px;
  height: 30px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0);
  border-width: 2px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
.card .credit-card-type.amex {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/amex.svg);
  background-color: #fff;
}
.card .credit-card-type.visa {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/visa.svg);
  background-color: #fff;
}
.card .credit-card-type.mastercard {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/mastercard.svg);
  background-color: #fff;
}
.card .card-number {
  position: absolute;
  width: 240px;
  top: 100px;
  left: 30px;
  font-size: 21px;
  height: 21px;
  font-family: courier;
  text-align: justify;
}
.card .card-holder {
  text-transform: uppercase;
  position: absolute;
  width: 240px;
  top: 160px;
  left: 20px;
  font-size: 14px;
  font-weight: 100;
  height: 30px;
}
.card .card-holder em {
  top: -16px;
}
.card .card-holder span {
  letter-spacing: 1px;
}
.card .card-holder span + span {
  height: 4px;
}
.card .validuntil {
  font-family: courier;
  position: absolute;
  top: 128px;
  left: 150px;
  font-size: 16px;
  height: 16px;
  width: 120px;
  white-space: nowrap;
  font-family: courier;
}
.card .validuntil em {
  top: 3px;
  left: -36px;
}
.card .validuntil .e-month,
.card .validuntil .e-divider,
.card .validuntil .e-year {
  letter-spacing: 1px;
  display: inline-block;
  position: relative;
  margin: 0 1px;
}
.card .validuntil .e-month span,
.card .validuntil .e-divider span,
.card .validuntil .e-year span {
  position: relative;
}
.card .validuntil .e-month span + span,
.card .validuntil .e-divider span + span,
.card .validuntil .e-year span + span {
  position: absolute;
  height: 5px;
}

.card-bg img {
  border-radius: 12px;
}

form {
  margin: 0 auto;
  max-width: 400px;
  min-width: 320px;
  border-top: 0;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: opacity, max-height .5s ease-in;
}
form ul {
  list-style-type: square;
  margin: 0;
  padding: 0 40px 0 20px;
}
form p, form li {
  line-height: 1.3;
  font-size: 14px;
}
form li {
  margin-bottom: 12px;
}
form .form-content {
  border: 1px solid #ccc;
  padding: 70px 20px 20px 20px;
  background: #e4e4e4;
  min-height: 400px;
}
form label {
  display: block;
  margin-bottom: 5px;
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  color: #666;
  position: relative;
}
form .field label {
  top: -50px;
}
form .field-group,
form .field {
  margin-bottom: 20px;
  position: relative;
}
form .field {
  padding-top: 17px;
}
form .field-group:after,
form .field-group:before {
  content: '';
  display: table;
  clear: both;
}
form .focus-bar {
  display: block;
  width: 100%;
  height: 2px;
  margin-top: -1px;
  z-index: 2;
  pointer-events: none;
  position: relative;
}
form .focus-bar:before, form .focus-bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #e19d3c;
  transition: 0.2s ease all;
}
form .focus-bar:before {
  left: 50%;
}
form .focus-bar:after {
  right: 50%;
}
form input {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #CCC;
  position: relative;
  height: 32px;
}
form input:focus {
  outline: none;
}
form input:focus + .focus-bar:before, form input:focus + .focus-bar:after {
  width: 50%;
}
form input:focus + .focus-bar + label, form input:focus + .focus-bar + label {
  color: #ccc;
}
form .expire-date {
  padding-top: 0;
}
form .expire-date input {
  width: 50px;
}
form .expire-date div {
  float: left;
}
form .expire-date .divider {
  padding: 0 5px;
  line-height: 32px;
  color: #ccc;
  user-select: none;
}
form .ccv {
  width: 80px;
  float: right;
}
form ::selection {
  background: rgba(253, 218, 134, 0.6);
}
form ::-moz-selection {
  background: rgba(253, 218, 134, 0.6);
}
form button {
  position: relative;
  overflow: hidden;
  padding: 10px;
  display: block;
  width: 80%;
  background: linear-gradient(#fdda86 0px, #e19d3c 100%);
  color: #fff;
  font-size: 14px;
  border: 1px solid #e19d3c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  margin: -20px auto 10px auto;
  transition: 0.75s ease border-color;
}
form button span {
  position: relative;
  z-index: 2;
}
form button:after {
  transform: translate(-50%, -50%);
  content: '';
  background: #e19d3c;
  width: 0px;
  height: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
}
form button:hover {
  background: #e19d3c;
}
form button:focus {
  outline: none;
  border-color: #b16a02;
}
form button:focus:after {
  animation: anim-out 0.75s;
  animation-fill-mode: forwards;
}

.col-50 {
  width: 50%;
  float: left;
}

@keyframes glow {
  0% {
    text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.3), 1px 1px 0px rgba(0, 0, 0, 0.5);
  }
  70% {
    color: rgba(255, 255, 255, 0.4);
    text-shadow: -1px 1px 8px #ffc, 1px -1px 8px rgba(255, 255, 255, 0.6);
  }
  100% {
    text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.3), 1px 1px 0px rgba(0, 0, 0, 0.5);
  }
}
@keyframes anim-out {
  0% {
    width: 0%;
    height: 0px;
  }
  100% {
    width: 200%;
    height: 300px;
  }
}


</style>