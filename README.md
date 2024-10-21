Jogo da Velha

Bem-vindo ao projeto Jogo da Velha! Este é um clássico jogo de tabuleiro, desenvolvido em HTML, CSS e JavaScript, onde dois jogadores competem para formar uma linha com seus símbolos.

Tecnologias Utilizadas
HTML: Estrutura do jogo e elementos da interface.
CSS: Estilo e layout para uma apresentação visual.
JavaScript: Lógica do jogo e interatividade.

Como Jogar:
Iniciar o Jogo: Clique no botão "Iniciar".
Definir Nome e Símbolo:
Insira seu nome.
Escolha seu símbolo (X ou O).
Após definir seu nome e símbolo, clique em "Jogar".

Objetivo: Os jogadores se revezam para marcar seus símbolos em uma grade 3x3. O objetivo é alinhar três de seus símbolos em sequência:
Horizontal
Vertical
Diagonal

Empate: O jogo termina em empate se todas as casas forem preenchidas e nenhum jogador conseguir alinhar três símbolos.


Clonando o Projeto

1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório onde deseja clonar o projeto.
3. Execute o seguinte comando:
   git clone https://github.com/Amandyis/jogoDaVelha.git

Construindo a Imagem Docker

1. No terminal, certifique-se de que você está no diretório do projeto onde está o Dockerfile.
2. Execute o seguinte comando para construir a imagem:
   docker build -t jogoDaVelha .
3. Após a construção da imagem, execute o seguinte comando para iniciar o container:
   docker run -d -p 8089:89 jogoDaVelha

Rodando a Aplicação Localmente
1. Abra um navegador da web e acesse:
   http://localhost:8089


Divirta-se jogando e boa sorte!