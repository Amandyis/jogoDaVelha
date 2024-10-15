const modal5 = document.getElementById('modal5');

modal5.innerHTML = `
    
        <div>
            <p>Vitória do jogador:<br>
                <span id="ganhador"></span><br>
                Deseja reniciar e jogar<br>novamente?</p>
        </div>
        <div class="mt-auto text-end ">
            <button type="submit" class="btn btn-primary  botaoSalvar m-3" id="btnJogar">Jogar</button>
            <button type="submit" class="btn btn-primary  botaoSalvar" id="btnSair">Sair</button>
        </div>
    `

export function abrirMensagemVitoria(nomeGanhador) {

    modal5.showModal()
    let ganhador = document.getElementById('ganhador');
    ganhador.innerHTML = nomeGanhador
    document.getElementById('btnSair').addEventListener("click", function () {
        modal5.close();
        location.reload();
    })
    document.getElementById('btnJogar')
}