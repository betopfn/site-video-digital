// ARQUIVO: script.js (Lógica Pura)

function navegar(pagina, elementoBotao) {
  const container = document.getElementById("app-content");

  // Acessa a variável 'conteudos' que está no outro arquivo
  if (conteudos[pagina]) {
    container.innerHTML = conteudos[pagina];
  } else {
    container.innerHTML = "<h1>Erro: Conteúdo não encontrado</h1>";
  }

  // Atualiza menu visualmente
  const todosBotoes = document.querySelectorAll(".menu-item");
  todosBotoes.forEach((botao) => botao.classList.remove("active"));

  if (elementoBotao) {
    elementoBotao.classList.add("active");
  }
}

// Inicialização
window.onload = function () {
  const primeiroBotao = document.querySelector(".menu-item");
  navegar("intro", primeiroBotao);
};
