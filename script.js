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
const phrases =
  [
    "Image Convertors",
"Image Tools",
"Pdf-tools",
"SEO tools",
"Text tools",
"Social Media Downloader",
"UrL Tools",
"barcode Tools",
"Email Tools",
"Math Tools",
"Password Tools",
"Video Tools"
  ];


const typingText = document.getElementById("typing-text");
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (isDeleting) {
    currentCharIndex--;
  } else {
    currentCharIndex++;
  }

  typingText.textContent = currentPhrase.slice(0, currentCharIndex);

  let delay = isDeleting ? 50 : 50;

  if (!isDeleting && currentCharIndex === currentPhrase.length) {
    delay = 1500;
    isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    delay = 500;
  }

  setTimeout(type, delay);
}
type();