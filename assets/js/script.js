// Seleciona os elementos
const menuHamburguer = document.querySelector('.menu-hamburguer');
const navResponsive = document.querySelector('.nav-responsive');

// Adiciona um evento de clique ao menu hamburger
menuHamburguer.addEventListener('click', () => {
    // Alterna a classe 'active' no menu responsivo
    navResponsive.classList.toggle('active');
    // Alterna a classe 'change' no menu hamburguer para a animação
    menuHamburguer.classList.toggle('change');
});
