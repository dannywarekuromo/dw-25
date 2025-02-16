import {gsap, ScrollTrigger} from "../node_modules/gsap/all.js";
// import Lenis from "../node_modules/lenis/dist/lenis.mjs";


gsap.registerPlugin(ScrollTrigger);

// initialize Lenis 
const lenis = new Lenis();
  
// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);