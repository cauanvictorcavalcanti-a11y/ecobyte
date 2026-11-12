/* === CONTATO === */
(function () {
    const form = document.getElementById('form-contato');
    if (!form) return;

    const status = document.getElementById('status-form');
    const telefone = document.getElementById('telefone');
    const nascimento = document.getElementById('nascimento');
    const mensagem = document.getElementById('mensagem');
    const contador = document.getElementById('contador');

    // data máxima = hoje (sempre atualizada)
    nascimento.max = new Date().toISOString().split('T')[0];

    // máscara de telefone: (00) 00000-0000
    telefone.addEventListener('input', () => {
        let v = telefone.value.replace(/\D/g, '').slice(0, 11);
        if (v.length > 6)      v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
        else if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
        else if (v.length > 0) v = `(${v}`;
        telefone.value = v;
    });

    // contador de caracteres
    mensagem.addEventListener('input', () => {
        contador.textContent = `${mensagem.value.length} / ${mensagem.maxLength}`;
    });

    // envio (simulado: não tem backend)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        status.className = 'status-form';

        const obrigatorios = form.querySelectorAll('[required]');
        let valido = true;

        obrigatorios.forEach((campo) => {
            const ok = campo.checkValidity() && campo.value.trim() !== '';
            campo.classList.toggle('invalido', !ok);
            if (!ok) valido = false;
        });

        if (!valido) {
            status.textContent = 'Preencha os campos obrigatórios corretamente.';
            status.classList.add('erro');
            return;
        }

        status.textContent = 'Mensagem enviada com sucesso! (simulação acadêmica)';
        status.classList.add('ok');
        form.reset();
        contador.textContent = `0 / ${mensagem.maxLength}`;
    });

    // tira o destaque de erro ao digitar
    form.addEventListener('input', (e) => e.target.classList.remove('invalido'));
})();