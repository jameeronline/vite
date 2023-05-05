//import '../css/index.css'
import "../scss/spruce.scss";
import "../scss/style.scss";

import javascriptLogo from "../assets/javascript.svg";
import viteLogo from "../assets/vite.svg";
import { setupCounter } from "./counter";

//feather icons

import feather from "feather-icons";
//feather.icons.chrome.toSvg()
//feather.icons.chrome.toString()
//feather.icons.chrome.toSvg({ 'stroke-width': 1 })
//const feather = require('feather-icons')
//console.log(feather)
feather.replace({
  width: 200,
  height: 200,
  stroke: 'red'
});

feather.icons['chrome'].toSvg({
    width: 400,
    height: 400,
    stroke: 'green'
});
//feather.icons.twitter.toSvg({ 'stroke-width': 1 })

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import AOS from "aos";
AOS.init();

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

//setupCounter(document.querySelector('#counter'))

// import Swiper JS
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//Load .env values
//import * as dotenv from "dotenv";
//dotenv.config();
console.log(import.meta.env.BASE_URL);
console.log(import.meta.env.VITE_SECRET_2);
