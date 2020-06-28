const express = require('express');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());

//Routes
app.use('/api/deas', require('./routes'));


//Server is listenning
app.listen(app.get('port'), () => {
    console.log("Server en puerto", app.get('port'))
})