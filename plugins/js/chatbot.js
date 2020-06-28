nlp = window.nlp_compromise;

var messages = [], 
  lastUserMessage = "", 
  botMessage = "", 
  botName = 'Asistencia de Protección Civil', 
  marks = 0,
  flag = 0,
  talking = true; 
  /**********************/
	/*** AUTO REPLY BOT ***/
	/**********************/
function chatbotResponse() {
  // Generate some different replies
  talking = true;
  botMessage = "Lo siento no puedo entenderte, ¿puedes usar otras palabras? Gracias"; 

  if (lastUserMessage.toLowerCase() === 'hi' || lastUserMessage.toLowerCase() =='hello') {
   botMessage = "Hello, how can I help ?";;
  }
  if (lastUserMessage.toLowerCase() === 'hola' || lastUserMessage.toLowerCase() =='ola') {
    botMessage = "Hola, soy el asistente de Protección Civil en que puedo ayudarte ?";;
   }
var n = lastUserMessage.search(/\b(necesito ayuda|tengo un problema|tengo una emergencia|ayuda|socorro)\b/i);
if (n !== -1) {
  botMessage = 'No te preocupes, Mantén la calma, que problema tienes?';;
} 

var n = lastUserMessage.search(/(accidente|tráfico|coche|camion|furgoneta)/i);
if (n !== -1) {
  botMessage = 'Entiendo, quieres que procedamos a la llamada a la Guardia Civil de Tráfico o Policia Local? Escribe telefono y sigue las pautas';
} 
var n = lastUserMessage.search(/\b(fuego|humo|explosión|explosion|quemado|umo|gas|fuga|atrapado|encerrado)\b/i);
if (n !== -1) {
  botMessage = 'De acuerdo, vamos a proceder a la llamada al Cuerpo provincial de Bomberos, si estás de acuerdo "escribe la palabra telefono y en la siguiente pantalla a continuacion escribe bombero"';
}   
var n = lastUserMessage.search(/\b(trifulca|paliza|pelea|violencia|robo|peligro|atentado|apuñalar|puñadala|arma blanca|atentado|navaja)\b/i);
if (n !== -1) {
  botMessage = 'De acuerdo, vamos a proceder a la llamada a Policia Nacional, si estas de acuerdo, escribe la palabra telefono y a continuación en la siguiente pantalla escribe "Policia-nacional"';
}  
 
if (lastUserMessage === 'nombre') {
    botMessage = 'Mi nombre es ' + botName;
  }
var n = lastUserMessage.search(/\b(credibilidad)\b/i);
if (n !== -1) {
  botMessage = '100% fiable ';
} 
var n = lastUserMessage.search(/\b(llamada|telefono|movil)\b/i);
if (n !== -1) {
  botMessage = "Indica a que Fuerza y Cuerpo de Seguridad  quieres llamar ?";
  flag = 1;
}
var n = lastUserMessage.search(/\b(bomberos|bombero|firefighter)\b/i);
  if (n !== -1 && flag === 1 ) {
      window.open('tel:080');
      botMessage = "Llamada a Bomberos en marcha, por favor, mantengase al teléfono y no cambie de pestaña ni apague o cuelgue el dispositivo, Gracias)";
  }
  var n = lastUserMessage.search(/\b(llamada|telefono|movil)\b/i);
if (n !== -1) {
  botMessage = "Indica a que Fuerza y Cuerpo de Seguridad  quieres llamar ?";
  flag = 1;
}
  var n = lastUserMessage.search(/\b(policialocal|policia-local|local-police)\b/i);
  if (n !== -1 && flag === 1 ) {
      window.open('tel:092');
      botMessage = "Llamada a Policia Local en marcha, por favor, mantengase al teléfono y no cambie de pestaña ni apague o cuelgue el dispositivo, Gracias)";
  }
  var n = lastUserMessage.search(/\b(llamada|telefono|movil)\b/i);
if (n !== -1) {
  botMessage = "Indica a que Fuerza y Cuerpo de Seguridad  quieres llamar ?";
  flag = 1;
}
var n = lastUserMessage.search(/\b(policianacional|policia-nacional|nacional-police)\b/i);
  if (n !== -1 && flag === 1 ) {
      window.open('tel:091');
      botMessage = "Llamada a Policia Local en marcha, por favor, mantengase al teléfono y no cambie de pestaña ni apague o cuelgue el dispositivo, Gracias)";
  }
  var n = lastUserMessage.search(/\b(llamada|telefono|movil)\b/i);
  if (n !== -1) {
    botMessage = "Indica a que Fuerza y Cuerpo de Seguridad  quieres llamar ?";
    flag = 1;
  }
  var n = lastUserMessage.search(/\b(guardia-civil|guardiacivil|guardia civil)\b/i);
  if (n !== -1 && flag === 1 ) {
      window.open('tel:062');
      botMessage = "Llamada a Guardia Civil de Tráfico en marcha, por favor, mantengase al teléfono y no cambie de pestaña ni apague o cuelgue el dispositivo, Gracias)";
  }

}

function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push(lastUserMessage);
    chatbotResponse();
    messages.push("<b>" + botName + ":</b> " + botMessage);
    Speech(botMessage);
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}


function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}
//CHAR CODE
document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
  }
}

function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}