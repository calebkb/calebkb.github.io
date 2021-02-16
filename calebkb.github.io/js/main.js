gsap.registerPlugin(ScrollTrigger);

gsap.to(".glass",{
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".box",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });
  
  gsap.to(".stars", ".clouds", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".box",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });

  //<div class="lax lax_preset_fadeIn:50:100 lax_preset_spin"></div>