const menuHamburguer = document.querySelector('.menu-hamburguer');
const navResponsive = document.querySelector('.nav-responsive');

menuHamburguer.addEventListener('click', () => {
    navResponsive.classList.toggle('active');
    menuHamburguer.classList.toggle('change');
});
