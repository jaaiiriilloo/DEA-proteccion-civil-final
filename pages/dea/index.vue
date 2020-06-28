<template>
  <div class="app">
    <title>MAPA GEOLOCALIZACION</title>
    <div class="wrapper d-flex align-items-stretch">
      <nav id="sidebar">
        <div class="custom-menu">
          <button type="button" id="sidebarCollapse" class="btn btn-primary">
            <i class="fa fa-bars"></i>
            <span class="sr-only">Menu Desplegable</span>
          </button>
        </div>
        <div class="p-4 pt-5">
          <h1>
            <a href="index.html" class="logo">P. Civil</a>
          </h1>
          <ul class="list-unstyled components mb-5">
            <li class="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >BOTONES INICIO</a>
              <ul class="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <nuxt-link to="/dea">
                    <i class="fas fa-2x fa-heartbeat" style="color: #a01d23;"></i>-LOCALIZAR DESFIBRILADOR
                  </nuxt-link>
                </li>
                <li>
								<nuxt-link to="/rcp"><i class="far fa-2x fa-question-circle" style="color:#2b598f;"></i>-RCP + INFORMACIÓN</nuxt-link>
							</li>
                <li>
                  <nuxt-link to="/llamada112">
                    <i class="fas fa-2x fa-mobile-alt" style="color: #2b598f;"></i>-LLAMADA 112
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/llamadaSos">
                    <i class="fas fa-2x fa-fire-extinguisher" style="color: #a01d23;"></i>-CUERPOS DE SEGURIDAD
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/">VOLVER A LA PRINCIPAL</nuxt-link>
            </li>
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >INFORMACIÓN P. CIVIL</a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <nuxt-link to="/dea/queHacemos/_quehacemos">¿QUÉ HACEMOS?</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/dea/QuienesSomos/_quienesSomos">¿QUIÉNES SOMOS?</nuxt-link>
                </li>
                
              </ul>
            </li>
           <li>
						<nuxt-link to="/coffe/_coffePay">Págame un café ☕</nuxt-link>
					</li>
            <li>
              <nuxt-link to="/dea/avisoLegal/_avisoLegal">Aviso Legal</nuxt-link>
            </li>
          </ul>
          <div class="image-fluid">
            <div class="hijo1">
              <div class="hijo"></div>
            </div>

            <div class="mb-5">
              <div class="container-fluid">
                <img src="~assets/img/placa.png" class="img-fluid" alt="Responsive image" />
              </div>
            </div>
          </div>

          <div class="footer">
            <p>
              &copy; Company 2019 All rights reserved | This Web is made
              <i
                class="icon-heart"
                aria-hidden="true"
              ></i> by
              <a
                href="http://www.proteccioncivil.es/"
                target="_blank"
              >Proteccion-civil- &copy; Jairo Herrera Quintero</a>
            </p>
          </div>
        </div>
      </nav>

      <div id="content" class="p-4 p-md-5 pt-5">
        <section id="articles">
          <div class="clearfix"></div>
          <div class="col-md-12">
            <h1>Geolocalización&#8203; Desfibriladores</h1>
            <i class="fa fa-map-marker"></i>
            <button @click="locatorButtonPressed">Get my location</button>

            <div class="result"></div>
            <span>PULSAR EL BOTÓN DE ARRIBA PARA PERMITIR TU UBICACIÓN</span>
          </div>
          <div class="map-left">
            <label>
              DEAS Actualmente no disponible fuera de Málaga
 
              <GmapAutocomplete
                ref="autocomplete"
                :position.sync="markers[0].position"
                @keyup.enter="usePlace"
                @place_changed="setPlace"
              ></GmapAutocomplete>
              <button @click="usePlace">Añadir</button>
            </label>
            <br />


            <gmap-map
              :options="{
   zoomControl: true,
   mapTypeControl: true,
   scaleControl: true,
   streetViewControl: true,
   rotateControl: true,
   fullscreenControl: true,
   disableDefaultUI: true
 }"
              :center="center"
              :pov="{heading:270, pitch:0}"
              :zoom="17"
              map-type-id="terrain"
              style="width: 50%; height: 500px"
            >
              <gmap-marker
                @dragend="updateMaker"
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=item.position"
              ></gmap-marker>
            </gmap-map>
          </div>
          <div class="map-right">
            <gmap-map
              :center="center"
              :zoom="9"
              :map-type-id="mapTypeId"
              style="width: 50%; height: 500px"
            >
              <gmap-marker
                v-for="(item, index) in markers"
                :key="index"
                :position="item.position"
                @click="center = item.position"
              ></gmap-marker>
            </gmap-map>
            <iframe width="1000" height="400" src="https://datosabiertos.malaga.eu/dataset/desfibriladores/resource/64d2dd10-3992-4423-9277-2ef92f31c680/view/401813cc-d488-4e1a-87cf-4daabdfd9571" frameBorder="0"></iframe>
          </div>
        </section>
      </div>
    </div>
    <!-- PIE DE PAGINA -->
    <div class="clearfix"></div>

    <footer id="footer-end">
      <div class="wrap">
        <div id="menu_footer">
          <h5>AUTOR</h5>
          <p>&copy; Jairo Herrera Quintero</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
//import Rcp from "~/components/rcp.vue";
import axios from "axios";
import getDistance from 'geolib/es/getDistance';


export default {
  head: {
    title: "GEOLOCALIZACIÓN DESFIBRILADORES"
  },
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Esta es la sección donde geolocalizar los desfibriladores según tu ubicación"
    }
  ],
  components: {
    
  },
  data() {
    return {
      address: "",

      center: { lat: 36.7213028, lng: -4.4216366 },
      mapTypeId: "terrain",
      markers: [
        { position: { lat: 36.7413845, lng: -4.0946126 } },
        { position: { lat: 36.7162109, lng: -4.2793767 } },
        
        
      ]
    };
  },
  created: function(){
   
      axios.get('https://cors-anywhere.herokuapp.com/http://server-deas.herokuapp.com/api/deas')
  .then((response) => {
    // handle success
    let DEAs = response.data.features;

    //horarios DEA
        let alldayDEA = [];
        let sixdayDEA = [];
        let fivedayDEA = [];
        let nulldayDEA = [];
        // Titularidad DEA
        let privateDEA = [];
        let otherDEA = [];
        let umaDEA = [];
        let municipalDEA = [];
        let emtDEA = [];

   // this.markers = []
    DEAs.map((dea)=>{
     // console.log(dea.geometry.coordinates)
    // console.log(dea.properties.horarios)
    //console.log(alldayDEA)
if(dea.properties.horarios && dea.properties.horarios.includes('24 h'|'24 horas'|'24HORAS'|'24h'|'24 h.')) {
             alldayDEA.push(dea);
         }
        // console.log(dea.properties.horarios.includes('L-M-X-J-V'))
         if (dea.properties.horarios && dea.properties.horarios.includes('L-M-X-J-V'|'L-V'|'L a V'))
         fivedayDEA.push(dea)
        //console.log(fivedayDEA)
        
        if(dea.properties.horarios && dea.properties.horarios.includes('""')) {
             nulldayDEA.push(dea);
         }
         if(dea.properties.horarios && dea.properties.horarios.includes('L-M-X-J-V-S')) {
             sixdayDEA.push(dea);
         }
                    //------ TITULARIDAD DEAS

       if(dea.properties.titularidad === 'UMA') {
            umaDEA.push(dea);
        //    console.log(umaDEA)
         }
         if(dea.properties.titularidad === 'EMT') {
            emtDEA.push(dea);
        
         }
         if(dea.properties.titularidad === 'MUNICIPAL') {
            municipalDEA.push(dea);
        
         }
         if(dea.properties.titularidad === 'PRIVADA') {
            privateDEA.push(dea);
        
         }
         if(dea.properties.titularidad === 'OTRAS') {
            otherDEA.push(dea);
        
         }
        
        
        // PRINT ALLDEA API
        this.markers.push({
          position: 
          {lng: dea.geometry.coordinates[0], 
          lat: dea.geometry.coordinates[1]}
        })
        
    });


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  },
  
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.center.lat = position.coords.latitude;
          this.center.lng = position.coords.longitude;
        },

        error => {
          console.log(error.message);
        }
      );
    },

    setPlace(place) {
      this.place = place;
    },
    setDescription(description) {
      this.description = description;
    },
    // CENTER PLACE
    usePlace(place) {
      if (this.place) {
        var newPostion = {
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng()
        };
        this.center = newPostion;
        this.markers[0].position = newPostion;
        this.place = null;
      }
    },
      // NEW UPDATE MAKERS
    updateMaker: function(event) {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ latLng: event.latLng }, (result, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          // accessing autocomplete reference and populating the address
          this.$refs.autocomplete.$refs.input.value =
            result[0].formatted_address;
        }
      });
    }
  },
 /* created() {
    axios
      .get("https://datosabiertos.malaga.eu/recursos/urbanismoEInfraestructura/equipamientos/da_desfibriladores-4326.geojson")
      .then(function(response) {
        // handle success
        
        let DEAs = response.data.features;
        //horarios DEA
        let alldayDEA = [];
        let sixdayDEA = [];
        let fivedayDEA = [];
        let nulldayDea = [];
        // Titularidad DEA
        let privateDEA = [];
        let otherDEA = [];
        let umaDEA = [];
        let municipalDEA = [];
        let emtDEA = [];

        DEAs.map(dea => {
          // HORARIOS DEA
              console.log(dea.properties.horarios)
         if(dea.properties.horarios && dea.properties.horarios.includes('24 h'|'24 horas'|'24HORAS'|'24h'|'24 h.')) {
             alldayDEA.push(dea);
         }
         if (dea.properties.horarios && dea.properties.horarios.includes('L-M-X-J-V'|'L-V'|'L a V'))
         fivedayDEA.push(dea)

        if(dea.properties.horarios && dea.properties.horarios.includes('""')) {
             nulldayDEA.push(dea);
         }
         if(dea.properties.horarios && dea.properties.horarios.includes('L-M-X-J-V-S')) {
             sixdayDEA.push(dea);
         }

        // TITULARIDAD DEAS

       if(dea.properties.titularidad === 'UMA') {
            umaDEA.push(dea);
        //    console.log(dea.properties.titularidad)
         }
         if(dea.properties.titularidad === 'EMT') {
            emtDEA.push(dea);
        
         }
         if(dea.properties.titularidad === 'MUNICIPAL') {
            municipalDEA.push(dea);
        
         }
         if(dea.properties.titularidad === 'PRIVADA') {
            privateDEA.push(dea);
        
         }
         if(dea.properties.titularidad === 'OTRAS') {
            otherDEA.push(dea);
        
         }
        
    });

    // let umaDEA = DEAs.filter(dea => dea.properties.titularidad === 'UMA');

     console.log(umaDEA);

    // console.log(privateDEA.length)

    // console.log(DEAs.length)
    // console.log(alldayDEA.length)
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      }); 
  } */
};
</script>


<style scoped>
.vue-map-container {
  width: 98%;
  height: 150vh;
  text-align: center;
  justify-content: center;
  position: relative;
  float: left;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #526488;
  letter-spacing: 1px;
  font-size: 6em;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-family: "Roboto Mono", monospace;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

body {
  margin: 0;
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

[tabindex="-1"]:focus {
  outline: 0 !important;
}

hr {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none !important;
  border: none;
}

.wrapper {
  width: 100%;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #e8532b;
  color: #fff;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  position: sticky;
}
#sidebar .h6 {
  color: #fff;
}
#sidebar.active {
  margin-left: -250px;
}
#sidebar.active .custom-menu {
  margin-right: -50px;
}
#sidebar h1 {
  margin-bottom: 20px;
  font-weight: 700;
}
#sidebar h1 .logo {
  color: #fff;
}
#sidebar ul.components {
  padding: 0;
}
#sidebar ul li {
  font-size: 16px;
}
#sidebar ul li > ul {
  margin-left: 10px;
}
#sidebar ul li > ul li {
  font-size: 14px;
}
#sidebar ul li a {
  padding: 10px 0;
  display: block;
  color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
#sidebar ul li a:hover {
  color: #fff;
}
#sidebar ul li.active > a {
  background: transparent;
  color: #fff;
}
@media (max-width: 991.98px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebar .custom-menu {
    margin-right: -50px !important;
    top: 10px !important;
  }
}
#sidebar .custom-menu {
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 0;
  margin-right: -20px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
@media (prefers-reduced-motion: reduce) {
  #sidebar .custom-menu {
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }
}
#sidebar .custom-menu .btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
#sidebar .custom-menu .btn.btn-primary {
  background: #e8532b;
  border-color: #f1e6b4;
}
#sidebar .custom-menu .btn.btn-primary:hover,
#sidebar .custom-menu .btn.btn-primary:focus {
  background: #2b598f !important;
  border-color: #2b598f !important;
}

a[data-toggle="collapse"] {
  position: relative;
}
button{
  background:#e8532b;
  color: #fff;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

@media (max-width: 991.98px) {
  #sidebarCollapse span {
    display: none;
  }
}

#content {
  width: 100%;
  padding: 0;
  min-height: 100vh;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.btn.btn-primary {
  background: #866ec7;
  border-color: #866ec7;
}
.btn.btn-primary:hover,
.btn.btn-primary:focus {
  background: #866ec7 !important;
  border-color: #866ec7 !important;
}

.footer p {
  color: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
#content #articles img {
  width: 100%;
  border: 3px solid #f3c52a;
}

/* ARTICLES --- */

.clearfix {
  clear: both;
}
.fa-map-marker {
  width: 100%;
  font-size: 3em;
  color: #cf483e;
  text-shadow: 0 0 1px #000;
  animation: bounce 1s linear 3;
  text-align: center;
  justify-content: center;
}
button {
  box-shadow: 0 0 1px #000;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
}
.pure-button {
  justify-content: center;
  text-align: center;
}
.col-md-12 {
  text-align: center;
  justify-content: center;
}
.result {
  margin: 2em 2em 1em 2em;
}
.result img {
  margin-top: 1em;
  border: 1px solid #333;
}
.fa-spinner {
  font-size: 3em;
}
span {
  font-size: 0.7em;
  color: #777;
}
@keyframes bounce {
  
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
}
#footer-end {
  display: block;
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
  color: white;
  overflow: hidden;
}

#footer-end h5 {
  display: block;
  background: url("~assets/img/pxgray.png");
  letter-spacing: 2px;
  text-align: center;
  font-family: "BebasNeue";
  font-size: 10px;
  line-height: 18px;
  color: white;
  border-radius: 5px;
}
#footer-end p {
  text-align: center;
}

</style>

