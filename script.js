document.addEventListener("DOMContentLoaded", () => { let e = document.getElementById("openMenu"), t = document.getElementById("closeMenu"), n = document.getElementById("navMenu"); if (!e || !t || !n) { console.error("One or more elements not found!"); return } e.addEventListener("click", () => { n.style.display = "flex", e.style.display = "none", t.style.display = "block" }); let o = document.querySelectorAll(".tool-section .tool"), l = document.getElementById("toolCount"); l.textContent = o.length; let r = 0, s = o.length, a = setInterval(() => { r++, l.textContent = r, r >= s && clearInterval(a) }, 20); t.addEventListener("click", () => { n.style.display = "none", e.style.display = "block", t.style.display = "none" }), gsap.from(".logo", { opacity: 0, y: -20, duration: .6, ease: "power2.out" }), gsap.from(".menu a", { opacity: 0, y: -20, duration: .6, ease: "power2.out" }) }); const phrases = ["Image Convertors", "Image Tools", "Pdf-tools", "SEO tools", "Text tools", "Social Media Downloader", "UrL Tools", "barcode Tools", "Email Tools", "Math Tools", "Password Tools", "Video Tools"], typingText = document.getElementById("typing-text"); let currentPhraseIndex = 0, currentCharIndex = 0, isDeleting = !1; function type() { let e = phrases[currentPhraseIndex]; isDeleting ? currentCharIndex-- : currentCharIndex++, typingText.textContent = e.slice(0, currentCharIndex); let t = 50; isDeleting || currentCharIndex !== e.length ? isDeleting && 0 === currentCharIndex && (isDeleting = !1, currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length, t = 500) : (t = 1500, isDeleting = !0), setTimeout(type, t) } type();

 /*let target = 120;
    let count = 0;
    let speed = 20; 

    let counter = document.getElementById("counter");

    let interval = setInterval(() => {
      count++;
      counter.textContent = count;
      if (count === target) {
        clearInterval(interval);
      }
    }, speed);
*/
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    if(answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.padding = '0 20px';
    } else {
      faqItems.forEach(i => {
        i.querySelector('.faq-answer').style.maxHeight = null;
        i.querySelector('.faq-answer').style.padding = '0 20px';
      });
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = '15px 20px';
    }
  });
});