<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Suez One', serif;
  color: orangered;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
header{
  padding: 0px 0;
  margin: 0px 0;
  background: #29235c;
  color: #29235c;
  font-family: 'Suez One', serif;
}
.principal{
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

.container{
  background: #e8532b;
}
input{
  color: #f3c52a;
  background: #29235c;
  font-family: 'Suez One', serif;
}
input:hover{
  color: #e8532b;
  background: #fff;
}
ul{
  justify-content: left;
  justify-items: left;
  list-style: none;
  font-family: 'Suez One', serif;
}

ul input{
  color: #fff;
  background: #29235c;
  cursor: pointer;
  margin: 3px;
  font-family: 'Suez One', serif;
}
ul input:hover{
  color:#29235c ;
  background: #f3c52a
}

.texto{
  font-family: 'Suez One', serif;
  text-align: center;
}
h1{
  font-size: 32px;
  font-family: 'Suez One', serif;
  text-align: center;
}
p{
  font-size: 18px;
  font-family: 'Suez One', serif;
  text-align: center;
}
h3{
  font-size: 15px;
  font-family: 'Suez One', serif;
  text-align: left;
}
img{
  width:50%;
  justify-content: center;
  align-content: center;
}
</style>
