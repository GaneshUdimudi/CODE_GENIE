const currentPath = window.location.pathname;
// Corrected 'SelectorAll' to 'querySelectorAll'
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.href.includes(currentPath)) {
        // Corrected 'link.class.add' to 'link.classList.add'
        link.classList.add('active');
    }
});