<template>
<div>
  <div class="wrap">
  <div class="feature">
    <h1>Lo siento, esa solicitud <br>No existe…</h1>
    <nuxt-link to="/"><button type="button" onClick="anotherTwentyMinutes();">Te Puedo Llevar Al Inicio,<br>Su Coste Es Un Café ☕😋</button></nuxt-link>
  </div>

  <!-- 
   SVG made in Inkscape from screen capture of Airplane! scene
   https://www.youtube.com/watch?v=wtmnf7QlX_4
-->
  <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="500" viewBox="0 0 900 450" preserveAspectRatio="xMidYMin slice">
    <defs>
      <linearGradient id="a" gradientUnits="objectBoundingBox" x2="1" y2="1">
        <stop offset="0" />
        <stop stop-color="#222" stop-opacity=".2" offset="60%" />
        <stop stop-opacity="0" offset="100%" />
      </linearGradient>
      <filter id="b" x="-.039" width="1.1" y="-.129" height="1.258" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation=".508" />
      </filter>
      <filter id="e" x="-.18" width="1.36" y="-.18" height="1.36" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation=".27" />
      </filter>
      <filter id="d" x="-.18" width="1.36" y="-.18" height="1.36" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation=".258" />
      </filter>
    </defs>
    <path fill="#45443f" d="M0 0h1000v500H0z" />
    <path d="M163.8 0L43.2 115.2l123.3-1.8L511.2 0z" fill="#25241f" />
    <path d="M511.2 0L166.5 113.4v70.2L900 259.2V0z" fill="#554c3c" stroke="#333" stroke-width=".9" />
    <path d="M166.5 183.6H69.3L631.8 450H900V259.2z" fill="#776765" />
    <path d="M69.3 183.6l-69.3.9V450h631.8z" fill="#3b312f" />
    <path d="M70.2 183.6L738.9 450h-53.1z" fill="#fff" stroke="#e8532b" stroke-width=".9" />
    <path fill="url(#a)" d="M0 0h1000v500H0z" />
    <path d="M425.95 378.19c-.36 14.21-.59 27.77 1.25 30.26 1.2 2.94 1.77 5.45 6.7 5.55 26.33-.61 33.76-1.81 42.24-2.98 3.1.37 1.14-17.82 1.26-37.52zM162.26 407.19c-.37 14.85 1.19 28.11 3.09 30.72 1.24 3.06 1.83 5.69 6.93 5.79 27.23-.63 34.91-1.89 43.69-3.12 3.19.39 1.82-16.8 1.95-37.38z" fill="#070a05" />
    <path d="M153.36 236.74c15.78-23.46 27.64-48.88 49.12-69.49 64.67-20.81 137.41-27.11 218.05-19.17 24.12 20.44 36.61 49.63 45.54 61.1 18.24 26.36 28.47 52.72 40.73 79.08-2.8 28.35-2.47 77.14-12.63 83.79-91.5 3.78-403.875 60.62-399.517 20.44l-14.38-59.9C84.95 313.07 88.63 286.57 96.3 288c8.38-10 38.04-34.17 57.06-51.26z" fill="#fff" stroke="#e8532b" stroke-width=".9" />
    <path d="M165.34 239.14c-6.24-2.56 21.12-43.14 31.15-57.51 89.43-29.28 195.61-27.73 225.24-17.97 8.79 9.74 17.57 24.66 26.36 40.73 1.52 4.98 1.35 9-7.19 8.39z" fill="#3f373a" stroke="#e8532b" stroke-width=".9" stroke-linejoin="round" />
    <path d="M80.273 332.59c.14 27.18 1.648 54.49 14.38 59.9l35.937-5.98c13.98-7.34 85.66-8.89 126.4-12.89l-.9-6.28 84.17-9.59 1.2 8.38 125.8-14.37 35.37-1.2c8.19-14.93 8.61-37.9 4.17-62.3-26.98-4.79-232.56 26.22-381 34.74-14.47 3.2-28.05 6.39-45.527 9.59z" fill="#e8532b" stroke="#e8532b" stroke-width=".9" />
    <path d="M264.14 371.27c.59 10.62 1.77 23.13 2.97 31.65 23.37-2.14 57.61-7.14 69.22-7.14.32-7.19-1.13-21.46-1.69-32.19-23.3 2.26-50.78 5.42-70.5 7.68z" fill="#e8532b" />
    <path d="M267.71 228.89c3.04-2.19 6.06.61 10.12-.97 2.41-1.47 7.5-3.18 24.62-7.96 1.61-.45.88-2.66.84-3.78-.26-7.98 23.72-3.39 23.72-3.39 0 1.21-.8 3.49-.1 3.49 5.5 0 7.88.55 16.19 2.44 5.06.57 5.87.75 7.89 2.08z" fill="#e8532b" stroke="#e8532b" stroke-width=".18" />
    <path d="M303.29 216.18c-4.7-2.7-4.03-14.1-6.29-20.88l14.76-2.84 18.54 5.08-3.29 15.25z" fill="#d0aeb5" stroke="#d4b4b4" stroke-width=".45" />
    <path d="M296.51 195.85c.24-5.69 1.6-10.26 4.24-13.56 5.53-5.7 10.51-7.5 15.25-7.63 3.53-.41 7.53 2.45 11.86 7.63 2.66 5.59 3.08 10.44 3.39 15.25-1.51 4.07-.48 12.57-4.84 11.66-7.12-1.23-12.85 4.46-21.43-4.04-.62-6.17-4.31-11.54-8.47-9.31z" fill="#2e201b" />
    <path d="M262.8 229.32l13.99-13.15 8 3.94-2.25 2.85-4.71 4.96z" fill="#e8532b" stroke="#e8532b" stroke-width=".18" />
    <path d="M277.32 216.22c1.8.18 1.45-3.68 5.64-8.52.69 0 1.2-.21 2.43.31 1.34 0 1.66-.16 2.44.65 1.97.1 1.78.75 2.12 1.37.82.32 1.24.77 1.17 1.38.58 1.56 1.65 5.53.95 4.92.62-.1-.67.76-1.59-2.91-.58 1-1.67 1.85-2.46 2.65.95.26 3.83.1 3.22.97-2.12.63-4.62 0-6.68 2.69z" fill="#d0aeb5" stroke="#d4b4b4" stroke-width=".45" />
    <path d="M277.9 215.95l7.1 3.45.38-.51-6.98-3.51z" fill="none" stroke="#000" stroke-width=".9" />
    <circle cx="281.49" cy="217.3" r="1.8" fill="#e8532b" stroke="#e8532b" stroke-width=".27" stroke-linecap="round" stroke-linejoin="round" stroke-dashoffset="4" />
    <path d="M281.48 217.31c-2.07-.3-.18 0 0 0z" fill="none" stroke="#e8532b" stroke-width=".27" stroke-linejoin="round" />
    <path d="M281.48 217.35l.74-1.07z" fill="none" stroke="#000" stroke-width=".27" />
    <path d="M282.6 148.5c-5.64-5.72-5.9-10.92.36-17.04 26.55-3.39 45.91-3.37 66.77-4.48 5.35 4.59 7.2 10.43 1 16.99-22.35.84-44.22.96-68.13 4.53z" fill="#e8532b" stroke="#e8532b" stroke-width=".72" /><text style="line-height:1.25" x="298.63" y="142.54" transform="rotate(-3.5 302.54 113.9)" font-weight="400" font-size="4.8" font-family="sans-serif" letter-spacing="0" word-spacing="0" stroke-width=".9" filter="url(#b)">
      <tspan x="298.63" y="142.54" style="line-height:6.003px;-inkscape-font-specification:'Arial Bold'" font-weight="700" font-size="13.2" font-family="Arial" letter-spacing="1.08" fill="#fff">P. Civil</tspan>
    </text>
    <circle cx="283.14" cy="140.31" r="1.722" fill="#fff" stroke="#2e241e" stroke-width=".72" stroke-linecap="round" stroke-linejoin="round" stroke-dashoffset="4" filter="url(#d)" />
    <circle cx="349.58" cy="135.43" r="1.8" fill="#fff" stroke="#2e241e" stroke-width=".72" stroke-linecap="round" stroke-linejoin="round" stroke-dashoffset="4" filter="url(#e)" />
    <path d="M171.14 250.91l-33.05 36.43m-2.54 23.72l2.54-23.72m306.69-56.76l11.86 28.8 1.69 19.49-322.78 32.19" fill="none" stroke="#8c7369" stroke-width=".9" /><text style="line-height:1.25;-inkscape-font-specification:Arial" x="235" y="413" transform="rotate(-5.3)" font-weight="400" font-size="21.6" font-family="Arial" letter-spacing="0" word-spacing="0" stroke-width=".9">
      <tspan x="235" y="413" font-size="13.2" letter-spacing=".9" fill="#fff" stroke="#fff">ERR 404</tspan>
    </text>
  </svg>

</div>
    </div>


</template>

<script>
export default {
  
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Sriracha");

body {
  margin: 0;
  padding: 0;
  background-color: #000;
  font-family: Avenir, "Segoe UI", "Open Sans", "Droid Sans", Roboto, sans-serif;
  overflow-x: hidden;
}
.feature {
  padding: 1em;
  background-color: #dc9;
  box-shadow: 0 0 0.5em 1em #dc9;
  position: relative;
  top: 0;
  right: 0;
  z-index: 5;
  text-align: center;
}
h1 {
  margin: 0 0 1em;
  padding: 0;
  font-size: 1.25em;
  color: #2E2b24;
  font-family: 'Sriracha';
}

button {
  display: inline-block;
  padding: 0.5em 1em;
  font-size: 1.25em;
  font-weight: bold;
  font-family: 'Sriracha';
  background-color: #e8532b;
  border: 0;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(11, 11, 11, 0.8);
  box-shadow: inset -1px -2px 7px rgba(11, 11, 11, 0.8),
    0 1px 4px rgba(11, 11, 11, 0.5);
  border-radius: 5px;
  font-family: Sriracha, cursive;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.25;
  transition: background-color 0.2s;
}
button:hover,
button:focus {
  text-shadow: 0 0 1px rgba(11, 11, 11, 0.8);
  background: linear-gradient(to top, #09203f 0%, #537895 100%);
}
button:active {
  position: relative;
  top: 1px;
}
.wrap {
  position: relative;
  min-height: 100%;
  height: 100%;
}
svg {
  display: block;
  width: 150%;
  height: 100%;
}
@media (min-width: 800px) {
  .feature {
    position: absolute;
    top: 2em;
    right: 2em;
  }
  h1 {
    font-size: 1.5em;
  }
  svg {
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 1000px) {
  .feature {
    right: 10%;
  }
}
@media (max-width: 799px) and (max-height: 600px) {
  svg {
    position: relative;
    top: -5em;
  }
}
@media (max-width: 600px) and (max-height: 550px) {
  svg {
    top: -3em;
  }
}
@media (max-width: 420px) and (max-height: 550px) {
  svg {
    top: -1em;
  }
}

</style>