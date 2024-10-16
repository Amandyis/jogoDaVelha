import { abrirModalCelulaOcupada } from "./modais/mensagemDeCelulaOcupada.js"
import { verificarVitoria } from "./validacoes/vitoria.js"
import { verificarEmpate } from "./validacoes/empate.js"
import { reiniciarEmpate } from "./validacoes/empate.js"
import { abrirMensagemVitoria } from "./modais/mensagemVitoria.js"

const campo = document.querySelectorAll('.botaoCelula');
const indicaNome = document.getElementById('botaoEFrase');
let ganhou = false;
let empatou = false;

function escolhAleatoria() {
    const opcoes = '12'
    const tamanho = opcoes.length
    return opcoes.charAt(Math.floor(Math.random() * tamanho));
}

let vez;

export function jogar(n) {

    ganhou = false;
    empatou = false;
    vez = n
    reiniciarEmpate();
    if(vez == 2){
        campo.forEach((botao) => {
            botao.innerHTML = "";
            botao.onclick = null;
        })
    }
    

    let dados = sessionStorage.getItem("jogadores");
    let jogadores = JSON.parse(dados);

    let jogador1 = jogadores.jogador1;
    let jogador2 = jogadores.jogador2;

    let jogadorAtual = '';

    if (escolhAleatoria() == 1) {
        jogadorAtual = jogador1
    } else {
        jogadorAtual = jogador2
    }

    indicaNome.innerHTML = `<p class="frase">Vez do jogador: ${jogadorAtual.nome}</p>`

    campo.forEach((item) => {
        item.addEventListener("click", function (event) {
            if (!ganhou && !empatou) {
                if (item.innerHTML.length == 0) {
                    item.innerHTML = jogadorAtual.simbolo;
                    console.log(item.innerHTML.length)
                    empatou = verificarEmpate(item, event)
                    if (empatou) {
                        indicaNome.innerHTML = `<p class="frase">Fim de jogo!</p>`
                        return
                    }
                    const vencedor = verificarVitoria(campo);
                    if (vencedor) {
                        ganhou = true;
                        indicaNome.innerHTML = `<p class="frase">Fim de jogo!</p>`
                        let nomeVencedor = (vencedor === jogador1.simbolo) ? jogador1.nome : jogador2.nome
                        abrirMensagemVitoria(nomeVencedor)
                        return;
                    }
                }
                else {
                    console.log('Entrou no else')
                    abrirModalCelulaOcupada()
                    return
                }

                jogadorAtual = (jogadorAtual.simbolo === jogador1.simbolo) ? jogador2 : jogador1;
                indicaNome.innerHTML = `<p class="frase">Vez do jogador: ${jogadorAtual.nome}</p>`;
            }
            else {
                console.log('Não está entrando no if da jogada')
            }
        });
    });



}