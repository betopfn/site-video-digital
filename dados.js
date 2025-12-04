// ARQUIVO: dados.js
// Banco de Dados de Conteúdo e Questões

// --- 1. BANCO DE QUESTÕES (15 Perguntas para o Quiz) ---
const bancoDeQuestoes = [
  // MÓDULO 1: VÍDEO DIGITAL
  {
    pergunta: "O que é 'Persistência da Visão'?",
    opcoes: [
      "Um defeito na lente da câmera",
      "A capacidade do cérebro de reter uma imagem por uma fração de segundo",
      "O processo de renderização de vídeo",
      "O foco automático da câmera",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual frame rate é considerado o padrão cinematográfico?",
    opcoes: ["30 FPS", "60 FPS", "24 FPS", "120 FPS"],
    correta: 2,
  },
  {
    pergunta: "Qual a resolução do padrão 4K?",
    opcoes: ["1920x1080", "3840x2160", "1280x720", "7680x4320"],
    correta: 1,
  },
  {
    pergunta: "O que significa FPS?",
    opcoes: [
      "Frames Per Second",
      "First Person Shooter",
      "Focus Point System",
      "Frame Processing Speed",
    ],
    correta: 0,
  },

  // MÓDULO 2: ILUMINAÇÃO
  {
    pergunta:
      "No esquema de 3 pontos, qual a função da 'Luz Principal' (Key Light)?",
    opcoes: [
      "Suavizar as sombras",
      "Criar o recorte no cabelo",
      "Definir a iluminação principal e as sombras",
      "Iluminar o fundo (Chroma Key)",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Qual luz é posicionada atrás do sujeito para separá-lo do fundo?",
    opcoes: ["Key Light", "Fill Light", "Back Light", "Softbox"],
    correta: 2,
  },
  {
    pergunta: "Uma temperatura de cor de 3200K é considerada:",
    opcoes: [
      "Luz Fria (Azulada)",
      "Luz Quente (Amarelada)",
      "Luz Neutra (Branca)",
      "Luz Verde (Fluorescente)",
    ],
    correta: 1,
  },
  {
    pergunta: "Para suavizar sombras duras criadas pela luz principal, usamos:",
    opcoes: [
      "Luz de Preenchimento (Fill)",
      "Luz de Contra",
      "Luz do Sol",
      "Flash",
    ],
    correta: 0,
  },

  // MÓDULO 3: ENQUADRAMENTO
  {
    pergunta:
      "Na Regra dos Terços, onde devemos posicionar o ponto de interesse?",
    opcoes: [
      "Exatamente no centro",
      "Nas bordas da imagem",
      "Nas interseções das linhas imaginárias",
      "No canto inferior esquerdo apenas",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual plano corta o personagem da cintura para cima?",
    opcoes: [
      "Plano Geral (Wide)",
      "Plano Médio (Medium)",
      "Close-up",
      "Plano Detalhe",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual plano foca na emoção e no rosto do personagem?",
    opcoes: ["Plano Geral", "Plano Americano", "Plano Conjunto", "Close-up"],
    correta: 3,
  },

  // MÓDULO 4: EDIÇÃO E TÉCNICA
  {
    pergunta: "O que é um Codec?",
    opcoes: [
      "O arquivo final do vídeo (.mp4)",
      "Um software de edição",
      "Um algoritmo que comprime e descomprime o vídeo",
      "Uma peça física da câmera",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual destes é um CODEC e não um container?",
    opcoes: [".MP4", "H.264", ".MOV", ".MKV"],
    correta: 1,
  },
  {
    pergunta: "O que significa Edição Não-Linear (NLE)?",
    opcoes: [
      "Editar cortando a fita física",
      "Editar sem destruir o arquivo original, podendo mover cenas livremente",
      "Editar apenas do início para o fim",
      "Editar sem usar computador",
    ],
    correta: 1,
  },
  {
    pergunta: "O que compõe um Container de vídeo (ex: MP4)?",
    opcoes: [
      "Apenas a imagem",
      "Vídeo comprimido, Áudio e Metadados",
      "Apenas o som",
      "O roteiro do filme",
    ],
    correta: 1,
  },
];

// --- 2. CONTEÚDO DAS PÁGINAS ---
const conteudos = {
  // MÓDULO 1: INTRODUÇÃO
  intro: `
  <span class="tag">Módulo 1</span>
  <h1 class="titulo">Fundamentos do Vídeo Digital</h1>
  
  <p class="texto">
    O vídeo digital não é uma 'fita' contínua, mas sim uma ilusão de ótica. 
    Tecnicamente, ele é uma representação eletrônica de imagens visuais em movimento na forma de dados digitais codificados. 
    Diferente do vídeo analógico, que utiliza sinais de onda contínuos, o vídeo digital converte a luz e a cor em sequências binárias (0s e 1s).
  </p>

  <h2 class="titulo" style="font-size: 1.8rem">A Ilusão do Movimento</h2>
  
  <p class="texto">
    A base de qualquer vídeo é a <strong>Persistência da Visão</strong>. O que vemos como movimento fluido é, na verdade, uma sucessão rápida de imagens estáticas chamadas frames (quadros). 
    Quando exibidos em velocidade suficiente, nosso cérebro funde essas imagens em uma ação contínua.
  </p>

  <div class="video_container">
      <div class="rec_indicator">
          <div class="rec_dot"></div>REC
      </div>
      
      <video controls style="width: 100%; height: 100%; object-fit: contain;">
          <source src="video_com_audio.mp4" type="video/mp4">
          Seu navegador não suporta a tag de vídeo.
      </video>
  </div>

  <h2 class="titulo" style="font-size: 1.8rem">FPS (Frames Per Second)</h2>
  
  <p class="texto">
    A fluidez do vídeo é determinada pelo Frame Rate:
    <br><br>
    <strong>24 FPS:</strong> O padrão do cinema. Cria uma estética mais natural e sonhadora (Motion Blur).<br>
    <strong>30 FPS:</strong> Padrão de TV e transmissões ao vivo.<br>
    <strong>60 FPS+:</strong> Usado em games e esportes para capturar movimentos muito rápidos com nitidez.
  </p>

  <h2 class="titulo" style="font-size: 1.8rem">Resolução e Proporção</h2>
  
  <p class="texto">
    Enquanto o vídeo analógico media qualidade em linhas de varredura, o vídeo digital mede em pixels.
    <br><br>
    <strong>HD (1920x1080):</strong> O padrão atual da web.<br>
    <strong>4K (3840x2160):</strong> Quatro vezes mais pixels que o HD.
    <br><br>Além da qualidade, temos a proporção da tela (Aspect Ratio), como o 16:9 (Widescreen) ou o 9:16 (Stories/TikTok).
  </p>
`,
  // MÓDULO 2: ILUMINAÇÃO
  iluminacao: `
      <span class="tag" style="background: #eab308;">Módulo 2</span>
      <h1 class="titulo">Iluminação Básica</h1>
      <p class="texto">
        Câmeras não enxergam como o olho humano. Elas precisam de ajuda para separar o objeto do fundo e criar profundidade. 
        A regra de ouro do vídeo e do cinema é o <strong>Esquema de 3 Pontos</strong>.
      </p>
      
      <h2 class="titulo" style="font-size: 1.8rem">1. O Triângulo de Iluminação</h2>
      
      <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 16px; margin-bottom: 40px; text-align: center;">
  <img src="diagrama_pontos.png" alt="Esquema de Iluminação de 3 Pontos" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
  <p style="font-size: 0.8rem; color: #aaa; margin-top: 15px;">Figura 1: Diagrama vetorial do esquema de 3 pontos</p>
</div>
  
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px;">
        <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 12px; border-top: 3px solid #eab308;">
          <h3 style="color: #fff; margin-bottom: 10px;">🔑 Principal (Key)</h3>
          <p style="font-size: 0.9rem; color: #ccc;">A luz forte que define as sombras. Fica a 45º do sujeito.</p>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 12px; border-top: 3px solid #a855f7;">
          <h3 style="color: #fff; margin-bottom: 10px;">☁️ Preenchimento</h3>
          <p style="font-size: 0.9rem; color: #ccc;">Suaviza as sombras da principal. Fica do lado oposto.</p>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 12px; border-top: 3px solid #3b82f6;">
          <h3 style="color: #fff; margin-bottom: 10px;">✨ Contra-Luz</h3>
          <p style="font-size: 0.9rem; color: #ccc;">Fica atrás do sujeito. Cria um recorte brilhante no cabelo/ombros.</p>
        </div>
      </div>
  
      <h2 class="titulo" style="font-size: 1.8rem">2. Temperatura de Cor</h2>
      <p class="texto">
        A luz tem "cores" diferentes medidas em Kelvin (K). O balanço de branco (White Balance) serve para corrigir isso na câmera.
      </p>
      <div style="width: 100%; height: 40px; background: linear-gradient(90deg, #ff8c00 0%, #ffe4b5 50%, #e0ffff 100%); border-radius: 20px; margin-bottom: 30px; position: relative;"></div>
    `,

  // MÓDULO 3: ENQUADRAMENTO
  enquadramento: `
      <span class="tag" style="background: #ec4899;">Módulo 3</span>
      <h1 class="titulo">Enquadramentos</h1>
      <p class="texto">
        Enquadrar é decidir o que entra e o que fica fora da tela. Um bom enquadramento guia o olhar do espectador e conta a história sem palavras.
      </p>
  
      <h2 class="titulo" style="font-size: 1.8rem">Regra dos Terços</h2>
      <p class="texto">
        Imagine dividir a tela em 9 quadrados iguais (como um jogo da velha). Os pontos de interesse (olhos, objetos importantes) devem ficar nas interseções dessas linhas, e não no centro morto.
      </p>
      
      <h3 style="margin-bottom: 15px; color: #fff;">Tipos de Planos</h3>
      <div style="display: flex; gap: 15px; margin-bottom: 30px; overflow-x: auto; padding-bottom: 10px;">
         
         <img src="pedro_longe.jpg" alt="Exemplo de Plano Geral" 
              style="min-width: 220px; height: 140px; object-fit: cover; border-radius: 8px; border: 1px solid #555;">

         <img src="pedro_medio.jpg" alt="Exemplo de Plano Médio" 
              style="min-width: 220px; height: 140px; object-fit: cover; border-radius: 8px; border: 1px solid #555;">

         <video controls style="min-width: 220px; height: 140px; object-fit: cover; border-radius: 8px; border: 1px solid #555;">
            <source src="close.mp4" type="video/mp4">
            Seu navegador não suporta a tag de vídeo.
         </video>
              
    </div>
  
      <ul style="color: #cbd5e1; line-height: 1.8; margin-left: 20px; margin-bottom: 30px;">
          <li><strong>Plano Geral (Wide):</strong> Mostra o cenário e onde o personagem está.</li>
          <li><strong>Plano Médio (Medium):</strong> Da cintura para cima. Padrão de diálogos.</li>
          <li><strong>Close-up:</strong> Foco no rosto. Mostra a emoção e o pensamento.</li>
      </ul>
    `,
  // MÓDULO 4: EDIÇÃO E CODECS
  edicao: `
      <span class="tag" style="background: #14b8a6;">Módulo 4</span>
      <h1 class="titulo">Edição e Codecs</h1>
      
      <p class="texto">
        Se a filmagem é a coleta de material, a edição é a construção da narrativa. 
        Hoje usamos sistemas de <strong>Edição Não-Linear (NLE)</strong>, softwares que permitem cortar, mover e alterar cenas sem destruir o arquivo original.
      </p>
  
      <h2 class="titulo" style="font-size: 1.8rem">O que é um Codec?</h2>
      <p class="texto">
        Vídeo cru (RAW) ocupa muito espaço. Um minuto de vídeo 4K sem compressão pode ter gigabytes de tamanho!
        <br><br>
        Para resolver isso, usamos <strong>CODECS</strong> (COmpressor / DECompressor). Eles são algoritmos matemáticos que "jogam fora" informações que o olho humano quase não percebe para deixar o arquivo leve.
      </p>
  
      <div style="display: flex; gap: 20px; margin-bottom: 30px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 250px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; border-left: 4px solid #ef4444;">
          <h3 style="color: #fff; margin-bottom: 10px;">H.264 (AVC)</h3>
          <p style="font-size: 0.9rem; color: #ccc;">O padrão da internet. Compatível com tudo (celulares, TVs, YouTube). Bom equilíbrio entre qualidade e tamanho.</p>
        </div>
        <div style="flex: 1; min-width: 250px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; border-left: 4px solid #22c55e;">
          <h3 style="color: #fff; margin-bottom: 10px;">H.265 (HEVC)</h3>
          <p style="font-size: 0.9rem; color: #ccc;">O sucessor. Mantém a mesma qualidade do H.264 com METADE do tamanho do arquivo, mas exige PC potente para editar.</p>
        </div>
      </div>
  
      <h2 class="titulo" style="font-size: 1.8rem">Container não é Codec!</h2>
      <p class="texto">
        Muitas pessoas confundem o formato do arquivo (.mp4, .mov, .mkv) com o vídeo em si.
        <br>Imagine que o <strong>Container (.mp4)</strong> é uma caixa. Dentro dessa caixa, temos o vídeo (comprimido com um Codec), o áudio e as legendas.
      </p>
  
      <div style="background: #14b8a6; color: #000; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 40px; font-weight: bold;">
        📦 Container MP4 = [ 🎞️ Vídeo H.264 ] + [ 🎵 Áudio AAC ] + [ 📝 Legenda SRT ]
      </div>
    `,

  // TELA INICIAL DO QUIZ
  quiz: `
      <span class="tag" style="background: #fcd34d; color: #000;">Quiz Final</span>
      <h1 class="titulo">Teste seus Conhecimentos</h1>
      <p class="texto">
        O sistema sorteará aleatoriamente <strong>5 perguntas</strong> do nosso banco de dados de 15 questões sobre Vídeo, Iluminação, Enquadramento e Edição.
        <br><br>
        Ao final, você receberá sua nota percentual. Boa sorte!
      </p>
      
      <div id="quiz-container" style="margin-top: 40px; display: flex; flex-direction: column; align-items: start;">
          <button onclick="iniciarQuiz()" style="padding: 15px 30px; background: #fcd34d; border: none; border-radius: 12px; font-weight: 800; cursor: pointer; color: #000; font-size: 1.2rem; transition: 0.3s; display: flex; align-items: center; gap: 10px;">
              <i class="ph-fill ph-play-circle" style="font-size: 24px;"></i>
              Iniciar Desafio
          </button>
      </div>
    `,
};
