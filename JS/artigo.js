/* === ARTIGOS / FONTES === */
(function () {
    const grid = document.getElementById('grid-artigos');
    if (!grid) return;

    // ====== ADICIONE SUAS FONTES AQUI ======
    // tipo: 'site' | 'documento' | 'video' | 'imagem' | 'noticia'
    const fontes = [
        {
            titulo: 'CETEM - Relatório sobre o Lítio',
            tipo: 'documento',
            descricao: 'Relatório técnico do Centro de Tecnologia Mineral (CETEM) sobre a exploração e impactos do lítio no Brasil.',
            fonte: 'CETEM / CETEMINAS',
            link: 'https://mineralis.cetem.gov.br/bitstream/cetem/1115/1/26.%20LITIO.pdf'
        },
        {
            titulo: 'O Problema das Baterias',
            tipo: 'video',
            descricao: 'Video do Canal Ciência Todo dia em relação a questão das baterias de ion de litio.',
            fonte: 'YouTube',
            link: 'https://www.youtube.com/watch?v=0d0SUjDNW20'
        },
        {
        titulo: 'Tecnologias de extração de lítio de pegmatitos',
        tipo: 'documento',
        descricao: 'Estudo do CETEM sobre as tecnologias para extrair lítio de pegmatitos (espodumênio), o tipo de minério explorado no Brasil.',
        fonte: 'CETEM/MCTI, 2021 (Brunhara e Braga)',
        link: 'https://mineralis.cetem.gov.br/handle/cetem/2435'
    },
    {
        titulo: 'Sumário Mineral 2024: Lítio (ano-base 2023)',
        tipo: 'documento',
        descricao: 'Dados oficiais da Agência Nacional de Mineração sobre a oferta mundial e a produção brasileira de lítio.',
        fonte: 'ANM',
        link: 'https://www.gov.br/anm/pt-br/assuntos/economia-mineral/publicacoes/sumario-mineral/sumario-mineral-brasileiro-2024/litio-2024-ano-base-2023.pdf'
    },
    {
        titulo: 'Exploração de lítio no Jequitinhonha',
        tipo: 'noticia',
        descricao: 'Reportagem de campo sobre moradores vizinhos de uma mina de lítio em Araçuaí e Itinga e as promessas não cumpridas da mineradora.',
        fonte: 'Agência Pública',
        link: 'https://apublica.org/2025/12/exploracao-de-litio-no-jequitinhonha-tem-mais-casas-rachadas-do-que-promessas-cumpridas/'
    },
    {
        titulo: ' exploração de metais críticos impacta comunidades em MG',
        tipo: 'noticia',
        descricao: 'Moradores relatam poeira e barulho constantes após a expansão da mineração. Inclui a recomendação do MPF para rever as autorizações.',
        fonte: 'Agência Brasil / Brasil de Fato',
        link: 'https://www.brasildefato.com.br/2025/10/05/vale-do-litio-exploracao-de-metais-criticos-impacta-comunidades-em-mg/'
    },
    {
        titulo: 'Exploração de lítio amplia contaminação do solo e da água em Minas Gerais',
        tipo: 'noticia',
        descricao: 'Pesquisadores alertam para o risco de contaminação por elementos químicos no Vale do Jequitinhonha, com base em estudos científicos.',
        fonte: 'Pesquisa FAPESP',
        link: 'https://revistapesquisa.fapesp.br/exploracao-de-litio-amplia-contaminacao-do-solo-e-da-agua-em-minas-gerais/'
    },
    {
        titulo: 'O lítio pode ser extraído com menos impacto ambiental?',
        tipo: 'noticia',
        descricao: 'Compara a extração tradicional por evaporação em salares com os novos métodos de extração direta e seus limites.',
        fonte: 'Dialogue Earth',
        link: 'https://dialogue.earth/pt-br/industrias-extrativistas-pt-br/58865-can-lithium-be-produced-with-lower-environmental-impact-latin-america/'
    },
        {
        titulo: 'Mineral Commodity Summaries 2026: Lithium',
        tipo: 'documento',
        descricao: 'Resumo anual do serviço geológico dos EUA com reservas e produção de lítio por país. É a base da tabela de reservas do site (em inglês).',
        fonte: 'USGS, 2026',
        link: 'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-lithium.pdf'
    },
    {
        titulo: 'Global Critical Minerals Outlook 2026',
        tipo: 'documento',
        descricao: 'Relatório anual da Agência Internacional de Energia sobre oferta, demanda e concentração do refino de minerais como o lítio (em inglês).',
        fonte: 'IEA, 2026',
        link: 'https://www.iea.org/reports/global-critical-minerals-outlook-2026'
    },
    {
        titulo: 'Global battery markets are growing strongly, and so are the supply risks',
        tipo: 'documento',
        descricao: 'Comentário da IEA sobre o mercado de baterias de íon-lítio, que passou de US$ 150 bilhões em 2025, e os riscos da fabricação concentrada na China (em inglês).',
        fonte: 'IEA',
        link: 'https://iea.org/commentaries/global-battery-markets-are-growing-strongly-and-so-are-the-supply-risks'
    },
    {
        titulo: 'IEA report counts global cost of China\'s battery dominance',
        tipo: 'noticia',
        descricao: 'Reportagem sobre relatório da IEA: a China concentra de 60% a 100% de cada etapa da fabricação de baterias, e empresas chinesas, coreanas e japonesas somam 99% das células (em inglês).',
        fonte: 'Batteries International, 2026',
        link: 'https://www.batteriesinternational.com/?p=25095'
    },
    {
        titulo: 'Chinese battery market: the road to global energy leadership',
        tipo: 'noticia',
        descricao: 'Análise de consultoria sobre como a China integra desde o refino das matérias-primas até a fabricação das baterias (em inglês).',
        fonte: 'Daxue Consulting',
        link: 'https://daxueconsulting.com/chinese-battery-market-goes-global/'
    },
    {
        titulo: 'Chile quer impulsionar lítio, mas desafios ambientais persistem',
        tipo: 'noticia',
        descricao: 'O Chile planeja explorar novas salinas, enquanto comunidades e especialistas questionam o impacto sobre a água.',
        fonte: 'Dialogue Earth',
        link: 'https://dialogue.earth/pt-br/negocios/chile-litio-estrategia-desafios-ambientais/'
    },
    {
        titulo: 'Explore updated data on metals and minerals',
        tipo: 'imagem',
        descricao: 'No gráfico, você pode ver a participação na produção global de lítio mineral pelos seis maiores produtores em 2024.',
        fonte: 'world in data',
        link: './img/dados/Tabela_Litio_producao.png'
    },
    {
        titulo: 'Developing countries pay environmental cost of electric car batteries',
        tipo: 'noticia',
        descricao: 'Resumo de um relatório da ONU sobre o custo ambiental e social da mineração de minerais para baterias (em inglês).',
        fonte: 'UNCTAD (ONU)',
        link: 'https://unctad.org/news/developing-countries-pay-environmental-cost-electric-car-batteries'
    },
    {
        titulo: 'Rush for critical minerals harming world\'s poorest',
        tipo: 'noticia',
        descricao: 'Reportagem sobre relatório da Universidade das Nações Unidas: mineração de lítio e cobalto ameaça a segurança hídrica (em inglês).',
        fonte: 'SciDev.Net',
        link: 'https://www.scidev.net/global/news/rush-for-critical-minerals-harming-worlds-poorest/'
    },
    {
        titulo: 'Critical Minerals, Water Insecurity and Injustice',
        tipo: 'documento',
        descricao: 'Relatório da Universidade das Nações Unidas (UNU-INWEH) sobre mineração de minerais críticos, água e desigualdade (em inglês).',
        fonte: 'UNU-INWEH',
        link: 'https://unu.edu/sites/default/files/2026-10/UNU-INWEH-Critical-Minerals-Water-Insecurity-and-Injustice.pdf'
    },
    {
        titulo: 'Critical Minerals, Critical Decisions',
        tipo: 'documento',
        descricao: 'Relatório técnico da UNCTAD sobre política industrial e minerais críticos, com foco na América Latina (em inglês).',
        fonte: 'UNCTAD',
        link: 'https://unctad.org/system/files/official-document/gds2025d5_en.pdf'
    },
    {
        titulo: 'Impactos da mineração de lítio: análise comparativa entre Vale do Jequitinhonha e Yichun',
        tipo: 'documento',
        descricao: 'Artigo científico que compara os impactos socioeconômicos e ambientais no Brasil e na China.',
        fonte: 'Revista EixosTech (IF Sul de Minas)',
        link: 'https://eixostech.pas.ifsuldeminas.edu.br/index.php/eixostech/article/view/581/335'
    },
    {
        titulo: 'A corrida pelo lítio: implicações sociais e ambientais na transição energética',
        tipo: 'documento',
        descricao: 'Texto acadêmico em português sobre a exploração no Vale do Jequitinhonha e o papel da compensação financeira (CFEM).',
        fonte: 'USP, Oficina de Direito Ambiental',
        link: 'https://sites.usp.br/oficinadedireitoambiental/wp-content/uploads/sites/232/2024/10/A-Corrida-pelo-Litio-Implicacoes-Sociais-e-Ambientais-na-Transicao-Energetica.pdf'
    },
    {
        titulo: 'Em nome do lítio (documentário)',
        tipo: 'video',
        descricao: 'Documentário sobre o conflito entre comunidades indígenas e a mineração de lítio em Salinas Grandes, na Argentina.',
        fonte: 'Dialogue Earth / FARN',
        link: 'https://dialogue.earth/pt-br/agua/44943-em-nome-do-litio-um-filme-sobre-os-conflitos-da-mineracao-na-argentina/'
    },
    {
        titulo: 'Mineração, Lucro e Devastação: a farsa da transição energética',
        tipo: 'video',
        descricao: 'Documentário que liga os megaprojetos de energia renovável à mineração e aos danos socioambientais, incluindo o Jequitinhonha.',
        fonte: 'Brasil de Fato',
        link: 'https://www.brasildefato.com.br/2026/03/19/nao-existe-transicao-energetica-existe-adicionalidade-documentario-expoe-a-farsa-por-tras-dos-megaprojetos-de-energia-renovavel/'
    },
    {
        titulo: 'Lithium – new gold rush in the Andes',
        tipo: 'video',
        descricao: 'Documentário sobre a corrida pelo lítio nos Andes e seus efeitos nas comunidades locais (em inglês).',
        fonte: 'DW Documentary (YouTube)',
        link: 'https://www.youtube.com/results?search_query=DW+Documentary+Lithium+new+gold+rush+in+the+Andes'
    },
    {
        titulo: 'Fotos do Vale do Lítio (Jequitinhonha)',
        tipo: 'imagem',
        descricao: 'Fotos da exploração de lítio em MG usadas na reportagem, com crédito Agência Minas.',
        fonte: 'Agência Minas (Gil Leonardi / Cristiano Machado)',
        link: 'https://www.brasildefato.com.br/wp-content/uploads/2025/10/litio.webp'
    },
    {
        titulo: 'Imagens de salares e lítio (Wikimedia Commons)',
        tipo: 'imagem',
        descricao: 'Banco de imagens livres, com licença visível em cada arquivo, para ilustrar salares e mineração.',
        fonte: 'Wikimedia Commons',
        link: 'https://commons.wikimedia.org/wiki/File:Salar_de_Atacama_Lithium_salt_ponds_2018.jpg'
    },
    {
        titulo: 'Dialogue Earth (em português)',
        tipo: 'site',
        descricao: 'Plataforma de jornalismo ambiental com várias reportagens sobre lítio e mineração na América Latina.',
        fonte: 'dialogue.earth',
        link: 'https://dialogue.earth/pt-br/'
    },
    {
        titulo: 'Agência Pública',
        tipo: 'site',
        descricao: 'Agência de jornalismo investigativo com cobertura do Vale do Lítio e das mineradoras.',
        fonte: 'apublica.org',
        link: 'https://apublica.org'
    },
    {
        titulo: 'Pesquisa FAPESP',
        tipo: 'site',
        descricao: 'Revista de divulgação científica que traduz estudos acadêmicos brasileiros para o público geral.',
        fonte: 'revistapesquisa.fapesp.br',
        link: 'https://revistapesquisa.fapesp.br'
    }
];
    // ========================================

    const nomesTipo = {
        site: '🌐 Site',
        documento: '📄 Documento',
        video: '🎬 Vídeo',
        imagem: '🖼️ Imagem',
        noticia: '📰 Notícia'
    };

    const busca = document.getElementById('busca-artigos');
    const filtros = document.getElementById('filtros-artigos');
    const contagem = document.getElementById('contagem-artigos');
    const vazio = document.getElementById('vazio-artigos');

    let tipoAtivo = 'todos';

    // remove acentos e deixa minúsculo (busca "noticia" acha "Notícia")
    const normalizar = (t) =>
        t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    // cria uma caixinha
    function criarCard(f) {
        const card = document.createElement('article');
        card.className = 'card-fonte';

        const tag = document.createElement('span');
        tag.className = 'tag-tipo';
        tag.textContent = nomesTipo[f.tipo] || f.tipo;

        const titulo = document.createElement('h2');
        titulo.textContent = f.titulo;

        titulo.classList.add('h2-fonte');

        const desc = document.createElement('p');
        desc.className = 'desc';
        desc.textContent = f.descricao;

        const origem = document.createElement('span');
        origem.className = 'origem';
        origem.textContent = 'Fonte: ' + f.fonte;

        const link = document.createElement('a');
        link.className = 'saiba-mais';
        link.href = f.link;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Acessar fonte';

        card.append(tag, titulo, desc, origem, link);
        return card;
    }

    function renderizar() {
        const termo = normalizar(busca.value.trim());

        const resultado = fontes.filter((f) => {
            const tipoOk = tipoAtivo === 'todos' || f.tipo === tipoAtivo;
            const textoOk = normalizar(f.titulo + ' ' + f.descricao + ' ' + f.fonte).includes(termo);
            return tipoOk && textoOk;
        });

        grid.replaceChildren(...resultado.map(criarCard));
        vazio.hidden = resultado.length > 0;
        contagem.textContent =
            resultado.length + (resultado.length === 1 ? ' fonte encontrada' : ' fontes encontradas');
    }

    busca.addEventListener('input', renderizar);

    filtros.addEventListener('click', (e) => {
        const btn = e.target.closest('.filtro');
        if (!btn) return;
        filtros.querySelectorAll('.filtro').forEach((b) => b.classList.remove('ativo'));
        btn.classList.add('ativo');
        tipoAtivo = btn.dataset.tipo;
        renderizar();
    });

    renderizar();
})();