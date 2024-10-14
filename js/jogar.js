const campo = document.querySelectorAll(".botaoCelula");
const indicaNome = document.getElementById('botaoEFrase');
let ganhou = false;
let empatou = false;


let dados = sessionStorage.getItem("jogadores");
let jogadores = JSON.parse(dados);

function escolhAleatoria() {
    const opcoes = '12'
    const tamanho = opcoes.length
    return opcoes.charAt(Math.floor(Math.random() * tamanho));
}

export function jogar() {

    let dados = sessionStorage.getItem("jogadores");
    let jogadores = JSON.parse(dados);

    const jogador1 = jogadores.jogador1;
    const jogador2 = jogadores.jogador2;

    let jogadorAtual = '';

    if (escolhAleatoria() == 1) {
        jogadorAtual = jogador1
    } else {
        jogadorAtual = jogador2
    }

    indicaNome.innerHTML = `<p class="frase">Vez do jogador: ${jogadorAtual.nome}</p>`

    


    campo.forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", function () {
            if (!ganhou && !empatou) {
                item.innerHTML = jogadorAtual.simbolo;
                console.log(campo[2])
                jogadorAtual = (jogadorAtual.simbolo === jogador1.simbolo) ? jogador2 : jogador1;
                indicaNome.innerHTML = `<p class="frase">Vez do jogador: ${jogadorAtual.nome}</p>`;
            }
        });
    });



}




