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
    const headerHeight = document.querySelector('header').offsetHeight;
    const ctaDiscover = document.querySelector('#accueil button');

    // Obtenez la position de défilement de la page et la position du CTA "Découvrir nos services"
    const ctaDiscoverPosition = ctaDiscover.getBoundingClientRect().bottom;

    // Vérifiez si le header recouvre totalement le CTA "Découvrir nos services"
    if (ctaDiscoverPosition <= headerHeight) {
        cta.classList.remove('hidden');
    } else {
        cta.classList.add('hidden');
    }
});
