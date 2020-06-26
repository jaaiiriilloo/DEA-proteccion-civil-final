<template>
    <div>
<div id="phone-wrapper">
		<div id="app">
      
			<div id="landing" class="bg-dark text-light" style=""><i class="fab fa-2x fa-apple"></i>
			
      <span class="fas fa-3x fa-ambulance" style="color: red;"><br><span style="color: white;">ESTAMOS EN CAMINO</span></span>
				      <div class='loader'>
  <div class='circle'></div>
  <div class='circle'></div>
  <div class='circle'></div>
  <div class='circle'></div>
  <div class='circle'></div>
</div>
        <div class="loading">Loading&#8230;
    
        </div>
        <div>
					<h1 class="mt-3"><span style="color: white;">LLAMADA </span><span style="color: red;">112</span></h1>
				</div>
				<form id="form-start">
					<input type="text" name="username" id="username" value="" placeholder="Indica Tu nombre  " required>
					<button type="submit" id="start-chat">Empezar Chat</button>
				</form>
			</div>
			<div id="header" class="bg-dark">
				<div><button id="back-button" class="text-light btn-transparent btn-icon fas fa-arrow-left"></button></div>
				<div class="text-light align-center">
					<h2>Preparando tu Llamada al 112</h2>
				</div>
				<div>
					<button id="nav-icon" class="text-light btn-transparent btn-icon fas fa-bars"></button>
					<nav id="nav-container" style="display: none;">
						<ul class="nav">
							<li id="search" class="nav-link"><span class="fas fa-search"></span>Search</li>
							<li id="clear-history" class="nav-link"><span class="fas fa-trash-alt"></span>Clear history</li>
							<li id="theme" class="nav-link"><span class="fas fa-cogs"></span>Settings</li>
							<hr>
							<li id="sign-out" class="nav-link"><span class="fas fa-sign-out-alt"></span>Sign out</li>
						</ul>
					</nav>
				</div>
			</div>
			<div id="message-board">


			</div>
			<div id="form" class="bg-light">
				<div id="emoijis" style="display: none;">
					<button class="smiley btn-transparent btn-icon"><span class="far fa-grin-beam"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-grin"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-grin-wink"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-grin-tongue"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-grin-tongue-wink"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-kiss-wink-heart"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-grin-hearts"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-surprise"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-angry"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-tired"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-sad-tear"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-grin-squint-tears"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-sad-cry"></span></button>
					<button class="smiley btn-transparent btn-icon"><span class="far fa-dizzy"></span></button>
				</div>
				<div><button id="emoi" class="btn-transparent btn-icon far fa-grin"></button></div>
				<div id="message" placeholder="Type your message here" rows="1" contenteditable></div>
				<div><button id="send" type="" class="btn-transparent btn-icon fas fa-paper-plane"></button></div>
			</div>
		</div>
	</div>

      </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

html {
	font-family: Arial, sans-serif;
	font-size: 16px;
}

body {
	min-height: 100vh;
	background: #ffffff;
	background: -moz-linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
	background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(255, 255, 255, 1)), color-stop(47%, rgba(246, 246, 246, 1)), color-stop(100%, rgba(237, 237, 237, 1)));
	background: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
	background: -o-linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
	background: -ms-linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
	background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1);
}

h2,
h3 {
	margin: 0;
	padding: 0;
}


h2 {
	font-size: 1rem;
	font-weight: 400;
}

hr {
	margin: 15px 0;
}

.bg-dark {
	background: hsl(231, 50%, 50%);
}

.bg-light {
	background: hsla(231, 10%, 90%, 0.8);
}

.text-light {
	color: #f0f0f0;
}

.align-center {
	text-align: center;
}

/*** NAV ***/

nav#nav-container {
	background: #f0f0f0;
	padding: 15px;
	position: absolute;
	z-index: 1;
	right: 0;
	top: 0;
	box-sizing: border-box;
}

ul.nav {
	list-style: none;
	margin: 0;
	padding: 0;
}

.nav-link {
	padding: 2px 0;
	margin: 8px 0;
	font-size: .9rem;
	position: relative;
	padding-left: 40px;
}

.nav-link > span {
	margin-right: 10px;
	position: absolute;
	left: 0;
}


a,
button,
.link,
.nav-link {
	cursor: pointer;
}

.btn-transparent {
	border: 0;
	background: 0;
}

.btn-icon {
	font-size: 1.5rem;
	width: 100%;
}

/**************************/

/*** Display fake phone ***/

/**************************/

#phone-wrapper {
	margin: 50px auto;
	background: url("https://cdn.pixabay.com/photo/2017/06/17/10/39/cell-phone-2411808_960_720.png") 0 0;
	/*background: url("https://cdn.pixabay.com/photo/2017/06/17/10/39/cell-phone-2411808_960_720.png") -418px 0px;*/
	background-repeat: no-repeat;
	background-position: 0px 0px;
	width: 363px;
	height: 720px;
	position: relative;
	overflow: hidden;
}

#app {
	background: #ffffff;
	background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
	position: relative;
	top: 47px;
	left: 19px;
	height: 608px;
	width: 325px;
	display: grid;
	grid-template-rows: 50px 1fr auto;
}

/*** Start Chat overlay ***/

div#landing {
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding: 15px;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	text-align: center;
}

span.fas.fa-robot {
	align-self: end;
}

input#username {
	font-size: 1.1rem;
	line-height: 2.5rem;
	text-align: center;
	border-radius: 5px;
	border: solid 1px #00000087;
	margin: 15px 0;
	width: 100%;
}
body {
  background: #111;
}
.loader {
  position: relative;
  padding-top: 100px;
  width: 40px;
  margin: auto;
}
.loader .circle {
  position: absolute;
  width: 38px;
  height: 38px;
  opacity: 0;
  transform: rotate(225deg);
  animation-iteration-count: infinite;
  animation-name: orbit;
  animation-duration: 5.5s;
}
.loader .circle:after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background: #fff;
  /* Pick a color */
}
.loader .circle:nth-child(2) {
  animation-delay: 240ms;
}
.loader .circle:nth-child(3) {
  animation-delay: 480ms;
}
.loader .circle:nth-child(4) {
  animation-delay: 720ms;
}
.loader .circle:nth-child(5) {
  animation-delay: 960ms;
}
@keyframes orbit {
  0% {
    transform: rotate(225deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  7% {
    transform: rotate(345deg);
    animation-timing-function: linear;
  }
  30% {
    transform: rotate(455deg);
    animation-timing-function: ease-in-out;
  }
  39% {
    transform: rotate(690deg);
    animation-timing-function: linear;
  }
  70% {
    transform: rotate(815deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  75% {
    transform: rotate(945deg);
    animation-timing-function: ease-out;
  }
  76% {
    transform: rotate(945deg);
    opacity: 0;
  }
  100% {
    transform: rotate(945deg);
    opacity: 0;
  }
}

form#form-start {
	align-self: end;
}

#start-chat {
	background: #e8532b;
	border: none;
	padding: 15px 30px;
	font-size: 1.2rem;
	color: #ffffff;
	border-radius: 5px;
	width: 100%;
}

/********************/

/*** Main chat UI ***/

/********************/

#header,
#form {
	display: grid;
	grid-template-columns: 50px auto 50px;
	align-items: center;
}

#header {
	padding: 6px;
}

/* Conversation */

#message-board {
	display: grid;
	align-self: end;
	grid-auto-rows: minmax(min-content, max-content);
	padding: 5px 0;
	box-sizing: border-box;
	max-height: 100%;
	overflow-x: hidden;
	overflow-y: scroll;
}

.post {
	position: relative;
	margin: 4px 10px;
	padding: 10px;
	border-radius: 10px;
	font-size: .9rem;
	word-break: break-word;
}

.post-user {
	justify-self: left;
	margin-right: 50px;
	background: rgba(255, 152, 0, 0.1);
	/*border-top-left-radius: 0;*/
}

.post-bot {
	justify-self: right;
	margin-left: 50px;
	background: rgba(64, 83, 191, 0.1);
	/*border-top-right-radius: 0;*/
}

.post:after {
	content: '';
	position: absolute;
	right: -10px;
	top: 10px;
	width: 0;
	height: 0;
	border: 10px solid transparent;
	border-top: 0;
}

.post-user:after {
	left: -10px;
	border-right-color: rgba(255, 152, 0, 0.1);
	border-left: 0;
}

.post-bot:after {
	right: -10px;
	border-left-color: rgba(64, 83, 191, 0.1);
	border-right: 0;
}

.timestamp {
	font-size: .6em;
	opacity: .4;
	margin: 5px 0 -5px;
	display: block;
}

/* Chat Form */

#form {
	padding: 6px;
	/*min-height: 40px;*/
	grid-template-rows: auto 1fr;
}

#emoijis {
	grid-column: 1 / -1;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	padding: 5px;
	grid-gap: 5px;
	margin-bottom: 5px;
}

#message {
	padding: 5px;
	font-size: 1rem;
	min-height: 25px;
	max-height: 25vh;
	overflow: auto;
	background: rgba(0, 0, 0, 0.05);
	color: rgba(0, 0, 0, 0.29);
	font-style: italic;
	outline: none;
	resize: none;
}

#form.focus {
	background: rgba(255, 152, 0, 0.1);
}

#message.focus {
	background: rgba(255, 255, 255, 0.5);
}

/* Custom Scrollbar */

::-webkit-scrollbar {
	width: 5px;
}

::-webkit-scrollbar-track {
	box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
}

::-webkit-scrollbar-thumb {
	background: hsl(231, 50%, 50%, 10%);
	border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
	background: #b30000;
}

/***************/

/*** Credits ***/

/***************/

.credits {
	text-align: center;
	font-size: small;
	color: #b2b2b2;
}

.credits a {
	color: inherit;
}
button{
	color: #a01d23;
}


</style>