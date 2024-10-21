import { jogarNovamente } from '/js/jogarNovamente.js';
import {abrirModalSimbolo} from "/js/modais/avisoSimbolo.js"

const modal4 = document.getElementById('modal4')

modal4.innerHTML = `
    
        <div>
            <p>Deu empate.<br>
                Deseja reiniciar e jogar<br>novamente?</p>
        </div>
        <div class="mt-auto text-end ">
            <button type="submit" class="btn btn-primary  botaoSalvar m-3" id="btnJogar3">Jogar</button>
            <button type="submit" class="btn btn-primary  botaoSalvar" id="btnSair">Sair</button>
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

export function abrirMensagemEmpate(){

    modal4.showModal()
    
    document.getElementById('btnSair').addEventListener("click", function(){
        modal4.close();
        // const urlDaPagina = window.location.pathname;
        // if (urlDaPagina.includes('index.html')) {
        //     const novaUrl = urlDaPagina.replace('index.html', '');
        //     window.location.replace(novaUrl);
        // }
        window.location.replace('/');
    })
    document.getElementById('btnJogar3').addEventListener("click", function(){
        modal4.close();
        abrirModalSimbolo();
    })
}