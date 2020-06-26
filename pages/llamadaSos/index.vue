<template>
  <div class="container">
<div class="row">
<div id='bodybox'>
<center><img src="~/assets/img/prote.jpg" >
<img src="~/assets/img/policia-nacional-placa.png" >
<img src="~/assets/img/policia-local-placa.png" >
<img src="~/assets/img/guardia-civil-placa.png" >
<img src="~/assets/img/cpb-placa.png" >

</center>
  <div id='chatborder'>
    <p id="chatlog7" class="chatlog">&nbsp;</p>
    <p id="chatlog6" class="chatlog">&nbsp;</p>
    <p id="chatlog5" class="chatlog">&nbsp;</p>
    <p id="chatlog4" class="chatlog">&nbsp;</p>
    <p id="chatlog3" class="chatlog">&nbsp;</p>
    <p id="chatlog2" class="chatlog">&nbsp;</p>
    <p id="chatlog1" class="chatlog">&nbsp;</p>
    <input type="text" name="chat" id="chatbox" placeholder="¿Hola que problema tienes? Escribenos aqui..." onfocus="placeHolder()">
  </div>
  
  <div class="p-civil-p"><h2><span style="color: #e8532b">Protección</span> <span style="color: #29235c">Civil</span> <span style="color: #e8532b">Asistente</span></h2></div>
  
</div>

</div>
  
<buttonEnd/>

  </div>

    

</template>

<script>
import buttonEnd from '~/components/buttonEnd.vue'


export default {
 head: {
    title: "LLAMADA A DISTINTOS CUERPOS DE SEGURIDAD"
  },
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Esta es la sección donde se puede hacer una llamada emergencia a distintos cuerpos y fuerzas de seguridad"
    }
  ],
  components: {
   buttonEnd
  },
}
</script>

<style scoped>
.container {
 display:contents;
}

body {
  font-family: 'Suez One', serif;
  font-size: 15px;
  background-color: #d9d9d9;
  padding-top: 0px;
  padding-bottom: 0px;
}

#bodybox {
  margin: auto;
  max-width: 550px;
  width: 100%;
  height: 580px;
  font-family: 'Suez One', serif;
  font-size: 10px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  padding-top: 20px;
  padding-bottom: 25px;
  padding-right: 25px;
  padding-left: 25px;
  box-shadow: 5px 5px 5px grey;
  border-radius: 5px;
}
#bodybox img {
  text-align: center;
  justify-content: center;
  width: 12%;
}

#chatborder {
  border-style: solid;
  background-color: #f6f9f6;
  border-width: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 1px;
  padding-bottom: 2px;
  padding-right: 20px;
  padding-left: 15px;
  border-radius: 15px;
  overflow:hidden;
}
.p-civil-p{
  overflow:hidden;
  width: 100%;
  height: 100px;
}

.chatlog {
   font-family:cursive;
   font-size: 15px;
   text-align: start;
   color: #e8532b;
   overflow: hidden;
}

#chatbox {
  font: 22px arial, sans-serif;
  height: 50px;
  width: 100%;
}

h1 {
  margin: auto;
}
h2 {
  justify-content:initial;
  text-align: center;
  position:sticky;
}

pre {
  background-color: #f0f0f0;
  margin-left: 20px;
}
</style>