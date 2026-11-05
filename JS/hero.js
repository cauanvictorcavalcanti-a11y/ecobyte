// Script para mudar o background da hero a cada 15 segundos

const hero = document.querySelector(".hero");

const imagens = [
    "./img/litio_img/ImpactoLitio1.jpg",
    "./img/litio_img/ImpactoLitio2.jpg",
    "./img/litio_img/ImpactoLitio3.jpg",
    "./img/litio_img/ImpactoLitio4.jpg"
];

let index = 0;

hero.style.backgroundImage = `url("${imagens[index]}")`;

setInterval(() => {
    index = (index + 1) % imagens.length;

    hero.style.backgroundImage = `url("${imagens[index]}")`;

}, 5000);