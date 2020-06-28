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
      <img src="~/assets/img/AVISO-LEGAL.png" class="img-fluid" alt="Responsive image">
      <strong><h1>Aviso legal</h1> </strong> <hr>
      
      <h2 class="subtitlo">
        : :
      </h2>
      <h3>- <p>Este es un dominio en Internet de la titularidad de La Dirección General de Protección Civil y Emergencias..</p><br> <br>
      <p>Se prohíbe la reproducción total o parcial de los contenidos de esta Web sin citar su origen o solicitar autorización, salvo en las páginas en las que se indica expresamente otra circunstancia.</p><br> <br>
      La información contenida en esta Web procede de fuentes públicas. La Dirección General de Protección Civil y Emergencias no se hace responsable de los daños y perjuicios que pudiera ocasionar la utilización de las herramientas e informaciones contenidas en la web en relación con la adopción de decisiones sobre el inicio, desarrollo o resultado de procedimientos administrativos. Tales decisiones deben ser contrastadas en los centros, organismos o dependencias competentes.<br> <br>
      En cualquier caso, la información y contenidos de esta Web no podrán ser alegados en procesos contradictorios con la Administración Pública, no asumiendo responsabilidad alguna por las discrepancias que pudiesen existir entre los documentos impresos de la Administración competente y la publicación electrónica en estas páginas. <br> <br>
      Los ficheros de datos solicitados en los servicios de buzones y suscripciones de esta Web no contienen datos personales, 
      ni el usuario debe proporcionarlos para utilizar las funcionalidades y herramientas puestas a disposición. La Dirección General de Protección Civil y Emergencias no se responsabiliza de las contestaciones que se realicen a través de las distintas direcciones de correo electrónico que aparecen en estas páginas, salvo la del propio departamento. La información obtenida a través de los buzones contenidos en estas páginas tiene carácter meramente informativo, sin que en ningún caso pueda derivarse de ella efecto jurídico vinculante alguno (Real Decreto 208/1996, art. 4 b . BOE n. 55 de 4/3/1996)<p><br> <br> 
      <p><strong>Aviso legal para la modalidad general de puesta a disposición de los documentos reutilizables</strong> <br> <br> <hr> <p>
       <p><strong>Obligatoriedad de las condiciones generales ¿te encuentras bien?</strong><br><br> <p>
       Las presentes condiciones generales, disponibles con carácter permanente bajo <a href=https://datos.gob.es/avisolegal>www.datos.gob.es/avisolegal</a> vincularán a cualquier agente reutilizador por el mero hecho de hacer uso de los documentos sometidos a ellas.
      <p><strong>Autorización de reutilización y cesión no exclusiva de derechos de propiedad intelectual.</strong> <br> <br> <p>
      Las presentes condiciones generales permiten la reutilización de los documentos sometidos a ellas para fines comerciales y no comerciales. 
      Se entiende por reutilización el uso de documentos que obran en poder de los órganos de la Administración General del Estado y los demás organismos y entidades del sector público estatal referidos en el artículo 1.2 del Real Decreto 1495/2011, de 24 de octubre, 
      por el que se desarrolla la Ley 37/2007, de 16 de noviembre, 
      sobre reutilización de la información del sector público estatal, 
      por personas físicas o jurídicas, con fines comerciales o no comerciales, 
      siempre que dicho uso no constituya una actividad administrativa pública. 
      La reutilización autorizada incluye, a modo ilustrativo, actividades como la copia, difusión, modificación, adaptación, extracción, reordenación y combinación de la información. <br> <br>
      El concepto de documento es el establecido en el apartado 2 del artículo 3 de la Ley 37/2007, de 16 de noviembre, sobre reutilización de la información del sector público, 
por lo que comprende toda información cualquiera que sea su soporte material o electrónico así como su forma de expresión gráfica, 
sonora o en imagen utilizada, incluyendo, en consecuencia, también los datos en sus niveles más desagregados o "en bruto". <br> <br>
Esta autorización conlleva, asimismo, la cesión gratuita y no exclusiva de los derechos de propiedad intelectual,
 en su caso, correspondientes a tales documentos, autorizándose la realización de actividades de reproducción, 
distribución, comunicación pública o transformación, necesarias para desarrollar la actividad de reutilización autorizada, 
en cualquier modalidad y bajo cualquier formato, para todo el mundo y por el plazo máximo permitido por la Ley.<br> <br>
    <p><strong>Condiciones generales para la reutilización </strong> <br> <br> <p>
    Son de aplicación las siguientes condiciones generales para la reutilización de los documentos sometidos a ellas: <br> <br>
    1. Está prohibido desnaturalizar el sentido de la información. <br>
    2. Debe citarse la fuente de los documentos objeto de la reutilización. Esta cita podrá realizarse de la siguiente manera: "Origen de los datos: Dirección General de Protección Civil y Emergencias.<br>
    3. Debe mencionarse la fecha de la última actualización de los documentos objeto de la reutilización, siempre cuando estuviera incluida en el documento original.<br>
    4. No se podrá indicar, insinuar o sugerir que la Dirección General de Protección Civil y Emergencias, titular de la información reutilizada participa, patrocina o apoya la reutilización que se lleve a cabo con ella.<br>
    5. Deben conservarse, no alterarse ni suprimirse los metadatos sobre la fecha de actualización y las condiciones de reutilización aplicables incluidos, en su caso, en el documento puesto a disposición para su reutilización.<br>
     <p> <strong> Exclusión de responsabilidad </strong> <br> <br> </p>
      <p>La utilización de los conjuntos de datos se realizará por parte de los usuarios o agentes de la reutilización bajo su propia cuenta y riesgo, correspondiéndoles en exclusiva a ellos responder frente a terceros por daños que pudieran derivarse de ella. <br> <br>
      La Dirección General de Protección Civil y Emergencias no será responsable del uso que de su información hagan los agentes reutilizadores ni tampoco de los daños sufridos o pérdidas económicas que, de forma directa o indirecta, produzcan o puedan producir perjuicios económicos, materiales o sobre datos, provocados por el uso de la información reutilizada. <br> <br>
      La Dirección General de Protección Civil y Emergencias no garantiza la continuidad en la puesta a disposición de los documentos reutilizables, ni en contenido ni en forma, ni asume responsabilidades por cualquier error u omisión contenido en ellos. </p><br> <br>
     <p> <strong> Responsabilidad del agente reutilizador </strong> <br> <br> </p>
      <p>El agente reutilizador se halla sometido a la normativa aplicable en materia de reutilización de la información del sector público, incluyendo el régimen sancionador previsto en el artículo 11 de la Ley 37/2007, de 16 de noviembre, sobre reutilización de la información del sector público. </p>
      
      </h3>
    
    </div>   
    
</div>
  
</template>

<script>


export default {
  layout: 'legal',
  components: {
    
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>