// Animation d'apparition au défilement pour les sections
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');

  const revealSection = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('hidden'); // Cache la section initialement
  });
});
