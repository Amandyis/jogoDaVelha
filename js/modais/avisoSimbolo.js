import { jogar } from '/js/jogar.js';
// import { jogarNovamente } from '/js/jogarNovamente.js';
const modal6 = document.getElementById('modal6')

modal6.innerHTML = `
    
        <div>
            <p>O jogo iniciará com os<br>
                símbolos trocados</p>
        </div>
        <div class="mt-auto text-end">
            <button type="submit" class="btn btn-primary  botaoSalvar" id="btnOK2">OK</button>
        </div>
    `

function trocarSimbolos() {
    let dados = sessionStorage.getItem("jogadores");
    let jogadores = JSON.parse(dados);

    let troca = jogadores.jogador1.simbolo;
    jogadores.jogador1.simbolo = jogadores.jogador2.simbolo;
    jogadores.jogador2.simbolo = troca;

    sessionStorage.setItem("jogadores", JSON.stringify(jogadores));
}



export function abrirModalSimbolo() {

    modal6.showModal()
    document.getElementById('btnOK2').addEventListener("click", function () {
        modal6.close();
        trocarSimbolos();
        jogar(2);
        window.location.href = 'index2.html';
        // // window.onload = jogarNovamente()
    })
}