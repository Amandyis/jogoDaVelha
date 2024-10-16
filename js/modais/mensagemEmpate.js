const modal4 = document.getElementById('modal4')

modal4.innerHTML = `
    
        <div>
            <p>Deu empate.<br>
                Deseja reiniciar e jogar<br>novamente?</p>
        </div>
        <div class="mt-auto text-end ">
            <button type="submit" class="btn btn-primary  botaoSalvar m-3" id="btnJogar">Jogar</button>
            <button type="submit" class="btn btn-primary  botaoSalvar" id="btnSair">Sair</button>
        </div>
    `



export function abrirMensagemEmpate(){

    modal4.showModal()
    
    document.getElementById('btnSair').addEventListener("click", function(){
        modal4.close();
        location.reload();
    })
    document.getElementById('btnJogar')
}