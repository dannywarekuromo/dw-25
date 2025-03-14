document.addEventListener("DOMContentLoaded", () => {

  ///////////// register gsap plugins: 
  // gsap.registerPlugin(ScrollTrigger);

  ////////////////// preloader sequence: 
  const preloadTl = gsap.timeline({ repeat: 1, repeatDelay: 1 });
  preloadTl.from('.pre-img', {
    scale: .3,
    stagger: .3,
    duration: .5
  })

  

  function preloaderAnimate() {
    preloadTl.progress(1).reverse();
  };

  document.body.style.overflow = 'hidden';

  setTimeout(preloaderAnimate, 2000);
  setTimeout(() => {
    const preload = document.querySelector('.preloader');
    preload.classList.add('inactive');
    document.body.style.overflow = 'visible';
  }, 3800);

  //////////////// navbar visibility:
  let previousScrollPosition = window.scrollY;

  let navBarAnimate = () => {
    const navHeader = document.querySelector('.header');
    const currentScrollPosition = window.scrollY;


    (currentScrollPosition > previousScrollPosition) ?
      setTimeout(() => navHeader.classList.add('is-inactive'), 500) :
      setTimeout(() => navHeader.classList.remove('is-inactive'), 500);

    previousScrollPosition = currentScrollPosition;
  }

  ///////////////// custom cursor: 
  const gallantCursor = document.querySelector('.custom-cursor');


  ///////////////// mobile navigation animation:
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileBtn = document.querySelector('.mobile-btn');
  const mobileNavItem = document.querySelectorAll('.m-nav-link');
  const footerText = document.querySelectorAll('.nav-footer-text');

  let btnAnimate = gsap.to(mobileBtn, {
    duration: .5,
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    paused: true
  })

  let linkAnimate = gsap.from(mobileNavItem, {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    duration: .5,
    paused: true,
    stagger: .3
  })

  let navFooterAnimate = gsap.from(footerText, {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    duration: .5,
    paused: true,
    stagger: .3
  })

  mobileBtn.addEventListener('click', () => {

    mobileNav.classList.toggle('active');


    if (mobileNav.classList.contains('active')) {
      setTimeout(() => { mobileBtn.textContent = "close" }, 500)
      btnAnimate.play();
      setTimeout(() => { btnAnimate.reverse() }, 1000)
      setTimeout(() => { linkAnimate.play() }, 1000)
      setTimeout(() => { navFooterAnimate.play() }, 1000)
    } else {
      setTimeout(() => { mobileBtn.textContent = "menu" }, 500)
      btnAnimate.play();
      linkAnimate.reverse();
      navFooterAnimate.reverse();
      setTimeout(() => { btnAnimate.reverse() }, 1000)
    }

  })


  ///////////////// mobile nav link responsiveness
  mobileNavItem.forEach((item) => {

    item.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      setTimeout(() => { mobileBtn.textContent = "menu" }, 500)
      btnAnimate.play();
      setTimeout(() => { btnAnimate.reverse() }, 1000)
    })
  })



  const animateCursorPosition = (event) => {
    gallantCursor.style.top = `${event.clientY}px`;
    gallantCursor.style.left = `${event.clientX}px`;
  };

  ////////////////// hero text animations: 
  //////////////// gsap timelines: 
  let tl = gsap.timeline({ defaults: { duration: .5 } });

  tl.from('.nav-link', {
    y: 50, stagger: .2, delay: 3.3
  })

  tl.from('.hero-title', {
    duration: .5,
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
  })
    .from('.img-obj', {
      duration: .5,
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    })
    .from('.hero-span', {
      duration: .5,
      // stagger: .3,
      opacity: 0
    })
    .from('.hero-caret-stick', {
      duration: .5,
      opacity: 0,
      stagger: .3,
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    })


  //////////////// scroll text animation: 

  gsap.utils.toArray('.slide-text-3').forEach((text) => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: '.service-text-panel',
        start: 'top 95%'
      },
      duration: .5,
      ease: 'power1.out',
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    })
  })

  gsap.utils.toArray('.service-leads').forEach((text) => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: 'top 95%'
      },
      duration: .5,
      ease: 'power1.out',
      opacity: 0
    })
  })

  gsap.utils.toArray('.service-text-title').forEach((text) => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: 'top 95%'
      },
      duration: .5,
      ease: 'power1.out',
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    })
  })

  gsap.utils.toArray('.carret-case').forEach((svg) => {
    gsap.from(svg, {
      scrollTrigger: {
        trigger: svg,
        start: 'top 95%'
      },
      duration: .5,
      ease: 'power1.out',
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    })
  })


  gsap.from('.intro-roll', {
    scrollTrigger: {
      trigger: '.work',
      start: 'top top'
    },
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    duration: .5,
    stagger: .3
  });

  gsap.utils.toArray('.period-roll').forEach((text) => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: 'top 95%'
      },
      duration: .5,
      ease: 'power1.out',
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    })
  })

  gsap.utils.toArray('.role-roll').forEach((text) => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: 'top 90%'
      },
      duration: .5,
      ease: 'power1.out',
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    })
  })

  gsap.utils.toArray('.agency-roll').forEach((text) => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: 'top 90%'
      },
      duration: .5,
      opacity: 0
    })
  })

  gsap.utils.toArray('.contact-roll').forEach((text) => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: 'top 80%'
      },
      duration: .5,
      ease: 'power1.out',
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    })
  })

  gsap.utils.toArray('.contact-caption').forEach((text) => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: 'top 90%'
      },
      duration: .5,
      opacity: 0
    })
  })

  gsap.from('.footer-text', {
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 100%'
    },
    stagger: .3,
    duration: .5,
    opacity: 0
  })



  ///////////////////// hilight text 
  gsap.utils.toArray('.hi-liter').forEach(text => {
    ScrollTrigger.create({
      trigger: text,
      start: 'top 80%',
      toggleClass: 'marked'
    })
  })



  /////////////////// vessel and vesper animation:
  ScrollTrigger.create({
    trigger: ".animated-svg",
    start: 'top center',
    // toogleClass: '.is-active'
    onEnter: () => {
      setTimeout(() => {
        document.querySelector('.vessel-vesper').classList.add('is-active')
      }, 500)
    }
  })

  /////////////////// text hover cursor animation:
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

  ///////////////// service text hover animation:
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

  ////////////// on-scroll event trigger:
  window.addEventListener('scroll', () => {
    // animateSVG();
    navBarAnimate();
  }
  );

  window.addEventListener('mousemove', animateCursorPosition);
})