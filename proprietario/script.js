// Função para carregar os dados salvos no navegador (simulando o banco de dados)
function carregarDashboard() {
    // Carrega o estoque
    let tinta = localStorage.getItem('estoqueTinta') || 10;
    let progressiva = localStorage.getItem('estoqueProgressiva') || 500;
    
    document.getElementById('estoqueTinta').innerText = tinta + ' tubos';
    document.getElementById('estoqueProgressiva').innerText = progressiva + ' ml';

    // Carrega a agenda
    const listaAgendamentos = document.getElementById('listaAgendamentos');
    listaAgendamentos.innerHTML = ''; // Limpa a lista antes de recarregar
    
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

    if (agendamentos.length === 0) {
        listaAgendamentos.innerHTML = '<p class="empty-msg">Nenhum agendamento ainda.</p>';
    } else {
        agendamentos.forEach(ag => {
            const div = document.createElement('div');
            div.classList.add('agendamento-item');
            // Formata o card de agendamento na tela do dono
            div.innerHTML = `
                <strong>${ag.nome}</strong>
                <span>${ag.servico}</span><br>
                <small>📅 ${ag.data}</small>
            `;
            listaAgendamentos.appendChild(div);
        });
    }
}

// Lógica do botão de repor estoque
document.getElementById('reporEstoqueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const produto = document.getElementById('produtoRepor').value;

    if (produto === 'tinta') {
        let atual = parseInt(localStorage.getItem('estoqueTinta'));
        localStorage.setItem('estoqueTinta', atual + 5);
        alert('Estoque de tinta atualizado! (+5 tubos)');
    } else if (produto === 'progressiva') {
        let atual = parseInt(localStorage.getItem('estoqueProgressiva'));
        localStorage.setItem('estoqueProgressiva', atual + 500);
        alert('Estoque de progressiva atualizado! (+500 ml)');
    }
    
    document.getElementById('reporEstoqueForm').reset();
    carregarDashboard(); // Recarrega a tela para mostrar o novo valor na hora
});

// Carrega os dados assim que a página do dono abre
carregarDashboard();

// Atualiza a tela automaticamente a cada 2 segundos para o efeito "tempo real"
setInterval(carregarDashboard, 2000);