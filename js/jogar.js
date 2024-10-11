const campo = document.querySelectorAll(".botaoCelula");
const indicaNome = document.getElementById('botaoEFrase');
let ganhou = false;
let empatou = false;


let dados = sessionStorage.getItem("jogadores");
let jogadores = JSON.parse(dados);

const jogador1 = jogadores.jogador1;
const jogador2 = jogadores.jogador2;

let jogada = 0

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

        console.log(campo)


        campo.forEach((item) => {
            item.innerHTML = "";
            item.addEventListener("click", function () {
                while(jogada == 0){
                    item.innerHTML = jogadorInicial.simbolo
                    jogada += 1
                }
                let proximo = (jogadorInicial.simbolo == 'X') ? 'O' : 'X';
                item.innerHTML = proximo
                
            })
        });



}


function escolhAleatoria() {
    const opcoes = '12'
    const tamanho = opcoes.length
    return opcoes.charAt(Math.floor(Math.random() * tamanho));
}

