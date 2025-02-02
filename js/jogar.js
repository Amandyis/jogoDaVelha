import { abrirModalCelulaOcupada } from "./modais/mensagemDeCelulaOcupada.js"
import { verificarVitoria } from "./validacoes/vitoria.js"
import { verificarEmpate } from "./validacoes/empate.js"
import { reiniciarEmpate } from "./validacoes/empate.js"
import { abrirMensagemVitoria } from "./modais/mensagemVitoria.js"
import { validaJogada } from "./validacoes/celulaOcupada.js"


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

    ganhou = false;
    empatou = false;
    reiniciarEmpate();

    campo.forEach((botao) => {
        botao.innerHTML = "";
        botao.onclick = null;
        botao.classList.remove("ocupado");
    })

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
        item.innerHTML = ""
        let clicado = function (event) {
            // console.log(campo)
            // console.log(item.innerHTML)
            // console.log(item.innerHTML.length)

            if (ganhou == true || empatou == true) { 
                return
            }

            if (validaJogada(item)) {
                item.innerHTML = jogadorAtual.simbolo;
                console.log(`Preenchendo a célula com: ${jogadorAtual.simbolo}`);

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
                    let troll = (nomeVencedor == jogador1.nome) ? jogador2.nome : jogador1.nome;
                    console.log(nomeVencedor, troll)
                    abrirMensagemVitoria(nomeVencedor, troll)
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
        item.removeEventListener("click", clicado);
        item.addEventListener("click", clicado);
        
    });

};



