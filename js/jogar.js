const campo = document.querySelectorAll(".botaoCelula");
const indicaNome = document.getElementById('botaoEFrase');
let ganhou = false;
let empatou = false;

let dados = sessionStorage.getItem("jogadores");
let jogadores = JSON.parse(dados);



export function jogar() {

    let dados = sessionStorage.getItem("jogadores");
    let jogadores = JSON.parse(dados);

    const jogador1 = jogadores.jogador1;
    const jogador2 = jogadores.jogador2;

    let jogadorInicial = '';

    if (escolhAleatoria() == 1) {
        jogadorInicial = jogador1
    } else {
        jogadorInicial = jogador2
    }

    indicaNome.innerHTML = `<p class="frase">Vez do jogador: ${jogadorInicial.nome}</p>`

    campo.forEach(function (elemento) {
        elemento.addEventListener('click', function (event) {
            event.preventDefault();

            console.log('oi')

        });
    });
}


function escolhAleatoria() {
    const opcoes = '12'
    const tamanho = opcoes.length
    return opcoes.charAt(Math.floor(Math.random() * tamanho));
}





// while (ganhou !== true || empatou !== true) {

//     let jogada = 0
//     if (jogada === 0) {
//         escolhAleatoria()
//         jogar()
//         jogada +=1
//     }else{
//         jogar()
//     }
// }