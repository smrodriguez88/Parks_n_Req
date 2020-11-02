gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".image-wrapper").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top", 
      pin: true, 
      pinSpacing: false 
    });
  });
  
  
//   ScrollTrigger.create({
//     snap: 1 / 4 // snap whole page to the closest section!
//   });


gsap.to("#seventh", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.5,
        pin: true  
    },
    y: 100,
    x: 100, 
    duration: 6, 
});
gsap.to("#sixth", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.5,
        pin: true  
    },
    y: 100,
    x: -100, 
    duration: 6, 
});

gsap.to("#fifth", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.2,
        pin:true,
       
         
    },
    y: 300, 
    duration: 6, 
});

gsap.to("#fourth", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.2,  
        pin:true,
    },
    y: 400, 
    duration: 6, 
});

gsap.to("#third", {
    scrollTrigger: {
        trigger: "top",
        // start: top,
        // end: bottom,
        scrub: 0.5, 
        pin:true, 
        
    },
    y: 600, 
     
    duration: 6, 
});

gsap.to("#second", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.5,  
        pin:true,
        
    },
    y: -100,  
    opacity: 0, 
    duration: 6, 
});

gsap.to("#first", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.5, 
        pin:true,
        
    },
    y: 600,  
    opacity: 0, 
    duration: 6, 
});

// gsap.to(".title", {
//     scrollTrigger: { 
//         trigger: "top top", 
//         scrub: true,  
//     },
   
//     y: 600,
//     opacity: 0, 
// });


gsap.to(".content", {
    scrollTrigger: {
      trigger: ".content",
      toggleActions: "restart pause reverse pause"
    }, 
    duration: 3, 
    backgroundColor: "#858D82", 
    ease: "none"
  });

  gsap.to("#texnav", {
    scrollTrigger: {
      trigger: "top",
      scrub: true,
    //   toggleActions: "restart pause reverse pause"
    }, 
    duration: 3, 
    opacity: 0, 
    ease: "none"

  });


  gsap.to("#star", { 
    y: -300,
    x: 100,
    duration: 60,  
    ease: "none"

  });
  

// gsap.to(".content", {
//     scrollTrigger: {
//         trigger: "top", 
//         scrub: true,  
//     },
//     top: "0%",  
//     duration: 6, 
// }); 



