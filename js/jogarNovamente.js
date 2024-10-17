import { abrirModalCelulaOcupada } from "./modais/mensagemDeCelulaOcupada.js"
import { verificarVitoria } from "./validacoes/vitoria.js"
import { verificarEmpate } from "./validacoes/empate.js"
import { reiniciarEmpate } from "./validacoes/empate.js"
import { abrirMensagemVitoria } from "./modais/mensagemVitoria.js"

let ganhou = false;
let empatou = false;

const campo = document.querySelectorAll('.botaoCelula');
const indicaNome = document.getElementById('botaoEFrase');

function escolhAleatoria() {
    const opcoes = '12'
    const tamanho = opcoes.length
    return opcoes.charAt(Math.floor(Math.random() * tamanho));
}

export function jogarNovamente() {
    ganhou = false;
    empatou = false;
    reiniciarEmpate();

    campo.forEach((botao) => {
        botao.innerHTML = "";
        botao.onclick = null;
    });

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

    indicaNome.innerHTML = `<p class="frase">Vez do jogador: ${jogadorAtual.nome}</p>`;

    campo.forEach((item) => {
        const handleClick = function (event) {
            if (!ganhou && !empatou) {
                if (item.innerHTML.length === 0) {
                    item.innerHTML = jogadorAtual.simbolo;
                    console.log(`Preenchendo a célula com: ${jogadorAtual.simbolo}`);

                    empatou = verificarEmpate(item, event);
                    if (empatou) {
                        indicaNome.innerHTML = `<p class="frase">Fim de jogo!</p>`;
                        return;
                    }

                    const vencedor = verificarVitoria(campo);
                    if (vencedor) {
                        ganhou = true;
                        indicaNome.innerHTML = `<p class="frase">Fim de jogo!</p>`;
                        let nomeVencedor = (vencedor === jogador1.simbolo) ? jogador1.nome : jogador2.nome;
                        abrirMensagemVitoria(nomeVencedor);
                        return;
                    }

                    // Remover o event listener após preencher a célula
                    item.removeEventListener("click", handleClick);
                    jogadorAtual = (jogadorAtual.simbolo === jogador1.simbolo) ? jogador2 : jogador1;
                    indicaNome.innerHTML = `<p class="frase">Vez do jogador: ${jogadorAtual.nome}</p>`;
                } else {
                    console.log('Entrou no else');
                    abrirModalCelulaOcupada();
                }


            }
        };

        item.addEventListener("click", handleClick);
    });

}
