import {abrirModalCelulaOcupada} from "./modais/mensagemDeCelulaOcupada.js"
import {verificarVitoria} from "./validacoes/vitoria.js"
import {verificarEmpate} from "./validacoes/empate.js"
import {abrirMensagemVitoria} from "./modais/mensagemVitoria.js"

const campo = document.querySelectorAll('.botaoCelula');
const indicaNome = document.getElementById('botaoEFrase');
let ganhou = false;
let empatou = false;

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
        item.addEventListener("click", function (event) {
            if (!ganhou && !empatou) {
                if(item.innerHTML.length === 0){
                    item.innerHTML = jogadorAtual.simbolo;
                    empatou = verificarEmpate(item, event)
                    if(empatou){
                        indicaNome.innerHTML = `<p class="frase">Fim de jogo!</p>`
                        return
                    }
                    const vencedor = verificarVitoria(campo);
                    if (vencedor) {
                        ganhou = true;
                        indicaNome.innerHTML = `<p class="frase">Fim de jogo!</p>`
                        abrirMensagemVitoria(jogadorAtual.nome)
                        return;
                    }
                }
                else{
                    abrirModalCelulaOcupada()
                    return
                }
                
                jogadorAtual = (jogadorAtual.simbolo === jogador1.simbolo) ? jogador2 : jogador1;
                indicaNome.innerHTML = `<p class="frase">Vez do jogador: ${jogadorAtual.nome}</p>`;
            }
        });
    });



}