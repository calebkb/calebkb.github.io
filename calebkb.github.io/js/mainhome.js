gsap.registerPlugin(ScrollTrigger);

gsap.to(".glass",{
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".trigger",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });
  
  gsap.to(".home", {
    scrollTrigger: {
      trigger: ".trigger",
      pin: true,
      start: "top top",
      end: "bottom top",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });