import {gsap} from "../node_modules/gsap/all.js";

///////////////////////preloader animation:
gsap.from('.preloader-img > img', {
   scale: .4,
   stagger: .5,
   duration: .5,
   repeat: true
})