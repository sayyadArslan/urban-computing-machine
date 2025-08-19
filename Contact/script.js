document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const hamburger = document.getElementById("openMenu");
  const closeIcon = document.getElementById("closeMenu");
  const navMenu = document.getElementById("navMenu");

  if (!hamburger || !closeIcon || !navMenu) {
    console.error("One or more elements not found!");
    return;
  }

  // Open menu
  hamburger.addEventListener("click", () => {
    navMenu.style.display = "flex";
    hamburger.style.display = "none";
    closeIcon.style.display = "block";

   
  });

  // Close menu
  closeIcon.addEventListener("click", () => {
    navMenu.style.display = "none";
    hamburger.style.display = "block";
    closeIcon.style.display = "none";
  });

  // GSAP animation on page load
  gsap.from(".logo", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power2.out"
  });
  gsap.from(".menu a", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power2.out"
  });
  
});
