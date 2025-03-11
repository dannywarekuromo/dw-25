import { gsap } from "../node_modules/gsap/all.js";

///////////////preloader animation:
document.addEventListener('DOMContentLoaded', () => {

   ////////////////// WITH TIMELINE: 
   const tl = gsap.timeline({repeat:1,repeatDelay:1});
   tl.from('img', {
      scale: .3,
      stagger: .3,
      duration: .5   
   })

   function reverseAnimate(){
      tl.progress(1).reverse();
   };

   setTimeout(reverseAnimate, 2000);

})



