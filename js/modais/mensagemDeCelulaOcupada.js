const modal3 = document.getElementById('modal3')

modal3.innerHTML = `
    
        <div>
            <p>Esse campo já está ocupado, você não pode adicionar seu elemento aqui.<br>
                Jogue novamente.</p>
        </div>
        <div class="mt-auto text-end">
            <button type="submit" class="btn btn-primary  botaoSalvar" id="btnOK">OK</button>
        </div>
    `



export function abrirModalCelulaOcupada(){

    modal3.showModal()
    document.getElementById('btnOK').addEventListener("click", function(){
        modal3.close();
    })
}