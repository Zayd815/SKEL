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
