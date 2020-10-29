gsap.registerPlugin(ScrollTrigger);


gsap.to("#fifth", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.5,  
    },
    y: -900,  
    duration: 6, 
});

gsap.to("#fourth", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.5,  
    },
    y: -700,  
    duration: 6, 
});

gsap.to("#third", {
    scrollTrigger: {
        trigger: "#fourth", 
        start: "top bottom",
        scrub: 0.5,  
    },
    y: -700,  
    duration: 6, 
});

gsap.to("#second", {
    scrollTrigger: {
        trigger: "#fourth", 
        scrub: 0.5,  
    },
    y: -600,  
    duration: 6, 
});

gsap.to("#first", {
    scrollTrigger: {
        trigger: "top", 
        scrub: 0.5,  
    },
    y: -500,  
    duration: 6, 
});

gsap.to(".title", {
    scrollTrigger: { 
        trigger: "top", 
        scrub: 0.5,  
    },
    y: -800,  
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