const campo = document.querySelectorAll(".botaoCelula")
let ganhou = false
let empatou = false

const jogador1 = sessionStorage.getItem('jogadores')

function jogar() {


    campo.forEach(function (elemento) {
        elemento.addEventListener('click', function (event) {
            event.preventDefault();
            let dados = sessionStorage.getItem("jogadores")

        });
    });
}

jogar()

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