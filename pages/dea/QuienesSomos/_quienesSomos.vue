<template>
  <div class="principal">
    <div id="app">
  <header>
    <div class="container">
      <div class="row">
        <div class="col-xs-12"><strong @click="(menuStatus = !menuStatus)"><input class="firt" type="button" name="Menu" value="Menú"></strong></div>
        <transition name="fade">
          <nav class="row" v-if="menuStatus">
            <ul class="col-xs-6">
              <li><nuxt-link to="/"><input type="button"  name="Inicio" value="Ir al Inicio"></nuxt-link></li>
              <li><input type="button" onclick="history.back()" name="volver atrás" value="volver atrás"></li>
            </ul>
          </nav>
        </transition>
      </div>
    </div>
  </header>
</div>
    <div class="texto">
    <video controls="" poster="/documents/20486/156627/caratulaSPC/cf04040b-e2c6-4662-aec4-511ce767a525?t=1562327736220" style="width: 416px; height: 284px;" width="435"><source src="http://ficheros.proteccioncivil.es/Web/videos/ENPCSistema.mp4
" type="video/mp4">
      <source src="http://ficheros.proteccioncivil.es/Web/videos/ENPCSistema.mp4" type="video/mp4">
      </video>
      <strong><h1>¿Quiénes Somos?, Dirección General de Protección Civil y Emergencias.</h1> </strong> <hr>
      
      <h2 class="subtitlo">
        : :
      </h2>
      <h3>- <p>La Protección Civil es un servicio público esencial para el ciudadano, a quien sitúa en el centro de su acción pública, para contribuir de manera efectiva a su seguridad. </p><br> <br> 
      <p> Bienvenidos a la Dirección General de Protección Civil y Emergencias.</p> <br> <br>
      <p> La Protección Civil es un <strong>servicio público </strong> para el ciudadano, a quien sitúa en el centro de su acción pública, para contribuir de manera efectiva a su seguridad. </p>
      <p> Este es el objetivo que nos guía: <strong>proteger a las personas y bienes, </strong> ofreciendo una respuesta adecuada ante los distintos tipos de emergencias y catástrofes, ya estén originadas por causas naturales,
         o derivadas de la acción humana, de manera  accidental o intencionada. </p>

      <p> Por ello, resulta de vital importancia contar con un <strong>Sistema Nacional de Protección Civil </strong> que facilite las herramientas necesarias para que así sea. Y a ello contribuye la <a href="https://www.boe.es/boe/dias/2015/07/10/pdfs/BOE-A-2015-7730.pdf">Ley 17/2015 de 10 de julio",</a> una norma integradora que aglutina a todas las partes que tienen algo que aportar a la Protección Civil, desde los voluntarios, hasta los responsables políticos de todas las Administraciones y, en definitiva, de la sociedad en su conjunto, 
        cada vez más concienciada en los temas relacionados con la autoprotección </p>
        <strong> <p> Una Ley de consenso, que sitúa a España entre los países con un Sistema de Protección Civil más avanzado. </p> </strong>
        <p> Todos estamos implicados y todos somos necesarios. Garantizar una respuesta coordinada y eficiente a las emergencias, como señala la Ley, corresponde a las Administraciones Públicas  -la estatal, autonómica o local y también a los ciudadanos, a quienes se les reconoce derechos y deberes. Derecho a estar informados de las alertas y a participar en la elaboración de los Planes de los diversos riesgos a través de las Organizaciones de voluntariado y Asociaciones; y deberes, como el de cautela y autoprotección, 
          para evitar la generación de riesgos o exponerse a ellos. </p>
          <p> Contamos con unos pilares sólidos sobre los que construir nuestro Sistema Nacional de Protección Civil. </p>
          <p> Desde esta Dirección General de Protección Civil y Emergencias nos comprometemos a que así sea. <strong>Sirva esta página web para contribuir a crear una cultura de la prevención,
             a través de las informaciones que se publican, y promover la autoprotección. </strong></p>
      
      </h3>
    
    </div>   
    
</div>
  
</template>

<script>


export default {

  components: {
    layouts: 'legal'
  },
data(){
   
  return {
  menuStatus: false,
  }
  
 
}

}

</script>


<style>
.container {
  display: contents;
  margin: 0 auto;
  min-height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Suez One', serif;
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
body {
  font-size: 20px;
}

header strong {
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  -webkit-transition: 1s;
  transition: 1s;
}

.fade-enter, .fade-leave {
  opacity: 0;
}

.fade-enter-to, .fade-leave-to {
  opacity: 1;
}
p{
  text-align: left;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #000;
}

</style>