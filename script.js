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

    "AVIF to JPG Converter",
    "BMP to JPG Converter",
    "BMP to PNG Converter",
    "BMP to WebP Converter",
    "JFIF to JPG Converter",
    "JPG to PNG Converter",
    "JPG to WEBP Converter",
    "PDF Metadata Viewer ",
    "Merge PDFs Tool",
    "Split PDF Pages",
    "Rotate PDF Pages",
    "Reorder PDF Pages",
    "Delete PDF Pages",
    "BMI Calculator ",
    "Currency Converter",
    "Text to PDF Generator",
    "Add Watermark to PDF ",
    "Add Page Numbers to PDF ",
    "Excel File Viewer ",
    "CSV to Excel Converter ",
    "Merge Multiple Excel Files ",
    "PDF to Word Converter",
    "PNG to ICO Converter",
    "PNG to SVG Converter",
    "SVG to PNG Converter",
    "PDF Compressor",
    "PDF Repair ",
    "HTML to PDF ",
    "WebP to PNG Converter",
    "YouTube Thumbnail Downloader",
    "Instagram Profile Picture Previewer",
    "Instagram Profile Picture Downloader",
    "Instagram QR Code to Link Extractor",
    "Social Media Profile Picture Downloader",
    "Video Metadata Viewer",
    "Pinterest Video Downloader",
    "Video Trimmer ",
    "GIF to Video Converter",
    "URL Shortener ",
    "QR Code Generator for URLs",
    "Link Preview Generator",
    "UTM Parameter Builder",
    "URL Unshortener",
    "Open Graph Meta Tag Previewer",
    "Audio Cutter",
    "Image Filter Tool",
    "JPG to SVG Converter",
    "AVIF to JPG Converter",
    "PNG to JPG Converter",
    "JPG to AVIF Converter",
    "AVIF to WEBP Converter",
    "JPEG to JPG Converter",
    "JPG to JPEG Converter",
    "BMP to JPG Converter",
    "JPG to BMP Converter",
    "BMP to PNG Converter",
    "BMP to WEBP Converter",
    "JFIF to PNG Converter",
    "JFIF to JPG Converter",
    "JFIF to WEBP Converter",
    "EPS to JPG Converter",
    "RAW to JPG Converter",
    "PNG to ICO Converter",
    "PNG to ICO with Size Selection",
    "Word Counter",
    "Image Size Compressor",
    "Image Resizer Tool",
    "Image Color Picker",
    "Image Filter Editor",
    "Image Watermark Adder",
    "Image Cropper",
    "Text Encryption/Decryption Tool",
    "Text Glitch Generator Tool",
    "Fancy Text Generator ",
    "Emoji Replacer Tool",
    "Random Quote Generator ",
    "Palindromes & Anagram Finder Tool",
    "Lorem Ipsum Generator Tool",
    "Strong Password Generator Tool",
    "Password to Hash Converter Tool ",
    "Rememberable Password Creator",
    "Password Strength Checker Tool",
    "Email Extractor from Text Tool",
    "Mailto Link Generator Tool",
    "UTM Link Builder Tool",
    "Social Media Share Link Generator Tool",
    "Age Calculator Tool",
    "Meta Tag Generator Tool",
    "Open Graph Checker Tool",
    "Responsive Design Tester Tool",
    "Email Validator Tool",
    "Image Comparison Slider Tool ",
    "Image Collage Maker Tool ",
    "Batch Image Renamer Tool ",
    "Video Trimmer Tool",
    "Auto Thumbnail Generator from Video Tool",
    "Custom Thumbnail Resizer Tool",
    "QR Code Generator for URL Tool ",
    "Audio Cutter ",
    "Thumbnail Creator "
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