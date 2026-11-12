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

// antigo ( ele falha pq sempre precisa clicar dnv dps )

/* const logo = document.querySelector('.logotipo');
// ao clicar no logo, alterna entre o modo escuro e claro
logo.addEventListener('click', () => {
    document.documentElement.classList.toggle('escuro');
}); */

// Seleciona o elemento do logotipo
const logoElement = document.querySelector('.logotipo');

// Verifica se o elemento existe antes de adicionar o evento
if (logoElement) {
    // Função para alternar o modo escuro/claro
    const toggleTheme = () => {
        document.documentElement.classList.toggle('escuro');

        // Salva a preferência no localStorage
        const isDark = document.documentElement.classList.contains('escuro');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // Evento de clique no logo
    logoElement.addEventListener('click', toggleTheme);
}

// Aplica o tema salvo ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('escuro');
} else if (savedTheme === 'light') {
    document.documentElement.classList.remove('escuro');
}