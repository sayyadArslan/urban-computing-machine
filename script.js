
  function openMenu() {
    document.querySelector('.side-menu').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
  }

  function closeMenu() {
    document.querySelector('.side-menu').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
  }
  
  const faqs = document.querySelectorAll('.faq-item');

  faqs.forEach(item => {
    const btn = item.querySelector('.faq-question');

    btn.addEventListener('click', () => {
      faqs.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });


