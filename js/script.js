// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // ScrollReveal effects
  ScrollReveal().reveal('.card', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
  });
  
  ScrollReveal().reveal('.hero h1, .hero p, .btn', {
    duration: 1500,
    origin: 'left',
    distance: '100px'
  });
  