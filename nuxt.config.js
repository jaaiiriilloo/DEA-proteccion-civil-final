
const webpack = require("webpack");
const axios = require("axios")

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    env: {
      VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    },
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      type: "text/javascript"
    },
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      type: "text/javascript"
    },
    {
      src:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      type: "text/javascript"
    },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },

    {
    src: 
    "https://kit.fontawesome.com/6449df5005.js"
    },
    

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
        rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900',
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap',
        rel: 'stylesheet', href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Suez+One&display=swap",
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sriracha',
        
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/js/jquery.min.js', ssr: false},
      {src: '~/plugins/js/main.js', ssr: false},
      {src: '~/plugins/js/applee.js', ssr: false},
      {src: '~/plugins/js/paypalcoffe', ssr: false},
      {src: '~/plugins/js/chatbot', ssr: false},
      {src: '~/plugins/js/carr.js', ssr: false},
      { src: '@/plugins/youtube-embed.js', ssr: false },              
      { src: "~/plugins/google-maps", ssr: true },

     /* { src: '~/plugins/axios', ssr: true }  */
      
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true, // Can be also an object with default options 
    //baseURL: 'https://datosabiertos.malaga.eu/recursos/urbanismoEInfraestructura/equipamientos/da_desfibriladores-4326.geojson',
    
  },
  proxy: {
  //  '/api/': { target: 'https://api.example.com/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
      },  
  

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  },
   extend (config, ctx) {
    },
  }
  