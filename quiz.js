let pontuacao = 0; // Variável para contar as respostas corretas

function verificarResposta(perguntaAtual, resposta, proximaPergunta) {
    const respostasCorretas = {
        'pergunta1': 'Love Love- Gilsons',
        'pergunta2': 'Correr pra dentro do ônibus',
        'pergunta3': 'Quem é essa daí?',
        'pergunta4': 'Buquê',
        'pergunta5': 'Outback',
        'pergunta6': 'Te cheiro',
        'pergunta7': 'Foto minha'
    };

    // Remove as classes de correto/errado dos botões da pergunta atual
    const botoes = document.querySelectorAll(`#${perguntaAtual} .botoes button`);
    botoes.forEach(btn => {
        btn.classList.remove('correto', 'errado');
    });

    // Verifica se a resposta está correta
    if (resposta === respostasCorretas[perguntaAtual]) {
        pontuacao += 1; // Incrementa a pontuação
        // Aplica a classe 'correto' ao botão clicado
        const botaoClicado = Array.from(botoes).find(btn => btn.textContent === resposta);
        if (botaoClicado) {
            botaoClicado.classList.add('correto');
        }
    } else {
        // Aplica a classe 'errado' ao botão clicado
        const botaoClicado = Array.from(botoes).find(btn => btn.textContent === resposta);
        if (botaoClicado) {
            botaoClicado.classList.add('errado');
        }
    }

    // Aguarda 1 segundo e troca para a próxima pergunta
    setTimeout(() => {
        // Esconde a pergunta atual
        document.getElementById(perguntaAtual).style.display = 'none';

        // Mostra a próxima pergunta ou a tela final
        if (proximaPergunta === 'fim') {
            document.getElementById('pontuacao-final').textContent = pontuacao;
            document.getElementById('fim').style.display = 'block';
        } else {
            document.getElementById(proximaPergunta).style.display = 'block';
        }
    }, 1000);
}