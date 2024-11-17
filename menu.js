const menuToggle = document.querySelector('.mobile-menu-toggle');
const headerMenu = document.querySelector('.header-menu');

menuToggle.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
});
