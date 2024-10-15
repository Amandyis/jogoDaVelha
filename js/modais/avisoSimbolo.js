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



export function abrirModalSimbolo(){

    modal6.showModal()
    document.getElementById('btnOK2').addEventListener("click", function(){
        modal6.close();
    })
}