<template>
  <div class="container">
    <div>
      <h1>NUESTRAS FUNCIONES</h1>
      <h2 class="subtitlo">
        <!-- Div clase corazon contiene el caracter de un corazón-->
      </h2>
      <h3>
        <br />
        <br />
      </h3>
      <img
        class="functiones"
        style="-webkit-user-select: none;margin: auto;"
        src="http://www.proteccioncivil.es/documents/20486/156627/Funciones+Protecci%C3%B3n+Civil/6014da14-af63-420c-83cd-0bfb47e445af?version=1.0&amp;t=1322479388213"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>


<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
}
.title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
h1 {
  font-family: fantasy;
  color: #000;
  font-size: 2em;
}
.functiones {
  width: 100%;
  height: 60vh;
}
</style>