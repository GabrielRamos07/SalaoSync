// Inicializa o "banco de dados" no navegador se estiver vazio
if (!localStorage.getItem('estoqueTinta')) {
    localStorage.setItem('estoqueTinta', 10);
    localStorage.setItem('estoqueProgressiva', 500);
    localStorage.setItem('agendamentos', JSON.stringify([]));
}

document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const dataHoraRaw = document.getElementById('dataHora').value;
    const dataFormatada = new Date(dataHoraRaw).toLocaleString('pt-BR');

    // Pega o estoque atual do navegador
    let tinta = parseInt(localStorage.getItem('estoqueTinta'));
    let progressiva = parseInt(localStorage.getItem('estoqueProgressiva'));

    // Verifica e deduz o estoque
    if (servico === 'Coloração') {
        if (tinta >= 1) {
            localStorage.setItem('estoqueTinta', tinta - 1);
        } else {
            alert('Aviso: Horário indisponível por falta de insumos (Tinta).');
            return;
        }
    } else if (servico === 'Progressiva') {
        if (progressiva >= 50) {
            localStorage.setItem('estoqueProgressiva', progressiva - 50);
        } else {
            alert('Aviso: Horário indisponível por falta de insumos (Progressiva).');
            return;
        }
    }

    // Salva o agendamento
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos'));
    agendamentos.push({ nome: nome, servico: servico, data: dataFormatada });
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    // Mostra mensagem de sucesso e limpa o form
    const mensagem = document.getElementById('mensagemSucesso');
    mensagem.classList.remove('hidden');
    setTimeout(() => { mensagem.classList.add('hidden'); }, 3000);
    document.getElementById('agendamentoForm').reset();
});