<template>
  <div class="app">
    
    <inicio/>
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
</style>
