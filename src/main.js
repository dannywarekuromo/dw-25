import {gsap, ScrollTrigger} from "gsap/all";
import Lenis from "lenis";


gsap.registerPlugin(ScrollTrigger);

// initialize Lenis 
const lenis = new Lenis();
  
// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);