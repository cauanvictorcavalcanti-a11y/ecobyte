document.addEventListener("DOMContentLoaded", () => {

    // Depois, procura o menu
    const menu = document.querySelector('nav');

    // Só então fica escutando a rolagem
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            menu.classList.add('nav-encolhido');
        } else {
            menu.classList.remove('nav-encolhido');
        }
    });

});