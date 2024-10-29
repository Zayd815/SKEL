document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".trusted-carousel");
    const items = carousel.innerHTML; // Clone le contenu du carousel

    // Ajoute le clone du contenu pour un effet cyclique
    carousel.innerHTML += items; 

    // Applique un défilement infini en ajustant l'animation
    let scrollAmount = 0;
    setInterval(() => {
        scrollAmount += 1;
        if (scrollAmount >= carousel.scrollWidth / 2) {
            scrollAmount = 0;
        }
        carousel.scrollTo(scrollAmount, 0);
    }, 20);
});
