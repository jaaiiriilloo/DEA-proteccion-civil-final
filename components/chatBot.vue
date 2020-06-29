<template>
  
<div>
       

<div id='bodybox'>
<center></center>

  <div id='chatborder'>
    <p id="chatlog7" class="chatlog">&nbsp;</p>
    <p id="chatlog6" class="chatlog">&nbsp;</p>
    <p id="chatlog5" class="chatlog">&nbsp;</p>
    <p id="chatlog4" class="chatlog">&nbsp;</p>
    <p id="chatlog3" class="chatlog">&nbsp;</p>
    <p id="chatlog2" class="chatlog">&nbsp;</p>
    <p id="chatlog1" class="chatlog">&nbsp;</p>
    <input type="text" name="chat" id="chatbox" placeholder="Hi there! I am here to help you out with questions regarding to The Heritage Academy." onfocus="placeHolder()">
  </div>
  
</div>

  </div>

</template>

<script>


export default {
 data(){
 

},
created(){
  swal({
  title: "Sweet!",
  text: "Here's a custom image.",
  imageUrl: 'thumbs-up.jpg'
});
}
}
</script>

<style>


.bodybox img {
  text-align: "center";
  width:"123";
  height:"142"
}
body {
  font: 15px arial, sans-serif;
  background-color: #d9d9d9;
  padding-top: 15px;
  padding-bottom: 15px;
}

#bodybox {
  margin: auto;
  max-width: 550px;
  font: 15px arial, sans-serif;
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

#chatborder {
  border-style: solid;
  background-color: #f6f9f6;
  border-width: 3px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-right: 20px;
  padding-left: 15px;
  border-radius: 15px;
  overflow: scroll;
}

.chatlog {
   font: 15px arial, sans-serif;
}

#chatbox {
  font: 17px arial, sans-serif;
  height: 22px;
  width: 100%;
  overflow: scroll;
}

h1 {
  margin: auto;
}

pre {
  background-color: #f0f0f0;
  margin-left: 20px;
}

</style>