// ARQUIVO: quiz.js

let perguntasSorteadas = []; // Vai guardar as 5 perguntas da rodada
let indiceAtual = 0; // Qual pergunta estamos respondendo (0 a 4)
let acertos = 0; // Contador de pontos

function iniciarQuiz() {
  acertos = 0;
  indiceAtual = 0;

  // 1. SORTEIO ALEATÓRIO (Shuffle)
  // Cria uma cópia do banco para não estragar o original e embaralha
  const embaralhado = [...bancoDeQuestoes].sort(() => 0.5 - Math.random());

  // Pega apenas as 5 primeiras perguntas
  perguntasSorteadas = embaralhado.slice(0, 5);

  // 2. MOSTRAR A PRIMEIRA PERGUNTA
  mostrarPergunta();
}

function mostrarPergunta() {
  const q = perguntasSorteadas[indiceAtual];
  const container = document.getElementById("quiz-container");

  // Gera o HTML da pergunta dinamicamente
  let html = `
        <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="margin-bottom: 20px; font-size: 0.9rem; color: #aaa;">
                Pergunta ${indiceAtual + 1} de 5
            </div>
            
            <h2 style="margin-bottom: 30px; color: #fff;">${q.pergunta}</h2>
            
            <div style="display: flex; flex-direction: column; gap: 10px;">
    `;

  // Gera os botões das opções
  q.opcoes.forEach((opcao, index) => {
    html += `
            <button onclick="verificarResposta(${index})" 
                    style="padding: 15px; text-align: left; background: rgba(0,0,0,0.3); border: 1px solid #444; color: #ddd; border-radius: 8px; cursor: pointer; transition: 0.2s;"
                    onmouseover="this.style.background='rgba(139, 92, 246, 0.2)'"
                    onmouseout="this.style.background='rgba(0,0,0,0.3)'">
                ${opcao}
            </button>
        `;
  });

  html += `</div></div>`;

  container.innerHTML = html;
}

function verificarResposta(indiceEscolhido) {
  const q = perguntasSorteadas[indiceAtual];

  // Verifica se acertou
  if (indiceEscolhido === q.correta) {
    acertos++;
  }

  // Avança para a próxima
  indiceAtual++;

  if (indiceAtual < 5) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const container = document.getElementById("quiz-container");

  // Cálculo da porcentagem [Requisito do trabalho]
  const porcentagem = (acertos / 5) * 100;

  let mensagem = "";
  let cor = "";

  if (porcentagem === 100) {
    mensagem = "PERFEITO! Você é um mestre multimídia!";
    cor = "#22c55e"; // Verde
  } else if (porcentagem >= 60) {
    mensagem = "Muito bem! Você entende do assunto.";
    cor = "#fcd34d"; // Amarelo
  } else {
    mensagem = "Que tal revisar os módulos?";
    cor = "#ef4444"; // Vermelho
  }

  container.innerHTML = `
        <div style="text-align: center; animation: fadeIn 0.5s;">
            <i class="ph-fill ph-trophy" style="font-size: 64px; color: ${cor}; margin-bottom: 20px;"></i>
            <h2 style="font-size: 2.5rem; margin-bottom: 10px;">${porcentagem}% de Acerto</h2>
            <p style="font-size: 1.2rem; color: #ccc; margin-bottom: 30px;">${mensagem} (${acertos}/5)</p>
            
            <button onclick="iniciarQuiz()" style="padding: 12px 24px; background: #fff; color: #000; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">
                Tentar Novamente
            </button>
        </div>
    `;
}
