const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    request('https://datosabiertos.malaga.eu/recursos/urbanismoEInfraestructura/equipamientos/da_desfibriladores-4326.geojson', function (error, response, body){
        res.json(JSON.parse(response.body));
    }); 
});

module.exports = router;