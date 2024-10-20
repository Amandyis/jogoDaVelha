import { abrirModalSimbolo } from "/js/modais/avisoSimbolo.js"

const modal5 = document.getElementById('modal5');

modal5.innerHTML = `
    
        <div>
            <p>Vitória do jogador:<br>
                <span id="ganhador"></span><br>
                Deseja reniciar e jogar<br>novamente?</p>
        </div>
        <div class="mt-auto text-end ">
            <button type="submit" class="btn btn-primary  botaoSalvar m-3" id="btnJogar2">Jogar</button>
            <button type="submit" class="btn btn-primary  botaoSalvar" id="btnSair1">Sair</button>
        </div>
    `

export function abrirMensagemVitoria(nomeGanhador, nomePerdedor) {

    modal5.showModal()
    console.log(nomeGanhador, nomePerdedor)

    let ganhador = document.getElementById('ganhador');

    if (nomeGanhador === "Daniel") {
        ganhador.innerHTML = nomePerdedor
    } else {
        ganhador.innerHTML = nomeGanhador
    }
    document.getElementById('btnSair1').addEventListener("click", function () {
        modal5.close();
        const urlDaPagina = window.location.pathname;
        if (urlDaPagina.includes('index.html')) {
            const novaUrl = urlDaPagina.replace('index.html', '');
            window.location.replace(novaUrl);
        }
        
    })
    document.getElementById('btnJogar2').addEventListener("click", function () {
        modal5.close()
        abrirModalSimbolo()
    })
}