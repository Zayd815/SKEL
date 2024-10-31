function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});

window.addEventListener('scroll', function() {
    const cta = document.getElementById('cta');
    const aproposTitle = document.querySelector('#apropos h2'); // Sélection du titre "À propos / Notre Mission"
    const headerHeight = document.querySelector('header').offsetHeight;

    // Obtenez la position de défilement de la page et la position du titre "À propos / Notre Mission"
    const aproposTitlePosition = aproposTitle.getBoundingClientRect().top;

    // Vérifiez si le titre est sur le point d'entrer dans la vue
    if (aproposTitlePosition <= window.innerHeight - headerHeight) {
        cta.classList.remove('hidden');
    } else {
        cta.classList.add('hidden');
    }
});
