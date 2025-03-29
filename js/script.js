// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  
    // 🔹 1. Intro Animation (Fade-in Effect for Page Load)
    const fadeInElements = document.querySelectorAll(".fade-in");
  
    fadeInElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 200);
    });
  
    // 🔹 2. Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      once: true,       // Ensures animation happens only once per scroll
    });
  
    // 🔹 3. GSAP Scroll Animations (More Advanced Control)
    if (typeof gsap !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
  
      // Example: Animate sections when they come into view
      gsap.from(".section", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".section",
          start: "top 80%", // Starts animation when the element is 80% into the viewport
        }
      });
  
      // Example: Animate images in .image-container
      gsap.from(".image-container img", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".image-container",
          start: "top 85%",
        }
      });
  
      // Example: Animate message and vision containers
      gsap.from(".message-container, .vision-container", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".message-vision-wrapper",
          start: "top 90%",
        }
      });
    }
  
  });
  