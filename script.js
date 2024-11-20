// Détecte le défilement pour changer le style du header
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });
  
  // Animation de défilement pour les éléments avec la classe 'fadeIn'
  const fadeInElements = document.querySelectorAll('.fadeIn');
  window.addEventListener('scroll', () => {
    fadeInElements.forEach(element => {
      const position = element.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('visible');
      }
    });
  });

  


