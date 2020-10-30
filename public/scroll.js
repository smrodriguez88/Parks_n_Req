gsap.registerPlugin(ScrollTrigger);

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
       
         
    },
    y: 300, 
    duration: 6, 
});

gsap.to("#fourth", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.2,  
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
        
    },
    y: 600, 
    opacity: 0,  
    duration: 6, 
});

gsap.to("#second", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.5,  
        
    },
    y: 600,  
    opacity: 0, 
    duration: 6, 
});

gsap.to("#first", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.5,  
        
    },
    y: 600,  
    opacity: 0, 
    duration: 6, 
});

gsap.to(".title", {
    scrollTrigger: { 
        trigger: "top", 
        scrub: 0.5,  
    },
    y: -100,  
    opacity: 0,
    duration: 1, 
});

gsap.to(".content", {
    scrollTrigger: {
        trigger: "top", 
        scrub: true,  
    },
    top: "0%",  
    duration: 6, 
}); 


gsap.to(".blur", {
    scrollTrigger: {
        trigger: "top",
        scrub: true,  
    },
    top: "0%",
    duration: 6
}); 