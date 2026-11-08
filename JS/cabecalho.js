// SCRIPT que faz a rolagem mudar de sticky para fixed

const cabeca = document.querySelector(".cabeca");
const espaco = document.querySelector(".espaco-cabecalho");
// a janela percebe o evento scroll e executa a função
window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        cabeca.classList.add("rolagem");
        espaco.style.height = cabeca.offsetHeight + "px";
    } else {
        cabeca.classList.remove("rolagem");
        espaco.style.height = "0px";
    }

}, { passive: true });

const logo = document.querySelector('.logotipo');
// ao clicar no logo, alterna entre o modo escuro e claro
logo.addEventListener('click', () => {
    document.documentElement.classList.toggle('escuro');
});