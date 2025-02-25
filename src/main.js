import { gsap, ScrollTrigger } from "../node_modules/gsap/all.js";
import Lenis from "../node_modules/lenis/dist/lenis.mjs";

/////////////// register gsap plugins 
gsap.registerPlugin(ScrollTrigger);

//////////////// gsap timelines 
let tl = gsap.timeline({ defaults: { duration: .5 } });
let svgtl = gsap.timeline();

////////////// initialize Lenis 
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  // Use requestAnimationFrame to continuously update the scroll
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

///////////////// custom cursor 
const gallantCursor = document.querySelector('.custom-cursor');


///////////////// mobile navigation animation
const mobileNav = document.querySelector('.mobile-nav');
const mobileBtn = document.querySelector('.mobile-btn');

mobileBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
})


const animateCursorPosition = (event) => {
  gallantCursor.style.top = `${event.clientY}px`;
  gallantCursor.style.left = `${event.clientX}px`;
};

////////////////// intro text animations 
tl.from('.nav-link', {
  y: 50, stagger: .2
})
tl.from('.hero-title', {
  y: 250
})
  .from('.img-obj', {
    y: 200
  })
  .from('.hero-span', {
    y: 150,
    opacity: 0, stagger: 0.1
  })
  .from('.hero-caret-stick', {
    opacity: 0, stagger: .1
  })

//////////////// scroll text animation   
gsap.from(
  '.slide-text', {
  scrollTrigger: {
    trigger: '.about-intro',
    start: 'top center',
    end: 'bottom center',
    scrub: true
  },
  opacity: 0.6,
  y: 40,
  duration: .5,
  stagger: .3
}
)

gsap.from(
  '.slide-text-2', {
  scrollTrigger: {
    trigger: '.service-panel',
    scrub: true,
    start: 'top center',
    end: 'center center',
  },
  opacity: 0.5,
  y: 40,
  duration: .5,
  stagger: .3
}
)

gsap.from(
  '.slide-text-3', {
  scrollTrigger: {
    trigger: '.service-text-panel',
    end: 'top center',
  },
  opacity: 0,
  y: 40,
  duration: .5,
  stagger: .3
}
)

gsap.from('.service-text-title', {
  scrollTrigger: {
    trigger: '.services-container',
    start: 'top center'
  },
  opacity: 0,
  y: 100,
  duration: .5,
  stagger: .3
}, console.log("it's going"));

gsap.from('.carret-case', {
  scrollTrigger: {
    trigger: '.services-container',
    start: 'top center'
  },
  opacity: 0,
  y: 100,
  duration: .5,
  stagger: .3
}, console.log("it's going"));


/////////////////// text hover cursor animation
const hoverScale = document.querySelectorAll('.hover-anim');
const hoverFade = document.querySelectorAll('.hover-fade');
const hoverLinks = document.querySelectorAll('.hover-link');

let cursorAnimate = gsap.to('.custom-cursor', {
  paused: true, scale: 5
})
let cursorAnimate2 = gsap.to('.custom-cursor', {
  paused: true, scale: 0
})

hoverScale.forEach(obj => {
  obj.addEventListener('mouseenter', () => cursorAnimate.play());
  obj.addEventListener('mouseleave', () => cursorAnimate.reverse());
})
hoverLinks.forEach(link => {
  link.addEventListener('mouseenter', () => cursorAnimate2.play());
  link.addEventListener('mouseleave', () => cursorAnimate2.reverse());
})
hoverFade.forEach(fade => {
  fade.addEventListener('mouseenter', () => cursorAnimate2.play());
  fade.addEventListener('mouseleave', () => cursorAnimate2.reverse());
})

///////////////// service title hover animation
const serviceCard = gsap.utils.toArray('.service-card');

serviceCard.forEach((card,) => {
  let fadingCarret = card.children[0].children[1].children[0].children[0];

  let fadeCarret = gsap.to(fadingCarret, {
    opacity: 0,
    paused: true
  })

  card.addEventListener('mouseover', () => {
    card.children[1].classList.add('is-active');
    fadeCarret.play();
  });

  card.addEventListener('mouseleave', () => {
    card.children[1].classList.remove('is-active');
    fadeCarret.reverse();
  })
})

////////////// vessel & vesper svg animation 
// svgtl.fromTo('.grid-line', {
//   dashoffset: 1
// }, {dashoffset: 0});

window.addEventListener('mousemove', animateCursorPosition);
