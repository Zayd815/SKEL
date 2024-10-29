document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".trusted-carousel");
    const clone = carousel.innerHTML; // Clone le contenu du carousel pour un effet cyclique
    carousel.innerHTML += clone; // Ajoute le clone après le contenu existant pour une boucle continue
});
