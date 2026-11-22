/* === QUIZ EcoByte === */
(() => {
    const perguntas = [
        {
            texto: "Qual país tem as maiores reservas de lítio do mundo?",
            opcoes: ["Austrália", "Chile", "China", "Argentina"],
            correta: 1,
            explicacao: "O Chile tem cerca de 9,2 milhões de t, ou 24,9% das reservas mundiais (USGS 2026)."
        },
        {
            texto: "Qual país mais extraiu lítio em 2025?",
            opcoes: ["Chile", "China", "Austrália", "Argentina"],
            correta: 2,
            explicacao: "A Austrália extraiu 92 mil t em 2025, a maior produção do mundo (USGS 2026)."
        },
        {
            texto: "Qual a fatia do Brasil nas reservas mundiais de lítio?",
            opcoes: ["1,5%", "11,9%", "24,9%", "4,3%"],
            correta: 0,
            explicacao: "O Brasil tem 0,54 milhão de t, cerca de 1,5% do total mundial."
        },
        {
            texto: "Qual país fabrica mais de 80% das baterias de íon-lítio?",
            opcoes: ["Japão", "Coreia do Sul", "Estados Unidos", "China"],
            correta: 3,
            explicacao: "Segundo a IEA, a China fabrica mais de 80% das baterias de íon-lítio (2025)."
        },
        {
            texto: "Qual estado brasileiro tem mais processos minerários ativos de lítio?",
            opcoes: ["Ceará", "Bahia", "Minas Gerais", "Paraíba"],
            correta: 2,
            explicacao: "Minas Gerais lidera, com 2.103 processos minerários ativos (ANM)."
        }
    ];
 
    const elProgresso = document.getElementById("quiz-progresso");
    const elPergunta = document.getElementById("quiz-pergunta");
    const elOpcoes = document.getElementById("quiz-opcoes");
    const elFeedback = document.getElementById("quiz-feedback");
    const elProxima = document.getElementById("quiz-proxima");
 
    if (!elProgresso || !elPergunta || !elOpcoes || !elFeedback || !elProxima) return;
 
    let atual = 0;
    let acertos = 0;
    let respondida = false;
 
    function mostrarPergunta() {
        const p = perguntas[atual];
        respondida = false;
 
        elProgresso.textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;
        elPergunta.textContent = p.texto;
        elFeedback.textContent = "";
        elFeedback.className = "status-form";
        elProxima.hidden = true;
        elProxima.textContent = atual === perguntas.length - 1 ? "VER RESULTADO" : "PRÓXIMA";
 
        elOpcoes.innerHTML = "";
        p.opcoes.forEach((texto, i) => {
            const botao = document.createElement("button");
            botao.type = "button";
            botao.className = "quiz-opcao";
            botao.textContent = texto;
            botao.addEventListener("click", () => responder(i));
            elOpcoes.appendChild(botao);
        });
    }
 
    function responder(escolhida) {
        if (respondida) return;
        respondida = true;
 
        const p = perguntas[atual];
        const botoes = elOpcoes.querySelectorAll(".quiz-opcao");
        const acertou = escolhida === p.correta;
 
        if (acertou) acertos++;
 
        botoes.forEach((b, i) => {
            b.disabled = true;
            if (i === p.correta) b.classList.add("certa");
            else if (i === escolhida) b.classList.add("errada");
        });
 
        elFeedback.textContent = (acertou ? "Correto! " : "Não foi dessa vez. ") + p.explicacao;
        elFeedback.className = "status-form " + (acertou ? "ok" : "erro");
        elProxima.hidden = false;
        elProxima.focus();
    }
 
    function mostrarResultado() {
        const total = perguntas.length;
        elProgresso.textContent = "Quiz finalizado";
        elPergunta.textContent = `Você acertou ${acertos} de ${total}!`;
        elOpcoes.innerHTML = "";
 
        let mensagem;
        if (acertos === total) mensagem = "Perfeito! Você domina os dados do lítio.";
        else if (acertos >= total / 2) mensagem = "Muito bom! Dê mais uma olhada nas tabelas acima para gabaritar.";
        else mensagem = "Que tal rever os dados desta página e tentar de novo?";
 
        elFeedback.textContent = mensagem;
        elFeedback.className = "status-form " + (acertos >= total / 2 ? "ok" : "erro");
        elProxima.textContent = "REFAZER QUIZ";
        elProxima.hidden = false;
        atual = total; // sinaliza que o quiz acabou
    }
 
    elProxima.addEventListener("click", () => {
        if (atual >= perguntas.length) {
            atual = 0;
            acertos = 0;
            mostrarPergunta();
        } else if (atual === perguntas.length - 1) {
            mostrarResultado();
        } else {
            atual++;
            mostrarPergunta();
        }
    });
 
    mostrarPergunta();
})();